import {ApolloLink} from 'apollo-link'
import {HttpLink} from 'apollo-link-http'
import {InMemoryCache} from 'apollo-cache-inmemory'

export default (ctx) => {
    const httpLink = new HttpLink({uri: 'http://localhost:7001/graphql'})

    // middleware
    const middlewareLink = new ApolloLink((operation, forward) => {
        operation.setContext({
            // headers: {authorization: `Bearer ${token}`} // TODO token
        })
        return forward(operation)
    })
    const link = middlewareLink.concat(httpLink)
    return {
        link,
        cache: new InMemoryCache()
    }
}
