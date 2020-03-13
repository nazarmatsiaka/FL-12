export const deleteItem = id => ({
    type: 'DELETE_ITEM',
    itemId: id
});

export const addNewCourse = courseObj => ({
    type: 'ADD_NEW_ITEM',
    data: courseObj
});

export const editCourse = courseObj => ({
    type: 'EDIT_ITEM',
    data: courseObj
});
