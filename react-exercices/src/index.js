import React from 'react'
import ReactDOM from "react-dom"
// import FirstComponent from './components/FirstComponent'
// import {CompA, CompB} from './components/TwoComponent'
import MultiElementsComponent from './components/MultiElementsComponent'

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <MultiElementsComponent />
        {/*<FirstComponent value='Bom Dia!'/>
        <CompA value='Olá' />
        <CompB value='B na area!'/>*/}
    </div>
    , elemento)



//const jsx = <h1>'Olá React!'</h1>