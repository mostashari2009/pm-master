import React, { PureComponent, useState } from 'react';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import { Title, ReferenceInput, useQuery, useStaQteuery, SelectInput, SimpleForm,FilterLiveSearch } from 'react-admin';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import WorkPriorityFilter from './WorkPriority/WorkPriorityFilter';

const Foo = () => {
    const [page, setPage] = useState(1);
    const [filterWorkPriority, setfilterWorkPriority] = useState(1);
    console.log(filterWorkPriority);
    const perPage = 50;
    const { data, total, loading, error } = useQuery({
        type: 'getList',
        resource: 'PMWorks/WorkPriority',
        payload: {
            pagination: { page, perPage },
            sort: { field: 'id', order: 'ASC' },
            filter: {id:filterWorkPriority},
        }
    },);
    if (loading) { return <p>Loading</p>; }
    if (error) { return <p>ERROR</p>; }
    if (!data) { return <p>No data yet</p>; }

    const handleChange = event => {
        setfilterWorkPriority(event.target.value);
    };

    return (
        <Card>
            <Title title="Reports" />
            <CardHeader title="Reports.1" />
            <SimpleForm>
            <ReferenceInput label="fil" source="id" reference="PMWorks/WorkPriority" onChange={handleChange}> 
                <SelectInput optionText="id" />
            </ReferenceInput>
            </SimpleForm>
                <CardContent>
                        <div style={{ width: '100%', height: 500 }}>
                            <ResponsiveContainer>
                                <BarChart width={150} height={250} data={data}>
                                    <Bar dataKey="WorkPriorityValue" fill="#8884d8" />
                                </BarChart>
                        </ResponsiveContainer>
                    </div>
                </CardContent>
        </Card>
    );
};

const test = ()=>{
    return {id :1};
}
export default Foo;