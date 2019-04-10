import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from '@material-ui/core/IconButton';
import Refresh from "@material-ui/icons/Refresh";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";


const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    flexGrow: 1,
    
  },
  menu: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
});


class Header extends Component {

  handleRefreshClick = () => this.props.refreshPage()
  

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default" className={classes.appBar}>
          <Toolbar className={classes.menu}>
            <h1 className="h5">
              Suggest me a movie
            </h1>
            <div>

            <Link to={"/favs"}>
              <IconButton onClick={this.handleFavsClick}>
                <FavoriteBorder color="action" fontSize="large" />
              </IconButton>
            </Link>
            <Link to={"/"}>
              <IconButton onClick={this.handleRefreshClick}>
                <Refresh color="action" fontSize="large" />
              </IconButton>
            </Link>
            </div>
          </Toolbar>
        </AppBar>
        
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Header);
