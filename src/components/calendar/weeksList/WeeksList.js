import React from 'react'
import styles from './WeeksList.module.css'
import Week from "../week/Week";

function WeeksList(props) {
    return (
        <>
            <Week today={props.today}/>


            {(props.showMonth) ?
                (
                    <>
                        <div className={styles.container}>
                            <div className={styles.day}>1</div>
                            <div className={styles.day}>2</div>
                            <div className={styles.day}>3</div>
                            <div className={styles.day}>4</div>
                            <div className={styles.day}>5</div>
                            <div className={styles.day}>6</div>
                            <div className={styles.day}>7</div>
                        </div>
                        <div className={styles.container}>
                            <div className={styles.day}>1</div>
                            <div className={styles.day}>2</div>
                            <div className={styles.day}>3</div>
                            <div className={styles.day}>4</div>
                            <div className={styles.day}>5</div>
                            <div className={styles.day}>6</div>
                            <div className={styles.day}>7</div>
                        </div>

                        <div className={styles.container}>
                            <div className={styles.day}>1</div>
                            <div className={styles.day}>2</div>
                            <div className={styles.day}>3</div>
                            <div className={styles.day}>4</div>
                            <div className={styles.day}>5</div>
                            <div className={styles.day}>6</div>
                            <div className={styles.day}>7</div>
                        </div>

                        <div className={styles.container}>
                            <div className={styles.day}>1</div>
                            <div className={styles.day}>2</div>
                            <div className={styles.day}>3</div>
                            <div className={styles.day}>4</div>
                            <div className={styles.day}>5</div>
                            <div className={styles.day}>6</div>
                            <div className={styles.day}>7</div>
                        </div>
                    </>
                ) :
                null}


        </>
    )
}

export default WeeksList;