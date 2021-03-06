(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (factory((global.index = {}),global.Vue));
}(this, (function (exports,Vue) { 'use strict';

  Vue = Vue && Vue.hasOwnProperty('default') ? Vue['default'] : Vue;

  var bus = new Vue();

  //

  var script = {
    name: "modal",

    props: {
      title: String
    },

    methods: {
      close: function close() {
        bus.$emit("closeTop");
      }
    }
  };

  /* script */
              var __vue_script__ = script;
              
  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { staticClass: "Modal" },
      [
        _c("div", { staticClass: "Modal__headerWrapper" }, [
          _vm.$slots.header || _vm.title
            ? _c(
                "div",
                { staticClass: "Modal__header" },
                [_vm._t("header", [_vm._v(_vm._s(_vm.title))])],
                2
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "Modal__close",
              on: {
                click: function($event) {
                  _vm.close();
                }
              }
            },
            [_c("span", [_vm._v("×")])]
          )
        ]),
        _vm._v(" "),
        _vm.$slots.content
          ? _c("div", { staticClass: "Modal__content" }, [_vm._t("content")], 2)
          : _vm._e(),
        _vm._v(" "),
        _vm._t("default"),
        _vm._v(" "),
        _vm.$slots.footer
          ? _c("div", { staticClass: "Modal__footer" }, [_vm._t("footer")], 2)
          : _vm._e()
      ],
      2
    )
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    var __vue_inject_styles__ = function (inject) {
      if (!inject) { return }
      inject("data-v-7ff70be4_0", { source: "\n.Modal[data-v-7ff70be4] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  margin: 1.5rem;\n  background: white;\n  border-radius: 4px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.Modal__header[data-v-7ff70be4] {\n  padding: 1.25rem 4rem 1.25rem 1.5rem;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n.Modal__headerWrapper[data-v-7ff70be4] {\n  position: relative;\n  z-index: 1;\n}\n.Modal__close[data-v-7ff70be4] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 4rem;\n  min-height: 3.5rem;\n  max-height: 5.5rem;\n  height: 100%;\n  font-size: 2rem;\n  opacity: 0.4;\n}\n.Modal__close span[data-v-7ff70be4] {\n    transform: translateY(-0.25rem);\n}\n.Modal__close[data-v-7ff70be4]:hover {\n    opacity: 1;\n    cursor: pointer;\n}\n.Modal__content[data-v-7ff70be4] {\n  flex: 1 1 auto;\n  overflow: auto;\n  padding: 1.5rem;\n}\n.Modal__footer[data-v-7ff70be4] {\n  flex: 0 0 auto;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n/*# sourceMappingURL=modal.vue.map */", map: {"version":3,"sources":["/Users/greegus/Projects/vue-modals/src/components/modal.vue","modal.vue"],"names":[],"mappings":";AA6CA;EACA,mBAAA;EAEA,cAAA;EACA,uBAAA;EACA,qBAAA;EACA,eAAA;EAEA,kBAAA;EACA,mBAAA;EAEA,0CAAA;CACA;AAEA;EACA,qCAAA;EACA,4CAlBA;CAmBA;AAEA;EACA,mBAAA;EACA,WAAA;CACA;AAEA;EACA,mBAAA;EACA,OAAA;EACA,SAAA;EAEA,cAAA;EACA,wBAAA;EACA,oBAAA;EACA,YAAA;EACA,mBAAA;EACA,mBAAA;EACA,aAAA;EAEA,gBAAA;EACA,aAAA;CAUA;AAxBA;IAiBA,gCAAA;CACA;AAlBA;IAqBA,WAAA;IACA,gBAAA;CACA;AAGA;EACA,eAAA;EACA,eAAA;EACA,gBAAA;CACA;AAEA;EACA,eAAA;EACA,yCA5DA;CA6DA;;AC1DA,qCAAqC","file":"modal.vue","sourcesContent":[null,".Modal {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  margin: 1.5rem;\n  background: white;\n  border-radius: 4px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); }\n\n.Modal__header {\n  padding: 1.25rem 4rem 1.25rem 1.5rem;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1); }\n\n.Modal__headerWrapper {\n  position: relative;\n  z-index: 1; }\n\n.Modal__close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 4rem;\n  min-height: 3.5rem;\n  max-height: 5.5rem;\n  height: 100%;\n  font-size: 2rem;\n  opacity: 0.4; }\n  .Modal__close span {\n    transform: translateY(-0.25rem); }\n  .Modal__close:hover {\n    opacity: 1;\n    cursor: pointer; }\n\n.Modal__content {\n  flex: 1 1 auto;\n  overflow: auto;\n  padding: 1.5rem; }\n\n.Modal__footer {\n  flex: 0 0 auto;\n  border-top: 1px solid rgba(0, 0, 0, 0.1); }\n\n/*# sourceMappingURL=modal.vue.map */"]}, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__ = "data-v-7ff70be4";
    /* module identifier */
    var __vue_module_identifier__ = undefined;
    /* functional template */
    var __vue_is_functional_template__ = false;
    /* component normalizer */
    function __vue_normalize__(
      template, style, script$$1,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "/Users/greegus/Projects/vue-modals/src/components/modal.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) { component.functional = true; }
      }

      component._scopeId = scope;

      {
        var hook;
        if (style) {
          hook = function(context) {
            style.call(this, createInjector(context));
          };
        }

        if (hook !== undefined) {
          if (component.functional) {
            // register for functional component in vue file
            var originalRender = component.render;
            component.render = function renderWithStyleInjection(h, context) {
              hook.call(context);
              return originalRender(h, context)
            };
          } else {
            // inject component registration as beforeCreate hook
            var existing = component.beforeCreate;
            component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
        }
      }

      return component
    }
    /* style inject */
    function __vue_create_injector__() {
      var head = document.head || document.getElementsByTagName('head')[0];
      var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
      var isOldIE =
        typeof navigator !== 'undefined' &&
        /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

      return function addStyle(id, css) {
        if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

        var group = isOldIE ? css.media || 'default' : id;
        var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

        if (!style.ids.includes(id)) {
          var code = css.source;
          var index = style.ids.length;

          style.ids.push(id);

          if (isOldIE) {
            style.element = style.element || document.querySelector('style[data-group=' + group + ']');
          }

          if (!style.element) {
            var el = style.element = document.createElement('style');
            el.type = 'text/css';

            if (css.media) { el.setAttribute('media', css.media); }
            if (isOldIE) {
              el.setAttribute('data-group', group);
              el.setAttribute('data-next-index', '0');
            }

            head.appendChild(el);
          }

          if (isOldIE) {
            index = parseInt(style.element.getAttribute('data-next-index'));
            style.element.setAttribute('data-next-index', index + 1);
          }

          if (style.element.styleSheet) {
            style.parts.push(code);
            style.element.styleSheet.cssText = style.parts
              .filter(Boolean)
              .join('\n');
          } else {
            var textNode = document.createTextNode(code);
            var nodes = style.element.childNodes;
            if (nodes[index]) { style.element.removeChild(nodes[index]); }
            if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
            else { style.element.appendChild(textNode); }
          }
        }
      }
    }
    /* style inject SSR */
    

    
    var Modal = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      __vue_create_injector__,
      undefined
    );

  //

  var script$1 = {
    name: "modal-stack",

    data: function data() {
      return {
        modals: []
      }
    },

    computed: {
      topModal: function topModal() {
        return this.modals.length ? this.modals[this.modals.length - 1] : null
      }
    },

    methods: {
      open: function open(modal) {
        this.modals.push(modal);
      },

      close: function close(modal, result) {
        var this$1 = this;
        if ( result === void 0 ) result = undefined;

        var closingRoutine = function () {
          this$1.modals = this$1.modals.filter(function (ref) {
            var id = ref.id;

            return id !== modal.id;
          });
          modal.resolve(result);
        };

        var modalInstance = this._getModalInstance(modal);

        if ('before-close' in modalInstance.$listeners) {
          modalInstance.$emit('before-close', closingRoutine);
        } else {
          closingRoutine();
        }
      },

      closeTop: function closeTop() {
        this.close(this.topModal);
      },

      closeByEscKey: function closeByEscKey(e) {
        if (this.topModal && e.key === "Escape" && !e.defaultPrevented) {
          e.preventDefault();
          this.closeTop();
        }
      },

      closeByBackdropClick: function closeByBackdropClick(e, modal) {
        if (e.target === e.currentTarget) {
          this.close(modal);
        }
      },

      _getModalInstance: function _getModalInstance(modal) {
        return this.$refs[("modal_" + (modal.id))][0].$children[0]
      }
    },

    mounted: function mounted() {
      document.body.appendChild(this.$el);
      document.addEventListener("keydown", this.closeByEscKey);
      
      bus.$on("open", this.open);
      bus.$on("close", this.close);
      bus.$on("closeTop", this.closeTop);
    },

    destroyed: function destroyed() {
      document.body.removeChild(this.$el);
      document.removeEventListener("keydown", this.closeByEscKey);

      bus.$off("open", this.open);
      bus.$off("close", this.close);
      bus.$off("closeTop", this.closeTop);
    }
  };

  /* script */
              var __vue_script__$1 = script$1;
              
  /* template */
  var __vue_render__$1 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { staticClass: "ModalStack" },
      [
        _c("transition", { attrs: { name: "backdrop" } }, [
          _vm.modals.length
            ? _c("div", { staticClass: "ModalStack__backdrop" })
            : _vm._e()
        ]),
        _vm._v(" "),
        _c(
          "transition-group",
          { attrs: { name: "modal" } },
          _vm._l(_vm.modals, function(modal) {
            return _c(
              "div",
              {
                key: modal.id,
                staticClass: "ModalStack__modalWrapper",
                on: {
                  click: function($event) {
                    _vm.closeByBackdropClick($event, modal);
                  }
                }
              },
              [
                _c(
                  modal.component,
                  _vm._b(
                    {
                      ref: "modal_" + modal.id,
                      refInFor: true,
                      tag: "component",
                      staticClass: "ModalStack__modal",
                      class: { isTop: _vm.topModal.id === modal.id },
                      on: {
                        close: function($event) {
                          _vm.close(modal, $event);
                        }
                      }
                    },
                    "component",
                    modal.props,
                    false
                  )
                )
              ],
              1
            )
          })
        )
      ],
      1
    )
  };
  var __vue_staticRenderFns__$1 = [];
  __vue_render__$1._withStripped = true;

    /* style */
    var __vue_inject_styles__$1 = function (inject) {
      if (!inject) { return }
      inject("data-v-5dcf9c78_0", { source: "\n.ModalStack[data-v-5dcf9c78] {\n  position: fixed;\n  z-index: 1050;\n}\n.ModalStack__backdrop[data-v-5dcf9c78] {\n  background: rgba(0, 0, 0, 0.35);\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.ModalStack__modalWrapper[data-v-5dcf9c78] {\n  position: fixed;\n  z-index: 2;\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n.ModalStack__modal[data-v-5dcf9c78] {\n  transition: filter .15s;\n}\n.ModalStack__modal[data-v-5dcf9c78]:not(.isTop) {\n    filter: brightness(80%);\n}\n.modal-enter-active[data-v-5dcf9c78],\n.modal-leave-active[data-v-5dcf9c78] {\n  transition: opacity 0.25s;\n}\n.modal-enter[data-v-5dcf9c78],\n.modal-leave-to[data-v-5dcf9c78] {\n  opacity: 0;\n}\n.backdrop-enter-active[data-v-5dcf9c78],\n.backdrop-leave-active[data-v-5dcf9c78] {\n  transition: opacity 0.25s;\n}\n.backdrop-enter[data-v-5dcf9c78],\n.backdrop-leave-to[data-v-5dcf9c78] {\n  opacity: 0;\n}\n\n/*# sourceMappingURL=modal-stack.vue.map */", map: {"version":3,"sources":["/Users/greegus/Projects/vue-modals/src/components/modal-stack.vue","modal-stack.vue"],"names":[],"mappings":";AAsGA;EACA,gBAAA;EACA,cAAA;CACA;AAEA;EACA,gCAAA;EAEA,gBAAA;EACA,WAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EACA,aAAA;CACA;AAEA;EACA,gBAAA;EACA,WAAA;EACA,OAAA;EACA,QAAA;EAEA,cAAA;EACA,uBAAA;EACA,wBAAA;EACA,oBAAA;EACA,YAAA;EACA,aAAA;CACA;AAEA;EACA,wBAAA;CAKA;AANA;IAIA,wBAAA;CACA;AAKA;;EAEA,0BAAA;CACA;AAEA;;EAEA,WAAA;CACA;AAEA;;EAEA,0BAAA;CACA;AAEA;;EAEA,WAAA;CACA;;AClHA,2CAA2C","file":"modal-stack.vue","sourcesContent":[null,".ModalStack {\n  position: fixed;\n  z-index: 1050; }\n\n.ModalStack__backdrop {\n  background: rgba(0, 0, 0, 0.35);\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\n.ModalStack__modalWrapper {\n  position: fixed;\n  z-index: 2;\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%; }\n\n.ModalStack__modal {\n  transition: filter .15s; }\n  .ModalStack__modal:not(.isTop) {\n    filter: brightness(80%); }\n\n.modal-enter-active,\n.modal-leave-active {\n  transition: opacity 0.25s; }\n\n.modal-enter,\n.modal-leave-to {\n  opacity: 0; }\n\n.backdrop-enter-active,\n.backdrop-leave-active {\n  transition: opacity 0.25s; }\n\n.backdrop-enter,\n.backdrop-leave-to {\n  opacity: 0; }\n\n/*# sourceMappingURL=modal-stack.vue.map */"]}, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__$1 = "data-v-5dcf9c78";
    /* module identifier */
    var __vue_module_identifier__$1 = undefined;
    /* functional template */
    var __vue_is_functional_template__$1 = false;
    /* component normalizer */
    function __vue_normalize__$1(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      var component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "/Users/greegus/Projects/vue-modals/src/components/modal-stack.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) { component.functional = true; }
      }

      component._scopeId = scope;

      {
        var hook;
        if (style) {
          hook = function(context) {
            style.call(this, createInjector(context));
          };
        }

        if (hook !== undefined) {
          if (component.functional) {
            // register for functional component in vue file
            var originalRender = component.render;
            component.render = function renderWithStyleInjection(h, context) {
              hook.call(context);
              return originalRender(h, context)
            };
          } else {
            // inject component registration as beforeCreate hook
            var existing = component.beforeCreate;
            component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
        }
      }

      return component
    }
    /* style inject */
    function __vue_create_injector__$1() {
      var head = document.head || document.getElementsByTagName('head')[0];
      var styles = __vue_create_injector__$1.styles || (__vue_create_injector__$1.styles = {});
      var isOldIE =
        typeof navigator !== 'undefined' &&
        /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

      return function addStyle(id, css) {
        if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

        var group = isOldIE ? css.media || 'default' : id;
        var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

        if (!style.ids.includes(id)) {
          var code = css.source;
          var index = style.ids.length;

          style.ids.push(id);

          if (isOldIE) {
            style.element = style.element || document.querySelector('style[data-group=' + group + ']');
          }

          if (!style.element) {
            var el = style.element = document.createElement('style');
            el.type = 'text/css';

            if (css.media) { el.setAttribute('media', css.media); }
            if (isOldIE) {
              el.setAttribute('data-group', group);
              el.setAttribute('data-next-index', '0');
            }

            head.appendChild(el);
          }

          if (isOldIE) {
            index = parseInt(style.element.getAttribute('data-next-index'));
            style.element.setAttribute('data-next-index', index + 1);
          }

          if (style.element.styleSheet) {
            style.parts.push(code);
            style.element.styleSheet.cssText = style.parts
              .filter(Boolean)
              .join('\n');
          } else {
            var textNode = document.createTextNode(code);
            var nodes = style.element.childNodes;
            if (nodes[index]) { style.element.removeChild(nodes[index]); }
            if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
            else { style.element.appendChild(textNode); }
          }
        }
      }
    }
    /* style inject SSR */
    

    
    var ModalStack = __vue_normalize__$1(
      { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
      __vue_inject_styles__$1,
      __vue_script__$1,
      __vue_scope_id__$1,
      __vue_is_functional_template__$1,
      __vue_module_identifier__$1,
      __vue_create_injector__$1,
      undefined
    );

  var index = {
    install: function install(Vue$$1) {
      var sequence = 0;

      Vue$$1.component(ModalStack.name, ModalStack);
      Vue$$1.component(Modal.name, Modal);

      Vue$$1.prototype.$modal = function(component, props) {
        if ( props === void 0 ) props = {};

        return new Promise(function (resolve) {
          bus.$emit("open", {
              id: ++sequence,
              component: component, 
              props: props, 
              resolve: resolve
          });
        });
      };
    }
  };

  exports.default = index;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
