import React from "react";
import {PropTypes} from 'prop-types';
import CircularProgress from "./CircularProgress";

const CalcPercent = (props) => {
    return (
        <CircularProgress
            size={100}
            strokeWidth={3}
            percentage={props.percent}
            color={props.color}
        />
    );
}
CalcPercent.propTypes = {
    percent: PropTypes.string,
    color:PropTypes.string
};
export default CalcPercent