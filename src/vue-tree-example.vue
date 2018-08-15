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
      return this.model.class ? this.model.class : {};
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
      :class="cssClass"
      class="folder">
      {{ prepareFolderNameFunc(model.name, open) }}
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
