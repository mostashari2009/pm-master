import * as React from "react";


const WorkOrderTitle = ({ record }) => {
    let str = record.WorkRequestID ? `${record.WorkRequestID}` : `${record.WOTemplateCode}`;
        str = record.WorkRequestID ? str.padStart(4,0) : str;
        let text = record.WorkRequestID ? "WR0".concat(str) : "PM".concat(str);
        let stro = record ? `${record.id}` : '';
        stro = stro.padStart(4,0);
        let texto = "_WO0".concat(stro);
        return <span> {text} {texto} </span>;
};

export default WorkOrderTitle;
