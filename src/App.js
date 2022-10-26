import * as React from "react";
import { fetchUtils, Admin, Resource, Layout  } from 'react-admin';

import { AssetcategoryEdit, AssetcategoryCreate } from './AssetCategory/assetcategory';
import AssetcategoryList from './AssetCategory/loctree';
import AssetCategoryShow from './AssetCategory/AssetCategoryShow';

import { SpecificDataList, SpecificDataEdit, SpecificDataCreate, SpecificDataShow } from './SpecificData/specificdata';
import { reducer as tree } from 'ra-tree-ui-materialui';

import myDataProvider from './dataProvider';
import drfProvider, { tokenAuthProvider, fetchJsonWithAuthToken, jwtTokenAuthProvider, fetchJsonWithAuthJWTToken } from 'ra-data-django-rest-framework';
import Dashboard from './Dashboard';
import NotFound from './NotFound';
import MyAppBar from './MyAppBar';

import MyLoginPage from './MyLoginPage';
//import authProvider from './authProvider';
//import MyLayout  from './Layout'
import TreeMenu from '@bb-tech/ra-treemenu';

import { createMuiTheme } from '@material-ui/core/styles';

import farsiMessages from 'ra-language-farsi';
import polyglotI18nProvider from 'ra-i18n-polyglot';

import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import ListIcon from '@material-ui/icons/List';
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';
import PeopleOutlinedIcon from '@material-ui/icons/PeopleOutlined';
import EditLocationOutlinedIcon from '@material-ui/icons/EditLocationOutlined';
import SettingsInputSvideoOutlinedIcon from '@material-ui/icons/SettingsInputSvideoOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import SettingsInputComponentOutlinedIcon from '@material-ui/icons/SettingsInputComponentOutlined';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import ArrowLeftOutlinedIcon from '@material-ui/icons/ArrowLeftOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';

import AssetClassSubdivisionList from './AssetClassSubdivision/AssetClassSubdivisionList';
import AssetClassSubdivisionCreate from './AssetClassSubdivision/AssetClassSubdivisionCreate';
import AssetClassSubdivisionEdit from './AssetClassSubdivision/AssetClassSubdivisionEdit';
import AssetClassSubdivisionShow from './AssetClassSubdivision/AssetClassSubdivisionShow';

import AssetClassSpecificDataList from './AssetClassSpecificData/AssetClassSpecificDataList';
import AssetClassSpecificDataCreate from './AssetClassSpecificData/AssetClassSpecificDataCreate';
import AssetClassSpecificDataEdit from './AssetClassSpecificData/AssetClassSpecificDataEdit';
import AssetClassSpecificDataShow from './AssetClassSpecificData/AssetClassSpecificDataShow';

import FailureModeList from './FailureMode/FailureModeList';
import FailureModeCreate from './FailureMode/FailureModeCreate';
import FailureModeEdit from './FailureMode/FailureModeEdit';
import FailureModeShow from './FailureMode/FailureModeShow';

import FailureCauseList from './FailureCause/FailureCauseList';
import FailureCauseCreate from './FailureCause/FailureCauseCreate';
import FailureCauseEdit from './FailureCause/FailureCauseEdit';
import FailureCauseShow from './FailureCause/FailureCauseShow';

import AssetClassList from './AssetClass/AssetClassList';
import AssetClassCreate from './AssetClass/AssetClassCreate';
import AssetClassEdit from './AssetClass/AssetClassEdit';
import AssetClassShow from './AssetClass/AssetClassShow';

import LocationList from './Location/LocationList';
import LocationCreate from './Location/LocationCreate';
import LocationEdit from './Location/LocationEdit';
import LocationShow from './Location/LocationShow';

import AssetPriorityList from './AssetPriority/AssetPriorityList';
import AssetPriorityCreate from './AssetPriority/AssetPriorityCreate';
import AssetPriorityEdit from './AssetPriority/AssetPriorityEdit';
import AssetPriorityShow from './AssetPriority/AssetPriorityShow';

import DocumentList from './Document/DocumentList';
import DocumentCreate from './Document/DocumentCreate';
import DocumentEdit from './Document/DocumentEdit';
import DocumentShow from './Document/DocumentShow';

import AssetClassDocumentList from './AssetClassDocument/AssetClassDocumentList';
import AssetClassDocumentCreate from './AssetClassDocument/AssetClassDocumentCreate';
import AssetClassDocumentEdit from './AssetClassDocument/AssetClassDocumentEdit';
import AssetClassDocumentShow from './AssetClassDocument/AssetClassDocumentShow';

