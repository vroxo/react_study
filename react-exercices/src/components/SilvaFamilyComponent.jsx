import React from 'react'
import MemberComponent from './MemberComponent'

export default props => 
    <div>
        <MemberComponent name='Rafael' lastname={props.lastname} />
        <MemberComponent name='Daniela' lastname={props.lastname} />
        <MemberComponent name='Pedro' lastname={props.lastname} />
        <MemberComponent name='Ana' lastname={props.lastname} />
    </div>