import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Card, Typography, Form, Input, Button, Row, Col } from 'antd'
import { fetchPosts, handleState } from '../redux/githubRepo/action'

const GithubRepo = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.Github);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const { Title, Text } = Typography;

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Card>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row gutter={16}>
          <Col lg={8} md={8} xs={24}>
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input git username!' }]}
            >
              <Input />
            </Form.Item>

          </Col>
          <Col lg={8} md={8} xs={24}>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  )
}

export default GithubRepo