import SparePartDimensionList from './SparePartDimension/SparePartDimensionList';
import SparePartDimensionCreate from './SparePartDimension/SparePartDimensionCreate';
import SparePartDimensionEdit from './SparePartDimension/SparePartDimensionEdit';
import SparePartDimensionShow from './SparePartDimension/SparePartDimensionShow';

import SparePartCategoryList from './SparePartCategory/SparePartCategoryList';
import SparePartCategoryCreate from './SparePartCategory/SparePartCategoryCreate';
import SparePartCategoryEdit from './SparePartCategory/SparePartCategoryEdit';
import SparePartCategoryShow from './SparePartCategory/SparePartCategoryShow';

import SparePartList from './SparePart/SparePartList';
import SparePartCreate from './SparePart/SparePartCreate';
import SparePartEdit from './SparePart/SparePartEdit';
import SparePartShow from './SparePart/SparePartShow';

import AssetList from './Asset/AssetList';
import AssetCreate from './Asset/AssetCreate';
import AssetEdit from './Asset/AssetEdit';
import AssetShow from './Asset/AssetShow';

import AssetSubdivisionList from './AssetSubdivision/AssetSubdivisionList';
import AssetSubdivisionEdit from './AssetSubdivision/AssetSubdivisionEdit';
import AssetSubdivisionShow from './AssetSubdivision/AssetSubdivisionShow';

import AssetSpecificDataList from './AssetSpecificData/AssetSpecificDataList';
import AssetSpecificDataEdit from './AssetSpecificData/AssetSpecificDataEdit';
import AssetSpecificDataShow from './AssetSpecificData/AssetSpecificDataShow';

import AssetSubdivisionSparePartList from './AssetSubdivisionSparePart/AssetSubdivisionSparePartList';
import AssetSubdivisionSparePartCreate from './AssetSubdivisionSparePart/AssetSubdivisionSparePartCreate';
import AssetSubdivisionSparePartEdit from './AssetSubdivisionSparePart/AssetSubdivisionSparePartEdit';
import AssetSubdivisionSparePartShow from './AssetSubdivisionSparePart/AssetSubdivisionSparePartShow';

import TaskTypeList from './TaskType/TaskTypeList';
import TaskTypeCreate from './TaskType/TaskTypeCreate';
import TaskTypeEdit from './TaskType/TaskTypeEdit';
import TaskTypeShow from './TaskType/TaskTypeShow';

import JobCategoryList from './JobCategory/JobCategoryList';
import JobCategoryCreate from './JobCategory/JobCategoryCreate';
import JobCategoryEdit from './JobCategory/JobCategoryEdit';
import JobCategoryShow from './JobCategory/JobCategoryShow';

import DepartmentList from './Department/DepartmentList';
import DepartmentCreate from './Department/DepartmentCreate';
import DepartmentEdit from './Department/DepartmentEdit';
import DepartmentShow from './Department/DepartmentShow';

import PersonnelList from './Personnel/PersonnelList';
import PersonnelCreate from './Personnel/PersonnelCreate';
import PersonnelEdit from './Personnel/PersonnelEdit';
import PersonnelShow from './Personnel/PersonnelShow';

import PersonnelJobCategoryList from './PersonnelJobCategory/PersonnelJobCategoryList';
import PersonnelJobCategoryCreate from './PersonnelJobCategory/PersonnelJobCategoryCreate';
import PersonnelJobCategoryEdit from './PersonnelJobCategory/PersonnelJobCategoryEdit';
import PersonnelJobCategoryShow from './PersonnelJobCategory/PersonnelJobCategoryShow';

import TypeWrList from './TypeWr/TypeWrList';
import TypeWrCreate from './TypeWr/TypeWrCreate';
import TypeWrEdit from './TypeWr/TypeWrEdit';
import TypeWrShow from './TypeWr/TypeWrShow';

import DelayList from './Delay/DelayList';
import DelayCreate from './Delay/DelayCreate';
import DelayEdit from './Delay/DelayEdit';
import DelayShow from './Delay/DelayShow';

import WorkPriorityList from './WorkPriority/WorkPriorityList';
import WorkPriorityCreate from './WorkPriority/WorkPriorityCreate';
import WorkPriorityEdit from './WorkPriority/WorkPriorityEdit';
import WorkPriorityShow from './WorkPriority/WorkPriorityShow';

