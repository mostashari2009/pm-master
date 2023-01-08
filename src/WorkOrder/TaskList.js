import React from "react";
import { Fragment } from "react";
import {
  List,
  Datagrid,
  TextField,
  CardActions,
  ReferenceField,
  NumberField,
  useMutation,
  useRefresh,
  useNotify,
  useUnselectAll,
  SelectField,
} from "react-admin";
import Button from "@material-ui/core/Button";
import AssetClassTaskFilter from "../AssetClassTask/AssetClassTaskFilter";
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

const SelectButton = ({ selectedIds, setShowPanel, data }) => {
  const refresh = useRefresh();
  const notify = useNotify();
  const unselectAll = useUnselectAll();
  const classes = useStyles();
  const [mutate, { loading }] = useMutation();

  //const [create, { loading }] = useCreate(
  //   'posts',
  //  selectedIds,
  // { views: 0 },
  //{
  const onSuccess = () => {
    refresh(`PMWorks/WorkOrder/${data.WorkOrderID}/show/PMWorks/WOTask`);
    notify("فعالیت‌ها اضافه شدند");
    setShowPanel((showPanel) => !showPanel);
  };

  const toggleDrawer = () => {
    {
      selectedIds.map((selectedId) =>
        mutate({
          type: "create",
          resource: "PMWorks/WOTask",
          payload: {
            data: {
              WOAssetSubdivisionID: data,
              TaskID: selectedId,
              WOTaskSituationOfDo: "ND",
            },
          },
        })
      );
    }
    onSuccess();
  };

  return (
    <Button className={classes.fir} onClick={toggleDrawer} color="secondary">
      انتخاب
    </Button>
  );
};

const NoneActions = (props) => <CardActions />;

const freq = [
  { _id: "H", full_name: "ساعتی" },
  { _id: "D", full_name: "روزانه" },
  { _id: "W", full_name: "هفتگی" },
  { _id: "M", full_name: "ماهانه" },
  { _id: "Y", full_name: "سالانه" },
];

const fun = [
  { _id: "O", full_name: "اپراتور" },
  { _id: "T", full_name: "تکنسین" },
];

const TaskList = ({ selectedIds, data, setShowPanel, ...props }) => {
  const classes = useStyles();
  return (
    <List
      perPage={10}
      basePath="PMWorks/WRTask"
      filter={{ WOAssetSubdivisionID: data }}
      filters={<AssetClassTaskFilter />}
      bulkActionButtons={false}
      {...props}
      actions={<NoneActions />}
      title="خانواده تجهیز "
      className={classes.page}
    >
      <Datagrid>
        <TextField label="کد فعالیت" textAlgin="right" source="TaskCode" />
        <TextField label="عنوان فعالیت" textAlgin="right" source="TaskName" />
        <SelectField
          label="تناوب"
          textAlgin="right"
          source="FrequencyName"
          choices={freq}
          optionText="full_name"
          optionValue="_id"
        />
        <NumberField
          label="مقدار تناوب"
          textAlgin="right"
          source="FrequencyAmount"
        />
        <NumberField
          label="مدت زمان انجام(دقیقه)"
          textAlgin="right"
          source="DurationOfDo"
        />
        <SelectField
          label="مسئول"
          textAlgin="right"
          source="Functor"
          choices={fun}
          optionText="full_name"
          optionValue="_id"
        />
        <ReferenceField
          label="تخصص"
          textAlgin="right"
          source="JobCategoryID"
          reference="PMWorks/JobCategory"
        >
          <TextField source="JobCategoryName" />
        </ReferenceField>
        <ReferenceField
          label="خانواده تجهیز"
          textAlgin="right"
          source="AssetClassID"
          reference="PMWorks/AssetClass"
        >
          <TextField source="AssetClassName" />
        </ReferenceField>
        <Fragment>
          <SelectButton setShowPanel={setShowPanel} {...props} />
        </Fragment>
      </Datagrid>
    </List>
  );
};

export default TaskList;
