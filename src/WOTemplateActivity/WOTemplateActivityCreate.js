import * as React from "react";
import {
    SimpleForm,
    Toolbar,
    Create,
    FormDataConsumer,
    useNotify,
    useRefresh,
    useRedirect,
    ReferenceInput,
    SelectInput,
    required
}
from 'react-admin';
import { parse } from 'query-string';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import TaskRefrenceInput from './TaskRefrenceInput';


const useStyles = makeStyles({
    fir: { display: 'inline-block', verticalAlign: 'bottom' },
    sec: { display: 'inline-block' },
    width: { width: 533, '& label': {marginRight: '25px'}, '& svg': {display: 'none' } },
    last: { display: 'inline-block', marginRight: 0 },
    sel: { '& svg': {display: 'none' }},
});

const Separator = () => <Box pt="0em" />;

const validateError = (values) => {
    const errors = {};
    if (!values.TaskID) {
        errors.TaskID = 'فعالیت را وارد کنید';
    }
    return errors
};

const WOTemplateActivityCreate = props => {

    const classes = useStyles();
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const { WOTemplateAssetID: WOTemplateAssetID_string } = parse(props.location.search);
    const WOTemplateAssetID = WOTemplateAssetID_string ? parseInt(WOTemplateAssetID_string, 10) : '';
    
    const onSuccess = () => {
        notify(`دیتا ذخیره شد`)
        redirect(`/PMWorks/WOTemplate/${WOTemplateAssetID}/show/PMWorks/WOTemplateAsset`);
        refresh();
    };

    return (
    <Create onSuccess={onSuccess} {...props} title="ایجاد تجهیز برنامه‌ریزی">
        <SimpleForm validate={validateError} initialValues={{ WOTemplateAssetID}} redirect={redirect} toolbar={<Toolbar alwaysEnableSaveButton />}>
            <ReferenceInput disabled className={classes.sel} formClassName={classes.fir} label="کد برنامه" textAlgin="right" source="WOTemplateAssetID" reference="PMWorks/WOTemplateAsset">
                <SelectInput optionText="WOTemplateID__WOTemplateCode" />
            </ReferenceInput>
            <ReferenceInput disabled className={classes.sel} formClassName={classes.sec} label="عنوان برنامه" textAlgin="right" source="WOTemplateAssetID" reference="PMWorks/WOTemplateAsset">
                <SelectInput optionText="WOTemplateID__WOTemplateName" />
            </ReferenceInput>
            <Separator/>
            <ReferenceInput disabled className={classes.sel} formClassName={classes.fir} label="کد تجهیز" textAlgin="right" source="WOTemplateAssetID" reference="PMWorks/WOTemplateAsset">
                <SelectInput optionText="AssetSubdivisionID__AssetCode" />
            </ReferenceInput>
            <ReferenceInput disabled className={classes.sel} formClassName={classes.sec} label="نام تجهیز" textAlgin="right" source="WOTemplateAssetID" reference="PMWorks/WOTemplateAsset">
                <SelectInput optionText="AssetSubdivisionID__AssetName" />
            </ReferenceInput>
            <Separator/>
            <ReferenceInput disabled className={classes.sel} formClassName={classes.fir} label="کد فعالیت" textAlgin="right" source="TaskID" reference="PMWorks/TaskTemp">
                <SelectInput optionText="TaskCode" />
            </ReferenceInput>
            <FormDataConsumer formClassName={classes.sec}>
                {({ formData, ...rest }) => formData.WOTemplateAssetID &&

                    <TaskRefrenceInput label="نام وظیفه" textAlgin="right" source="TaskID" reference="PMWorks/TaskTemp" allowEmpty validate={required()} perPage={10000} filter={{ WOTemplateAssetID: formData.WOTemplateAssetID }} {...rest} />

                }
            </FormDataConsumer>
        </SimpleForm>
    </Create>
    );
};


export default WOTemplateActivityCreate;