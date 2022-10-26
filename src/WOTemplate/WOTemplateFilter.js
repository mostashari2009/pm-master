import * as React from "react";
import {
    TextInput,
    Filter,
}
from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    width: { width: 185 },
});

const AssetClassFilter = (props) => {
    const classes = useStyles();
    return(
    <Filter {...props}>
        <TextInput className={classes.width} label="کد" textAlgin="right" source="WOTemplateCode__icontains" alwaysOn resettable/>
        <TextInput className={classes.width} label="نام" textAlgin="right" source="WOTemplateName__icontains" alwaysOn resettable/>
        <TextInput className={classes.width} label="دپارتمان" textAlgin="right" source="DepartmentID__DepartmentName__icontains" alwaysOn resettable/>
        <TextInput className={classes.width} label="نوع" textAlgin="right" source="WOTemplateTypeID__WOTemplateTypeName__icontains" alwaysOn resettable/>
    </Filter>
);
    };


export default AssetClassFilter;
