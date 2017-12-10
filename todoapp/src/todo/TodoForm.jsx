import React, { Component } from 'react'

import Grid from '../template/Grid'
import IconButton from '../template/IconButton'

export default class TodoForm extends Component {
  render () {
    return (
      <div role='form' className='TodoForm'>
        <Grid cols={[10, 8, 8]}>
          <input id='description' className='form-control'
            placeholder='Crie uma tarefa' onChange={this.props.handleChange} value={this.props.description} />
        </Grid>
        <Grid cols={[12, 3, 2]}>
          <IconButton style='primary' onClick={this.props.handleAdd} icon='plus' />
          <IconButton style='info' onClick={this.props.handleSearch} icon='search' />
        </Grid>
      </div>
    )
  }
}
