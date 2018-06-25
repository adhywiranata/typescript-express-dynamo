import { mapKeys } from 'lodash';

const camelToPascal = (str: string): string => str[0].toUpperCase() + str.slice(1);
const pascalToCamel = (str: string): string => str[0].toLowerCase() + str.slice(1);

const objectKeysCamelToPascal = (obj: any): any => mapKeys(obj, (v, k) => camelToPascal(k));
const objectKeysPascalToCamel = (obj: any): any => mapKeys(obj, (v, k) => pascalToCamel(k));

export {
  camelToPascal,
  pascalToCamel,
  objectKeysPascalToCamel,
  objectKeysCamelToPascal,
};
