import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from '../reducer/reducer';
import {defaultStore} from './defaultStore';

export default () => createStore(reducer, defaultStore, composeWithDevTools());
