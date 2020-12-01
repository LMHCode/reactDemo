import React, { Component } from 'react';
import '@static/less/home.less';
export default class HOME extends Component {
  constructor(props) {
    super(props);
    this.state = {
      y: 800,
    };
  }

  componentWillMount () {

  }

  componentDidMount () {
    const canvas = document.getElementById('canvas')
    let cx = canvas.getContext('2d')
    for(let i = 0; i < 10; i ++) {
      this.drawCanvas(cx, i)
    }
    let timer = setInterval(() => {
      this.state.y --
      cx.clearRect(0,0, 800, 800)
      this.repaintCicle(cx)
      if (this.state.y === 0) {
        clearInterval(timer)
        timer = null
      }
    }, 1/60 * 1000)
  }

  repaintCicle = (cx) => {
    for(let i = 0; i < 10; i ++) {
      this.drawCanvas(cx, i)
    }
  }

  drawCanvas (cx, i) {
    console.log('draw')   
    cx.beginPath();
    cx.lineWidth = 2;
    let color = `rgba(${Math.random() * 225}, ${Math.random() * 225}, ${Math.random() * 225}, 0.7)`
    cx.strokeStyle = color;
    cx.fillStyle = color 
    cx.arc(100 * Math.random() * 8, this.state.y, 30, 0, Math.PI * 2, false);
    // 0°是从三点钟方向开始
    // 描边路径
    cx.fill()
    cx.stroke();
    console.log(cx)
  }

  render () {
    return (
      <div>
        <div className='tx-canvas'>
          <canvas id='canvas' width="800" height="800"></canvas>
        </div>
      </div>
    )     
  }

}