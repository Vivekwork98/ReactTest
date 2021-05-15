import {retrieveMovie, retrieveMovieById} from './movies';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import types from './types';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Test of actions', () => {
	it('action is called', async () => {
        const store = mockStore({});
        const res = retrieveMovie();
        console.log('movie', Promise.res

        const expectedActions = [
            (types.RETRIEVE_MOVIES).concat('/pending'),
            (types.RETRIEVE_MOVIES).concat('/fulfilled'),
            (types.RETRIEVE_MOVIES).concat('/rejected')
        ]

        store.dispatch(retrieveMovie()).then(() => {
            const actions = store.getActions().map(action => action.type);
            expect(actions).toEqual(expect.arrayContaining(expectedActions));
        })
    });

});