import React from 'react';

import { UserOutlined, LikeOutlined, LikeFilled } from '@ant-design/icons';
import { Skeleton, Switch, Card, Avatar } from 'antd';
const { Meta } = Card;

function CardList({ data }) {
	console.log(data.title);
	return (
		<Card
			hoverable
			style={{ width: 300, height: 450, margin: '10px 50px' }}
			cover={<img alt="example" src={data.thumbnailUrl} />}
		>
			<Meta title={data.title} description="" />
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					margin: '30px 10px',
				}}
			>
				<UserOutlined style={{ color: '#2176d2', fontSize: '24px' }} />
				<LikeFilled style={{ color: '#2176d2', fontSize: '24px' }} />
			</div>
		</Card>
	);
}

export default CardList;
