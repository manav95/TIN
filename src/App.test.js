import { jsx as _jsx } from "react/jsx-runtime";
import ReactDOM from 'react-dom';
import App from './App';
it('renders without crashing', function () {
    var div = document.createElement('div');
    ReactDOM.render(_jsx(App, {}, void 0), div);
    ReactDOM.unmountComponentAtNode(div);
});
