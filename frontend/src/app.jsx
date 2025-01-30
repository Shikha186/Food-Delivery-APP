import logInPopUp from './components/logInPopUp/logInPopUp'


import './app.css'

export function App() {
  const[showLogin,setShowLogin]=useState(false);

  return (
    <>
        {showLogin?<logInPopup/>:<></>}
        <div className='app'>
          <Navbar setShowLogin={setShowLogin} />
          <p>hii</p>
        </div>
    </>
  )
}

