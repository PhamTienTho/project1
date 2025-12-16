import { ArrowRightOutlined, LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, message, notification, Row } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { registerUserAPI } from "../services/api.service";

const RegisterPage = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate();

    const handleRegister = async (value) => {
        try {
            const res = await registerUserAPI(value.username, value.email, value.password);
            if (res?.data) {
                message.success("Đăng ký tài khoản thành công");
                navigate('/login');
            } else {
                notification.error({
                    message: "Đăng ký tài khoản thất bại",
                    description: res?.message || 'Vui lòng kiểm tra lại thông tin đăng ký'
                })
            }
        } catch (error) {
            notification.error({
                message: "Đăng ký tài khoản thất bại",
                description: 'Có lỗi khi kết nối. Vui lòng thử lại sau.'
            })
        }
    }

    return (
        <Row justify={"center"} style={{ marginTop: "30px" }}>
            <Col xs={24} md={16} lg={8} >
                <fieldset style={{
                    padding: "15px",
                    margin: "5px",
                    border: "1px solid #ccc",
                    borderRadius: "5px"
                }}>
                    <legend>Đăng ký tài khoản</legend>
                    <Form
                        name="register"
                        onFinish={handleRegister}
                        style={{ margin: "30px"}}
                        form={form}
                    >

                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input prefix={<UserOutlined />} placeholder="Username" />
                        </Form.Item>

                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input prefix={<MailOutlined />} placeholder="Email" />
                        </Form.Item>


                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
                        </Form.Item>

                        <Form.Item
                            name="confirm_password"
                            dependencies={['password']}
                            rules={[
                                { required: true, message: 'Please confirm your password!' },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('Mật khẩu không khớp!'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password prefix={<LockOutlined />} placeholder="Confirm Password"
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