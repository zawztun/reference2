import React, { Component } from 'react'
import withCounter from './withCounter';

 class ClickCounter extends Component {
     
    render() {
        const {incrementCount, count,name} = this.props
        return (
            <div>
                <button onClick = {incrementCount}> 
                    {name}
                    Click {count} Times</button>
            </div>
        )
    }
}

export default withCounter(ClickCounter,5)



