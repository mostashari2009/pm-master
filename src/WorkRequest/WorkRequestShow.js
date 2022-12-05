import * as React from "react";
import {
  TextField,
  Tab,
  Show,
  ShowButton,
  ReferenceField,
  ReferenceManyField,
  TabbedShowLayout,
  Datagrid,
  TopToolbar,
  ListButton,
  EditButton,
  useShowController,
  useRecordContext,
  ExportButton,
  List,
  downloadCSV,
  SimpleShowLayout,
  Labeled,
  Button,
  Link,
} from "react-admin";
import WorkRequestTitle from "./WorkRequestTitle";
import JalaaliDateField from "../Components/JalaaliDateField";
import JalaaliTimeField from "../Components/JalaaliTimeField";
import AddFailureCauseButton from "./AddFailureCauseButton";
import AddWorkOrderButton from "./AddWorkOrderButton";
import { Divider, makeStyles } from "@material-ui/core";
import FailureCauseFilter from "../FailureCause/FailureCauseFilter";
import WorkOrderFilter2 from "../WorkOrder/WorkOrderFilter2";
import jsonExport from "jsonexport/dist";
import AddWRStatusButton from "./AddWRStatusButton";
import WRStatusFilter from "../WRStatus/WRStatusFilter";
import { ImportButton } from "react-admin-import-csv";
import Grid from "@material-ui/core/Grid";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
const importOptions = {
  parseConfig: {
    encoding: "ISO-8859-1",
  },
};

const exporterFailureCause = (data) => {
  const BOM = "\uFEFF";

  jsonExport(data, (err, csv) => {
    downloadCSV(`${BOM} ${csv}`, "FailureCauseList");
  });
};

const exporterWorkOrder = (data) => {
  const BOM = "\uFEFF";

  jsonExport(data, (err, csv) => {
    downloadCSV(`${BOM} ${csv}`, "WorkOrderList");
  });
};

const exporterWRStatus = (data) => {
  const BOM = "\uFEFF";

  jsonExport(data, (err, csv) => {
    downloadCSV(`${BOM} ${csv}`, "WRStatusList");
  });
};

const ShowActions = ({ basePath, data }) => (
  <TopToolbar>
    <ListButton basePath={basePath} />
    <EditButton basePath={basePath} record={data} />
  </TopToolbar>
);

const FailureCauseActions = ({ basePath, data }, props) => {
  const classes = useStyles();

  return (
    <TopToolbar>
      <AddFailureCauseButton record={data} />
      <ExportButton className={classes.ex} label="خروجی" basePath={basePath} />
      <ImportButton
        label="ورودی"
        resource="PMWorks/WOSupplier"
        {...props}
        {...importOptions}
      />
    </TopToolbar>
  );
};

const WorkOrderActions = ({ basePath, data }, props) => {
  const classes = useStyles();

  return (
    <TopToolbar>
      <AddWorkOrderButton record={data} />
      <ExportButton className={classes.ex} label="خروجی" basePath={basePath} />
    </TopToolbar>
  );
};

const WRStatusActions = ({ basePath, data }, props) => {
  const classes = useStyles();

  return (
    <TopToolbar>
      <AddWRStatusButton record={data} />
      <ExportButton className={classes.ex} label="خروجی" basePath={basePath} />
      <ImportButton
        label="ورودی"
        resource="PMWorks/WRStatus"
        {...props}
        {...importOptions}
      />
    </TopToolbar>
  );
};

