import * as React from "react";


const TypeWrTitle = ({ record }) => {
    return <span> {record ? `"${record.TypeWrName}"` : ''}</span>;
};

export default TypeWrTitle;
