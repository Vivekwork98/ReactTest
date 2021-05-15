import React from "react";
import MovieList from "./movieList";
import { render, screen, waitForElement, fireEvent } from "@testing-library/react";
import { Provider } from 'react-redux';
import store from '../store';


describe("MovieList Component", () => {
    it("MovieList component rendered", async () => {

        await render(<Provider store={store}>
            <MovieList />
        </Provider>);

    })
})