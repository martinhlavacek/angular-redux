import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../app.state';
import { reducer } from './tutorial.reducer';
import { githubReducer } from '../github/github.reducer';


export const reducers: ActionReducerMap<AppState> = {
    tutorial: reducer,
    githubUser: githubReducer
};
