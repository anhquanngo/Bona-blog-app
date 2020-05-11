import { createStore } from "redux"

const defaultState = {
    stt_heart: 0,
    ion_heart: 57,
    ion_chatbubble: 6,
    ion_view: 138,
    loading: false,
    _limit: 6
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "UP_HEART":
            return { ...state, ion_heart: state.ion_heart + 1, stt_heart: 1 }
        case "DOWN_HEART":
            return { ...state, ion_heart: state.ion_heart - 1, stt_heart: 0 }
        case "UP_VIEW":
            return { ...state, ion_view: state.ion_view + 1 }
        case "LODADING":
            return { ...state, loading: true }
        case "LIMIT":
            return { ...state, _limit: state._limit + 6 }
        default:
            return state
    }
}

const store = createStore(reducer)
export default store
