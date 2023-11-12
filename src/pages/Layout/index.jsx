import { Layout, Menu, Popconfirm } from 'antd'
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined,
} from '@ant-design/icons'
import './index.scss'
import {Outlet, useNavigate,useLocation } from 'react-router-dom'
import Playbar from '@/components/playbar'

const { Header, Sider } = Layout
const items = [
  {
    label: '首页',
    key: '/',
    icon: <HomeOutlined />,
  },
  {
    label: '排行榜',
    key: '/rank',
    icon: <DiffOutlined />,
  },
  {
    label: '歌单',
    key: '/playlist',
    icon: <EditOutlined />,
  },
  {
    label: 'MV',
    key: '/mv',
    icon: <EditOutlined />,
  },
  {
    label: '歌手',
    key: '/singer',
    icon: <EditOutlined />,
  },
]

const LayoutMain = () => {
  const navToggle=useNavigate()
  // 反向高亮
  const location = useLocation()
  const seletKey=location.pathname
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">heyuling</span>
          <span className="user-logout">
            <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消">
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={seletKey}
            items={items}
            style={{borderRight: 0 }} onClick={(router)=>navToggle(router.key)}></Menu>
        </Sider>
        <Layout className="layout-content" style={{ padding:'20px 20px 70px 20px'}}>
          <Outlet/>
        </Layout>
      </Layout>
      <Playbar/> 
    </Layout>
  )
}
export default LayoutMain