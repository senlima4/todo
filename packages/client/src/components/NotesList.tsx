import { graphql } from 'babel-plugin-relay/macro'
import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { usePaginationFragment } from 'react-relay/hooks'
import { List, useColorModeValue } from '@chakra-ui/react'
import InfiniteScroll from 'react-infinite-scroll-component'

import { NotesList_query$key } from '@/__generated__/NotesList_query.graphql'
import { refetchNotesAtom } from '@/utils/atom'

import NoteItem from './Note'

export default function NotesList({ query }: { query: NotesList_query$key }) {
  const [shouldRefetch] = useAtom(refetchNotesAtom)
  const listBg = useColorModeValue('gray.50', 'gray.800')
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
              nodeId
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

  useEffect(() => {
    if (shouldRefetch) refetch({}, { fetchPolicy: 'store-and-network' })
  }, [shouldRefetch])

  return (
    <List
      id="notes-list"
      role="listbox"
      w="full"
      h="full"
      flexDir="column"
      bgColor={listBg}
    >
      <InfiniteScroll
        scrollableTarget="notes-list"
        dataLength={data.allNotes?.totalCount || 0}
        next={loadMore}
        hasMore={hasNext}
        loader={<h4>Loading...</h4>}
        refreshFunction={() =>
          refetch({}, { fetchPolicy: 'store-and-network' })
        }
        pullDownToRefresh
        pullDownToRefreshThreshold={50}
        pullDownToRefreshContent={
          <h3 style={{ textAlign: 'center', zIndex: 1 }}>
            &#8595; Pull down to refresh
          </h3>
        }
        releaseToRefreshContent={
          <h3 style={{ textAlign: 'center', zIndex: 1 }}>
            &#8593; Release to refresh
          </h3>
        }
      >
        {data.allNotes &&
          data.allNotes.edges.map(({ node }) => (
            <NoteItem key={node.id as string} note={node} />
          ))}
      </InfiniteScroll>
    </List>
  )
}
