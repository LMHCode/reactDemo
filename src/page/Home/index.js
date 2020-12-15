import React from 'react';
export default class HOME extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      music: '青花瓷'
    }
  }

  toDoExcelsise = () => {
    this.props.history.push({
      pathname: '/socail',
      state: {
        id: 1,
        message: 'hello! Welcome to China!'
      }, // param 传参
      search: `music=${this.state.music}` // 链接带参
    })
  }

  render() {
    return <div onClick={this.toDoExcelsise}>去练练手</div>
  }
}