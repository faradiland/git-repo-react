import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Card, Form, Input, Button, Row, Col, Table } from 'antd'
import { fetchPosts, handleState } from '../redux/githubRepo/action'

const GithubRepo = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.Github);

  const onFinish = (values: any) => {
    console.log('Success:', values);
    dispatch(fetchPosts());
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const handleChange = (e) => {
    debugger
    dispatch(handleState('userGit', e.target.value))
  }
  const columns = [
    {
      title: 'Project name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Project URL',
      dataIndex: 'url',
      key: 'url',
      render: (text) => <a href={text}>{text}</a>
    },
    {
      title: 'Default Branch',
      dataIndex: 'default_branch',
      key: 'default_branch',
    }
  ]

  return (
    <Card>
      <Form
        name="basic"
        // initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row gutter={16}>
          <Col lg={8} md={8} xs={24}>
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input Github Username!' }]}
            >
              <Input
                initialValue={state.username}
                onChange={(e) => handleChange(e)}
                placeholder="Username Git"
              />
            </Form.Item>

          </Col>
          <Col lg={8} md={8} xs={24}>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Search
              </Button>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Table
              columns={columns}
              dataSource={state.repoList}
            />
          </Col>
        </Row>
      </Form>
    </Card>
  )
}

export default GithubRepo