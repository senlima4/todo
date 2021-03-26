import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { graphql } from 'babel-plugin-relay/macro'
import { usePaginationFragment } from 'react-relay/hooks'
import { Flex, useColorModeValue } from '@chakra-ui/react'
import InfiniteScroll from 'react-infinite-scroll-component'

import { NotesList_query$key } from '@/__generated__/NotesList_query.graphql'
import { refreshNoteAtom } from '@/utils/atom'

import NoteItem from './Note'

type PropsType = {
  query: NotesList_query$key
}

export default function NotesList({ query }: PropsType) {
  const [shouldRefresh] = useAtom(refreshNoteAtom)
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
              ...Note_note
            }
          }
        }
      }
    `,
    query
  )

  useEffect(() => {
    if (shouldRefresh) refetch({}, { fetchPolicy: 'store-and-network' })
  }, [shouldRefresh])

  const loadMore = () => {
    if (isLoadingNext) return
    loadNext(10)
  }

  return (
    <Flex w="full" h="full" flexDir="column" bgColor={listBg}>
      <InfiniteScroll
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
    </Flex>
  )
}
