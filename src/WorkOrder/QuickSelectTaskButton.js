import React, { useState } from "react";
import { Button,useGetOne } from "react-admin";
import { Dialog } from "@material-ui/core";
import TouchAppIcon from '@material-ui/icons/TouchApp';
import TaskList from "./TaskList";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  fir: { fontFamily: "system-ui", margin: "10px", color: "#0863cc"  },
});

const QuickSelectTaskButton = ({ id, setId, ...props }) => {
  const [showPanel, setShowPanel] = useState(false);
  const classes = useStyles();
  const { data } = useGetOne("PMWorks/WRTask", id);
  //const toggleDrawer = () => setShowPanel((showPanel) => !showPanel);
  const handleClick = () => {
    setShowPanel(true);
  };

  const handleCloseClick = () => {
    setShowPanel(false);
  };
  return (
    <>
      <Button  onClick={handleClick} label="انتخاب">
        <TouchAppIcon />
      </Button>
      < Dialog anchor="right" open={showPanel} onClose={handleCloseClick}>
      <div>
          <Button
            className={classes.fir}
            label={null}
            title="بستن صفحه"
            onClick={handleCloseClick}
          >
            <CancelPresentationIcon />
          </Button>
        </div>
        <TaskList 
        style={{width: 'auto'}}
         {...props} 
         basePath="/PMWorks/WRTask"
         resource="PMWorks/WRTask" 
         setShowPanel={setShowPanel} 
         record={data}
         setId={setId}
         />
      </Dialog>
    </>
  );
};

export default QuickSelectTaskButton;
