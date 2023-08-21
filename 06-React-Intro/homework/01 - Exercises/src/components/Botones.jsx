import React, {Component} from "react";

export class Botones extends Component{
    render(){
        return(
            <div>
                <button onClick={()=> alert('Aprobado')}> Modulo 1</button>
                <button onClick={()=> alert('En curso')}> Modulo 2</button>
            </div>
        )
    }
}