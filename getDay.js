export default function getDay(day){
    const date = new Date(day);
        weekDays = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return weekDays[date.getDay()]
    }
    
    //console.log(weekDays[date.getDay('2010-04-01')]);
    console.log(getDay('2010-04-01'))