const useStyles = makeStyles({
  tab: {
    color: "#243261",
    //backgroundColor: "#92a8d1",
    fontSize: "1rem",
    fontWeight: "bold",
    minWidth: "34%",
  },

  sho: {
    display: "inline-block",
    "& .MuiFormControl-marginDense": {
      border: "2px solid #A9A9A9",
      background: "#fff",
      fontWeight: "300",
      fontSize: "./1rem",
      color: "rgb(69, 90, 100)",
      borderStartStartRadius: "15px",
      borderStartEndRadius: "15px",
      borderBottomLeftRadius: "15px",
      borderBottomRightRadius: "15px",
      right: "5px",
      height: "60px",
      width: "285px",
      paddingRight: "10px",
    },
    "& .MuiInputLabel-shrink ": {
      transform: "translate(30%, -8px ) scale(0.75) !important;",
      background: "#fff",
      color: "#0863cc",
      paddingRight: "3px",
    },
    "& .MuiInputLabel-formControl": {
      left: "auto",
      color: "#0863cc",
      margin: "0",
      padding: "0px 5px",
    },
    "& .MuiFormLabel-root": {
      position: "absolute",
    },
  },
  text: {
    display: "inline",
    "& .MuiFormControl-root": {
      border: "2px solid #A9A9A9",
      background: "#fff",
      fontWeight: "300",
      fontSize: "./1rem",
      color: "rgb(69, 90, 100)",
      borderStartStartRadius: "15px",
      borderStartEndRadius: "15px",
      borderBottomLeftRadius: "15px",
      borderBottomRightRadius: "15px",
      right: "5px",
      height: "100px",
      width: "1250px",
      paddingRight: "5px",
      marginBottom: "25px",
    },
    "& .MuiInputLabel-shrink ": {
      transform: "translate(30%, -8px ) scale(0.75) !important;",
      background: "#fff",
      color: "#0863cc",
      paddingRight: "3px",
    },
    "& .MuiInputLabel-formControl": {
      left: "auto",
      color: "#0863cc",
      margin: "0",
      padding: "0px 5px",
    },
    "& .MuiFormLabel-root": {
      position: "absolute",
    },
  },
  width: {
    display: "inline",
    "& .MuiFormControl-root": {
      border: "2px solid #A9A9A9",
      background: "#fff",
      fontWeight: "400",
      fontSize: "./1rem",
      color: "rgb(69, 90, 100)",
      borderStartStartRadius: "15px",
      borderStartEndRadius: "15px",
      borderBottomLeftRadius: "15px",
      borderBottomRightRadius: "15px",
      right: "5px",
      height: "60px",
      width: "605px",
      paddingRight: "5px",
      marginTop: "25px",
    },
    "& .MuiInputLabel-shrink ": {
      transform: "translate(30%, -8px ) scale(0.75) !important;",
      background: "#fff",
      color: "#0863cc",
      paddingRight: "3px",
    },
    "& .MuiInputLabel-formControl": {
      left: "auto",
      color: "#0863cc",
      margin: "0",
      padding: "0px 5px",
    },
    "& .MuiFormLabel-root": {
      position: "absolute",
    },
  },
  ex: {
    fontFamily: "inherit",
    border: "1px solid #DCDCDC",
  },
  headerCell: {
    backgroundColor: "#DCDCDC",
  },
});

const WorkRequestField = (props) => {
  const record = useRecordContext(props);
  let str = record ? `${record.id}` : "";
  str = str.padStart(4, 0);
  let text = "WR0".concat(str);
  return <span> {text} </span>;
};
WorkRequestField.defaultProps = { label: "کد درخواست", addLabel: true };
JalaaliDateField.defaultProps = { addLabel: true };

const WorkOrderField = ({ record = {} }) => {
  let str = record ? `${record.WorkRequestID}` : "";
  str = str.padStart(4, 0);
  let text = "WR0".concat(str);
  let stro = record ? `${record.id}` : "";
  stro = stro.padStart(4, 0);
  let texto = "_WO0".concat(stro);
  return (
    <span>
      {" "}
      {text} {texto}{" "}
    </span>
  );
};
const WOStatusButton = ({ record }) => {
  return (
    <Button
      component={Link}
      to={`/PMWorks/WOStatus/create?WorkOrderID=${record.id}`}
      label={null}
      title="تغییر وضعیت"
      color="secondary"
    >
      <RepeatOutlinedIcon />
    </Button>
  );
};

WorkOrderField.defaultProps = { label: "کد دستور کار" };

