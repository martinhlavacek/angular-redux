import { IGithubrResult } from './models/github-result.model';

export interface AppState {
    readonly githubUser: IGithubrResult;
}
