import React, { Component } from 'react';
import './ImgContainer.css';

class ImgContainer extends Component {
    render(){
        const { source, alt, cName } = this.props
        return(
            <img src={source} alt={alt} className={cName}></img>
        )
    }
}

export default ImgContainer