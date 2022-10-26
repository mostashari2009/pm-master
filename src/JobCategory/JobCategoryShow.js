import * as React from "react";

import {
    TextField,
    SimpleShowLayout,
    Show,
    TopToolbar,
    EditButton,
    ListButton
}
from 'react-admin';
import JobCategoryTitle from './JobCategoryTitle';
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

const JobCategoryShow = (props) => {
    const classes = useStyles();

    return(
    <Show actions={<ShowActions/>} title={<JobCategoryTitle />} {...props}>
        <SimpleShowLayout>
                <TextField className={classes.sho} label="کد تخصص" textAlgin="right" source="JobCategoryCode" />
                <TextField className={classes.sho} label="عنوان تخصص" textAlgin="right" source="JobCategoryName" />
        </SimpleShowLayout>
    </Show>
);
};


export default JobCategoryShow;
