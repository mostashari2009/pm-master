import * as React from "react";
import {
    TextField,
    Tab,
    Show,
    ReferenceField,
    ReferenceManyField,
    TabbedShowLayout,
    Datagrid,
    TopToolbar,
    ListButton,
    EditButton,
    useShowController,
    useRecordContext,
    ExportButton,
    List,
    downloadCSV
}
from 'react-admin';
import WorkRequestTitle from './WorkRequestTitle';
import JalaaliDateField  from '../Components/JalaaliDateField';
import JalaaliTimeField  from '../Components/JalaaliTimeField';
import AddFailureCauseButton from './AddFailureCauseButton';
import AddWorkOrderButton from './AddWorkOrderButton';
import { makeStyles } from '@material-ui/core';
import FailureCauseFilter from '../FailureCause/FailureCauseFilter';
import WorkOrderFilter from '../WorkOrder/WorkOrderFilter';
import jsonExport from 'jsonexport/dist';
import AddWRStatusButton from './AddWRStatusButton';
import WRStatusFilter from '../WRStatus/WRStatusFilter';
import { ImportButton } from "react-admin-import-csv";

const importOptions = {
    parseConfig: {
        encoding: 'ISO-8859-1'
    },
};

const exporterFailureCause = (data) => {
    const BOM = '\uFEFF'
  
    jsonExport(data, (err, csv) => {
      downloadCSV(`${BOM} ${csv}`, 'FailureCauseList')
  
    })
};

const exporterWorkOrder = (data) => {
    const BOM = '\uFEFF'
  
    jsonExport(data, (err, csv) => {
      downloadCSV(`${BOM} ${csv}`, 'WorkOrderList')
  
    })
};

const exporterWRStatus = (data) => {
    const BOM = '\uFEFF'
  
    jsonExport(data, (err, csv) => {
      downloadCSV(`${BOM} ${csv}`, 'WRStatusList')
  
    })
};

const ShowActions = ({ basePath, data }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
        <EditButton basePath={basePath} record={data}/>
    </TopToolbar>
);

const FailureCauseActions = ({ basePath, data }, props) => {

  const classes = useStyles();
  
  return (
    <TopToolbar>
        <AddFailureCauseButton record={data}/>
        <ExportButton className={classes.ex} label="خروجی" basePath={basePath} />
        <ImportButton label="ورودی" resource="PMWorks/WOSupplier" {...props} {...importOptions}/>
    </TopToolbar>
);
};

const WorkOrderActions = ({ basePath, data }, props) => {

  const classes = useStyles();
  
  return (
    <TopToolbar>
        <AddWorkOrderButton record={data}/>
        <ExportButton className={classes.ex} label="خروجی" basePath={basePath} />
        <ImportButton label="ورودی" resource="PMWorks/WorkOrder" {...props} {...importOptions}/>
    </TopToolbar>
);
};

const WRStatusActions = ({ basePath, data }, props) => {

  const classes = useStyles();
  
  return (
    <TopToolbar>
        <AddWRStatusButton record={data}/>
        <ExportButton className={classes.ex} label="خروجی" basePath={basePath} />
        <ImportButton label="ورودی" resource="PMWorks/WRStatus" {...props} {...importOptions}/>
    </TopToolbar>
);
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

const WorkRequestField  = (props) => {
    const record = useRecordContext(props);
    let str = record ? `${record.id}` : '';
    str = str.padStart(4,0);
    let text = "WR0".concat(str);
    return <span> {text} </span>;
};
WorkRequestField.defaultProps = { label: 'کد' , addLabel: true};
JalaaliDateField.defaultProps = { addLabel: true};

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

const WorkRequestShow = (props) =>  {

    const {
        record
    } = useShowController(props);

    const classes = useStyles();

    return(
    <Show actions={<ShowActions/>} title={<WorkRequestTitle />} {...props}>
        <TabbedShowLayout>
            <Tab label="مشخصات">
                <WorkRequestField className={classes.sho} source="id"/>
                <JalaaliDateField className={classes.sho} textAlgin="right" source="WRDateOfRegistration" label="تاریخ ثبت" />
                <JalaaliDateField className={classes.sho} textAlgin="right" source="WRDate" label="تاریخ" />
                <ReferenceField className={classes.sho} label="تجهیز" textAlgin="right" source="AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                    <TextField source="AssetID__AssetName" />
                </ReferenceField>
                <ReferenceField className={classes.sho} label="نوع خرابی" textAlgin="right" source="FailureModeID" reference="PMWorks/FailureMode">
                    <TextField source="FailureModeCode" />
                </ReferenceField>
                <ReferenceField className={classes.sho} label="اولویت" textAlgin="right" source="WorkPriorityID" reference="PMWorks/WorkPriority">
                    <TextField source="WorkPriorityCode" />
                </ReferenceField>
                <ReferenceField className={classes.sho} label="نوع" textAlgin="right" source="TypeWrID" reference="PMWorks/TypeWr">
                    <TextField source="TypeWrName" />
                </ReferenceField>
                <TextField className={classes.sho} label="توضیحات" textAlgin="right" source="WRDescription"/>
            </Tab>
            <Tab label="وضعیت" path="PMWorks/WRStatus">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/WRStatus"
                    target="WorkRequestID"
                    filter={{ WorkRequestID: record.id }}
                >
                <List exporter={exporterWRStatus} empty={false} filters={<WRStatusFilter />} actions={<WRStatusActions data={record}/>}>
                    <Datagrid>
                        <ReferenceField label="کد وضعیت" textAlgin="right" source="StatusID" reference="PMWorks/Status">
                            <TextField source="StatusCode" />
                        </ReferenceField>
                        <ReferenceField label="نام وضعیت" textAlgin="right" source="StatusID" reference="PMWorks/Status">
                            <TextField source="StatusName" />
                        </ReferenceField>
                        <JalaaliDateField label="تاریخ ثبت" textAlgin="right" source="StatusDate" />
                        <JalaaliTimeField label="زمان ثبت" textAlgin="right" source="StatusTime" />
                    </Datagrid>
                    </List>
                </ReferenceManyField>
            </Tab>
            <Tab label="دستور کارها" path="PMWorks/WorkOrder">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/WorkOrder"
                    target="WorkRequestID"
                    filter={{ WorkRequestID: record.id }}
                >
                <List exporter={exporterWorkOrder} empty={false} filters={<WorkOrderFilter />} actions={<WorkOrderActions data={record}/>}>
                    <Datagrid>
                        <WorkOrderField textAlgin="right" source="id" />
                        <JalaaliDateField label="تاریخ ثبت" textAlgin="right" source="WODateOfRegistration" />
                        <JalaaliDateField label="تاریخ شروع" textAlgin="right" source="DateOfPlanStart" />
                        <JalaaliDateField label="تاریخ پایان" textAlgin="right" source="DateOfPlanFinish" />
                    </Datagrid>
                    </List>
                </ReferenceManyField>
            </Tab>
        </TabbedShowLayout>
    </Show>
);
    };

export default WorkRequestShow;
