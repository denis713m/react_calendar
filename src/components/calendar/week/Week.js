import React from 'react';
import styles from './Week.module.css';


function Week(props) {

    const checkCurrent = function(date)  {
        if (date.isSame(props.currentDate, 'day')) {
            return (<div className={styles.currentDay}/>);
        }
            else{
            return null;
        }

    };

    const baseDate = props.baseDate.clone();
    baseDate.subtract((baseDate.day()), "d");
    const days = [];
    if (props.isShowWeek) {
        for (let i = 0; i < 7; i++) {
            days.push(<div key={`day${i}`} className={styles.day}>
                {baseDate.date()}
                {checkCurrent(baseDate)}
            </div>);
            baseDate.add(1, 'd');
        }
    } else {
        for (let i = 0; i < 7; i++) {
            days.push(<div key={`day${i}`} className={styles.day}>{
                (baseDate.month() === props.month) ?
                    baseDate.date() :
                    ''
            }
                {checkCurrent(baseDate)}
            </div>);
            baseDate.add(1, 'd');
        }
    }

    return (
        <div className={styles.container}>
            {days}
        </div>
    )

}

export default Week;

