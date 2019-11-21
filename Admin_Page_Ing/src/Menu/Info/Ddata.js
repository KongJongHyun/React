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
        <div classes={{root: classes.container}}>
            <Typography classes={{ root: classes.typo }} variant="subtitle1">업체 국문명
        <TextField
                    id="outlined-full-width"
                    style={{ margin: 8 }}
                    defaultValue={props.name}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
            </Typography>
            <Typography classes={{ root: classes.typo }} variant="subtitle1">업체 영문명</Typography>
            <Button variant="contained" className={classes.button}>
                + 정보추가
            </Button>
            <Typography classes={{ root: classes.typo }} variant="subtitle1">전화번호
        <TextField
                    id="outlined-full-width"
                    style={{ margin: 8 }}
                    defaultValue={props.ctel}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
            </Typography>
            <Typography classes={{ root: classes.typo }} variant="subtitle1">웹사이트
        <TextField
                    id="outlined-full-width"
                    style={{ margin: 8 }}
                    defaultValue="www.test.com"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
            </Typography>

            <Typography classes={{ root: classes.typo }} style={{ fontWeight: "bold" }} variant="h6"> 위치 </Typography>

            <Typography classes={{ root: classes.typo }} variant="subtitle1">상세 주소
        <TextField
                    id="outlined-full-width"
                    style={{ margin: 8 }}
                    defaultValue="www.test.com"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
            </Typography>
            <Typography classes={{ root: classes.typo }} variant="subtitle1">도시 주/도/지역
        <TextField
                    id="outlined-full-width"
                    style={{ margin: 8 }}
                    defaultValue="www.test.com"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
            </Typography>
            <Typography classes={{ root: classes.typo }} variant="subtitle1">우편번호
        <TextField
                    id="outlined-full-width"
                    style={{ margin: 8 }}
                    defaultValue="www.test.com"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
            </Typography>
        </div>
    )
}

export default Ddata;