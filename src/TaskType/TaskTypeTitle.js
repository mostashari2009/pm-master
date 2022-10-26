import * as React from "react";


const TaskTypeTitle = ({ record }) => {
    return <span> {record ? `"${record.TaskTypeName}"` : ''}</span>;
};

export default TaskTypeTitle;
