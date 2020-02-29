import React from 'react'
import Week from "../week/Week";

function WeeksList(props) {

    const showMonth = () => {
        const firstDate = props.today.clone().subtract((props.today.date() - 1), 'd');
        const endDate = firstDate.clone().add((firstDate.daysInMonth() - 1), 'd');
        const month = props.today.month();
        const weeks = [];
        while (firstDate.isSameOrBefore(endDate)) {
            weeks.push(<Week key={firstDate.date()} today={firstDate.clone()} month={month}/>);
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
                <Week today={props.today} isShowWeek={true}/>}


        </>
    )
}

export default WeeksList;