import { mapKeys } from 'lodash';

const camelToPascal = str => str[0].toUpperCase() + str.slice(1);
const pascalToCamel = str => str[0].toLowerCase() + str.slice(1);

const objectKeysCamelToPascal = obj => mapKeys(obj, (v, k) => camelToPascal(k));
const objectKeysPascalToCamel = obj => mapKeys(obj, (v, k) => pascalToCamel(k));

export {
  camelToPascal,
  pascalToCamel,
  objectKeysPascalToCamel,
  objectKeysCamelToPascal,
};
