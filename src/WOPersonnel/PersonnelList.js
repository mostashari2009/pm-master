import React from "react";
import {
    List,
    Datagrid,
    TextField,
    CardActions,
    ReferenceField,
}
from 'react-admin';
import Button from "@material-ui/core/Button";
import PersonnelFilter from '../Personnel/PersonnelFilter';
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

const PersonnelList = ({ setId, setShowPanel, ...props }) => {

    return(
    <List filters={<PersonnelFilter />} bulkActionButtons={false} {...props} actions={<NoneActions />} title="لیست نیروی انسانی ">
        <Datagrid>
            <TextField label="کد پرسنلی" textAlgin="right" source="PersonnelCode" />
            <TextField label="کد نت نیروی انسانی" textAlgin="right" source="PersonnelNetCode" />
            <TextField label="نام نیروی انسانی" textAlgin="right" source="PersonnelName" />
            <TextField label="نام خانوادگی نیروی انسانی" textAlgin="right" source="PersonnelFamily" />
            <TextField label="شماره نیروی انسانی" textAlgin="right" source="PersonnelMobile" />
            <ReferenceField label="دپارتمان" textAlgin="right" source="DepartmentID" reference="PMWorks/Department">
                <TextField source="DepartmentName" />
            </ReferenceField>
            <SelectButton setId={setId} setShowPanel={setShowPanel} />
        </Datagrid>
    </List>
);
    };

export default PersonnelList;