import SupplierList from './Supplier/SupplierList';
import SupplierCreate from './Supplier/SupplierCreate';
import SupplierEdit from './Supplier/SupplierEdit';
import SupplierShow from './Supplier/SupplierShow';

import SupplierSpecificList from './SupplierSpecific/SupplierSpecificList';
import SupplierSpecificCreate from './SupplierSpecific/SupplierSpecificCreate';
import SupplierSpecificEdit from './SupplierSpecific/SupplierSpecificEdit';
import SupplierSpecificShow from './SupplierSpecific/SupplierSpecificShow';

import SupplierSpecificDataList from './SupplierSpecificData/SupplierSpecificDataList';
import SupplierSpecificDataCreate from './SupplierSpecificData/SupplierSpecificDataCreate';
import SupplierSpecificDataEdit from './SupplierSpecificData/SupplierSpecificDataEdit';
import SupplierSpecificDataShow from './SupplierSpecificData/SupplierSpecificDataShow';

import AssetClassTaskList from './AssetClassTask/AssetClassTaskList';
import AssetClassTaskCreate from './AssetClassTask/AssetClassTaskCreate';
import AssetClassTaskEdit from './AssetClassTask/AssetClassTaskEdit';
import AssetClassTaskShow from './AssetClassTask/AssetClassTaskShow';
import AssetClassTaskAddCreate from './AssetClassTask/AssetClassTaskAddCreate';

import WorkRequestList from './WorkRequest/wrl';
//import WorkRequestList from './WorkRequest/WorkRequestList';
import {WorkRequestCreate} from './WorkRequest/WorkRequestCreate';
import WorkRequestEdit from './WorkRequest/WorkRequestEdit';
import WorkRequestShow from './WorkRequest/WorkRequestShow';

import WOSupplierList from './WOSupplier/WOSupplierList';
import WOSupplierCreate from './WOSupplier/WOSupplierCreate';
import WOSupplierEdit from './WOSupplier/WOSupplierEdit';
import WOSupplierShow from './WOSupplier/WOSupplierShow';

import WOPersonnelList from './WOPersonnel/WOPersonnelList';
import WOPersonnelCreate from './WOPersonnel/WOPersonnelCreate';
import WOPersonnelEdit from './WOPersonnel/WOPersonnelEdit';
import WOPersonnelShow from './WOPersonnel/WOPersonnelShow';

import WODelayList from './WODelay/WODelayList';
import WODelayCreate from './WODelay/WODelayCreate';
import WODelayEdit from './WODelay/WODelayEdit';
import WODelayShow from './WODelay/WODelayShow';

import WOSparePartList from './WOSparePart/WOSparePartList';
import WOSparePartCreate from './WOSparePart/WOSparePartCreate';
import WOSparePartEdit from './WOSparePart/WOSparePartEdit';
import WOSparePartShow from './WOSparePart/WOSparePartShow';

import WOTaskList from './WOTask/WOTaskList';
import WOTaskCreate from './WOTask/WOTaskCreate';
import WOTaskEdit from './WOTask/WOTaskEdit';
import WOTaskShow from './WOTask/WOTaskShow';

import WorkOrderList from './WorkOrder/wol';
//import WorkOrderList from './WorkOrder/WorkOrderList';
import WorkOrderCreate from './WorkOrder/WorkOrderCreate';
import WorkOrderEdit from './WorkOrder/WorkOrderEdit';
import WorkOrderShow from './WorkOrder/WorkOrderShow';

import WorkRequestFailureCauseList from './WorkRequestFailureCause/WorkRequestFailureCauseList';
import WorkRequestFailureCauseCreate from './WorkRequestFailureCause/WorkRequestFailureCauseCreate';
import WorkRequestFailureCauseEdit from './WorkRequestFailureCause/WorkRequestFailureCauseEdit';
import WorkRequestFailureCauseShow from './WorkRequestFailureCause/WorkRequestFailureCauseShow';

import WOTemplateList from './WOTemplate/WOTemplateList';
import WOTemplateCreate from './WOTemplate/WOTemplateCreate';
import WOTemplateEdit from './WOTemplate/WOTemplateEdit';
import WOTemplateShow from './WOTemplate/WOTemplateShow';

