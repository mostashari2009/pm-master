import React, { PureComponent, useState } from 'react';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import { Title, ReferenceInput, useQuery, useStaQteuery, SelectInput, SimpleForm,FilterLiveSearch } from 'react-admin';
import { Chart, Line, Point, Tooltip, Legend } from 'bizcharts';

const scale = {
	WorkPriorityValue: { min: 10 },
	city: {
		formatter: v => {
			return {
				Emergency: 'Emergency1',
				Important: 'Important1'
			}[v]
		}
	}
}

const Foo = () => {
    const [page, setPage] = useState(1);
    const perPage = 50;
    const { data, total, loading, error } = useQuery({
        type: 'getList',
        resource: 'PMWorks/WorkPriority',
        payload: {
            pagination: { page, perPage },
            sort: { field: 'id', order: 'ASC' },
        }
    },);
    if (loading) { return <p>Loading</p>; }
    if (error) { return <p>ERROR</p>; }
    if (!data) { return <p>No data yet</p>; }

    return (
        <Card>
            <Title title="Reports" />
            <CardHeader title="Reports.1" />
                <CardContent>
                        <div style={{ width: '100%', height: 500 }}>
                            <Chart scale={scale} padding={[30, 20, 60, 40]} autoFit height={320} data={data} interactions={['element-active']}>
                                <Point position="WorkPriorityCode*WorkPriorityValue" color="WorkPriorityName" shape='circle' />
                                <Line shape="smooth" position="WorkPriorityCode*WorkPriorityValue" color="WorkPriorityName" label="WorkPriorityValue" />
                                <Tooltip shared showCrosshairs />
                                <Legend background={{
                                    padding:[5,100,5,36],
                                    style: {
                                        fill: '#eaeaea',
                                        stroke: '#fff'
                                    }
                                }} />
                            </Chart>
                    </div>
                </CardContent>
        </Card>
    );
};


export default Foo;