import * as React from "react";
import { useState } from 'react';
import {
    SimpleForm,
    TextInput,
    Create,
    ListButton,
    TopToolbar,
    useNotify,
    useRefresh,
    useRedirect,
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

const CreateActions = ({ basePath, record, resource }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
    </TopToolbar>
);


const validateError = (values) => {
    const errors = {};
    if (!values.AssetClassCode) {
        errors.AssetClassCode = 'کد را وارد کنید';
    }
    if (!values.AssetClassName) {
        errors.AssetClassName = 'نام را وارد کنید';
    }
    return errors
};



const AssetClassCreate = props => {
    const {source, ...rest} = props;
    const classes = useStyles();

    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();
    const [Value, setValue] = useState('');

    const onSuccess = () => {
        notify(`دیتا ذخیره شد`)
        redirect('/PMWorks/AssetClass');
        redirect('/PMWorks/AssetClass/create');
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
                source="AssetClassCode" {...rest}/>
            <TextInput formClassName={classes.sec} label="نام خانواده تجهیز" textAlgin="right" source="AssetClassName" />
            <Separator/>
            <ReferenceInput className={classes.sel} disabled formClassName={classes.fir} label="کد گروه خانواده تجهیز" textAlgin="right" source="AssetCategoryID" reference="PMWorks/AssetCategory">
                <SelectInput optionText="AssetCategoryCode" />
            </ReferenceInput>
            <AssetCategoryRefrenceInput formClassName={classes.sec} label="نام گروه خانواده تجهیز" textAlgin="right" source="AssetCategoryID" reference="PMWorks/AssetCategory" perPage={10000} />
        </SimpleForm>
    </Create>
);
}


export default AssetClassCreate;
