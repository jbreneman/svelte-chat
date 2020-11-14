const getTwelveHour = (datetime) => {
    let hours = datetime.getHours();
    let ampm = 'am';

    if (hours > 12) {
        ampm = 'pm';
        hours -= 12;
    }

    if (hours === 0) {
        hours = 12;
    }

    return { hours, ampm };
};

const getMonth = (monthNumber) => {
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[monthNumber];
};

const padNumber = (num) => {
    return num.toString().padStart(2, '0');
};

export const formatTime = (datetime, shortened = true) => {
    const month = getMonth(datetime.getMonth());
    const twelveHour = getTwelveHour(datetime);
    const minutes = padNumber(datetime.getMinutes());
    const seconds = padNumber(datetime.getSeconds())

    if (shortened) {
        return `${twelveHour.hours}:${minutes} ${twelveHour.ampm}`;
    }

    return `${month} ${datetime.getDate()} at ${twelveHour.hours}:${minutes}:${seconds} ${twelveHour.ampm}`;
};