import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import SideBarResident from '../../components/SideBarResident';


const MessagesResident = ({user}) => {
    return (
        <Row>
            <Col span={4.5}>
                <SideBarResident user={user} />

            </Col>
            <Col span={5.5}>
                Here is Messages for Resident
            </Col>
        </Row>
    )

}

export default MessagesResident;