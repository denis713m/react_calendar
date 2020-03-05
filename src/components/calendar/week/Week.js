import React from 'react';
import styles from './Week.module.sass';
import Day from "../day/Day";
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
import {dateError, monthError, timeError} from "../../../utils";


function Week(props) {

    const baseDate = props.baseDate.clone();
    baseDate.subtract((baseDate.day()), "d");
    const days = [];

    const selectDay = (date) =>{

        props.select(date);
    };

    for (let i = 0; i < 7; i++) {
        days.push(<Day key={`day${i}`} baseDate={baseDate.clone()} currentDate={props.currentDate} month={props.month}
                       isShowMonth={props.isShowMonth} events={props.events} selectedDay={props.selectedDay} select = {selectDay}
        />);
        baseDate.add(1, 'd');
    }




    return (
        <div className={styles.container}>
            {days}
        </div>
    )

}

Week.propTypes = {
    baseDate: momentPropTypes.momentObj.isRequired,
    currentDate: momentPropTypes.momentObj.isRequired,
    month: monthError,
    events: PropTypes.arrayOf(PropTypes.shape({
        date: dateError,
        events: PropTypes.arrayOf(PropTypes.shape({
                name: PropTypes.string,
                body: PropTypes.string,
                time: timeError,
                isIn: PropTypes.bool,
            }
            )
        )
    })).isRequired,
    selectedDay: momentPropTypes.momentObj,
    select:PropTypes.func.isRequired

};

Week.defaultProps = {
    isShowMonth: true,
};

export default Week;


