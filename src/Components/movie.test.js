import React from "react";
import Movie from "./movie";
import { render, screen, waitForElement, fireEvent } from "@testing-library/react";
import { Provider } from 'react-redux';
import store from '../store';

// const id = {
//     match:
//     {
//         params: {
//             id: "859d0e10-b2fb-11eb-b776-bdfa40881363",
//         }

//     }
// }


describe("Movie Component", () => {
    it("Movie component rendered", async () => {

        await render(<Provider store={store}>
            <Movie />
        </Provider>);

    })
})