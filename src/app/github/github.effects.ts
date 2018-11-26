import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as gitHubAction from './github.actions';

import { GithubService } from './github.service';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class GithubEffects {
    constructor(
        private githubService: GithubService,
        private actions$: Actions
    ) { }

    @Effect() getGithubUser = this.actions$.pipe(
        ofType<gitHubAction.GithubUserRequest>(gitHubAction.LOAD_GITHUB_USER_REQUEST),
        switchMap(request => this.githubService.getGitHubUserInfo(request.payload)
            .pipe(
                map(user => new gitHubAction.GithubUserSuccess(user)),
                catchError(error => of(new gitHubAction.GithubUserFailures(error)))
            )
        )
    );
}

