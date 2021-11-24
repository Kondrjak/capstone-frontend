import {KeyLayout, KeyRevolver} from "../types/tsTypes";
import {useState} from "react";

export default function useRevolver(initialRevolver: KeyRevolver) {
    const [chamberInFocus, setChamberInFocus] = useState(0);
    const [revolver, setRevolver] = useState(initialRevolver)

    function deleteChamber(chamberToDelete: number) {
        if (revolver[chamberToDelete]) revolver.splice(chamberToDelete, 1)
        if (chamberInFocus >= chamberToDelete) setChamberInFocus(chamberInFocus - 1)
        else throw new Error("No chamber " + chamberToDelete + " exists and therefore can not be deleted.")
    }

    function addChamber(chamber: KeyLayout) {
        setRevolver([...revolver, chamber])
    }

    function cycleLeft() {
        if (chamberInFocus === 0) setChamberInFocus(revolver.length - 1)
        else setChamberInFocus(chamberInFocus - 1)
    }

    function cycleRight() {
        if (chamberInFocus === revolver.length - 1) setChamberInFocus(0)
        else setChamberInFocus(chamberInFocus + 1)
    }

    function selectedChamber() {
        return {default: revolver[chamberInFocus]}
    }

    return {revolver, selectedChamber, deleteChamber, addChamber, cycleLeft, cycleRight}
}