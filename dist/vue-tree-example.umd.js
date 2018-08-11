(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.VueTreeExample = {})));
}(this, (function (exports) { 'use strict';

  (function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" /*# sourceMappingURL=vue-tree-example.vue.map */"; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();
  var component = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[(!_vm.isFolder)?_c('div',[_vm._v(" "+_vm._s(_vm.model.name)+" ")]):_vm._e(),_vm._v(" "),(_vm.isFolder)?_c('div',{staticClass:"bold",on:{"click":_vm.toggle}},[_vm._v(" "+_vm._s(_vm.prepareFolderNameFunc(_vm.model.name, _vm.open))+" ")]):_vm._e(),_vm._v(" "),(_vm.isFolder)?_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.open),expression:"open"}]},_vm._l((_vm.model.children),function(model,index){return _c('VueTree',{key:index,staticClass:"item",attrs:{"model":model,"prepareFolderNameFunc":_vm.prepareFolderNameFunc}})})):_vm._e()])},staticRenderFns: [],_scopeId: 'data-v-53b1f5fb',
    name: 'VueTreeExample',
    props: {
      model: Object,
      prepareFolderNameFunc: {
        type: Function,
        default: function(name, open) {
          return open ? ("[-] " + name) : ("[+] " + name);
        },
      },
    },
    data: function data() {
      return {
        open: false,
      };
    },
    computed: {
      isFolder: function isFolder() {
        return this.model.children && this.model.children.length;
      },
    },
    methods: {
      toggle: function toggle() {
        if (this.isFolder) {
          this.open = !this.open;
        }
      },
    },
  };

  // Import vue component

  // install function executed by Vue.use()
  function install(Vue) {
  	if (install.installed) { return; }
  	install.installed = true;
  	Vue.component('VueTree', component);
  }

  // Create module definition for Vue.use()
  var plugin = {
  	install: install,
  };

  // To auto-install when vue is found
  var GlobalVue = null;
  if (typeof window !== 'undefined') {
  	GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
  	GlobalVue = global.Vue;
  }
  if (GlobalVue) {
  	GlobalVue.use(plugin);
  }

  // It's possible to expose named exports when writing components that can
  // also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
  // export const RollupDemoDirective = component;

  exports.install = install;
  exports.default = component;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
