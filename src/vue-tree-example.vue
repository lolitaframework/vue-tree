<script>
export default {
  name: 'VueTreeExample',
  props: {
    model: Object,
    prepareFolderNameFunc: {
      type: Function,
      default: function(name, open) {
        return open ? `[-] ${ name }` : `[+] ${ name }`;
      },
    },
  },
  data() {
    return {
      open: false,
    };
  },
  computed: {
    isFolder() {
      return this.model.children && this.model.children.length;
    },
    cssClass() {
      let cssClasses = this.model.class ? this.model.class : {};
      if (this.isFolder) {
        return Object.assign(cssClasses, {'is-open' : this.open });
      }
      return cssClasses;
    },
  },
  methods: {
    toggle() {
      if (this.isFolder) {
        this.open = !this.open;
      }
    },
  },
};
</script>

<template>
  <li>
    <div
      :class="cssClass"
      v-if="!isFolder"
      v-html="model.name">
    </div>
    <div
      v-if="isFolder"
      @click="toggle"
      v-html="prepareFolderNameFunc(model.name, open)"
      :class="cssClass"
      class="folder">
    </div>

    <ul v-show="open" v-if="isFolder">
      <VueTreeExample
        class="item"
        v-for="(model, index) in model.children"
        :key="index"
        :model="model"
        :prepareFolderNameFunc="prepareFolderNameFunc"></VueTreeExample>
    </ul>
  </li>
</template>

<style scoped></style>
