import './styles/app.scss'
import React from 'react' 
import ReactDOM from 'react-dom'
import Redux from 'redux'
import { Provider } from 'react-redux'
import Store from './reducers'
import App from './components/App'

let store = Redux.createStore(Store)

ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>,
  document.getElementById('app')
)