const WorkRequestShow = (props) => {
  const { record } = useShowController(props);

  const classes = useStyles();

  return (
    <Show actions={<ShowActions />} title={<WorkRequestTitle />} {...props}>
      <TabbedShowLayout>
        <Tab label="درخواست" className={classes.tab}>
          <SimpleShowLayout>
            <WorkRequestField className={classes.width} source="id" />
          </SimpleShowLayout>
          <SimpleShowLayout>
            <JalaaliDateField
              className={classes.sho}
              textAlgin="right"
              source="WRDate"
              label="تاریخ خرابی"
            />
            <Labeled
              className={classes.sho}
              label="زمان خرابی"
              textAlgin="right"
            >
              <JalaaliTimeField source="WRTime" />
            </Labeled>
            <JalaaliDateField
              className={classes.sho}
              textAlgin="right"
              source="WRDateOfRegistration"
              label="تاریخ ثبت"
            />
            <Labeled className={classes.sho} label="زمان ثبت" textAlgin="right">
              <JalaaliTimeField source="WRTimeOfRegistration" />
            </Labeled>
          </SimpleShowLayout>

          <SimpleShowLayout>
            <ReferenceField
              className={classes.sho}
              label="کد تجهیز"
              textAlgin="right"
              source="AssetSubdivisionID"
              reference="PMWorks/AssetSubdivision"
            >
              <TextField source="AssetID__AssetCode" />
            </ReferenceField>

            <ReferenceField
              className={classes.sho}
              label="عنوان تجهیز"
              textAlgin="right"
              source="AssetSubdivisionID"
              reference="PMWorks/AssetSubdivision"
            >
              <TextField source="AssetID__AssetName" />
            </ReferenceField>
            <ReferenceField
              className={classes.sho}
              label="خانواده تجهیز"
              textAlgin="right"
              source="AssetSubdivisionID"
              reference="PMWorks/AssetSubdivision"
            >
              <TextField source="AssetClassNameChain" />
            </ReferenceField>
            <ReferenceField
              className={classes.sho}
              label="مکان تجهیز"
              textAlgin="right"
              source="AssetSubdivisionID"
              reference="PMWorks/AssetSubdivision"
            >
              <TextField source="AssetID__LocationID__LocationName" />
            </ReferenceField>
          </SimpleShowLayout>

          <SimpleShowLayout>
            <ReferenceField
              className={classes.sho}
              label="کد خرابی"
              textAlgin="right"
              source="FailureModeID"
              reference="PMWorks/FailureMode"
            >
              <TextField source="FailureModeCode" />
            </ReferenceField>
            <ReferenceField
              className={classes.sho}
              label="عنوان خرابی"
              textAlgin="right"
              source="FailureModeID"
              reference="PMWorks/FailureMode"
            >
              <TextField source="FailureModeName" />
            </ReferenceField>
            <ReferenceField
              className={classes.sho}
              label="اولیت درخواست"
              textAlgin="right"
              source="WorkPriorityID"
              reference="PMWorks/WorkPriority"
            >
              <TextField source="WorkPriorityCode" />
            </ReferenceField>

            <ReferenceField
              className={classes.sho}
              label="نوع درخواست"
              textAlgin="right"
              source="TypeWrID"
              reference="PMWorks/TypeWr"
            >
              <TextField source="TypeWrName" />
            </ReferenceField>
          </SimpleShowLayout>
          <SimpleShowLayout>
            <TextField
              width="450px"
              className={classes.text}
              label="توضیحات"
              textAlgin="right"
              source="WRDescription"
            />
          </SimpleShowLayout>
        </Tab>
        <Tab label="وضعیت" path="PMWorks/WRStatus" className={classes.tab}>
          <Grid item xs={12}>
            <ReferenceManyField
              addLabel={false}
              reference="PMWorks/WRStatus"
              target="WorkRequestID"
              filter={{ WorkRequestID: record.id }}
            >
              <List
                exporter={exporterWRStatus}
                empty={false}
                filters={<WRStatusFilter />}
                actions={<WRStatusActions data={record} />}
                bulkActionButtons={false}
              >
                <Datagrid classes={classes}>
                  <ReferenceField
                    label="کد وضعیت"
                    textAlgin="right"
                    source="StatusID"
                    reference="PMWorks/Status"
                  >
                    <TextField source="StatusCode" />
                  </ReferenceField>
                  <ReferenceField
                    label="نام وضعیت"
                    textAlgin="right"
                    source="StatusID"
                    reference="PMWorks/Status"
                  >
                    <TextField source="StatusName" />
                  </ReferenceField>
                  <JalaaliDateField
                    label="تاریخ ثبت"
                    textAlgin="right"
                    source="StatusDate"
                  />
                  <JalaaliTimeField
                    label="زمان ثبت"
                    textAlgin="right"
                    source="StatusTime"
                  />
                </Datagrid>
              </List>
            </ReferenceManyField>
          </Grid>
        </Tab>
        <Tab
          label="دستور کارها"
          path="PMWorks/WorkOrder"
          className={classes.tab}
        >
          <ReferenceManyField
            addLabel={false}
            reference="PMWorks/WorkOrder"
            target="WorkRequestID"
            filter={{ WorkRequestID: record.id }}
          >
            <List
              exporter={exporterWorkOrder}
              empty={false}
              filters={<WorkOrderFilter2 />}
              actions={<WorkOrderActions data={record} />}
              bulkActionButtons={false}
            >
              <Datagrid classes={classes}>
                <WorkOrderField textAlgin="right" source="id" />
                <JalaaliDateField
                  label="تاریخ شروع"
                  textAlgin="right"
                  source="DateOfPlanStart"
                />
                <JalaaliDateField
                  label="تاریخ پایان"
                  textAlgin="right"
                  source="DateOfPlanFinish"
                />
                <ReferenceField
                  label="دپارتمان"
                  textAlgin="right"
                  source="DepartmentID"
                  reference="PMWorks/Department"
                >
                  <TextField source="DepartmentName" />
                </ReferenceField>
                <ReferenceField
                  label="وضعیت"
                  textAlgin="right"
                  source="StatusID"
                  reference="PMWorks/Status"
                >
                  <TextField source="StatusName" />
                </ReferenceField>
                <WOStatusButton />
                <ShowButton label={null} title="مشاهده " />
              </Datagrid>
            </List>
          </ReferenceManyField>
        </Tab>
      </TabbedShowLayout>
    </Show>
  );
};

export default WorkRequestShow;
