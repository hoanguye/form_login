import { info } from 'console';
import { ActionType, createCustomAction, getType } from 'typesafe-actions';
import InfoItem from '../components/InfoItem';


export const setListInfo = createCustomAction('profile/get', (data) => ({data}));

export interface InfoState {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}


const actions = { setListInfo }

type Action = ActionType<typeof actions>;
export default function reducer(state = [], action: Action) {
    switch (action.type) {
        case getType(setListInfo):
            return [...state, ...action.data];
        default: 
            return state
    }
}