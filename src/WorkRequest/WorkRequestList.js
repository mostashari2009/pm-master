import * as React from "react";
import {
    List,
    Datagrid,
    Responsive,
    ShowButton,
    SimpleList,
    ReferenceField,
    TextField,
    TopToolbar,
    CreateButton,
    ExportButton,
    ReferenceManyField,
    Button,
    downloadCSV
}
from 'react-admin';
import JalaaliDateField  from '../Components/JalaaliDateField';
import { ImportButton } from "react-admin-import-csv";
import { makeStyles } from '@material-ui/core';
import  WorkRequestFilter from './WorkRequestFilter';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import jsonExport from 'jsonexport/dist';

const importOptions = {
    parseConfig: {
        encoding: 'ISO-8859-1'
    },
};
  
const exporter = (data) => {
    const BOM = '\uFEFF'
  
    jsonExport(data, (err, csv) => {
      downloadCSV(`${BOM} ${csv}`, 'WorkRequestList')
  
    })
};

const useStyles = makeStyles({
    ex: {
        fontFamily: 'inherit',
    },
    dis:{
        display: 'none',
    },
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

const WorkRequestField = ({ record = {} }) => {
    let str = record ? `${record.id}` : '';
    str = str.padStart(4,0);
    let text = "WR0".concat(str);
    return <span> {text} </span>;
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

WorkRequestField.defaultProps = { label: 'کد' };

const WorkOrderList = props => {

    return(
    <ReferenceManyField
                addLabel={false}
                reference="PMWorks/WorkOrder"
                target="WorkRequestID"
                filter={{ WorkRequestID: props.record.id }}
                sort={{ field: 'WODateOfRegistration', order: 'ASC' }}
    >
    <List {...props} actions={null} title=" "  >
        <Datagrid>
            <WorkOrderField textAlgin="right" source="id" />
            <JalaaliDateField label="تاریخ ثبت" textAlgin="right" source="WODateOfRegistration" />
            <JalaaliDateField label="تاریخ شروع" textAlgin="right" source="DateOfPlanStart" />
            <JalaaliDateField label="تاریخ پایان" textAlgin="right" source="DateOfPlanFinish" />
            <ShowButton />
        </Datagrid>
    </List>
    </ReferenceManyField>
);
    };

const WOButton = ({ record }) => {

    const classes = useStyles();
  
  return (
        <Button
            className={{
                [classes.dis]: record.Status == 11 || record.Status == 12,
            }}
            component={Link}
            to={`/PMWorks/WorkOrder/create?WorkRequestID=${record.id}`}
            label="ایجاد دستورکار"
            title="ایجاد دستورکار"
            color="secondary"
        >
          <AddIcon />
        </Button>
      );
        };

const WorkRequestList = props => (
    <List actions={<ListActions />} exporter={exporter} filters={< WorkRequestFilter />} sort={{ field: 'WRDate', order: 'DESC' }} {...props} title="درخواست کار">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.id} />
            }
            medium={
                <Datagrid expand={<WorkOrderList />}>
                    <WorkRequestField textAlgin="right" source="id"  label="کد" />
                    <JalaaliDateField textAlgin="right" source="WRDate" label="تاریخ" />
                    <ReferenceField label="کد تجهیز" textAlgin="right" source="AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                        <TextField source="AssetCode" />
                    </ReferenceField>
                    <ReferenceField label="نام تجهیز" textAlgin="right" source="AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                        <TextField source="AssetName" />
                    </ReferenceField>
                    <ReferenceField label="نام کلاس تجهیز" textAlgin="right" source="AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                        <TextField source="AssetClassNameChain" />
                    </ReferenceField>
                    <ReferenceField label="خرابی" textAlgin="right" source="FailureModeID" reference="PMWorks/FailureMode">
                        <TextField source="FailureModeName" />
                    </ReferenceField>
                    <ReferenceField label="اولویت" textAlgin="right" source="WorkPriorityID" reference="PMWorks/WorkPriority">
                        <TextField source="WorkPriorityName" />
                    </ReferenceField>
                    <ReferenceField label="نوع" textAlgin="right" source="TypeWrID" reference="PMWorks/TypeWr">
                        <TextField source="TypeWrName" />
                    </ReferenceField>
                    <WOButton />
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default WorkRequestList;
