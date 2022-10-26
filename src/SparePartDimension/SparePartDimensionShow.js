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
import SparePartDimensionTitle from './SparePartDimensionTitle';
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

const SparePartDimensionShow = (props) => {
    const classes = useStyles();

    return(
    <Show actions={<ShowActions/>} title={<SparePartDimensionTitle />} {...props}>
        <SimpleShowLayout>
            <TextField className={classes.sho} label="کد سطح" textAlgin="right" source="SparePartDimensionCode" />
            <TextField className={classes.sho} label="نام سطح" textAlgin="right" source="SparePartDimensionName" />
        </SimpleShowLayout>
    </Show>
);
    };


export default SparePartDimensionShow;
