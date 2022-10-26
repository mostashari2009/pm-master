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
import WOTemplateSchualingFilter from './WOTemplateSchualingFilter';

const WOTemplateSchualingList = props => (
    <List filters={<WOTemplateSchualingFilter />} {...props} title="پرسنل">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.id} />
            }
            medium={
                <Datagrid>
                    <TextField label="تاخیرات" textAlgin="right" source="id" />
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default WOTemplateSchualingList;
