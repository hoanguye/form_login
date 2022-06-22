// import { info } from 'console';
// import { update } from 'lodash';
import { ActionType, createCustomAction, getType } from 'typesafe-actions';
// import InfoItem from '../components/InfoItem';


export const setListInfo = createCustomAction('profile/get', (data) => ({ data }));
export const updateInfo = createCustomAction('profile/update', (data) => ({data}));

export interface InfoState {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}


const actions = { setListInfo, updateInfo }

type Action = ActionType<typeof actions>;
export default function reducer(state =[], action: Action) {
    switch (action.type) {
        case getType(setListInfo):
            return [...state, ...action.data];
        case getType(updateInfo):
            { console.log(action.data)}
            return 
        default: 
            return state
    }
}