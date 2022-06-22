import { ActionType, createCustomAction, getType } from 'typesafe-actions'

// import { data } from 'utils/fake-data';

export const setData = createCustomAction('payroll/data', (payload, total: number) => ({ payload, total }));
export const setDetail = createCustomAction('payroll/detail', (payload) => ({payload}));

const actions = { setData, setDetail };

type Action = ActionType<typeof actions>
const initState = {
    payrolls: [],
    detail: null,
    total: undefined
}

const reducer = (state=initState, action: Action) => {
    switch (action.type) { 
        case getType(setData):
            return {
                ...state,
                total: action.total,
                payrolls: [...action.payload]
            };
        case getType(setDetail):
            return {
                ...state,
                detail: action.payload
            }
        default: return state;
    }
}


export default reducer