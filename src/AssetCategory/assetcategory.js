import * as React from "react";
import { useState } from 'react';
import {
    Edit,
    SimpleForm,
    TextInput,
    Create,
    TopToolbar,
    ListButton,
    useNotify,
    useRefresh,
    useRedirect,
    ShowButton,
    useEditController,
    Toolbar,
    ReferenceInput,
    SelectInput
}
from 'react-admin';
import AssetCategoryRefrenceInput from './AssetCategoryRefrenceInput';
import CodeInput from '../Components/CodeInput';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
    fir: { display: 'inline-block', verticalAlign: 'top' },
    sec: { display: 'inline-block' },
    width: { width: 712 },
    last: { display: 'inline-block', marginRight: 0 },
    sel: { '& svg': {display: 'none' }},
});

const Separator = () => <Box pt="0em" />;

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
    if (!values.AssetCategoryCode) {
        errors.AssetCategoryCode = 'کد را وارد کنید';
    }
    if (!values.AssetCategoryName) {
        errors.AssetCategoryName = 'نام را وارد کنید';
    }
    return errors
};


const AssetCategoryTitle = ({ record }) => {
    return <span> {record ? `"${record.AssetCategoryName}"` : ''}</span>;
};


export const AssetcategoryEdit = props => {
    const {source, ...rest} = props;
    const classes = useStyles();

    const controllerProps = useEditController(props);
    const {
        record, // record fetched via dataProvider.getOne() based on the id from the location
    } = controllerProps;
    const [Value, setValue] = useState(record.AssetCategoryCode);

    return(
    <Edit actions={<EditActions />} title={<AssetCategoryTitle />} {...props}>
        <SimpleForm validate={validateError} toolbar={<Toolbar alwaysEnableSaveButton />} redirect="show">
            <CodeInput formClassName={classes.fir} value={Value}  onChange={event => { let val = event.target.value;
                                                    val = val.replace(/[^\x00-\x7F]/ig, "");
                                                    setValue(val)
                                                    }}
                label="کد گروه خانواده تجهیز"
                source="AssetCategoryCode" {...rest}/>
            <TextInput formClassName={classes.sec} label="نام گروه خانواده تجهیز" textAlgin="right" source="AssetCategoryName" />
            <Separator/>
            <ReferenceInput className={classes.sel} disabled formClassName={classes.fir} label="کد گروه خانواده تجهیز پدر" textAlgin="right" source="AssetClassFather" reference="PMWorks/AssetCategory">
                <SelectInput optionText="AssetCategoryCode" />
            </ReferenceInput>
            <AssetCategoryRefrenceInput formClassName={classes.sec} label="نام گروه خانواده تجهیز پدر" textAlgin="right" source="AssetClassFather" reference="PMWorks/AssetCategory" perPage={10000} allowEmpty/>
        </SimpleForm>
    </Edit>
);
};

export const AssetcategoryCreate = props => {
    const {source, ...rest} = props;
    const classes = useStyles();

    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();
    const [Value, setValue] = useState('');

    const onSuccess = () => {
        notify(`دیتا ذخیره شد`);
        redirect('/PMWorks/AssetCategory');
        redirect('/PMWorks/AssetCategory/create');
        refresh();
    };
return(
    <Create actions={<CreateActions />} onSuccess={onSuccess} {...props} title="ایجاد خانواده تجهیز">
        <SimpleForm validate={validateError}>
        <CodeInput formClassName={classes.fir} value={Value}  onChange={event => { let val = event.target.value;
                                                    val = val.replace(/[^\x00-\x7F]/ig, "");
                                                    setValue(val)
                                                    }}
                label="کد خانواده تجهیز"
                source="AssetCategoryCode" {...rest}/>
            <TextInput formClassName={classes.sec} label="نام خانواده تجهیز" textAlgin="right" source="AssetCategoryName" />
            <Separator/>
            <ReferenceInput className={classes.sel} disabled formClassName={classes.fir} label="کد خانواده تجهیز پدر" textAlgin="right" source="AssetClassFather" reference="PMWorks/AssetCategory">
                <SelectInput optionText="AssetCategoryCode" />
            </ReferenceInput>
            <AssetCategoryRefrenceInput formClassName={classes.sec} label="نام خانواده تجهیز پدر" textAlgin="right" source="AssetClassFather" reference="PMWorks/AssetCategory" perPage={10000} allowEmpty/>
        </SimpleForm>
    </Create>
);
};