import { graphql } from 'babel-plugin-relay/macro'
import { usePaginationFragment } from 'react-relay/hooks'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Flex } from '@chakra-ui/react'

import { NotesList_query$key } from '@/__generated__/NotesList_query.graphql'

import Note from './Note'

type PropsType = {
  query: NotesList_query$key
}

export default function NotesList({ query }: PropsType) {
  const {
    data,
    refetch,
    hasNext,
    loadNext,
    isLoadingNext,
  } = usePaginationFragment(
    graphql`
      fragment NotesList_query on Query
      @argumentDefinitions(
        first: { type: Int, defaultValue: 10 }
        after: { type: Cursor }
      )
      @refetchable(queryName: "NotesListPaginationQuery") {
        allNotes(first: $first, after: $after)
          @connection(key: "Notes_allNotes", filters: []) {
          totalCount
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
          edges {
            node {
              id
              ...Note_note
            }
          }
        }
      }
    `,
    query
  )

  const loadMore = () => {
    if (isLoadingNext) return
    loadNext(10)
  }

  return (
    <Flex w="full" h="full" flexDir="column" bgColor="gray.900">
      <InfiniteScroll
        dataLength={data.allNotes?.totalCount || 0}
        next={loadMore}
        hasMore={hasNext}
        loader={<h4>Loading...</h4>}
        refreshFunction={() => refetch({})}
        pullDownToRefresh
        pullDownToRefreshThreshold={50}
        pullDownToRefreshContent={
          <h3 style={{ textAlign: 'center' }}>
            &#8595; Pull down to refresh
          </h3>
        }
        releaseToRefreshContent={
          <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
        }
      >
        {data.allNotes &&
          data.allNotes.edges.map(({ node }) => (
            <Note key={node.id as string} note={node} />
          ))}
      </InfiniteScroll>
    </Flex>
  )
}
