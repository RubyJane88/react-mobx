import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { RootStoreContext } from "store/rootStore";
import { AppBar, Box, Button, createStyles, Toolbar } from "@material-ui/core";
import TotalOfCharacters from "./TotalOfCharacters";
import { makeStyles } from "@material-ui/styles";
import { observer } from "mobx-react-lite";

const NavigationBar = () => {
  const { heroStore, villainStore } = useContext(RootStoreContext);
  const history = useHistory();
  const classes = useStyles();
  return (
    <AppBar position="static" style={{ marginBottom: "2rem" }}>
      <Toolbar>
        <Box>
          <Button
            className={classes.button}
            onClick={() => history.push("/")}
            color="inherit"
          >
            Home
          </Button>
        </Box>
        <Box>
          <Button
            className={classes.button}
            onClick={() => history.push("/heroes")}
            color="inherit"
          >
            Heroes
          </Button>
          <TotalOfCharacters total={heroStore.totalHeroesCount} />
        </Box>
        <Box>
          <Button
            className={classes.button}
            onClick={() => history.push("/villains")}
            color="inherit"
          >
            Villains
          </Button>
          <TotalOfCharacters total={villainStore.totalVillainsCount} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default observer(NavigationBar);

const useStyles = makeStyles(() =>
  createStyles({
    button: {
      margin: "0 0.5rem",
      "&:focus": {
        outline: "none",
      },
    },
  })
);
