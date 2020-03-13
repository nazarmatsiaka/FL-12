function reducer(state = {}, action) {
    console.log(action);
    switch (action.type) {
        case 'DELETE_ITEM':
            return {...state, courses: state.courses.filter(item => item.id !== action.itemId)};
        case 'ADD_NEW_ITEM':
            state.courses.push(action.data);

            return state;
        case 'EDIT_ITEM':
            return {...state, courses: state.courses.map(item => item.id === action.data.id? action.data: item)};
        default:
            return state;
    }
}

export default reducer;
