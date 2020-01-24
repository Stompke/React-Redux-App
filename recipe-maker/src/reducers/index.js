//reducers

export const initialState = {
    isLoading: false,
    meal: '',
    ingredients: [],
    mealData:[ ]
}

export const mealReducer = (state = initialState, action) => {
    switch ( action.type ) {
        case 'FETCHING_DATA_START':
            return {
                ...state,
                isLoading: true
            }
        case 'FETCHING_DATA_SUCCESS':
            return {
                ...state,
                mealData: action.payload,
                isLoading: false
            }
        case 'TEST':
            console.log('test worked');
            return state
        default:
            return state
    }
}