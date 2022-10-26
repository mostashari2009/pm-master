import * as React from "react";
import {
    Datagrid,
    TextField,
    ReferenceField,
    ShowButton,
    List,
    TabbedShowLayout,
    ReferenceManyField,
    Tab,
    SelectField,
    Show,
    NumberField,
    BooleanField,
    ExportButton,
    TopToolbar,
    EditButton,
    ListButton,
    useShowController
}
from 'react-admin';
import WOTemplateTitle from './WOTemplateTitle';
import AddAssetButton from './AddAssetButton';
import DateField from '../Components/JalaaliDateTimeField';
import AddSchualingButton from './AddSchualingButton';
import SchualingButton from './SchualingButton';
import { makeStyles } from '@material-ui/core';
import { ImportButton } from "react-admin-import-csv";
import WOTemplateAssetFilter from '../WOTemplateAsset/WOTemplateAssetFilter';
import WOTemplateSchualingFilter from '../WOTemplateSchualing/WOTemplateSchualingFilter';
import WOTemplateActivityFilter from '../WOTemplateActivity/WOTemplateActivityFilter';
import AddTaskButton from './AddTaskButton';
import { Link } from 'react-router-dom';
import QuickSelectTaskButton from './QuickSelectTaskButton';
import QuickSelectAssetButton from './QuickSelectAssetButton';


const importOptions = {
    parseConfig: {
        encoding: 'ISO-8859-1'
    },
};

const useStyles = makeStyles({
    head: {
        display: 'none',
    },
    sho: {'& label': { fontSize: '20px', color:'rgb(36 50 97)' }},
    ex: {
        fontFamily: 'inherit',
    },
    button: {
        color: '#243261',
        fontSize: '0.8125rem',
        paddingLeft: '0px',
        paddingTop: '3px'
    },
    dis:{
        display: 'none',
    },
});

const ShowActions = ({ basePath, data }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
        <EditButton basePath={basePath} record={data}/>
    </TopToolbar>
);

const WOTemplateAssetActions = ({ basePath, data }, props) => {

    const classes = useStyles();
    
    return (
      <TopToolbar>
          <QuickSelectAssetButton record={data}/>
          <AddAssetButton record={data}/>
          <ExportButton className={classes.ex} label="خروجی" basePath={basePath} />
          <ImportButton label="ورودی" resource="PMWorks/WOTemplateAsset" {...props} {...importOptions}/>
      </TopToolbar>
  );
};

const WOTemplateSchualingActions = ({ basePath, data }, props) => {

    const classes = useStyles();
    
    return (
      <TopToolbar>
          <AddSchualingButton record={data}/>
          <ExportButton className={classes.ex} label="خروجی" basePath={basePath} />
          <ImportButton label="ورودی" resource="PMWorks/WOTemplateSchualing" {...props} {...importOptions}/>
      </TopToolbar>
  );
};

const fun = [
    { _id: 'O', full_name: 'اپراتور'},
    { _id: 'T', full_name: 'تکنسین' },
];

const freq = [
    { _id: 'H', full_name: 'ساعتی'},
    { _id: 'D', full_name: 'روزانه'},
    { _id: 'W', full_name: 'هفتگی'},
    { _id: 'M', full_name: 'ماهانه'},
    { _id: 'Y', full_name: 'سالانه'},
];

const WorkOrderShowButton = ({ record }) => {
    const classes = useStyles();

    return(
    <ShowButton
    className={{
        [classes.dis]: record.WorkOrderID == null,
        [classes.button]: record.WorkOrderID != null
    }}
    variant="raised"
    component={Link}
    to={`/PMWorks/WorkOrder/${record.WorkOrderID}/show`}
    basePath="PMWorks/WorkOrder"
    record={record.WorkOrderID} />
);
    };

const TemplateSchualing = props => (
        <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/TemplateSchualingDate"
                    target="WOTemplateSchualingID"
                    filter={{ WOTemplateSchualingID: props.record.id }}
                    sort={{ field: 'SchualingDate', order: 'ASC' }}
        >
        <List {...props} actions={null} basePath="PMWorks/TemplateSchualingDate" title=" "  >
            <Datagrid>
                <DateField label="تاریخ" source="SchualingDate" />
                <BooleanField label="وضعیت" source="StatusOfDo" />
                <WorkOrderShowButton />
            </Datagrid>
        </List>
        </ReferenceManyField>
);

const WOTemplateActivityActions = ({ basePath, data, dataa }, props) => {

    const classes = useStyles();
    
    return (
      <TopToolbar>
          <QuickSelectTaskButton record={data} recordd={dataa}/>
          <AddTaskButton record={data}/>
          <ExportButton className={classes.ex} label="خروجی" basePath={basePath} />
          <ImportButton label="ورودی" resource="PMWorks/WOTemplateActivityNew" {...props} {...importOptions}/>
      </TopToolbar>
  );
};

