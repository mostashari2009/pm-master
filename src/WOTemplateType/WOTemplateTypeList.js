import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    Responsive,
    ShowButton,
    SimpleList,
    TopToolbar,
    CreateButton,
    ExportButton
}
from 'react-admin';
import WOTemplateTypeFilter from './WOTemplateTypeFilter';
import { ImportButton } from "react-admin-import-csv";
import { makeStyles } from '@material-ui/core';

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
      <ImportButton label="ورودی" {...props}/>
    </TopToolbar>
  );
};

const WOTemplateTypeList = props => (
    <List actions={<ListActions />} filters={<WOTemplateTypeFilter />} {...props} title="انواع برنامه">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.WOTemplateTypeName} />
            }
            medium={
                <Datagrid>
                    <TextField label="کد نوع برنامه" textAlgin="right" source="WOTemplateTypeCode" />
                    <TextField label="نام نوع برنامه" textAlgin="right" source="WOTemplateTypeName" />
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default WOTemplateTypeList;
