import * as React from "react";

import {
    TextField,
    SimpleShowLayout,
    Show,
    RichTextField,
    EditButton,
    ListButton,
    TopToolbar
}
from 'react-admin';
import TaskTypeTitle from './TaskTypeTitle';
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

const TaskTypeShow = (props) => {
    const classes = useStyles();

    return(
    <Show actions={<ShowActions/>} title={<TaskTypeTitle />} {...props}>
        <SimpleShowLayout>
                <TextField className={classes.sho} label="کد نوع فعالیت" textAlgin="right" source="TaskTypeCode" />
                <TextField className={classes.sho} label="عنوان نوع فعالیت" textAlgin="right" source="TaskTypeName" />
                <RichTextField className={classes.sho} label="توضیحات نوع فعالیت" textAlgin="right" source="TaskTypeDescription" />
        </SimpleShowLayout>
    </Show>
);
};


export default TaskTypeShow;
