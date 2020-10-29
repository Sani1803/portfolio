import React, { Component } from 'react'
import './StaticHeader.css';

export class StaticHeader extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        const {title, shortdesc} = this.props;
        return (
            <div className="header">
                <h2 className="title">{title}</h2>
                <p className="short-desc">--- <span>{shortdesc}</span> ---</p>
            </div>
        )
    }
}

export default StaticHeader
