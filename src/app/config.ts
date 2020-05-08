import * as moment from 'moment';

moment.locale('cs');

export const timeFormat = 'H:mm';
export const dayFormat = 'dddd';

export const timeToPrepareOrder = 15;

export const startTime = moment('10:30', timeFormat);
export const endTime = moment('20:30', timeFormat);
export const startDay = moment().day('pondělí');
export const endDay = moment().day('sobota');

export const startMenuTime = moment('10:30', timeFormat);
export const endMenuTime = moment('15:00', timeFormat);
export const startMenuDay = moment().day('pondělí');
export const endMenuDay = moment().day('pátek');
