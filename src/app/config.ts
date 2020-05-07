import * as moment from 'moment';

moment.locale('cs');

export const timeFormat = 'H:mm';
export const dayFormat = 'dddd';

export const openingTime = moment('10:30', timeFormat);
export const closingTime = moment('20:30', timeFormat);
export const startDay = moment().day(1);
export const endDay = moment().day(6);

export const openingMenuTime = moment('10:30', timeFormat);
export const closingMenuTime = moment('15:00', timeFormat);
export const startMenuDay = moment().day(1);
export const endMenuDay = moment().day(5);
