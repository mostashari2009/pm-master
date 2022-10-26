import * as React from "react";


const FailureCauseTitle = ({ record }) => {
    return <span> {record ? `"${record.FailureCauseName}"` : ''}</span>;
};

export default FailureCauseTitle;
