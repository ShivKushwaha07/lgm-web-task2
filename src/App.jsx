import React, {Component} from 'react';
import Users from './Components/Users'
import './style.css'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {userData : [], loading: false};
    this.updateState = this.updateState.bind(this);
  }
  updateState(){
    this.setState({loading: true});
    setTimeout(
      async function(){
        const response = await fetch('https://reqres.in/api/users?page=1');
        const data = await response.json();
        console.log(data);
        this.setState({userData: data['data'], loading: false});
      }.bind(this),
2000);
  }
  
  render(){
  return (
    <>
      <nav className='navbar'>
        <div className="nav_items">
          <h2>letsGrowMore</h2>
          <button className='fetch_btn' onClick={this.updateState}>
            Get User Data
          </button>
        </div>
      </nav>
      <div className='user_data_box'>
        <Users loading = {this.state.loading} users = {this.state.userData} />
      </div>
    </>
  );
}
}

export default App;
