export const arrayToTree = (arr, parent = null) => {
    let unflattenArray = [];
    arr.forEach(item => {
        if(item.rm_id === parent) {
            let children = arrayToTree(arr, item.id);
            if(children.length) {
                item.children = children
            }
            unflattenArray.push(item)
        }
    });
    return unflattenArray;
}

export const treeByPerfomance = (arr) => {
    var unflattenArray = [];

    arr.forEach(item => {
        if(arr.map(i => i.id).indexOf(item.rm_id) === -1) {
            item.children = arrayToTree(arr, item.id);
            unflattenArray.push(item);
        }
    });

    return unflattenArray;
}
