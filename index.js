// polyfillGlobal()
// global.TextEncoder = TextEncoder;
// import "expo-dev-client"
// //@ts-expect-error
import { polyfillGlobal } from "react-native/Libraries/Utilities/PolyfillFunctions"
const { TextEncoder, TextDecoder } = require("fastestsmallesttextencoderdecoder")
// global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder
global.JSBI = require("jsbi")
require("core-js/actual/object/has-own")
require("core-js/actual/atob")
require("core-js/actual/btoa")
console.log(`polyfilled`)
// export const polyfill = () => {
//     const { TextDecoder, TextEncoder } = require("text-decoding")
//
//     polyfillGlobal("TextDecoder", () => TextDecoder)
//     polyfillGlobal("TextEncoder", () => TextEncoder)
// }
// polyfill()
// const encoders = require("fastestsmallesttextencoderdecoder")
// console.log(`imported encoders, assigning`)
// global.TextDecoder = encoders.decode;
// console.log(`assigned decoder`)
// global.TextEncoder = encoders.encode;
// console.log(`assigned encoder`)
// globalThis.JSBI = require("jsbi")
// console.log(`assigned jsbi`)
// require("fast-text-encoding")
import registerRootComponent from 'expo/build/launch/registerRootComponent';

console.log(`register root`)
registerRootComponent(require("./App").default);
