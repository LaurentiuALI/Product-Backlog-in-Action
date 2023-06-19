import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Register from ".";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import * as ReactRouter from "react-router";

const queryClient = new QueryClient();

const MockRegister: React.FC = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Register />
      </QueryClientProvider>
    </BrowserRouter>
  );
};

describe("Register", () => {
  it("should render the component", () => {
    render(<MockRegister />);

    expect(screen.getByText("Project Name")).toBeInTheDocument();
    expect(screen.getByText("Project password")).toBeInTheDocument();
    expect(screen.getByText("Register")).toBeInTheDocument();
    expect(screen.getByText(/Already/i)).toBeInTheDocument();
  });

  it("should submit the form and call loginUser mutation", () => {
    render(<MockRegister />);

    const spy = vi.spyOn(ReactRouter, "useNavigate");

    const projectNameInput = screen.getByPlaceholderText(
      /Please enter project name.../i
    );
    const passwordInput = screen.getByPlaceholderText(
      /Please enter project password.../i
    );
    const loginButton = screen.getByText("Register");

    fireEvent.change(projectNameInput, { target: { value: "exampleProject" } });
    fireEvent.change(passwordInput, { target: { value: "examplePassword" } });
    fireEvent.click(loginButton);
    expect(spy).toHaveBeenCalledTimes(2);
    expect(projectNameInput).toHaveValue("exampleProject");
    expect(passwordInput).toHaveValue("examplePassword");
  });
});
