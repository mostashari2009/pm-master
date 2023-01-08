import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Filter,
    TextInput
}
from 'react-admin';

const useStyles = makeStyles({
    form: {
        alignItems: "center",
        marginTop: "4px",
        marginBottom: "4px",
        "& .MuiFilledInput-root": {
          //position: "relative",
          border: "2px solid #D9D9D9",
          background: "#fff",
          fontWeight: "300",
          fontSize: "./1rem",
          color: "rgb(69, 90, 100)",
          borderStartStartRadius: "15px",
          borderStartEndRadius: "15px",
          borderBottomLeftRadius: "15px",
          borderBottomRightRadius: "15px",
          hight:"40px",
        },
       "& .MuiFormControl-marginDense":{
        width:"220px",
       },
        "& .MuiInputLabel-formControl": {
          left: "auto",
          color: "#0863cc",
        },
        "& .MuiInputLabel-shrink ": {
          transform: "translate(30%, -7px ) scale(0.75) !important;",
          background: "#fff",
          color: "#0863cc",
          paddingRight: "3px",
        },
        "& .MuiFilledInput-underline:before": {
          position: "absolute",
          transform: "scaleX(0)",
        },
        "& .MuiFilledInput-underline:after": {
          content: "",
          position: "absolute",
          transform: "scaleX(0)",
        },
      },
    width: { width: '200px !important' }
});

const WOAssetSubdivisionFilter = (props) => {
    const classes = useStyles();
    return (
    <Filter className={classes.form} {...props}>
        <TextInput className={classes.width} label="کد تجهیز" textAlgin="right" source="AssetSubdivisionID__AssetCode__icontains" alwaysOn resettable/>
        <TextInput className={classes.width} label="عنوان تجهیز" textAlgin="right" source="AssetSubdivisionID__AssetName__icontains" alwaysOn resettable/>
        <TextInput className={classes.width} label="خانواده تجهیز" source="AssetSubdivisionID__AssetClassNameChain__icontains" alwaysOn resettable/>
        <TextInput className={classes.width} label="مکان" textAlgin="right" source="AssetSubdivisionID__AssetID__LocationID__LocationNameChain__icontains" alwaysOn resettable/>
    </Filter>
);
};


export default WOAssetSubdivisionFilter;
