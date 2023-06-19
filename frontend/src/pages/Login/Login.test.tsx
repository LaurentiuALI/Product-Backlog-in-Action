import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Login from ".";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import * as ReactRouter from "react-router";

const queryClient = new QueryClient();

const MockLogin: React.FC = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Login />
      </QueryClientProvider>
    </BrowserRouter>
  );
};

describe("Login", () => {
  it("should render the component", () => {
    render(<MockLogin />);

    expect(screen.getByText("Project Name")).toBeInTheDocument();
    expect(screen.getByText("Project password")).toBeInTheDocument();
    expect(screen.getByText("Log in")).toBeInTheDocument();
    expect(screen.getByText("New project?")).toBeInTheDocument();
  });

  it("should submit the form and call loginUser mutation", () => {
    render(<MockLogin />);

    const spy = vi.spyOn(ReactRouter, "useNavigate");

    const projectNameInput = screen.getByPlaceholderText(
      /Please enter project name.../i
    );
    const passwordInput = screen.getByPlaceholderText(
      /Please enter project password.../i
    );
    const loginButton = screen.getByText("Log in");

    fireEvent.change(projectNameInput, { target: { value: "exampleProject" } });
    fireEvent.change(passwordInput, { target: { value: "examplePassword" } });
    fireEvent.click(loginButton);
    expect(spy).toHaveBeenCalledTimes(2);
    expect(projectNameInput).toHaveValue("exampleProject");
    expect(passwordInput).toHaveValue("examplePassword");
  });
});
