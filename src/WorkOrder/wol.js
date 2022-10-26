import React, { Fragment } from "react";
import {
  Datagrid,
  List,
  ShowButton,
  ReferenceField,
  TextField,
  TopToolbar,
  ExportButton,
  Button,
  downloadCSV,
  SelectField,
} from "react-admin";
import {
  makeStyles,
  useMediaQuery,
  Divider,
  Tabs,
  Tab,
} from "@material-ui/core";
import WorkOrderFilter from "./WorkOrderFilter";
import jsonExport from "jsonexport/dist";
import JalaaliDateField from "../Components/JalaaliDateField";
import { ImportButton } from "react-admin-import-csv";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
import jMoment from "moment-jalaali";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
const importOptions = {
  parseConfig: {
    encoding: "ISO-8859-1",
  },
};

const exporter = (records, fetchRelatedRecords) => {
  // will call dataProvider.getMany('posts', { ids: records.map(record => record.post_id) }), ignoring duplicate and empty post_id
  fetchRelatedRecords(
    records,
    "WorkRequestID__AssetSubdivisionID",
    "PMWorks/AssetSubdivision"
  ).then((AssetSubdivision) => {
    const data1s = records.map((record) => ({
      ...record,
      AssetCode: record.WorkRequestID__AssetSubdivisionID
        ? AssetSubdivision[record.WorkRequestID__AssetSubdivisionID].AssetCode
        : null,
      AssetName: record.WorkRequestID__AssetSubdivisionID
        ? AssetSubdivision[record.WorkRequestID__AssetSubdivisionID].AssetName
        : null,
      AssetClassCodeChain: record.WorkRequestID__AssetSubdivisionID
        ? AssetSubdivision[record.WorkRequestID__AssetSubdivisionID]
            .AssetClassCodeChain
        : null,
      AssetClassNameChain: record.WorkRequestID__AssetSubdivisionID
        ? AssetSubdivision[record.WorkRequestID__AssetSubdivisionID]
            .AssetClassNameChain
        : null,
      fakelocation: record.WorkRequestID__AssetSubdivisionID
        ? AssetSubdivision[record.WorkRequestID__AssetSubdivisionID]
            .fakelocation
        : null,
    }));
    fetchRelatedRecords(data1s, "fakelocation", "PMWorks/Location").then(
      (Location) => {
        const data2s = data1s.map((data1) => ({
          ...data1,
          LocationCode: data1.fakelocation
            ? Location[data1.fakelocation].LocationCode
            : "",
          LocationName: data1.fakelocation
            ? Location[data1.fakelocation].LocationName
            : "",
        }));
        fetchRelatedRecords(
          data2s,
          "WorkRequestID__FailureModeID",
          "PMWorks/FailureMode"
        ).then((FailureMode) => {
          const data3s = data2s.map((data2) => ({
            ...data2,
            FailureModeCode: data2.WorkRequestID__FailureModeID
              ? FailureMode[data2.WorkRequestID__FailureModeID].FailureModeCode
              : "",
            FailureModeName: data2.WorkRequestID__FailureModeID
              ? FailureMode[data2.WorkRequestID__FailureModeID].FailureModeName
              : "",
          }));
          fetchRelatedRecords(
            data3s,
            "WorkRequestID",
            "PMWorks/WorkRequest"
          ).then((WorkRequest) => {
            const data4s = data3s.map((data3) => ({
              ...data3,
              WRDate: data3.WorkRequestID
                ? WorkRequest[data3.WorkRequestID].WRDate
                : "",
            }));
            fetchRelatedRecords(
              data4s,
              "DepartmentID",
              "PMWorks/Department"
            ).then((Department) => {
              const data5s = data4s.map((data4) => ({
                ...data4,
                DepartmentCode: data4.DepartmentID
                  ? Department[data4.DepartmentID].DepartmentCode
                  : "",
                DepartmentName: data4.DepartmentID
                  ? Department[data4.DepartmentID].DepartmentName
                  : "",
              }));
              fetchRelatedRecords(data5s, "StatusID", "PMWorks/Status").then(
                (Status) => {
                  const data6s = data5s.map((data5) => ({
                    ...data5,
                    StatusCode: data5.StatusID
                      ? Status[data5.StatusID].StatusCode
                      : "",
                    StatusName: data5.StatusID
                      ? Status[data5.StatusID].StatusName
                      : "",
                  }));
                  var r = 1;
                  const BOM = "\uFEFF";
                  const postsForExport = data6s.map((data6) => {
                    const {
                      backlinks,
                      id,
                      StatusCode,
                      StatusName,
                      WODateOfRegistration,
                      DateOfPlanStart,
                      DateOfPlanFinish,
                      WODescription,
                      WorkRequestID,
                      StatusID,
                      DepartmentID,
                      DateOfStart,
                      DateOfFinish,
                      WorkRequestID__AssetSubdivisionID,
                      WorkRequestID__FailureModeID,
                      WorkOrderType,
                      WOTemplateCode,
                      FailureModeCode,
                      FailureModeName,
                      WRDate,
                      DepartmentCode,
                      DepartmentName,
                      AssetCode,
                      AssetName,
                      AssetClassCodeChain,
                      AssetClassNameChain,
                      LocationCode,
                      LocationName,
                      fakelocation,
                      ...postForExport
                    } = data6; // omit backlinks and author
                    let str = data6.WorkRequestID
                      ? `${data6.WorkRequestID}`
                      : `${data6.WOTemplateCode}`;
                    str = data6.WorkRequestID ? str.padStart(4, 0) : str;
                    let text = data6.WorkRequestID
                      ? "WR0".concat(str)
                      : "PM".concat(str);
                    let stro = data6 ? `${data6.id}` : "";
                    stro = stro.padStart(4, 0);
                    let texto = "_WO0".concat(stro);
                    postForExport.ردیف = r;
                    postForExport.کد_دستورکار = `${text} ${texto}`;
                    postForExport.نوع_دستورکار =
                      data6.WorkOrderType == 0 ? "WR" : "PM";
                    postForExport.تاریخ = jMoment(data6.WODateOfRegistration)
                      .locale("fa")
                      .format("jYYYY/jM/jD");
                    postForExport.کد_تجهیز = data6.AssetCode;
                    postForExport.نام_تجهیز = data6.AssetName;
                    postForExport.کد_خانواده_تجهیز = data6.AssetClassCodeChain;
                    postForExport.نام_خانواده_تجهیز = data6.AssetClassNameChain;
                    postForExport.کد_مکان = data6.LocationCode;
                    postForExport.نام_مکان = data6.LocationName;
                    postForExport.کد_خرابی = data6.FailureModeCode;
                    postForExport.نام_خرابی = data6.FailureModeName;
                    postForExport.زمان_خرابی = data6.WRDate
                      ? jMoment(data6.WRDate).locale("fa").format("jYYYY/jM/jD")
                      : "";
                    postForExport.کد_دپارتمان = data6.DepartmentCode;
                    postForExport.نام_دپارتمان = data6.DepartmentName;
                    postForExport.کد_وضعیت = data6.StatusCode;
                    postForExport.نام_وضعیت = data6.StatusName;
                    postForExport.توضیحات = data6.WODescription;
                    postForExport.تاریخ_شروع = jMoment(data6.DateOfPlanStart)
                      .locale("fa")
                      .format("jYYYY/jM/jD");
                    postForExport.تاریخ_پایان = jMoment(data6.DateOfPlanFinish)
                      .locale("fa")
                      .format("jYYYY/jM/jD");

                    r = r + 1;
                    return postForExport;
                  });
                  jsonExport(postsForExport, (err, csv) => {
                    downloadCSV(`${BOM} ${csv}`, "WorkOrderList");
                  });
                }
              );
            });
          });
        });
      }
    );
  });
};

