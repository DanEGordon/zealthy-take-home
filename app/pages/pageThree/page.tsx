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
    const email = form.userName;
    const password = form.password;
    const about = form.aboutMe;
    const addressObject = form.address;
    const address =
      addressObject.streetAddress +
      ", " +
      addressObject.city +
      " " +
      addressObject.state +
      ", " +
      addressObject.zip;
    const birthdate = form.birthdate;

    if (!email) throw new Error("Email is absent");
    if (!password) throw new Error("Password is absent");
    if (!about) throw new Error("About Me section is absent");
    if (!address.replaceAll(",", "")) throw new Error("Address is absent");
    if (!birthdate) throw new Error("Birthdate is absent");

    try {
      await fetch("/api/add-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, about, address, birthdate }),
      });
    } catch (error) {
      console.error(error);
    }

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
