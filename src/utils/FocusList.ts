export class FocusList<T> {
    private readonly array: T[];
    private focus: number;

    constructor(array: T[] = [], focus: number = 0) {
        this.array = array
        this.focus = focus
    }

    length() {
        return this.array.length;
    }

    getFocus() {
        return this.focus
    }

    setFocus(focus: number) {
        if(focus >= this.length())
        this.focus = focus
    }

    getContent() {
        return this.array;
    }

    getItemInFocus() {
        return this.array[this.focus]
    }

    shiftFocusLeft() {
        if (this.focus === 0) this.focus = this.length() - 1
        else this.focus = this.focus - 1
    }

    shiftFocusRight() {
        if (this.focus === this.length() - 1) this.focus = 0
        else this.focus = this.focus + 1
    }

    contains(item: T){
        return this.array.includes(item)
    }

    push(items: T[]) {
        const itemsIncluded = items.filter(item => this.contains(item))
        if (itemsIncluded.length > 0) throw new Error("There are " + itemsIncluded.length
            + " items already included in this list. "
            + "Prevent repetition of items: " + itemsIncluded.join() + ".")
        else this.array.push(...items)
    }

    delete(item: T) {
        const index = this.array.indexOf(item);
        if (index === undefined) throw new Error("There is no item " + item + " to delete in this list.")
        else {
            this.array.splice(index, 1)
            // item in focus might has left, shift:
            if (index<this.focus){
                this.shiftFocusLeft()
            }
        }
    }

    permuteElements(item1: T, item2: T) {
        const index1 = this.array.indexOf(item1)
        const index2 = this.array.indexOf(item2)
        let err = ""
        if (index1 === undefined) err += "The item " + item1 + " is not contained in this list. "
        if (index2 === undefined) err += "The item " + item2 + " is not contained in this list. "
        if (err.length > 0) throw new Error(err + "Permutation can not be applied.")
        else this.permute(index1, index2)
    }

    /**
     * @param index1 - not checked for being inside bounds
     * @param index2 - not checked for being inside bounds
     */
    permute(index1: number, index2: number) {
        // permute items
        const itemX = this.array[index2];
        this.array[index2] = this.array[index1]
        this.array[index1] = itemX
        // permute focus if necessary
        if (index1 === this.focus) this.focus = index2
        if (index2 === this.focus) this.focus = index1
    }

    insertAt(index: number, item: T) {
        if ((index < 0) || (index >= this.array.length)) {
            throw new Error("No index " + index + " in this list with length" + this.length()
                + ". Item can not be inserted.")
        } else if (this.array.includes(item)) {
            throw new Error("Item " + item + " already included.")
        } else {
            // insert item
            this.array.splice(index, 0, item)
            // item in focus might have run away, catch up:
            if (this.focus > index) {
                this.shiftFocusRight()
            }
        }
    }

    insertAtFocus(item:T){
        this.insertAt(this.focus, item)
    }

    substitute(oldItem: T, newItem: T) {
        const maybeIndex: number|undefined = this.array.indexOf(oldItem)
        this.delete(oldItem)
        this.insertAt(maybeIndex, newItem)
    }
}