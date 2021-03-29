/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Note_note = {
    readonly id: unknown;
    readonly nodeId: string;
    readonly content: string;
    readonly updatedAt: unknown | null;
    readonly " $refType": "Note_note";
};
export type Note_note$data = Note_note;
export type Note_note$key = {
    readonly " $data"?: Note_note$data;
    readonly " $fragmentRefs": FragmentRefs<"Note_note">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Note_note",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
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
      "name": "updatedAt",
      "storageKey": null
    }
  ],
  "type": "Note",
  "abstractKey": null
};
(node as any).hash = '9f533bdf4ae6f9d79965b910cf9f9c4f';
export default node;
