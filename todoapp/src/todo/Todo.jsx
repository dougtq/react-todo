import React, { Component } from 'react'
import Axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

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
