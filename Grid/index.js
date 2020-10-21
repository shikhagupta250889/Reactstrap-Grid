import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'reactstrap'
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import { GridPropTypes } from './types';

export default class GridTable extends React.Component {
    render() {
        const { columnDefinition } = this.props;

        return (
            <Table bordered>
                <TableHeader columnDefinition={columnDefinition} />
                <TableBody {...this.props} />
            </Table >
        );
    }
}

GridTable.propTypes = GridPropTypes;
GridTable.defaultProps = {}