import WOTemplateTypeList from './WOTemplateType/WOTemplateTypeList';
import WOTemplateTypeCreate from './WOTemplateType/WOTemplateTypeCreate';
import WOTemplateTypeEdit from './WOTemplateType/WOTemplateTypeEdit';
import WOTemplateTypeShow from './WOTemplateType/WOTemplateTypeShow';

import WOTemplateSchualingList from './WOTemplateSchualing/WOTemplateSchualingList';
import WOTemplateSchualingCreate from './WOTemplateSchualing/WOTemplateSchualingCreate';
import WOTemplateSchualingEdit from './WOTemplateSchualing/WOTemplateSchualingEdit';
import WOTemplateSchualingShow from './WOTemplateSchualing/WOTemplateSchualingShow';

import UserList from './User/UserList';
import UserCreate from './User/UserCreate';
import UserEdit from './User/UserEdit';
import UserShow from './User/UserShow';

import WRStatusCreate from './WRStatus/WRStatusCreate';

import WOStatusCreate from './WOStatus/WOStatusCreate';

import WOTemplateActivityCreate from './WOTemplateActivity/WOTemplateActivityCreate';

import WOTemplateAssetCreate from './WOTemplateAsset/WOTemplateAssetCreate';

import customRoutes from './customRoutes';


const messages = {
    'fa': farsiMessages,
};

//customRoutes={customRoutes} loginPage={MyLoginPage} authProvider={authProvider} dataProvider={myDataProvider} dataProvider={drfProvider(http://185.231.115.209:8080'http://127.0.0.1:8000')}

const theme = createMuiTheme({
    palette: {
    primary: {
      main: '#243261',
    },
    secondary: {
      main: '#243261',
    },
  },
    overrides: {
        MuiDrawer: {
            docked: {
                backgroundColor: '#FFFFFF !important',
                boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
            },
            paperAnchorLeft:{
               left: 'auto',
               right: '0',
            },
            paperAnchorRight:{
                right: 'auto',
                left: '0',
            },
        },
        RaAppBar:{
            toolbar:{
                    paddingRight: '0px'
            },
            menuButton:{
                    marginRight: '5px'
            },
        },
        MuiTypography:{
            root:{
                textAlign: "right !important",
                fontFamily: ' !important',
            },
            h6:{
               fontFamily: ' !important',
            },
            body1:{
                fontFamily: ' !important',
            },
            body2:{
                textAlign: "right !important",
                fontFamily: ' !important',
            },
            subtitle1:{
                fontFamily: ' !important',
            },
        },
        MuiTableCell:{
            root:{
                textAlign: "right",
                fontFamily: ' !important',
            },
            sizeSmall:{
                "&:last-child": {
                    paddingRight: '10px'
                  },
            },
        },
        MuiFormLabel:{
            root:{
                fontFamily: ' !important',
            },
        },
        MuiMenuItem:{
            root:{
               fontFamily: ' !important',
            },
        },
        MuiInputLabel:{
            marginDense:{
                transform: "translate(10%, 17px) scale(1) !important",
                right: '25px',
            },
            shrink:{
                transform: "translate(35%, 7px) scale(0.75) !important",
            },
            root:{
               fontFamily: ' !important',
            },
        },
        MuiSelect:{
            iconFilled:{
                right: '85%',
            },
        },
        MuiButton:{
            root:{
                fontFamily: ' !important',
                padding: '5px 0px',
            },
            textSizeSmall:{
                padding: '2px 0px',
                fontFamily: 'inherit',
            },
            containedPrimary:{
                fontFamily: 'inherit',
            },
        },
        MuiTablePagination:{
            root:{
                textAlign: "right !important",
            },
            caption:{
                textAlign: "right !important",
            },
        },
        RaButton:{
            label:{
                fontFamily: '!important',
            },
        },
        ReselectInput:{
            input:{
                minWidth: '256px',
            },
        },
        MuiInputBase:{
            root:{
                fontFamily: ' !important',
            },
        },
        MuiFormControl:{
            marginDense:{
                marginRight: '20px'
            },
        },
        MuiTab:{
            root:{
                fontFamily: ' !important',
            },
            fullWidth:{
                fontFamily: 'inherit',
            },
            wrapper:{
                fontFamily: 'system-ui',
            },
        },
        MuiPickerModal:{
                dialogRoot:{
                    direction: 'ltr'
                },
        },
        MuiPickersTimePickerToolbar:{
            hourMinuteLabel:{
                direction: 'ltr'
            },
        },
        MuiSwitch: {
            switchBase: {
                // Controls default (unchecked) color for the thumb
                color: "#243261"
            },
            colorSecondary: {
              "&$checked": {
                // Controls checked color for the thumb
                color: "#243261",
              }
            },
            track: {
              // Controls default (unchecked) color for the track
              backgroundColor: "#243261",
              "$checked$checked + &": {
                // Controls checked color for the track
                opacity: 0.2,
                backgroundColor: "#243261"
              }
            },
        },
        RaTabbedShowLayout:{
            content:{
                paddingTop: '0px',
                paddingRight: '0px',
                paddingLeft: '0px',
            },
        },
        RaLabeled:{
            value:{
                fontFamily: ' !important',
            },
        },
        MuiDialog:{
            paperWidthSm:{
                maxWidth: '868px',
            },
        },
        RaMenuItemLink:{
            active:{
                backgroundColor: 'ghostwhite',
            },
        },
        RaBulkActionsToolbar:{
            icon:{
                marginLeft: '2em',
                marginRight: '-0.75em',
            },
        },
        MuiGrid:{
            "grid-xs-6":{
                direction: 'rtl',
            },
        },
    },
});

