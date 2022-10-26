import * as React from "react";


const WOPersonnelTitle = ({ record }) => {
    return <span> {record ? `"${record.PersonnelID}"` : ''}</span>;
};

export default WOPersonnelTitle;
