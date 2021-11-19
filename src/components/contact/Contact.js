import React from 'react'; 
import aboutData from "../about/data";
import Footer from "../Footer/Footer";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { MdWavingHand } from "react-icons/md";

import "./Contact.scss";

const useStyles = makeStyles({
  root: {
    '& .MuiInputBase-input': {
      color: "white",
      fontSize: '1.5rem',
      borderRadius: "0.3rem",
    },
    '& .MuiOutlinedInput-input': {
      padding: '10.5px 10px',
      border: 'none',
    },
    "&.Mui-focused": {
      border: "1px solid #FFB800",
      '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
      }
    }
  },
  inputStyle: {
    border: "1px solid #FFFFFF",
    '&::placeholder': {
      color: 'white'
    }
  },  
  buttonStyle: {
    border: '2px solid #FFB800',
    color: '#FFB800',
    padding: '1rem 0',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    background: 'none',
  },
});

const Contact = () => {
  const classes = useStyles();
  return (
    <div className="contact-wrapper"  id="header-container">
      <div className="top-contact">
        <div className="top-contact-text">
          <h2 className="say-hello">Say Hello <MdWavingHand className="wave-hello"/></h2>
          <p className="text">{aboutData.communication}</p>
        </div>
        <div className="contact-form-wrapper">
          <form className="contact-form">
            <div>
              <TextField
                email="email"
                placehodler="johndoe@mail.com"
                fullWidth variant="outlined"
                label="Email" 
                InputProps={{
                  className: classNames(classes.root, classes.inputStyle),
                }} />
            </div>
            <div>
              <TextField
                label="Text message"
                multiline
                rows={4}
                fullWidth
                variant="outlined"
                InputProps={{
                   className: classNames(classes.root, classes.inputStyle),
                }}
            />
            </div>
            <Button type="submit" color='primary' variant="contained" className={classes.buttonStyle} fullWidth> Submit </Button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact;
