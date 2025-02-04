import { render } from 'preact'
import './index.css'
import { App } from './app.jsx'
import ReactDom from 'react-dom/client';
import  {BrowserRouter} from 'react-router-dom';

// render(<App />, document.getElementById('app'))
ReactDom.createRoot(document.getElementById('app')).render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)
