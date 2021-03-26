/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RootQueryVariables = {};
export type RootQueryResponse = {
    readonly allHumans: {
        readonly totalCount: number;
    } | null;
    readonly currentHuman: {
        readonly " $fragmentRefs": FragmentRefs<"useAuth_human">;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"NotesList_query">;
};
export type RootQuery = {
    readonly response: RootQueryResponse;
    readonly variables: RootQueryVariables;
};



/*
query RootQuery {
  ...NotesList_query
  allHumans {
    totalCount
  }
  currentHuman {
    ...useAuth_human
  }
}

fragment Note_note on Note {
  id
  nodeId
  content
  createdAt
  updatedAt
}

fragment NotesList_query on Query {
  allNotes(first: 10) {
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
        __typename
      }
      cursor
    }
  }
}

fragment useAuth_human on Human {
  id
  username
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "concreteType": "HumansConnection",
  "kind": "LinkedField",
  "name": "allHumans",
  "plural": false,
  "selections": [
    (v0/*: any*/)
  ],
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = [
  (v2/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "username",
    "storageKey": null
  }
],
v4 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "RootQuery",
    "selections": [
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "Human",
        "kind": "LinkedField",
        "name": "currentHuman",
        "plural": false,
        "selections": [
          {
            "kind": "InlineDataFragmentSpread",
            "name": "useAuth_human",
            "selections": (v3/*: any*/)
          }
        ],
        "storageKey": null
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "NotesList_query"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "RootQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": "NotesConnection",
        "kind": "LinkedField",
        "name": "allNotes",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasPreviousPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "startCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "NotesEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Note",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "nodeId",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "content",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "createdAt",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "updatedAt",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "allNotes(first:10)"
      },
      {
        "alias": null,
        "args": (v4/*: any*/),
        "filters": [],
        "handle": "connection",
        "key": "Notes_allNotes",
        "kind": "LinkedHandle",
        "name": "allNotes"
      },
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "Human",
        "kind": "LinkedField",
        "name": "currentHuman",
        "plural": false,
        "selections": (v3/*: any*/),
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "76ea30602a5a6526071d1a4af7e35332",
    "id": null,
    "metadata": {},
    "name": "RootQuery",
    "operationKind": "query",
    "text": "query RootQuery {\n  ...NotesList_query\n  allHumans {\n    totalCount\n  }\n  currentHuman {\n    ...useAuth_human\n  }\n}\n\nfragment Note_note on Note {\n  id\n  nodeId\n  content\n  createdAt\n  updatedAt\n}\n\nfragment NotesList_query on Query {\n  allNotes(first: 10) {\n    totalCount\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n    edges {\n      node {\n        id\n        ...Note_note\n        __typename\n      }\n      cursor\n    }\n  }\n}\n\nfragment useAuth_human on Human {\n  id\n  username\n}\n"
  }
};
})();
(node as any).hash = '183357e41d4e70b6f8cff4a627d24b49';
export default node;
