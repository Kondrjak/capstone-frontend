import WriteWithRevolver from "./WriteWithRevolver";

type Props = {layout: any, baseClass?: string, inputHeight?: string}

export default function WriteWithLayout({layout, baseClass, inputHeight = "0px"}:Props){
    return WriteWithRevolver({layoutRevolver: [layout], baseClass: baseClass, inputHeight: inputHeight})
}