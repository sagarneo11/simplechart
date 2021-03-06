/**
 * General actions
 */
export const REQUEST_DATA = 'REQUEST_DATA';
export const UPDATE_CURRENT_STEP = 'UPDATE_CURRENT_STEP';
export const UNSAVED_CHANGES = 'UNSAVED_CHANGES';

/**
 * Widget actions
 */
export const RECEIVE_WIDGET = 'RECEIVE_WIDGET';
export const RECEIVE_WIDGET_DATA = 'RECEIVE_WIDGET_DATA';
export const RECEIVE_WIDGET_OPTIONS = 'RECEIVE_WIDGET_OPTIONS';
export const RECEIVE_WIDGET_METADATA = 'RECEIVE_WIDGET_METADATA';

/**
 * DataInput actions
 */
// string from DataInput textarea
export const RECEIVE_RAW_DATA = 'RECEIVE_RAW_DATA';
export const RECEIVE_RAW_DATA_INIT = 'RECEIVE_RAW_DATA_INIT';

// parse raw data to JSON
export const PARSE_RAW_DATA = 'PARSE_RAW_DATA';
export const PARSE_DATA_FIELDS = 'PARSE_DATA_FIELDS';
// error or success from parsing
export const PARSE_DATA_STATUS = 'PARSE_DATA_STATUS';
// transform parsed data for chart types
export const TRANSFORM_DATA = 'TRANSFORM_DATA';

/**
 * Chart rendering actions
 */
// data transformed for chart type
export const RECEIVE_CHART_DATA = 'RECEIVE_CHART_DATA';
export const RECEIVE_CHART_DATA_INIT = 'RECEIVE_CHART_DATA_INIT';
// chart options
export const RECEIVE_CHART_OPTIONS = 'RECEIVE_CHART_OPTIONS';
export const RECEIVE_CHART_OPTIONS_INIT = 'RECEIVE_CHART_OPTIONS_INIT';

// delete specific keys from chart options
export const DELETE_CHART_OPTIONS = 'DELETE_CHART_OPTIONS';

// chart metadata
export const RECEIVE_CHART_METADATA = 'RECEIVE_CHART_METADATA';
export const RECEIVE_CHART_METADATA_INIT = 'RECEIVE_CHART_METADATA_INIT';

/**
 * Actions when a chart is updated
 */
export const CHART_UPDATE_ACTIONS = [
  RECEIVE_RAW_DATA,
  RECEIVE_CHART_DATA,
  RECEIVE_CHART_OPTIONS,
  RECEIVE_CHART_METADATA,
];

/**
 * Actions when a chart is initialized
 */
export const CHART_INIT_ACTIONS = [
  RECEIVE_RAW_DATA_INIT,
  RECEIVE_CHART_DATA_INIT,
  RECEIVE_CHART_OPTIONS_INIT,
  RECEIVE_CHART_METADATA_INIT,
];
