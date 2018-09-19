<template>
    <div class="Modal">
      <div class="Modal__headerWrapper">
        <div class="Modal__header" v-if="$slots.header || title">
            <slot name="header">{{ title }}</slot>
        </div>

        <div class="Modal__close" @click="close()">
            <span>&times;</span>
        </div>
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

  props: {
    title: String
  },

  methods: {
    close() {
      bus.$emit("closeTop")
    }
  }
};
</script>

<style lang="scss" scoped>
$border-line: 1px solid rgba(black, 0.1);

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
  padding: 1.25rem 4rem 1.25rem 1.5rem;
  border-bottom: $border-line;
}

.Modal__headerWrapper {
  position: relative;
  z-index: 1;
}

.Modal__close {
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  min-height: 3.5rem;
  max-height: 5.5rem;
  height: 100%;

  font-size: 2rem;
  opacity: 0.4;

  span {
    transform: translateY(-0.25rem);
  }

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
}

.Modal__content {
  flex: 1 1 auto;
  overflow: auto;
  padding: 1.5rem;
}

.Modal__footer {
  flex: 0 0 auto;
  border-top: $border-line;
}
</style>
