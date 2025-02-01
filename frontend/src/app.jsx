<<<<<<< HEAD
//import logInPopUp from './components/logInPopUp/logInPopUp'
import Navbar from "./components/NavBar/Navbar";


=======
import logInPopUp from './components/logInPopUp/logInPopUp'
import Navbar from 
>>>>>>> 82c6bccdbb09e97a6d25b2e3926b86b34e2b8b06

import './app.css'

export function App() {
  // const[showLogin,setShowLogin]=useState(false);

  return (
    <>
        <div className="app">
          <Navbar></Navbar>
          {/* {showLogin?<logInPopup/>:<></>}
          <div className='app'>
            <Navbar setShowLogin={setShowLogin} />
            <p>hii</p>
          </div> */}
        </div>
    </>
  )
}

