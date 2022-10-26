import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    Responsive,
    ShowButton,
    SimpleList,
    ReferenceField,
    downloadCSV,
    TopToolbar,
    CreateButton,
    ExportButton
}
from 'react-admin';
import SparePartFilter from './SparePartFilter';
import { ImportButton } from "react-admin-import-csv";
import { makeStyles } from '@material-ui/core';
import jsonExport from 'jsonexport/dist';

const importOptions = {
  parseConfig: {
      encoding: 'ISO-8859-1',
      dynamicTyping: false
  },
};

const exporter = (data) => {
  const BOM = '\uFEFF'

  jsonExport(data, (err, csv) => {
    downloadCSV(`${BOM} ${csv}`, 'SparePartList')

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

const SparePartList = props => (
    <List actions={<ListActions />} exporter={exporter} filters={<SparePartFilter />} {...props} title="قطعات">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.SparePartName} />
            }
            medium={
                <Datagrid>
                    <TextField label="کد" textAlgin="right" source="SparePartCode" />
                    <TextField label="نام" textAlgin="right" source="SparePartName" />
                    <ReferenceField label="خانواده قطعه" textAlgin="right" source="SparePartCategoryID" reference="PMWorks/SparePartCategory">
                        <TextField source="SparePartCategoryName" />
                    </ReferenceField>
                    <ReferenceField label="واحد اندازه‌گیری" textAlgin="right" source="SparePartDimensionID" reference="PMWorks/SparePartDimension">
                        <TextField source="SparePartDimensionName" />
                    </ReferenceField>
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default SparePartList;
