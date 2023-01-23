import {
    cleanup,
    fireEvent,
    render,
    screen,
    waitFor,
} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Register from "../pages/auth/Register";
import userEvent from '@testing-library/user-event'

describe("Register tests", () => {
    const registerRoute = "/register";
    afterEach(() => {
        cleanup();
    });
    test("renders Register page", () => {
        render(
            <MemoryRouter initialEntries={[registerRoute]}>
                <Register />
            </MemoryRouter>
        );
        expect(screen.getByRole("heading")).toBeInTheDocument();
    });
    test("first_name input should be empty", () => {
        render(
            <MemoryRouter initialEntries={[registerRoute]}>
                <Register />
            </MemoryRouter>
        );
        expect(getfirstName().value).toBe("");
    });
    test("last_name input should be empty", () => {
        render(
            <MemoryRouter initialEntries={[registerRoute]}>
                <Register />
            </MemoryRouter>
        );
        expect(getlastName().value).toBe("");
    });
    test("occupation input should be empty", () => {
        render(
            <MemoryRouter initialEntries={[registerRoute]}>
                <Register />
            </MemoryRouter>
        );
        expect(getOccupation().value).toBe("");
    });
    test("phone input should be empty", () => {
        render(
            <MemoryRouter initialEntries={[registerRoute]}>
                <Register />
            </MemoryRouter>
        );
        expect(getPhone().value).toBe("");
    });
    test("email input should be empty", () => {
        render(
            <MemoryRouter initialEntries={[registerRoute]}>
                <Register />
            </MemoryRouter>
        );
        expect(getEmail().value).toBe("");
    });
    test("password input should be empty", () => {
        render(
            <MemoryRouter initialEntries={[registerRoute]}>
                <Register />
            </MemoryRouter>
        );
        expect(getPassword().value).toBe("");
    });

    test("first_name input should be changed", async () => {
        render(
            <MemoryRouter initialEntries={[registerRoute]}>
                <Register />
            </MemoryRouter>
        );

        fireEvent.change(getfirstName(), { target: { value: "Ulfet" } });
        await waitFor(() => {
            expect(getfirstName()).toHaveValue("Ulfet");
        });
    });
    test("last name input should be changed", async () => {
        render(
            <MemoryRouter initialEntries={[registerRoute]}>
                <Register />
            </MemoryRouter>
        );

        fireEvent.change(getlastName(), { target: { value: "Kacay" } });
        await waitFor(() => {
            expect(getlastName()).toHaveValue("Kacay");
        });
    });
    test("occupation input should be changed", async () => {
        render(
            <MemoryRouter initialEntries={[registerRoute]}>
                <Register />
            </MemoryRouter>
        );

        fireEvent.change(getOccupation(), { target: { value: "Engineer" } });
        await waitFor(() => {
            expect(getOccupation()).toHaveValue("Engineer");
        });
    });
    test("phone input should be changed", async () => {
        render(
            <MemoryRouter initialEntries={[registerRoute]}>
                <Register />
            </MemoryRouter>
        );

        fireEvent.change(getPhone(), { target: { value: "05000000000" } });
        await waitFor(() => {
            expect(getPhone()).toHaveValue("05000000000");
        });
    });
    test("email should be changed", async () => {
        render(
            <MemoryRouter initialEntries={[registerRoute]}>
                <Register />
            </MemoryRouter>
        );

        fireEvent.change(getEmail(), { target: { value: "test@test.com" } });
        await waitFor(() => {
            expect(getEmail()).toHaveValue("test@test.com");
        });
    });
    test("password input should be changed", async () => {
        render(
            <MemoryRouter initialEntries={[registerRoute]}>
                <Register />
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
            <MemoryRouter initialEntries={[registerRoute]}>
                <Register onSubmit={handleSubmit} />
            </MemoryRouter>
        );
        const user = userEvent.setup();

        await user.type(getfirstName(), "Ulfet");
        await user.type(getlastName(), "Kacay");
        await user.type(getOccupation(), "engineer");
        await user.type(getPhone(), "05432100000");
        await user.type(getEmail(), "test@test.com");
        await user.type(getPassword(), "12345678");

        await user.click(clickSubmitButton());

    });
});


function getfirstName() {
    return screen.getByRole('textbox', {
        name: /first name/i
    });
};

function getlastName() {
    return screen.getByRole('textbox', {
        name: /last name/i
    });
};
function getOccupation() {
    return screen.getByRole('textbox', {
        name: /occupation/i
    });
};
function getPhone() {
    return screen.getByRole('textbox', {
        name: /phone/i
    });
};
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
        name: /register/i
    })
}