/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import login from'./screens/login';
import signup from './screens/signup';
import {name as appName} from './app.json';
import {store} from './src/store'
import {Provider} from 'react-redux'
import React from 'react'

const Root = ()=>{
    return(
        <Provider store ={store}>
          <App/>
     </Provider>
    )
}

AppRegistry.registerComponent(appName, () => Root);
