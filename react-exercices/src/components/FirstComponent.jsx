import React from 'react' 

export default (props) => 
     <div>
        <h1>{props.value}</h1>
     </div>

/*
export default () => 
     <div>
        <h1>First component!(Arrow)</h1>
     </div>


export default function(){
    return <h1>First component! (Anonymous)</h1>
}

function first(){
    return <h1>First component! (Classic)</h1>
}

export default first

*/