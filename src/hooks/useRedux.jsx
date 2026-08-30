import { useDispatch, useSelector, useStore } from "react-redux";

export function useRedux() {
    const dispatch = useDispatch()
    const state = useStore()
    
    const events = useSelector((state) => state.events)
    const categorys = useSelector((state) => state.categorys)
    const discussions = useSelector((state)=> state.discussions)
    const communities = useSelector((state)=> state.communities)
    const users = useSelector((state)=> state.users)
    const auth = useSelector((state)=> state.auth)

    return {
        events,
        categorys,
        discussions,
        communities,
        users,
        auth,

        dispatch,
        state
    }
}

