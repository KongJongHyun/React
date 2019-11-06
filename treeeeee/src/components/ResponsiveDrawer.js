import React, {useState} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import BusinessIcon from '@material-ui/icons/Business';
import PeopleIcon from '@material-ui/icons/People';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import AssessmentIcon from '@material-ui/icons/Assessment';
import EventIcon from '@material-ui/icons/Event';
import MenuIcon from '@material-ui/icons/Menu';
import DeckIcon from '@material-ui/icons/Deck';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Area from '../Menu/Area';
import CInfo from '../Menu/CInfo';
import CKeyword from '../Menu/CKeyword';
import ExInfo from '../Menu/ExInfo';
import EvBanner from '../Menu/EvBanner';
import Main from '../Menu/Main';
import MemGrade from '../Menu/MemGrade';
import Minfo from '../Menu/MInfo';
import Statistics from '../Menu/Statistics';

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
  },
  crea_root: {
    display: "grid",
  },
  SvgIcon : {
    float:"right",
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
      <div className={classes.toolbar}>
        <br />
      고양 <strong>MICE</strong> ON 
      </div>
      <br />
      <Divider />
      
      <List>
        {['메뉴', '지역', '업체키워드', '업체정보','전시회정보','이벤트배너정보','회원정보','통계 및 내역','회원등급관리'].map((text,index) => (
            <ListItem  button key={text} onClick={() => setCount(index % 9)}>
              <ListItemIcon>
              {
                (function() {
                  if(index === 0) return <MenuIcon />
                  else if(index === 1) return <LocationOnIcon />
                  else if(index === 2) return <KeyboardIcon />
                  else if(index === 3) return <BusinessIcon />
                  else if(index === 4) return <DeckIcon />
                  else if(index === 5) return <EventIcon />
                  else if(index === 6) return <PeopleIcon />
                  else if(index === 7) return <AssessmentIcon />
                  else if(index === 8) return <PermIdentityIcon />
                })()
              }
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar classes={{
          root: classes.crea_root
        }}>
          <Typography variant="h6" noWrap>
            Goyang MICE ON Administrator
            <Link to="./index.html">
              <ExitToAppIcon onClick={()=>('')} classes={{
                root: classes.SvgIcon,
              }} />
            </Link>
          </Typography>
          
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
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
          if(count === 0) return <Main />
          else if(count === 1) return <Area />
          else if(count === 2) return <CKeyword/>
          else if(count === 3) return <CInfo />
          else if(count === 4) return <ExInfo />
          else if(count === 5) return <EvBanner />
          else if(count === 6) return <Minfo />
          else if(count === 7) return <Statistics />
          else if(count === 8) return <MemGrade />
        })()
      }
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default ResponsiveDrawer;