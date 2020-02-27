import React from 'react';
import styles from './Header.module.css';
import { mdiChevronDown } from '@mdi/js';
import Icon from '@mdi/react';
import Menu from './menu/Menu.js';

class Header extends React.Component {

  showMenu = () =>{
    this.props.showMenu();
  };
  render () {
    return (
      <>
        <div className={styles.container}>
          <div className={styles.prevnext}>PREV</div>
          <div className={styles.thisMonthWeek}>
            JUNE
            <Icon path={mdiChevronDown}
                  size={1}
                  color="#E6EAEE"
                  opacity={0.5}
                  onClick={this.showMenu}
            />
          </div>
          <div className={styles.prevnext}>NEXT</div>

        </div>
        {(this.props.ismenu) ?
         (<Menu/>): null}
      </>
    );
  }

}

export default Header;