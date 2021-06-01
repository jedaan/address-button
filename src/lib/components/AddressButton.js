import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import AddressModal from './AddressModal';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

const AddressButton = (props) => {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false); 

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

    return (
        <div>
        <Button
          variant="contained"
          color="primary"
          size="small"
          className={classes.button}
          startIcon={<MyLocationIcon />}
          onClick={handleClickOpen}
        >
          Pick your address
        </Button>
        <AddressModal open={openModal} handleClose={handleClose} />
      </div>
     );
}
 
export default AddressButton;