import { Action } from '@ngrx/store';

import { IGithubrResult } from '../models/github-result.model';

export const LOAD_GITHUB_USER_REQUEST = '[Github] User load';
export const LOAD_GITHUB_USER_SUCCESS = '[Github] User load Success';
export const LOAD_GITHUB_USER_FAILURES = '[Github] User load Failure';


export class GithubUserRequest implements Action {
    readonly type = LOAD_GITHUB_USER_REQUEST;

    constructor(public payload: string) {}
}

export class GithubUserSuccess implements Action {
    readonly type = LOAD_GITHUB_USER_SUCCESS;

    constructor(public payload: IGithubrResult) {}
}

export class GithubUserFailures implements Action {
    readonly type = LOAD_GITHUB_USER_FAILURES;

    constructor(public payloadError: any) {}
}

export type Actions =
    | GithubUserRequest
    | GithubUserSuccess
    | GithubUserFailures;
