export enum REQUEST_STATE {
  REQUEST = 'REQUEST',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
  DORMANT = 'DORMANT',
}

export const DAYS_OF_THE_WEEK = [
  'MONDAY',
  'TUESDAY',
  'WEDNESDAY',
  'THURSDAY',
  'FRIDAY',
  'SATURDAY',
  'SUNDAY',
];

export const EmptyArray = Object.freeze([]); // to keep an unchanging reference to avoid re-renders
export const DoNothing = () => {};

// Moment format strings
export const MF = Object.freeze({
  DAY_MONTH_TIME_A: 'Do MMMM, HH:mma', // 31st March, 12:34pm
  DAY_of_MONTH: 'Do [of] MMMM', // 31st of March
  HOUR_MINUTE_A: 'HH:mma', // 12:34pm
});
