import { useNavigate } from 'react-router-dom'
import './App.css'
import Footer from './Footer'
import Header from './Header'
import Main from './MainComponent'
import { useEffect, useState } from 'react'

function App() {
  let [flag, setFlag] = useState(false)
  let navigate = useNavigate()

  useEffect(() => {
    const switchPage = (ev) => {
      if(ev.key === 'Enter'){
        if(flag){
          navigate('/contacts')
        }else{
          navigate('/')

        }
        setFlag(!flag)
      }
    }
    document.addEventListener('keydown', switchPage )
    return () => {
      document.removeEventListener('keydown', switchPage )
    }
  },[flag])
  return (
    <div className='App'>
        <Header/>
        <Main/>
        <Footer/>
    </div>
  )
}

export default App
