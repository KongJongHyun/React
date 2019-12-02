import React, { useState } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Count = ({ click }) => {
    const [state, setState] = React.useState({
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

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked })
    };

    return (
        <FormGroup >
            <FormControlLabel
                control={
                    <Checkbox checked={state.checkedA} onClick={click} onChange={handleChange('checkedA')} value="전체선택하기" />
                }
                label="전체선택하기"
            />
            <FormControlLabel
                control={
                    <Checkbox checked={state.checkedB} onChange={handleChange('checkedB')} value="한식" />
                }
                label="한식"
            />
            <FormControlLabel
                control={
                    <Checkbox checked={state.checkedC} onChange={handleChange('checkedC')} value="글로벌" />
                }
                label="글로벌"
            />
            <FormControlLabel
                control={
                    <Checkbox checked={state.checkedD} onChange={handleChange('checkedD')} value="중식" />
                }
                label="중식"
            />
            <FormControlLabel
                control={
                    <Checkbox checked={state.checkedE} onChange={handleChange('checkedE')} value="일식" />
                }
                label="일식"
            />
            <FormControlLabel
                control={
                    <Checkbox checked={state.checkedF} onChange={handleChange('checkedF')} value="양식" />
                }
                label="양식"
            />
            <FormControlLabel
                control={
                    <Checkbox checked={state.checkedG} onChange={handleChange('checkedG')} value="카페&디저트" />
                }
                label="카페&디저트"
            />
            <FormControlLabel
                control={
                    <Checkbox checked={state.checkedH} onChange={handleChange('checkedH')} value="패스트푸드" />
                }
                label="패스트푸드"
            />
            <FormControlLabel
                control={
                    <Checkbox checked={state.checkedI} onChange={handleChange('checkedI')} value="분식" />
                }
                label="분식"
            />
        </FormGroup>
    );
}
export default Count;