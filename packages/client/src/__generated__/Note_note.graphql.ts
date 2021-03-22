/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Note_note = {
    readonly id: unknown;
    readonly content: string;
    readonly createdAt: unknown | null;
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
    }
  ],
  "type": "Note",
  "abstractKey": null
};
(node as any).hash = 'dd5da7d4ea42a6238843a936addeb342';
export default node;
