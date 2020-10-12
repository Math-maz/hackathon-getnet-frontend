import React from 'react';
import Profile from '../../Components/Profile';
import SideBar from '../../Components/Sidebar';
import { makeStyles } from '@material-ui/styles';
import MyStyles from '../../assets/styles/MyStyles';

const course = [{
  imageSource: "https://www.w3schools.com/css/paris.jpg",
  title: 'Como fazer o fluxo de caixa de seu estabelecimento',
  content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
  }
];

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
  contentArea: {
    width: '-webkit-fill-available',
  },
  content: {
    marginLeft: '70px',
  },
  bannerTitle: {
    fontWeight: 'bold',
    color: MyStyles.colors.darks[50],
    width: '850px',
    margin: '10px 0'
  },
  contentContainer: {
    textAlign: 'justify',
    width: '850px',
    fontSize: '16px'
  }
});

export default function Courses() {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <SideBar />
      <div className={classes.contentArea}>
        <Profile />
        <main className={classes.content}>
          <section style={{marginTop: '28px'}}>
            <img
              src={course[0].imageSource}
              style={{ width: '850px', height: '400px', borderRadius: '10px' }}
              alt="mão escrevendo"
            />
          </section>
          <section>
            <h1 className={classes.bannerTitle}>{course[0].title}</h1>
            <p className={classes.contentContainer}>{course[0].content}</p>
          </section>
        </main>
      </div>
    </div>
  );
}