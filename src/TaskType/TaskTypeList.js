import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    ExportButton,
    Responsive,
    ShowButton,
    SimpleList,
    CreateButton,
    TopToolbar,
    downloadCSV
}
from 'react-admin';
import TaskTypeFilter from './TaskTypeFilter';
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
      downloadCSV(`${BOM} ${csv}`, 'TaskTypeList')
  
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

const TaskTypeList = props => (
    <List actions={<ListActions />} exporter={exporter} filters={<TaskTypeFilter />} {...props} title="انواع فعالیت">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.TaskTypeName} />
            }
            medium={
                <Datagrid>
                    <TextField label="کد نوع فعالیت" textAlgin="right" source="TaskTypeCode" />
                    <TextField label="عنوان نوع فعالیت" textAlgin="right" source="TaskTypeName" />
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default TaskTypeList;
