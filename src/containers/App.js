import React, { Component } from 'react';
import Card from '../components/Card';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    //state
    this.state={
        cats: [],
        searchfield: '',
        }
  }

  //Inorder to trigger the changes on search filed
  onSearchChange=(event)=>{
    this.setState({searchfield:event.target.value})  
  }

  //fetch the cats data
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({cats:users}))
  }
  
  render() {
    const {cats,searchfield}=this.state;
    //If there is no cats
    return cats.length===0 ? <h1 className='f1 white pa3 tc'>Loading.....!!</h1>
    //cats exist
    :
      (
        <div className="tc">
          <h1 className='f1 white'>Kitty Cats</h1>
          <SearchBox onSearchChange={this.onSearchChange} searchfield={this.state.searchfield} />
          <Scroll>
          {
          //filtering and sending cats to card component
            cats
              .filter(cat => {
                return cat.name.toLowerCase().includes(searchfield.toLowerCase());
              })
              .map((cat, i) => {
                return <Card cat={cat.name} email={cat.email} key={i} />
              })
            }
          </Scroll>
        
        </div>
      );
    }
  
}
export default App;
