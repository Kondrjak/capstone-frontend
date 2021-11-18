import {KeyRow} from "../types/tsTypes";

export class KeyboardLayout {
    private rows: string[][]

    constructor(layout: string) {
        const keyRows: KeyRow[] = layout.split("\n")
        this.rows = keyRows.map(keyRow => keyRow.split(" "))
        this.checkForRepetitions()
    }

    checkForRepetitions() {
        const keys: string[] = this.rows.flatMap(key => key)
        const repetitions: string[] = keys.filter(key => keys.includes(key))
        if (repetitions.length > 0) {
            throw new Error("No repetitive keys allowed. Check " + repetitions.join() + ".")
        }
    }

    includes(key: String){
        const keys: String[] = this.rows.flatMap(key => key)
        return keys.includes(key)
    }

    substitute(key: string, newKey: string) {
        if(this.includes(newKey)) throw new Error("New key "+newKey+" is already present in this layout.")
        this.rows.forEach(row => {
            if (row.includes(key)) {
                const i = row.indexOf(key)
                row[i] = newKey
            }
        })
    }

    getKeyRows() {
        const keyRows: KeyRow[] = this.rows.map(row => row.join(" "))
        return keyRows
    }

    getLayout() {
        return this.getKeyRows().join("\n")
    }
}