import bus from "./bus.js"
import Modal from "./components/modal.vue"
import ModalStack from "./components/modal-stack.vue"

export default {
  install(Vue) {
    let sequence = 0

    Vue.component(ModalStack.name, ModalStack)
    Vue.component(Modal.name, Modal)

    Vue.prototype.$modal = function(component, props = {}) {
      return new Promise(resolve => {
        bus.$emit("open", {
            id: ++sequence,
            component, 
            props, 
            resolve
        })
      });
    };
  }
};
