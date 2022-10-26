import * as React from "react";


const DelayTitle = ({ record }) => {
    return <span> {record ? `"${record.DelayName}"` : ''}</span>;
};

export default DelayTitle;
