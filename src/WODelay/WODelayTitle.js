import * as React from "react";


const WODelayTitle = ({ record }) => {
    return <span> {record ? `"${record.DelayID}"` : ''}</span>;
};

export default WODelayTitle;
