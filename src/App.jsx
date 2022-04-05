import { useState, useEffect } from 'react';
import './App.css';
import { Layout, Menu, Breadcrumb, Typography } from 'antd';
import { Skeleton, Switch, Card, Avatar } from 'antd';
import {
	EditOutlined,
	EllipsisOutlined,
	SettingOutlined,
} from '@ant-design/icons';

import {
	DesktopOutlined,
	PieChartOutlined,
	FileOutlined,
	TeamOutlined,
	UserOutlined,
} from '@ant-design/icons';
import CardList from './CardList';
import axios from 'axios';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Meta } = Card;

let { Title } = Typography;

function App() {
	const [collapsed, setCollapsed] = useState(false);
	const [Data, setData] = useState([]);

	const getList = () => {
		const url = 'https://jsonplaceholder.typicode.com/photos';
		axios
			.get(url, {
				params: {
					_limit: 4,
				},
			})
			.then((res) => {
				setData(res.data);
			});
		console.log(Data);
	};

	useEffect(() => {
		getList();
	}, []);

	console.log(Data);
	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Sider
				sticky
				collapsible
				collapsed={collapsed}
				onCollapse={() => setCollapsed(!collapsed)}
			>
				<div className="logo" />
				<Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
					<Menu.Item
						key="1"
						icon={<PieChartOutlined />}
						style={{ marginBottom: '30px', fontSize: '18px' }}
					>
						HawassaSpots
					</Menu.Item>
					<Menu.Item key="2" icon={<DesktopOutlined />}>
						Hotels
					</Menu.Item>
					<Menu.Item key="sub1" icon={<UserOutlined />} title="User">
						Restaurants
					</Menu.Item>
					<Menu.Item key="sub2" icon={<TeamOutlined />} title="Team">
						Night Clubs
					</Menu.Item>
					<Menu.Item key="9" icon={<FileOutlined />}>
						Settings
					</Menu.Item>
				</Menu>
			</Sider>
			<Layout className="site-layout">
				<Header className="site-layout-background" style={{ padding: 0 }} />
				<Content style={{ margin: '0 16px' }}>
					<Breadcrumb style={{ margin: '16px 0' }}></Breadcrumb>
					<div
						className="site-layout-background"
						style={{ padding: 24, minHeight: 360 }}
					>
						<Title>Hotels</Title>
						<div style={{ display: 'flex' }}>
							{Data.map((data, index) => (
								<CardList data={data} key={index} />
							))}
						</div>

						<hr />
						<Title>Restaurants</Title>
						<div style={{ display: 'flex' }}>
							<Card
								hoverable
								style={{ width: 300, margin: '0px 50px' }}
								cover={
									<img
										alt="example"
										src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
									/>
								}
							>
								<Meta
									title="Europe Street beat"
									description="www.instagram.com"
								/>
							</Card>
							<Card
								hoverable
								style={{ width: 300, margin: '0px 50px' }}
								cover={
									<img
										alt="example"
										src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
									/>
								}
							>
								<Meta
									title="Europe Street beat"
									description="www.instagram.com"
								/>
							</Card>
							<Card
								hoverable
								style={{ width: 300, margin: '0px 50px' }}
								cover={
									<img
										alt="example"
										src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
									/>
								}
							>
								<Meta
									title="Europe Street beat"
									description="www.instagram.com"
								/>
							</Card>
							<Card
								hoverable
								style={{ width: 300, margin: '0px 50px' }}
								cover={
									<img
										alt="example"
										src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
									/>
								}
							>
								<Meta
									title="Europe Street beat"
									description="www.instagram.com"
								/>
							</Card>
						</div>
						<hr />
						<Title>Night Clubs</Title>
						<div style={{ display: 'flex' }}>
							{Data.map((data, index) => (
								<CardList data={data} key={index} />
							))}
						</div>
					</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}></Footer>
			</Layout>
		</Layout>
	);
}

export default App;
