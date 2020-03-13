export default (state) => {
    let newId = state.reduce((newId, item) => {
        if(item.id > newId) {
            return item.id;
        }
    }, 0);

    return newId + 1;
}
