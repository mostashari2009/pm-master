import * as React from "react";


const PersonnelJobCategoryTitle = ({ record }) => {
    return <span> {record ? `"${record.PersonnelID}"` : ''}</span>;
};

export default PersonnelJobCategoryTitle;
