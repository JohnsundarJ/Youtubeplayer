import React, { Component } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { deepOrange } from '@material-ui/core/colors';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import YouTube from 'react-youtube';

const styles = theme => ({
    list:{
      width: '100%',
    maxWidth: 800,
    backgroundColor: '#F0F8FF'
    // theme.palette.background.black,
  },
 
  root: {
    flexgrow: 1,
    '& > * + *': {
      marginTop: theme.spacing(2),
    }
  },
  textField:{
    width:'49ch'
  },
  card: {
    boxShadow: "0px 0px 5px 5px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 30px 12.125px rgba(0,0,0,0.3)"
    }
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    fontSize:"20px"
  },
  bootbutton:{
width:'50%',
height:'40%'
  },
  button: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  text: {
    width: '75%',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'white',
    paddingBottom:"10px"
  },
  cardheader: {
    backgroundColor: theme.palette.primary.main,
    color: '#fff'
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    paddingtop: '10px'
  },
  tooltip: {
    rippleBackgroundColor: 'red'
  },
  bootbutton1:{
    width:'30%',
    height:'40%',
    marginLeft:"10px",
    backgroundColor:"red"
      }
});

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 15,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1,
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);
class Perspectives extends Component {
  state = {
   videoid:null,
    video:null,
    showPassword: false
  };
  handleClickShowPassword = () => {
    this.setState({
      showPassword:!this.state.showPassword
    })
  };
 handleMouseDownPassword = event => {
    event.preventDefault();
  };
  video=()=>{
this.setState({video:this.state.videoid})
  }
  video1=()=>{
    this.setState({video:null})
      }
   validVideoId(id) {
        var img = new Image();
        img.src = "https://img.youtube.com/vi/" + id + "/mqdefault.jpg";
        const scope = this
        img.onload = function () {
          if(this.width===120){
            scope.setState({video:null})
           alert("Invalid video id");
          }
          else{
            scope.setState({video:id})
        }
      }
      }
  handlechange(e) {
    this.setState({
      videoid: e.target.value
    })
  }
  render() {
    const { classes } = this.props;
const opts = {
  height: '370',
  width: '650',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
  },
};
    return (
      <div>
        <div className={classes.root}>
          <AppBar position="fixed" color="primary">
            <Toolbar>               
              <Typography className={classes.title}>
                Youtube player                          </Typography>
             
            </Toolbar>
          </AppBar>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
       <Grid container>
       <Grid md={3} />
       <Grid md={6} xs={12}>
          <List component="nav" className={classes.list} aria-label="mailbox folders">
      <ListItem >
        <ListItemText > 
        <div style={{paddingTop:"5px",justifyContent:"center",alignItems:"center",display:"flex"}}>
        <TextField
                          className={classes.text}
                          variant="outlined" id="videoid" value={this.state.videoid} onChange={e => this.handlechange(e)} label="Video Id"
                        />
</div>
               <div style={{paddingTop:"5px",justifyContent:"center",alignItems:"center",display:"flex"}}>
               <BootstrapButton
                        disableRipple
                        fullWidth className={classes.bootbutton}
                          onClick={() => this.validVideoId(this.state.videoid)} variant="contained" color="secondary">
                          Video explanation
</BootstrapButton>
<BootstrapButton
                        disableRipple
                        fullWidth className={classes.bootbutton1}
                          onClick={() => this.video1()} variant="contained" color="secondary">
                          Close
</BootstrapButton>
                   </div>
                {/* <Grid container>
                </Grid> */}
                        </ListItemText> 
      </ListItem>
      <Divider />
      {this.state.video!==null ?
    <div>
      <ListItem>
 <YouTube videoId={this.state.video} opts={opts} onReady={this._onReady} />
          </ListItem>
      <Divider />
      </div>
      :null
      }
    </List>
    </Grid>
    <Grid md={3} />
    </Grid>
          </div>
    );
  }
  _onReady(event) {
    event.target.pauseVideo();
  }
}

export default withStyles(styles)(Perspectives);
