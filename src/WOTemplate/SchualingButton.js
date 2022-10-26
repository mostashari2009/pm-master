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


const SchualingButton = ({ record }) => {
    const classes = useStyles();
    const redirectt = record.WOTemplateID ? `/PMWorks/WOTemplate/${record.WOTemplateID}/show/PMWorks/WOTemplateSchualing` : false;
    const notify = useNotify();
    const redirect = useRedirect();
    const payload = { id: record.id, data: { ...record, Status: true } };
    const options = {
        mutationMode: 'undoable',
        onSuccess: ({ data }) => {
            notify('برنامه‌ریزی انجام شد', 'info', {}, true);
            redirect(redirectt);
        },
        onFailure: (error) => notify(`Error: ${error.message}`, 'warning'),
    };
    return (
        <Mutation
            type='update'
            resource='PMWorks/WOTemplateSchualing'
            payload={payload}
            options={options}
        >
            {(approve, { loading }) => (
                <Switch
                onChange={approve}
                checked={record.Status === true}
                disabled={record.Status === true}
                label='برنامه‌ریزی'
                color="primary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            )}
        </Mutation>
    );
};

export default SchualingButton;
//       disabled={record.Status === true}    <Button label='برنامه‌ریزی' onClick={approve} disabled={loading} />
