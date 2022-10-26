import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';

import IconImageEye from '@material-ui/icons/RemoveRedEye';
import IconKeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { Button, SimpleShowLayout, TextField, useGetOne, ReferenceField, RichTextField, NumberField } from 'react-admin';

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

const QuickPreviewTaskButton = ({ id }) => {
    const [showPanel, setShowPanel] = useState(false);
    const classes = useStyles();
    const { data } = useGetOne('PMWorks/AssetClassTask', id);
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
                    basePath="/PMWorks/AssetClassTask"
                    resource="PMWorks/AssetClassTask"
                >
                    <TextField source="id" />
                    <TextField label="کد فعالیت" textAlgin="right" source="TaskCode" className={classes.field}/>
                    <TextField label="نام فعالیت" textAlgin="right" source="TaskName" className={classes.field}/>
                    <RichTextField label="توضیحات فعالیت" textAlgin="right" source="TaskDescription" className={classes.field}/>
                    <TextField label="تناوب" textAlgin="right" source="FrequencyName" className={classes.field}/>
                    <NumberField label="مقدار تناوب" textAlgin="right" source="FrequencyAmount" className={classes.field}/>
                    <NumberField label="مدت زمان انجام" textAlgin="right" source="DurationOfDo" className={classes.field}/>
                    <TextField label="مسئول" textAlgin="right" source="Functor" className={classes.field}/>
                    <ReferenceField label="نوع فعالیت" textAlgin="right" source="TaskTypeID" reference="PMWorks/TaskType" className={classes.field}>
                        <TextField source="TaskTypeName" />
                    </ReferenceField>
                    <ReferenceField label="شغل" textAlgin="right" source="JobCategoryID" reference="PMWorks/JobCategory" className={classes.field}>
                        <TextField source="JobCategoryName" />
                    </ReferenceField>
                    <ReferenceField label="کلاس تجهیز" textAlgin="right" source="AssetClassID" reference="PMWorks/AssetClass" className={classes.field}>
                        <TextField source="AssetClassName" />
                    </ReferenceField>
                </SimpleShowLayout>
            </Drawer>
        </>
    );
};

export default QuickPreviewTaskButton;
