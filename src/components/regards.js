/* Este es el primer cambi para el comit */

import React from 'react'

class Regards extends React.Component{
    constructor(props){
        super()
    }

    render(){
        return(
            <div>
                <h1>Hola: {this.props.persona.name}</h1>
                <b></b>
            </div>
        )
    }
}

export default Regards