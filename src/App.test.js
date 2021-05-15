import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
    it("App component rendered", async () => {
        await render(<App />);
    })
})