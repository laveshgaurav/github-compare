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
      value: "login",
    };

    this.sortById = this.sortById.bind(this);
    this.sortByFollowers = this.sortByFollowers.bind(this);
    this.sortByFollowing = this.sortByFollowing.bind(this);
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
      this.setState({ wrongEntry: false });
    } catch (err) {
      console.log(err.message);
      this.setState({ wrongEntry: true });
    }
    this.setState({
      username: "",
    });
  };
  sortById() {
    var sortedProfile = this.state.profiles.sort((a, b) => a.id - b.id);
    this.setState({ profiles: [...sortedProfile] });
    console.log(this.state.profiles);
  }
  sortByFollowers() {
    var sortedProfile = this.state.profiles.sort(
      (a, b) => a.followers - b.followers
    );
    this.setState({ profiles: [...sortedProfile] });
    console.log(this.state.profiles);
  }
  sortByFollowing() {
    var sortedProfile = this.state.profiles.sort(
      (a, b) => a.following - b.following
    );
    this.setState({ profiles: [...sortedProfile] });
    console.log(this.state.profiles);
  }
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
              style={{ margin: "0.4rem" }}
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
          <div className="container">
            <h4 style={{ color: "#ededed" }}>Search For Profile</h4>
          </div>
        ) : (
          <div className="container">
            <button className="submitBtn" onClick={this.sortById}>
              Sort By Id
            </button>
            <button className="submitBtn" onClick={this.sortByFollowers}>
              Sort By Followers
            </button>
            <button className="submitBtn" onClick={this.sortByFollowing}>
              Sort By Following
            </button>
          </div>
        )}

        <div className="profileBox">
          {this.state.profiles.sort().map((users) => (
            <ProfileCard
              username={users.login}
              id={users.id}
              image={users.avatar_url}
              profile={users.html_url}
              followers={users.followers}
              following={users.following}
              created={users.created_at}
              publicRepo={users.public_repos}
              publicGists={users.public_gists}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default InputName;
