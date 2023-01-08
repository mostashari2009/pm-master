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
import SupplierFilter from '../Supplier/SupplierFilter';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    page: {
        "& .MuiTableCell-head": {
          backgroundColor: "#DCDCDC",
          fontWeight: "700",
        },
    
        "& .MuiTypography-body2": {
          fontSize: "0.9rem",
        },
        "& .MuiTableCell-sizeSmall": {
          padding: "6px 6px 6px 6px",
        },
        "& .MuiTableCell-body": {
          alignItems: "center",
         padding: "6px 6px 6px 6px",
        },
      },
    
      fir: {
        fontFamily: "inherit",
        color: "#0863cc",
      },
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

const SupplierList = ({ setId, setShowPanel, ...props }) => {
const classes = useStyles();
    return(
    <List filters={<SupplierFilter />} bulkActionButtons={false} {...props} actions={<NoneActions />} title="خانواده تجهیز " className={classes.page}>
        <Datagrid>
            <TextField label="کد تامین کننده" textAlgin="right" source="SupplierCode" />
            <TextField label="نام تامین کننده" textAlgin="right" source="SupplierName" />
            <SelectButton setId={setId} setShowPanel={setShowPanel} />
        </Datagrid>
    </List>
);
    };

export default SupplierList;
