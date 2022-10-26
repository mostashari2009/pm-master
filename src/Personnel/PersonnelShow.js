import * as React from "react";
import {
    Datagrid,
    TextField,
    ReferenceField,
    TabbedShowLayout,
    ReferenceManyField,
    Tab,
    TopToolbar,
    EditButton,
    Show,
    List,
    useShowController,
    ListButton,
    ExportButton,
}
from 'react-admin';
import AddJobButton from './AddJobButton';
import PersonnelJobCategoryFilter from '../PersonnelJobCategory/PersonnelJobCategoryFilter';

import { makeStyles } from '@material-ui/core';
import { ImportButton } from "react-admin-import-csv";

const importOptions = {
    parseConfig: {
        encoding: 'ISO-8859-1'
    },
};

const useStyles = makeStyles({
    head: {
        display: 'none',
    },
    sho: {'& label': { fontSize: '20px', color:'rgb(36 50 97)' }},
    ex: {
        fontFamily: 'inherit',
    }
});

const ShowActions = ({ basePath, data }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
        <EditButton basePath={basePath} record={data}/>
    </TopToolbar>
);

const JobCategoryActions = ({ basePath, data }, props) => {

  const classes = useStyles();
  
  return (
    <TopToolbar>
        <AddJobButton record={data}/>
        <ExportButton className={classes.ex} label="خروجی" basePath={basePath} />
        <ImportButton label="ورودی" resource="PMWorks/PersonnelJobCategory" {...props} {...importOptions}/>
    </TopToolbar>
);
};

const PersonnelShow = props =>  {

    const {
        record
    } = useShowController(props);

    const classes = useStyles();

    return(
    <Show actions={<ShowActions/>} {...props}>
        <TabbedShowLayout>
            <Tab label="مشخصات">
                <TextField className={classes.sho} label="کد پرسنلی" textAlgin="right" source="PersonnelCode" />
                <TextField className={classes.sho} label="کد نت نیروی انسانی" textAlgin="right" source="PersonnelNetCode" />
                <TextField className={classes.sho} label="نام نیروی انسانی" textAlgin="right" source="PersonnelName" />
                <TextField className={classes.sho} label="نام خانوادگی نیروی انسانی" textAlgin="right" source="PersonnelFamily" />
                <TextField className={classes.sho} label="شماره نیروی انسانی" textAlgin="right" source="PersonnelMobile" />
                <ReferenceField className={classes.sho} label="دپارتمان" textAlgin="right" source="DepartmentID" reference="PMWorks/Department">
                    <TextField source="DepartmentName" />
                </ReferenceField>
            </Tab>
            <Tab label="شغل ها" path="PMWorks/PersonnelJobCategory">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/PersonnelJobCategory"
                    target="PersonnelID"
                    filter={{ PersonnelID: record.id }}
                >
                    <List empty={false} filters={<PersonnelJobCategoryFilter />} actions={<JobCategoryActions data={record}/>}>
                    <Datagrid>
                        <ReferenceField label="کد شغل" textAlgin="right" source="JobCategoryID" reference="PMWorks/JobCategory">
                            <TextField source="JobCategoryCode" />
                        </ReferenceField>
                        <ReferenceField label="نام شغل" textAlgin="right" source="JobCategoryID" reference="PMWorks/JobCategory">
                            <TextField source="JobCategoryName" />
                        </ReferenceField>
                    </Datagrid>
                    </List>
                </ReferenceManyField>
            </Tab>
        </TabbedShowLayout>
    </Show>
);
};


export default PersonnelShow;
