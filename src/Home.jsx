import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill, BsCurrencyDollar}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie } 
 from 'recharts';
 import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { OrderedListOutlined } from '@ant-design/icons';
import{  GiReceiveMoney } from 'react-icons/gi'
import{ FaShoppingBag } from 'react-icons/fa'

function Home() {
    const data3 = [
        { name: "Laptop",  price:23000 },
        { name: "MobilePhones",price: 20000 },
        { name: "Bags",price:500 },
    ];

    const data01 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
        { name: 'Group E', value: 278 },
        { name: 'Group F', value: 189 },
      ];
      
      const data02 = [
        { name: 'Group A', value: 2400 },
        { name: 'Group B', value: 4567 },
        { name: 'Group C', value: 1398 },
        { name: 'Group D', value: 9800 },
        { name: 'Group E', value: 3908 },
        { name: 'Group F', value: 4800 },
      ];
    const data = [
        {
          name: 'Jan',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Feb',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Mar',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Apr',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'May',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Jun',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Jul',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
        {
            name: 'Aug',
            uv: 2000,
            pv: 6800,
            amt: 2290,
          },
          {
            name: 'Sep',
            uv: 3490,
            pv: 4300,
            amt: 2100,
          },
          {
            name: 'Oct',
            uv: 2000,
          pv: 7800,
          amt: 2290,
          },
          {
            name: 'Nov',
            uv: 3490,
            pv: 4300,
            amt: 2100,
          },
          {
            name: 'Dec',
            uv: 2000,
          pv: 9800,
          amt: 2290,
          },
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>Dashboard</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Earning</h3>
                    <BsCurrencyDollar className='card_icon'/>
                </div>
                <h1>$198K</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Orders</h3>
                    <OrderedListOutlined className='card_icon'/>
                </div>
                <h1>$2.8k</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Balance</h3>
                    <GiReceiveMoney className='card_icon'/>
                </div>
                <h1>$12.8k</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Total Sales</h3>
                    <FaShoppingBag className='card_icon'/>
                </div>
                <h1>$99k</h1>
            </div>
        </div>
        <div className='main-title'>
            <h3>Overview</h3>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            {
            <ResponsiveContainer>
            <PieChart width={500} height={300}>
            <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            fill="#8884d8"
            label
            />
            <Pie dataKey="value"  cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
            <Tooltip />
        </PieChart>
        </ResponsiveContainer>
            }

        </div>
        <div>
            <h3>Product Sell</h3>
        </div>
        <MDBTable borderColor='black'>
      <MDBTableHead>
        <tr>
          <th scope='col'>ID</th>
          <th scope='col'>Name</th>
          <th scope='col'>Price</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>
            1
          </td>
          <td>
            Laptop
          </td>
          <td>
            <MDBBadge color='success' pill>
              50000
            </MDBBadge>
          </td>
        </tr>
        <tr>
          <td>
            2
          </td>
          <td>
           Mobile Phones
          </td>
          <td>
            <MDBBadge color='primary' pill>
              20000
            </MDBBadge>
          </td>
        </tr>
        <tr>
          <td>
           3
          </td>
          <td>
            Magnetic Product
          </td>
          <td>
            <MDBBadge color='warning' pill>
              10000
            </MDBBadge>
          </td>
        </tr>
      </MDBTableBody>
    </MDBTable>
    </main>
  );
}


export default Home;