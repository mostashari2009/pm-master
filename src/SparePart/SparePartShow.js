import * as React from "react";

import {
    TextField,
    SimpleShowLayout,
    Show,
    ReferenceField,
    TopToolbar,
    ListButton,
    EditButton
}
from 'react-admin';
import SparePartTitle from './SparePartTitle';
import { makeStyles } from '@material-ui/core';

const ShowActions = ({ basePath, data }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
        <EditButton basePath={basePath} record={data}/>
    </TopToolbar>
);

const useStyles = makeStyles({
    sho: {'& label': { fontSize: '20px', color:'rgb(36 50 97)' }},
});


const SparePartShow = (props) => {
    const classes = useStyles();

    return(
    <Show actions={<ShowActions/>} title={<SparePartTitle />} {...props}>
        <SimpleShowLayout>
            <TextField className={classes.sho} label="کد قطعه" textAlgin="right" source="SparePartCode" />
            <TextField className={classes.sho} label="نام قطعه" textAlgin="right" source="SparePartName" />
            <ReferenceField className={classes.sho} label="خانواده قطعه" textAlgin="right" source="SparePartCategoryID" reference="PMWorks/SparePartCategory">
                <TextField source="SparePartCategoryName" />
            </ReferenceField>
            <ReferenceField className={classes.sho} label="سطح قطعه" textAlgin="right" source="SparePartDimensionID" reference="PMWorks/SparePartDimension">
                <TextField source="SparePartDimensionName" />
            </ReferenceField>
        </SimpleShowLayout>
    </Show>
);
};


export default SparePartShow;
