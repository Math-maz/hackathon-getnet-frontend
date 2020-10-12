import React from "react";
import { makeStyles } from "@material-ui/styles";
import MyStyles from "../../assets/styles/MyStyles";
import Searchbar from "../Searchbar";
import { AccountCircle, ExitToApp } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { useLocation, useHistory } from "react-router-dom";
import Logo from "../../assets/styles/images/icon.png";
import HomeContext from "../../lib/context/home/HomeContext";
import { formatToCurrency } from "../../helpers/formatter";
const useStyles = makeStyles({
  root: {
    position: "sticky",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: MyStyles.colors.white,
    display: "flex",
    justifyContent: "space-between",
    padding: "8px 10%",
    borderRadius: 10,
    WebkitBoxShadow: "2px 2px 5px 0px rgba(0,0,0,0.75)",
    alignItems: "center",
    zIndex: 10,
  },
  logo: { width: "48px", marginRight: "48px" },
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
  const {
    state: { user },
  } = React.useContext(HomeContext);
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  return (
    <nav className={classes.root}>
      <div className={classes.logoContainer}>
        <img src={Logo} className={classes.logo} alt="" />
        {location.pathname.includes("home") && <Searchbar />}
      </div>
      <div className={classes.userInfoContainer}>
        {!location.pathname.includes("chat/store") && (
          <div className={classes.accountBalance}>
            <div
              style={{
                color: MyStyles.colors.primary,
                fontSize: 14,
                alignSelf: "center",
              }}
            >
              Meu saldo
            </div>
            <div
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: MyStyles.colors.darks["70"],
              }}
            >
              {user.balance && formatToCurrency(user.balance)}
            </div>
          </div>
        )}
        <IconButton onClick={() => history.push("/carteira")}>
          <AccountCircle
            fontSize="large"
            style={{ color: MyStyles.colors.primary }}
          />
        </IconButton>
        <IconButton>
          <ExitToApp
            fontSize="large"
            style={{ color: MyStyles.colors.primary }}
          />
        </IconButton>
      </div>
    </nav>
  );
};

export default Navbar;
