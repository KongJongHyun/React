import React, { useState, Fragment, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Hidden from '@material-ui/core/Hidden';
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
import PersonIcon from '@material-ui/icons/Person';

//pages
import Area from '../Menu/Area';
import CInfo from '../Menu/CInfo';
import CKeyword from '../Menu/CKeyword';
import ExInfo from '../Menu/ExInfo';
import EvBanner from '../Menu/EvBanner';
import Restaurants from '../Menu/Restaurants';
import MemGrade from '../Menu/MemGrade';
import Minfo from '../Menu/MInfo';
import Statistics from '../Menu/Statistics';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    // [theme.breakpoints.down('sm')]: {
    //   width: '100%'
    //   //   marginLeft: drawerWidth
    // },
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    // [theme.breakpoints.up('sm')]: {
    //   width: '`calc(100% - ${drawerWidth}px)`',
    //   marginLeft: drawerWidth
    // },
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [count, setCount] = useState(100);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setDropdown(!dropdown);
  };
  const handleClick1 = () => {
    setDropdown1(!dropdown1);
  };
  const handleClick2 = () => {
    setDropdown2(!dropdown2);
  };
  const handleClick3 = () => {
    setDropdown3(!dropdown3);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        // className={classes.appBar}  // clsx 설명 method 기본은 appbar jss 를 적용하나 open 값이 true 일경우 classes.appBarShift jss 를 적용함
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            GCC
          </Typography>
        </Toolbar>
      </AppBar>
      {/* <Hidden smDown> */}
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <List>
          <Fragment>
            <ListItem button key="dropdown" onClick={handleClick}>
              <ListItemIcon>
                <PlaceIcon />
              </ListItemIcon>
              <ListItemText primary="장소정보" />
              {dropdown ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={dropdown} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
              {['식당&카페', '숙박', '쇼핑','관광'].map((text,index) => (
                <ListItem  className={classes.nested} button key={text} onClick={() => setCount(index % 16)}>
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
            </Collapse>
          </Fragment>
        </List>

        <List>
          <Fragment>
            <ListItem button key="dropdown" onClick={handleClick1}>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="회원정보" />
              {dropdown1 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={dropdown1} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
              {['사용자일반', '숙박', '쇼핑','관광'].map((text,index) => (
                <ListItem  className={classes.nested} button key={text} onClick={() => setCount((index % 16)+4)}>
                  <ListItemIcon>
                {
                  (function() {
                    if(index+4 === 4) return <PersonIcon />
                    else if(index+4 === 5) return <HotelIcon />
                    else if(index+4 === 6) return <AddShoppingCartIcon />
                    else if(index+4 === 7) return <CardTravelIcon />
                  })()
                }
              </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
              </List>
            </Collapse>
          </Fragment>
        </List>

        <List>
          <Fragment>
            <ListItem button key="dropdown" onClick={handleClick2}>
              <ListItemIcon>
                <AccountBalanceIcon />
              </ListItemIcon>
              <ListItemText primary="이벤트관리" />
              {dropdown2 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={dropdown2} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
              {['식당&카페', '숙박', '쇼핑','관광'].map((text,index) => (
                <ListItem  className={classes.nested} button key={text} onClick={() => setCount((index % 16)+8)}>
                  <ListItemIcon>
                {
                  (function() {
                    if(index+8 === 8) return <RestaurantIcon />
                    else if(index+8 === 9) return <HotelIcon />
                    else if(index+8 === 10) return <AddShoppingCartIcon />
                    else if(index+8 === 11) return <CardTravelIcon />
                  })()
                }
              </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
              </List>
            </Collapse>
          </Fragment>
        </List>

        <List>
          <Fragment>
            <ListItem button key="dropdown" onClick={handleClick3}>
              <ListItemIcon>
                <EventAvailableIcon />
              </ListItemIcon>
              <ListItemText primary="예약내역" />
              {dropdown3 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={dropdown3} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
              {['식당&카페', '숙박', '쇼핑','관광'].map((text,index) => (
                <ListItem  className={classes.nested} button key={text} onClick={() => setCount((index % 16)+12)}>
                  <ListItemIcon>
                {
                  (function() {
                    if(index+12 === 12) return <RestaurantIcon />
                    else if(index+12 === 13) return <HotelIcon />
                    else if(index+12 === 14) return <AddShoppingCartIcon />
                    else if(index+12 === 15) return <CardTravelIcon />
                  })()
                }
              </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
              </List>
            </Collapse>
          </Fragment>
        </List>

        <List>
          <Fragment>
            <ListItem button key="dropdown" onClick={() => setCount(16)}>
              <ListItemIcon>
              <NotificationImportantIcon />
              </ListItemIcon>
              <ListItemText primary="공지사항" />
            </ListItem>
          </Fragment>
        </List>
      </Drawer>
      {/* </Hidden> */}
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        {
        (function() {          
          if(count === 0) return <Restaurants match={props.match}/>
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
          else if(count === 12) return <CInfo />
          else if(count === 13) return <ExInfo />
          else if(count === 14) return <EvBanner />
          else if(count === 15) return <Minfo />
          else if(count === 16) return <Area />
          })()
      }
      </main>
    </div>
  );
}

export default ResponsiveDrawer;