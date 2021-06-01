import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import Map from './Map';
import { getAddressFromLatLng } from './utils';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '18ch',
    },
  },
}));

export default function AlertDialog(props) {
  const classes = useStyles();

   useEffect(() => {
    getAddressFromLatLng(123, 23213);
  });

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <form className={classes.root} noValidate autoComplete="off">
              <TextField id="countryTxt" label="Country" />
              <TextField id="stateTxt" label="State" />
              <TextField id="townTxt" label="Town" />
              <TextField id="postalCodeTxt" label="Postal Code/ZIP" />
              <TextField id="streetAddressTxt" label="Street Address" />
              <TextField id="streetAddress2Txt" label="Street Address 2" />
              <Map />
            </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={props.handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
