import React, { useEffect, useContext, useRef, forwardRef } from "react";
import { Fragment } from "react";
import {
  Datagrid,
  TextField,
  ReferenceField,
  useShowController,
  TabbedShowLayout,
  ReferenceManyField,
  Tab,
  Show,
  TopToolbar,
  NumberField,
  EditButton,
  ExportButton,
  ListButton,
  List,
  downloadCSV,
  SelectField,
  useMutation,
  useRefresh,
  useNotify,
  useUnselectAll,
  BulkDeleteButton,
  Button,
  ResourceContextProvider,
  SimpleShowLayout,
  useGetOne,
  FunctionField,
  FilterButton,
  SelectInput,
  Filter,
  Pagination,
} from "react-admin";
import WorkOrderTitle from "./WorkOrderTitle";
import JalaaliDateField from "../Components/JalaaliDateField";
import AddSupplierButton from "./AddSupplierButton";
import AddDelayButton from "./AddDelayButton";
import AddTaskButton from "./AddTaskButton";
import { makeStyles } from "@material-ui/core";
import WOSupplierFilter from "../WOSupplier/WOSupplierFilter";
import WOPersonnelFilter from "../WOPersonnel/WOPersonnelFilter";
import WODelayFilter from "../WODelay/WODelayFilter";
import WOSparePartFilter from "../WOSparePart/WOSparePartFilter";
import WOTaskFilter from "../WOTask/WOTaskFilter";
import jsonExport from "jsonexport/dist";
import WOStatusFilter from "../WOStatus/WOStatusFilter";
import AddWOStatusButton from "./AddWOStatusButton";
import AddPersonnelButton from "../WOTask/AddPersonnelButton";
import AddSparePartButton from "../WOTask/AddSparePartButton";
import QuickSelectTaskButton from "./QuickSelectTaskButton";
import DoneIcon from "@material-ui/icons/Done";
import { ImportButton } from "react-admin-import-csv";
import ScrollDialogP from "./NewPersonTask";
import ScrollDialog from "./NewSpareTask";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import WOAssetSubdivisionFilter from "../WOAssetSubdivision/WOAssetSubdivisionFilter";
import JalaaliTimeField from "../Components/JalaaliTimeField";
import ReactToPrint from "react-to-print";
import PrintIcon from "@material-ui/icons/Print";
import IconButton from "@material-ui/core/IconButton";
import jMoment from "moment-jalaali";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import WOTaskFilters from "../WOTask/WOTaskFilters";
import Logo from "../WorkOrder/logoWorkOrderShow.png";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import WOTemplateActivityFilter from "../WOTemplateActivity/WOTemplateActivityFilter";
const importOptions = {
  parseConfig: {
    encoding: "ISO-8859-1",
  },
};

const CustomTaskButton = ({ selectedIds }) => {
  const refresh = useRefresh();
  const notify = useNotify();
  const unselectAll = useUnselectAll();
  const [mutate] = useMutation();

  const onSuccess = () => {
    refresh();
    notify("??????????????????? ?????????? ????????");
    unselectAll("PMWorks/WOTask");
  };

  const toggleDrawer = () => {
    {
      selectedIds.map((selectedId) =>
        mutate({
          type: "update",
          resource: "PMWorks/WOTask",
          payload: { id: selectedId, data: { WOTaskSituationOfDo: "D" } },
        })
      );
    }
    onSuccess();
  };

  return (
    <Button label="?????????? ????????????" onClick={toggleDrawer}>
      <DoneIcon />
    </Button>
  );
};

const AddTaskPersonnelButton = ({ selectedIds }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => () => {
    setOpen(true);
  };

  return (
    <Fragment>
      <Button label="???????????? ?????????? ????????????" onClick={handleClickOpen()}>
        <PermIdentityOutlinedIcon />
      </Button>
      {open ? (
        <ScrollDialogP
          open={open}
          setOpen={setOpen}
          taskSelectedIds={selectedIds}
        />
      ) : null}
    </Fragment>
  );
};

const AddTaskSpareButton = ({ record }) => {
  const [opens, setOpens] = React.useState(false);

  const handleClickOpen = () => () => {
    setOpens(true);
  };

  return (
    <Fragment>
      <Button label="????????????" onClick={handleClickOpen()}>
        <TouchAppIcon />
      </Button>
      {opens ? (
        <ScrollDialog open={opens} setOpen={setOpens} record={record} />
      ) : null}
    </Fragment>
  );
};

const TaskBulkActionButtons = (props) => (
  <Fragment>
    <AddTaskPersonnelButton {...props} />
    <CustomTaskButton label="?????????? ????????????" {...props} />
    <BulkDeleteButton {...props} />
  </Fragment>
);

const exporterSupplier = (data) => {
  const BOM = "\uFEFF";

  jsonExport(data, (err, csv) => {
    downloadCSV(`${BOM} ${csv}`, "SupplierList");
  });
};

const exporterWOAssetSubdivision = (data) => {
  const BOM = "\uFEFF";

  jsonExport(data, (err, csv) => {
    downloadCSV(`${BOM} ${csv}`, "WOAssetSubdivisionList");
  });
};

const exporterPersonnel = (data) => {
  const BOM = "\uFEFF";

  jsonExport(data, (err, csv) => {
    downloadCSV(`${BOM} ${csv}`, "PersonnelList");
  });
};

const exporterDelay = (data) => {
  const BOM = "\uFEFF";

  jsonExport(data, (err, csv) => {
    downloadCSV(`${BOM} ${csv}`, "DelayList");
  });
};

const exporterSparePart = (data) => {
  const BOM = "\uFEFF";

  jsonExport(data, (err, csv) => {
    downloadCSV(`${BOM} ${csv}`, "SparePartList");
  });
};

const exporterTask = (data) => {
  const BOM = "\uFEFF";

  jsonExport(data, (err, csv) => {
    downloadCSV(`${BOM} ${csv}`, "TaskList");
  });
};

