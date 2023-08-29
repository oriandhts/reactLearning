import { getPosts } from '../post_api'

const loadPostsAction = async (dispatch) => {
    const res = await getPosts()
    dispatch({
        type: 'LOAD_POSTS',
        pasyload: res.data
    })
}