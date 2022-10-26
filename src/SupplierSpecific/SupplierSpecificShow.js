import * as React from "react";

import {
    TextField,
    SimpleShowLayout,
    Show,
    TopToolbar,
    ListButton,
    EditButton
}
from 'react-admin';
import SupplierSpecificTitle from './SupplierSpecificTitle';
import {makeStyles} from "@material-ui/core";

const ShowActions = ({ basePath, data }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
        <EditButton basePath={basePath} record={data}/>
    </TopToolbar>
);

const useStyles = makeStyles({
    show_title: {'& label': { fontSize: '20px', color:'rgb(36 50 97)' }},
});

const SupplierSpecificShow = (props) => {
    const classes = useStyles();
    return (
        <Show actions={<ShowActions/>} title={<SupplierSpecificTitle/>} {...props}>
            <SimpleShowLayout>
                <TextField className={classes.show_title} label="کد ویژگی تامیین کننده" textAlgin="right"
                           source="SupplierSpecificCode"/>
                <TextField className={classes.show_title} label="نام ویژگی تامین کننده" textAlgin="right"
                           source="SupplierSpecificName"/>
            </SimpleShowLayout>
        </Show>
    )
};


export default SupplierSpecificShow;
