import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    Edit,
    SimpleForm,
    TextInput,
    Create,
    Responsive,
    ShowButton,
    SimpleList,
    SimpleShowLayout,
    Show,
    EditButton,
    TopToolbar,
    ListButton,
    Toolbar,
    useNotify,
    useRefresh,
    useRedirect,
    CreateButton,
    ExportButton,
    downloadCSV
}
from 'react-admin';
import SpecificDataFilter from './SpecificDataFilter';
import { makeStyles } from '@material-ui/core';
import { ImportButton } from "react-admin-import-csv";
import jsonExport from 'jsonexport/dist';

const importOptions = {
    parseConfig: {
        encoding: 'ISO-8859-1'
    },
};

const exporter = (data) => {
  const BOM = '\uFEFF'

  jsonExport(data, (err, csv) => {
    downloadCSV(`${BOM} ${csv}`, 'SpecificDataList')

  })
};

const EditActions = ({ basePath, data, resource }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
        <ShowButton basePath={basePath} record={data} />
    </TopToolbar>
);

const CreateActions = ({ basePath, record, resource }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
    </TopToolbar>
);

const validateError = (values) => {
    const errors = {};
    if (!values.SpecificDataCode) {
        errors.SpecificDataCode = 'کد را وارد کنید';
    }
    if (!values.SpecificDataName) {
        errors.SpecificDataName = 'نام را وارد کنید';
    }
    if (!values.Measurment) {
        errors.Measurment = 'واحد را وارد کنید';
    }
    return errors
};

const ShowActions = ({ basePath, data }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
        <EditButton basePath={basePath} record={data}/>
    </TopToolbar>
);

const useStyles = makeStyles({
    sho: {'& label': { fontSize: '20px', color:'rgb(36 50 97)' }},
    ex: {
        fontFamily: 'inherit',
    }
});

const SpecificDataTitle = ({ record }) => {
    return <span> {record ? `"${record.SpecificDataName}"` : ''}</span>;
};

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


export const SpecificDataList = props => (
    <List actions={<ListActions />} exporter={exporter} {...props} filters={<SpecificDataFilter />} title="ویژگی ها">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.title} />
            }
            medium={
                <Datagrid>
                    <TextField label="کد ویژگی" textAlgin="right" source="SpecificDataCode" />
                    <TextField label="نام ویژگی" textAlgin="right" source="SpecificDataName" />
                    <TextField label="واحد اندازه گیری" textAlgin="right" source="Measurment" />
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export const SpecificDataEdit = props => (
    <Edit actions={<EditActions />} title={<SpecificDataTitle />} {...props}>
        <SimpleForm validate={validateError} toolbar={<Toolbar alwaysEnableSaveButton />} redirect="show">
            <TextInput label="کد ویژگی" textAlgin="right" source="SpecificDataCode" />
            <TextInput label="نام ویژگی" textAlgin="right" source="SpecificDataName" />
            <TextInput label="واحد اندازه گیری" textAlgin="right" source="Measurment" />
        </SimpleForm>
    </Edit>
);


export const SpecificDataCreate = props => {

    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = () => {
        notify(`دیتا ذخیره شد`)
        redirect('/PMWorks/SpecificData/create');
        refresh();
    };
return(
    <Create actions={<CreateActions />} {...props} title="ایجاد ویژگی کلاس تجهیز">
        <SimpleForm validate={validateError}>
            <TextInput label="کد ویژگی" textAlgin="right" source="SpecificDataCode" />
            <TextInput label="نام ویژگی" textAlgin="right" source="SpecificDataName" />
            <TextInput label="واحد اندازه گیری" textAlgin="right" source="Measurment" />
        </SimpleForm>
    </Create>
);
};

export const SpecificDataShow = (props) => {
    const classes = useStyles();

    return(
    <Show actions={<ShowActions/>} title={<SpecificDataTitle />} {...props}>
        <SimpleShowLayout>
            <TextField className={classes.sho} label="کد اولویت" textAlgin="right" source="SpecificDataCode" />
            <TextField className={classes.sho} label="نام اولویت" textAlgin="right" source="SpecificDataName" />
            <TextField className={classes.sho} label="مقدار" textAlgin="right" source="Measurment" />
        </SimpleShowLayout>
    </Show>
);
    };