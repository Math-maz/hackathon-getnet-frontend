import React from "react";
import { makeStyles } from "@material-ui/styles";
import Navbar from "../../Components/BaseNavbar";
import MyStyles from "../../assets/styles/MyStyles";
import Storecard from "../../Components/Storecard";
import Banner from "../../assets/styles/images/banner.png";
const mocks = [
  {
    imageSource: "https://www.w3schools.com/css/paris.jpg",
    storeName: "random store",
    storeCategory: "Vestuario",
  },
  {
    imageSource: "https://www.w3schools.com/css/paris.jpg",
    discountValue: 15,
    storeName: "random store",
    storeCategory: "Vestuario",
  },
  {
    imageSource: "https://www.w3schools.com/css/paris.jpg",
    discountValue: 15,
    storeName: "random store",
    storeCategory: "Vestuario",
  },
  {
    imageSource: "https://www.w3schools.com/css/paris.jpg",
    discountValue: 15,
    storeName: "random store",
    storeCategory: "Vestuario",
  },
  {
    imageSource: "https://www.w3schools.com/css/paris.jpg",
    discountValue: 15,
    storeName: "random store",
    storeCategory: "Vestuario",
  },
  {
    imageSource: "https://www.w3schools.com/css/paris.jpg",
    discountValue: 15,
    storeName: "random store",
    storeCategory: "Vestuario",
  },
  {
    imageSource: "https://www.w3schools.com/css/paris.jpg",
    discountValue: 15,
    storeName: "random store",
    storeCategory: "Vestuario",
  },
  {
    imageSource: "https://www.w3schools.com/css/paris.jpg",
    discountValue: 15,
    storeName: "random store",
    storeCategory: "Vestuario",
  },
  {
    imageSource: "https://www.w3schools.com/css/paris.jpg",

    discountValue: 15,
    storeName: "random store",
    storeCategory: "Vestuario",
  },
  {
    imageSource: "https://www.w3schools.com/css/paris.jpg",
    discountValue: 15,
    storeName: "random store",
    storeCategory: "Vestuario",
  },
];
const useStyles = makeStyles({
  root: {
    paddingTop: "24px",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    placeItems: "center",
    backgroundColor: MyStyles.colors.gray,
    marginBottom: "48px",
  },
  banner: {
    width: "80%",
  },
  mainStoreList: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginTop: "24px",
  },
  header: {
    color: MyStyles.colors.primary,
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: "10%",
  },
  storeCardContainer: {
    display: "flex",
    marginTop: "12px",
    overflow: "scroll",
    overflowY: "hidden",
    paddingLeft: "10%",
    overflowX: "hidden",
    paddingBottom: "36px",
  },
  secondaryHeader: {
    color: MyStyles.colors.black,
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: "10%",
  },
});
const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <div className={classes.root}>
        <img src={Banner} alt="" className={classes.banner} />
        <div className={classes.mainStoreList}>
          <div className={classes.header}>Descontos perto de você!</div>
          <div className={classes.storeCardContainer}>
            {mocks.map((mock) => (
              <Storecard
                imageSource={mock.imageSource}
                discountValue={mock.discountValue}
                storeName={mock.storeName}
                width="350px"
                type="primary"
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
                storeCategory={mock.storeCategory}
                width="250px"
                type="secondary"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
