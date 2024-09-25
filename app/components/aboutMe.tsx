"use client";

import { useState, useEffect } from "react";
import { useFormContext } from "../context";

const AboutMe = () => {
  const { form, setForm } = useFormContext();
  const [aboutMe, setAboutMe] = useState("");

  useEffect(() => {
    const newForm = form;
    newForm.aboutMe = aboutMe;
    setForm(newForm);
  }, [aboutMe]);

  return (
    <label>
      <div className="m-1">Tell us about yourself: </div>
      <textarea
        name="aboutContent"
        rows={4}
        cols={40}
        value={aboutMe}
        onChange={(e) => setAboutMe(e.target.value)}
      />
    </label>
  );
};

export default AboutMe;
