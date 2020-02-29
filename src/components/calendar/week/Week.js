import React from 'react';
import styles from './Week.module.css';


function Week(props) {

    const today = props.today;
    today.subtract((today.day()), "d");
    const days = [];
    if (props.isShowWeek) {
        for (let i = 0; i < 7; i++) {
            days.push(<div key={`day${i}`} className={styles.day}>{today.date()}</div>);
            today.add(1, 'd');
        }
    } else {
        for (let i = 0; i < 7; i++) {
            days.push(<div key={`day${i}`} className={styles.day}>{
                (today.month() === props.month) ?
                    today.date() :
                    ''
            }</div>);
            today.add(1, 'd');
        }
    }

    return (
        <div className={styles.container}>
            {days}
        </div>
    )

}

export default Week;

