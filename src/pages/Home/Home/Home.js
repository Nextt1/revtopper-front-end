import React, { useEffect, useState } from 'react';
import {FormControl, Select, MenuItem, InputLabel } from '@material-ui/core';
import { ResponsiveBar } from '@nivo/bar';

import {Container} from '../../../components';
import { home } from '../../../api';
import './Home.css';

export default function Home(){
    const [data, setData] = useState([]);
    const [year, setYear] = useState(1970);
    const [gender, setGender] = useState("all");

    useEffect( () => {
        loadData();
    }, [gender, year]);

    const loadData = async () => {
        const res = await home(gender, year);
        setData(res.data);
    }

    return(
        <Container>
            <div className="filter-container">
                <div style={{marginRight: 30}}>
                    <FormControl>
                        <InputLabel>Years</InputLabel>
                        <Select
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                        >
                            <MenuItem value={1970}>Before 1970</MenuItem>
                            <MenuItem value={1980}>From 1970 to 1980</MenuItem>
                            <MenuItem value={1990}>From 1980 to 1990</MenuItem>
                            <MenuItem value={2000}>From 1990 to 2000</MenuItem>
                            <MenuItem value={2010}>From 2000 to 2010</MenuItem>
                            <MenuItem value={2020}>From 2010 to 2020</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <FormControl>
                    <InputLabel>Gender</InputLabel>
                    <Select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <MenuItem value="all">All</MenuItem>
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <ResponsiveBar
                data={data}
                keys={[ 'Chinese', 'Indians', 'Malays', 'Other']}
                indexBy="year"
                margin={{ top: 30, right: 270, bottom: 50, left: 60 }}
                padding={0.2}
                colors={{ scheme: 'nivo' }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: '#38bcb2',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: '#eed312',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'fries'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'sandwich'
                        },
                        id: 'lines'
                    }
                ]}
                borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Year',
                    legendPosition: 'middle',
                    legendOffset: 32
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Population',
                    legendPosition: 'middle',
                    legendOffset: -40
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
            />
        </Container>
    )
}