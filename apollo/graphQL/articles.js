import gql from 'graphql-tag'

export default gql`{
    articles{
        list{
          title
          sub_title
        }
        limit
        page
        total
    }
}`
