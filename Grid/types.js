import PropTypes from 'prop-types';

export const GridPropTypes = {
    columnDefinition: PropTypes.arrayOf(PropTypes.shape({
        headerRenderer: PropTypes.func,
        header: PropTypes.string,
        headerClassName: PropTypes.string,
        renderer: PropTypes.func,
        rendererProps: PropTypes.object,
        type: PropTypes.oneOf(['number', 'string', 'date']),
        formatter: PropTypes.func,
        fieldName: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
        valueFormat: PropTypes.string,
        columnClassName: PropTypes.string,
        columnProps: PropTypes.object,
    })),
    dataRowProps: PropTypes.object,
    data: PropTypes.array,
    noRecordsRowClass: PropTypes.string,
    noRecordsFoundText: PropTypes.string,
};