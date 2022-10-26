import * as React from "react";


const WOTaskTitle = ({ record }) => {
    return <span> {record ? `"${record.TaskID}"` : ''}</span>;
};

export default WOTaskTitle;
