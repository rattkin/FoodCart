import { startTime, endTime, startDay, endDay, startMenuTime, endMenuTime, startMenuDay, endMenuDay } from '../config';

export function isOpen(time: moment.Moment) {
    if (
        time.isBetween(startTime, endTime) &&
        time.isBetween(startDay, endDay)
    ) {
        return true;
    } else {
        return false;
    }
}

export function isMenu(time: moment.Moment) {
    if (
        time.isBetween(startMenuTime, endMenuTime) &&
        time.isBetween(startMenuDay, endMenuDay)
    ) {
        return true;
    } else {
        return false;
    }
}

export function isBeforeOpen(time: moment.Moment) {
    if (
        time.isBefore(startTime) &&
        time.isBetween(startDay, endDay)
    ) {
        return true;
    } else {
        return false;
    }
}

export function isAfterClose(time: moment.Moment) {
    if (
        time.isAfter(endTime) &&
        time.isBetween(startDay, endDay)
    ) {
        return true;
    } else {
        return false;
    }
}

export function isClosedDay(time: moment.Moment) {
    if (
        !
        time.isBetween(startDay, endDay)
    ) {
        return true;
    } else {
        return false;
    }
}

export function isUntilMenu(time: moment.Moment) {
    if (
        time.isBetween(startMenuDay, endMenuDay) &&
        time.isBefore(endMenuTime)
    ) {
        return true;
    } else {
        return false;
    }
}
