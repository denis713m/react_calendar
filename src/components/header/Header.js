import React from 'react';
import styles from './Header.module.css';
import { mdiChevronDown, mdiChevronUp } from '@mdi/js';
import Icon from '@mdi/react';
import Menu from './menu/Menu.js';

class Header extends React.Component {

  showMenu = () =>{
    this.props.showMenu();
  };

  showMonth = (b) =>{
    this.props.showMonth(b);
  };

  prev = () => {
    this.props.prev();
  };

  next = () => {
    this.props.next();
  };

  render () {
    return (
      <div className={styles.container}>
        <div className={styles.navContainer}>
          <div className={styles.prevnext} onClick={this.prev}>PREV</div>
          <div className={styles.thisMonthWeek}>
            {this.props.today.format('MMMM')}
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
          <div className={styles.prevnext} onClick={this.next}>NEXT</div>

        </div>
        {(this.props.ismenu) ?
         (<Menu showMonth={this.showMonth}/>): null}
      </div>

    );
  }

}

export default Header;