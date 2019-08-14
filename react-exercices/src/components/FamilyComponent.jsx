import React from 'react'
import { childsWithProps } from '../utils/utils'

export default props => 
    <div>
        <h1>Family</h1>
        {childsWithProps(props)}
        {/* {React.Children.map(props.children, child => {
            return React.cloneElement(child, {...props})
        } )} */}
        {/* {React.cloneElement(props.children, { ...props })} */}
        {/*React.cloneElement(props.children, props)*/}
        {/*React.cloneElement(props.children, 
            {lastname: props.lastname})*/}
        {/*props.children*/}
    </div>