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
      repoNames: [],
      shouldClearRepo: true,
      HasRepo: false,
      shouldFilterRepo: false,
      userNotFound: false,
    });
  };
  filterRepo = event => {
    if (event.target.value === "") {
      this.setState({
        repoName: event.target.value,
        shouldClearRepo: false,
        HasRepo: true,
        shouldFilterRepo: false,
        userNotFound: false,
      });
    } else {
      this.setState({
        repoName: event.target.value,
        shouldClearRepo: false,
        HasRepo: false,
        shouldFilterRepo: true,
        userNotFound: false,
      });
    }
  };
  clearFilter = () => {
    this.setState({
      repoName: "",
      shouldClearRepo: false,
      HasRepo: true,
      shouldFilterRepo: true,
      userNotFound: false,
    });
  };
  enterKeyPress = event => {
    if (event.keyCode === 13 || event.which === 13) {
      console.log("here");
      this.searchUser();
    }
  };
  render() {
    let DisplayRepo = "";
    if (this.state.HasRepo) {
      //Displaying the repos
      DisplayRepo = this.state.repoNames.map(repo => {
        return (
          <p className={classes.displayRepo} key={repo}>
            {repo}
          </p>
        );
      });
    }
    if (this.state.shouldClearRepo) {
      //clearing the repos
      DisplayRepo = null;
    }
    if (this.state.userNotFound) {
      //If userName does not exits
      DisplayRepo = (
        <p className={classes.wrongUserName}>No UserName Exits in This Name</p>
      );
    }
    if (this.state.shouldFilterRepo) {
      //Filtering the repos
      let filter = this.state.repoName;
      DisplayRepo = this.state.repoNames.map(repo => {
        if (repo.includes(filter)) {
          let Display = "";
          let regrex = new RegExp(filter, "g");
          let indices = [],
            result;
          while ((result = regrex.exec(repo))) {
            indices.push(result.index);
          }

          let i = 0,
            j = filter.length;
          for (i; i < repo.length; ) {
            if (indices.includes(i)) {
              Display = [
                Display,
                <span style={{ backgroundColor: "yellow" }}>
                  {repo.substring(i, i + j)}
                </span>,
              ];
              i = i + j;
            } else {
              Display = [Display, <span>{repo[i]}</span>];
              i = i + 1;
            }
          }
          return <div style={{ padding: "30px",borderBottom: "2px solid #ddd",fontWeight:800,fontSize:"1em" ,marginLeft:"10px"}}>{Display}</div>;
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
            repoName={this.state.repoName}
            changeUser={this.changeUser}
            searchUser={this.searchUser}
            clearUser={this.clearUser}
            filterRepo={this.filterRepo}
            clearFilter={this.clearFilter}
            enterKeyPress={this.enterKeyPress}
          />
          {DisplayRepo}
        </div>
      </div>
    );
  }
}
export default GitRepo;
