import { atom } from 'jotai'

export const refreshNoteAtom = atom(false)

export const noteAtom = atom<string | null>(null)

export const refetchNotesAtom = atom(false)
