const quertz = {
    symbol: "qwertzDesktop",
    layout:
        '^ 1 2 3 4 5 6 7 8 9 0 - = {bksp}\n'
        + 'q w e r t z u i o p [ ] \\\n'
        + 'a s d f g h j k l ; \' {enter}\n'
        + 'y x c v b n m , . / {shift}\n'
        + '.de @ {space}'
    ,
    tags: ["quertz", "lowercase", "german", "desktop"],
    fonts: ["Google Fonts Roboto"],
    author: "RomsenKabomsen"
}

const QUERTZ = {
    symbol: "QUERTZDesktop",
    layout:
        '° ! " § $ % & / ( ) ß + ≠ {bksp}\n'
        + 'Q W E R T Z U I O P { } *\n'
        + 'A S D F G H J K L ; " {enter}\n'
        + 'Y X C V B N M , . / {shift}\n'
        + '.com # {space}'
    ,
    tags: ["QUERTZ", "uppercase", "german", "desktop"],
    fonts: ["Google Fonts Roboto"],
    author: "RomsenKabomsen"
}

const quertzMobile = {
    symbol: "quertzMobile",
    layout:
        '1 2 3 4 5 6 7 8 9 0\n'
        + 'q w e r t z u i o p ü\n'
        + 'a s d f g h j k l ö ä\n'
        + '{lock} y x c v b n m {bksp}\n'
        + '{shift} ! ? {space} . {enter}'
    ,
    tags: ["quertz", "lowercase", "german", "mobile"],
    fonts: ["Google Fonts Roboto"],
    author: "RomsenKabomsen"
}

const QUERTZMobile = {
    symbol: "QUERTZMobile",
    layout:
        '1 2 3 4 5 6 7 8 9 0\n'
        + 'Q W E R T Z U I O P Ü\n'
        + 'A S D F G H J K L Ö Ä\n'
        + '{lock} Y X C V B N M {bksp}\n'
        + '{shift} : " {space} # {enter}'
    ,
    tags: ["QUERTZ", "uppercase", "german", "mobile"],
    fonts: ["Google Fonts Roboto"],
    author: "RomsenKabomsen"
}

const emojisMobile = {
    symbol: "emojisMobile",
    layout:
        '😀 😁 🤣 😗 😙 😚 😘 🤗 🤭 🤫\n'
        + '😃 😆 😂 🤩 😍 😋 🤪 🤐 😐 😶 🤔\n'
        + '😄 😅 😊 🥳 🥰 😛 😝 😴 😬 🙄 😏 😑\n'
        + '{lock} 🙃 😇 😜 🤑 🤤 😮‍💨 😒 {bksp}\n'
        + '{shift} 🙂 😉 {space} 🤨 {enter}'
    ,
    tags: ["quertz", "lowercase", "german", "mobile"],
    fonts: ["Google Fonts Roboto"],
    author: "RomsenKabomsen"
}

const subAndSup = {
    symbol: "subAndSup",
    layout:
        "¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ ⁰\n"
        +'₊ ₋ ₌ ₍ ₎ ⁽ ⁾ ⁼ ⁻ ⁺\n'
        + '₁ ₂ ₃ ₄ ₅ ₆ ₇ ₈ ₉ ₀\n'
        + '{lock} ᵝ ᵞ ᵟ ᵠ ᵡ ᵪ ᵩ {bksp}\n'
        + '{shift} ᵦ ᵧ {space} ᵨ {enter}'
    ,
    tags: ["123", "numerals", "arabic", "roman", "greeks", "mobile"],
    fonts: ["Google Fonts Roboto"],
    author: "RomsenKabomsen"
}
//const roman = "ⅰ ⅱ ⅲ ⅳ ⅴ ⅵ ⅶ ⅷ ⅸ ⅹ ⅺ ⅻ\n"
export const defaultLayouts = [
    quertz,
    QUERTZ,
    quertzMobile,
    QUERTZMobile,
    subAndSup,
    emojisMobile
]