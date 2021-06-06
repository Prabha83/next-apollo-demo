import React from "react";
import { render } from "@testing-library/react";
import Index from "./index";

describe("Index page", () => {
    test("loads and displays the index page", async () => {
        const { container } = render(<Index />);

        const title = container.querySelector(".title");
        expect(title?.textContent).toBe("Welcome");
    });
});
