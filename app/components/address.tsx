"use client";

import React from "react";
import { useFormContext } from "../context";
import { useState, useEffect } from "react";
import TextInput from "./textInput";

const Address = () => {
  const { form, setForm } = useFormContext();

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  useEffect(() => {
    const newForm = form;
    newForm.address = {
      streetAddress: address,
      city: city,
      state: state,
      zip: zip,
    };
    setForm(newForm);
  }, [address, city, state, zip]);

  return (
    <form>
      <TextInput
        id="street adress"
        text="Street Address:"
        value={address}
        onInput={setAddress}
      />
      <TextInput id="city" text="City:" value={city} onInput={setCity} />
      <TextInput id="state" text="State:" value={state} onInput={setState} />
      <TextInput id="zip" text="Zip Code:" value={zip} onInput={setZip} />
    </form>
  );
};

export default Address;
