"use client";

import AboutMe from "../../components/aboutMe";
import Address from "../../components/address";
import Birthdate from "../../components/birthdate";
import { useFormContext } from "../../context";
import Link from "next/link";

const PageTwo = () => {
  const { form } = useFormContext();
  const pageTwoArray = form.pageTwo;

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {pageTwoArray.includes("about") && (
        <div className="m-4">
          <AboutMe />
        </div>
      )}
      {pageTwoArray.includes("address") && (
        <div className="m-4">
          <Address />
        </div>
      )}
      {pageTwoArray.includes("birthdate") && (
        <div className="m-4">
          <Birthdate />
        </div>
      )}

      <button>
        <Link href="/pages/pageThree">Next</Link>
      </button>
    </div>
  );
};

export default PageTwo;
