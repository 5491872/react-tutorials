import React from 'react'
import ReactDOM from 'react-dom'

function Cartoon(props) {
  return <h1>Hello, {props.name} on {props.show}</h1>
}

function Show() {
  return <div>
          <Cartoon name='Pikachu' show='Pokemon' />
          <Cartoon name='Jasmine' show='Alladin' />
          </div>
}

//class Cartoon extends React.Component {
//  render() {
//  return <h1>Hello, {this.props.name}</h1>
//}

//}

ReactDOM.render(

  <Show/>,
  document.getElementById('root')

);
