<template>
    <div class="ModalStack">
      <transition name="backdrop">
        <div class="ModalStack__backdrop" v-if="modals.length"/>
      </transition>

      <transition-group name="modal">
        <div v-for="modal in modals" class="ModalStack__modalWrapper" :key="modal.id" @click="closeByBackdropClick($event, modal)">
          <component
            class="ModalStack__modal"
            v-bind="modal.props"
            :is="modal.component"
            :class="{isTop: topModal.id === modal.id}"
            @close="close(modal, $event)"
          />
        </div>
      </transition-group>
    </div>
</template>

<script>
import bus from "../bus.js"

export default {
  name: "modal-stack",

  data() {
    return {
      modals: []
    }
  },

  computed: {
    topModal() {
      return this.modals.length ? this.modals[this.modals.length - 1] : null;
    }
  },

  methods: {
    open(modal) {
      this.modals.push(modal)
    },

    close(modal, result = undefined) {
      this.modals = this.modals.filter(({id}) => id !== modal.id)
      modal.resolve(result)
    },

    closeTop() {
      this.close(this.topModal)
    },

    closeByEscKey(e) {
      if (this.topModal && e.key === "Escape" && !e.defaultPrevented) {
        e.preventDefault();
        this.closeTop();
      }
    },

    closeByBackdropClick(e, modal) {
      if (e.target === e.currentTarget) {
        this.close(modal);
      }
    }
  },

  mounted() {
    document.body.appendChild(this.$el)
    document.addEventListener("keydown", this.closeByEscKey);
    
    bus.$on("open", this.open)
    bus.$on("close", this.close)
    bus.$on("closeTop", this.closeTop)
  },

  destroyed() {
    document.body.removeChild(this.$el)
    document.removeEventListener("keydown", this.closeByEscKey);

    bus.$off("open", this.open)
    bus.$off("close", this.close)
    bus.$off("closeTop", this.closeTop)
  }
};
</script>

<style lang="scss" scoped>
.ModalStack {
  position: fixed;
  z-index: 1050;
}

.ModalStack__backdrop {
  background: rgba(black, 0.35);

  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.ModalStack__modalWrapper {
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.ModalStack__modal {
  transition: filter .15s;

  &:not(.isTop) {
    filter: brightness(80%);
  }
}

// 

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}

.backdrop-enter-active,
.backdrop-leave-active {
  transition: opacity 0.25s;
}

.backdrop-enter,
.backdrop-leave-to {
  opacity: 0;
}
</style>
