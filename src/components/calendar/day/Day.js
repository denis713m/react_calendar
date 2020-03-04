import React from 'react'
import styles from './Day.module.sass'
import moment from "moment";
import classNames from 'classname'
import PropTypes  from 'prop-types';
import momentPropTypes from 'react-moment-proptypes'

function Day(props) {

    const dateNumber = () => {
        if (props.isShowMonth) {
            return (props.baseDate.month() === Number(props.month)) ?
                props.baseDate.date() :
                '';
        } else {
            return props.baseDate.date();
        }
    };

    const addEvent = () => {
        const events = [];

        for (const event of props.events) {
            if (moment(event.date, 'YYYY.MM.DD').isSame((props.baseDate), 'day')) {
                let width = 0;
                switch (event.events.length) {
                    case 1:
                        width = 24;
                        break;
                    case 2:
                        width = 10;
                        break;
                    default:
                        width = 7;
                        break;
                }
                let i = 0;
                event.events.forEach((ev) => {
                    if (i < 3) {
                        const className = classNames([styles.event],{
                            [styles.eventWithout]: ((props.baseDate).isBefore(props.currentDate)) || !ev.isIn
                        });

                        events.push(<div key={`ev${i++}`} className={className} style={{width: `${width}px`}}/>);
                    }
                });
            }
        }
        return (
            <div className={styles.eventContainer}>
                {events}
            </div>
        );
    };

    const selectDay = (e) =>{
        (e.target.innerText === '') ? props.select(null):
         props.select(props.baseDate.clone());
    };


    return (
        <>
            <div  className={classNames([styles.day], {
                [styles.daySelected]:(props.baseDate).isSame(props.selectedDay, 'day')},
                {[styles.currentDay]:(props.baseDate).isSame(props.currentDate, 'day')}
            )} onClick={selectDay}>
                {dateNumber()}
                {(!props.isShowMonth) ?
                    (addEvent() ):
                    ((props.baseDate.month() === Number(props.month)) ?
                        addEvent() :
                        null)}
            </div>
        </>

    )

}

Day.propTypes = {
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
    isShowMonth: PropTypes.bool.isRequired,
    events: PropTypes.array.isRequired,
    selectedDay: momentPropTypes.momentObj,
    select:PropTypes.func.isRequired

};

export default Day;