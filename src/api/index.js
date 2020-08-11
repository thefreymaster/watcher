import { get } from "axios";

export const getInfo = (dispatch) => get('/api/info').then(res => {
    dispatch({ type: 'POPULATE_INFO', payload: res.data })
})