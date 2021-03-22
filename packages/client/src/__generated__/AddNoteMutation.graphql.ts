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
export type AddNoteMutationVariables = {
    input: CreateNoteInput;
};
export type AddNoteMutationResponse = {
    readonly createNote: {
        readonly note: {
            readonly id: unknown;
            readonly content: string;
            readonly createdAt: unknown | null;
            readonly updatedAt: unknown | null;
        } | null;
        readonly noteEdge: {
            readonly node: {
                readonly id: unknown;
                readonly updatedAt: unknown | null;
                readonly createdAt: unknown | null;
            };
        } | null;
    } | null;
};
export type AddNoteMutation = {
    readonly response: AddNoteMutationResponse;
    readonly variables: AddNoteMutationVariables;
};



/*
mutation AddNoteMutation(
  $input: CreateNoteInput!
) {
  createNote(input: $input) {
    note {
      id
      content
      createdAt
      updatedAt
    }
    noteEdge {
      node {
        id
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
  "name": "createdAt",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "updatedAt",
  "storageKey": null
},
v4 = [
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "content",
            "storageKey": null
          },
          (v2/*: any*/),
          (v3/*: any*/)
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
              (v3/*: any*/),
              (v2/*: any*/)
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
    "name": "AddNoteMutation",
    "selections": (v4/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddNoteMutation",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "4ea40611373cc535e1057a01c93a045a",
    "id": null,
    "metadata": {},
    "name": "AddNoteMutation",
    "operationKind": "mutation",
    "text": "mutation AddNoteMutation(\n  $input: CreateNoteInput!\n) {\n  createNote(input: $input) {\n    note {\n      id\n      content\n      createdAt\n      updatedAt\n    }\n    noteEdge {\n      node {\n        id\n        updatedAt\n        createdAt\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'a39bd603e38d058b6f30ffa92cc2c2de';
export default node;
