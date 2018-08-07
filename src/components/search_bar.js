import React, { Component } from 'react';

// const SearchBar = () => {
//   return <input />;
// };

class SearchBar extends Component{
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }


  render() {
    return <input onChange={event => this.setState({ term: event.target.value )} />;
  }

  //event handler
    //handleInputChange or  onInputChange
 
  //onInputChange(event) {
    //console.log(event.target.value);
 // }
}
export default SearchBar;
  