import * as moment from 'moment';

moment.locale('cs');

export const googleAnalytics = 'UA-8333732-11';
export const emailServer = 'https://indic.cz/mail/mail.php';

export const AllowedOrderMethods = ['takeout'];
// export const AllowedOrderMethods = ['takeout', 'restaurant']; // Testing
// export const AllowedLocations = ['Jindřichův Hradec', 'Třeboň'];
export const AllowedLocations = ['Jindřichův Hradec'];

export const timeFormat = 'H:mm';
export const dayFormat = 'dddd';

export const timeToPrepareOrder = 15; // minutes
export const roundingFactor = 5; // minutes

export const startTime = moment('10:30', timeFormat);
// export const endTime = moment('23:59', timeFormat); // Testing
export const endTime = moment('20:00', timeFormat);
export const startDay = moment().isoWeekday(1);
export const endDay = moment().isoWeekday(7);

export const startMenuTime = moment('10:30', timeFormat);
export const endMenuTime = moment('15:00', timeFormat);
// export const endMenuTime = moment('23:59', timeFormat); // Testing
export const startMenuDay = moment().isoWeekday(1);
export const endMenuDay = moment().isoWeekday(5);
// export const endMenuDay = moment().isoWeekday(7); // Testing
