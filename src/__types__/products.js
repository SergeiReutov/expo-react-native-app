import {
  shape,
  number,
  string,
} from 'prop-types';

export const ProductType = shape({
  id: number.isRequired,
  icon: string.isRequired,
  name: string.isRequired,
  description: string.isRequired,
});
