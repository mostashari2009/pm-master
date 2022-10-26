import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';

import IconImageEye from '@material-ui/icons/RemoveRedEye';
import IconKeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { Button, SimpleShowLayout, TextField, useGetOne, ReferenceField } from 'react-admin';

const useStyles = makeStyles({
    field: {
        // These styles will ensure our drawer don't fully cover our
        // application when teaser or title are very long
        '& span': {
            display: 'inline-block',
            maxWidth: '20em'
        }
    },
    but: { fontFamily: 'inherit',
           marginBottom: '16px'
    }
});

const QuickPreviewPersonnelButton = ({ id }) => {
    const [showPanel, setShowPanel] = useState(false);
    const classes = useStyles();
    const { data } = useGetOne('PMWorks/Personnel', id);
    console.log(data);
    

    const handleClick = () => {
        setShowPanel(true);
    };

    const handleCloseClick = () => {
        setShowPanel(false);
    };

    return (
        <>
            <Button className={classes.but} onClick={handleClick} label="ra.action.show">
                <IconImageEye />
            </Button>
            <Drawer anchor="right" open={showPanel} onClose={handleCloseClick}>
                <div>
                    <Button label="Close" onClick={handleCloseClick}>
                        <IconKeyboardArrowRight />
                    </Button>
                </div>
                <SimpleShowLayout
                    record={data}
                    basePath="/PMWorks/Personnel"
                    resource="PMWorks/Personnel"
                >
                    <TextField source="id" />
                    <TextField label="کد پرسنل" textAlgin="right" source="PersonnelCode" className={classes.field}/>
                    <TextField label="نام نت پرسنل" textAlgin="right" source="PersonnelNetCode" className={classes.field}/>
                    <TextField label="نام پرسنل" textAlgin="right" source="PersonnelName" className={classes.field}/>
                    <TextField label="فامیل پرسنل" textAlgin="right" source="PersonnelFamily" className={classes.field}/>
                    <TextField label="شماره پرسنل" textAlgin="right" source="PersonnelMobile" className={classes.field}/>
                    <ReferenceField label="دپارتمان" textAlgin="right" source="DepartmentID" reference="PMWorks/Department" className={classes.field}>
                        <TextField source="DepartmentName" />
                    </ReferenceField> 
                </SimpleShowLayout>
            </Drawer>
        </>
    );
};

export default QuickPreviewPersonnelButton;
