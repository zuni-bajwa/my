import React, { Component } from 'react'

export class Colorss extends Component {
    render() {
        const {colors} = this.props;
        return (
            <div className="colors">
                {
                colors.map((color, index) =>(
                    <button style={{background: color}} key={index}></button>
                ))
                }
            </div>
        )
    }
}

export default Colorss