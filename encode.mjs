import * as bitpackr from "bitpackr";

const PacketLayout = new bitpackr.Layout([{name: "x", bitLength: 8, elementCount: 16}], 3);

const inputSecret = process.env.SECRET_KEY.split("").map(v => v.charCodeAt(0));

const encodeBuffer = new Uint8Array(PacketLayout.getBitLength());
PacketLayout.encode("x", inputSecret, encodeBuffer);

const encoded = "0.0" + PacketLayout.encodeLayout(encodeBuffer).join("");

console.log(encoded)

const decoded = PacketLayout.decodeLayout(encoded.split("").map(v => parseInt(v)).slice(3));
const outputSecret = PacketLayout.decode("x", decoded).map(v => String.fromCharCode(v)).join("");

console.log(outputSecret)