import * as React  from 'react';
import { useGetList , useGetMany  } from 'react-admin';
import CardWithIcon from './CardWithIcon';
import { Card } from '@material-ui/core';
import WorkIcon from '@material-ui/icons/Work';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';


//const GetListCount = (props) => {
/*const { data } = useGetList(
    "/PMWorks/WorkOrder",
{ field: "WorkOrderID", order: "ASC" } ,
{filter: { StatusID__OpCl: '1' }},
).then(response => console.log(response));*/


/*useGetMany ( "/PMWorks/WorkOrder", { StatusID__OpCl: '1'})
.then(response => console.log(response));
};*/

/*const useStyles = makeStyles({
    CardWithIcon: {
      maxWidth: 500
    ,margin: auto
    ,
    },});
  */
    const WorkOrderTotalOp = () => {
        const { data, total } = useGetList('PMWorks/WorkOrder', 
            { page: 1, perPage: 1 },
            { field: 'title', order: 'ASC' },
            { StatusID__OpCl: '1' },
        );
        return(<CardWithIcon 
            to="/PMWorks/WorkOrder/?StatusID__OpCl=1"
            icon={WorkIcon}
            title={"دستور کار باز"}
            subtitle={total}
            />); };

            const WorkOrderTotalOpPM = () => {
                const { data, total } = useGetList('PMWorks/WorkOrder', 
                    { page: 1, perPage: 1 },
                    { field: 'title', order: 'ASC' },
                    { StatusID__OpCl: '1', WorkOrderType: '1' },
                );
                return(<CardWithIcon 
                    to="/PMWorks/WorkOrder/?StatusID__OpCl=1"
                    icon={WorkIcon}
                    title={"دستور کار بازPM"}
                    subtitle={total}
                    />); };
                    
            const WorkOrderTotalOpWR = () => {
                 const { data, total } = useGetList('PMWorks/WorkOrder', 
                    { page: 1, perPage: 1 },
                    { field: 'title', order: 'ASC' },
                    { StatusID__OpCl: '1', WorkOrderType: '0' },
                );
                return(<CardWithIcon 
                    to="/PMWorks/WorkOrder/?StatusID__OpCl=1"
                    icon={WorkIcon}
                    title={"دستور کار بازWR"}
                    subtitle={total}
                    />); };        

            const WorkRequestTotalOp = () => {
                const { data, total } = useGetList('PMWorks/WorkRequest', 
                    { page: 1, perPage: 1 },
                    { field: 'title', order: 'ASC' },
                    { StatusID__OpCl: '1' },
                );
                return(<CardWithIcon 
                    to="PMWorks/WorkRequest"
                    icon={WorkOutlineOutlinedIcon}
                    title={"درخواست کار باز"}
                    subtitle={total}
                    />); };        
                    

const WorkOrderCount = (props) => {

    
    return (
        <Card className='classes.CardWithIcon'> 
        <WorkOrderTotalOp/>
            <WorkOrderTotalOpPM/>
            <WorkOrderTotalOpWR/>
        <WorkRequestTotalOp/>
        </Card>
        
    );
};

export default WorkOrderCount;