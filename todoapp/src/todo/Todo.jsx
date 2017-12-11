import React, { Component } from 'react'
import Axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const url = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      description: '',
      list: []
    }
    this.refresh = this.refresh.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
    this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleChangeStatus = this.handleChangeStatus.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.refresh()
  }

  refresh (description = '') {
    let search = description ? `&description__regex=/${description}/` : ''
    Axios.get(`${url}?sort=-createdAt${search}`)
    .then((res) => {
      this.setState({
        ...this.state, description, list: res.data
      })
    })
    .catch(err => {
      console.error(err.message)
    })
  }

  handleClear () {
    this.refresh()
  }

  handleSearch () {
    this.refresh(this.state.description)
  }

  handleAdd (e) {
    Axios.post(url, { description: this.state.description })
    .then((data) => {
      console.log(data)
      this.refresh()
    })
    .catch(err => {
      console.error(err.message)
    })
  }

  handleRemove (todo) {
    Axios.delete(`${url}/${todo._id}`)
    .then(res => this.refresh(this.state.description))
    .catch(err => console.console.error(err.message))
  }

  handleChange (e) {
    this.setState({
      ...this.state, description: e.target.value
    })
  }

  handleChangeStatus (todo) {
    Axios.put(`${url}/${todo._id}`, { ...todo, done: !todo.done })
    .then(res => this.refresh(this.state.description))
    .catch(err => console.error(err))
  }

  handleMarkAsDone (todo) {
    Axios.put(`${url}/${todo._id}`, { ...todo, done: true })
    .then(res => this.refresh(this.state.description))
    .catch(err => console.error(err))
  }

  handleMarkAsPending (todo) {
    Axios.put(`${url}/${todo._id}`, { ...todo, done: false })
    .then(res => this.refresh(this.state.description))
    .catch(err => console.error(err))
  }

  render () {
    return (
      <div className='container'>
        <PageHeader title='Suas' subtitle='Tarefas' />
        <TodoForm description={this.state.description} handleChange={this.handleChange} handleAdd={this.handleAdd} handleSearch={this.handleSearch} handleClear={this.handleClear} />
        <TodoList list={this.state.list} handleRemove={this.handleRemove} handleChangeStatus={this.handleChangeStatus} />
      </div>
    )
  }
}
