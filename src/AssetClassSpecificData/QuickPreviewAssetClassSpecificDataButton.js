import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';

import IconImageEye from '@material-ui/icons/RemoveRedEye';
import IconKeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { Button, SimpleShowLayout, TextField, useGetOne } from 'react-admin';

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

const QuickPreviewAssetClassSpecificDataButton = ({ id }) => {
    const [showPanel, setShowPanel] = useState(false);
    const classes = useStyles();
    const { data } = useGetOne('PMWorks/SpecificData', id);

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
                    basePath="/PMWorks/SpecificData"
                    resource="PMWorks/SpecificData"
                >
                    <TextField source="id" />
                    <TextField label="کد ویژگی" textAlgin="right" source="SpecificDataCode" className={classes.field} />
                    <TextField label="نام ویژگی" textAlgin="right" source="SpecificDataName" className={classes.field} />
                    <TextField label="واحد اندازه گیری" textAlgin="right" source="Measurment"  className={classes.field}/>
                </SimpleShowLayout>
            </Drawer>
        </>
    );
};

export default QuickPreviewAssetClassSpecificDataButton;
