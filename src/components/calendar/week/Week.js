import React from 'react';
import styles from './Week.module.css';
import Day from "../day/Day";


function Week(props) {

    const baseDate = props.baseDate.clone();
    baseDate.subtract((baseDate.day()), "d");
    const days = [];

    for (let i = 0; i < 7; i++) {
        days.push(<Day key={`day${i}`} baseDate={baseDate.clone()} currentDate={props.currentDate} month={props.month}
                       isShowMonth={props.isShowMonth} events={props.events}
        />);
        baseDate.add(1, 'd');
    }


    return (
        <div className={styles.container}>
            {days}
        </div>
    )

}

export default Week;


