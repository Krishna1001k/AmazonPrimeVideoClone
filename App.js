import React from 'react'
import {SafeAreaView,Text} from 'react-native'
import Navig from './src/router'
import store from './src/reducers/store'
import { Provider } from 'react-redux'



export default function App() {
  return (
    <Provider store={store} >
        <Navig/>
    </Provider>
    )
}