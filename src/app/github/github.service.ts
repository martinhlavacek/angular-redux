import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IGithubrResult } from '../models/github-result.model';
import { map} from 'rxjs/operators';

@Injectable()
export class GithubService {
    constructor(private http: HttpClient) { }

    getGitHubUserInfo(username: string): Observable<IGithubrResult> {
        return this.http.get('https://api.github.com/users/' + username).pipe(
            map(response => {
                return <IGithubrResult>response;
            })
        );
    }
}
