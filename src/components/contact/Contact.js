import React from 'react'; 
import aboutData from "../about/data";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { AiFillBehanceSquare, AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { MdWavingHand } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Contact.scss";

const useStyles = makeStyles({
  inputStyle: {
    fontSize: '1.5rem',
    color: 'white',
    border: "1px solid white",
    borderRadius: "0.3rem",
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
    <div className="contact-wrapper">
      <div className="top-contact">
        <div className="top-contact-text">
          <h2 className="say-hello">Say Hello <MdWavingHand className="wave-hello"/></h2>
          <p className="text">{aboutData.communication}</p>
        </div>
        <div className="contact-form-wrapper">
          <form className="contact-form">
            <div>
              <TextField className={classes.inputStyle} email="email" placehodler="johndoe@mail.com" fullWidth variant="outlined" label="Email" />
            </div>
            <div>
              <TextField
                className="text-field"
                label="Text message"
                multiline
                rows={8}
                fullWidth
                variant="outlined"
            />
            </div>
            <Button type="submit" color='primary' variant="contained" className={classes.buttonStyle} fullWidth> Submit </Button>
          </form>
        </div>
      </div>
      <div className="bottom-contact">
        <div className="hello-text">
          <div className="letters">
            <span className="letter H">H</span>
            <span className="letter E">E</span>
            <span className="letter L1">L</span>
            <span className="letter L2">L</span>
            <span className="letter O">O</span>
          </div>
        </div>
        <div className="social-icons">
          <p>LET'S WORK TOGETHER</p>
          <div className="social-connect-icons">
            <Link to="http://twitter.com/frabjous_id" target="_blank"><AiFillBehanceSquare /></Link>
            <Link to="http://twitter.com/frabjous_id" target="_blank"><AiFillTwitterCircle/></Link>
            <Link to="http://linkedin.com/in/jimoh-idris-237931b4" target="_blank"><AiFillLinkedin /></Link>
          </div>
          <div className="contact-me">
            <BsFillEmojiSmileFill className="smile"/>
            <p>Contact me</p>
            <MdWavingHand className="wave"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;


// MuiInputBase-input