const WOTemplateActivity = props => {

    return(
    <ReferenceManyField
                addLabel={false}
                reference="PMWorks/WOTemplateActivityNew"
                target="WOTemplateAssetID"
                filter={{ WOTemplateAssetID: props.record.id }}
    >
    <List {...props} empty={false} filters={<WOTemplateActivityFilter />} actions={<WOTemplateActivityActions data={props.record.id} dataa={props.record.WOTemplateID}/>} basePath="PMWorks/WOTemplateActivity" title=" "  >
        <Datagrid>
            <ReferenceField label="کد فعالیت" textAlgin="right" source="TaskID" reference="PMWorks/AssetClassTask">
                <TextField source="TaskCode" />
            </ReferenceField>
            <ReferenceField label="عنوان فعالیت" textAlgin="right" source="TaskID" reference="PMWorks/AssetClassTask">
                <TextField source="TaskName" />
            </ReferenceField>
            <ReferenceField label="تناوب" textAlgin="right" source="TaskID" reference="PMWorks/AssetClassTask">
                <TextField source="FrequencyName" />
            </ReferenceField>
            <ReferenceField label="مقدار تناوب" textAlgin="right" source="TaskID" reference="PMWorks/AssetClassTask">
                <TextField source="FrequencyAmount" />
            </ReferenceField>
            <ReferenceField label="مدت زمان انجام" textAlgin="right" source="TaskID" reference="PMWorks/AssetClassTask">
                <TextField source="DurationOfDo" />
            </ReferenceField>
            <ReferenceField label="مسئول" textAlgin="right" source="TaskID" reference="PMWorks/AssetClassTask">
                <SelectField label="مسئول" textAlgin="right" source="Functor" choices={fun} optionText="full_name" optionValue="_id" />
            </ReferenceField>
            <ReferenceField label="تخصص" textAlgin="right" source="TaskID__JobCategoryID" reference="PMWorks/JobCategory">
                <TextField source="JobCategoryName" />
            </ReferenceField>
        </Datagrid>
    </List>
    </ReferenceManyField>
);
    };


const WOTemplateShow = (props) => {

    const {
        record
    } = useShowController(props);

    const classes = useStyles();

    return(
    <Show actions={<ShowActions/>} {...props} title={<WOTemplateTitle />}>
        <TabbedShowLayout>
            <Tab label="مشخصات">
                <TextField className={classes.sho} label="کد" textAlgin="right" source="WOTemplateCode" />
                <TextField className={classes.sho} label="عنوان" textAlgin="right" source="WOTemplateName" />
                <NumberField className={classes.sho} label="مدت انجام(روز)" textAlgin="right" source="WOTemplateDurationDay" />
                <NumberField className={classes.sho} label="مدت انجام(ساعت)" textAlgin="right" source="WOTemplateDurationHour" />
                <TextField className={classes.sho} label="بازه ایجاد(روز)" textAlgin="right" source="WOTemplateAlarmDay" />
                <NumberField className={classes.sho} label="بازه ایجاد(ساعت)" textAlgin="right" source="WOTemplateAlarmHour" />
                <ReferenceField className={classes.sho} label="دپارتمان" textAlgin="right" source="DepartmentID" reference="PMWorks/Department">
                    <TextField source="DepartmentName" />
                </ReferenceField>
                <ReferenceField className={classes.sho} label="نوع" textAlgin="right" source="WOTemplateTypeID" reference="PMWorks/WOTemplateType">
                    <TextField source="WOTemplateTypeName" />
                </ReferenceField>
            </Tab>
            <Tab label="تجهیزات" path="PMWorks/WOTemplateAsset">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/WOTemplateAsset"
                    target="WOTemplateID"
                    filter={{ WOTemplateID: record.id }}
                >
                    <List empty={false} filters={<WOTemplateAssetFilter />} actions={<WOTemplateAssetActions data={record}/>}>
                    <Datagrid expand={<WOTemplateActivity/>}>
                        <ReferenceField label="کد تجهیز" textAlgin="right" source="AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                            <TextField source="AssetCode" />
                        </ReferenceField>
                        <ReferenceField label="عنوان تجهیز" textAlgin="right" source="AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                            <TextField source="AssetName" />
                        </ReferenceField>
                        <ReferenceField label="خانواده تجهیز" textAlgin="right" source="AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                            <TextField source="AssetClassNameChain" />
                        </ReferenceField>
                        <ReferenceField label="مکان" textAlgin="right" source="AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                            <TextField source="AssetID__LocationID__LocationNameChain" />
                        </ReferenceField>
                    </Datagrid>
                    </List>
                </ReferenceManyField>
            </Tab>
            <Tab label="زمان بندی" path="PMWorks/WOTemplateSchualing">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/WOTemplateSchualing"
                    target="WOTemplateID"
                    filter={{ WOTemplateID: record.id }}
                >
                    <List empty={false} filters={<WOTemplateSchualingFilter />} actions={<WOTemplateSchualingActions data={record}/>}>
                    <Datagrid expand={<TemplateSchualing/>}>
                        <DateField label="زمان شروع" source="WOTemplateSchualingStartDate" />
                        <DateField label="زمان پایان" source="WOTemplateSchualingFinishDate" />
                        <NumberField label="مقدار تناوب" textAlgin="right" source="AmountFrequency"/>
                        <SelectField label="تناوب" textAlgin="right" source="FrequencyName" choices={freq} optionText="full_name" optionValue="_id" />
                        <BooleanField label="وضعیت" source="Status" />
                        <SchualingButton />
                        <ShowButton />
                    </Datagrid>
                    </List>
                </ReferenceManyField>
            </Tab>
        </TabbedShowLayout>
    </Show>
);
    };


export default WOTemplateShow;
