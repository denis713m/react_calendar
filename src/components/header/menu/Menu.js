import React from 'react';
import styles from './Menu.module.css'

/*class Menu extends React.Component {
  render () {
    return (
      <div>
        <div>
          <p>This week</p>
        </div>
        <div>
          <p>This month</p>
        </div>
      </div>
    );
  }
}*/

function Menu() {

  const showMonth = (b) =>{
    this.props.showMonth(b);
  };


  return (
    <div className={styles.container}>
      <div className={styles.button} onClick={() => {showMonth(true)}}>
        This week
      </div>
      <div className={styles.button} onClick={() => {showMonth(false)}}>
        This month
      </div>
    </div>
  );
}

export default Menu;