import React, { Component } from 'react'
import Axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const url = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
  render () {
    return (
      <div className='container'>
        <PageHeader title='Suas' subtitle='Tarefas' />
        <TodoForm />
        <TodoList />
      </div>
    )
  }
}
