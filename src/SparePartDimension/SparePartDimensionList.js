import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    Responsive,
    ShowButton,
    SimpleList,
    TopToolbar,
    CreateButton,
    ExportButton,
    downloadCSV
}
from 'react-admin';
import SparePartDimensionFilter from './SparePartDimensionFilter';
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
      downloadCSV(`${BOM} ${csv}`, 'SparePartDimensionList')
  
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

const SparePartDimensionList = props => (
    <List actions={<ListActions />} exporter={exporter} filters={<SparePartDimensionFilter />} {...props} title="سطح قطعات">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.SparePartDimensionName} />
            }
            medium={
                <Datagrid>
                    <TextField label="کد سطح" textAlgin="right" source="SparePartDimensionCode" />
                    <TextField label="نام سطح" textAlgin="right" source="SparePartDimensionName" />
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default SparePartDimensionList;
