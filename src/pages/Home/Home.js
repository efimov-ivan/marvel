import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { fetchCharacters } from "../../redux/actions";
import { Link } from "react-router-dom";
import Character from "../../components/Character";
import { Grid, Typography, CircularProgress } from "@material-ui/core";

class Home extends Component {
  handleScroll = () => {
    if (
      window.innerHeight + window.scrollY === document.body.scrollHeight &&
      this.props.location.pathname === "/"
    ) {
      this.props.fetchCharacters(this.props.characters);
    }
  };

  removeHandleScroll = () => {
    window.removeEventListener("scroll", this.handleScroll, false);
  };

  componentDidMount() {
    this.props.fetchCharacters();
    window.addEventListener("scroll", this.handleScroll, false);
  }

  render() {
    return (
      <Fragment>
        <Typography variant="h2" align="center">
          Marvel's characters
        </Typography>

        {this.props.characters ? (
          <Grid container spacing={3} className="character-list">
            {this.props.characters.map((character, key) => (
              <Grid item lg={4} md={6} sm={12} key={key}>
                <Link
                  to={`/hero/${character.id}`}
                  onClick={this.removeHandleScroll}
                >
                  <Character
                    name={character.name}
                    description={character.description}
                    image={character.thumbnail}
                    imageSize={150}
                  />
                </Link>
              </Grid>
            ))}
          </Grid>
        ) : null}

        {this.props.loading ? (
          <div align="center">
            <CircularProgress className="loader" />
          </div>
        ) : null}
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.loading,
    characters: state.characters
  };
}

export default connect(mapStateToProps, { fetchCharacters })(Home);
