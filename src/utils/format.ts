import moment from "moment/moment";

/**
 * @description formatTime
 * @desc format the time by moment
 * @param {number} time
 * @param {string} pattern
 * */
export function formatTime(time: number, pattern: string){
    const date = time.toString().length === 10 ? time * 1000 : time;
    return moment(date).format(pattern);
}
