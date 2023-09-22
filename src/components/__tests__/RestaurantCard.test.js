import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render restaurant card with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  //2:31
  const name = screen.getByText("KFC");
  expect(name).toBeInTheDocument();
});
