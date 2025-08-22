import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import './App.css'
import Profile from './components/Profile';
import Login from './components/Login';


function App() {
  const [count, setCount] = useState(0)

  return (
    
     <UserContextProvider>


      <Login />
      <Profile /> 


     </UserContextProvider>
    
  )
}

export default App
