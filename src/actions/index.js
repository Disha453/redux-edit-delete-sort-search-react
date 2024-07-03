export const addData = (data) => {
    return { type: "ADD", payload: data }
}

export const deleteData = (idx) => {
    return { type: "DELETE", payload: idx }
}

export const update = (item, index) => {
    return { type: "UPDATE", payload: { editRecord: item, editIndex: index } }
}

export const search = (item) => {
    return { type: "SEARCH", payload: item }
}

export const sort = () => {
    return { type: "SORT" }
}