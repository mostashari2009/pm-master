import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    Responsive,
    ShowButton,
    SimpleList,
}
from 'react-admin';
import DelayFilter from './DelayFilter';

const DelayList = props => (
    <List filters={<DelayFilter />} {...props} title="تاخیرات">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.DelayName} />
            }
            medium={
                <Datagrid>
                    <TextField label="کد تاخیر" textAlgin="right" source="DelayCode" />
                    <TextField label="نام تاخیر" textAlgin="right" source="DelayName" />
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default DelayList;
