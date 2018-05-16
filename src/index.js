import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import App from './App';
import reducer from './reducer'

const store = createStore(reducer)

/*store.subscribe(() => {
  const storeNow = store.getState()
  console.log("tila ny", storeNow)
})*/


const render = () => {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)