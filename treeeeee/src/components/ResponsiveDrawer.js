import React, {useState} from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Area from '../Menu/Area';
import CInfo from '../Menu/CInfo';
import CKeyword from '../Menu/CKeyword';
import ExInfo from '../Menu/ExInfo';
import EvBanner from '../Menu/EvBanner';
import Restaurants from '../Menu/Restaurants';
import MemGrade from '../Menu/MemGrade';
import Minfo from '../Menu/MInfo';
import Statistics from '../Menu/Statistics';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// Icons 
import PlaceIcon from '@material-ui/icons/Place';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import HotelIcon from '@material-ui/icons/Hotel';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import GroupIcon from '@material-ui/icons/Group';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      background: 'white',
      color:'rgb(238,119,42)',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
    },
  },
  drawerPaper: {
    width: drawerWidth,
    textAlign: 'center',
    fontFamily : 'Noto Sans KR, sans-serif',
    fontSize : 16,
    backgroundColor: 'lightgrey',
  },
  crea_root: {
    display: "grid",
  },
  SvgIcon : {
    float:"right",
  },
  Menu_Icon : {
    display: "block",    
  },
  Menu_Color : {
    backgroundColor : "lightgrey",
  },
}));

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [count, setCount] = useState(100);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div><br />고양 <strong>MICE</strong> ON </div><br />
      <Divider />
      <div>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          classes={{
            root:classes.Menu_Color
          }}
        >
          <ListItemIcon classes={{
            root: classes.Menu_Icon
          }}> 
            <PlaceIcon /></ListItemIcon><Typography className={classes.heading}>장소정보</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails classes={{
          root: classes.Menu_Color
        }}>
        <List>
        {['식당&카페', '숙박', '쇼핑','관광'].map((text,index) => (
            <ListItem  button key={text} onClick={() => setCount(index % 13)}>
              <ListItemIcon>
                {
                  (function() {
                    if(index === 0) return <RestaurantIcon />
                    else if(index === 1) return <HotelIcon />
                    else if(index === 2) return <AddShoppingCartIcon />
                    else if(index === 3) return <CardTravelIcon />
                  })()
                }
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
        ))}
      </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <ListItemIcon classes={{
          root: classes.Menu_Icon
        }}> 
          <GroupIcon /></ListItemIcon>
          <Typography className={classes.heading}>회원정보</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <List>
        {['test1', 'test2', 'test3'].map((text,index) => (
            <ListItem  button key={text} onClick={() => setCount((index % 13)+4)}>
              <ListItemText primary={text} />
            </ListItem>
        ))}
      </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <ListItemIcon classes={{
            root: classes.Menu_Icon
          }}> 
            <AccountBalanceIcon /></ListItemIcon><Typography className={classes.heading}>가맹업체</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <List>
        {['test1', 'test2', 'test3'].map((text,index) => (
            <ListItem  button key={text} onClick={() => setCount((index % 13)+7)}>
              <ListItemText primary={text} />
            </ListItem>
        ))}
      </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <ListItemIcon classes={{
            root: classes.Menu_Icon
          }}> 
            <EventAvailableIcon /></ListItemIcon><Typography className={classes.heading}>행사일정</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <List>
        {['test1', 'test2', 'test3'].map((text,index) => (
            <ListItem  button key={text} onClick={() => setCount((index % 13)+10)}>
              <ListItemText primary={text} />
            </ListItem>
        ))}
      </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <ListItemIcon classes={{
            root: classes.Menu_Icon
          }}> 
            <NotificationImportantIcon /></ListItemIcon><Typography>공지사항</Typography>
        </ExpansionPanelSummary>
      </ExpansionPanel>
    </div>
  </div>

  );

  return (
    <div className={classes.root}>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      {
        (function() {
          if(count === 0) return <Restaurants />
          else if(count === 1) return <Area />
          else if(count === 2) return <CKeyword/>
          else if(count === 3) return <CInfo />
          else if(count === 4) return <ExInfo />
          else if(count === 5) return <EvBanner />
          else if(count === 6) return <Minfo />
          else if(count === 7) return <Statistics />
          else if(count === 8) return <MemGrade />
          else if(count === 9) return <Restaurants />
          else if(count === 10) return <Area />
          else if(count === 11) return <CKeyword />
        })()
      }
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default ResponsiveDrawer;