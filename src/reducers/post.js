let n = 1
const postReducer = function (state = { list: [{ title: '你好！', id: n }] }, action) {
    switch (action.type) {
        case 'LOAD_POSTS':
            return {
                ...state, list: action.payload
            }
        default:
            return state
    }
}
n++
export default postReducer


