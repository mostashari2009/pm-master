import * as React from "react";
import {
    List,
    Datagrid,
    TopToolbar,
    ExportButton,
    Responsive,
    ShowButton,
    SimpleList,
    downloadCSV
}
from 'react-admin';
import WorkOrderFilter from './WorkOrderFilter';
import DateField from '../Components/JalaaliDateField';
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
      downloadCSV(`${BOM} ${csv}`, 'WorkOrderList')
  
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
      <ExportButton className={classes.ex} label="خروجی"/>
      <ImportButton label="ورودی" {...props} {...importOptions}/>
    </TopToolbar>
  );
};

const WorkOrderField = ({ record = {} }) => {
    let str = record ? `${record.WorkRequestID}` : '';
    str = str.padStart(4,0);
    let text = "WR0".concat(str);
    let stro = record ? `${record.id}` : '';
    stro = stro.padStart(4,0);
    let texto = "_WO0".concat(stro);
    return <span> {text} {texto} </span>;
};

WorkOrderField.defaultProps = { label: 'کد دستور کار' };

const WorkOrderList = props => (
    <List actions={<ListActions />} exporter={exporter} filters={<WorkOrderFilter />} {...props} title="دستور کار">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.id} />
            }
            medium={
                <Datagrid>
                    <WorkOrderField textAlgin="right" source="id" />
                    <DateField label="تاریخ ثبت" textAlgin="right" source="WODateOfRegistration" />
                    <DateField label="تاریخ شروع" textAlgin="right" source="DateOfPlanStart" />
                    <DateField label="تاریخ پایان" textAlgin="right" source="DateOfPlanFinish" />
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default WorkOrderList;
