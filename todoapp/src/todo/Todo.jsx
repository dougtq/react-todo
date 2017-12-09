import React, { Component } from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

export default class Todo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      description: '',
      list: []
    }
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd () {
    console.log('Add')
  }

  handleChange () {
    console.log('Change')
  }

  render () {
    return (
      <div className='container'>
        <PageHeader title='Suas' subtitle='Tarefas' />
        <TodoForm description={this.state.description} handleAdd={this.handleAdd} />
        <TodoList />
      </div>
    )
  }
}
