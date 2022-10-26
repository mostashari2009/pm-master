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
    downloadCSV,
    CreateButton,
    useGetList
}
from 'react-admin';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core';
import AssetCategoryFilter from './AssetCategoryFilter';
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
      "PMWorks/AssetCategory",
      { page: 1, perPage: 500 },
      { field: "id", order: "ASC" }
    );

    const dataForExport = ids.map(id => {
        const {  ...dataForExport } = id; // omit backlinks and author
        dataForExport.id = data[id].id;
        dataForExport.AssetCategoryCode = data[id].AssetCategoryCode;
        dataForExport.AssetCategoryName = data[id].AssetCategoryName;
        dataForExport.AssetClassFather = data[id].AssetClassFather; // add a field
        return dataForExport;
    });
  
    const exporter = () => {
        jsonExport(dataForExport, 
            (err, csv) => {
            downloadCSV(`${BOM} ${csv}`, 'AssetcategoryList')
        
          })
    };
  
    return <ExportButton className={classes.ex} label="خروجی" exporter={exporter} />;
  };


const ListActions = (props) => {

  return (
    <TopToolbar>
      <CreateButton/>
      <CustomExportButton/>
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
            pathname: '/PMWorks/AssetCategory/create',
            state: { record: { AssetClassFather: record.id } },
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


const AssetcategoryTitle = ({...props}) => {
    return <span>زیر مجموعه {props ? `"${props.record.AssetCategoryName}"` : ''}</span>;
};

const AssetcategoryShow5 = props => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<AssetcategoryTitle />}
        actions={<NoneActions />}
    >
        <List empty={false} {...props} filter={{ AssetClassFather: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }}>
                <TextField label="کد گروه خانواده تجهیز" textAlgin="right" source="AssetCategoryCode" />
                <TextField label="نام گروه خانواده تجهیز" textAlgin="right" source="AssetCategoryName" />
                <CreateChildButton />
                <ShowButton />
            </Datagrid>
        </List>
    </Show>
);
};

const AssetcategoryShow4 = props => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<AssetcategoryTitle />}
        actions={<NoneActions />}
    >
        <List empty={false} {...props} filter={{ AssetClassFather: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<AssetcategoryShow5 />}>
                <TextField label="کد گروه خانواده تجهیز" textAlgin="right" source="AssetCategoryCode" />
                <TextField label="نام گروه خانواده تجهیز" textAlgin="right" source="AssetCategoryName" />
                <CreateChildButton />
                <ShowButton />
            </Datagrid>
        </List>
    </Show>
);
};

const AssetcategoryShow3 = props => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<AssetcategoryTitle />}
        actions={<NoneActions />}
    >
        <List empty={false} {...props} filter={{ AssetClassFather: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<AssetcategoryShow4 />}>
                <TextField label="کد گروه خانواده تجهیز" textAlgin="right" source="AssetCategoryCode" />
                <TextField label="نام گروه خانواده تجهیز" textAlgin="right" source="AssetCategoryName" />
                <CreateChildButton />
                <ShowButton />
            </Datagrid>
        </List>
    </Show>
);
};

const AssetcategoryShow2 = props => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<AssetcategoryTitle />}
        actions={<NoneActions />}
    >
        <List empty={false} {...props} filter={{ AssetClassFather: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<AssetcategoryShow3 />}>
                <TextField label="کد گروه خانواده تجهیز" textAlgin="right" source="AssetCategoryCode" />
                <TextField label="نام گروه خانواده تجهیز" textAlgin="right" source="AssetCategoryName" />
                <CreateChildButton />
                <ShowButton />
            </Datagrid>
        </List>
    </Show>
);
};

const AssetcategoryShow = props => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<AssetcategoryTitle />}
        actions={<NoneActions />}
    >
        <List empty={false} {...props} filter={{ AssetClassFather: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<AssetcategoryShow2 />}>
                <TextField label="کد گروه خانواده تجهیز" textAlgin="right" source="AssetCategoryCode" />
                <TextField label="نام گروه خانواده تجهیز" textAlgin="right" source="AssetCategoryName" />
                <CreateChildButton />
                <ShowButton />
            </Datagrid>
        </List>
    </Show>
);
};

const AssetcategoryList = props => (
    <List {...props} actions={<ListActions />} filters={<AssetCategoryFilter />} filter={{ AssetClassFather__isnull: true }} title="گروه خانواده تجهیز ">
        <Datagrid expand={<AssetcategoryShow />}>
            <TextField label="کد گروه خانواده تجهیز" textAlgin="right" source="AssetCategoryCode" />
            <TextField label="نام گروه خانواده تجهیز" textAlgin="right" source="AssetCategoryName" />
            <CreateChildButton />
            <ShowButton />
        </Datagrid>
    </List>
);

export default AssetcategoryList;
