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
import AssetPriorityTitle from './AssetPriorityTitle';
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

const AssetPriorityShow = (props) => {
    const classes = useStyles();

    return(
    <Show actions={<ShowActions/>} title={<AssetPriorityTitle />} {...props}>
        <SimpleShowLayout>
            <TextField className={classes.sho} label="کد اولویت" textAlgin="right" source="AssetPriorityCode" />
            <TextField className={classes.sho} label="نام اولویت" textAlgin="right" source="AssetPriorityName" />
            <TextField className={classes.sho} label="مقدار" textAlgin="right" source="AssetPriorityValue" />
        </SimpleShowLayout>
    </Show>
);
    };


export default AssetPriorityShow;
