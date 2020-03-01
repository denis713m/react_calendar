import React from 'react'
import Week from "../week/Week";

function WeeksList(props) {

    const showMonth = () => {
        const firstDate = props.baseDate.clone().subtract((props.baseDate.date() - 1), 'd');
        const endDate = firstDate.clone().add((firstDate.daysInMonth() - 1), 'd');
        const month = props.baseDate.month();
        const weeks = [];
        while (firstDate.isSameOrBefore(endDate)) {
            weeks.push(<Week key={firstDate.date()} baseDate={firstDate.clone()}
                             month={month} currentDate={props.currentDate} events={props.events} isShowMonth={true}/>);
            firstDate.add(7, 'd');
        }
        return weeks;
    };

    return (
        <>
            {(props.isShowMonth) ?
                (
                    <>{showMonth()}</>
                ) :
                <Week baseDate={props.baseDate} isShowMonth={false} currentDate={props.currentDate}
                      events={props.events}/>}
        </>
    )
}

export default WeeksList;