const exporterWOStatus = (data) => {
  const BOM = "\uFEFF";

  jsonExport(data, (err, csv) => {
    downloadCSV(`${BOM} ${csv}`, "WOStatusList");
  });
};

const WOSupplierActions = ({ basePath, data }, props) => {
  const classes = useStyles();

  return (
    <TopToolbar>
      <AddSupplierButton record={data}  />
      <ExportButton className={classes.ex} label="??????????" basePath={basePath} />
      <ImportButton
        label="??????????"
        resource="PMWorks/WOSupplier"
        {...props}
        {...importOptions}
      />
    </TopToolbar>
  );
};

const WOPersonnelActions = ({ basePath, data }, props) => {
  const classes = useStyles();

  return (
    <TopToolbar>
      <ExportButton className={classes.ex} label="??????????" basePath={basePath} />
      <ImportButton
        label="??????????"
        resource="PMWorks/WOPersonnel"
        {...props}
        {...importOptions}
      />
    </TopToolbar>
  );
};

const WOAssetSubdivisionActions = ({ basePath, data }, props) => {
  const classes = useStyles();

  return (
    <TopToolbar>
      <ExportButton className={classes.ex} label="??????????" basePath={basePath} />
      <ImportButton
        label="??????????"
        resource="PMWorks/WOAssetSubdivision"
        {...props}
        {...importOptions}
      />
    </TopToolbar>
  );
};

const WODelayActions = ({ basePath, data }, props) => {
  const classes = useStyles();

  return (
    <TopToolbar>
      <AddDelayButton record={data}  />
      <ExportButton className={classes.ex} label="??????????" basePath={basePath} />
      <ImportButton
        label="??????????"
        resource="PMWorks/WODelay"
        {...props}
        {...importOptions}
      />
    </TopToolbar>
  );
};

const WOSparePartActions = ({ basePath, data }, props) => {
  const classes = useStyles();

  return (
    <TopToolbar>
      <ExportButton className={classes.ex} label="??????????" basePath={basePath} />
      <ImportButton
        label="??????????"
        resource="PMWorks/WOSparePart"
        {...props}
        {...importOptions}
      />
    </TopToolbar>
  );
};

const WOTaskActions = ({ basePath, data }, props) => {
  const classes = useStyles();

  return (
    <TopToolbar>
      <QuickSelectTaskButton record={data}  />

      <ExportButton className={classes.ex} label="??????????" basePath={basePath} />
    </TopToolbar>
  );
};

const WOTaskListActions = ({ basePath, data }, props) => {
  const classes = useStyles();

  return (
    <TopToolbar>
      <ExportButton className={classes.ex} label="??????????" basePath={basePath} />
      <ImportButton
        label="??????????"
        resource="PMWorks/WOTask"
        {...props}
        {...importOptions}
      />
    </TopToolbar>
  );
};

const WOStatusActions = ({ basePath, data }, props) => {
  const classes = useStyles();

  return (
    <TopToolbar>
      <AddWOStatusButton record={data} className={classes.ex} />
      <ExportButton className={classes.ex} label="??????????" basePath={basePath} />
    </TopToolbar>
  );
};

