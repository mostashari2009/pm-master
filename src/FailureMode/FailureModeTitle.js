import * as React from "react";


const FailureModeTitle = ({ record }) => {
    return <span> {record ? `"${record.FailureModeName}"` : ''}</span>;
};

export default FailureModeTitle;
