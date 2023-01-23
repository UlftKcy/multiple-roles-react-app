import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Login from "../pages/auth/Login";
import userEvent from '@testing-library/user-event'

describe("Login tests", () => {
    const loginRoute = "/login";
    afterEach(() => {
        cleanup();
    });
    test("renders Register page", () => {
        render(
            <MemoryRouter initialEntries={[loginRoute]}>
                <Login />
            </MemoryRouter>
        );
        expect(screen.getByRole("heading")).toBeInTheDocument();
    });
    test("email input should be empty", () => {
        render(
            <MemoryRouter initialEntries={[loginRoute]}>
                <Login />
            </MemoryRouter>
        );
        expect(getEmail().value).toBe("");
    });
    test("password input should be empty", () => {
        render(
            <MemoryRouter initialEntries={[loginRoute]}>
                <Login />
            </MemoryRouter>
        );
        expect(getPassword().value).toBe("");
    });
    test("email should be changed", async () => {
        render(
            <MemoryRouter initialEntries={[loginRoute]}>
                <Login />
            </MemoryRouter>
        );

        fireEvent.change(getEmail(), { target: { value: "test@test.com" } });
        await waitFor(() => {
            expect(getEmail()).toHaveValue("test@test.com");
        });
    });
    test("password input should be changed", async () => {
        render(
            <MemoryRouter initialEntries={[loginRoute]}>
                <Login />
            </MemoryRouter>
        );

        fireEvent.change(getPassword(), { target: { value: "12345678" } });
        await waitFor(() => {
            expect(getPassword()).toHaveValue("12345678");
        });
    });
    test("onSubmit is called after all inputs pass validation", async () => {
        const handleSubmit = jest.fn((e) => e.preventDefault());
        render(
            <MemoryRouter initialEntries={[loginRoute]}>
                <Login onSubmit={handleSubmit} />
            </MemoryRouter>
        );
        const user = userEvent.setup();

        await user.type(getEmail(), "test@test.com");
        await user.type(getPassword(), "12345678");

        await user.click(clickSubmitButton());

    });

})
function getEmail() {
    return screen.getByRole('textbox', {
        name: /email/i
    });
};
function getPassword() {
    return screen.getByLabelText(/password/i);
};
function clickSubmitButton() {
    return screen.getByRole('button', {
        name: /login/i
    })
}