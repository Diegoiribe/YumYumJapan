import { Provider } from 'react-redux'
import { useEffect } from 'react'
import store from './store'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom'

import Home from './containers/Home'
import ItemShow from './containers/ItemShow'
import Error404 from './containers/errors/Error404'
import Login from './containers/auth/Login'

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation()

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname])

    return null
  }

  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:id" element={<ItemShow />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
