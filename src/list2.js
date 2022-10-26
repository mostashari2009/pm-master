import React, { useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';

import { AuthStoreContext } from 'kamand-web/dist/store/authStore';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import RefreshIcon from '@material-ui/icons/Refresh';
import PrintIcon from '@material-ui/icons/Print';
import CollapseIcon from '@material-ui/icons/ExpandMore';
import ExpandIcon from '@material-ui/icons/ChevronLeft';
import LeafIcon from '@material-ui/icons/StopOutlined';
import DataView from 'kamand-web/dist/components/DataView';
import { AppStoreContext } from 'kamand-web/dist/store/appStore';
import useKamandData, { IDataOptions } from 'kamand-web/dist/hooks/useKamandData';
import { AdapterLink } from 'kamand-web/dist/components/misc';
import { EditDialogHandler } from '../../../lib/EditDialogHandler';
import LocationEntryDialog from "./LocationEntryDialog";
import AssetEntryDialog from "../asset/AssetEntryDialog";


const useStyles = makeStyles({
  root: {
    marginBottom: '45px',
  },
  rowContent: {
    height: 48,
  },
  rowContentAsset: {
    height: 48,
    color : '#ff8011',
  },
  rowRoot: {
    display: 'flex',
    alignItems: 'center',
  },
  spacer: {
    flexGrow: 1,
  },
});

const LocationTree: React.FunctionComponent<IProps> = observer((props) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const appStore = useContext(AppStoreContext);
  const authStore = useContext(AuthStoreContext);
  const orgId = authStore.getOptionData('orgId');

  useEffect(() => {
    appStore.setPageTitle(t('pages.mms.Location'));
    appStore.setOptionData('hideFab', true);
    appStore.hideAppBar(false);
  }, [appStore, t]);

  const dataOptions:IDataOptions = {
    key: 'location',
    query: 'locationList',
    queryParams: {
      orgId,
      root:true,
    },
    publicQuery: false,
  };

  const { queryData, refreshHandler } = useKamandData(dataOptions);

  if(!queryData) return null;

  return (
    <Container fixed className={classes.root}>
      <Divider/>
      <Button component={AdapterLink} to={`/reports/mms/location/locationReport#R`}><PrintIcon/></Button>
      {!queryData.loading && <Button onClick={refreshHandler}><RefreshIcon/></Button>}
      <Divider/>
      {queryData.loading && <CircularProgress/>}
      {queryData.error && <p>error</p>}

      {!queryData.loading && !queryData.error && queryData?.data && (
        <TreeView
          defaultCollapseIcon={<CollapseIcon />}
          defaultExpanded={['root']}
          defaultExpandIcon={<ExpandIcon />}
          // defaultEndIcon={<LeafIcon />}
        >
          {queryData.data.map((td, index) => (
            <LocationNode key={td.id} data={td} refreshHandler={refreshHandler}/>
          ))}
        </TreeView>
      )}
    </Container>
  );

});

interface IProps {
}

export default (LocationTree);

const LocationItem: React.FunctionComponent<{data: any, refreshHandler: (()=>void)}> = ((props) => {
  const classes = useStyles();
  const appStore = useContext(AppStoreContext);
  const { data, refreshHandler } = props;

  const childRefreshHandler = () => {
    appStore.invalidateQueryDataCache(`locationTree.${data.locationId}.${data.id}`);
    // if(data.leaf){
    //   refreshHandler();
    // }
  }

  return (
    <div className={classes.rowRoot}>
      <DataView span label='' value={data.code} format="text" important/>
      &nbsp;-&nbsp;
      <DataView span label='' value={data.name} format="text" important/>
      {/* &nbsp;:&nbsp;<LocationView span label='' id={data.locationId}/> */}
      {data.invalidFrom && <>&nbsp;/&nbsp;<DataView span label='' value={data.invalidFrom} format="timestamp"/></>}
      <div className={classes.spacer}/>
      <EditDialogHandler parent={data} filter={{parentId: data.id}} value='' refreshHandler={childRefreshHandler} EntryDialog={LocationEntryDialog} />
      <EditDialogHandler parent={null} value={data} refreshHandler={refreshHandler} EntryDialog={LocationEntryDialog} />
      <EditDialogHandler parent={data} filter={{locationId:data.id}} value='' refreshHandler={childRefreshHandler} EntryDialog={AssetEntryDialog} />

    </div>
  )
});

