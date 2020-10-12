import React from "react";
import { makeStyles } from "@material-ui/styles";
import MyStyles from "../assets/styles/MyStyles";
import { AccountCircle } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    position: "sticky",
    marginRight: '20px',
    display: "flex",
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  logo: { width: "150px" },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  userInfoContainer: { display: "flex" },
  accountBalance: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
const Navbar = () => {
  const classes = useStyles();
  return (
    <nav className={classes.root}>
      <div>
        Olá! Fulano
      </div>
      <div className={classes.userInfoContainer}>
        <IconButton>
          <AccountCircle
            fontSize="large"
            style={{ color: MyStyles.colors.primary }}
          />
        </IconButton>
      </div>
    </nav>
  );
};

export default Navbar;
