import React, { Fragment } from "react";
import {
  Datagrid,
  List,
  ShowButton,
  ReferenceField,
  TextField,
  TopToolbar,
  CreateButton,
  ExportButton,
  ReferenceManyField,
  Button,
  downloadCSV,
} from "react-admin";
import { makeStyles, useMediaQuery, Divider } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import WorkRequestFilter from "./WorkRequestFilter";
import AddIcon from "@material-ui/icons/Add";
import jsonExport from "jsonexport/dist";
import JalaaliDateField from "../Components/JalaaliDateField";
import { ImportButton } from "react-admin-import-csv";
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
    "AssetSubdivisionID",
    "PMWorks/AssetSubdivision"
  ).then((AssetSubdivision) => {
    const data1s = records.map((record) => ({
      ...record,
      AssetCode: record.AssetSubdivisionID
        ? AssetSubdivision[record.AssetSubdivisionID].AssetCode
        : null,
      AssetName: record.AssetSubdivisionID
        ? AssetSubdivision[record.AssetSubdivisionID].AssetName
        : null,
      AssetClassCodeChain: record.AssetSubdivisionID
        ? AssetSubdivision[record.AssetSubdivisionID].AssetClassCodeChain
        : null,
      AssetClassNameChain: record.AssetSubdivisionID
        ? AssetSubdivision[record.AssetSubdivisionID].AssetClassNameChain
        : null,
      fakelocation: record.AssetSubdivisionID
        ? AssetSubdivision[record.AssetSubdivisionID].fakelocation
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
          "FailureModeID",
          "PMWorks/FailureMode"
        ).then((FailureMode) => {
          const data3s = data2s.map((data2) => ({
            ...data2,
            FailureModeCode: data2.FailureModeID
              ? FailureMode[data2.FailureModeID].FailureModeCode
              : "",
            FailureModeName: data2.FailureModeID
              ? FailureMode[data2.FailureModeID].FailureModeName
              : "",
          }));
          fetchRelatedRecords(
            data3s,
            "WorkPriorityID",
            "PMWorks/WorkPriority"
          ).then((WorkPriority) => {
            const data4s = data3s.map((data3) => ({
              ...data3,
              WorkPriorityCode: data3.WorkPriorityID
                ? WorkPriority[data3.WorkPriorityID].WorkPriorityCode
                : "",
              WorkPriorityName: data3.WorkPriorityID
                ? WorkPriority[data3.WorkPriorityID].WorkPriorityName
                : "",
            }));
            fetchRelatedRecords(data4s, "TypeWrID", "PMWorks/TypeWr").then(
              (TypeWr) => {
                const data5s = data4s.map((data4) => ({
                  ...data4,
                  TypeWrCode: data4.TypeWrID
                    ? TypeWr[data4.TypeWrID].TypeWrCode
                    : "",
                  TypeWrName: data4.TypeWrID
                    ? TypeWr[data4.TypeWrID].TypeWrName
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
                        WRTime,
                        WRDateOfRegistration,
                        WRDescription,
                        WRTimeOfRegistration,
                        TypeWrID,
                        WorkPriorityID,
                        StatusCode,
                        StatusName,
                        TypeWrCode,
                        TypeWrName,
                        WorkPriorityCode,
                        WorkPriorityName,
                        WorkRequestID,
                        StatusID,
                        AssetSubdivisionID,
                        FailureModeID,
                        WOTemplateCode,
                        FailureModeCode,
                        FailureModeName,
                        WRDate,
                        AssetCode,
                        AssetName,
                        AssetClassCodeChain,
                        AssetClassNameChain,
                        LocationCode,
                        LocationName,
                        fakelocation,
                        ...postForExport
                      } = data6; // omit backlinks and author
                      let str = data6 ? `${data6.id}` : "";
                      str = str.padStart(4, 0);
                      let text = "WR0".concat(str);
                      postForExport.ردیف = r;
                      postForExport.کد_درخواست_کار = `${text}`;
                      postForExport.تاریخ_خرابی = jMoment(data6.WRDate)
                        .locale("fa")
                        .format("jYYYY/jM/jD");
                      postForExport.زمان_خرابی = jMoment(
                        data6.WRTime,
                        "HH:mm:ss"
                      )
                        .locale("fa")
                        .format("HH:mm");
                      postForExport.تاریخ_ثبت = jMoment(
                        data6.WRDateOfRegistration
                      )
                        .locale("fa")
                        .format("jYYYY/jM/jD");
                      postForExport.زمان_ثبت = jMoment(
                        data6.WRTimeOfRegistration,
                        "HH:mm:ss"
                      )
                        .locale("fa")
                        .format("HH:mm");
                      postForExport.کد_تجهیز = data6.AssetCode;
                      postForExport.نام_تجهیز = data6.AssetName;
                      postForExport.کد_خانواده_تجهیز =
                        data6.AssetClassCodeChain;
                      postForExport.نام_خانواده_تجهیز =
                        data6.AssetClassNameChain;
                      postForExport.کد_مکان = data6.LocationCode;
                      postForExport.نام_مکان = data6.LocationName;
                      postForExport.کد_خرابی = data6.FailureModeCode;
                      postForExport.نام_خرابی = data6.FailureModeName;
                      postForExport.کد_اولویت = data6.WorkPriorityCode;
                      postForExport.نام_اولویت = data6.WorkPriorityName;
                      postForExport.کد_نوع = data6.TypeWrCode;
                      postForExport.نام_نوع = data6.TypeWrName;
                      postForExport.توضیحات = data6.WRDescription;
                      postForExport.کد_وضعیت = data6.StatusCode;
                      postForExport.نام_وضعیت = data6.StatusName;

                      r = r + 1;
                      return postForExport;
                    });
                    jsonExport(postsForExport, (err, csv) => {
                      downloadCSV(`${BOM} ${csv}`, "WorkRequestList");
                    });
                  }
                );
              }
            );
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

const ListActions = (props) => {
  const classes = useStyles();

  return (
    <TopToolbar>
      <CreateButton className={classes.ex} />
      <ExportButton className={classes.ex} label="خروجی" />
    </TopToolbar>
  );
};

const WorkRequestField = ({ record = {} }) => {
  let str = record ? `${record.id}` : "";
  str = str.padStart(4, 0);
  let text = "WR0".concat(str);
  return <span> {text} </span>;
};

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

WorkRequestField.defaultProps = { label: "کد" };
WorkOrderField.defaultProps = { label: "کد" };

const WOActions = (props) => {
  const classes = useStyles();
  return (
    <TopToolbar>
      <WOButton className={classes.ex} {...props} />
      <ExportButton className={classes.ex} label="خروجی" />
    </TopToolbar>
  );
};

const WorkOrderList = (props) => {
  const classes = useStyles();
  return (
    <ReferenceManyField
      addLabel={false}
      reference="PMWorks/WorkOrder"
      target="WorkRequestID"
      filter={{ WorkRequestID: props.record.id }}
      sort={{ field: "WODateOfRegistration", order: "ASC" }}
    >
      <List
        {...props}
        actions={<WOActions {...props} />}
        empty={false}
        title=" "
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
  );
};

const WOButton = (props) => {
  const classes = useStyles();

  return (
    <Button
      className={{
        [classes.dis]:
          props.record.StatusID == 11 ||
          props.record.StatusID == 12 ||
          props.record.StatusID == 14,
      }}
      component={Link}
      to={`/PMWorks/WorkOrderNew/create?WorkRequestID=${props.record.id}`}
      label="ایجاد دستورکار"
      title="ایجاد دستورکار"
      className={classes.ex}
    >
      <AddIcon />
    </Button>
  );
};

const WRStatusButton = ({ record }) => {
  return (
    <Button
      component={Link}
      to={`/PMWorks/WRStatus/create?WorkRequestID=${record.id}`}
      label={null}
      title="تغییر وضعیت"
      color="secondary"
    >
      <RepeatOutlinedIcon />
    </Button>
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

const useDatagridStyles = makeStyles({
  total: { fontWeight: "bold" },
});

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
            <Datagrid
              {...props}
              ids={this.state.op}
              expand={<WorkOrderList />}
              classes={classes}
            >
              <WorkRequestField
                textAlgin="right"
                source="id"
                label="کد درخواست"
              />
              <JalaaliDateField
                textAlgin="right"
                source="WRDate"
                label="تاریخ"
              />
              <ReferenceField
                label="کد تجهیز"
                textAlgin="right"
                source="AssetSubdivisionID"
                reference="PMWorks/AssetSubdivision"
                sortBy="AssetSubdivisionID__AssetCode"
              >
                <TextField source="AssetCode" />
              </ReferenceField>
              <ReferenceField
                label="عنوان تجهیز"
                textAlgin="right"
                source="AssetSubdivisionID"
                reference="PMWorks/AssetSubdivision"
                sortBy="AssetSubdivisionID__AssetName"
              >
                <TextField source="AssetName" />
              </ReferenceField>
              <ReferenceField
                label="خانواده تجهیز"
                textAlgin="right"
                source="AssetSubdivisionID"
                reference="PMWorks/AssetSubdivision"
                sortBy="AssetSubdivisionID__AssetClassNameChain"
              >
                <TextField source="AssetClassNameChain" />
              </ReferenceField>
              <ReferenceField
                label=" حالت خرابی"
                textAlgin="right"
                source="FailureModeID"
                reference="PMWorks/FailureMode"
                sortBy="FailureModeID__FailureModeName"
              >
                <TextField source="FailureModeName" />
              </ReferenceField>
              <ReferenceField
                label="اولویت"
                textAlgin="right"
                source="WorkPriorityID"
                reference="PMWorks/WorkPriority"
                sortBy="WorkPriorityID__WorkPriorityName"
              >
                <TextField source="WorkPriorityName" />
              </ReferenceField>
              <TextField
                label="توضیحات"
                textAlgin="right"
                source="WRDescription"
              />
              <ReferenceField
                label="نوع"
                textAlgin="right"
                source="TypeWrID"
                reference="PMWorks/TypeWr"
                sortBy="TypeWrID__TypeWrName"
              >
                <TextField source="TypeWrName" />
              </ReferenceField>
              <ReferenceField
                label="وضعیت"
                textAlgin="right"
                source="StatusID"
                reference="PMWorks/Status"
                sortBy="StatusID__StatusName"
              >
                <TextField source="StatusName" />
              </ReferenceField>
              <WRStatusButton />
              <ShowButton label={null} title="مشاهده " />
            </Datagrid>
          )}
          {filterValues.StatusID__OpCl === "2" && (
            <Datagrid
              classes={classes}
              {...props}
              ids={this.state.cl}
              expand={<WorkOrderList />}
            >
              <WorkRequestField
                textAlgin="right"
                source="id"
                label=" کد درخواست"
              />
              <JalaaliDateField
                textAlgin="right"
                source="WRDate"
                label="تاریخ"
              />
              <ReferenceField
                label="کد تجهیز"
                textAlgin="right"
                source="AssetSubdivisionID"
                reference="PMWorks/AssetSubdivision"
                sortBy="AssetSubdivisionID__AssetCode"
              >
                <TextField source="AssetCode" />
              </ReferenceField>
              <ReferenceField
                label="عنوان تجهیز"
                textAlgin="right"
                source="AssetSubdivisionID"
                reference="PMWorks/AssetSubdivision"
                sortBy="AssetSubdivisionID__AssetName"
              >
                <TextField source="AssetName" />
              </ReferenceField>
              <ReferenceField
                label="خانواده تجهیز"
                textAlgin="right"
                source="AssetSubdivisionID"
                reference="PMWorks/AssetSubdivision"
                sortBy="AssetSubdivisionID__AssetClassNameChain"
              >
                <TextField source="AssetClassNameChain" />
              </ReferenceField>
              <ReferenceField
                label=" حالت خرابی"
                textAlgin="right"
                source="FailureModeID"
                reference="PMWorks/FailureMode"
                sortBy="FailureModeID__FailureModeName"
              >
                <TextField source="FailureModeName" />
              </ReferenceField>
              <ReferenceField
                label="اولویت"
                textAlgin="right"
                source="WorkPriorityID"
                reference="PMWorks/WorkPriority"
                sortBy="WorkPriorityID__WorkPriorityName"
              >
                <TextField source="WorkPriorityName" />
              </ReferenceField>
              <TextField
                label="توضیحات"
                textAlgin="right"
                source="WRDescription"
              />
              <ReferenceField
                label="نوع"
                textAlgin="right"
                source="TypeWrID"
                reference="PMWorks/TypeWr"
                sortBy="TypeWrID__TypeWrName"
              >
                <TextField source="TypeWrName" />
              </ReferenceField>
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

const WorkRequestList = ({ classes, ...props }) => (
  <List
    {...props}
    actions={<ListActions />}
    exporter={exporter}
    filterDefaultValues={{ StatusID__OpCl: "1" }}
    sort={{ field: "WRDate", order: "DESC" }}
    {...props}
    title="درخواست کار"
    filters={<WorkRequestFilter />}
    bulkActionButtons={false}
  >
    <StyledTabbedDatagrid />
  </List>
);

export default WorkRequestList;