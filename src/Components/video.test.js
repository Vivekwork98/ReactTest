import React from "react";
import Video from "./video";
import { render, screen, waitForElement,fireEvent } from "@testing-library/react";

const id = "YoHD9XEInc0";

describe("Video Component", () => {
    it("Video component rendered", async () => {
        const video = await render(<Video videoId={id} />);

        // await waitForElement(() => video.getByTestId('trailer'))
        // expect(screen.getByTestId('trailer')).toHaveTextContent('View Trailer');

        //fireEvent.click(getByText('View Trailer'))

    })
})