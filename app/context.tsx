"use client";

import {
  createContext,
  SetStateAction,
  Dispatch,
  ReactNode,
  useState,
  useContext,
} from "react";

export type Form = {
  pageTwo: string[];
  pageThree: string[];
  userName: string;
  password: string;
  aboutMe: string;
  address: AddressObject;
  birthdate: string;
};

export type AddressObject = {
  streetAddress: string;
  city: string;
  state: string;
  zip: string;
};

export interface FormContextInterface {
  form: Form;
  setForm: Dispatch<SetStateAction<Form>>;
}

const emptyAddress: AddressObject = {
  streetAddress: "",
  city: "",
  state: "",
  zip: "",
};

const defaultState = {
  form: {
    pageTwo: ["about", "address"],
    pageThree: ["birthdate"],
    userName: "",
    password: "",
    aboutMe: "",
    address: emptyAddress,
    birthdate: "",
  },
} as FormContextInterface;

export const FormContext = createContext(defaultState);

type FormProviderProps = {
  children: ReactNode;
};

export default function FormContextProvider({ children }: FormProviderProps) {
  const [form, setForm] = useState<Form>({
    pageTwo: ["about", "address"],
    pageThree: ["birthdate"],
    userName: "",
    password: "",
    aboutMe: "",
    address: emptyAddress,
    birthdate: "",
  });

  return (
    <FormContext.Provider value={{ form, setForm }}>
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  const context = useContext(FormContext);
  return context;
}
