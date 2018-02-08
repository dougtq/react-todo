import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/Grid'
import IconButton from '../template/IconButton'
import { add, changeDescription, search } from './TodoActions'

class todoForm extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {
    this.props.search()
  }

  render () {
    const { add, search, description } = this.props
    return (
      <div role='form' className='TodoForm'>
        <Grid cols={[10, 8, 8]}>
          <input id='description' className='form-control'
            placeholder='Crie uma tarefa' onChange={this.props.changeDescription} value={description} />
        </Grid>
        <Grid cols={[12, 3, 2]}>
          <IconButton style='primary' onClick={ () => add(description)} icon='plus' />
          <IconButton style='info' onClick={ () => search(description)} icon='search' />
          <IconButton style='danger' onClick={this.props.handleClear} icon='close' />
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  description: state.todo.description
})

const mapDispatchToProps = dispatch => bindActionCreators({ add, changeDescription, search }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(todoForm)
