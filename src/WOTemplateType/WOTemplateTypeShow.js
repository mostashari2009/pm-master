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
import WOTemplateTypeTitle from './WOTemplateTypeTitle';

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

const WOTemplateTypeShow = (props) => {
    const classes = useStyles();

    return(
    <Show actions={<ShowActions/>} title={<WOTemplateTypeTitle />} {...props}>
        <SimpleShowLayout>
                <TextField className={classes.sho} label="کد نوع برنامه" textAlgin="right" source="WOTemplateTypeCode" />
                <TextField className={classes.sho} label="نام نوع برنامه" textAlgin="right" source="WOTemplateTypeName" />
                <TextField className={classes.sho} label="توضیحات نوع برنامه" textAlgin="right" source="WOTemplateTypeDescription" />
        </SimpleShowLayout>
    </Show>
);
    };

export default WOTemplateTypeShow;
