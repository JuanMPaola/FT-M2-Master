import React, {Component} from "react";

export class Botones extends Component{
    render(){
        return(
            <div>
                <button onClick={()=> alert('Hola mu buenasnas')}> Modulo 1</button>
                <button onClick={()=> alert('B) nasnas')}> Modulo 2</button>
            </div>
        )
    }
}