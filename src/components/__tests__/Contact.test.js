import { screen, render } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test case", () => {
  // beforeAll(() => {
  //   console.log("before all");
  // });

  // beforeEach(() => {
  //   console.log("before each");
  // });

  // afterAll(() => {
  //   console.log("after all");
  // });

  // afterEach(() => {
  //   console.log("after each");
  // });
  it("should load contact component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("should load button inside contact component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("should load input name inside contact component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument();
  });

  test("should load 2 input boxes in contact component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
  });
});
