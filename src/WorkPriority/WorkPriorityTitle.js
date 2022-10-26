import * as React from "react";


const WorkPriorityTitle = ({ record }) => {
    return <span> {record ? `"${record.WorkPriorityName}"` : ''}</span>;
};

export default WorkPriorityTitle;
