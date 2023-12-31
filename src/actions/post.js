import { getPosts } from '../post_api'

export const loadPostsAction = async (dispatch) => {
    const res = await getPosts()
    dispatch({
        type: 'LOAD_POSTS',
        payload: res.data
    })
}