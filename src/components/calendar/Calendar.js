import React from 'react'
import WeeksList from './weeksList/WeeksList'
import styles from './Calendar.module.css'
import PropTypes from 'prop-types';

function Calendar(props) {


    return(
        <>
        <div className={styles.container}>
     <div className={styles.dayName}>S</div>
    <div className={styles.dayName}>M</div>
    <div className={styles.dayName}>T</div>
    <div className={styles.dayName}>W</div>
    <div className={styles.dayName}>T</div>
    <div className={styles.dayName}>F</div>
    <div className={styles.dayName}>S</div>

    </div>
            <WeeksList today={props.today} showMonth = {props.showMonth}/>
            </>
    )
}

Calendar.propTypes = {
    showMonth: PropTypes.bool.isRequired
};


export default Calendar;