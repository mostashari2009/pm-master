import * as React from "react";

import {
    TextField,
    SimpleShowLayout,
    Show,
    ReferenceField,
    TopToolbar,
    ListButton,
    EditButton
}
from 'react-admin';
import LocationTitle from './LocationTitle';
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

const LocationShow = (props) => {
    const classes = useStyles();

    return(
    <Show actions={<ShowActions/>} title={<LocationTitle />} {...props}>
        <SimpleShowLayout>
                <TextField className={classes.sho} label="کد مکان" textAlgin="right" source="LocationCode" />
                <TextField className={classes.sho} label="نام مکان" textAlgin="right" source="LocationName" />
                <ReferenceField className={classes.sho} label="مکان پدر" textAlgin="right" source="LocationFatherID" reference="PMWorks/Location">
                    <TextField source="LocationName" />
                </ReferenceField>
        </SimpleShowLayout>
    </Show>
);
    };


export default LocationShow;
