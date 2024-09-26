"use client";

import React, { useState, useEffect } from "react";

type User = {
  email: string;
  password: string;
  about: string;
  address: string;
  birthdate: string;
  id: number;
};

const page = () => {
  const [userList, setUserList] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/get-users");
        const json = await response.json();
        setUserList(json.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (userList.length === 0) {
    return <div>Loading user data...</div>;
  }

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
          {userList.map((row: User) => (
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
