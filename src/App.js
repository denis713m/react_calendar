import React from 'react';
import styles from './App.module.css';
import Header from './components/header/Header.js';
import Calendar from './components/calendar/Calendar';
import moment from 'moment';

const events = [{
    "date": "2020.01.30",
    "events": [
        {
            "name": "Event Name",
            "body": "Event Body",
            "time": "10:15",
            "isIn": false
        },
        {
            "name": "Event Name",
            "body": "Event Body",
            "time": "18:47",
            "isIn": true
        }
    ]
},

    {
        "date": "2020.02.27",
        "events": [
            {
                "name": "Event Name",
                "body": "Event Body",
                "time": "10:15",
                "isIn": false
            },
            {
                "name": "Event Name",
                "body": "Event Body",
                "time": "18:47",
                "isIn": true
            },
            {
                "name": "Event Name",
                "body": "Event Body",
                "time": "16:00",
                "isIn": true
            }
        ]
    },

    {
        "date": "2020.03.04",
        "events": [
            {
                "name": "Event Name",
                "body": "Event Body",
                "time": "12:00",
                "isIn": false
            }
        ]
    },
    {
        "date": "2020.03.12",
        "events": [
            {
                "name": "Event Name",
                "body": "Event Body",
                "time": "10:15",
                "isIn": false
            },
            {
                "name": "Event Name",
                "body": "Event Body",
                "time": "16:00",
                "isIn": true
            }
        ]
    }
    ,

    {
        "date": "2020.03.14",
        "events": [
            {
                "name": "Event Name",
                "body": "Event Body",
                "time": "10:15",
                "isIn": false
            },
            {
                "name": "Event Name",
                "body": "Event Body",
                "time": "18:47",
                "isIn": true
            },
            {
                "name": "Event Name",
                "body": "Event Body",
                "time": "16:00",
                "isIn": true
            }
        ]
    }
];



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuShown: false,
            isShowMonth: true,
            baseDate: moment(),
            currentDate: moment(),
            events: events,
        };
    }

    showMenu = () => {
        this.setState({
            isMenuShown: !this.state.isMenuShown
        });
    };

    showMonth = (b) => {
        this.setState({
            isMenuShown: false,
            isShowMonth: b,
            baseDate: moment(),
        });
    };

    prev = () => {
        (this.state.isShowMonth) ?
            this.setState({
                isMenuShown: false,
                baseDate: this.state.baseDate.subtract(1, 'M')
            })
            :
            this.setState({
                isMenuShown: false,
                baseDate: this.state.baseDate.subtract(6, 'd')
            });
    };


    next = () => {
        (this.state.isShowMonth) ?
            this.setState({
                isMenuShown: false,
                baseDate: this.state.baseDate.add(1, 'M')
            })
            :
            this.setState({
                isMenuShown: false,
                baseDate: this.state.baseDate.add(6, 'd')
            });
    };

    render() {
        return (
            <div className={styles.container}>
                <Header baseDate={this.state.baseDate} ismenu={this.state.isMenuShown}
                        isShowMonth={this.state.isShowMonth} showMenu={this.showMenu}
                        showMonth={this.showMonth}
                        prev={this.prev} next={this.next}/>
                <Calendar baseDate={this.state.baseDate} currentDate={this.state.currentDate}
                          isShowMonth={this.state.isShowMonth} events={this.state.events}

                />

            </div>

        );
    }

}

export default App;
