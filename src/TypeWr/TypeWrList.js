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
import TypeWrFilter from './TypeWrFilter';

const TypeWrList = props => (
    <List filters={<TypeWrFilter />} {...props} title="انواع درخواست کار">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.TypeWrName} />
            }
            medium={
                <Datagrid>
                    <TextField label="کد نوع" textAlgin="right" source="TypeWrCode" />
                    <TextField label="نام نوع" textAlgin="right" source="TypeWrName" />
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default TypeWrList;
