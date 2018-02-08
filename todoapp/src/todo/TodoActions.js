import axios from 'axios'

const url = 'http://localhost:3003/api/todos'

export const changeDescription = (ev) => ({
  type: 'DESCRIPTION_CHANGED',
  payload: ev.target.value
})

export const search = () => {
  return (dispatch, getState) => {
    const { description } = getState().todo
    const searchMethod = description ? `&description__regex=/${description}/` : ''
    axios.get(`${url}?sort=-createdAt${searchMethod}`)
      .then((resp) => dispatch({ type: 'TODO_SEARCHED', payload: resp.data }))
  }
}

export const add = (description) => {
  return dispatch => {
    axios.post(url, { description })
      .then(resp => dispatch(clear()))
      .then((resp) => dispatch(search()))
  }
}

export const changeStatus = (todo) => {
  return dispatch => {
    axios.put(`${url}/${todo._id}`, { ...todo, done: !todo.done })
      .then(resp => dispatch({ type: 'TODO_STATUS_UPDATED', payload: resp.data }))
      .then((resp) => dispatch(search()))
  }
}

export const remove = (_id) => {
  return dispatch => {
    axios.delete(`${url}/${_id}`)
      .then(resp => dispatch({ type: 'TODO_REMOVED', payload: resp.data }))
      .then(res => dispatch(search()))
  }
}

export const clear = () => {
  return [{ type: 'TODO_CLEAR' }, search()]
}
