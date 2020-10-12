import React from "react";
import { InputAdornment, InputBase, IconButton } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import MyStyles from "../../assets/styles/MyStyles";
const useStyles = makeStyles({
  root: {
    backgroundColor: MyStyles.colors.gray,
    borderRadius: 25,
    marginLeft: "10px",
    border: "1px solid #ccc",
  },
  textInput: {
    width: "300px",
    borderRadius: "24%",
    color: MyStyles.colors.primary,
    fontWeight: "bold",
  },
});
export default function Searchbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <IconButton>
        <Search style={{ color: MyStyles.colors.primary }} />
      </IconButton>
      <InputBase
        id="input-with-icon-textfield"
        className={classes.textInput}
        placeholder="Buscar qualquer estabelecimento"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}
