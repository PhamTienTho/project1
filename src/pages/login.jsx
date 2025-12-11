import { ArrowRightOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Form, Input, Row, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { API_BASE_URL } from '../config/oauth.config';
import { loginAPI, loginWithGoogle } from "../services/api.service";

const LoginPage = () => {
    const navigate = useNavigate();

    const handleLogin = (value) => {
        // const res = await loginAPI(value.email, value.password);
        // if(res.data) {
        //     message.success("Đăng nhập thành công");
        //     localStorage.setItem("access_token", res.data.access_token);
        // }
    }

    const handleGoogleLoginSuccess = async (credentialResponse) => {
        try {
            const idToken = credentialResponse.credential;

            // Gửi id_token và clientId lên backend để verify và tạo session
            // const res = await loginWithGoogle(idToken);

            // console.log('Backend response:', response.data);
            
            // Lưu thông tin user vào localStorage
            // localStorage.setItem('user', JSON.stringify(response.data.user));
            // localStorage.setItem('access_token', response.data.access_token);
            
            // message.success('Đăng nhập thành công!');
            navigate('/');
        } catch (error) {
            message.error('Đăng nhập thất bại. Vui lòng thử lại!');
        }
    }

    const handleGoogleLoginError = () => {
        message.error('Đăng nhập Google thất bại!');
    }

    const [form] = Form.useForm();

    return (
        <Row justify={"center"} style={{ marginTop: "30px" }}>
            <Col xs={24} md={16} lg={8} >
                <fieldset style={{
                    padding: "15px",
                    margin: "5px",
                    boder: "1px solic #ccc",
                    borderRadius: "5px"
                }}>
                    <legend>Đăng nhập</legend>
                    <Form
                        name="login"
                        onFinish={handleLogin}
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
                                onClick={() => form.submit()}>
                                Login
                            </Button>
                            <Link to={'/'}>Go to home page <ArrowRightOutlined /></Link>
                        </div>

                        <Divider>Hoặc</Divider>
                        
                        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
                            <GoogleLogin
                                onSuccess={handleGoogleLoginSuccess}
                                onError={handleGoogleLoginError}
                                useOneTap
                                text="signin_with"
                                shape="rectangular"
                                theme="outline"
                                size="large"
                                width="300"
                            />
                        </div>

                        <Divider dashed />
                        <div style={{ textAlign: "center" }}>Chưa có tài khoản ? <Link to="/register">Đăng ký tại đây</Link></div>
                    </Form>
                </fieldset>
            </Col>
        </Row>
    )
}

export default LoginPage;