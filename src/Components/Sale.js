import React from 'react';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/styles';
import MyStyles from '../assets/styles/MyStyles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-around',
    alignItems: 'center',
    boxShadow: '0px 3px 6px #00000029',
    background: 'white',
    borderRadius: '20px',
    width: '1000px',
    height: '40px',
    marginBottom: '15px',
    '& div': {
      marginLeft: '30px'
    }
  }
});

export default function Sale({
  cost,
  client,
  description,
  coupon,
  data
}) {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <div style={{width: '120px', color: MyStyles.colors.primary}}>
        {cost}
      </div>
      <Divider orientation="vertical" flexItem/>
      <div style={{width: '260px'}}>
        {client}
      </div>
      <Divider orientation="vertical" flexItem/>
      <div style={{width: '260px'}}>
        {description}
      </div>
      <Divider orientation="vertical" flexItem/>
      <div style={{width: '100px', color: MyStyles.colors.secondary}}>
        {coupon}
      </div>
      <Divider orientation="vertical" flexItem/>
      <div style={{width: '120px'}}>
        {data}
      </div>
    </div>
  );
}