import React from "react";
import {PropTypes} from 'prop-types';
import CalcPercent from "./calcPercent";
import style from '../assets/style/reportBox.scss'

const ReportBox = (props) => {
    const graph = <svg className="svg-icon" fill={props.report.color}
                     viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M85.333333 170.666667h227.555556v768H85.333333zM398.222222 312.888889h227.555556v625.777778h-227.555556zM711.111111 426.666667h227.555556v512h-227.555556z"
                        fill=""/>
                </svg>
    const isNumber = props.report.type === 'NUMBERS' ? graph :
        <CalcPercent percent={props.report.amount} color={props.report.color}/>
    return (<div className="report">
            <div className="report-graph">
                <div className="report-graph-bg"  style={{background: props.report.color}}></div>
                {isNumber}
            </div>
            <div className="report-number">{props.report.amount}{props.report.type === 'NUMBERS' ? '' : '%'}</div>
            <h3 className="report-title">{props.report.name}</h3>
        </div>);
}

ReportBox.propTypes = {
    name: PropTypes.string,
    amount: PropTypes.number,
    type: PropTypes.string,
    background: PropTypes.string,
    color: PropTypes.string
};

export default ReportBox;
