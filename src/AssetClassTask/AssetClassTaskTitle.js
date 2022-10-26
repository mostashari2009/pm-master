import * as React from "react";


const AssetClassTaskTitle = ({ record }) => {
    return <span> {record ? `"${record.TaskName}"` : ''}</span>;
};

export default AssetClassTaskTitle;
