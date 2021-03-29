/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type NoteEditorQueryVariables = {
    id: unknown;
};
export type NoteEditorQueryResponse = {
    readonly noteById: {
        readonly nodeId: string;
        readonly content: string;
    } | null;
};
export type NoteEditorQuery = {
    readonly response: NoteEditorQueryResponse;
    readonly variables: NoteEditorQueryVariables;
};



/*
query NoteEditorQuery(
  $id: UUID!
) {
  noteById(id: $id) {
    nodeId
    content
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Note",
    "kind": "LinkedField",
    "name": "noteById",
    "plural": false,
    "selections": [
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
    "name": "NoteEditorQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NoteEditorQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "13189b9e56521ae6c7c2bb4d4398ec05",
    "id": null,
    "metadata": {},
    "name": "NoteEditorQuery",
    "operationKind": "query",
    "text": "query NoteEditorQuery(\n  $id: UUID!\n) {\n  noteById(id: $id) {\n    nodeId\n    content\n  }\n}\n"
  }
};
})();
(node as any).hash = '4fb64d8dbcad4bd4ab62584bcfb248c4';
export default node;
