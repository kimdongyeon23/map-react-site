import { Routes, Route } from "react-router-dom"
import './App.scss'
import { Header } from './Common/Header'
import { LikePage } from './Page/Like/LikePage'
import { SearchPage } from "./Page/Main/SearchPage"
import { MainPage } from "./Page/Main/MainPage"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/like" element={<LikePage/>} />
      </Routes>
    </>
  )
}
export default App