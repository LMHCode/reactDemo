
import { createStore } from 'redux'
const tiger = 100
 
 
//这是action
const increase = {
    type: 'ADD'
}
const decrease = {
    type: 'RELEASE'
}

//这是reducer
const reducer = (state = tiger, action) => {
    switch (action.type) {
        case 'ADD':
			    return  state += 100
        case 'RELEASE':
          return  state -= 100
        default:
          return state;
    }
}

//创建store
const store = createStore(reducer);

export default store