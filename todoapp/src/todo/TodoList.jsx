import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButton from '../template/IconButton'
import { changeStatus, remove } from './TodoActions'

const todoList = props => {
  const renderRows = () => {
    const list = props.list || []
    return list.map((tarefa, i) =>
      (<tr key={tarefa._id}>
        <td className={tarefa.done ? 'markedAsDone' : ''}>{tarefa.description}</td>
        <td>
          <IconButton style='success' icon='check' hide={tarefa.done} onClick={() => props.changeStatus(tarefa)} />
          <IconButton style='warning' icon='undo' hide={!tarefa.done} onClick={() => props.changeStatus(tarefa)} />
          <IconButton style='danger' icon='trash-o' onClick={() => props.remove(tarefa._id)} />
        </td>
      </tr>)
    )
  }

  return (
    <table className='table'>
      <thead>
        <tr>
          <th> Descrição </th>
          <th className='tableActions'> Ações </th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}

const mapStateToProps = state => ({
  list: state.todo.list
})

const mapDispatchToProps = dispatch => bindActionCreators({ changeStatus, remove }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(todoList)
