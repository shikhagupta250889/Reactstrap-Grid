import _ from 'lodash';
import moment from 'moment';

const defaultDateFormat = 'DD/MM/YYYY';

const isEmpty = val => val !== 0 && _.isEmpty(val);

const formatterFunctions = {
    'string': val => !isEmpty(val) && val.toString(),
    'number': val => !isEmpty(val) && Number(val),
    'date': (val, format = defaultDateFormat) => !isEmpty(val) && moment(val).format(format),
};

export const format = (value, type, format) => {
    return formatterFunctions[type](value, format);
};


export default format;