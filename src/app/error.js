"use client";
import React from "react";
import { useEffect } from "react";
function Error({ error, reset }) {
  useEffect(function () {
    console.log(error);
  }, []);
  return (
    <div className="text-center mt-10">
      <h1>Something went wrong</h1>
      <button className="hover:text-amber-600" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}

export default Error;
