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
import ListItemText from '@material-ui/core/ListItemText';
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
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
      <div>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>장소정보</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <List>
        {['식당&카페', '숙박', '쇼핑','관광'].map((text,index) => (
            <ListItem  button key={text} onClick={() => setCount(index % 13)}>
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
          <Typography className={classes.heading}>가맹업체</Typography>
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
          <Typography className={classes.heading}>행사일정</Typography>
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
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>공지사항</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
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
          else if(count === 9) return <Main />
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