import React from 'react'
import WeeksList from './weeksList/WeeksList'
import styles from './Calendar.module.sass'
import momentPropTypes from "react-moment-proptypes";
import PropTypes from "prop-types";

function Calendar(props) {


    return (
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
            <WeeksList baseDate={props.baseDate} isShowMonth={props.isShowMonth} events={props.events} currentDate={props.currentDate}/>
        </>
    )
}

Calendar.propTypes = {
    baseDate: momentPropTypes.momentObj.isRequired,
    currentDate: momentPropTypes.momentObj.isRequired,
    events: PropTypes.array.isRequired,

};

Calendar.defaultProps = {
    isShowMonth: true,
};



export default Calendar;