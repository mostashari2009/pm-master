import * as React from "react";
import { Mutation, useNotify, useRedirect, Button } from 'react-admin';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    MuiSitch: {'&$disabled + $track': {
        backgroundColor:
          '#243261',
      },},

});


const DoneButton = ({ record }) => {
    const classes = useStyles();
    const notify = useNotify();
    const redirect = useRedirect();
    const payload = { id: record.id, data: { ...record, StatusOfDo: true } };
    const options = {
        mutationMode: 'undoable',
        onSuccess: ({ data }) => {
            notify('انجام شد', 'info', {}, true);
        },
        onFailure: (error) => notify(`Error: ${error.message}`, 'warning'),
    };
    return (
        <Mutation
            type='update'
            resource='PMWorks/TemplateSchualingDate'
            payload={payload}
            options={options}
        >
            {(approve, { loading }) => (
                <Switch
                onChange={approve}
                checked={record.StatusOfDo === true}
                disabled={record.StatusOfDo === true}
                label='انجام'
                color="primary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            )}
        </Mutation>
    );
};

export default DoneButton;
//       disabled={record.Status === true}    <Button label='برنامه‌ریزی' onClick={approve} disabled={loading} />
