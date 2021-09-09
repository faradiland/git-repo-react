import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import GithubRepo from './container/githubRepo';

import { Layout, Typography } from 'antd';

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Layout theme="light">
          <Header style={styles.header}>
            <Title level={2} style={styles.title}>Github Repository List</Title>
          </Header>
          <Content style={styles.content}>
            <GithubRepo />
          </Content>
          <Footer style={styles.footer}>
            <Text>Created by @faradiland 2021</Text>
          </Footer>
        </Layout>
      </Provider>
    );
  }
}

const styles = {
  title: {
    color: '#eee', margin: 0
  },
  header: {
    display: 'flex', alignItems: 'center'
  },
  content: {
    padding: '50px',
    minHeight: 'calc(100vh - 135px)'
  },
  footer: {
    textAlign: 'center'
  }
}

export default App;