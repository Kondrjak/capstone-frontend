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
        for(let i=0; i<keys.length; i++){
            const occurrences = keys.filter(key => (key===keys[i]))
            if(occurrences.length>1){

                throw new Error("No repetitive keys allowed. Check " + keys[i] + ".")
            }
        }
    }

    includes(key: String){
        const keys: String[] = this.rows.flatMap(key => key)
        return keys.includes(key)
    }

    substitute(key: string, newKey: string) {
        if(this.includes(newKey)) throw new Error("New key "+newKey+" can not replace "+key+" since already present in this layout"+this.getLayout()+".")
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