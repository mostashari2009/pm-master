import * as React from "react";


const DepartmentTitle = ({ record }) => {
    return <span> {record ? `"${record.DepartmentName}"` : ''}</span>;
};

export default DepartmentTitle;
