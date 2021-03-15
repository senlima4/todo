/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AppQueryVariables = {};
export type AppQueryResponse = {
    readonly currentHuman: {
        readonly id: unknown;
    } | null;
    readonly allHumans: {
        readonly nodes: ReadonlyArray<{
            readonly username: string | null;
        }>;
    } | null;
};
export type AppQuery = {
    readonly response: AppQueryResponse;
    readonly variables: AppQueryVariables;
};



/*
query AppQuery {
  currentHuman {
    id
  }
  allHumans {
    nodes {
      username
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Human",
    "kind": "LinkedField",
    "name": "currentHuman",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "HumansConnection",
    "kind": "LinkedField",
    "name": "allHumans",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Human",
        "kind": "LinkedField",
        "name": "nodes",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "username",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "557d61648a7f1b6c36fb09e7b1b2dabe",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery {\n  currentHuman {\n    id\n  }\n  allHumans {\n    nodes {\n      username\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'b5d5733b5714ed078982794e7260ed49';
export default node;
