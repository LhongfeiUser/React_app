import React from 'react';
import{render} from 'react-dom';
import App from "./containers/index";
import './assets/index.less';
import {Provider} from 'react-redux';
import {configureStore} from './store';
let store=configureStore();//生成store 可以在（）里加默认值
render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,document.getElementById('root'));