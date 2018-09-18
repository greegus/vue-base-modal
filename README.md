

# Vue base modal
Minimalistic promise-based, programmatically-opening & stacking modal plugin for Vue.js.

## Basic usage 
Import and use the plugin in your main file.

```javascript
import VueBaseModal from 'vue-base-modal'
Vue.use(VueBaseModal)
```

Add `modal-stack` component to the end of your root component (i.e. `App.vue`). This is a placeholder for all open modals.

```html
// App.vue

<template>
  <div class="App">
    ...
    <modal-stack />
  </div>
</template>
```

Create your modal component. Use `$emit('close', result)` to close the modal (with optional return value that is going to be passed to the resolved promise).

```html
// WelcomeModal.vue

<template>
  <modal title="Hello there!" class="WelcomeModal">
    My name is {{ name }}

    <template slot="footer">
      <button @click="$emit('close')">
        Cancel
      </button>
      
      <button @click="$emit('close', true)">
        Confirm
      </button>
    </template>
  </modal>
</template>

<script>
  export default {
    props: {
      name: String
    }
  }
</script>
```

And then open your modal programmatically by calling `this.$modal(component, props)`.

```javascript
import WelcomeModal from '@/components/modals/WelcomeModal.vue'

export default {
  ...
  methods: {
    async openWelcome() {
      const result = await this.$modal(WelcomeModal, {
        name: 'Doggo'
      })

      console.log(result ? 'confirmed!' : 'canceled!')
    }
  }
}
```

## `<modal>` component 
This component provides basic layout template for your custom modal, where you should use it as its root element.

You can close you modal by firing `$emit('close', result)` from your component. `result` param is optional and passed as a result of the resolved promise returned by `this.$modal()` .

### Slots
There are three named slots (`header`, `content`, `footer`) with predefined styles (padding). Non of these is rendered when ommited.

```html
<modal>
  <template slot="header">
    This is header
  </template>

  <template slot="content">
    This is content
  </template>
  
  <template slot="content">
    This is footer
  </template>
</modal>
```

You can also use `default` slot instead of `content` which has no styles.

### Properties

#### `title`
You can use this attribute as a shorthand for modals header containing just a plain text. This is overwritten when `header` slot is used.

```html
  <modal title="The title">
    ...
  </moda>
```

is equivalent to 

```html
  <modal>
    <template slot="header">
      The title
    </template>
    ...
  </modal>
```

### Events

#### `before-close(callback)`
If provided, called when the modal is about to be closed. It receives a `callback` method that **must be called** by handler in order to close the modal, once it could be safely closed.

```html
  <template>
    <modal @before-close="beforeClose">
      ...
    </modal>
  </template>
  
  <script>
    export default {
      ...
      methods: {
        beforeClose(callback) {
          !this.isLoading && callback()
        }
      }
    }
  </script>
```