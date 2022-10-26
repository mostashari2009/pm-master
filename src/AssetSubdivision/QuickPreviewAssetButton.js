import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';

import IconImageEye from '@material-ui/icons/RemoveRedEye';
import IconKeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { Button, SimpleShowLayout, TextField, useGetOne, ReferenceField } from 'react-admin';
import {JalaliField} from 'ra-hichestan-datetime';

const useStyles = makeStyles({
    field: {
        // These styles will ensure our drawer don't fully cover our
        // application when teaser or title are very long
        '& span': {
            display: 'inline-block',
            maxWidth: '20em'
        }
    }
});

const QuickPreviewAssetButton = ({ id }) => {
    const [showPanel, setShowPanel] = useState(false);
    const classes = useStyles();
    const { data } = useGetOne('PMWorks/Asset', id);

    const handleClick = () => {
        setShowPanel(true);
    };

    const handleCloseClick = () => {
        setShowPanel(false);
    };

    return (
        <>
            <Button onClick={handleClick} label="ra.action.show">
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
                    basePath="/PMWorks/Asset"
                    resource="PMWorks/Asset"
                >
                    <TextField source="id" />
                    <TextField label="کد کلاس تجهیز" textAlgin="right" source="AssetClassCode" className={classes.field}/>
                    <TextField label="نام کلاس تجهیز" textAlgin="right" source="AssetClassName" className={classes.field}/>
                    <ReferenceField label="خانواده تجهیز" textAlgin="right" source="AssetCategoryID" reference="PMWorks/AssetCategory" className={classes.field}>
                        <TextField source="AssetCategoryName" />
                    </ReferenceField><TextField label="کد تجهیز" textAlgin="right" source="AssetCode" />
                    <TextField label="نام تجهیز" textAlgin="right" source="AssetName" />
                    <JalaliField label="تاریخ نصب" textAlgin="right" source="InstallationDate" />
                    <ReferenceField label="کلاس تجهیز" textAlgin="right" source="AssetClassID" reference="PMWorks/AssetClass">
                        <TextField source="AssetClassName" />
                    </ReferenceField>
                    <ReferenceField label="اولویت" textAlgin="right" source="AssetPriorityID" reference="PMWorks/AssetPriority">
                        <TextField source="AssetPriorityName" />
                    </ReferenceField>
                    <ReferenceField label="مکان" textAlgin="right" source="LocationID" reference="PMWorks/Location">
                        <TextField source="LocationName" />
                    </ReferenceField>
                </SimpleShowLayout>
            </Drawer>
        </>
    );
};

export default QuickPreviewAssetButton;
