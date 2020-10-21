import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import typeFormatter from './utils';

export default class TableRow extends React.Component {
    render() {
        const { row, rowIndex, dataSet, columnDefinition } = this.props;

        return columnDefinition.map((column, columnIndex) => {
            const { renderer: Renderer, rendererProps, formatter } = column;
            let formattedValue = null;
            if (formatter) {
                formattedValue = formatter({
                    row, column, columnIndex, rowIndex
                });
            }
            let columnOutput = formattedValue;

            if (Renderer) {
                columnOutput = (
                    <Renderer
                        {...rendererProps}
                        row={row}
                        dataSet={dataSet}
                        column={column}
                        rowIndex={rowIndex}
                        columnIndex={columnIndex}
                        formattedValue={formattedValue}
                    />
                );
            } else if (columnOutput === null) {
                const { fieldName, type, valueFormat } = column;
                let columnValue = "";

                if (fieldName) {
                    columnValue = _.get(row, fieldName);
                    if (type) {
                        columnValue = typeFormatter(columnValue, type, valueFormat);
                    }
                }
                columnOutput = columnValue;
            }

            const { columnClassName = '', columnHandlers = {}, columnProps = {} } = column;

            return (
                <td className={`${columnClassName}`} {...columnHandlers} key={columnIndex}>
                    {columnOutput}
                </td>
            );
        });
    }
}
TableRow.propTypes = {

};
TableRow.defaultProps = {

};