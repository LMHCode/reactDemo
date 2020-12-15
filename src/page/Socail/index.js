import React from 'react';
import { connect } from 'react-redux'
import store, {Action} from '../../store/index'

const mapStateToProps = (state) => {
  return {
    num: state.tiger
  }
} 

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increase: () => dispatch(Action.increase),
    decrease: () => dispatch(Action.decrease)
  }
}

class HOME extends React.Component {
  constructor (props) {
    super(props)
    console.log(props)
    this.state = {
      message: '',
      nums: props.num,
    }
  }
  
  componentDidMount () {
    // store.subscribe(() => {
    //   let state = store.getState();
    //   this.setState({
    //     nums: state.tiger
    //   })
    // })
    this.setState({
      message: this.props.location.state && this.props.location.state.message || ''
    })
  }

  toSocail = () => {
    this.props.history.push('/')
  }

  render() {
    const {num, increase, decrease} = this.props;
    return <div>
      <span>{this.state.message || ''}</span>
      <button onClick={this.toSocail}>开始</button>
      <span>{num}</span>
      <span>{this.state.nums}</span>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div> 
  }
}
// export default HOME 
export default connect(mapStateToProps, mapDispatchToProps)(HOME)