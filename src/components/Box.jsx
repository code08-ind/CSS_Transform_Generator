import './Box.css';
import React from 'react'

const Box = ({ rotate, scale, skew, x, y }) => {
    let transformcss;
    if (rotate !== 0) {
        transformcss = `rotate(${rotate}deg) scale(${scale}) skew(${skew}deg) translate(${x}px,${y}px)`;
    }
    else if (scale !== 0) {
        transformcss = `rotate(${rotate}deg) scale(${scale}) skew(${skew}deg) translate(${x}px,${y}px)`
    }
    else if (skew !== 0) {
        transformcss = `rotate(${rotate}deg) scale(${scale}) skew(${skew}deg) translate(${x}px,${y}px)`
    }
    else if (x !== 0) {
        transformcss = `rotate(${rotate}deg) scale(${scale}) skew(${skew}deg) translate(${x}px,${y}px)`
    }
    else if (y !== 0) {
        transformcss = `rotate(${rotate}deg) scale(${scale}) skew(${skew}deg) translate(${x}px,${y}px)`
    }

    return (
        <div className="box">
            <div className="box__box" style={{ transform: transformcss }}>
            </div>
            <div className="details_box">
                <div className="details">
                    transform : rotate({rotate}deg) scale({scale}) skew({skew}deg) translate({x}px,{y}px)
                </div>
                <div className="details">
                    -webkit-transform : rotate({rotate}deg) scale({scale}) skew({skew}deg) translate({x}px,{y}px)
                </div>
                <div className="details">
                    -moz-transform : rotate({rotate}deg) scale({scale}) skew({skew}deg) translate({x}px,{y}px)
                </div>
            </div>
        </div>
    )
}

export default Box