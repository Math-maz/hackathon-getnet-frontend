import React from 'react';
import { Link } from 'react-router-dom';
import Profile from '../../Components/Profile';
import SideBar from '../../Components/Sidebar';
import Coursecard from '../../Components/Coursecard';
import { makeStyles } from "@material-ui/styles";
import MyStyles from '../../assets/styles/MyStyles';

const mocks = [
  {
    imageSource: "https://www.w3schools.com/css/paris.jpg",
    title: "Como fazer o fluxo de caixa de seu estabelecimento"
  },
  {
    imageSource: "https://www.w3schools.com/css/paris.jpg",
    title: "Como fazer o fluxo de caixa de seu estabelecimento"
  },
  {
    imageSource: "https://www.w3schools.com/css/paris.jpg",
    title: "Como fazer o fluxo de caixa de seu estabelecimento"
  },
  {
    imageSource: "https://www.w3schools.com/css/paris.jpg",
    title: "Como fazer o fluxo de caixa de seu estabelecimento"
  },
  {
    imageSource: "https://www.w3schools.com/css/paris.jpg",
    title: "Como fazer o fluxo de caixa de seu estabelecimento"
  },
  {
    imageSource: "https://www.w3schools.com/css/paris.jpg",
    title: "Como fazer o fluxo de caixa de seu estabelecimento"
  }      
];

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
  contentArea: {
    // display: 'flex',
    // flexDirection: 'column',
    width: '-webkit-fill-available',
  },
  content: {
    marginLeft: '30px',
    marginTop: '-30px'
  },
  bannerTitle: {
    fontWeight: 'lighter',
    color: MyStyles.colors.darks[50]
  },
  courseCardContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  moreCourses: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    '& a': {
      width: '100%',
      textDecoration: 'none',
      color: MyStyles.colors.primary,
    }
  },
  notificationContainer: {
    background: 'white',
    borderRadius: 10,
    width: '1040px',
    height: '120px',
    marginTop: '10px',
  },
  counterContainer: {
    background: 'white',
    borderRadius: 10,
    width: '1040px',
    height: '150px',
    marginTop: '15px',
  }
});

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SideBar />
      <div className={classes.contentArea}>
        <Profile />
        <main className={classes.content}>
          <section style={{marginTop: '15px'}}>
            <h2 className={classes.bannerTitle}>Novidades para</h2>
            <h1 className={classes.bannerTitle} style={{color: MyStyles.colors.primary}}>Ateliê Dona Bonita</h1>
            <div className={classes.courseCardContainer}>
              {mocks.slice(0,3).map(mock => (
                <Coursecard 
                  imageSource={mock.imageSource}
                  title={mock.title}
                />
              ))}
              <div className={classes.moreCourses}>
                <Link to='/dashboard/cursos'>
                  Ver mais
                </Link>
              </div>
            </div>
          </section>
          <section style={{marginTop: '15px'}}>
            <h1 className={classes.bannerTitle}>Lembretes</h1>
            <div className={classes.notificationContainer}>

            </div>
          </section>
          <section style={{marginTop: '15px'}}>
            <h1 className={classes.bannerTitle}>Nos últimos 30 dias</h1>
            <div className={classes.counterContainer}>

            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;