import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../app.state';
import { githubReducer } from '../github/github.reducer';


export const reducers: ActionReducerMap<AppState> = {
    githubUser: githubReducer
};
