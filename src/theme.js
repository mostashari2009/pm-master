import { defaultTheme } from 'react-admin';
import merge from 'lodash/merge';
import { createMuiTheme } from '@material-ui/core/styles';
const Theme = createMuiTheme({
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
    typography: {
        // Use the system font instead of the default Roboto font.
        fontFamily: ['B Nazanin','-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Arial', 'sans-serif'].join(','),
        
    }, 
   
});
 export default Theme;