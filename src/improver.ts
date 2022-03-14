import * as bitpackr from "bitpackr"

const improve = (input: string): string => {
    const PacketLayout = new bitpackr.Layout([{name: "x", bitLength: 8, elementCount: 16}], 3)
    const buffer = new Uint8Array(input.split("").map(v => parseInt(v)).slice(3));

    const decoded = PacketLayout.decodeLayout(buffer)
    const data = PacketLayout.decode("x", decoded) as number[]
    return data.map(v => String.fromCharCode(v)).join("")
}

export default improve
