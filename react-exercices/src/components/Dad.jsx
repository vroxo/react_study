import React from 'react'
import Child from './Child'

export default props =>{
    const callBackExitNotification = 
        place => alert(`Liberado para ir ao ${place}`)

    return(
        <div>
            < Child exitNotification = {callBackExitNotification} />
        </div>
    )
}