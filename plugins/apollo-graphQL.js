import Vue from 'vue'
import {ApolloClient} from 'apollo-client'
import {HttpLink} from 'apollo-link-http'
import {InMemoryCache} from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
import fetch from 'node-fetch'

const httpLink = new HttpLink({
    uri: 'http://localhost:7001/graphql',
    fetch,
    useGETForQueries: true
})

const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    ssrMode: true,
    connectToDevTools: true
})

const apolloProvider = new VueApollo({
    defaultClient: apolloClient
})

Vue.use(VueApollo)

export default ({app}) => {
    if (!app.apolloProvider) app.apolloProvider = apolloProvider// 在根实例下挂载一个默认配置的apolloProvider的vueApollo实例
    if (!app.provide) app.provide = apolloProvider.provide() // 在根实例下挂载一个默认配置的vueApollo实例provide对象
}
