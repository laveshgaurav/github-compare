import React, { Component } from "react";
import axios from "axios";
import ProfileCard from "./ProfileCard";
export class InputName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
      username: "",
      loading: true,
    };
  }

  myChangeHandler = (event) => {
    this.setState({ username: event.target.value });
  };
  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const result = await axios.get(
        `https://api.github.com/users/${this.state.username}`
      );
      console.log(result.data);
      this.setState((prevState) => ({
        profiles: [...prevState.profiles, result.data],
      }));
      this.setState({ loading: false });
      console.log(this.state.profiles);
    } catch (err) {
      console.log(err);
    }
    this.setState({
      username: "",
    });
  };
  render() {
    return (
      <div>
        <form>
          <h1>Hello {this.state.username}</h1>
          <p>Enter your name:</p>
          <input
            value={this.state.username}
            type="text"
            onChange={this.myChangeHandler}
          />
          <button onClick={this.handleSubmit}>Search</button>
        </form>
        {this.state.profiles.map((users) => (
          <ProfileCard username={users.login} id={users.id} />
        ))}
      </div>
    );
  }
}

export default InputName;
