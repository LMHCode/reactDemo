import React from 'react';
export default class HOME extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      message: ''
    }
  }
  
  componentDidMount () {
    console.log(this.props)
    this.setState({
      message: this.props.location.state && this.props.location.state.message || ''
    })
  }

  toSocail = () => {
    // console.log(this.props)
    this.props.history.push('/')
  }

  render() {
    return <div>
      <span>{this.state.message || ''}</span>
      <button onClick={this.toSocail}>开始</button>
    </div> 
  }
}