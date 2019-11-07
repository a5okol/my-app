import React from 'react'
import {ClickedContex} from '../home/Home'

export default props => {
    return (
        <div style={{border: '1px solid black',
            padding: 10,
            margin: '0 auto',
            marginTop: 20,
            marginBottom: 20,
            width: 200,
        }}>
            <h3>Counter 2.0</h3>
            <ClickedContex.Consumer>
                {clicked => clicked ? <p>Clicked</p> : null}
            </ClickedContex.Consumer>
        </div>
    )
}