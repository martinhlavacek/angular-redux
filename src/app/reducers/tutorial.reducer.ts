import { Action } from '@ngrx/store';
import { Tutorial } from '../models/tutorial.model';
import * as TutorialActions from '../actions/tutorial.actions';

const initializeState: Tutorial = {
    name: 'Initialize tutorial',
    url: 'www.google.com'
};

export function reducer(state: Tutorial[] = [initializeState], action: TutorialActions.Action) {
    switch (action.type) {
        case TutorialActions.ADD_TUTORIAL:

            return [...state, action.payload];


        case TutorialActions.REMOVE_TUTORIAL:
            state.splice(action.payload, 1);
            return state;
        default:
            return state;
    }
}
