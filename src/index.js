import ReactDOM from 'react-dom';
import Navigator from './navigation';
import App from './App';
import {
  BrowserRouter
} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App></App>
  </BrowserRouter>,
  document.getElementById('root')
);
