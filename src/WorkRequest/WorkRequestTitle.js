import * as React from "react";


const WorkPriorityTitle = ({ record }) => {
    let str = record ? `${record.id}` : '';
    str = str.padStart(4,0);
    let text = "WR0".concat(str);
    return <span> {text} </span>;
};

export default WorkPriorityTitle;
