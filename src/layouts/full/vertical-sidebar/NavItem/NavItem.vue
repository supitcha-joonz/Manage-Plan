<script setup lang="ts">
import type { menuModel } from '@/types/MenuType.ts';

const props = defineProps<{ item: menuModel }>();
</script>
<template>
  <v-list-item rounded class="mb-1" color="secondary" :to="props.item.to">
    <template #prepend>
      <v-icon :icon="props.item.icon"></v-icon>
    </template>
    <div class="d-flex align-center">
      <!-- <i :class="`mdi ${props.item.icon}`" style="font-size: 20px;"></i> -->
      <!-- <v-icon :icon="props.item.icon"></v-icon> -->
      <v-list-item-title class="pl-4">{{ props.item.text }}</v-list-item-title>
    </div>
  </v-list-item>
</template>
