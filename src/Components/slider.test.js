import React from "react";
import { render } from "@testing-library/react";
import Slider from "./slider";
import SimpleImageSlider from "react-simple-image-slider";

describe("Slider Component", () => {
    it("Slider component rendered", async () => {
        await render(<Slider />);
    })
})