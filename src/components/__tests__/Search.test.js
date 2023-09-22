import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Body from "../Body";
import MOCK_DATA from "../mocks/resListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { fireEvent } from "@testing-library/dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should search res list for burger text input", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(9);

  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "burger" } });
  fireEvent.click(searchBtn);
  //   expect(searchBtn).toBeInTheDocument();
  const cardsAfterSearch = screen.getAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(1);
});

it("should filter top rated restaurant", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBeforeFilter = screen.getAllByTestId("resCard");
  expect(cardsBeforeFilter.length).toBe(9);
  const topRatedButton = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  fireEvent.click(topRatedButton);
  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(8);
});
