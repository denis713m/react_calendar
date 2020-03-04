import React from 'react';
import styles from './Header.module.sass';
import { mdiChevronDown, mdiChevronUp } from '@mdi/js';
import Icon from '@mdi/react';
import Menu from './menu/Menu.js';
import momentPropTypes from "react-moment-proptypes";
import PropTypes from "prop-types";


function Header (props) {

  const showMenu = () => {
    props.showMenu();
  };

  const showMonth = (b) => {
    props.showMonth(b);
  };

  const prev = () => {
    props.prev();
  };

  const next = () => {
    props.next();
  };

  const prevNextMonthName = () => {
    const date = props.baseDate.clone();
    return [date.subtract(1, 'M').format('MMM'), date.add(2, 'M')
                                                     .format('MMM')];
  };

  const calendarName = () => {
    const dateStart = props.baseDate.clone()
                          .subtract(props.baseDate.day(), 'd');
    const dateEnd = dateStart.clone().add(6, 'd');
    if (dateStart.month() === dateEnd.month()) {
      return `${dateStart.format('MMM DD')}-${dateEnd.format('DD')}`;
    } else {
      return `${dateStart.format('MMM-DD')} - ${dateEnd.format('MMM-DD')}`;
    }

  };


    return (
      <div className={styles.container}>
        <div className={styles.navContainer}>
          <div className={styles.prevnext} onClick={prev}>
            {(props.isShowMonth) ?
             prevNextMonthName()[0]
                                      :
             'PREV'
            }
          </div>
          <div className={styles.thisMonthWeek}>
            {(props.isShowMonth) ?
             props.baseDate.format('MMMM').toUpperCase() :
             calendarName()
            }
            {
              (!props.ismenu) ?
              (
                <Icon path={mdiChevronDown}
                      size={1}
                      color="#E6EAEE"
                      opacity={0.5}
                      onClick={showMenu}
                />
              )
                                   :
              (
                <Icon path={mdiChevronUp}
                      size={1}
                      color="#E6EAEE"
                      opacity={0.5}
                      onClick={showMenu}
                />
              )

            }

          </div>
          <div className={styles.prevnext} onClick={next}>{
            (props.isShowMonth) ?
            prevNextMonthName()[1]
                                     :
            'NEXT'
          }</div>

        </div>
        {(props.ismenu) ?
         (<Menu showMonth={showMonth}/>) : null}
      </div>

    );


}

Header.propTypes = {
    baseDate: momentPropTypes.momentObj.isRequired,
    ismenu: PropTypes.bool.isRequired,
    isShowMonth: PropTypes.bool.isRequired,
    showMenu:PropTypes.func.isRequired,
    showMonth:PropTypes.func.isRequired,
    prev:PropTypes.func.isRequired,
    next:PropTypes.func.isRequired

};

export default Header;