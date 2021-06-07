import React from "react";
import { render } from "@testing-library/react";
import About from "../pages/about";

describe("About page", () => {
    test("loads and displays the about page", async () => {
        const { container } = render(<About />);

        const title = container.querySelector(".title");
        expect(title?.textContent).toBe("About");
    });
});
