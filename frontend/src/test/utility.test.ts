import React from "react";
import { queryStrings } from "../utility/constants";
import { getBlocks, unslugify } from "../utility/utility";

describe("testing unslugify function", () => {
  const testCases = [
    { case: "something_new", expected: "Something new" },
    { case: "New_Job", expected: "New Job" },
    { case: "Crypto_nuri", expected: "Crypto nuri" },
    { case: "nuri_cryto_challenge", expected: "Nuri cryto challenge" },
  ];

  testCases.forEach((testCase, indx) =>
    test(`test case ${indx + 1}`, () => {
      expect(unslugify(testCase.case)).toBe(testCase.expected);
    })
  );
});

describe("testing blocks data table rendering", () => {
  const testCases = [
    { case: "something_new", expected: "Something new" },
    { case: "New_Job", expected: "New Job" },
    { case: "Crypto_nuri", expected: "Crypto nuri" },
    { case: "nuri_cryto_challenge", expected: "Nuri cryto challenge" },
  ];

  testCases.forEach((testCase, indx) =>
    test(`test case ${indx + 1}`, () => {
      expect(unslugify(testCase.case)).toBe(testCase.expected);
    })
  );
});
