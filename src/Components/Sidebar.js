import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import ContactsIcon from '@material-ui/icons/Contacts';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import StarIcon from '@material-ui/icons/Star';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import SettingsIcon from '@material-ui/icons/Settings';
import { MyStyles } from '../assets/styles/MyStyles.js'
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    top: '0px',
    left: '0px',
    width: '400px',
    height: '1080px',
    backgroundColor: MyStyles.colors.white,
    boxShadow: '6px 4px 6px #00000029',
    opacity: '1'
  },
  logo: {
    top: '30px',
    marginLeft: '84px',
    width: 'fit-content',
    // width: '218px',
    height: '88px',
    textAlign: 'left',
    fontFamily: 'Montserrat',
    fontSize:  '72px',
    letterSpacing: '0px',
    color: '#228356',
    opacity: '1'
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Montserrat',
    fontSize: '24px',
    marginLeft: '19px',
    width: '227px',
    height: '350px'
  },
  homeButton: {
    marginTop: '10px',
    '& a': {
      width: '100%',
      textDecoration: 'none',
      color: MyStyles.colors.secondary,
      '& svg': {
        verticalAlign: '-3px',
        marginRight: '10px'
      }
    }
  },
  buttons: {
    marginTop: '10px',
    '& a': {
      width: '100%',
      textDecoration: 'none',
      color: MyStyles.colors.primary,
      '& svg': {
        verticalAlign: '-3px',
        marginRight: '10px'
      }
    }
  }
}

const SideBar = (props) => {
  return (
    <div className={props.classes.root}>
      <div className={props.classes.logo}>
        Logo
      </div>
      <div className={props.classes.menu}>
        <div className={props.classes.homeButton}>
          <Link to='/dashboard/home'>
            <HomeIcon />
            Início
          </Link>
        </div>
        <div className={props.classes.buttons}>
          <Link>
            <ContactsIcon />
            Conversas
          </Link>
        </div>
        <div className={props.classes.buttons}>
          <Link>
            <CastForEducationIcon />
            Cursos
          </Link>
        </div>
        <div className={props.classes.buttons}>
          <Link>
            <StarIcon />
            Assinatura        
          </Link>
        </div>
        <div className={props.classes.buttons}>
          <Link>
            <ShowChartIcon />
            Seu negócio
          </Link> 
        </div>
        <div className={props.classes.buttons}>
          <Link>
            <SettingsIcon />
            Configurações
          </Link>
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(SideBar);