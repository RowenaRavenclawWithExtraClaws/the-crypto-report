import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import BlocksPagination from "../components/blocksPagination";
import BlocksTable from "../components/blocksTable";
import Title from "../components/title";
import store from "../redux/store";

describe("testing blocks data table rendering", () => {
  const testCases = [
    {
      case: [{ hash: "sadhkdg32432", height: 11431, time: 132124 }],
      expected: "sadhkdg32432",
    },
    {
      case: [{ hash: "sadh234867sgahj328", height: 5426, time: 734598 }],
      expected: "sadh234867sgahj328",
    },
    {
      case: [{ hash: "sa34fetwj328", height: 897364, time: 978000 }],
      expected: "sa34fetwj328",
    },
  ];

  testCases.forEach((testCase, indx) =>
    test(`test case ${indx + 1}`, () => {
      render(<BlocksTable blocks={testCase.case} />);

      expect(screen.getByText(testCase.case[0].hash)).toHaveTextContent(
        testCase.expected
      );
    })
  );
});

describe("testing pagination component rendering", () => {
  const testCases = [
    {
      case: 1,
      expected: "",
    },
    {
      case: 2,
      expected: "",
    },
    {
      case: 15,
      expected: "",
    },
  ];

  testCases.forEach((testCase, indx) =>
    test(`test case ${indx + 1}`, () => {
      render(
        <Provider store={store}>
          <BlocksPagination pageCount={testCase.case} />
        </Provider>
      );

      expect(screen.getByTitle("pagination-component")).toHaveTextContent(
        testCase.case.toString()
      );
    })
  );
});

describe("testing title rendering", () =>
  test(`test case 1`, () => {
    render(<Title />);

    expect(screen.getByText("The Crypto Report")).toHaveTextContent(
      "The Crypto Report"
    );
  }));
