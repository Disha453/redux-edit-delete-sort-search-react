const initialstate = JSON.parse(localStorage.getItem("data")) || []

const formReducer = (state = initialstate, action) => {
    switch (action.type) {
        case "ADD": {
            localStorage.setItem("data", JSON.stringify([...state, action.payload]))
            return [...state, action.payload]

        }
            break;
        case "DELETE": {
            localStorage.setItem("data", JSON.stringify(state?.filter((item, index) => index !== action.payload)))
            return state?.filter((item, index) => index !== action.payload)
        }
            break;
        case 'UPDATE': {
            const update = state?.map((item, index) => {
                if (index === action.payload.editIndex) {
                    return action.payload.editRecord
                }
                return item
            })
            localStorage.setItem("data", JSON.stringify(update));
            return update

        }

            break;
        case 'SEARCH': {

            const search = state?.filter((item) => {

                return item.fname.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase())
            }
            )
            return search
        }

        case 'SORT': {

            const sort = state?.sort((a, b) => {
                return (a.fname > b.fname ? 1 : -1)
            })
            return [...sort]
        }
        default: {
            return state || []
        }

    }
}
export { formReducer }