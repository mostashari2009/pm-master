import * as React from "react";


const UserTitle = ({ record }) => {
    return <span> {record ? `"${record.username}"` : ''}</span>;
};

export default UserTitle;
