import gql from 'graphql-tag'

export default gql`
query articleList($page: Int, $limit: Int){
    articles(page:$page, limit:$limit){
        list{
          title
          sub_title
        }
        limit
        page
        total
    }
}`
