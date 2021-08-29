import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typography: {
      padding: theme.spacing(2),
    },
  }),
);

export default function UserPopover(props:any) {
  const classes = useStyles(); 

  const { handleClick, handleClose,  anchorEl} = props;

  const router: any = useRouter();

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleLogout = () =>{
      sessionStorage.clear();
      window.location.reload();
  }
  const handleDashboard = () =>{
    router.push('/dashboard')
}
  

  return (
    <div>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Grid container style = {{width:200}}>
        <Grid item xs={12}><Button fullWidth className={classes.typography} onClick = {handleDashboard}>My Profile</Button></Grid>
        <Grid item xs={12}><Button fullWidth className={classes.typography} onClick = {handleDashboard}>Dashboard</Button></Grid>
        <Grid item xs={12}><Button fullWidth className={classes.typography} onClick = {handleLogout}>Logout</Button></Grid>
        </Grid>
      </Popover>
    </div>
  );
}
