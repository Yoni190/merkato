import React from 'react'
import Box from '@mui/material/Box';
import { BarChart } from '@mui/x-charts/BarChart';

const Home = () => {

    const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
    const xLabels = [
    '22-02-2026',
    '23-02-2026',
    '24-02-2026',
    '25-02-2026',
    '26-02-2026',
    '27-02-2026',
    '28-02-2026',
    ];
    
  return (
    <div>
        <div className="grid grid-cols-3 p-5 gap-5">
            <div className='border rounded p-3 shadow-lg'>
                <h1 className='text-2xl'>Products</h1>
                <p>1000</p>
            </div>
            
            <div className='border rounded p-3 shadow-lg'>
                <h1 className='text-2xl'>Users</h1>
                <p>400</p>
            </div>

            <div className='border rounded p-3 shadow-lg'>
                <h1 className='text-2xl'>Orders</h1>
                <p>20</p>
            </div>
        </div>

        {/* Charts */}
        <div>
            <h2 className='text-2xl p-8'>Products Added</h2>
            <Box sx={{ width: '100%', height: 300 }}>
                <BarChart
                    series={[
                    { data: pData, label: 'Products Added', id: 'pvId' },
                    ]}
                    xAxis={[{ data: xLabels, height: 28 }]}
                    yAxis={[{ width: 50 }]}
                />
                </Box>
        </div>
    </div>
  )
}

export default Home