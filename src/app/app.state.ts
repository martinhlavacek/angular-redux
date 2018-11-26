import { Tutorial} from './models/tutorial.model';
import { IGithubrResult } from './models/github-result.model';

export interface AppState {
    readonly tutorial: Tutorial[];
    readonly githubUser: IGithubrResult;
}
