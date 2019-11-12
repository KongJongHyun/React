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
              {date: '2019-11-12', name:'test1',  area:'마포구', kind:'한식', tel:'02-345-6789'},
          ],
    });
    return(
        <main className={classes.content}>
        <div className={classes.toolbar} />
        <form className={classes.container} noValidate autoComplete="off">
        </form>
        <MaterialTable
      title="식당 & 카페"
      columns={state.columns}
      data={state.data}
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
