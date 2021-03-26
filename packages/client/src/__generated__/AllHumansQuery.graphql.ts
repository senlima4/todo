/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AllHumansQueryVariables = {};
export type AllHumansQueryResponse = {
    readonly allHumans: {
        readonly totalCount: number;
    } | null;
};
export type AllHumansQuery = {
    readonly response: AllHumansQueryResponse;
    readonly variables: AllHumansQueryVariables;
};



/*
query AllHumansQuery {
  allHumans {
    totalCount
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
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
        "kind": "ScalarField",
        "name": "totalCount",
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
    "name": "AllHumansQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AllHumansQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "d0de9451c382f1a040d2c566f4d933df",
    "id": null,
    "metadata": {},
    "name": "AllHumansQuery",
    "operationKind": "query",
    "text": "query AllHumansQuery {\n  allHumans {\n    totalCount\n  }\n}\n"
  }
};
})();
(node as any).hash = 'bf790d75e1f04b3047023d796ccb1acf';
export default node;
