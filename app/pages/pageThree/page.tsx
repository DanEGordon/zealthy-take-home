"use client";

import React from "react";
import AboutMe from "../../components/aboutMe";
import Address from "../../components/address";
import Birthdate from "../../components/birthdate";
import { useFormContext } from "../../context";
import { useRouter } from "next/navigation";

const PageThree = () => {
  const { form } = useFormContext();
  const pageThreeArray = form.pageThree;
  const router = useRouter();

  const onSubmit = async () => {
    router.push("/pages/data");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {pageThreeArray.includes("about") && (
        <div className="m-4">
          <AboutMe />
        </div>
      )}
      {pageThreeArray.includes("address") && (
        <div className="m-4">
          <Address />
        </div>
      )}
      {pageThreeArray.includes("birthdate") && (
        <div className="m-4">
          <Birthdate />
        </div>
      )}
      <button onClick={onSubmit}>Finalize Profile</button>
    </div>
  );
};

export default PageThree;
