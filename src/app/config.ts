import * as moment from 'moment';

moment.locale('cs');

export const googleAnalytics = 'UA-8333732-11';

export const timeFormat = 'H:mm';
export const dayFormat = 'dddd';

export const timeToPrepareOrder = 10; // minutes
export const roundingFactor = 5; // minutes

export const startTime = moment('10:30', timeFormat);
// Testing
// export const endTime = moment('23:59', timeFormat);
export const endTime = moment('20:30', timeFormat);
export const startDay = moment().day('pondělí');
export const endDay = moment().day('sobota');

export const startMenuTime = moment('10:30', timeFormat);
export const endMenuTime = moment('15:00', timeFormat);
// export const endMenuTime = moment('23:59', timeFormat);
export const startMenuDay = moment().day('pondělí');
export const endMenuDay = moment().day('pátek');
