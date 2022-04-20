import "./App.css";
import React, { Component } from "react";
import Clarifai from "clarifai";
import Navigation from "../components/Navigation/Navigation";
import Logo from "../components/Logo/Logo";
import ImageLinkForm from "../components/ImageLinkForm/ImageLinkForm";
import Rank from "../components/Rank/Rank";
import Tlo from "../components/tlo/tlo";
import Face from "../components/Face/Face";

const app = new Clarifai.App({
  apiKey: "You must add your own API key here from Clarifai.",
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
    };
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
    // this.setState({input: event.target.value});
  };
  onSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
      function (response) {
        console.log(response);
      },
      function (err) {}
    );
  };

  render() {
    return (
      <div className="App">
        <Tlo />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        <Face imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
