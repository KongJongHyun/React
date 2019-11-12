import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

// Table
import MaterialTable from 'material-table';


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        overflowX: 'auto'
    },
    table: {
        minWidth: 650,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
   input: {
       margin: theme.spacing(1),
   },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
    resize: {
        fontSize: 15,
      }
    }));

function Main() {
    const classes = useStyles();
    const [state,setState] = React.useState({
        columns: [
            { title: '가입일', field: 'date' },
            { title: '업체명', field: 'name' },
            { title: '지역', field: 'area',  },
            { title: '음식종류', field:'kind'},
            { title: '전화번호', field:'tel'},
          ],
          data: [
              {date: '2019-11-12', name:'test',  area:'일산동구', kind:'한식', tel:'02-345-6789'},
              {date: '2019-11-13', name:'qwer1',  area:'경기도', kind:'한식', tel:'031-123-5678'},
              {date: '2019-11-14', name:'asdf',  area:'충남', kind:'한식', tel:'041-123-5678'},
              {date: '2019-11-15', name:'zxcv1',  area:'부산시', kind:'한식', tel:'051-123-4567'},
              {date: '2019-11-16', name:'vbnv1',  area:'전남', kind:'한식', tel:'061-123-4567'},
              {date: '2019-11-17', name:'fghj1',  area:'인천', kind:'한식', tel:'032-234-5678'},
              {date: '2019-11-18', name:'rtyu1',  area:'대전시', kind:'한식', tel:'042-234-5678'},
              {date: '2019-11-19', name:'yuio1',  area:'울산시', kind:'한식', tel:'052-234-5678'},
              {date: '2019-11-20', name:'uiop1',  area:'광주시', kind:'한식', tel:'062-234-5678'},
              {date: '2019-11-21', name:'iop[1',  area:'강원', kind:'한식', tel:'033-234-5678'},
              {date: '2019-11-22', name:'hjkl1',  area:'충북', kind:'한식', tel:'043-234-5678'},
          ],
    });
    return(
        <main className={classes.content}>
        <div className={classes.toolbar} />
        <form className={classes.container} noValidate autoComplete="off">
        </form>
        <MaterialTable
      title={<h3>식당 & 카페</h3>}
      columns={state.columns}
      data={state.data}
      detailPanel={rowData => {
          return(
              <input type="text" value={rowData.name} readOnly/>
          )
      }}
      onRowClick={(event, rowData, togglePanel) => togglePanel()}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
        </main>
    )
}

export default Main;
