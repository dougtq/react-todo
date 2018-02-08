import axios from 'axios'

const url = 'http://localhost:3003/api/todos'

export const changeDescription = (ev) => ({
  type: 'DESCRIPTION_CHANGED',
  payload: ev.target.value
})

export const search = (description = '') => {
  let searchMethod = description ? `&description__regex=/${description}/` : ''
  let request = axios.get(`${url}?sort=-createdAt${searchMethod}`)

  return {
    type: 'TODO_SEARCHED',
    payload: request
  }
}

export const add = (description) => {
  return dispatch => {
    axios.post(url, { description })
      .then(resp => dispatch({ type: 'TODO_ADDED', payload: resp.data }))
      .then((resp) => dispatch(search()))
  }
}
