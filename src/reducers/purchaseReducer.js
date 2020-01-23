const initialState = {
    otherStateProperties: '',
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]
}

export const purchaseReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_FEATURE':
            return {
                ...state,
                additionalFeatures: [
                    ...state.additionalFeatures,
                    { name: action.payload }
                ]
            }
        default: 
            return state;
    }
}