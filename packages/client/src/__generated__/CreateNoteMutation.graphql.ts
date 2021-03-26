/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type CreateNoteInput = {
    clientMutationId?: string | null;
    note: NoteInput;
};
export type NoteInput = {
    content: string;
    createdAt?: unknown | null;
    humanId: unknown;
    id?: unknown | null;
    updatedAt?: unknown | null;
};
export type CreateNoteMutationVariables = {
    input: CreateNoteInput;
};
export type CreateNoteMutationResponse = {
    readonly createNote: {
        readonly note: {
            readonly id: unknown;
            readonly nodeId: string;
            readonly content: string;
            readonly createdAt: unknown | null;
            readonly updatedAt: unknown | null;
        } | null;
        readonly noteEdge: {
            readonly node: {
                readonly id: unknown;
                readonly nodeId: string;
                readonly content: string;
                readonly updatedAt: unknown | null;
                readonly createdAt: unknown | null;
            };
        } | null;
    } | null;
};
export type CreateNoteMutation = {
    readonly response: CreateNoteMutationResponse;
    readonly variables: CreateNoteMutationVariables;
};



/*
mutation CreateNoteMutation(
  $input: CreateNoteInput!
) {
  createNote(input: $input) {
    note {
      id
      nodeId
      content
      createdAt
      updatedAt
    }
    noteEdge {
      node {
        id
        nodeId
        content
        updatedAt
        createdAt
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nodeId",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "updatedAt",
  "storageKey": null
},
v6 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateNotePayload",
    "kind": "LinkedField",
    "name": "createNote",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Note",
        "kind": "LinkedField",
        "name": "note",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "NotesEdge",
        "kind": "LinkedField",
        "name": "noteEdge",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Note",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/),
              (v5/*: any*/),
              (v4/*: any*/)
            ],
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateNoteMutation",
    "selections": (v6/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateNoteMutation",
    "selections": (v6/*: any*/)
  },
  "params": {
    "cacheID": "ac1f35269d9daf2d564d35f383a16896",
    "id": null,
    "metadata": {},
    "name": "CreateNoteMutation",
    "operationKind": "mutation",
    "text": "mutation CreateNoteMutation(\n  $input: CreateNoteInput!\n) {\n  createNote(input: $input) {\n    note {\n      id\n      nodeId\n      content\n      createdAt\n      updatedAt\n    }\n    noteEdge {\n      node {\n        id\n        nodeId\n        content\n        updatedAt\n        createdAt\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e3bdf70fafa03054a7c3a3435c4ede3e';
export default node;
