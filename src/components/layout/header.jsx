import { HomeOutlined, LoginOutlined } from "@ant-design/icons"
import { Menu } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const items = [
        {
            label: <Link to={'/'}>Home page</Link>,
            key: 'Home',
            icon: <HomeOutlined />,
        },
        {
            label: <Link to={'/login'}>Log in</Link>,
            key: 'Login',
            icon: <LoginOutlined />,
        }
    ]

    const [current, setCurrent] = useState('Home');

    return (
        <Menu
            onClick={(event) => {
                setCurrent(event.key)
            }}
            selectedKeys={[current]}
            mode="horizontal" items={items} />
    )
}

export default Header;