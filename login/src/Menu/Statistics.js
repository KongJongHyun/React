import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
    }));
function Main() {
    const classes = useStyles();
    return(
        <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
        통계 및 내역 (Statistics)
        </Typography>
        </main>
    )
}

export default Main;
