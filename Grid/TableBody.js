import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import TableRow from './TableRow';
import NoRecordsFound from './NoRecordsFound';
import { GridPropTypes } from './types';

export default class TableBody extends React.Component {
    handleRowClick = row => {
        const { dataRowProps: { onClick } = {} } = this.props;
        if (onClick) {
            onClick(row);
        }
    };

    handleDoubleClick = row => {
        const { dataRowProps: { onDoubleClick } = {} } = this.props;
        if (onDoubleClick) {
            onDoubleClick(row);
        }
    }

    render() {
        const { data, columnDefinition, dataRowProps } = this.props;

        if (!data.length) {
            return <NoRecordsFound {...this.props} columnCount={columnDefinition.length} />;
        }

        return (
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr
                        key={rowIndex}
                        {...dataRowProps}
                        onClick={() => this.handleRowClick(row)}
                        onDoubleClick={() => this.handleDoubleClick(row)}
                    >
                        <TableRow
                            dataSet={data}
                            row={row}
                            key={rowIndex}
                            rowIndex={rowIndex}
                            columnDefinition={columnDefinition}
                        />
                    </tr>
                ))}
            </tbody>
        );
    }
}
TableBody.propTypes = {
    data: GridPropTypes.data,
    columnDefinition: GridPropTypes.columnDefinition,
    dataRowProps: GridPropTypes.dataRowProps,
};
TableBody.defaultProps = {
    data: [],
};