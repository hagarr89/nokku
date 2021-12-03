import React from "react";
import {PropTypes} from "prop-types";
import Style from '../../assets/style/dataTable.scss'

const DataTable = (props) => {
    const data = props.data

    function renderTableHeader() {
        const header = Object.keys(data[0])
        return header.map((key, index) => {
            if(key.toUpperCase() === 'ID')   return <th key={index}><span>#</span></th>
            return <th key={index}><span>{key.toUpperCase()}</span></th>
        })
    };

    function renderTags(tag) {
        return <td><span className={`tag ${tag.class}`}>{tag.name}</span></td>
    }

    function renderRow(row) {
        const dataRow = Object.keys(row);
        return dataRow.map((key, index) => {
            console.log('key', key);
            if (key === 'tag') return renderTags(row[key]);
            return <td key={index}><span className={key}>{row[key]}</span></td>
        })
    }

    function renderTableData() {
        return data.map((row, index) => {
            return <tr key={row.id}>{renderRow(row)}</tr>
        })
    }

    return (
        <table className="data-table">
            <tbody>
            <tr>{renderTableHeader()}</tr>
            {renderTableData()}
            </tbody>
        </table>
    );
}

DataTable.propTypes = {
    data: PropTypes.array
};
export default DataTable