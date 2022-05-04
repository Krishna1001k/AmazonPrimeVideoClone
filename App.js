import React from 'react'
import {SafeAreaView,Text} from 'react-native'
import Navig from './src/router'
import store from './src/reducers/store'
import { Provider } from 'react-redux'
import SplashNav from './src/component/SplashNav'



export default function App() {
  return (
    <Provider store={store} >
        <SplashNav/>
    </Provider>
    )
}