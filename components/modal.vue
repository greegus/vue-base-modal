<template>
    <div class="Modal">
      <div class="Modal__header" v-if="$slots.header">
          <slot name="header" />
      </div>

      <div class="Modal__close" @click="close()">
          &times;
      </div>

      <div class="Modal__content" v-if="$slots.content">
          <slot name="content" />
      </div>

      <slot />

      <div class="Modal__footer" v-if="$slots.footer">
          <slot name="footer" />
      </div>
    </div>
</template>

<script>
import bus from "../bus.js"

export default {
  name: "modal",

  methods: {
    close() {
      bus.$emit("closeTop")
    }
  }
};
</script>

<style lang="scss" scoped>
$border-line: 1px solid #ccc;

.Modal {
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: 1.5rem;

  background: white;
  border-radius: 4px;

  box-shadow: 0 2px 10px rgba(black, .1);
}

.Modal__header {
  padding: 1rem 1.5rem;
  border-bottom: $border-line;
}

.Modal__close {
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 4rem;

  font-size: 2.5rem;
  opacity: 0.4;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
}

.Modal__content {
  flex: 1 1 auto;
  display: flex;
  overflow: auto;
  padding: 1rem;
}

.Modal__footer {
  flex: 0 0 auto;
  border-top: $border-line;
}
</style>
