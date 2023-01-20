import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Register from "../pages/auth/Register";

describe("Register tests", () => {
    const handleSubmit = jest.fn();
    const user = userEvent.setup();

    beforeEach(() => {
        handleSubmit.mockClear();
    });

    afterEach(() => {
        cleanup();
        jest.resetAllMocks();
    });

    test("renders Register page", () => {
        const registerRoute = '/register';
        render(
            <MemoryRouter initialEntries={[registerRoute]}>
                <Register />
            </MemoryRouter>
        )
        expect(screen.getByTestId("btn_register_submit")).toHaveTextContent("Register");
    });

    test("onSubmit is called when all inputs pass validation", async () => {
        const registerRoute = '/register';
        render(
            <MemoryRouter initialEntries={[registerRoute]}>
                <Register onSubmit={handleSubmit} />
            </MemoryRouter>
        );
        await user.type(screen.getByLabelText(/first name/i), 'Ulfet');
        await user.type(screen.getByLabelText(/last name/i), 'Kacay');
        await user.type(screen.getByLabelText(/occupation/i), 'Engineer');
        await user.type(screen.getByLabelText(/phone/i), '05451110022');
        await user.type(screen.getByLabelText(/email/i), 'test@test.com');
        await user.type(screen.getByLabelText(/password/i), '12345678');

        await user.click(screen.getByRole('button', { name: /register/i }));

        await waitFor(() => {
            expect(handleSubmit).toHaveBeenCalledWith({
                first_name: "Ulfet",
                last_name: "Kacay",
                occupation: "Engineer",
                phone: "05451110022",
                email: "test@test.com",
                password: "12345678",
            });
        });
        await waitFor(() => {
            expect(handleSubmit).toHaveBeenCalledTimes(1);
        });

    });
});