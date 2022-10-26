import * as React from "react";
import {
    TextField,
    TabbedShowLayout,
    Show,
    ReferenceField,
    TopToolbar,
    ListButton,
    EditButton,
    useShowController,
    Tab,
    NumberField,
    ExportButton,
    ReferenceManyField,
    List,
    Datagrid,
    downloadCSV
}
from 'react-admin';
import WOTaskTitle from './WOTaskTitle';
import { makeStyles } from '@material-ui/core';
import JalaaliDateField  from '../Components/JalaaliDateField';
import WOSparePartFilter from '../WOSparePart/WOSparePartFilter';
import WOPersonnelFilter from '../WOPersonnel/WOPersonnelFilter';
import AddPersonnelButton from './AddPersonnelButton';
import AddSparePartButton from './AddSparePartButton';
import jsonExport from 'jsonexport/dist';


const exporterSparePart = (data) => {
    const BOM = '\uFEFF'
  
    jsonExport(data, (err, csv) => {
      downloadCSV(`${BOM} ${csv}`, 'SparePartList')
  
    })
};

const exporterPersonnel = (data) => {
    const BOM = '\uFEFF'
  
    jsonExport(data, (err, csv) => {
      downloadCSV(`${BOM} ${csv}`, 'PersonnelList')
  
    })
};

const ShowActions = ({ basePath, data }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
        <EditButton basePath={basePath} record={data}/>
    </TopToolbar>
);

const WOSparePartActions = ({ basePath, data }) => {

    const classes = useStyles();
  
  return (
    <TopToolbar>
        <AddSparePartButton record={data}/>
        <ExportButton className={classes.ex} label="خروجی" basePath={basePath} />
    </TopToolbar>
);
};

const WOPersonnelActions = ({ basePath, data }) => {

    const classes = useStyles();
  
  return (
    <TopToolbar>
        <AddPersonnelButton record={data}/>
        <ExportButton className={classes.ex} label="خروجی" basePath={basePath} />
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

const WorkOrderFormat = ({ record }) => {
    let str = record ? `${record.WorkRequestID}` : '';
    str = str.padStart(4,0);
    let text = "WR0".concat(str);
    let stro = record ? `${record.id}` : '';
    stro = stro.padStart(4,0);
    let texto = "_WO0".concat(stro);
    return <span> {text} {texto} </span>;
};

const WOTaskShow = (props) => {

    const {
        record
    } = useShowController(props);

    const classes = useStyles();

    return(

    <Show actions={<ShowActions/>} title={<WOTaskTitle />} {...props}>
        <TabbedShowLayout>
            <Tab label="مشخصات">
                <ReferenceField disabled className={classes.width} label="کد درخواست‌کار" source="WorkOrderID" textAlgin="right" reference="PMWorks/WorkOrder">
                    <TextField source="WorkRequestID" optionText={<WorkOrderFormat />}/>
                </ReferenceField>
                <ReferenceField label="کد وظیفه" textAlgin="right" source="TaskID" reference="PMWorks/AssetClassTask">
                    <TextField source="TaskCode" />
                </ReferenceField>
                <ReferenceField label="نام وظیفه" textAlgin="right" source="TaskID" reference="PMWorks/AssetClassTask">
                    <TextField source="TaskName" />
                </ReferenceField>
                <TextField label="وضعیت" textAlgin="right" source="WOTaskSituationOfDo" />
            </Tab>
            <Tab label="قطعات یدکی" path="PMWorks/WOSparePart">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/WOSparePart"
                    target="WOTaskID"
                    filter={{ WOTaskID: record.id }}
                >
                <List exporter={exporterSparePart} empty={false} filters={<WOSparePartFilter />} actions={<WOSparePartActions data={record}/>}>
                    <Datagrid>
                        <ReferenceField label="کد قطعه" textAlgin="right" source="SparePart" reference="PMWorks/SparePart">
                            <TextField source="SparePartCode" />
                        </ReferenceField>
                        <ReferenceField label="نام قطعه" textAlgin="right" source="SparePart" reference="PMWorks/SparePart">
                            <TextField source="SparePartName" />
                        </ReferenceField>
                        <NumberField label="تعداد" textAlgin="right" source="SparePartAmount" />
                    </Datagrid>
                    </List>
                </ReferenceManyField>
            </Tab>
            <Tab label="پرسنل" path="PMWorks/WOPersonnel">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/WOPersonnel"
                    target="WOTaskID"
                    filter={{ WOTaskID: record.id }}
                >
                <List exporter={exporterPersonnel} empty={false} filters={<WOPersonnelFilter />} actions={<WOPersonnelActions data={record}/>}>
                    <Datagrid>
                        <ReferenceField label="نام پرسنل" textAlgin="right" source="PersonnelID" reference="PMWorks/Personnel">
                            <TextField source="PersonnelName" />
                        </ReferenceField>
                        <ReferenceField label="کد پرسنل" textAlgin="right" source="PersonnelID" reference="PMWorks/Personnel">
                            <TextField source="PersonnelCode" />
                        </ReferenceField>
                        <JalaaliDateField label="تاریخ انجام" textAlgin="right" source="WorkDate"/>
                        <NumberField label="مدت زمان انجام" textAlgin="right" source="WorkTime" />
                    </Datagrid>
                </List>
                </ReferenceManyField>
            </Tab>
        </TabbedShowLayout>
    </Show>
);
    };

export default WOTaskShow;
