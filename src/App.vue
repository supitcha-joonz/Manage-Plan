<template>
  <Suspense>
    <div>
      <RouterView />
    </div>
  </Suspense>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>
