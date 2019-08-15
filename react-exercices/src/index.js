import React from 'react'
import ReactDOM from "react-dom"
// import FirstComponent from './components/FirstComponent'
// import {CompA, CompB} from './components/TwoComponent'
// import MultiElementsComponent from './components/MultiElementsComponent'
// import SilvaFamilyComponent from './components/SilvaFamilyComponent'
// import FamilyComponent from './components/FamilyComponent'
// import MemberComponent from './components/MemberComponent'
// import ComponentWithFunction from './components/ComponentWithFunction'
// import Dad from './components/Dad'
// import ClassComponent from './components/ClassComponent'
// import Counter from './components/Counter'
import Hook from './components/Hook'

const element = document.getElementById('root')
ReactDOM.render(
    <div>
        <Hook />
        {/* <Counter /> */}
        {/* <ClassComponent value="Hello class with props!"/> */}
        {/* <Dad /> */}
        {/* <ComponentWithFunction/> */}
        {/* <FamilyComponent lastname='Roxo'>
            <MemberComponent name='Vitor' />
            <MemberComponent name='Keila' />
        </FamilyComponent > */}
        {/*
        <SilvaFamilyComponent lastname='Silva'/>
        <MultiElementsComponent />
        <FirstComponent value='Bom Dia!'/>
        <CompA value='Olá' />
        <CompB value='B na area!'/>
        */}
    </div>
    , element)



//const jsx = <h1>'Olá React!'</h1>