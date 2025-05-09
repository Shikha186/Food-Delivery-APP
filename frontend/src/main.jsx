import { render } from 'preact'
import ReactDom from 'react-dom/client'
import './index.css'
import { App } from './app.jsx'
import  {BrowserRouter} from 'react-router-dom';
import StoreContextProvider from './context/StoreContext..jsx';

 render(<App />, document.getElementById('app'))
ReactDom.createRoot(document.getElementById('app')).render(
    <BrowserRouter>
        <StoreContextProvider>
            <App />
        </StoreContextProvider>
    </BrowserRouter>
)
