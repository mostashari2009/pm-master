import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    Show,
    ShowButton,
    CardActions,
    TopToolbar,
    ExportButton,
    CreateButton,
    downloadCSV,
    useGetList
}
from 'react-admin';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core';
import LocationFilter from './LocationFilter';
import { ImportButton } from "react-admin-import-csv";
import jsonExport from 'jsonexport/dist';

const importOptions = {
    parseConfig: {
        encoding: 'ISO-8859-1'
    },
};


const CustomExportButton = (props) => {
    const classes = useStyles();

    const BOM = '\uFEFF'

    const { data, ids, loading, error } = useGetList(
      "PMWorks/Location",
      { page: 1, perPage: 500 },
      { field: "id", order: "ASC" }
    );

    const dataForExport = ids.map(id => {
        const {  ...dataForExport } = id; // omit backlinks and author
        dataForExport.id = data[id].id;
        dataForExport.LocationCode = data[id].LocationCode;
        dataForExport.LocationName = data[id].LocationName;
        dataForExport.LocationFatherID = data[id].LocationFatherID; // add a field
        return dataForExport;
    });
  
    const exporter = () => {
        jsonExport(dataForExport, 
            (err, csv) => {
            downloadCSV(`${BOM} ${csv}`, 'LocationList')
        
          })
    };
  
    return <ExportButton className={classes.ex} label="خروجی" exporter={exporter} />;
  };

const ListActions = (props) => {
      
  return (
    <TopToolbar>
      <CreateButton/>
      <CustomExportButton />
      <ImportButton label="ورودی" {...props} {...importOptions}/>
    </TopToolbar>
  );
};

const useStyles = makeStyles({
    head: {
        display: 'none',
    },
    ex: {
        fontFamily: 'inherit',
    }
});

const CreateChildButton = ({ record }) => (
    <Button
        component={Link}
        to={{
            pathname: '/PMWorks/Location/create',
            state: { record: { LocationFatherID: record.id } },
        }}
        label="اضافه کردن زیرمجموعه"
        title="اضافه کردن زیرمجموعه"
        color="secondary"
    >
        <AddIcon color="secondary" />
        زیرمجموعه
    </Button>
);


const NoneActions = props => (
    <CardActions />
);


const LocationTitle = ({...props}) => {
    return <span>زیر مجموعه {props ? `"${props.record.LocationName}"` : ''}</span>;
};

const LocationShow5 = props => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<LocationTitle />}
        actions={<NoneActions />}
    >
        <List {...props} filter={{ LocationFatherID: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }}>
                <TextField label="کد مکان" textAlgin="right" source="LocationCode" />
                <TextField label="عنوان مکان" textAlgin="right" source="LocationName" />
                <ShowButton />
            </Datagrid>
        </List>
    </Show>
);
};

const LocationShow4 = props => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<LocationTitle />}
        actions={<NoneActions />}
    >
        <List {...props} filter={{ LocationFatherID: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<LocationShow5 />}>
                <TextField label="کد مکان" textAlgin="right" source="LocationCode" />
                <TextField label="عنوان مکان" textAlgin="right" source="LocationName" />
                <CreateChildButton />
                <ShowButton />
            </Datagrid>
        </List>
    </Show>
);
};

const LocationShow3 = props => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<LocationTitle />}
        actions={<NoneActions />}
    >
        <List {...props} filter={{ LocationFatherID: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<LocationShow4 />}>
                <TextField label="کد مکان" textAlgin="right" source="LocationCode" />
                <TextField label="عنوان مکان" textAlgin="right" source="LocationName" />
                <CreateChildButton />
                <ShowButton />
            </Datagrid>
        </List>
    </Show>
);
};

const LocationShow2 = props => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<LocationTitle />}
        actions={<NoneActions />}
    >
        <List {...props} filter={{ LocationFatherID: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<LocationShow3 />}>
                <TextField label="کد مکان" textAlgin="right" source="LocationCode" />
                <TextField label="عنوان مکان" textAlgin="right" source="LocationName" />
                <CreateChildButton />
                <ShowButton />
            </Datagrid>
        </List>
    </Show>
);
};

const LocationShow = props => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<LocationTitle />}
        actions={<NoneActions />}
    >
        <List {...props} filter={{ LocationFatherID: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<LocationShow2 />}>
                <TextField label="کد مکان" textAlgin="right" source="LocationCode" />
                <TextField label="عنوان مکان" textAlgin="right" source="LocationName" />
                <CreateChildButton />
                <ShowButton />
            </Datagrid>
        </List>
    </Show>
);
};

const LocationList = props => (
    <List {...props} actions={<ListActions />} filters={<LocationFilter />} filter={{ LocationFatherID__isnull: true }} title="مکان">
        <Datagrid expand={<LocationShow />}>
            <TextField label="کد مکان" textAlgin="right" source="LocationCode" />
            <TextField label="عنوان مکان" textAlgin="right" source="LocationName" />
            <CreateChildButton />
            <ShowButton />
        </Datagrid>
    </List>
);

export default LocationList;
