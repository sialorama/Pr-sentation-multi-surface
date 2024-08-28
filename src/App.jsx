import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { AppToolbar } from './components/AppToolbar'
import { Board } from './components/Board'

function App() {

  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<AppToolbar />} />
        <Route path='/' element={<Board />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
