import {Dispatch, SetStateAction} from "react";

export type User = string


export type Codepoint = string

export type Tag = string

export type Tags = Tag[]

export type Font = string

export type Fonts = Font[]

export type CodepointGroup = {name: string;  codepoints: string[]; tags?: string[]; fonts?: string[]}

export type KeyRow = string
// exampleKeyRow = 'y x c v b n m , . / {shift}'

export type KeyLayout = KeyRow[]
// exampleKeyLayout = [
//         '1 2 3 {bksp}'
//         '4 5 6 {enter}'
//         '7 8 9 0 {shift}'
//     ]
export type KeyRevolver = KeyLayout[]
// exampleRevolver = [[
//          '1 2 3 {bksp}',
//          '4 5 6 {enter}',
//          '7 8 9 0 {space}',
//     ],[
//          'q w e r t z u i o p ü {bksp}',
//          'a s d f g h j k l ö ä {enter}',
//          'y x c v b n m , . - " {space}',
//      ]]

export type LayoutAsString = string
// example


export type SetString = Dispatch<SetStateAction<string>>
export type SetBoolean = Dispatch<SetStateAction<boolean>>

export interface IAuthContext {token: string, setToken: SetString, setLoggedIn: SetBoolean}