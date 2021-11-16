import {KeyRow} from "../types/tsTypes";

export class KeyboardLayout {
    private rows: String[][]

    constructor(layout: KeyRow[]) {
        this.rows = layout.map(keyRow=>keyRow.split(" "))
        // check if key repetitions are present
        const keys: String[] = this.rows.flatMap(key=>key)
        const repetitions: String[] = keys.filter(key=>keys.includes(key))
        if(repetitions.length>0){
            throw new Error("No repetitive keys allowed. Check " + repetitions.join() + ".")
        }
    }

    substitute(key:string, newKey:string){
        this.rows.forEach( row => {
            if (row.includes(key)) {
                const i = row.indexOf(key)
                row[i] = newKey
            }
        })
    }

    get(){
        return this.rows.map(row=>row.join(" "))
    }
}