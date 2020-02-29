import React from 'react';
import styles from './App.module.css';
import Header from './components/header/Header.js';
import Calendar from './components/calendar/Calendar';
import moment from 'moment';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuShown: false,
            isShowMonth: true,
            today: moment(),
        };
    }

    showMenu = () => {
        this.setState({
            isMenuShown: !this.state.isMenuShown
        });
    };

    showMonth = (b) => {
        this.setState({
            isMenuShown: !this.state.isMenuShown,
            isShowMonth: b,
            today: moment()
        });
    };

    prev = () => {
        (this.state.isShowMonth) ?
            this.setState({
                isMenuShown: false,
                today: this.state.today.subtract(1, 'M')
            })
            :
            this.setState({
                isMenuShown: false,
                today: this.state.today.subtract(6, 'd')
            });
        console.log(this.state.today.date());
    };


    next = () => {
        (this.state.isShowMonth) ?
            this.setState({
                isMenuShown: false,
                today: this.state.today.add(1, 'M')
            })
            :
            this.setState({
                isMenuShown: false,
                today: this.state.today.add(6, 'd')
            });
    };

    render() {
        return (
            <div className={styles.container}>
                <Header today={this.state.today} ismenu={this.state.isMenuShown}
                        isShowMonth={this.state.isShowMonth} showMenu={this.showMenu}
                        showMonth={this.showMonth}
                        prev={this.prev} next={this.next}/>
                <Calendar today={this.state.today}
                          isShowMonth={this.state.isShowMonth}/>

            </div>

        );
    }

}

export default App;
