import React, { Component } from 'react';
import '@static/less/bubbles.less'

export default class BUBBLES extends Component {
  constructor (props) {
    super(props)
    this.state = {
      domArr: Array(10).fill(null)
    }
  }

  createCicle () {
    return (
      <div className="cicle-item">1</div>
    )
  }

  componentDidMount () {
    this.initBubble()
  }

  initBubble = () => {
    let bubbles = Array.from(document.getElementsByClassName('li'))
    bubbles.map(res => {
      return res.classList.add("to-top-circle")     
    })
    console.log(bubbles)
  }

  render () {
    return (
      <div>
        {/* {
          this.createCicle()
        } */}
        <div className='bubbles-ul'>
          {
            this.state.domArr.map((res, index) => {
              return (<div className='li' key={index} style={{
                backgroundColor: `rgba(${Math.random() * 225}, ${Math.random() * 225}, ${Math.random() * 225}, 0.7)`, 
                transition: `all 1s ease`,
                animation: 'toTop infinite',
                left: Math.random() * 800}}></div>)
            })
          }
        </div>
      </div>
    )
  }
}