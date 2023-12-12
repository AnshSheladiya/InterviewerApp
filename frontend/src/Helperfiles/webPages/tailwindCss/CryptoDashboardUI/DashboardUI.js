import React from 'react'
import Sidebars from './sidebars/Sidebar'
import DashboardTopBar from './Dashboard/DashboardTopBar/DashboardTopBar'
import Wallets from './Dashboard/Wallets/Wallets'
import ApexChart from './Dashboard/Charts/ApexChart'
import Notifications from './Dashboard/Notifications/Notifications'
import Earnings from './Dashboard/Notifications/Earnings'

const DashboardUI = () => {
  return (
    <div className='h-screen	  bg-[#201D47]'>
    <Sidebars/>
    <DashboardTopBar/>
    <Wallets/>
    <ApexChart/>
    <Notifications/>
    <Earnings/>
    </div>
  )
}

export default DashboardUI
