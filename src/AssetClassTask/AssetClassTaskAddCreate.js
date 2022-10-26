import * as React from "react";
import { useState } from 'react';

import {
    SimpleForm,
    Toolbar,
    Create,
    required,
    TextInput,
    SelectInput,
    NumberInput,
    RadioButtonGroupInput,
    ReferenceInput,
}
from 'react-admin';
import { parse } from 'query-string';
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
    { _id: 'H', full_name: 'ساعتی'},
    { _id: 'D', full_name: 'روزانه'},
    { _id: 'W', full_name: 'هفتگی'},
    { _id: 'M', full_name: 'ماهانه'},
    { _id: 'Y', full_name: 'سالانه'},
];

const fun = [
    { _id: 'O', full_name: 'اپراتور'},
    { _id: 'T', full_name: 'تکنسین' },
];

const Separator = () => <Box pt="0em" />;

const AssetClassTaskAddCreate = props => {
    const classes = useStyles();
    const {source, ...rest} = props;
    const [Value, setValue] = useState('');
    const { AssetClassID: AssetClassID_string } = parse(props.location.search);
    const AssetClassID = AssetClassID_string ? parseInt(AssetClassID_string, 10) : '';
    const redirect = AssetClassID ? `/PMWorks/AssetClass/${AssetClassID}/show/PMWorks/AssetClassTask` : false;

    return (
    <Create {...props} title="ایجاد فعالیت">
        <SimpleForm initialValues={{ AssetClassID}} redirect={redirect} toolbar={<Toolbar alwaysEnableSaveButton />}>
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
            <TextInput formClassName={classes.sec} label="عنوان فعالیت" textAlgin="right" source="TaskName" />
            <TextInput className={classes.width} multiline label="توضیحات فعالیت" textAlgin="right" source="TaskDescription"/>
            <Separator />
            <SelectInput formClassName={classes.fir} label="تناوب" textAlgin="right" source="FrequencyName" choices={freq} optionText="full_name" optionValue="_id" />
            <NumberInput formClassName={classes.sec} label="مقدار تناوب" textAlgin="right" source="FrequencyAmount" />
            <Separator />
            <NumberInput formClassName={classes.fir} label="مدت زمان انجام(دقیقه)" textAlgin="right" source="DurationOfDo" />
            <RadioButtonGroupInput formClassName={classes.sec} label="انجام دهنده" textAlgin="right" source="Functor" choices={fun} optionText="full_name" optionValue="_id" />
            <Separator />
            <TaskTypeRefrenceInput formClassName={classes.fir} label="نوع فعالیت" textAlgin="right" source="TaskTypeID" reference="PMWorks/TaskType" allowEmpty validate={required()} perPage={10000} />
            <JobCategoryRefrenceInput formClassName={classes.last} label="تخصص مورد نیاز" textAlgin="right" source="JobCategoryID" reference="PMWorks/JobCategory" allowEmpty validate={required()} perPage={10000} />
        </SimpleForm>
    </Create>
    );
};


export default AssetClassTaskAddCreate;