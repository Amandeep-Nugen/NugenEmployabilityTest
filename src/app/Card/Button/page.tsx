"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../library/apislice";
import { RootState } from "@/app/library/store";
import Cookies from "js-cookie";

interface Result {
  age: number;
  date: string;
  email: string;
  gender: string;
  value: number;
  title: string;
  first: string;
  last: string;
  nat: string;
  phone: string;
  md5: string;
  password: string;
  salt: string;
  sh1: string;
  sha256: string;
  username: string;
  city: string;
  country: string;
  postcode: number;
  state: string;
  description: string;
  number: number;
  id: { name: string; value: string };
  name: { title: string; first: string; last: string };
  dob: { age: number; date: string };
  login: {
    md5: string;
    password: string;
    salt: string;
    sha1: string;
    sha256: string;
    username: string;
  };
  location: {
    city: string;
    country: string;
    postcode: number;
    state: string;
    street: {
      name: string;
      number: number;
    };
    timezone: {
      description: string;
    };
  };
}

const ApiComponent: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.api.data);

  const ApiCall = () => {
    setIsLoading(true);
    const url = "https://randomuser.me/api/?results=5";
    fetch(url)
      .then((response) => response.json())
      .then((data: { results: Result[] }) => {
        dispatch(setData(data.results));
        Cookies.set("apiData", JSON.stringify(data.results));
      })
      .catch((error) => {
        console.error("Error while fetching the data:", error);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="w-full h-screen bg-zinc-200">
      <div className="flex justify-center items-center flex-col gap-3">
        <h1>Welcome to the Testing for test</h1>
        <h1>For dynamic routing give route on same page url</h1>
        <button
          className="border-2 border-black px-3 py-1 bg-zinc-200 flex items-center justify-center hover:bg-green-400"
          onClick={ApiCall}
        >
          Submit
        </button>
      </div>
      <h1
        className={`${
          isLoading
            ? "bg-green-500 text-white text-center pt-2 border border-black"
            : "border-black"
        }`}
      >
        {isLoading ? "Api signal fetched" : ""}
      </h1>
      <div>
        {data.length > 0 ? (
          data.map((item, index) => (
            <div key={index} className="p-2 border border-black text-center">
              <p>Name: {`${item.name.first} ${item.name.last}`}</p>
              <p>Age: {item.dob.age}</p>
              <p>Email: {item.email}</p>
              <p>Gender: {item.gender}</p>
              <p>Country: {item.location.country}</p>
            </div>
          ))
        ) : (
          <p className="text-center">No data available.</p>
        )}
      </div>
    </div>
  );
};

export default ApiComponent;
