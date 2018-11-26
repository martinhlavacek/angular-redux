import { IGithubrResult } from '../models/github-result.model';
import * as GithubActions from './github.actions';

export function githubReducer(state = null, action: GithubActions.Actions) {
    switch (action.type) {
        case GithubActions.LOAD_GITHUB_USER_SUCCESS: {
            return Object.assign({} as IGithubrResult, state, action.payload);
        }
        default: {
            return state;
        }
    }
}

