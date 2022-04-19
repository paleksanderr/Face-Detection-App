
import './App.css';
import React, { Component } from 'react';
import Clarifai from "clarifai";
import Navigation from '../components/Navigation/Navigation';
import Logo from '../components/Logo/Logo';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import Rank from '../components/Rank/Rank';
import Tlo from '../components/tlo/tlo';

//You must add your own API key here from Clarifai.
const app = new Clarifai.App({
  apiKey: "0b13020848bb4a6fb2b83895d1e7a5b5",
});

class App extends Component {
  constructor() {
    super();
    this.state = { 
      input: '',}
    }

    onInputChange = (event) => {
      console.log(event.target.value);
      // this.setState({input: event.target.value});
    }
    onSubmit = () => {
      console.log('submit');
    }
  

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render() {

    return (
      <div className="App">
      <Tlo />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm 
      onInputChange={this.onInputChange} 
      onSubmit={this.onSubmit}/>
      {/* <FaceRecognition /> */}
    </div>
  );
}}

export default App;
