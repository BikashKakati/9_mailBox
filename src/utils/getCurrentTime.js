export function getCurrentTime(){
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    const customFormattedDate = new Intl.DateTimeFormat('en-US', options).format(currentDate);
    return customFormattedDate;
}