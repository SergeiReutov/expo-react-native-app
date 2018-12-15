import * as R from 'ramda';

export const getNavigation = ownProps => R.prop('navigation', ownProps);

export const getState = ownProps => R.prop('state', getNavigation(ownProps));

export const getParams = ownProps => R.prop('params', getState(ownProps));

export const getParamByName = (ownProps, paramName) => R.prop(paramName, getParams(ownProps));
