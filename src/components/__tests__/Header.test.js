const { render, screen, fireEvent } = require("@testing-library/react");
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should load Header with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: "Login" });
  // const loginButton = screen.getByText("Login");
  expect(loginButton).toBeInTheDocument();
});

it("should render Header with a cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartItems = screen.getByText("Cart - (0 items)");
  // const loginButton = screen.getByText("Login");
  expect(cartItems).toBeInTheDocument();
});

it("should render Header component with a cart", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cart = screen.getByText(/Cart/);
  // const loginButton = screen.getByText("Login");
  expect(cart).toBeInTheDocument();
});

it("should change login button to logout button on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton)
  const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();
});