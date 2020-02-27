import React from 'react';
import styles from './App.module.css';
import Header from './components/header/Header.js';

class App extends React.Component{
  constructor (props){
    super(props);
    this.state = {
      isMenuShown: false,
      showMonth: true
    }
  }

  showMenu = () => {
    this.setState({
      isMenuShown: !this.state.isMenuShown
                  })
  };

  render () {
    return (
      <div className={styles.container}>
        <Header ismenu={this.state.isMenuShown} showMenu={this.showMenu}/>
      </div>

    );
  }


}

export default App;
