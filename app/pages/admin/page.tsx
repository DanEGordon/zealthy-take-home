"use client";

import React from "react";
import { useState } from "react";
import { useFormContext } from "../../context";
import { useRouter } from "next/navigation";
import PageSelector from "../../components/pageSelector";

const Admin = () => {
  const determineInitialPage = (field: string) => {
    const pageTwoArray = form.pageTwo;
    if (pageTwoArray.includes(field)) {
      return "2";
    }
    return "3";
  };

  const router = useRouter();

  const { form, setForm } = useFormContext();
  const [aboutMePage, setaboutMePage] = useState(determineInitialPage("about"));
  const [addressPage, setAddressPage] = useState(
    determineInitialPage("address")
  );
  const [birthdatePage, setBirthdatePage] = useState(
    determineInitialPage("birthdate")
  );

  const onSubmit = () => {
    const pageTwoFields: string[] = [];
    const pageThreeFields: string[] = [];

    const pushToFieldArray = (state: string, tag: string) => {
      if (state === "2") {
        pageTwoFields.push(tag);
      } else {
        pageThreeFields.push(tag);
      }
    };

    pushToFieldArray(aboutMePage, "about");
    pushToFieldArray(addressPage, "address");
    pushToFieldArray(birthdatePage, "birthdate");

    const newForm = form;
    newForm.pageTwo = pageTwoFields;
    newForm.pageThree = pageThreeFields;
    setForm(newForm);

    router.push("/");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1>Admin Page</h1>
      <div className="w-96 text-center font-semibold">
        Select where you want each field to appear. Each page must have at least
        one field{" "}
      </div>
      <form action={onSubmit}>
        <PageSelector
          id="about"
          text="'About me' Input'"
          checkedValue={aboutMePage}
          onInput={setaboutMePage}
        />
        <PageSelector
          id="address"
          text="'Address' Input'"
          checkedValue={addressPage}
          onInput={setAddressPage}
        />
        <PageSelector
          id="birthdate"
          text="'Birth Date' Input'"
          checkedValue={birthdatePage}
          onInput={setBirthdatePage}
        />
        <div className="text-center">
          <button
            type="submit"
            disabled={
              aboutMePage === addressPage && addressPage === birthdatePage
            }
          >
            Set Fields
          </button>
        </div>
      </form>
    </div>
  );
};

export default Admin;
