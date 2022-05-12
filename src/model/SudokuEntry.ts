export enum EntryType {
    Dynamic,
    Static 
}

export class SudokuEntry {
    private index: number
    private type: EntryType
    private value: number
}

