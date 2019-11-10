import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCharacterById } from "../../redux/actions";
import Character from "../../components/Character";
import List from "../../components/List";
import { Grid, CircularProgress } from "@material-ui/core";
import { Button } from "@material-ui/core";
import "./Hero.css";

class Hero extends Component {
  componentDidMount() {
    this.props.fetchCharacterById(this.props.match.params.id);
  }

  render() {
    let hero = [];
    let content = {};
    if (this.props.hero[0]) {
      hero = this.props.hero[0];
      content = {
        comics: hero.comics,
        events: hero.events,
        series: hero.series,
        stories: hero.stories
      };
    }
    return (
      <Fragment>
        <div className="back-button">
          <Link to="/">
            <Button variant="contained" color="primary">
              Back to Home
            </Button>
          </Link>
        </div>
        {this.props.loading || !this.props.hero[0] ? (
          <div align="center">
            <CircularProgress className="loader" />
          </div>
        ) : (
          <Grid container spacing={3} justify="center">
            <Grid item md={8} sm={12}>
              <Character
                name={hero.name}
                description={hero.description}
                image={hero.thumbnail}
                imageSize={350}
              />
              {Object.keys(content).map((comics, key) => (
                <List key={key} title={comics} items={content.comics.items} />
              ))}
            </Grid>
          </Grid>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    hero: state.hero
  };
};

export default connect(mapStateToProps, { fetchCharacterById })(Hero);
