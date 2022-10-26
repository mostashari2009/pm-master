import * as React from "react";


const WorkRequestFailureCauseTitle = ({ record }) => {
    return <span> {record ? `"${record.WorkRequestID}"` : ''}</span>;
};

export default WorkRequestFailureCauseTitle;
