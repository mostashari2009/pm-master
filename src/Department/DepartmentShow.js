import * as React from "react";

import {
    TextField,
    SimpleShowLayout,
    Show,
    TopToolbar,
    ListButton,
    EditButton
}
from 'react-admin';
import DepartmentTitle from './DepartmentTitle';
import { makeStyles } from '@material-ui/core';

const ShowActions = ({ basePath, data }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
        <EditButton basePath={basePath} record={data}/>
    </TopToolbar>
);

const useStyles = makeStyles({
    sho: {'& label': { fontSize: '20px', color:'rgb(36 50 97)' }},
});

const DepartmentShow = (props) => {
    const classes = useStyles();

    return(
    <Show actions={<ShowActions/>} title={<DepartmentTitle />} {...props}>
        <SimpleShowLayout>
                <TextField className={classes.sho} label="کد دپارتمان" textAlgin="right" source="DepartmentCode" />
                <TextField className={classes.sho} label="نام دپارتمان" textAlgin="right" source="DepartmentName" />
        </SimpleShowLayout>
    </Show>
);
    };


export default DepartmentShow;
