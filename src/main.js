import Vue from "vue"
import wrap from "@vue/web-component-wrapper"
import MyInput from "./components/MyInput"

const WrappedMyInput = wrap(Vue, MyInput)

window.customElements.define("my-input", WrappedMyInput)
