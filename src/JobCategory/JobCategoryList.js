import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    Responsive,
    ShowButton,
    SimpleList,
    TopToolbar,
    ExportButton,
    CreateButton,
    downloadCSV
}
from 'react-admin';
import JobCategoryFilter from './JobCategoryFilter';
import { ImportButton } from "react-admin-import-csv";
import { makeStyles } from '@material-ui/core';
import jsonExport from 'jsonexport/dist';

const importOptions = {
    parseConfig: {
        encoding: 'ISO-8859-1'
    },
};
  
const exporter = (data) => {
    const BOM = '\uFEFF'
  
    jsonExport(data, (err, csv) => {
      downloadCSV(`${BOM} ${csv}`, 'JobCategoryList')
  
    })
};

const useStyles = makeStyles({
    ex: {
        fontFamily: 'inherit',
    }
});

const ListActions = (props) => {

    const classes = useStyles();
  
  return (
    <TopToolbar>
      <CreateButton/>
      <ExportButton className={classes.ex} label="خروجی"/>
      <ImportButton label="ورودی" {...props} {...importOptions}/>
    </TopToolbar>
  );
};

const JobCategoryList = props => (
    <List actions={<ListActions />} exporter={exporter} filters={<JobCategoryFilter />} {...props} title="تخصص">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.JobCategoryName} />
            }
            medium={
                <Datagrid>
                    <TextField label="کد تخصص" textAlgin="right" source="JobCategoryCode" />
                    <TextField label="عنوان تخصص" textAlgin="right" source="JobCategoryName" />
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default JobCategoryList;
