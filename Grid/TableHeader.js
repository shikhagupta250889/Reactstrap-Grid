import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { GridPropTypes } from './types';

export default class TableHeader extends React.Component {
    render() {
        const { columnDefinition } = this.props;
        if (!columnDefinition.length) {
            return null;
        }

        return (
            <thead>
                <tr>
                    {_.map(columnDefinition, (colDef, colIndex) => {
                        const { 
                            headerRenderer: HeaderColumn, 
                            rendererProps, 
                            headerClassName, 
                            columnProps = {} 
                        } = colDef;
                        let headerCol = null;
                        if (HeaderColumn) {
                            headerCol = <HeaderColumn isHeader {...rendererProps} {...colDef} />
                        } else {
                            headerCol = colDef.header;
                        }
                        return (
                            <th key={colIndex} className={`${headerClassName}`} {...columnProps} >{headerCol}</th>
                        );
                    })}
                </tr>
            </thead >
        );
    }
}
TableHeader.propTypes = {
    columnDefinition: GridPropTypes.columnDefinition,
};
TableHeader.defaultProps = {
    columnDefinition: []
};