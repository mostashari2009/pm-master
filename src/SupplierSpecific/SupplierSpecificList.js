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
import SupplierSpecificFilter from './SupplierSpecificFilter';
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
      downloadCSV(`${BOM} ${csv}`, 'SupplierSpecificList')

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

const SupplierSpecificList = props => (
    <List actions={<ListActions />} exporter={exporter} filters={<SupplierSpecificFilter />} {...props} title="ویژگی تامیین کنندگان">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.SupplierSpecificName} />
            }
            medium={
                <Datagrid>
                    <TextField label="کد ویژگی تامین کننده" textAlgin="right" source="SupplierSpecificCode" />
                    <TextField label="نام ویژگی تامین کننده" textAlgin="right" source="SupplierSpecificName" />
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default SupplierSpecificList;
