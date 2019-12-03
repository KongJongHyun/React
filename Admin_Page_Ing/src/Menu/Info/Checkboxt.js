import React, { useState } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Typography } from '@material-ui/core';

const Checkboxt = ({ click }) => {
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
        checkedJ: false,
        checkedK: false,
        checkedL: false,
        checkedM: false,
        checkedN: false,
        checkedO: false,
        checkedP: false,
        checkedQ: false,
        checkedR: false,
    });
    const createCheckbox_f = (label, key) => {
        return { label, key }
    };
    const createCheckbox_l = (label, key) => {
        return { label, key }
    }
    const rows_f = [
        createCheckbox_f("전체선택하기", 'checkedA'),
        createCheckbox_f("한식", 'checkedB'),
        createCheckbox_f("글로벌", 'checkedC'),
        createCheckbox_f("중식", 'checkedD'),
        createCheckbox_f("일식", 'checkedE'),
        createCheckbox_f("양식", 'checkedF'),
        createCheckbox_f("카페&디저트", 'checkedG'),
        createCheckbox_f("패스트푸드", 'checkedH'),
        createCheckbox_f("분식", "checkedI"),
    ];
    const rows_l = [
        createCheckbox_l("전체선택하기", "checkedJ")
    ]
    const rows_lw = [
        createCheckbox_l("라페스타-웨스턴돔", "checkedK"),
        createCheckbox_l("애니골", "checkedL")
    ]
    const rows_le = [
        createCheckbox_l("일산 가로수길", "checkedM"),
        createCheckbox_l("대화동", "checkedN"),
        createCheckbox_l("원마운트", "checkedO"),
        createCheckbox_l("킨텍스&맛고을", "checkedP")
    ]
    const rows_ld = [
        createCheckbox_l("화정 문화의거리", "checkedQ"),
        createCheckbox_l("수역이마을", "checkedR")
    ]
    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked })
    };

    return (

        <FormGroup row>
            <div>
                <Typography variant="h6" style={{ fontWeight: "bold" }}>음식종류</Typography>
                <FormGroup>
                    {
                        rows_f.map((row, i) => {
                            return (
                                <FormControlLabel
                                    key={i}
                                    control={
                                        <Checkbox onClick={click} onChange={handleChange(row.key)} />
                                    }
                                    label={row.label}
                                />
                            );

                        }
                        )}
                </FormGroup>
            </div>
            <hr style={{ border: "0.5 solid grey", marginRight: "14px" }} />
            <div>
                <Typography variant="h6" style={{ fontWeight: "bold" }}>지역</Typography>
                <FormGroup>
                    {
                        rows_l.map((row, i) => {
                            return (
                                <FormControlLabel
                                    key={i}
                                    control={
                                        <Checkbox onClick={click} onChange={handleChange(row.key)} />
                                    }
                                    label={row.label}
                                />
                            );

                        }
                        )}
                </FormGroup>
                <Typography variant="subtitle2" style={{ fontWeight: "bold", color: "grey" }}>일산서구</Typography>
                <FormGroup>
                    {
                        rows_lw.map((row, i) => {
                            return (
                                <FormControlLabel
                                    key={i}
                                    control={
                                        <Checkbox onClick={click} onChange={handleChange(row.key)} />
                                    }
                                    label={row.label}
                                />
                            );

                        }
                        )}
                </FormGroup>
                <Typography variant="subtitle2" style={{ fontWeight: "bold", color: "grey" }}>일산동구</Typography>
                <FormGroup>
                    {
                        rows_le.map((row, i) => {
                            return (
                                <FormControlLabel
                                    key={i}
                                    control={
                                        <Checkbox onClick={click} onChange={handleChange(row.key)} />
                                    }
                                    label={row.label}
                                />
                            );

                        }
                        )}
                </FormGroup>
                <Typography variant="subtitle2" style={{ fontWeight: "bold", color: "grey" }}>덕양구</Typography>
                <FormGroup>
                    {
                        rows_ld.map((row, i) => {
                            return (
                                <FormControlLabel
                                    key={i}
                                    control={
                                        <Checkbox onClick={click} onChange={handleChange(row.key)} />
                                    }
                                    label={row.label}
                                />
                            );

                        }
                        )}
                </FormGroup>
            </div>
        </FormGroup>
    );
}
export default Checkboxt;