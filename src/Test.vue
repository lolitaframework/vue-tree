// Copyright 2017, 2018 Tensigma Ltd. All rights reserved.
// Use of this source code is governed by Microsoft Reference Source
// License (MS-RSL) that can be found in the LICENSE file.

<template>
<VueTreeExample :model="model"></VueTreeExample>
</template>

<script>
import VueTreeExample from './vue-tree-example';

export default {
  components: {
    VueTreeExample,
  },
  data() {
    return {
      model: {
        name: 'My Tree',
        children: [
          {
            name: 'hello',
          },
          {
            name: 'wat',
          },
          {
            name: 'child folder have',
            children: [
              {
                name: 'child folder',
                children: [
                  {
                    name: 'hello',
                  },
                  {
                    name: 'wat',
                  },
                ],
              },
              {
                name: 'hello',
              },
              {
                name: 'wat',
              },
              {
                name: 'child folder',
                children: [
                  {
                    name: 'hello',
                  },
                  {
                    name: 'wat',
                  },
                ],
              },
            ],
          },
        ],
      },
    };
  },
};
</script>

<style>
</style>
