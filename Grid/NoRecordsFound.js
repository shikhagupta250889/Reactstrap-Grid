import React from "react";
import PropTypes from 'prop-types';
import { GridPropTypes } from './types';

export default function NoRecordsFound(props) {
    const { noRecordsFoundText, noRecordsRowClass, columnCount } = props;
    return (
        <thead>
            <tr className={noRecordsRowClass}>
                <td colSpan={columnCount}>{noRecordsFoundText}</td>
            </tr>
        </thead>
    );
}
NoRecordsFound.propTypes = {
    noRecordsRowClass: GridPropTypes.noRecordsRowClass,
    noRecordsFoundText: GridPropTypes.noRecordsFoundText,
    columnCount: PropTypes.number,
};
NoRecordsFound.defaultProps = {
    columnCount: 1,
    noRecordsRowClass: "",
    noRecordsFoundText: "No records found",
};