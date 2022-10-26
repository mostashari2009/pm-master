import React from "react";
import {
    List,
    Datagrid,
    TextField,
    CardActions,
    BooleanField,
}
from 'react-admin';
import Button from "@material-ui/core/Button";
import UserFilter from '../User/UserFilter';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    fir: { fontFamily: 'inherit' },
});

const SelectButton = ({ record, setId, setShowPanel }) =>{

    const classes = useStyles();

    const toggleDrawer = () => {setShowPanel((showPanel) => !showPanel); setId(record.id)};

    return(
    <Button className={classes.fir} onClick={toggleDrawer} color="secondary">
     انتخاب
    </Button>
  );
    };


const NoneActions = props => (
    <CardActions />
); 

const UserList = ({ setId, setShowPanel, ...props }) => {

    return(
    <List filters={<UserFilter />} bulkActionButtons={false} {...props} actions={<NoneActions />} title="خانواده تجهیز ">
        <Datagrid>
            <TextField label="یوزر" textAlgin="right" source="username" />
            <TextField label="پسورد" textAlgin="right" source="last_name" />
            <BooleanField label="پرسنل" textAlgin="right" source="is_staff" />
            <BooleanField label="فعال" textAlgin="right" source="is_active" />
            <BooleanField label="دسترسی تمام" textAlgin="right" source="is_superuser" />
            <SelectButton setId={setId} setShowPanel={setShowPanel} />
        </Datagrid>
    </List>
);
    };

export default UserList;
