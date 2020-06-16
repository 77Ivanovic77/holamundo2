/* Inicion con GIT =) */
//Importacion de librerias
import React from 'react'

//Componentes
import Regards from './regards'

//Creacion de componente
class App extends React.Component{
    constructor(){
        super()
        this.state ={
            name: 'Ivanovic',
            lastName: 'El chido'
        }
/*         this.changeState = this.changeState.bind(this)
 */
    }

    changeState(persona){
        /* this.state.name = 'Benito'
        this.state.lastName = 'Juarez' */
        this.setState(persona)
    }

    render(){
        return (<div>
            <Regards persona={this.state}/>
            <h2>{this.state.name + ' ' + this.state.lastName}</h2>
            <button onClick={ () => this.changeState({name:'Benito', lastName:'Juarez'})}>Benito</button>
            <button onClick={ () => this.changeState({name:'Porfirio', lastName:'Díaz'})}>Porfirio</button>
            <button onClick={ () => this.changeState({name:'Jorge', lastName:'El curioso'})}>Jorge</button>
        </div>)
    }
}

export default App