import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    typo: {
        padding: theme.spacing(2),
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));
const Ddata = props => {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <div classes={{ root: classes.container }}>
            <Typography classes={{ root: classes.typo }} variant="subtitle1">ID
        <TextField
                    id="outlined-full-width"
                    style={{ margin: 8 }}
                    defaultValue={props.name}
                    placeholder="ID를 입력하세요."
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
            </Typography>
            <Typography classes={{ root: classes.typo }} variant="subtitle1">비밀번호</Typography>
            <Button variant="contained" className={classes.button}>
                재설정 이메일 발송
            </Button>
        </div>
    )
}

export default Ddata;