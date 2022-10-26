import * as React from "react";
import {
    Edit,
    SimpleForm,
    TextInput,
    FormDataConsumer
}
from 'react-admin';
import WorkRequestTitle from './WorkRequestTitle';
import AssetSubdivisionRefrenceInput from './AssetSubdivisionRefrenceInput';
import FailureModeRefrenceInput from './FailureModeRefrenceInput';
import WorkPriorityRefrenceInput from './WorkPriorityRefrenceInput';
import TypeWrRefrenceInput from './TypeWrRefrenceInput';

import { DateInput } from '../Components/JalaliDatePicker';
import { DateInputtoday } from '../Components/JalaliDatePickertoday';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
    fir: { display: 'inline-block' },
    sec: { display: 'inline-block', marginRight: 64 },
    thi: { display: 'inline-block', marginRight: 0 },
    width: { display: 'inline-grid', width: 533, '& label': {marginRight: '25px'} },
});

const Separator = () => <Box pt="0em" />;
const Separator2 = () => <Box pt="1.5em" />;

const WorkRequestEdit = props => {
    const classes = useStyles();

    return (
    <Edit title={<WorkRequestTitle />} {...props}>
        <SimpleForm redirect="show">
                <DateInputtoday formClassName={classes.fir} label="تاریخ ثبت" source="WRDateOfRegistration" disabled/>
                <DateInput formClassName={classes.sec} label="تاریخ" source="WRDate" />
                <Separator2 />
                <AssetSubdivisionRefrenceInput formClassName={classes.fir} label="تجهیز" textAlgin="right" source="AssetSubdivisionID" reference="PMWorks/AssetSubdivisionAsset" perPage={10000} />
                <FormDataConsumer formClassName={classes.thi}>
                 {({ formData, ...rest }) => formData.AssetSubdivisionID &&
                    <FailureModeRefrenceInput label="خرابی" textAlgin="right" source="FailureModeID" reference="PMWorks/FailureAsset" perPage={10000} filter={{ AssetClassID: formData.AssetSubdivisionID }} {...rest} />
                 }
                </FormDataConsumer>
                <Separator />
                <FormDataConsumer formClassName={classes.fir}>
                 {({ formData, ...rest }) => formData.AssetSubdivisionID &&
                    <WorkPriorityRefrenceInput label="اولویت" textAlgin="right" source="WorkPriorityID" reference="PMWorks/WorkPriority" perPage={10000} {...rest} />
                 }
                </FormDataConsumer>
                <FormDataConsumer formClassName={classes.thi}>
                 {({ formData, ...rest }) => formData.AssetSubdivisionID &&
                    <TypeWrRefrenceInput label="نوع" textAlgin="right" source="TypeWrID" reference="PMWorks/TypeWr" perPage={10000} {...rest} />
                 }
                </FormDataConsumer>
                <FormDataConsumer className={classes.width}>
                 {({ formData, ...rest }) => formData.AssetSubdivisionID &&
                    <TextInput multiline className={classes.width} label="توضیحات" textAlgin="right" source="WRDescription" {...rest}/>
                }
                </FormDataConsumer>
        </SimpleForm>
    </Edit>
);
};


export default WorkRequestEdit;
