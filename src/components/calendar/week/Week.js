import React from 'react';
import styles from './Week.module.css';


function Week(props) {

    const today = props.today;
    today.subtract((today.day()), "d");

    return(
        <div className={styles.container}>
            <div className={styles.day}>{today.date()}</div>
            <div className={styles.day}>{today.add(1, "d").date()}</div>
            <div className={styles.day}>{today.add(1, "d").date()}</div>
            <div className={styles.day}>{today.add(1, "d").date()}</div>
            <div className={styles.day}>{today.add(1, "d").date()}</div>
            <div className={styles.day}>{today.add(1, "d").date()}</div>
            <div className={styles.day}>{today.add(1, "d").date()}</div>
        </div>
    )

}

export default Week;

