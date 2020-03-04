import React from 'react';
import styles from './Week.module.sass';
import Day from "../day/Day";
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';


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
    month: function(props, propName, componentName) {
        if (props.isShowMonth) {
            if(!(propName in props)){
                return new Error(`Missing prop month(Number.type)`);
            }
            if(!Number.isInteger(props[propName])) return new Error(`Failed prop type: Invalid input type: ${propName} of type ${typeof props[propName]} supplied to ${componentName}, expected Integer.`);
            if (Number(props[propName]) < 0 || Number(props[propName] >11)) return new Error(`Prop month should be in interval [0...11]`);


        }
    },
    events: PropTypes.array.isRequired,
    selectedDay: momentPropTypes.momentObj,
    select:PropTypes.func.isRequired

};

Week.defaultProps = {
    isShowMonth: true,
};

export default Week;


