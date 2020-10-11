import React from "react";
import { makeStyles } from "@material-ui/styles";
import Navbar from "../../Components/BaseNavbar";
import MyStyles from "../../assets/styles/MyStyles";
import Storecard from "../../Components/Storecard";
const mocks = [
  {
    imageSource: "https://www.w3schools.com/css/paris.jpg",
    discountValue: 15,
    storeName: "random store",
  },
  {
    imageSource: "https://www.w3schools.com/css/paris.jpg",
    discountValue: 15,
    storeName: "random store",
  },
  {
    imageSource: "https://www.w3schools.com/css/paris.jpg",
    discountValue: 15,
    storeName: "random store",
  },
  {
    imageSource: "https://www.w3schools.com/css/paris.jpg",
    discountValue: 15,
    storeName: "random store",
  },
  {
    imageSource: "https://www.w3schools.com/css/paris.jpg",
    discountValue: 15,
    storeName: "random store",
  },
  {
    imageSource: "https://www.w3schools.com/css/paris.jpg",
    discountValue: 15,
    storeName: "random store",
  },
  {
    imageSource: "https://www.w3schools.com/css/paris.jpg",
    discountValue: 15,
    storeName: "random store",
  },
  {
    imageSource: "https://www.w3schools.com/css/paris.jpg",
    discountValue: 15,
    storeName: "random store",
  },
  {
    imageSource: "https://www.w3schools.com/css/paris.jpg",
    discountValue: 15,
    storeName: "random store",
  },
  {
    imageSource: "https://www.w3schools.com/css/paris.jpg",
    discountValue: 15,
    storeName: "random store",
  },
];
const useStyles = makeStyles({
  root: {
    marginTop: "12px",
    paddingTop: "24px",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    placeItems: "center",
  },
  banner: {
    display: "flex",
    width: "80%",
    height: "150px",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid",
    borderColor: MyStyles.colors.black,
  },
  mainStoreList: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    paddingLeft: "10%",
    marginTop: "24px",
    overflow: "scroll",
    overflowX: "hidden",
  },
  header: {
    color: MyStyles.colors.primary,
    fontSize: 24,
    fontWeight: "bold",
  },
  storeCardContainer: {
    display: "flex",
    marginTop: "12px",
  },
  secondaryHeader: {
    color: MyStyles.colors.black,
    fontSize: 22,
    fontWeight: "bold",
  },
});
const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <div className={classes.root}>
        <div className={classes.banner}>BANNER BONITO AQUI</div>
        <div className={classes.mainStoreList}>
          <div className={classes.header}>Descontos perto de você!</div>
          <div className={classes.storeCardContainer}>
            {mocks.map((mock) => (
              <Storecard
                imageSource={mock.imageSource}
                discountValue={mock.discountValue}
                storeName={mock.storeName}
                width="350px"
              />
            ))}
          </div>
        </div>
        <div className={classes.mainStoreList}>
          <div className={classes.secondaryHeader}>
            Outros estabelecimentos:
          </div>
          <div className={classes.storeCardContainer}>
            {mocks.map((mock) => (
              <Storecard
                imageSource={mock.imageSource}
                discountValue={mock.discountValue}
                storeName={mock.storeName}
                width="250px"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
