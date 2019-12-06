import React from 'react';
import PropTypes from 'prop-types';
import { fade, lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

//Icons
import DeleteIcon from '@material-ui/icons/Delete';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import AddIcon from '@material-ui/icons/Add';
import FilterIcon from '@material-ui/icons/FilterList'

// Search
import InputBase from '@material-ui/core/InputBase';
function createData(date, cname, area, fkind, ctel, cing, cinfo) {
  return { date, cname, area, fkind, ctel, cing, cinfo };
}

const rows = [
  createData("2019.11.18", "test", "일산동구", "한식", "031-1234-5678", "연동 완료"),
  createData("2019.11.18", "test1", "일산서구", "중식", "031-2345-6789", "연동 대기중")
];

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const headCells = [
  { id: 'date', numeric: false, disablePadding: true, label: '가입일' },
  { id: 'cname', numeric: false, disablePadding: true, label: '업체 이름' },
  { id: 'area', numeric: false, disablePadding: false, label: '지역' },
  { id: 'fkind', numeric: false, disablePadding: true, label: '음식종류' },
  { id: 'ctel', numeric: false, disablePadding: false, label: '업체 전화번호' },
  { id: 'cing', numeric: false, disablePadding: false, label: '연동 상태' },
  { id: 'cinfo', numeric: false, disablePadding: false, label: '상세 정보' },
];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };
  return (
    <>
      <TableHead style={{ backgroundColor: "lightgrey" }}>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{ 'aria-label': 'select all data' }}
            />
          </TableCell>
          {headCells.map(headCell => (

            <TableCell
              key={headCell.id}
              align={headCell.numeric ? 'right' : 'left'}
              padding={headCell.disablePadding ? 'none' : 'default'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={order}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <span className={classes.visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </span>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    </>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85),
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  title: {
    flex: '1 1 100%',
    fontWeight: "bold"
  },
  fontedsize: {
    fontSize: '12px'
  },
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
  },
}));

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
    '&:hover': {
      backgroundColor: "rgba(0,0,0,0)",
    },
    '&button': {
      rippleVisible: 0
    },
    '& .MuiTouchRipple-root': {
      position: 'inherit'
    }
  },
}))(MenuItem);
const SearchUsingStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    floxGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
}))

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  button: {
    fontWeight: "bold",
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  fab: {
    margin: theme.spacing(1),
  },
  delete: {
    borderBottom: 0
  },
}));
const Restaurants = () => {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const classes1 = useToolbarStyles();
  const search_classes = SearchUsingStyles();
  const [set, setSet] = React.useState('');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  };
  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.ctel);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };
  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleClick1 = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const [state, setState] = React.useState({
    data: [
      { "label": "전체선택하기", "checked": false },
      { "label": "한식", "checked": false },
      { "label": "글로벌", "checked": false },
      { "label": "중식", "checked": false },
      { "label": "일식", "checked": false },
      { "label": "양식", "checked": false },
      { "label": "카페&디저트", "checked": false },
      { "label": "패스트푸드", "checked": false },
      { "label": "분식", "checked": false },
    ],
    la: [
      { "label": "전체선택하기", "checked": false },
    ],
    lw: [
      { "label": "라페스타-웨스턴돔", "checked": false },
      { "label": "애니골", "checked": false },
    ],
    le: [
      { "label": "일산 가로수길", "checked": false },
      { "label": "대화동", "checked": false },
      { "label": "원마운트", "checked": false },
      { "label": "킨텍스&맛고을", "checked": false },
    ],
    ld: [
      { "label": "화정 문화의거리", "checked": false },
      { "label": "수역이마을", "checked": false },
    ]
  });
  const handleChange = (idx, gubun) => {
    setState(prevState => {
      let state1 = prevState;
      let state2 = state1;
      let checkTest = null;
      switch (gubun) {
        case "data":
          checkTest = !state1.data[0].checked;
          if (idx === 0) {
            state2.data.map((val, i) => {
              state1 = Object.assign(state2.data[i], {
                'checked': checkTest
              });
            })
          } else {
            state1 = Object.assign(state1.data[idx], {
              checked: !state1.data[idx].checked
            });
          }
          break;
        case "la":
          checkTest = !state1.la[0].checked;
          if (idx === 0) {
            state2.la.map((val, i) => {
              state1 = Object.assign(state2.la[i], {
                'checked': checkTest
              });
            })
            state2.lw.map((val, i) => {
              state1 = Object.assign(state2.lw[i], {
                'checked': checkTest
              });
            })
            state2.le.map((val, i) => {
              state1 = Object.assign(state2.le[i], {
                'checked': checkTest
              });
            })
            state2.ld.map((val, i) => {
              state1 = Object.assign(state2.ld[i], {
                'checked': checkTest
              });
            })
          } else {
            state1 = Object.assign(state1.la[idx], {
              checked: !state1.la[idx].checked
            });
          }
          break;
        case "lw":
          checkTest = !state1.lw[0].checked;
          state1 = Object.assign(state1.lw[idx], {
            checked: !state1.lw[idx].checked
          });
          break;
        case "le":
          checkTest = !state1.le[0].checked;
          state1 = Object.assign(state1.le[idx], {
            checked: !state1.le[idx].checked
          });
          break;
        case "ld":
          checkTest = !state1.ld[0].checked;
          state1 = Object.assign(state1.ld[idx], {
            checked: !state1.ld[idx].checked
          });
          break;
      }
      return { ...prevState, state1 };
    });
  };

  const isSelected = name => selected.indexOf(name) !== -1;
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Toolbar className={classes1.root}>
          <>
            <Typography className={classes1.title} variant="h6" id="tableTitle">
              데이터
        </Typography>
            <div className={search_classes.search}>
              <div className={search_classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: search_classes.inputRoot,
                  input: search_classes.inputInput
                }}
                inputProps={{ 'aria-label': 'search' }} />
            </div>
            <Tooltip title="Delete">
              <IconButton
                aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </Tooltip>
            <IconButton aria-label="Filter" onClick={handleClick1}>
              <FilterIcon />
            </IconButton>
            <StyledMenu
              id="customized-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}>
              <StyledMenuItem>
                <FormGroup row>
                  <div>
                    <Typography variant="h6" style={{ fontWeight: "bold" }}>음식종류</Typography>
                    <FormGroup>
                      {
                        state.data.map((row, i) => {
                          return (
                            <FormControlLabel
                              key={`check-${i}`}
                              control={
                                <Checkbox checked={row.checked} onChange={() => handleChange(i, 'data')} />
                              } label={row.label}
                            />);
                        })
                      }
                    </FormGroup>
                  </div>
                  <hr style={{ border: "0.5 solid grey", marginRight: "14px" }} />
                  <div>
                    <Typography variant="h6" style={{ fontWeight: "bold" }}>지역</Typography>
                    <FormGroup>
                      {
                        state.la.map((row, i) => {
                          return (
                            <FormControlLabel
                              key={`check-${i}`}
                              control={
                                <Checkbox checked={row.checked} onChange={() => handleChange(i, 'la')} />
                              } label={row.label}
                            />);
                        })
                      }
                    </FormGroup>
                    <Typography variant="subtitle2" style={{ fontWeight: "bold", color: "grey" }}>일산서구</Typography>
                    <FormGroup>
                      {
                        state.lw.map((row, i) => {
                          return (
                            <FormControlLabel
                              key={`check-${i}`}
                              control={
                                <Checkbox checked={row.checked} onChange={() => handleChange(i, 'lw')} />
                              } label={row.label}
                            />);
                        })
                      }
                    </FormGroup>
                    <Typography variant="subtitle2" style={{ fontWeight: "bold", color: "grey" }}>일산동구</Typography>
                    <FormGroup>
                      {
                        state.le.map((row, i) => {
                          return (
                            <FormControlLabel
                              key={`check-${i}`}
                              control={
                                <Checkbox checked={row.checked} onChange={() => handleChange(i, 'le')} />
                              } label={row.label}
                            />);
                        })
                      }
                    </FormGroup>
                    <Typography variant="subtitle2" style={{ fontWeight: "bold", color: "grey" }}>덕양구</Typography>
                    <FormGroup>
                      {
                        state.ld.map((row, i) => {
                          return (
                            <FormControlLabel
                              key={`check-${i}`}
                              control={
                                <Checkbox checked={row.checked} onChange={() => handleChange(i, 'ld')} />
                              } label={row.label}
                            />);
                        })
                      }
                    </FormGroup>
                  </div>
                </FormGroup>
              </StyledMenuItem>
            </StyledMenu>
            <Tooltip title="Setting">
              <IconButton aria-label="Setting">
                <SettingsIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Add Place">
              <IconButton aria-label="Add Place">
                <AddIcon />
              </IconButton>
            </Tooltip>
          </>
        </Toolbar>
        <div className={classes.tableWrapper}>
          <Button color="primary" className={classes.button}>연동 완료 #</Button>
          <Button color="secondary" className={classes.button}>연동 대기중 #</Button>
          <Button color="inherit" className={classes.button}>심사중 #</Button>
          <Button color="inherit" className={classes.button}>퍼블리싱 #</Button>
          <Button color="inherit" className={classes.button}>편집중 #</Button>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.ctel);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableRow
                      hover
                      onClick={event => handleClick(event, row.ctel)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.ctel}
                      selected={isItemSelected}
                    >
                      {state.data.checkedA && (
                        <>
                          <TableCell padding="checkbox">
                            <Checkbox
                              checked={isItemSelected}
                              inputProps={{ 'aria-labelledby': labelId }}
                            />
                            {}
                          </TableCell>
                          <TableCell component="th" id={labelId} scope="row" padding="none">
                            {row.date}
                          </TableCell>
                          <TableCell align="left">{row.cname}</TableCell>
                          <TableCell align="left">{row.area}</TableCell>
                          <TableCell align="left">{row.fkind}</TableCell>
                          <TableCell align="left">{row.ctel}</TableCell>
                          <TableCell align="left">{row.cing}</TableCell>
                          <TableCell align="left">{row.cinfo}</TableCell>
                        </>
                      )}
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow>
                  <TableCell colSpan={6} classes={{
                    root: classes.delete
                  }} />
                </TableRow>
              )}
            </TableBody>

          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          labelRowsPerPage="페이지 당 출력 개수"
          backIconButtonProps={{
            'aria-label': 'previous page',
          }}
          nextIconButtonProps={{
            'aria-label': 'next page',
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
export default Restaurants;