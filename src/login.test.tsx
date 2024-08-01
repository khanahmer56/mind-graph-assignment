import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

describe("LoginPage", () => {
  test("renders Login page", () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByText(/login/i)).toBeInTheDocument();
  });

  test("shows error on empty submission", () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText(/login/i));

    expect(
      screen.getByText(/username and password are required/i)
    ).toBeInTheDocument();
  });

  test("shows error on invalid credentials", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
      })
    ) as jest.Mock;

    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: "invaliduser" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "invalidpass" },
    });
    fireEvent.click(screen.getByText(/login/i));

    await waitFor(() => {
      expect(
        screen.getByText(/invalid username or password/i)
      ).toBeInTheDocument();
    });
  });

  test("redirects on successful login", async () => {
    const mockNavigate = jest.fn();
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useNavigate: () => mockNavigate,
    }));

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            token: "12345",
            username: "emilys",
            email: "emily@example.com",
          }),
      })
    ) as jest.Mock;

    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: "emilys" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "emilyspass" },
    });
    fireEvent.click(screen.getByText(/login/i));

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith("/dashboard");
    });
  });
});