const LocationNode: React.FunctionComponent<{data: any, refreshHandler: (()=>void)}> = ((props) => {
  const classes = useStyles();
  const { data, refreshHandler } = props;

  return (
    <TreeItem key={data.id} nodeId={data.id} classes={{content: classes.rowContent}}
      label={<LocationItem data={data} refreshHandler={refreshHandler}/>}>
        <TreeExpander key='load' id={data.id}/>
    </TreeItem>
  );
});

const TreeExpander: React.FunctionComponent<{id: string}> = observer((props) => {
  const { id} = props;
  const authStore = useContext(AuthStoreContext);
  const orgId = authStore.getOptionData('orgId');

  const dataOptions:IDataOptions = {
    key: `locationTree.${id}`,
    query: 'locationTree',
    queryParams: {
      orgId,
      parentId: id,
      rootItem:false,
    },
    publicQuery: false,
  };

  const { queryData, refreshHandler } = useKamandData(dataOptions);

  if(!queryData) {
    return <>...</>;
  }

  return (
    <>
      {queryData.loading && <CircularProgress/>}
      {queryData.error && <p>error</p>}

      {!queryData.loading && !queryData.error && queryData?.data &&
      queryData.data.map((td, index) => (
        (td.type==='location'?<LocationNode key={td.id} data={td}  refreshHandler={refreshHandler}/> :
          <AssetNode key={td.id} data={td}  refreshHandler={refreshHandler}/>)
      ))}
    </>
  )
});


const AssetNode: React.FunctionComponent<{data: any, refreshHandler: (()=>void)}> = ((props) => {
  const classes = useStyles();
  const { data, refreshHandler } = props;

  return (
    <TreeItem key={data.id} nodeId={data.id} classes={{content: classes.rowContentAsset}}
              label={<AssetItem data={data} refreshHandler={refreshHandler} />}>
      {<TreeExpander key='load' id={data.id}/>}
    </TreeItem>
  );
});

const AssetItem: React.FunctionComponent<{data: any, refreshHandler: (()=>void)}> = ((props) => {

  const classes = useStyles();
  const appStore = useContext(AppStoreContext);
  const { data, refreshHandler } = props;

  const childRefreshHandler = () => {
    appStore.invalidateQueryDataCache(`assetTree.${data.id}`);
    if(data.leaf)
    {
      refreshHandler();
    }
  }

  return (
    <div className={classes.rowRoot}>
      <DataView span label='' value={data.code} format="text" important/>
      &nbsp;-&nbsp;
      <DataView span label='' value={data.name} format="text" important/>
      {/* &nbsp;:&nbsp;<AuxCatView span label='' id={data.auxCatId}/> */}
      {data.invalidFrom && <>&nbsp;/&nbsp;<DataView span label='' value={data.invalidFrom} format="timestamp"/></>}
      <div className={classes.spacer}/>
      {/*<EditDialogHandler parent={data} filter={{goodsCatId: data.id}} value='' refreshHandler={goodsRefreshHandler} EntryDialog={GoodsEntryDialog} />*/}
      {/*<EditDialogHandler parent={data} filter={{parentId: data.id}} value='' refreshHandler={childRefreshHandler} EntryDialog={GoodsCatEntryDialog} />*/}
      <EditDialogHandler parent={data} filter={{locationId:data.parentId}} value='' refreshHandler={childRefreshHandler} EntryDialog={AssetEntryDialog} />
      <EditDialogHandler parent={null} value={data} refreshHandler={refreshHandler} EntryDialog={AssetEntryDialog} />
    </div>
  )
});
