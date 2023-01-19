import { findByText, getByText, render, waitFor } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import Register from "../pages/auth/Register";

describe("<Register/> tests", () => {
    test("renders Register page", async () => {
        const register = { name: "Register" };
        const routes = [
            {
                path: '/register',
                element: <Register />
            },
        ];
        const router = createMemoryRouter(routes, {
            initialEntries: ['/register'],
        });
        render(<RouterProvider router={router} />)
        
        const submitButton = await findByText('submit');
        await waitFor(() => expect(submitButton)).toHaveTextContent(register.name)
    });
})