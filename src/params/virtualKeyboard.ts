import {KeyLayout} from "../types/tsTypes";
import {KeyboardLayout} from "../services/KeyboardLayout";

export const keyboardHeight = 400;

function remapSymbols(oldAlphabet: string[], newAlphabet: string[], layout: KeyLayout) {
    if (newAlphabet.length !== oldAlphabet.length) throw Error("mapping must be one to one")

    let keyRows = layout.join("\n")
    const kLayout = new KeyboardLayout(keyRows);
    for(let i=0; i<newAlphabet.length; i++){
        kLayout.substitute(oldAlphabet[i],newAlphabet[i])
    }
    return kLayout.getKeyRows()
}

const lowercaseStandard = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const uppercaseStandard = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const lowercaseSerifItalic = ['𝑎', '𝑏', '𝑐', '𝑑', '𝑒', '𝑓', '𝑔', 'ℎ', '𝑖', '𝑗', '𝑘', '𝑙', '𝑚', '𝑛', '𝑜', '𝑝', '𝑞', '𝑟', '𝑠', '𝑡', '𝑢', '𝑣', '𝑤', '𝑥', '𝑦', '𝑧']
const uppercaseSerifItalic = ['𝐴', '𝐵', '𝐶', '𝐷', '𝐸', '𝐹', '𝐺', '𝐻', '𝐼', '𝐽', '𝐾', '𝐿', '𝑀', '𝑁', '𝑂', '𝑃', '𝑄', '𝑅', '𝑆', '𝑇', '𝑈', '𝑉', '𝑊', '𝑋', '𝑌', '𝑍']
const lowercaseMonoSpace = ['𝚊', '𝚋', '𝚌', '𝚍', '𝚎', '𝚏', '𝚐', '𝚑', '𝚒', '𝚓', '𝚔', '𝚕', '𝚖', '𝚗', '𝚘', '𝚙', '𝚚', '𝚛', '𝚜', '𝚝', '𝚞', '𝚟', '𝚠', '𝚡', '𝚢', '𝚣']
const uppercaseMonoSpace = ['𝙰', '𝙱', '𝙲', '𝙳', '𝙴', '𝙵', '𝙶', '𝙷', '𝙸', '𝙹', '𝙺', '𝙻', '𝙼', '𝙽', '𝙾', '𝙿', '𝚀', '𝚁', '𝚂', '𝚃', '𝚄', '𝚅', '𝚆', '𝚇', '𝚈', '𝚉']
const lowercaseScript = ['𝒶', '𝒷', '𝒸', '𝒹', 'ℯ', '𝒻', 'ℊ', '𝒽', '𝒾', '𝒿', '𝓀', '𝓁', '𝓂', '𝓃', 'ℴ', '𝓅', '𝓆', '𝓇', '𝓈', '𝓉', '𝓊', '𝓋', '𝓌', '𝓍', '𝓎', '𝓏']
const uppercaseScript = ['𝒜', 'ℬ', '𝒞', '𝒟', 'ℰ', 'ℱ', '𝒢', 'ℋ', 'ℐ', '𝒥', '𝒦', 'ℒ', 'ℳ', '𝒩', '𝒪', '𝒫', '𝒬', 'ℛ', '𝒮', '𝒯', '𝒰', '𝒱', '𝒲', '𝒳', '𝒴', '𝒵']
const lowercaseScriptBold = ['𝓪', '𝓫', '𝓬', '𝓭', '𝓮', '𝓯', '𝓰', '𝓱', '𝓲', '𝓳', '𝓴', '𝓵', '𝓶', '𝓷', '𝓸', '𝓹', '𝓺', '𝓻', '𝓼', '𝓽', '𝓾', '𝓿', '𝔀', '𝔁', '𝔂', '𝔃']
const uppercaseScriptBold = ['𝓐', '𝓑', '𝓒', '𝓓', '𝓔', '𝓕', '𝓖', '𝓗', '𝓘', '𝓙', '𝓚', '𝓛', '𝓜', '𝓝', '𝓞', '𝓟', '𝓠', '𝓡', '𝓢', '𝓣', '𝓤', '𝓥', '𝓦', '𝓧', '𝓨', '𝓩']

const quertzLC = [
    '{tab} q w e r t z u i o p ü ß {bksp}',
    '{lock} a s d f g h j k l ö ä {enter}',
    '{shift} y x c v b n m , . - " {space}',
]

const quertzUC = [
    '{tab} Q W E R T Z U I O P Ü ? {bksp}',
    '{lock} A S D F G H J K L Ö Ä {enter}',
    '{shift} Y X C V B N M ; : _ ! {space}',
]

const emojis = [
    '{tab} 💒 💌 💖 💓 💗 💘 💝 💞 💕 ❤️‍🔥 ❤ {bksp}',
    '{lock} ❤️ 🧡 💛 💚 💙 💜 🖤 🤍 🤎 ♥️ 💟 {enter}',
    '{shift} 😍 🥰 😘 😽 💑🏽 💏 💋 ✨ 🎁 🧧 🎀 {space}',
]

export const exampleRevolver = [
    quertzLC,
    quertzUC,
    remapSymbols(lowercaseStandard, lowercaseSerifItalic, quertzLC),
    remapSymbols(uppercaseStandard, uppercaseSerifItalic, quertzUC),
    remapSymbols(lowercaseStandard, lowercaseMonoSpace, quertzLC),
    remapSymbols(uppercaseStandard, uppercaseMonoSpace, quertzUC),
    emojis,
    remapSymbols(lowercaseStandard, lowercaseScript, quertzLC),
    remapSymbols(uppercaseStandard, uppercaseScript, quertzUC),
    remapSymbols(lowercaseStandard, lowercaseScriptBold, quertzLC),
    remapSymbols(uppercaseStandard, uppercaseScriptBold, quertzUC),
]