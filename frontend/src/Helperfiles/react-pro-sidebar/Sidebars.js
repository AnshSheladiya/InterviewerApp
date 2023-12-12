import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import TitleComponent from '../styled-components/TitleComponent';
import HorizontalLine from '../styled-components/HorizontalLine';

const Sidebars = () => {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <>
    <TitleComponent>react-pro-sidebar SidebarComponent</TitleComponent>
    <HorizontalLine/>
    <div style={{ display: 'flex', height: '100vh'}}>
      <Sidebar collapsed={collapsed}>
        <Menu>
          <MenuItem> Documentation</MenuItem>
          <MenuItem> Calendar</MenuItem>
          <MenuItem> E-commerce</MenuItem>
          <MenuItem> Examples</MenuItem>
        </Menu>
      </Sidebar>
      <main style={{ padding: 10 }}>
        <div>
          <button className="sb-button" onClick={() => setCollapsed(!collapsed)} style={{marginTop:'10px',padding:'10px',backgroundColor:'#ECF4D6',border:'2px solid black',borderRadius:'10px'}}>
            Collapse
          </button>
        </div>
      </main>
    </div>
    </>

  )
}

export default Sidebars


