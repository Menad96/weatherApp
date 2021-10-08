import {createPortal} from 'react-dom';
import React from 'react'
import './Loading.css'
import icon from './../icons/sun.png'

function Loading() {
    return createPortal(
        <div className="loading-content">
                <img src={icon} alt="Loading..."/>
        </div>
    ,document.body)
}

export default Loading
