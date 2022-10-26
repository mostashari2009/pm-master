import * as React from "react";


const PersonnelTitle = ({ record }) => {
    return <span> {record ? `"${record.PersonnelName}"` : ''}</span>;
};

export default PersonnelTitle;
