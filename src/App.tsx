

import './App.css'
import { Provider } from 'react-redux'
import store from './store'
import DashBoard from './pages/dashBoard'

function App() {


  return (
    <Provider store={store}> 
      <DashBoard/>
       </Provider>

    )
}

export default App
