import React from 'react'

import IconButton from '../template/IconButton'

export default props => {
  const renderRows = () => {
    const list = props.list || []
    return list.map((tarefa, i) =>
      (<tr key={tarefa._id}>
        <td className={tarefa.done ? 'markedAsDone' : ''}>{tarefa.description}</td>
        <td>
          <IconButton style='success' icon='check' hide={tarefa.done} onClick={() => props.handleChangeStatus(tarefa)} />
          <IconButton style='warning' icon='undo' hide={!tarefa.done} onClick={() => props.handleChangeStatus(tarefa)} />
          <IconButton style='danger' icon='trash-o' onClick={() => props.handleRemove(tarefa)} />
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
