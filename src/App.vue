<script setup>
import { ref } from 'vue';

const items = ref(Array.from({ length: 10 }, (v, i) => ({
  id: i + 1,
  name: `Item ${i + 1}`
})));
</script>

<template>
  <div>
    <div style="display: flex; justify-content: center;">
      <ul>
        <VueDraggable
          v-model="items"
          :animation="250"
          direction="vertical"
          @end="() => console.log('end')"
          @start="() => console.log('start')"
        >
          <li v-for="item in items" :key="item.id">
            {{ item.name }}
          </li>
        </VueDraggable>
      </ul>
    </div>
  </div>
</template>
