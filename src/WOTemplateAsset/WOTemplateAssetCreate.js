import * as React from "react";
import {
    SimpleForm,
    Toolbar,
    Create,
    TextInput,
    useNotify,
    useRefresh,
    useRedirect,
    ReferenceInput,
    SelectInput
}
from 'react-admin';
import { parse } from 'query-string';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import AssetSubdivisionRefrenceInput from './AssetSubdivisionRefrenceInput';


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
    if (!values.AssetSubdivisionID) {
        errors.AssetSubdivisionID = 'وضعیت را وارد کنید';
    }
    return errors
};

const WOTemplateAssetCreate = props => {

    const classes = useStyles();
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const { WOTemplateID: WOTemplateID_string } = parse(props.location.search);
    const WOTemplateID = WOTemplateID_string ? parseInt(WOTemplateID_string, 10) : '';
    
    const onSuccess = () => {
        notify(`دیتا ذخیره شد`)
        redirect(`/PMWorks/WOTemplate/${WOTemplateID}/show/PMWorks/WOTemplateAsset`);
        refresh();
    };

    return (
    <Create onSuccess={onSuccess} {...props} title="ایجاد تجهیز برنامه‌ریزی">
        <SimpleForm validate={validateError} initialValues={{ WOTemplateID}} redirect={redirect} toolbar={<Toolbar alwaysEnableSaveButton />}>
            <ReferenceInput disabled className={classes.sel} formClassName={classes.fir} label="کد برنامه" textAlgin="right" source="WOTemplateID" reference="PMWorks/WOTemplate">
                <SelectInput optionText="WOTemplateCode" />
            </ReferenceInput>
            <ReferenceInput disabled className={classes.sel} formClassName={classes.sec} label="نام برنامه" textAlgin="right" source="WOTemplateID" reference="PMWorks/WOTemplate">
                <SelectInput optionText="WOTemplateName" />
            </ReferenceInput>
            <Separator/>
            <ReferenceInput className={classes.sel} disabled formClassName={classes.fir} label="کد تجهیز" textAlgin="right" source="AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                <SelectInput optionText="AssetCode" />
            </ReferenceInput>
            <AssetSubdivisionRefrenceInput formClassName={classes.sec} label="نام تجهیز" textAlgin="right" source="AssetSubdivisionID" reference="PMWorks/AssetSubdivision" perPage={10000} />
        </SimpleForm>
    </Create>
    );
};


export default WOTemplateAssetCreate;