import * as React from "react";


const JobCategoryTitle = ({ record }) => {
    return <span> {record ? `"${record.JobCategoryName}"` : ''}</span>;
};

export default JobCategoryTitle;
