import * as React from "react";
import { useState } from 'react';

import {
    SimpleForm,
    TextInput,
    Edit,
    NumberInput,
    SelectInput,
    RadioButtonGroupInput,
    ReferenceInput,
    Toolbar,
    ListButton,
    ShowButton,
    useEditController,
    TopToolbar
}
from 'react-admin';
import AssetClassTaskTitle from './AssetClassTaskTitle';
import JobCategoryRefrenceInput from './JobCategoryRefrenceInput';
import TaskTypeRefrenceInput from './TaskTypeRefrenceInput';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import CodeInput from '../Components/CodeInput';

const useStyles = makeStyles({
    fir: { display: 'inline-block' },
    sec: { display: 'inline-block', marginRight: 120 },
    width: { width: 652, '& label': {marginRight: '36px'} },
    last: { display: 'inline-block', marginRight: 0 },
    sel: { '& svg': {display: 'none' }},

});

const freq = [
    { _id: 'D', full_name: 'روزانه'},
    { _id: 'W', full_name: 'هفتگی'},
    { _id: 'M', full_name: 'ماهانه'},
    { _id: 'Y', full_name: 'سالانه'},
];

const fun = [
    { _id: 'O', full_name: 'اپراتور'},
    { _id: 'T', full_name: 'تکنسین' },
];

const EditActions = ({ basePath, data }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
        <ShowButton basePath={basePath} record={data} />
    </TopToolbar>
);

const validateError = (values) => {
    const errors = {};
    if (!values.TaskCode) {
        errors.TaskCode = 'کد را وارد کنید';
    }
    if (!values.TaskName) {
        errors.TaskName = 'نام را وارد کنید';
    }
    return errors
};

const Separator = () => <Box pt="0em" />;

const AssetClassTaskEdit = props => {
    const classes = useStyles();
    const {source, ...rest} = props;

    const controllerProps = useEditController(props);
    const {
        record, // record fetched via dataProvider.getOne() based on the id from the location
    } = controllerProps;
    const [Value, setValue] = useState(record.TaskCode);

    const AssetClassID = record.AssetClassID;
    const redirect = AssetClassID ? `/PMWorks/AssetClass/${AssetClassID}/show/PMWorks/AssetClassTask` : false;



    return(
    <Edit actions={<EditActions />} title={<AssetClassTaskTitle />} {...props}>
        <SimpleForm validate={validateError} toolbar={<Toolbar alwaysEnableSaveButton />} redirect={redirect}>
            <ReferenceInput disabled className={classes.sel} formClassName={classes.fir} label="کد خانواده تجهیز" textAlgin="right" source="AssetClassID" reference="PMWorks/AssetClass">
                <SelectInput optionText="AssetClassCode" />
            </ReferenceInput>
            <ReferenceInput disabled className={classes.sel} formClassName={classes.sec} label="نام خانواده تجهیز" textAlgin="right" source="AssetClassID" reference="PMWorks/AssetClass">
                <SelectInput optionText="AssetClassName" />
            </ReferenceInput>
            <Separator/>
            <CodeInput formClassName={classes.fir} value={Value}  onChange={event => { let val = event.target.value;
                                                    val = val.replace(/[^\x00-\x7F]/ig, "");
                                                    setValue(val)
                                                    }}
                label="کد فعالیت"
                source="TaskCode" {...rest}/>
            <TextInput formClassName={classes.sec} label="نام فعالیت" textAlgin="right" source="TaskName" />
            <TextInput className={classes.width} multiline label="توضیحات فعالیت" textAlgin="right" source="TaskDescription"/>
            <Separator />
            <SelectInput formClassName={classes.fir} label="مقدار تناوب" textAlgin="right" source="FrequencyName" choices={freq} optionText="full_name" optionValue="_id" />
            <NumberInput formClassName={classes.sec} label="مقدار تناوب" textAlgin="right" source="FrequencyAmount" />
            <Separator />
            <NumberInput formClassName={classes.fir} label="مدت زمان انجام" textAlgin="right" source="DurationOfDo" />
            <RadioButtonGroupInput formClassName={classes.sec} label="مسئول" textAlgin="right" source="Functor" choices={fun} optionText="full_name" optionValue="_id" />
            <Separator />
            <TaskTypeRefrenceInput formClassName={classes.fir} label="نوع فعالیت" textAlgin="right" source="TaskTypeID" reference="PMWorks/TaskType"  perPage={10000} />
            <JobCategoryRefrenceInput formClassName={classes.last} label="کد شغل" textAlgin="right" source="JobCategoryID" reference="PMWorks/JobCategory" perPage={10000} />
        </SimpleForm>
    </Edit>
);
    };

export default AssetClassTaskEdit;
