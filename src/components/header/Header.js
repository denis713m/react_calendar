import React from 'react';
import styles from './Header.module.css';
import { mdiChevronDown, mdiChevronUp } from '@mdi/js';
import Icon from '@mdi/react';
import Menu from './menu/Menu.js';

class Header extends React.Component {

  showMenu = () => {
    this.props.showMenu();
  };

  showMonth = (b) => {
    this.props.showMonth(b);
  };

  prev = () => {
    this.props.prev();
  };

  next = () => {
    this.props.next();
  };

  prevNextMonthName = () => {
    const date = this.props.baseDate.clone();
    return [date.subtract(1, 'M').format('MMM'), date.add(2, 'M')
                                                     .format('MMM')];
  };

  calendarName = () => {
    const dateStart = this.props.baseDate.clone()
                          .subtract(this.props.baseDate.day(), 'd');
    const dateEnd = dateStart.clone().add(6, 'd');
    if (dateStart.month() === dateEnd.month()) {
      return `${dateStart.format('MMM DD')}-${dateEnd.format('DD')}`;
    } else {
      return `${dateStart.format('MMM-DD')} - ${dateEnd.format('MMM-DD')}`;
    }

  };

  render () {

    return (
      <div className={styles.container}>
        <div className={styles.navContainer}>
          <div className={styles.prevnext} onClick={this.prev}>
            {(this.props.isShowMonth) ?
             this.prevNextMonthName()[0]
                                      :
             'PREV'
            }
          </div>
          <div className={styles.thisMonthWeek}>
            {(this.props.isShowMonth) ?
             this.props.baseDate.format('MMMM').toUpperCase() :
             this.calendarName()
            }
            {
              (!this.props.ismenu) ?
              (
                <Icon path={mdiChevronDown}
                      size={1}
                      color="#E6EAEE"
                      opacity={0.5}
                      onClick={this.showMenu}
                />
              )
                                   :
              (
                <Icon path={mdiChevronUp}
                      size={1}
                      color="#E6EAEE"
                      opacity={0.5}
                      onClick={this.showMenu}
                />
              )

            }

          </div>
          <div className={styles.prevnext} onClick={this.next}>{
            (this.props.isShowMonth) ?
            this.prevNextMonthName()[1]
                                     :
            'NEXT'
          }</div>

        </div>
        {(this.props.ismenu) ?
         (<Menu showMonth={this.showMonth}/>) : null}
      </div>

    );
  }

}

export default Header;