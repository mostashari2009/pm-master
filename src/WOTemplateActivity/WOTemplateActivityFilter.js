import * as React from "react";
import {
    Filter,
    TextInput
}
from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    width: { width: '200px !important' }
});

const WOTemplateActivityFilter = (props) => {
    const classes = useStyles();
    return (
    <Filter {...props}>
        <TextInput className={classes.width} label="کد فعالیت" textAlgin="right" source="TaskID__TaskCode__icontains" alwaysOn resettable/>
        <TextInput className={classes.width} label="عنوان فعالیت" textAlgin="right" source="TaskID__TaskName__icontains" alwaysOn resettable/>
        <TextInput className={classes.width} label="تناوب" textAlgin="right" source="TaskID__FrequencyName__icontains" alwaysOn resettable/>
        <TextInput className={classes.width} label="مقدار تناوب" textAlgin="right" source="TaskID__FrequencyAmount__icontains" alwaysOn resettable/>
        <TextInput className={classes.width} label="تخصص" textAlgin="right" source="TaskID__JobCategoryID__JobCategoryName__icontains" alwaysOn resettable/>
    </Filter>
);
};


export default WOTemplateActivityFilter;
