import React, { useState , useCallback} from "react";
import jMoment from "moment-jalaali";
import { useInput, FieldTitle } from "ra-core";
import JalaliUtils from "@date-io/jalaali";
import { TimePicker, DateTimePicker, DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { makeStyles } from '@material-ui/core/styles';
import moment from "moment";

//        labelFunc={selectedDate => (selectedDate ? selectedDate.format("HH:mm") : "")}


jMoment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });


const useStyles = makeStyles({
    width: { width: 256 },

});

const Picker = ({ PickerComponent, ...fieldProps }) => {
  const { options, label, source, resource, isRequired, providerOptions } = fieldProps;

  const { input } = useInput({ source });

  const classes = useStyles();

  const [selectedDate, handleDateChange] = useState(moment());
  console.log('sss',selectedDate)
  console.log(input)
  const handleChange = useCallback(
    (value) => (Date.parse(value) ? input.onChange(value.format("HH:mm")) : input),
    [input],
  );

  return (
    <MuiPickersUtilsProvider {...providerOptions} utils={JalaliUtils} locale="fa">
      <TimePicker 
        {...options}
        label={<FieldTitle label={label} source={source} resource={resource} isRequired={isRequired} />}
        labelFunc={(date) => (date ? date.format("HH:mm") : input.value)}
        value={input.value ? null : input}
        onChange={(date) => handleChange(date)}
        ampm={false}
        clearable
        okLabel="تأیید"
        cancelLabel="لغو"
        clearLabel="پاک کردن" 
        inputVariant="filled"
        margin="dense"
        className={classes.width}
        />
    </MuiPickersUtilsProvider>
  );
};

export const TimeInput = (props) => <Picker PickerComponent={TimePicker} {...props} />;