const useStyles = makeStyles({
  indicator: {
    backgroundColor: "#0863cc",
  },
  root: {
    color: "#0863cc",
  },
  head: {
    backgroundColor: "theme.palette.common.black",
    //color: "theme.palette.common.white",
  },

  table: {
    //backgroundColor: "Lavender",
  },
  headerCell: {
    backgroundColor: "#DCDCDC",
    //backgroundColor: '#ccc',
    fontWeight: "bold",
    color: "#0863cc",
  },
  ex: {
    fontFamily: "inherit",
    color: "#0863cc",
  },
  dis: {
    display: "none",
    color: "#0863cc",
  },
});

const WOStatusButton = ({ record }) => {
  return (
    <Button
      component={Link}
      to={`/PMWorks/WOStatus/create?WorkOrderID=${record.id}`}
      //label="تغییر وضعیت"
      title="تغییر وضعیت"
      color="secondary"
    >
      <RepeatOutlinedIcon />
    </Button>
  );
};

const ListActions = (props) => {
  const classes = useStyles();

  return (
    <TopToolbar>
      <ExportButton className={classes.ex} label="خروجی" />
    </TopToolbar>
  );
};

const WorkOrderField = ({ record = {} }) => {
  let str = record.WorkRequestID
    ? `${record.WorkRequestID}`
    : `${record.WOTemplateCode}`;
  str = record.WorkRequestID ? str.padStart(4, 0) : str;
  let text = record.WorkRequestID ? "WR0".concat(str) : "PM".concat(str);
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

WorkOrderField.defaultProps = { label: "کد" };

const useDatagridStyles = makeStyles({
  total: { fontWeight: "bold" },
});

const freq = [
  { _id: "0", full_name: "WR" },
  { _id: "1", full_name: "PM" },
];

class TabbedDatagrid extends React.Component {
  tabs = [
    { id: "1", name: "باز" },
    { id: "2", name: "بایگانی" },
  ];

  state = { op: [], cl: [] };

  static getDerivedStateFromProps(props, state) {
    if (props.ids !== state[props.filterValues.StatusID__OpCl]) {
      return { ...state, [props.filterValues.StatusID__OpCl]: props.ids };
    }
    return null;
  }

  handleChange = (event, value) => {
    const { filterValues, setFilters } = this.props;
    setFilters({ ...filterValues, StatusID__OpCl: value });
  };

  render() {
    const { isXSmall, classes, filterValues, ...props } = this.props;

    return (
      <Fragment>
        <Tabs
          classes={classes}
          variant="fullWidth"
          centered
          value={filterValues.StatusID__OpCl}
          indicatorColor="primary"
          onChange={this.handleChange}
        >
          {this.tabs.map((choice) => (
            <Tab key={choice.id} label={choice.name} value={choice.id} />
          ))}
        </Tabs>
        <Divider />
        <div>
          {filterValues.StatusID__OpCl === "1" && (
            <Datagrid classes={classes} {...props} ids={this.state.op}>
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
                label="کد تجهیز"
                textAlgin="right"
                source="WorkRequestID__AssetSubdivisionID"
                reference="PMWorks/AssetSubdivision"
                sortBy="WorkRequestID__AssetSubdivisionID__AssetCode"
              >
                <TextField source="AssetCode" />
              </ReferenceField>
              <ReferenceField
                label="نام تجهیز"
                textAlgin="right"
                source="WorkRequestID__AssetSubdivisionID"
                reference="PMWorks/AssetSubdivision"
                sortBy="WorkRequestID__AssetSubdivisionID__AssetName"
              >
                <TextField source="AssetName" />
              </ReferenceField>
              <ReferenceField
                label="خرابی"
                textAlgin="right"
                source="WorkRequestID__FailureModeID"
                reference="PMWorks/FailureMode"
                sortBy="WorkRequestID__FailureModeID__FailureModeName"
              >
                <TextField source="FailureModeName" />
              </ReferenceField>
              <ReferenceField
                label="دپارتمان"
                textAlgin="right"
                source="DepartmentID"
                reference="PMWorks/Department"
                sortBy="DepartmentID__DepartmentName"
              >
                <TextField source="DepartmentName" />
              </ReferenceField>
              <TextField
                label="توضیحات"
                textAlgin="right"
                source="WODescription"
              />
              <SelectField
                label="نوع"
                textAlgin="right"
                source="WorkOrderType"
                choices={freq}
                optionText="full_name"
                optionValue="_id"
              />
              <ReferenceField
                label="وضعیت"
                textAlgin="right"
                source="StatusID"
                reference="PMWorks/Status"
                sortBy="StatusID__StatusName"
              >
                <TextField source="StatusName" />
              </ReferenceField>
              <WOStatusButton />
              <ShowButton label={null} title="مشاهده " />
            </Datagrid>
          )}
          {filterValues.StatusID__OpCl === "2" && (
            <Datagrid classes={classes} {...props} ids={this.state.cl}>
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
                label="کد تجهیز"
                textAlgin="right"
                source="WorkRequestID__AssetSubdivisionID"
                reference="PMWorks/AssetSubdivision"
                sortBy="WorkRequestID__AssetSubdivisionID__AssetCode"
              >
                <TextField source="AssetCode" />
              </ReferenceField>
              <ReferenceField
                label="نام تجهیز"
                textAlgin="right"
                source="WorkRequestID__AssetSubdivisionID"
                reference="PMWorks/AssetSubdivision"
                sortBy="WorkRequestID__AssetSubdivisionID__AssetName"
              >
                <TextField source="AssetName" />
              </ReferenceField>
              <ReferenceField
                label="خرابی"
                textAlgin="right"
                source="WorkRequestID__FailureModeID"
                reference="PMWorks/FailureMode"
                sortBy="WorkRequestID__FailureModeID__FailureModeName"
              >
                <TextField source="FailureModeName" />
              </ReferenceField>
              <ReferenceField
                label="دپارتمان"
                textAlgin="right"
                source="DepartmentID"
                reference="PMWorks/Department"
                sortBy="DepartmentID__DepartmentName"
              >
                <TextField source="DepartmentName" />
              </ReferenceField>
              <TextField
                label="توضیحات"
                textAlgin="right"
                source="WODescription"
              />
              <SelectField
                label="نوع"
                textAlgin="right"
                source="WorkOrderType"
                choices={freq}
                optionText="full_name"
                optionValue="_id"
              />
              <ReferenceField
                label="وضعیت"
                textAlgin="right"
                source="StatusID"
                reference="PMWorks/Status"
                sortBy="StatusID__StatusName"
              >
                <TextField source="StatusName" />
              </ReferenceField>
              <ShowButton label={null} title="مشاهده " />
            </Datagrid>
          )}
        </div>
      </Fragment>
    );
  }
}

const StyledTabbedDatagrid = (props) => {
  const classes = useStyles();
  const isXSmall = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  return <TabbedDatagrid classes={classes} isXSmall={isXSmall} {...props} />;
};

const WorkOrderList = ({ classes, ...props }) => (
  <List
    {...props}
    actions={<ListActions />}
    exporter={exporter}
    filterDefaultValues={{ StatusID__OpCl: "1" }}
    sort={{ field: "WODateOfRegistration", order: "DESC" }}
    {...props}
    title="دستور کار"
    filters={<WorkOrderFilter />}
    bulkActionButtons={false}
  >
    <StyledTabbedDatagrid />
  </List>
);

export default WorkOrderList;
