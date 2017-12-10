import React from 'react'

export default props => (
  <header className='page-header'>
    <h2>{props.title} <em className='em-title'>{props.subtitle}</em></h2>
  </header>
)
