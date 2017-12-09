import React, { Component } from 'react'
import Grid from '../template/Grid'
import IconButton from '../template/IconButton'

export default class TodoForm extends Component {
  render () {
    return (
      <div role='form' className='TodoForm'>
        <Grid cols={[12, 9, 10]}>
          <input id='description' className='form-control'
            placeholder='Crie uma tarefa' value={this.props.description} />
        </Grid>
        <Grid cols={[12, 3, 2]}>
          <IconButton style='primary' onClick={this.props.handleAdd} icon='plus' />
        </Grid>
      </div>
    )
  }
}
