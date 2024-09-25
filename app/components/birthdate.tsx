"use client";

import React from "react";
import { useFormContext } from "../context";
import { useState, useEffect } from "react";

const Birthdate = () => {
  const { form, setForm } = useFormContext();
  const [date, setDate] = useState("");

  useEffect(() => {
    const newForm = form;
    newForm.birthdate = date;
    setForm(newForm);
  }, [date]);

  return (
    <>
      Enter Birth Date:
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
    </>
  );
};

export default Birthdate;
