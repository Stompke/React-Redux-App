export const initialState = {
    meal: '',
    ingredients: [],
    mealData: {}
}

export const mealReducer = (state = initialState, action) => {
    switch ( action.type ) {
        case 'TEST':
            console.log('test worked');
            return state
        default:
            return state
    }
}