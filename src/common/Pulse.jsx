import React from 'react'
import './Common.css'
import classnames from "classnames";

const Pulse = props => (
    <div
        style={{ minWidth: 15, minHeight: 15 }}
        className={classnames({ "pulsatingDot": props.outage, "pulsatingDot-green": !props.outage, "missing-pulsating-dot": props.missing })}
    />
)

export default Pulse;