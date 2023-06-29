import { Routes, Route } from "react-router-dom";
import { Repos } from "./pages/Repos";
import { Repo } from "./pages/Repo";
import { ReposLocal } from "./pages/ReposLocal";

export function App() {

  return(
    <Routes>
      <Route path='/' element={<Repos />} />
      <Route path='/repo/*' element={<Repo />} />
      <Route path='/reposlocal' element={<ReposLocal />} />
    </Routes>
  )
  
}