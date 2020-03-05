import React from 'react'
import Week from "../week/Week";
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
import {dateError, timeError} from "../../../utils";

class WeeksList  extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            selectedDay : null
        }
    }

    selectDay = (date) =>{
      this.setState({selectedDay: date});
      this.props.calendarClick();
    };

    showMonth = () => {
        const firstDate = this.props.baseDate.clone().subtract((this.props.baseDate.date() - 1), 'd');
        const endDate = firstDate.clone().add((firstDate.daysInMonth() - 1), 'd');
        endDate.add((6-endDate.day()), 'day');
        const month = this.props.baseDate.month();
        const weeks = [];
        while (firstDate.isSameOrBefore(endDate)) {
            weeks.push(<Week key={firstDate.format('YYYY-MM-DD')} baseDate={firstDate.clone()}
                             month={month} currentDate={this.props.currentDate} events={this.props.events}
            selectedDay={this.state.selectedDay} select = {this.selectDay}/>);
            firstDate.add(7, 'd');
        }
        return weeks;
    };

    render() {
        return (
            <>
                {(this.props.isShowMonth) ?
                    (
                        <>{this.showMonth()}</>
                    ) :
                    <Week baseDate={this.props.baseDate} isShowMonth={false} currentDate={this.props.currentDate}
                          events={this.props.events} selectedDay={this.state.selectedDay} select = {this.selectDay}/>}
            </>
        )
    }


}

WeeksList.propTypes = {
    baseDate: momentPropTypes.momentObj.isRequired,
    currentDate: momentPropTypes.momentObj.isRequired,
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
    calendarClick:PropTypes.func.isRequired,

};
WeeksList.defaultProps = {
    isShowMonth: true,
};



export default WeeksList;