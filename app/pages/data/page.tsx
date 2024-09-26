"use client";

import React from "react";
import prisma from "@/lib/prisma";

const getUserData = async () => {
  const userData = await prisma.userInfo.findMany();
  return userData;
};

const page = async () => {
  const userInfo = await getUserData();

  return (
    <div>
      <h1 className="m-4">This is the Data</h1>
      <table>
        <thead>
          <tr>
            <th>Email Address</th>
            <th>Password</th>
            <th>About</th>
            <th>Address</th>
            <th>Birthdate</th>
          </tr>
        </thead>
        <tbody>
          {userInfo.map((row) => (
            <tr key={row.id}>
              <td className="border border-black max-w-64 p-2">
                {row.password}
              </td>
              <td className="border border-black max-w-64 p-2">{row.email}</td>
              <td className="border border-black max-w-64 p-2">{row.about}</td>
              <td className="border border-black max-w-64 p-2">
                {row.address}
              </td>
              <td className="border border-black max-w-64 p-2">
                {row.birthdate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default page;
