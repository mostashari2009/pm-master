import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    Responsive,
    ShowButton,
    SimpleList,
}
from 'react-admin';
import FailureModeFilter from './FailureModeFilter';

const FailureModeList = props => (
    <List filters={<FailureModeFilter />} {...props} title="نوع خرابی">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.FailureModeName} />
            }
            medium={
                <Datagrid>
                    <TextField label="کد نوع خرابی" textAlgin="right" source="FailureModeCode" />
                    <TextField label="نام نوع خرابی" textAlgin="right" source="FailureModeName" />
                    <TextField label="کلاس تجهیز" textAlgin="right" source="AssetClassID" />
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default FailureModeList;
