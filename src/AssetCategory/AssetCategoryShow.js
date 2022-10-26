import * as React from "react";

import {
    TextField,
    ExportButton,
    Show,
    ReferenceManyField,
    Datagrid,
    TopToolbar,
    ListButton,
    EditButton,
    useShowController,
    Tab,
    List,
    downloadCSV,
    TabbedShowLayout
}
from 'react-admin';
import AssetCategoryFilter from './AssetCategoryFilter';
import AssetClassFilter from '../AssetClass/AssetClassFilter';
import AddAssetCategoryButton from './AddAssetCategoryButton';
import AddAssetClassAssetClassButton from './AddAssetClassAssetClassButton';
import { makeStyles } from '@material-ui/core/styles';
import jsonExport from 'jsonexport/dist';
import { ImportButton } from "react-admin-import-csv";

const importOptions = {
    parseConfig: {
        encoding: 'ISO-8859-1'
    },
};

const exporterAssetCategory = (data) => {
  const BOM = '\uFEFF'

  jsonExport(data, (err, csv) => {
    downloadCSV(`${BOM} ${csv}`, 'AssetCategoryList')

  })
};

const exporterAssetClass = (data) => {
    const BOM = '\uFEFF'
  
    jsonExport(data, (err, csv) => {
      downloadCSV(`${BOM} ${csv}`, 'AssetClassList')
  
    })
  };

const useStyles = makeStyles({
    sho: {'& label': { fontSize: '20px', color:'rgb(36 50 97)' }},
});

const AssetCategoryTitle = ({ record }) => {
    return <span> {record ? `"${record.AssetCategoryName}"` : ''}</span>;
};

const ShowActions = ({ basePath, data, resource }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
        <EditButton basePath={basePath} record={data}/>
    </TopToolbar>
);

const AssetCategoryActions = ({ basePath, data }, props) => (
    <TopToolbar>
        <AddAssetCategoryButton record={data}/>
        <ExportButton label="خروجی" basePath={basePath} />
        <ImportButton label="ورودی" resource="PMWorks/AssetCategory" {...props} {...importOptions}/>
    </TopToolbar>
);

const AssetClassActions = ({ basePath, data }, props) => (
    <TopToolbar>
        <AddAssetClassAssetClassButton record={data}/>
        <ExportButton label="خروجی" basePath={basePath} />
        <ImportButton label="ورودی" resource="PMWorks/AssetClass" {...props} {...importOptions}/>
    </TopToolbar>
);

const AssetCategoryShow = (props) => {

    const {
        record
    } = useShowController(props);

    const classes = useStyles();

    return(
    <Show actions={<ShowActions />} title={<AssetCategoryTitle />} {...props}>
        <TabbedShowLayout>
            <Tab label="مشخصات">
                <TextField className={classes.sho} label="کد گروه خانواده تجهیز" textAlgin="right" source="AssetCategoryCode" />
                <TextField className={classes.sho} label="نام گروه خانواده تجهیز" textAlgin="right" source="AssetCategoryName" />
            </Tab>
            <Tab label="زیر گروه خانواده تجهیز" path="PMWorks/AssetCategory">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/AssetCategory"
                    target="AssetClassFather"
                    filter={{ AssetClassFather: record.id }}
                >
                    <List empty={false} exporter={exporterAssetCategory} filters={<AssetCategoryFilter />} actions={<AssetCategoryActions data={record}/>}>
                        <Datagrid>
                            <TextField label="کد گروه خانواده تجهیز" textAlgin="right" source="AssetCategoryCode" />
                            <TextField label="نام گروه خانواده تجهیز" textAlgin="right" source="AssetCategoryName" />
                        </Datagrid>
                    </List>
                </ReferenceManyField>
            </Tab>
            <Tab label="زیر خانواده تجهیز" path="PMWorks/AssetClass">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/AssetClass"
                    target="AssetCategoryID"
                    filter={{ AssetCategoryID: record.id }}
                >
                    <List empty={false} exporter={exporterAssetClass} filters={<AssetClassFilter />} actions={<AssetClassActions data={record}/>}>
                        <Datagrid>
                            <TextField label="کد خانواده تجهیز" textAlgin="right" source="AssetClassCode" />
                            <TextField label="نام خانواده تجهیز" textAlgin="right" source="AssetClassName" />
                        </Datagrid>
                    </List>
                </ReferenceManyField>
            </Tab>
            </TabbedShowLayout>
    </Show>
);
    };

export default AssetCategoryShow;
