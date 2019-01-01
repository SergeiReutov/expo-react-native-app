import {
  shape,
  string,
  object,
} from 'prop-types';

export const ErrorType = shape({
  message: string.isRequired,
  action: string.isRequired,
  params: object,
});
