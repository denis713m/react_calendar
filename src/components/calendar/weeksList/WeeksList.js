import React from 'react'
import Week from "../week/Week";

class WeeksList  extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            selectedDay : null
        }
    }

    selectDay = (date) =>{
      this.setState({selectedDay: date})
    };

    showMonth = () => {
        const firstDate = this.props.baseDate.clone().subtract((this.props.baseDate.date() - 1), 'd');
        const endDate = firstDate.clone().add((firstDate.daysInMonth() - 1), 'd');
        const month = this.props.baseDate.month();
        const weeks = [];
        while (firstDate.isSameOrBefore(endDate)) {
            weeks.push(<Week key={firstDate.date()} baseDate={firstDate.clone()}
                             month={month} currentDate={this.props.currentDate} events={this.props.events} isShowMonth={true}
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

export default WeeksList;