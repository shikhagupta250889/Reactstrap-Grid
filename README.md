# Description
    npm package for adding customizable table grid to your elements.
# Installation
    `npm i Reactstrap-Grid --save`

# usage
    ```
    import Table from 'Reactstrap-Grid';
    
    export default function Employee Table() {
        return (
            <Table 
                dataRowProps={{ className: 'data-rows', onRowClick: () => {}}}
                columnDefinition={[{
                    header: 'ID',
                    fieldName: 'id',
                }, {
                    header: 'Name',
                    fieldName: 'details.name',
                }, {
                    header: 'Address',
                    fieldName: ['details', 'address'],  
                    // Grid uses lodash to parse the fields data
                }, {
                    header: 'Date',
                    fieldName: 'createdOn',
                    type: 'date',  
                    valueFormat: 'MM-DD-YYYY' // Any moment supported format
                    // Grid uses moment to format the date type data
                }, {
                    header: 'Phone',
                    fieldName: 'phone',
                    formatter: PhoneFormatter,  
                }, {
                    header: 'Actions',
                    renderer: ActionsList, // Custom renderer Component
                    rendererProps: { onDelete : () => {} }, // Props to be passed to component along with data
                }]}
                data={[{
                    id: '1',
                    details: {
                        name: 'Louis Thorn',
                        address: '54, HertiFy, Paris France 876453',
                        country: 'France',
                        countryCode: '+87',
                        phone: '3543643643643'
                    },
                    createdOn: '22-10-2020'
                }]}
                noRecordsRowClass='highlighter'
            />
        );
    }

    function ActionsList(props) {
        const { 
            onDelete,
            row,
            dataSet,
            column,
            rowIndex,
            columnIndex,
            formattedValue,
        } = props;
        return (
            <a href='#' onClick={() => onDelete(row.id)}>Delete</a>
        )
    }

    function PhoneFormatter({
        row, column, columnIndex, rowIndex
    }) {
        const { details } = row;
        return `${details.country} (${details.countryCode}) ${details.phone}`;
    }
 
    ```
## Options
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