const useStyles = makeStyles({
  page: {
    headerCell: {
      display: "none",
    },
    margin: "0 auto",
    direction: "rtl",

    "& .MuiTableCell-head": {
      backgroundColor: "#DCDCDC",
      padding: "5px",
      fontSize: "12px",
    },

    "& .MuiTypography-body2": {
      fontSize: "12px",
    },

    "& .MuiTableCell-sizeSmall": {
      padding: "4px 4px 4px 0px",

      margin: "0 auto",
    },
    "& .MuiTableCell-sizeSmall:last-child": {
      width: "150px",
    },
    "& .MuiButton-textPrimary":{
      color: "#0863cc",
    },
  },
  row: {
    "& .nth-of-type(odd)": {
      backgroundColor: "#def2ff",
    },
    "& .last-child td, &:last-child th": {
      border: "0",
    },
    
  },

  headCell: {
    padding: "5px 5px",
    ontSize: "12px",
  },
  sho: {
    display: "inline-block",
    textAlignLast: "right",

    "& .MuiFormControl-root": {
      border: "1px solid #DCDCDC",
      right: "5px",
      margin: "0 auto",
      height: "80px",
      width: "121px",
      paddingRight: "2px",
      fontSize: "12px",
    },
  },
  sec: {
    display: "inline-block",
    textAlignLast: "right",

    "& .MuiFormControl-root": {
      border: "1px solid #DCDCDC",
      right: "5px",
      margin: "0 auto",
      height: "80px",
      width: "121px",
      paddingRight: "2px",
      fontSize: "12px",
    },
  },

  ex: {
    fontFamily: "inherit",
    color: "#0863cc",
  },
  headerContainer: {
    gridTemplateColumns: "125px auto 125px",
    display: "grid",
    padding: "4px",
  },
  itemhead: {
    border: "1px solid #DCDCDC",
    padding: "4px 10px",
    fontSize: "0.7rem",
    fontWeight: "600",
    height: "50px",
  },
  logo: {
    maxWidth: "45px",
    marginRight: "30%",
  },
  gridcontainer: {
    display: "grid",
    gridTemplateColumns: "71% 71%",
    padding: "4px",
  },
  it1: {
    gridColumn: "1 / span 2",
    gridRow: "1",
  },
  it2: {
    gridColumn: "1 / span 2",
    gridRow: "2",
    border: "1px solid #DCDCDC",
    padding: "2px",
  },
  it3: {
    gridRow: "3",
    border: "1px solid #DCDCDC",
    padding: "2px",
  },
  it4: {
    padding: "2px",
    gridRow: "3",
    border: "1px solid #DCDCDC",
  },
  it5: {
    gridColumn: "1",
    gridRow: "4",
    border: "1px solid #DCDCDC",
    padding: "1px",
  },
  it6: {
    gridColumn: "2",
    padding: "1px",
    gridRow: "4",
    border: "1px solid #DCDCDC",
  },

  gridContainer1: {
    gridTemplateColumns: "60px auto 90px",
    display: "grid",
    padding: "2px",
  },
  item: {
    border: "1px solid #DCDCDC",
    padding: "4px",
    fontSize: "0.7rem",
    fontWeight: "600",
    textAlign: "center",
    height: "20px",
  },

  gridContainer2: {
    padding: "2px",
    display: "grid",
  },
  item1: {
    gridColumn: "1 / span 2",
    border: "1px solid #DCDCDC",
    padding: "5px 10px",
    fontSize: "12px",
    padding: "5px",
  },
  item2: {
    gridColumn: "1 / span 2",
    border: "1px solid #DCDCDC",
    paddingRight: "10px",
    fontSize: "12px",
  },
  item3: {
    border: "1px solid #DCDCDC",
    padding: "5px 10px",
    fontSize: "12px",
  },
  item4: {
    border: "1px solid #DCDCDC",
    padding: "5px 10px",
    fontSize: "12px",
  },
  item5: {
    gridColumn: "1 / span 2",
    border: "1px solid #DCDCDC",
    padding: "5px 10px",
    fontSize: "12px",
    height: "53px",
  },
  tab: {
    color: "#243261",
    //backgroundColor: "#92a8d1",
    fontSize: "1rem",
    fontWeight: "bold",
  },
  sho1: {
    display: "inline-block",
    "& .MuiFormControl-marginDense": {
      border: "2px solid #A9A9A9",
      backgroundColor: "whitesmoke",
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
});

const freq = [
  { _id: "D", full_name: "?????????? ??????" },
  { _id: "ND", full_name: "?????????? ????????" },
  { _id: "N", full_name: "???????? ???? ?????????? ?????????????????" },
];

JalaaliDateField.defaultProps = { addLabel: true };

const WOoSparePartActions = ({ basePath, data }) => {
  const classes = useStyles();

  return (
    <TopToolbar>
      <AddTaskSpareButton record={data} />
      <ExportButton className={classes.ex} label="??????????" basePath={basePath} />
    </TopToolbar>
  );
};

const WOoPersonnelActions = ({ basePath, data }) => {
  const classes = useStyles();

  return (
    <TopToolbar>
      <AddPersonnelButton record={data} />
      <ExportButton className={classes.ex} label="??????????" basePath={basePath} />
    </TopToolbar>
  );
};

const WOTaskList = (props) => {
  const { record } = useShowController(props);

  const classes = useStyles();

  return (
    <Show actions={null} {...props} title={false}>
      <TabbedShowLayout syncWithLocation={false}>
        <Tab label="?????????? ????????" path="PMWorks/WOSparePart">
          <ReferenceManyField
            addLabel={false}
            reference="PMWorks/WOSparePart"
            target="WOTaskID"
            filter={{ WOTaskID: record.id }}
          >
            <List
              syncWithLocation
              exporter={exporterSparePart}
              empty={false}
              filters={<WOSparePartFilter />}
              actions={<WOoSparePartActions data={record} />}
              bulkActionButtons={false}
            >
              <Datagrid>
                <ReferenceField
                  label="???? ????????"
                  textAlgin="right"
                  source="SparePartID"
                  reference="PMWorks/SparePart"
                >
                  <TextField source="SparePartCode" />
                </ReferenceField>
                <ReferenceField
                  label="?????? ????????"
                  textAlgin="right"
                  source="SparePartID"
                  reference="PMWorks/SparePart"
                >
                  <TextField source="SparePartName" />
                </ReferenceField>
                <NumberField
                  label="??????????"
                  textAlgin="right"
                  source="SparePartAmount"
                />
              </Datagrid>
            </List>
          </ReferenceManyField>
        </Tab>
        <Tab label="??????????" path="PMWorks/WOPersonnel">
          <ReferenceManyField
            addLabel={false}
            reference="PMWorks/WOPersonnel"
            target="WOTaskID"
            filter={{ WOTaskID: record.id }}
          >
            <List
              syncWithLocation
              exporter={exporterPersonnel}
              empty={false}
              filters={<WOPersonnelFilter />}
              actions={<WOoPersonnelActions data={record} />}
            >
              <Datagrid>
                <ReferenceField
                  label="?????? ??????????"
                  textAlgin="right"
                  source="PersonnelID"
                  reference="PMWorks/Personnel"
                >
                  <TextField source="PersonnelName" />
                </ReferenceField>
                <ReferenceField
                  label="?????????? ??????????"
                  textAlgin="right"
                  source="PersonnelID"
                  reference="PMWorks/Personnel"
                >
                  <TextField source="PersonnelFamily" />
                </ReferenceField>
                <ReferenceField
                  label="???? ??????????"
                  textAlgin="right"
                  source="PersonnelID"
                  reference="PMWorks/Personnel"
                >
                  <TextField source="PersonnelCode" />
                </ReferenceField>
                <JalaaliDateField
                  label="?????????? ??????????"
                  textAlgin="right"
                  source="WorkDate"
                />
                <NumberField
                  label=")??????????)?????? ???????? ??????????"
                  textAlgin="right"
                  source="WorkTime"
                />
              </Datagrid>
            </List>
          </ReferenceManyField>
        </Tab>
      </TabbedShowLayout>
    </Show>
  );
};
const fun = [
  { _id: "O", full_name: "??????????????" },
  { _id: "T", full_name: "????????????" },
];
const CustomPagination = (props) => (
  <Pagination rowsPerPageOptions={[10, 25, 50, 100, 200]} {...props} />
);
const CustomPagination2 = (props) => (
  <Pagination
    style={{ display: "none" }}
    limit={1000}
    rowsPerPageOptions={[1000, 2000]}
    {...props}
  />
);
const WOTask = (props) => {
  const classes = useStyles();
  return (
    <ReferenceManyField
      addLabel={false}
      reference="PMWorks/WOTask"
      target="WOAssetSubdivisionID"
      filter={{ WOAssetSubdivisionID: props.record.id }}
    >
      <List
        {...props}
        empty={false}
        filters={<WOTemplateActivityFilter />}
        actions={
          <WOTaskActions
            data={props.record.id}
            dataa={props.record.WOTemplateID}
          />
        }
        basePath="PMWorks/WOTask"
        title=" "
        bulkActionButtons={false}
        pagination={<CustomPagination />}
      >
        <Datagrid className={classes.page}>
          <ReferenceField
            label="???? ????????????"
            textAlgin="right"
            source="TaskID"
            reference="PMWorks/AssetClassTask"
          >
            <TextField source="TaskCode" />
          </ReferenceField>
          <ReferenceField
            label="?????????? ????????????"
            textAlgin="right"
            source="TaskID"
            reference="PMWorks/AssetClassTask"
          >
            <TextField source="TaskName" />
          </ReferenceField>
          <ReferenceField
            label="??????????"
            textAlgin="right"
            source="TaskID"
            reference="PMWorks/AssetClassTask"
          >
            <TextField source="FrequencyName" />
          </ReferenceField>
          <ReferenceField
            label="?????????? ??????????"
            textAlgin="right"
            source="TaskID"
            reference="PMWorks/AssetClassTask"
          >
            <TextField source="FrequencyAmount" />
          </ReferenceField>
          <ReferenceField
            label="?????? ???????? ??????????"
            textAlgin="right"
            source="TaskID"
            reference="PMWorks/AssetClassTask"
          >
            <TextField source="DurationOfDo" />
          </ReferenceField>
          <ReferenceField
            label="??????????"
            textAlgin="right"
            source="TaskID"
            reference="PMWorks/AssetClassTask"
          >
            <SelectField
              label="??????????"
              textAlgin="right"
              source="Functor"
              choices={fun}
              optionText="full_name"
              optionValue="_id"
            />
          </ReferenceField>
          <ReferenceField
            label="????????"
            textAlgin="right"
            source="TaskID__JobCategoryID"
            reference="PMWorks/JobCategory"
          >
            <TextField source="JobCategoryName" />
          </ReferenceField>
        </Datagrid>
      </List>
    </ReferenceManyField>
  );
};

const WorkOrderShow = (props) => {
  const componentRef = useRef();

  const ShowActions = ({ basePath, data }) => (
    <TopToolbar>
      <ReactToPrint
        trigger={() => (
          <IconButton
            style={{ color: "#243261", paddingTop: "2px", paddingLeft: "10px" }}
          >
            <PrintIcon />
          </IconButton>
        )}
        content={() => componentRef.current}
      />
      <ListButton basePath={basePath} />
    </TopToolbar>
  );

  const record = props.id;

  const { data } = useGetOne("PMWorks/WorkOrder", record);

  const WorkOrderField = ({ data }) => {
    let str = data.WorkRequestID
      ? `${data.WorkRequestID}`
      : `${data.WOTemplateCode}`;
    str = data.WorkRequestID ? str.padStart(4, 0) : str;
    let text = data.WorkRequestID ? "WR0".concat(str) : "PM".concat(str);
    let stro = data ? `${data.id}` : "";
    stro = stro.padStart(4, 0);
    let texto = "_WO0".concat(stro);
    return (
      <span>
        {" "}
        {text} {texto}{" "}
      </span>
    );
  };

  WorkOrderField.defaultProps = { label: "???? ?????????? ??????", addLabel: true };

  const Empty = () => {
    function createData(name, calories, fat, carbs, protein) {
      return { name, calories, fat, carbs, protein };
    }

    const rows = [
      createData(" ", " ", " ", " ", " "),
      createData(" ", " ", " ", " ", " "),
      createData(" ", " ", " ", " ", " "),
      createData(" ", " ", " ", " ", " "),
    ];
    return (
      <TableContainer component={Paper} className={classes.page1}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">???? ????????</TableCell>
              <TableCell align="right">?????? ????????</TableCell>
              <TableCell align="left">??????????</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  const EmptyP = () => {
    function createData(name, calories, fat, carbs, protein) {
      return { name, calories, fat, carbs, protein };
    }

    const rows = [
      createData(" ", " ", " ", " ", " "),
      createData(" ", " ", " ", " ", " "),
      createData(" ", " ", " ", " ", " "),
      createData(" ", " ", " ", " ", " "),
    ];
    return (
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">??????</TableCell>
              <TableCell align="right">?????? ????????????????</TableCell>
              <TableCell align="left">?????????? ??????????</TableCell>
              <TableCell align="left"> ???????? ??????????(??????????)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
  const EmptyF = () => {
    function createData(name, calories, fat, carbs, protein, acid, wheat) {
      return { name, calories, fat, carbs, protein, acid, wheat };
    }

    const rows = [
      createData(" ", " ", " ", " ", " ", " ", " "),
      createData(" ", " ", " ", " ", " ", " ", " "),
      createData(" ", " ", " ", " ", " ", " ", " "),
      createData(" ", " ", " ", " ", " ", " ", " "),
    ];
    return (
      <TableContainer component={Paper} className={classes.page1}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">???? ??????????</TableCell>
              <TableCell align="right">?????????? ??????????</TableCell>
              <TableCell align="right">????????</TableCell>
              <TableCell align="right">?????? ????????????</TableCell>
              <TableCell align="right">???? ????????????</TableCell>
              <TableCell align="right">?????????? ??????????</TableCell>
              <TableCell align="right">??????????????</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  const classes = useStyles();
  return (
    <Show actions={<ShowActions />} {...props} title={<WorkOrderTitle />}>
      <TabbedShowLayout syncWithLocation={false} classes={classes}>
        <Tab label="????????????">
          <div ref={componentRef} className={classes.page}>
            <SimpleShowLayout>
              <Grid item xs={12}>
                <div className={classes.headerContainer}>
                  <div className={classes.itemhead}>
                    <div
                      style={{
                        paddingTop: "7px",
                        paddingBottom: "5px",
                      }}
                    >
                      ???? ??????:
                    </div>
                    <div> ?????????? ????????????:</div>
                  </div>
                  <div className={classes.itemhead}>
                    <Typography
                      style={{
                        fontWeight: "700",
                        paddingRight: "33%",
                        paddingTop: "10px",
                      }}
                    >
                      ?????????? ?????? ???? ???????????? ???????? ??????
                    </Typography>
                  </div>
                  <div className={classes.itemhead}>
                    {" "}
                    <img src={Logo} alt="logo" className={classes.logo} />{" "}
                  </div>
                </div>
              </Grid>
              <Typography
                style={{
                  paddingRight: "45%",
                  marginBottom: "5px",
                  fontWeight: "bold",
                }}
              >
                ?????? ?????????? ??????
              </Typography>

              <WorkOrderField
                data={data}
                className={classes.sho}
                textAlgin="right"
                source="id"
              />
              <ReferenceField
                className={classes.sho}
                label="???? ??????????"
                textAlgin="right"
                source="WorkRequestID__AssetSubdivisionID"
                reference="PMWorks/AssetSubdivision"
              >
                <TextField className={classes.sho} source="AssetCode" />
              </ReferenceField>
              <ReferenceField
                className={classes.sho}
                label="?????????? ??????????"
                textAlgin="right"
                source="WorkRequestID__AssetSubdivisionID"
                reference="PMWorks/AssetSubdivision"
              >
                <TextField className={classes.sho} source="AssetName" />
              </ReferenceField>
              <ReferenceField
                className={classes.sho}
                label="????????"
                textAlgin="right"
                source="WorkRequestID__AssetSubdivisionID"
                reference="PMWorks/AssetSubdivision"
              >
                <TextField
                  className={classes.sho}
                  source="AssetID__LocationID__LocationNameChain"
                />
              </ReferenceField>

              <ReferenceField
                className={classes.sho}
                label="??????????"
                textAlgin="right"
                source="WorkRequestID__FailureModeID"
                reference="PMWorks/FailureMode"
              >
                <TextField className={classes.sho} source="FailureModeName" />
              </ReferenceField>
              <ReferenceField
                className={classes.sho}
                label="??????????"
                textAlgin="right"
                source="StatusID"
                reference="PMWorks/Status"
              >
                <TextField className={classes.sho} source="StatusName" />
              </ReferenceField>
              <hr
                style={{
                  backgroundColor: "#fff",
                  borderWidth: "0px",
                  padding: "0",
                  margin: "0",
                }}
              />
              <ReferenceField
                className={classes.sec}
                label="????????????????"
                textAlgin="right"
                source="DepartmentID"
                reference="PMWorks/Department"
                sortBy="DepartmentID__DepartmentName"
              >
                <TextField source="DepartmentName" />
              </ReferenceField>
              <ReferenceField
                className={classes.sho}
                label="???????? ??????????"
                textAlgin="right"
                source="WorkRequestID"
                reference="PMWorks/WorkRequest"
                linkType={false}
              >
                <JalaaliDateField
                  className={classes.sho}
                  textAlgin="right"
                  source="WRDate"
                  label="?????????? ??????????"
                />
              </ReferenceField>
              <FunctionField
                className={classes.sec}
                render={(record) =>
                  jMoment(data.WODateOfRegistration)
                    .locale("fa")
                    .format("jD jMMMM jYYYY")
                }
                label="?????????? ??????"
                textAlgin="right"
                source="WODateOfRegistration"
              />
              <FunctionField
                className={classes.sec}
                render={(record) =>
                  jMoment(data.DateOfPlanStart)
                    .locale("fa")
                    .format("jD jMMMM jYYYY")
                }
                label="?????????? ????????"
                textAlgin="right"
                source="DateOfPlanStart"
              />
              <FunctionField
                render={(record) =>
                  jMoment(data.DateOfPlanFinish)
                    .locale("fa")
                    .format("jD jMMMM jYYYY")
                }
                className={classes.sec}
                label="?????????? ??????????"
                textAlgin="right"
                source="DateOfPlanFinish"
              />
              <TextField
                className={classes.sec}
                label="??????????????"
                textAlgin="right"
                source="WODescription"
              />
              <div className={classes.gridcontainer}>
                <div className={classes.it1}></div>
                <div className={classes.it2}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Typography
                        style={{
                          paddingRight: "45%",
                          fontWeight: "500",
                        }}
                      >
                        ???????? ???????????????????
                      </Typography>
                    </Grid>

                    <Grid item xs={12}>
                      <ReferenceManyField
                        addLabel={false}
                        reference="PMWorks/WOTaskOrder"
                        target="WOAssetSubdivisionID__WorkOrderID"
                        filter={{ WOAssetSubdivisionID__WorkOrderID: record }}
                        perPage={1000}
                      >
                        <List
                          perPage={1000}
                          bulkActionButtons={false}
                          syncWithLocation
                          basePath="PMWorks/WOTaskOrder"
                          empty={<EmptyF />}
                          actions={null}
                          pagination={<CustomPagination2 />}
                        >
                          <Datagrid>
                            <ReferenceField
                              label="???? ??????????"
                              textAlgin="right"
                              source="WOAssetSubdivisionID__AssetSubdivisionID"
                              reference="PMWorks/AssetSubdivision"
                            >
                              <TextField source="AssetCode" />
                            </ReferenceField>
                            <ReferenceField
                              label="?????????? ??????????"
                              textAlgin="right"
                              source="WOAssetSubdivisionID__AssetSubdivisionID"
                              reference="PMWorks/AssetSubdivision"
                            >
                              <TextField source="AssetName" />
                            </ReferenceField>
                            <ReferenceField
                              label="????????"
                              textAlgin="right"
                              source="WOAssetSubdivisionID__AssetSubdivisionID"
                              reference="PMWorks/AssetSubdivision"
                            >
                              <TextField source="AssetID__LocationID__LocationNameChain" />
                            </ReferenceField>
                            <ReferenceField
                              label="?????? ????????????"
                              textAlgin="right"
                              source="TaskID"
                              reference="PMWorks/AssetClassTask"
                            >
                              <TextField source="TaskName" />
                            </ReferenceField>
                            <ReferenceField
                              label="???? ????????????"
                              textAlgin="right"
                              source="TaskID"
                              reference="PMWorks/AssetClassTask"
                            >
                              <TextField source="TaskCode" />
                            </ReferenceField>

                            <CheckBoxOutlineBlankIcon label="?????????? ??????????" />
                            <TextField
                              label="??????????????"
                              textAlgin="right"
                              //source="WOTaskSituationOfDo"
                              choices={freq}
                              optionText="full_name"
                              optionValue="_id"
                              width="30%"
                            />
                          </Datagrid>
                        </List>
                      </ReferenceManyField>
                      <Divider />
                    </Grid>
                  </Grid>
                  <Divider />
                </div>
                <div className={classes.it3}>
                  <Grid item xs={12}>
                    <Typography
                      style={{
                        paddingRight: "33%",
                        marginBottom: "5px",
                        fontWeight: "500",
                      }}
                    >
                      ???????? ?????????? ????????
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <ReferenceManyField
                      addLabel={false}
                      reference="PMWorks/WOSparePart"
                      target="WOTaskID__WOAssetSubdivisionID__WorkOrderID"
                      filter={{
                        WOTaskID__WOAssetSubdivisionID__WorkOrderID: record,
                      }}
                    >
                      <List
                        empty={<Empty />}
                        actions={null}
                        pagination={null}
                        bulkActionButtons={false}
                      >
                        <Datagrid>
                          <ReferenceField
                            label="???? ????????"
                            textAlgin="right"
                            source="SparePartID"
                            reference="PMWorks/SparePart"
                          >
                            <TextField source="SparePartCode" />
                          </ReferenceField>
                          <ReferenceField
                            label="?????? ????????"
                            textAlgin="right"
                            source="SparePartID"
                            reference="PMWorks/SparePart"
                          >
                            <TextField source="SparePartName" />
                          </ReferenceField>
                          <NumberField
                            label="??????????"
                            textAlgin="right"
                            source="SparePartAmount"
                          />
                        </Datagrid>
                      </List>
                    </ReferenceManyField>
                  </Grid>
                </div>
                <div className={classes.it4}>
                  <Grid item xs={12}>
                    <Typography
                      style={{
                        paddingRight: "33%",
                        marginBottom: "5px",
                        fontWeight: "500",
                      }}
                    >
                      ???????? ?????????? ????????????
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <ReferenceManyField
                      addLabel={false}
                      reference="PMWorks/WOPersonnel"
                      target="WOTaskID__WOAssetSubdivisionID__WorkOrderID"
                      filter={{
                        WOTaskID__WOAssetSubdivisionID__WorkOrderID: record,
                      }}
                    >
                      <List
                        empty={<EmptyP />}
                        actions={null}
                        pagination={null}
                        bulkActionButtons={false}
                      >
                        <Datagrid>
                          <ReferenceField
                            label="??????"
                            textAlgin="right"
                            source="PersonnelID"
                            reference="PMWorks/Personnel"
                          >
                            <TextField source="PersonnelName" />
                          </ReferenceField>
                          <ReferenceField
                            label="?????????????????????????"
                            textAlgin="right"
                            source="PersonnelID"
                            reference="PMWorks/Personnel"
                          >
                            <TextField source="PersonnelFamily" />
                          </ReferenceField>

                          <JalaaliDateField
                            label="?????????? ??????????"
                            textAlgin="right"
                            source="WorkDate"
                          />
                          <NumberField
                            label="?????? ???????? ??????????(??????????)"
                            textAlgin="right"
                            source="WorkTime"
                          />
                        </Datagrid>
                      </List>
                    </ReferenceManyField>
                  </Grid>
                </div>
                <div className={classes.it5}>
                  <Grid item xs={12}>
                    <Typography
                      style={{
                        paddingRight: "45%",
                        marginBottom: "5px",
                        fontWeight: "500",
                      }}
                    >
                      ??????????????
                    </Typography>

                    <div className={classes.gridContainer1}>
                      <div className={classes.item}>????????</div>
                      <div className={classes.item}>?????????? ??????????</div>
                      <div className={classes.item}>?????? ????????(??????????)</div>
                      <div className={classes.item}></div>
                      <div className={classes.item}></div>
                      <div className={classes.item}></div>
                      <div className={classes.item}></div>
                      <div className={classes.item}></div>
                      <div className={classes.item}></div>
                      <div className={classes.item}></div>
                      <div className={classes.item}></div>
                      <div className={classes.item}></div>
                      <div className={classes.item}></div>
                      <div className={classes.item}></div>
                      <div className={classes.item}></div>
                      <div className={classes.item}></div>
                      <div className={classes.item}></div>
                      <div className={classes.item}></div>
                    </div>
                  </Grid>
                </div>
                <div className={classes.it6}>
                  <Grid item xs={12}>
                    <Typography
                      style={{
                        paddingRight: "45%",
                        marginBottom: "5px",
                        fontWeight: "500",
                      }}
                    >
                      ??????????
                    </Typography>

                    <div className={classes.gridContainer2}>
                      <div className={classes.item1}>
                        ?????? ?? ?????? ???????????????? ?????????? ????????????:
                      </div>
                      <div className={classes.item2} paddingLeft="10PX">
                        ?????? ?????????????? ???????? ?????????? ????
                        ??????????&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ?????? &nbsp;
                        <CheckBoxOutlineBlankIcon />{" "}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;?????? &nbsp;
                        <CheckBoxOutlineBlankIcon />
                      </div>
                      <div className={classes.item3}>??????????:</div>
                      <div className={classes.item4}>????????:</div>
                      <div className={classes.item5}>??????????????:</div>
                      <div className={classes.item3}>?????? ?? ?????????? ????????????:</div>
                      <div className={classes.item4}>?????? ?? ?????????? ????????:</div>
                    </div>
                  </Grid>
                </div>
              </div>
            </SimpleShowLayout>
          </div>
        </Tab>
        <Tab label="??????????" path="PMWorks/WOStatus" className={classes.tab}>
          <ReferenceManyField
            addLabel={false}
            reference="PMWorks/WOStatus"
            target="WorkOrderID"
            filter={{ WorkOrderID: record }}
          >
            <List
              exporter={exporterWOStatus}
              empty={false}
              filters={<WOStatusFilter />}
              actions={<WOStatusActions data={record} />}
              bulkActionButtons={false}
            >
              <Datagrid className={classes.page}>
                <ReferenceField
                  className={classes.sho1}
                  label="???? ??????????"
                  textAlgin="right"
                  source="StatusID"
                  reference="PMWorks/Status"
                >
                  <TextField source="StatusCode" />
                </ReferenceField>
                <ReferenceField
                  className={classes.sho1}
                  label="?????? ??????????"
                  textAlgin="right"
                  source="StatusID"
                  reference="PMWorks/Status"
                >
                  <TextField source="StatusName" />
                </ReferenceField>
                <ReferenceField
                  className={classes.sho1}
                  label="?????? ??????????"
                  textAlgin="right"
                  source="StatusID"
                  reference="PMWorks/Status"
                >
                  <TextField source="StatusName" />
                </ReferenceField>
                <JalaaliDateField
                  className={classes.sho1}
                  label="?????????? ??????"
                  textAlgin="right"
                  source="StatusDate"
                />
                <JalaaliTimeField
                  className={classes.sho1}
                  label="???????? ??????"
                  textAlgin="right"
                  source="StatusTime"
                />
              </Datagrid>
            </List>
          </ReferenceManyField>
        </Tab>
        <Tab
          label="??????????????"
          path="PMWorks/WOAssetSubdivision"
          className={classes.tab}
        >
          <ReferenceManyField
            addLabel={false}
            reference="PMWorks/WOAssetSubdivision"
            target="WorkOrderID"
            filter={{ WorkOrderID: record }}
          >
            <List
              empty={false}
              exporter={exporterWOAssetSubdivision}
              filters={<WOAssetSubdivisionFilter />}
              actions={<WOAssetSubdivisionActions data={record} />}
              bulkActionButtons={false}
              className={classes.page}
            >
              <Datagrid expand={<WOTask />} >
                <ReferenceField
                  label="???? ??????????"
                  textAlgin="right"
                  source="AssetSubdivisionID"
                  reference="PMWorks/AssetSubdivision"
                >
                  <TextField source="AssetCode" />
                </ReferenceField>
                <ReferenceField
                  label="?????????? ??????????"
                  textAlgin="right"
                  source="AssetSubdivisionID"
                  reference="PMWorks/AssetSubdivision"
                >
                  <TextField source="AssetName" />
                </ReferenceField>
                <ReferenceField
                  label="?????????????? ??????????"
                  textAlgin="right"
                  source="AssetSubdivisionID"
                  reference="PMWorks/AssetSubdivision"
                >
                  <TextField source="AssetClassNameChain" />
                </ReferenceField>
                <ReferenceField
                  label="????????"
                  textAlgin="right"
                  source="AssetSubdivisionID"
                  reference="PMWorks/AssetSubdivision"
                >
                  <TextField source="AssetID__LocationID__LocationNameChain" />
                </ReferenceField>
              </Datagrid>
            </List>
          </ReferenceManyField>
        </Tab>
        <Tab label="???????????? ????" path="PMWorks/WOTaskOrder">
          <ReferenceManyField
            addLabel={false}
            reference="PMWorks/WOTaskOrder"
            target="WOAssetSubdivisionID__WorkOrderID"
            filter={{ WOAssetSubdivisionID__WorkOrderID: record }}
          >
            <ResourceContextProvider value="PMWorks/WOTaskOrder">
              <List
                basePath="PMWorks/WOTaskOrder"
                pagination={<CustomPagination />}
                filterDefaultValues={{
                  WOAssetSubdivisionID__WorkOrderID: record,
                }}
                exporter={exporterTask}
                //bulkActionButtons={<TaskBulkActionButtons />}
                bulkActionButtons={false}
                empty={false}
                filters={<WOTaskFilters />}
                actions={<WOTaskListActions data={record} />}
                className={classes.page}
              >
                <Datagrid expand={<WOTaskList />} >
                  <ReferenceField
                    label="???? ??????????"
                    textAlgin="right"
                    backgroundColor="red"
                    source="WOAssetSubdivisionID__AssetSubdivisionID"
                    reference="PMWorks/AssetSubdivision"
                  >
                    <TextField source="AssetCode" />
                  </ReferenceField>
                  <ReferenceField
                    label="?????????? ??????????"
                    textAlgin="right"
                    source="WOAssetSubdivisionID__AssetSubdivisionID"
                    reference="PMWorks/AssetSubdivision"
                  >
                    <TextField source="AssetName" />
                  </ReferenceField>
                  <ReferenceField
                    label="????????"
                    textAlgin="right"
                    source="WOAssetSubdivisionID__AssetSubdivisionID"
                    reference="PMWorks/AssetSubdivision"
                  >
                    <TextField source="AssetID__LocationID__LocationNameChain" />
                  </ReferenceField>
                  <ReferenceField
                    label="?????? ????????????"
                    textAlgin="right"
                    source="TaskID"
                    reference="PMWorks/AssetClassTask"
                  >
                    <TextField source="TaskName" />
                  </ReferenceField>
                  <ReferenceField
                    label="???? ????????????"
                    textAlgin="right"
                    source="TaskID"
                    reference="PMWorks/AssetClassTask"
                  >
                    <TextField source="TaskCode" />
                  </ReferenceField>
                  <SelectField
                    label="?????????? ??????????"
                    textAlgin="right"
                    source="WOTaskSituationOfDo"
                    choices={freq}
                    optionText="full_name"
                    optionValue="_id"
                  />
                </Datagrid>
              </List>
            </ResourceContextProvider>
          </ReferenceManyField>
        </Tab>
        <Tab label="????????????????" path="PMWorks/WOSupplier">
          <ReferenceManyField
            addLabel={false}
            reference="PMWorks/WOSupplier"
            target="WorkOrderID"
            filter={{ WorkOrderID: record }}
          >
            <List
              exporter={exporterSupplier}
              empty={false}
              filters={<WOSupplierFilter />}
              actions={<WOSupplierActions data={record} />}
              bulkActionButtons={false}
              className={classes.page}
            >
              <Datagrid >
                <ReferenceField
                  label="?????? ?????????? ??????????"
                  textAlgin="right"
                  source="SupplierID"
                  reference="PMWorks/Supplier"
                >
                  <TextField source="SupplierName" />
                </ReferenceField>
                <ReferenceField
                  label="???? ?????????? ??????????"
                  textAlgin="right"
                  source="SupplierID"
                  reference="PMWorks/Supplier"
                >
                  <TextField source="SupplierCode" />
                </ReferenceField>
                <JalaaliDateField
                  label="?????????? ????????"
                  textAlgin="right"
                  source="WorkStartDate"
                />
                <JalaaliDateField
                  label="?????????? ??????????"
                  textAlgin="right"
                  source="WorkFinishDate"
                />
              </Datagrid>
            </List>
          </ReferenceManyField>
        </Tab>
        <Tab label="??????????" path="PMWorks/WODelay">
          <ReferenceManyField
            addLabel={false}
            reference="PMWorks/WODelay"
            target="WorkOrderID"
            filter={{ WorkOrderID: record }}
          >
            <List
              exporter={exporterDelay}
              empty={false}
              filters={<WODelayFilter />}
              actions={<WODelayActions data={record} />}
              bulkActionButtons={false}
              className={classes.page}
            >
              <Datagrid >
                <ReferenceField
                  label="?????? ??????????"
                  textAlgin="right"
                  source="DelayID"
                  reference="PMWorks/Delay"
                >
                  <TextField source="DelayName" />
                </ReferenceField>
                <ReferenceField
                  label="???? ??????????"
                  textAlgin="right"
                  source="DelayID"
                  reference="PMWorks/Delay"
                >
                  <TextField source="DelayCode" />
                </ReferenceField>
                <NumberField label="??????" textAlgin="right" source="DayAmount" />
                <NumberField
                  label="????????"
                  textAlgin="right"
                  source="HourAmount"
                />
              </Datagrid>
            </List>
          </ReferenceManyField>
        </Tab>
        <Tab label="??????????" path="PMWorks/WOSparePart">
          <ReferenceManyField
            addLabel={false}
            reference="PMWorks/WOSparePart"
            target="WOTaskID__WOAssetSubdivisionID__WorkOrderID"
            filter={{ WOTaskID__WOAssetSubdivisionID__WorkOrderID: record }}
          >
            <List
              exporter={exporterSparePart}
              empty={false}
              filters={<WOSparePartFilter />}
              actions={<WOSparePartActions data={record} />}
              bulkActionButtons={false}
              className={classes.page}
            >
              <Datagrid >
                <ReferenceField
                  label="???? ????????"
                  textAlgin="right"
                  source="SparePartID"
                  reference="PMWorks/SparePart"
                >
                  <TextField source="SparePartCode" />
                </ReferenceField>
                <ReferenceField
                  label="?????? ????????"
                  textAlgin="right"
                  source="SparePartID"
                  reference="PMWorks/SparePart"
                >
                  <TextField source="SparePartName" />
                </ReferenceField>
                <NumberField
                  label="??????????"
                  textAlgin="right"
                  source="SparePartAmount"
                />
              </Datagrid>
            </List>
          </ReferenceManyField>
        </Tab>
        <Tab label="?????????? ????????????" path="PMWorks/WOPersonnelSum">
          <ReferenceManyField
            addLabel={false}
            reference="PMWorks/WOPersonnelSum"
            target="WOTaskID__WOAssetSubdivisionID__WorkOrderID"
            filter={{ WOTaskID__WOAssetSubdivisionID__WorkOrderID: record }}
          >
            <List
              exporter={exporterPersonnel}
              empty={false}
              filters={<WOPersonnelFilter />}
              actions={<WOPersonnelActions data={record} />}
              bulkActionButtons={false}
              className={classes.page}
            >
              <Datagrid >
                <ReferenceField
                  label="??????"
                  textAlgin="right"
                  source="PersonnelID"
                  reference="PMWorks/Personnel"
                >
                  <TextField source="PersonnelName" />
                </ReferenceField>
                <ReferenceField
                  label="?????????????????????????"
                  textAlgin="right"
                  source="PersonnelID"
                  reference="PMWorks/Personnel"
                >
                  <TextField source="PersonnelFamily" />
                </ReferenceField>
                <ReferenceField
                  label="????"
                  textAlgin="right"
                  source="PersonnelID"
                  reference="PMWorks/Personnel"
                >
                  <TextField source="PersonnelCode" />
                </ReferenceField>
                <ReferenceField
                  label="???? ????"
                  textAlgin="right"
                  source="PersonnelID"
                  reference="PMWorks/Personnel"
                >
                  <TextField source="PersonnelNetCode" />
                </ReferenceField>
                <JalaaliDateField
                  label="?????????? ??????????"
                  textAlgin="right"
                  source="WorkDate"
                />
                <NumberField
                  label="?????? ???????? ??????????"
                  textAlgin="right"
                  source="WorkTime__sum"
                />
              </Datagrid>
            </List>
          </ReferenceManyField>
        </Tab>
      </TabbedShowLayout>
    </Show>
  );
};

export default WorkOrderShow;
