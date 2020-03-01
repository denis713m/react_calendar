import React from 'react';
import styles from './Menu.module.scss'

function Menu(props) {

  const showMonth = (b) =>{
    props.showMonth(b);
  };


  return (
    <div className={styles.container}>
      <div className={styles.button} onClick={() => {showMonth(false)}}>
        This week
      </div>
      <div className={styles.button} onClick={() => {showMonth(true)}}>
        This month
      </div>
    </div>
  );
}

export default Menu;