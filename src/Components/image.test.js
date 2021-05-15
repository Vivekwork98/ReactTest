import React from "react";
import { render } from "@testing-library/react";
import Image from "./image";

const url = "https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-movie/inceptionmovie-newposter-big.jpg?itok=zn3rPAOq"

describe("Image Component", () => {
    it("Image component rendered", async () => {
        await render(<Image imageUrl={url}/>);
    })
})