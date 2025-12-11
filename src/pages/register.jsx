import { ArrowRightOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, message, notification, Row } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { registerUserAPI } from "../services/api.service";

const RegisterPage = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate();

    const handleRegister = async (value) => {
        const res = await registerUserAPI(value.email, value.password);
        if(res.data) {
            message.success("Đăng ký tài khoản thành công");
            navigate('/login');
        }
        else {
            notification.error({
                message: "Đăng ký tài khoản thất bại",
                description: JSON.stringify(res.message)
            })
        }
    }

    return (
        <Row justify={"center"} style={{ marginTop: "30px" }}>
            <Col xs={24} md={16} lg={8} >
                <fieldset style={{
                    padding: "15px",
                    margin: "5px",
                    boder: "1px solic #ccc",
                    borderRadius: "5px"
                }}>
                    <legend>Đăng ký tài khoản</legend>
                    <Form
                        name="login"
                        onFinish={handleRegister}
                        style={{ margin: "30px"}}
                        form={form}
                    >

                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input prefix={<UserOutlined />} placeholder="Email" />
                        </Form.Item>


                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password prefix={<LockOutlined />} placeholder="Password"
                                onKeyDown={(event) => {
                                    if (event.key === 'Enter') {
                                        form.submit();
                                    }
                                }}
                            />
                        </Form.Item>


                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <Button type="primary"
                                // {/* // loading={loading} */}
                                onClick={() => form.submit()}
                                >
                                Register
                            </Button>
                            <Link to={'/login'}>Đăng nhập <ArrowRightOutlined /></Link>
                        </div>

                        
                    </Form>
                </fieldset>
            </Col>
        </Row>
    )
}

export default RegisterPage;