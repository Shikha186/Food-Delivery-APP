
//import logInPopUp from './components/logInPopUp/logInPopUp'
import Navbar from "./components/NavBar/Navbar";



import logInPopUp from './components/logInPopUp/logInPopUp';



import './app.css'

export function App() {
   const[showLogin,setShowLogin]=useState(false);

  return (
    <>
        <div className="app">
          <Navbar></Navbar>
          { {showLogin?<logInPopup/>:<></>}
          <div className='app'>
            <Navbar setShowLogin={setShowLogin} />
            <p>hii</p>
          </div> }
        </div>
    </>
  )
}

