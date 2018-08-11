# vue-tree

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/lolitaframework/vue-tree/master/LICENSE)

VueJS component for rendering the tree with custom data.

## Install
`yarn add vue-tree`
or
`npm install --save vue-tree`

## Usage
### Basic example
```javascript
<script>
import VueTree from './vue-tree';
export default {
  components: {
    VueTree,
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
      Here will be vue-tree
      <VueTree :model="model"></VueTree>
    </div>
</template>
```
