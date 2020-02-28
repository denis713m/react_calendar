import React from 'react';
import styles from './App.module.css';
import Header from './components/header/Header.js';
import Calendar from "./components/calendar/Calendar";
import moment from 'moment';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuShown: false,
            isShowMonth: true,
            today: moment(),
        }
    }

    showMenu = () => {
        this.setState({
            isMenuShown: !this.state.isMenuShown
        })
    };

    showMonth = (b) => {
        this.setState({
            isMenuShown: !this.state.isMenuShown,
            isShowMonth: b
        })
    };

    prev = () => {
        this.setState({
            today: this.state.today.subtract(7, "d"),
        })
    };

    next = () => {
        this.setState({
            today: this.state.today.add(7, "d")
        })
    };

    render() {
        return (
            <div className={styles.container}>
                <Header today={this.state.today} ismenu={this.state.isMenuShown} showMenu={this.showMenu} showMonth={this.showMonth}
                        prev={this.prev} next={this.next}/>
                <Calendar today={this.state.today} showMonth={this.state.isShowMonth}/>

            </div>

        );
    }


}

export default App;