const i18nProvider = polyglotI18nProvider(locale => messages[locale], 'fa');
let authProvider = jwtTokenAuthProvider({obtainAuthTokenUrl: "http://185.231.115.209:8080/PMWorks/token/"});

const App = () => (
    <Admin disableTelemetry theme={theme} layout={(props) => <Layout {...props} menu={TreeMenu} appBar={MyAppBar} />} customReducers={{ tree }} catchAll={NotFound} dashboard={Dashboard} title="PMWorks_II" authProvider={authProvider} dataProvider={myDataProvider} i18nProvider={i18nProvider} >
        <Resource name="modiriat" icon={AddBoxOutlinedIcon} options={{ "label": "پنل کاربری", "isMenuParent": true }} />
        <Resource name="barnamenet" icon={EventAvailableOutlinedIcon} options={{ "label": "برنامه‌ریزی", "isMenuParent": true }} />
        <Resource name="gozaresh" icon={AssessmentOutlinedIcon} options={{ "label": "گزارش و شاخص‌", "isMenuParent": true }} />
        <Resource name="tajhiz" icon={SettingsInputComponentOutlinedIcon} options={{ "label": "مدیریت تجهیزات", "isMenuParent": true }} />
        <Resource name="yadak" icon={SettingsInputSvideoOutlinedIcon} options={{ "label": "قطعات یدکی", "isMenuParent": true }} />
        <Resource name="standard" icon={AssignmentOutlinedIcon} options={{ "label": "استانداردسازی", "isMenuParent": true }} />
        <Resource name="fani" icon={ArchiveOutlinedIcon} options={{ "label": "آرشیو فنی", "isMenuParent": true }} />
        <Resource name="makan" icon={EditLocationOutlinedIcon} options={{ "label": "مدیریت مکان", "isMenuParent": true }} />
        <Resource name="dast" icon={PersonAddOutlinedIcon} options={{ "label": "دسترسی", "isMenuParent": true }} />
        <Resource name="niro" icon={PermIdentityOutlinedIcon} options={{ "label": "نیروی انسانی", "isMenuParent": true }} />
        <Resource name="tamin" icon={PeopleOutlinedIcon} options={{ "label": "تامین‌کنندگان", "isMenuParent": true }} />
        <Resource name="hazine" icon={MonetizationOnOutlinedIcon} options={{ "label": "هزینه‌ نت", "isMenuParent": true }} />
        <Resource name="paye" icon={SettingsOutlinedIcon} options={{ "label": "تنظیمات پایه", "isMenuParent": true }} />
        <Resource name="PMWorks/AssetClass" icon={ArrowLeftOutlinedIcon} options={{ label: 'خانواده تجهیز', "menuParent": "standard" }} list={AssetClassList} edit={AssetClassEdit} create={AssetClassCreate} show={AssetClassShow}/>
        <Resource name="PMWorks/AssetCategory" icon={ArrowLeftOutlinedIcon} options={{ label: 'گروه خانواده تجهیز', "menuParent": "standard" }} list={AssetcategoryList} edit={AssetcategoryEdit} create={AssetcategoryCreate} show={AssetCategoryShow} />
        <Resource name="PMWorks/SpecificData" icon={ArrowLeftOutlinedIcon} options={{ label: 'ویژگی‌ خانواده تجهیز', "menuParent": "standard"}} list={SpecificDataList} edit={SpecificDataEdit} create={SpecificDataCreate} show={SpecificDataShow}/>
        <Resource name="PMWorks/TaskType" icon={ArrowLeftOutlinedIcon} options={{ label: 'انواع فعالیت', "menuParent": "standard"}} list={TaskTypeList} edit={TaskTypeEdit} create={TaskTypeCreate} show={TaskTypeShow}/>
        <Resource name="PMWorks/AssetClassSpecificData"  options={{ "label": "داده‌های ویژه" }} edit={AssetClassSpecificDataEdit} create={AssetClassSpecificDataCreate} show={AssetClassSpecificDataShow} />
        <Resource name="PMWorks/FailureMode" icon={ArrowLeftOutlinedIcon} options={{ label: 'نوع خرابی', "menuParent": "paye" }} edit={FailureModeEdit} create={FailureModeCreate} show={FailureModeShow} />
        <Resource name="PMWorks/FailureCause" icon={ArrowLeftOutlinedIcon} options={{ label: 'علت خرابی', "menuParent": "paye" }} edit={FailureCauseEdit} create={FailureCauseCreate} show={FailureCauseShow} />
        <Resource name="PMWorks/AssetClassSubdivision" options={{ "label": "درخت خانواده تجهیز" }} edit={AssetClassSubdivisionEdit} create={AssetClassSubdivisionCreate} show={AssetClassSubdivisionShow} />
        <Resource name="PMWorks/Location" icon={ArrowLeftOutlinedIcon} options={{ label: 'مکان ها', "menuParent": "makan"}} list={LocationList} edit={LocationEdit} create={LocationCreate} show={LocationShow}/>
        <Resource name="PMWorks/Document" icon={ArrowLeftOutlinedIcon} options={{ label: 'فایل ها', "menuParent": "paye"}} list={DocumentList} edit={DocumentEdit} create={DocumentCreate} show={DocumentShow}/>
        <Resource name="PMWorks/AssetClassDocument" icon={ArrowLeftOutlinedIcon} options={{ label: 'آرشیو فنی'}} edit={AssetClassDocumentEdit} create={AssetClassDocumentCreate} show={AssetClassDocumentShow}/>
        <Resource name="PMWorks/Asset" icon={ArrowLeftOutlinedIcon} options={{ label: 'تجهیزات فرعی'}} edit={AssetEdit} create={AssetCreate} show={AssetShow}/>
        <Resource name="PMWorks/AssetSubdivision" icon={ArrowLeftOutlinedIcon} options={{ label: 'تجهیزات', "menuParent": "tajhiz" }} list={AssetSubdivisionList} edit={AssetSubdivisionEdit} show={AssetSubdivisionShow}/>
        <Resource name="PMWorks/AssetPriority" icon={ArrowLeftOutlinedIcon} options={{ label: 'اولویت‌بندی تجهیزات', "menuParent": "tajhiz" }} list={AssetPriorityList} edit={AssetPriorityEdit} create={AssetPriorityCreate} show={AssetPriorityShow}/>
        <Resource name="PMWorks/AssetSpecificData" icon={ArrowLeftOutlinedIcon} options={{ label: 'ویژگی تجهیزات'}} edit={AssetSpecificDataEdit} show={AssetSpecificDataShow}/>
        <Resource name="PMWorks/AssetSubdivisionSparePart" icon={ArrowLeftOutlinedIcon} options={{ label: 'قطعات تجهیز'}} edit={AssetSubdivisionSparePartEdit} create={AssetSubdivisionSparePartCreate} show={AssetSubdivisionSparePartShow}/>
        <Resource name="PMWorks/SparePartDimension" icon={ArrowLeftOutlinedIcon} options={{ label: 'واحد اندازه‌گیری', "menuParent": "yadak"}} list={SparePartDimensionList} edit={SparePartDimensionEdit} create={SparePartDimensionCreate} show={SparePartDimensionShow}/>
        <Resource name="PMWorks/SparePartCategory" icon={ArrowLeftOutlinedIcon} options={{ label: 'خانواده قطعات', "menuParent": "yadak"}} list={SparePartCategoryList} edit={SparePartCategoryEdit} create={SparePartCategoryCreate} show={SparePartCategoryShow}/>
        <Resource name="PMWorks/SparePart" icon={ArrowLeftOutlinedIcon} options={{ label: 'قطعات یدکی', "menuParent": "yadak" }} list={SparePartList} edit={SparePartEdit} create={SparePartCreate} show={SparePartShow}/>
        <Resource name="PMWorks/Personnel" icon={ArrowLeftOutlinedIcon} options={{ label: 'نیروی انسانی', "menuParent": "niro"}} list={PersonnelList} edit={PersonnelEdit} create={PersonnelCreate} show={PersonnelShow}/>
        <Resource name="PMWorks/JobCategory" icon={ArrowLeftOutlinedIcon} options={{ label: 'تخصص', "menuParent": "niro"}} list={JobCategoryList} edit={JobCategoryEdit} create={JobCategoryCreate} show={JobCategoryShow}/>
        <Resource name="PMWorks/Department" icon={ArrowLeftOutlinedIcon} options={{ label: 'دپارتمان', "menuParent": "niro"}} list={DepartmentList} edit={DepartmentEdit} create={DepartmentCreate} show={DepartmentShow}/>
        <Resource name="PMWorks/PersonnelJobCategory" icon={ArrowLeftOutlinedIcon} options={{ label: 'شغل پرسنل'}} edit={PersonnelJobCategoryEdit} create={PersonnelJobCategoryCreate} show={PersonnelJobCategoryShow}/>
        <Resource name="PMWorks/TypeWr" icon={ArrowLeftOutlinedIcon} options={{ label: 'انواع درخواست کار', "menuParent": "paye"}} list={TypeWrList} edit={TypeWrEdit} create={TypeWrCreate} show={TypeWrShow}/>
        <Resource name="PMWorks/Delay" icon={ArrowLeftOutlinedIcon} options={{ label: 'تاخیرات', "menuParent": "paye"}} list={DelayList} edit={DelayEdit} create={DelayCreate} show={DelayShow}/>
        <Resource name="PMWorks/WorkPriority" icon={ArrowLeftOutlinedIcon} options={{ label: 'اولویت درخواست کار', "menuParent": "paye"}} list={WorkPriorityList} edit={WorkPriorityEdit} create={WorkPriorityCreate} show={WorkPriorityShow}/>
        <Resource name="PMWorks/Supplier" icon={ArrowLeftOutlinedIcon} options={{ label: 'تامین کنندگان', "menuParent": "tamin"}} list={SupplierList} edit={SupplierEdit} create={SupplierCreate} show={SupplierShow}/>
        <Resource name="PMWorks/SupplierSpecific" icon={ArrowLeftOutlinedIcon} options={{ label: 'ویژگی تامین کنندگان', "menuParent": "tamin"}} list={SupplierSpecificList} edit={SupplierSpecificEdit} create={SupplierSpecificCreate} show={SupplierSpecificShow}/>
        <Resource name="PMWorks/SupplierSpecificData" icon={ArrowLeftOutlinedIcon} options={{ label: 'ویژگی های تامین کنندگان'}} edit={SupplierSpecificDataEdit} create={SupplierSpecificDataCreate} show={SupplierSpecificDataShow}/>
        <Resource name="PMWorks/AssetClassTask" icon={ArrowLeftOutlinedIcon} options={{ label: 'فعالیت ها'}} edit={AssetClassTaskEdit} create={AssetClassTaskCreate} show={AssetClassTaskShow}/>
        <Resource name="PMWorks/AssetClassTaskAdd" icon={ArrowLeftOutlinedIcon} options={{ label: 'فعالیت های فرعی'}} create={AssetClassTaskAddCreate} />
        <Resource name="PMWorks/WorkRequest" icon={ArrowLeftOutlinedIcon} options={{ label: 'درخواست کار', "menuParent": "modiriat" }} list={WorkRequestList} edit={WorkRequestEdit} create={WorkRequestCreate} show={WorkRequestShow} />
        <Resource name="PMWorks/WorkOrder" icon={ArrowLeftOutlinedIcon} options={{ label: 'دستور کار', "menuParent": "modiriat" }} list={WorkOrderList} edit={WorkOrderEdit} show={WorkOrderShow} />
        <Resource name="PMWorks/WOSupplier" icon={ArrowLeftOutlinedIcon} options={{ label: 'تامین کننده دستور کارها'}} edit={WOSupplierEdit} create={WOSupplierCreate} show={WOSupplierShow}/>
        <Resource name="PMWorks/WOPersonnel" icon={ArrowLeftOutlinedIcon} options={{ label: 'پرسنل دستور کارها'}} edit={WOPersonnelEdit} create={WOPersonnelCreate} show={WOPersonnelShow}/>
        <Resource name="PMWorks/WODelay" icon={ArrowLeftOutlinedIcon} options={{ label: 'تاخیرات دستور کارها'}} edit={WODelayEdit} create={WODelayCreate} show={WODelayShow}/>
        <Resource name="PMWorks/WOSparePart" icon={ArrowLeftOutlinedIcon} options={{ label: 'قطعات دستور کارها'}} edit={WOSparePartEdit} create={WOSparePartCreate} show={WOSparePartShow}/>
        <Resource name="PMWorks/WOTask" icon={ArrowLeftOutlinedIcon} options={{ label: 'وظایف دستور کارها'}} edit={WOTaskEdit} create={WOTaskCreate} show={WOTaskShow}/>
        <Resource name="PMWorks/WorkRequestFailureCause" icon={ArrowLeftOutlinedIcon} options={{ label: 'علت خرابی دستورکار'}} edit={WorkRequestFailureCauseEdit} create={WorkRequestFailureCauseCreate} show={WorkRequestFailureCauseShow}/>
        <Resource name="PMWorks/FailureAsset" />
        <Resource name="PMWorks/WRCause" />
        <Resource name="PMWorks/WRSpare" />
        <Resource name="PMWorks/WRTask" />
        <Resource name="PMWorks/Frequency" />
        <Resource name="PMWorks/WOTemplate" icon={ArrowLeftOutlinedIcon} options={{ label: 'برنامه‌ریزی دستورکار', "menuParent": "barnamenet" }} list={WOTemplateList} edit={WOTemplateEdit} create={WOTemplateCreate} show={WOTemplateShow}/>
        <Resource name="PMWorks/WOTemplateType" icon={ArrowLeftOutlinedIcon} options={{ label: 'انواع برنامه‌ریزی', "menuParent": "barnamenet" }} list={WOTemplateTypeList} edit={WOTemplateTypeEdit} create={WOTemplateTypeCreate} show={WOTemplateTypeShow}/>
        <Resource name="PMWorks/WOTemplateSchualing" icon={ArrowLeftOutlinedIcon} options={{ label: 'برنامه ریزی'}} edit={WOTemplateSchualingEdit} create={WOTemplateSchualingCreate} show={WOTemplateSchualingShow}/>
        <Resource name="PMWorks/TemplateSchualingDate" />
        <Resource name="PMWorks/TaskTemp" />
        <Resource name="PMWorks/User" icon={ArrowLeftOutlinedIcon} options={{ label: 'کاربران', "menuParent": "dast" }} list={UserList} edit={UserEdit} create={UserCreate} show={UserShow} />
        <Resource name="PMWorks/Status" />
        <Resource name="PMWorks/WRStatus" options={{ label: 'وضعیت'}} create={WRStatusCreate}/>
        <Resource name="PMWorks/WOStatus" options={{ label: 'وضعیت'}} create={WOStatusCreate}/>
        <Resource name="PMWorks/WOTemplateAsset" options={{ label: 'تجهیز برنامه'}} create={WOTemplateAssetCreate}/>
        <Resource name="PMWorks/WOTemplateActivity" options={{ label: 'فعالیت تجهیز برنامه'}} create={WOTemplateActivityCreate}/>
        <Resource name="PMWorks/WRWORelationStatus" />
        <Resource name="PMWorks/WorkflowLevelStatus" />
        <Resource name="PMWorks/WorkflowLevel" />
        <Resource name="PMWorks/AssetSubdivisionTask" />
        <Resource name="PMWorks/WOTemplateActivityNew" />
        <Resource name="PMWorks/WOPersonnelSum" />
        <Resource name="PMWorks/StatusWR" options={{ label: 'وضعیت'}}/>
        <Resource name="PMWorks/StatusWO" options={{ label: 'وضعیت'}}/>
        <Resource name="PMWorks/WorkOrderNew" options={{ label: 'درخواست کار'}} create={WorkOrderCreate} />
        <Resource name="PMWorks/WOAssetSubdivision" options={{ label: 'تجهیزات دستورکار'}}/>
	    <Resource name="PMWorks/WOTaskOrder" icon={ArrowLeftOutlinedIcon} options={{ label: 'فعالیت‌های دستورکار'}} edit={WOTaskEdit} create={WOTaskCreate} show={WOTaskShow}/>
    </Admin>
);

export default App;
