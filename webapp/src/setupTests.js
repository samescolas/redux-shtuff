
import ReactDOM from 'react-dom';
import 'jest-enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

global.localStorage = {
    getItem: function (key) {
        return this[key];
    },
    setItem: function (key, value) {
        this[key] = value;
    },
    removeItem: function (key) {
        delete this[key];
    }
};
//
const token = "faketoken" // fake token
localStorage.setItem('id_token', token);


