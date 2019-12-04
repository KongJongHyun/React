import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const GreenCheckbox = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})(props => <Checkbox color="default" {...props} />);


const Count = ({ click }) => {
    const [state, setState] = useState({
        checkedA: false,
        checkedB: false,
        checkedC: false,
        checkedD: false,
        checkedE: false,
        checkedF: false,
        checkedG: false,
        checkedH: false,
        checkedI: false,
    });

    const createCheckbox = (label, key) => {
        return { label, key }
    };
    const rows = [
        createCheckbox("전체선택하기", 'checkedA'),
        createCheckbox("한식", 'checkedB'),
        createCheckbox("글로벌", 'checkedC'),
        createCheckbox("중식", 'checkedD'),
        createCheckbox("일식", 'checkedE'),
        createCheckbox("양식", 'checkedF'),
        createCheckbox("카페&디저트", 'checkedG'),
        createCheckbox("패스트푸드", 'checkedH'),
        createCheckbox("분식", 'checkedI'),
    ];
    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked })
    };
    return (
        <FormGroup>
            {
                rows.map((row, i) => {
                    return (
                        <FormControlLabel
                            key={i}
                            control={
                                <Checkbox onClick={click} onChange={handleChange(row.key)} value={rows.label} />
                            }
                            label={row.label}
                        />
                    );
                }
                )}
        </FormGroup>
    );
}
export default Count;