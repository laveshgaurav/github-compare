import React, { Component } from "react";
import axios from "axios";
import ProfileCard from "./ProfileCard";
import "./InputName.css";
export class InputName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
      username: "",
      loading: true,
      wrongEntry: false,
    };
  }

  myChangeHandler = (event) => {
    this.setState({ username: event.target.value.replace(/\s+/g, "") });
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
      console.log(err.message);
      this.setState({ wrongEntry: true });
    }
    this.setState({
      username: "",
    });
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <div className="inputName__search-container">
            <form className="box" onSubmit={this.handleSubmit}>
              <input
                value={this.state.username}
                placeholder="Search Profile"
                type="text"
                onChange={this.myChangeHandler}
              />
              <div onClick={this.handleSubmit} className="inputName__search">
                <i className="fas fa-search"></i>
              </div>
            </form>
          </div>
        </div>
        {this.state.wrongEntry ? (
          <div
            className="row text-center m-auto"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              class="alert alert-danger alert-dismissible fade show"
              role="alert"
            >
              <p>Profile doesn't exist, search again!</p>
              <button
                type="button"
                class="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        ) : null}
        {this.state.loading ? (
          <h2 style={{ color: "#ededed" }}>Search For Profile</h2>
        ) : null}

        <div className="profileBox">
          {this.state.profiles.map((users) => (
            <ProfileCard
              username={users.login}
              id={users.id}
              image={users.avatar_url}
              profile={users.html_url}
              followers={users.followers}
              following={users.following}
              created={users.created_at}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default InputName;
