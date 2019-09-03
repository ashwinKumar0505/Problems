import React, { Component } from "react";
import classes from "./GitRepo.module.css";
import Search from "./Search";
class GitRepo extends Component {
  state = {
    userName: "",
    repoName: "",
    repos: [],
    repoNames: [],
    HasRepo: false,
    shouldClearRepo: false,
    shouldFilterRepo: false,
    userNotFound: false,
  };
  changeUser = event => {
    this.setState({
      userName: event.target.value,
    });
  };
  searchUser = () => {
    const requestUrl =
      "https://api.github.com/users/" + this.state.userName + "/repos";
    fetch(requestUrl)
      .then(res => res.json())
      .then(json => {
        this.setState({
          repos: json,
        });
        if (this.state.repos.message === "Not Found") {
          this.setState({
            HasRepo: false,
            shouldClearRepo: false,
            shouldFilterRepo: false,
            userNotFound: true,
          });
          return;
        }
        let repoNames = this.state.repos.map(repo => {
          return repo.name;
        });
        this.setState({
          repoNames: repoNames,
          HasRepo: true,
          shouldClearRepo: false,
          shouldFilterRepo: false,
          userNotFound: false,
        });
      });
  };
  clearUser = () => {
    this.setState({
      userName: "",
      shouldClearRepo: true,
      HasRepo: false,
      shouldFilterRepo: false,
      userNotFound: false,
    });
  };
  filterRepo = (event) => {
    this.setState({
      repoName: event.target.value,
      shouldClearRepo: false,
      HasRepo: false,
      shouldFilterRepo: true,
      userNotFound: false,
    });
  };
  render() {
    let DisplayRepo = "";
    if (this.state.HasRepo) {                                        //Displaying the repos
      DisplayRepo = this.state.repoNames.map(repo => {
        return (
          <p className={classes.displayRepo} key={repo}>
            {repo}
          </p>
        );
      });
    }
    if (this.state.shouldClearRepo) {                                 //clearing the repos
      DisplayRepo = null;
    }
    if (this.state.userNotFound) {                                     //If userName does not exits
      DisplayRepo = (
        <p className={classes.wrongUserName}>No UserName Exits in This Name</p>
      );
    }
    if (this.state.shouldFilterRepo) {                                   //Filtering the repos
      let filter = this.state.repoName;
      DisplayRepo = this.state.repoNames.map(repo => {
        if (repo.includes(filter)) {
          return (
            <p className={classes.displayRepo} key={repo}>
              {repo}
            </p>
          );
        } else {
          return null;
        }
      });
    }
    return (
      <div>
        <h1 className={classes.heading}>Git Repository</h1>
        <div className={classes.Container}>
          <Search
            userName={this.state.userName}
            changeUser={this.changeUser}
            searchUser={this.searchUser}
            clearUser={this.clearUser}
            filterRepo={this.filterRepo}
            clearRepo={this.clearRepo}
          />
          {DisplayRepo}
        </div>
      </div>
    );
  }
}

export default GitRepo;
