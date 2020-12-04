
import { createStore } from 'redux'
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

 // state
const state = {
  tiger: 100
}
 
//这是action
const increase = {
  type: 'ADD'
}
const decrease = {
  type: 'RELEASE'
}

export const Action = {
  increase,
  decrease,
}

//这是reducer
const reducer = (state = {
  tiger: 100
}, action) => {
    switch (action.type) {
        case 'ADD':
          state.tiger += 100
          return  state
        case 'RELEASE':
          state.tiger -= 100
          return  state
        default:
          return state;
    }
}

//创建store
const store = createStore(reducer);

// export default store
// const persistConfig = {
//   key: "root",
//   storage: storage,
//   stateReconciler: autoMergeLevel2, // 查看 'Merge Process' 部分的具体情况
// };

// console.log(reducer)
// const myPersistReducer = persistReducer(persistConfig, reducer);
 
// const store = createStore(myPersistReducer);
 
// export const persistor = persistStore(store);
export default store;