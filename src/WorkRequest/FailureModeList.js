import React from "react";
import { List, Datagrid, TextField, CardActions } from "react-admin";
import Button from "@material-ui/core/Button";
import FailureModeFilter from "../FailureMode/FailureModeFilter";
import { makeStyles } from "@material-ui/core/styles";

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
      padding: "6px 40px 6px 6px",
    },
    "& .MuiTableCell-body": {
      alignItems: "center",
      padding: "6px 40px 6px 6px",
    },
  },

  fir: {
    fontFamily: "inherit",
    color: "#0863cc",
  },
});

const SelectButton = ({ record, setId, setShowPanel }) => {
  const classes = useStyles();

  const toggleDrawer = () => {
    setShowPanel((showPanel) => !showPanel);
    setId(record.id);
  };

  return (
    <Button className={classes.fir} onClick={toggleDrawer} color="secondary">
      انتخاب
    </Button>
  );
};

const NoneActions = (props) => <CardActions />;

const FailureModeList = ({ setId, setShowPanel, ...props }) => {
  const classes = useStyles();
  return (
    <List
      filters={<FailureModeFilter />}
      bulkActionButtons={false}
      {...props}
      actions={<NoneActions />}
      title="نوع خرابی"
      perPage={10}
    >
      <Datagrid className={classes.page}>
        <TextField
          label="کدحالت خرابی"
          textAlgin="right"
          source="FailureModeCode"
        />
        <TextField
          label="عنوان حالت خرابی"
          textAlgin="right"
          source="FailureModeName"
        />
        <TextField
          label="توضیحات"
          textAlgin="right"
          source="FailureModeDescription"
        />
        <SelectButton setId={setId} setShowPanel={setShowPanel} />
      </Datagrid>
    </List>
  );
};

export default FailureModeList;
