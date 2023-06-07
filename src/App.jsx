import styles from './App.module.css'
import Header from './components/header/Header'
import Menu from './components/Menu/Menu'
import Main from './components/Main/Main'

function App() {

  return (
    <>
      <Header/>
      <div className= {styles.wrap}>
        <Menu/>
      <Main/>
      </div>
      
    </>
  )
}

export default App
