# vue-tree-example

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/lolitaframework/vue-tree-example/master/LICENSE)

VueJS component for rendering the tree with custom data.

## Install
`yarn add vue-tree-example`
or
`npm install --save vue-tree-example`

## Usage
### Basic example
```javascript
<script>
import VueTreeExample from 'vue-tree-example';
export default {
  components: {
    VueTreeExample,
  },
  data() {
    return {
      model: {
        name: 'My Tree',
        children: [
          { name: 'hello' },
          { name: 'wat' },
          {
            name: 'child folder',
            children: [
              {
                name: 'child folder',
                children: [
                  { name: 'hello' },
                  { name: 'wat' }
                ]
              },
              { name: 'hello' },
              { name: 'wat' },
              {
                name: 'child folder',
                children: [
                  { name: 'hello' },
                  { name: 'wat' }
                ]
              }
            ]
          }
        ]
      }
    };
  },
}
</script>

<template>
    <div>
      Here will be vue-tree-example
      <VueTreeExample :model="model"></VueTreeExample>
    </div>
</template>
```
