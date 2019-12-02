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
    const [open, setOpen] = React.useState(false);
    const [save, setSave] = React.useState(false);

    const saving = () => {
        setSave(true),
            alert("저장되었습니다"),
            console.log(save);
    };

    const handleClick = () => {
        setOpen(1)
    };
    return (
        <>
            <div classes={{ root: classes.container }}>
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
                <Typography classes={{ root: classes.typo }} variant="subtitle1">업체 영문명<br />
                    {open && (
                        <TextField id="outlined-full-width"
                            style={{ margin: 8 }}
                            placeholder="업체명을 영문으로 작성하세요."
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined" />
                    )}
                    <Button variant="contained" className={classes.button} onClick={handleClick}>
                        + 정보추가
                </Button>

                </Typography>

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
                <Typography classes={{ root: classes.typo }} variant="subtitle1">도시 & 지역
        <TextField
                        id="outlined-full-width"
                        style={{ margin: 8 }}
                        defaultValue={`경기도 고양시 ${props.area}`}
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
            <Button variant="contained" style={{ float: "right" }} onClick={saving}> SAVE </Button>
        </>
    )
}
export default Ddata;