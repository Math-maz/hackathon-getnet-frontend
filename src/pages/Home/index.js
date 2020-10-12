import React from "react";
import { makeStyles } from "@material-ui/styles";
import Navbar from "../../Components/BaseNavbar";
import MyStyles from "../../assets/styles/MyStyles";
import Storecard from "../../Components/Storecard";
import Banner from "../../assets/styles/images/banner.png";
import { IconButton } from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import Carousel, {
  slidesToShowPlugin,
  arrowsPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Api from "../../lib/Api";
import storeMocks from "../../mocks/storeMocks";
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
    overflowX: "hidden",
    paddingBottom: "36px",
    paddingLeft: "12px",
    paddingRight: "12px",
  },
  secondaryHeader: {
    color: MyStyles.colors.black,
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: "10%",
  },
  carouselArrow: {
    backgroundColor: MyStyles.colors.primary,
    color: MyStyles.colors.white,
  },
});
const Home = () => {
  const classes = useStyles();
  const [stores, setStores] = React.useState([]);
  React.useEffect(() => {
    Api.get("/store/all").then((res) => console.log(res.data));
  }, []);
  return (
    <>
      <Navbar />
      <div className={classes.root}>
        <img src={Banner} alt="" className={classes.banner} />
        <div className={classes.mainStoreList}>
          <div className={classes.header}>Descontos perto de você!</div>
          <div className={classes.storeCardContainer}>
            <Carousel
              plugins={[
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 3,
                  },
                },
                {
                  resolve: arrowsPlugin,
                  options: {
                    arrowLeft: (
                      <IconButton className={classes.carouselArrow}>
                        <KeyboardArrowLeft />
                      </IconButton>
                    ),
                    arrowRight: (
                      <IconButton className={classes.carouselArrow}>
                        <KeyboardArrowRight />
                      </IconButton>
                    ),
                    addArrowClickHandler: true,
                  },
                },
              ]}
            >
              {storeMocks.map((store, index) => (
                <Storecard
                  key={`${store.name}-${index}`}
                  imageSource={store.photoImgUrl}
                  discountValue={15}
                  storeName={store.name}
                  width="350px"
                  type="primary"
                />
                // <img src={mock.imageSource} />
              ))}
            </Carousel>
          </div>
        </div>
        <div className={classes.mainStoreList}>
          <div className={classes.secondaryHeader}>
            Outros estabelecimentos:
          </div>
          <div className={classes.storeCardContainer}>
            <Carousel
              plugins={[
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 4,
                  },
                },
                {
                  resolve: arrowsPlugin,
                  options: {
                    arrowLeft: (
                      <IconButton className={classes.carouselArrow}>
                        <KeyboardArrowLeft />
                      </IconButton>
                    ),
                    arrowRight: (
                      <IconButton className={classes.carouselArrow}>
                        <KeyboardArrowRight />
                      </IconButton>
                    ),
                    addArrowClickHandler: true,
                  },
                },
              ]}
            >
              {storeMocks.map((store, index) => (
                <Storecard
                  key={`${store.name}-${index}`}
                  imageSource={store.photoImgUrl}
                  discountValue={15}
                  storeName={store.name}
                  width="250px"
                  type="secondary"
                />
                // <img src={mock.imageSource} />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
