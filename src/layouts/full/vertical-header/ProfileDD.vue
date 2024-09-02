<script setup lang="ts">
// import { ref } from 'vue';
import { LogoutIcon, UserIcon } from 'vue-tabler-icons';
import { useAuthStore } from '@/stores/authentication';

// const swt1 = ref(true);
// const swt2 = ref(false);
const authStore = useAuthStore();

import { useProfileStore } from '@/stores/profile';
const profile = useProfileStore();
const firstName = profile.Profile.firstName
const lastName = profile.Profile.lastName

// console.log(profile.Profile);
</script>

<template>
  <!-- ---------------------------------------------- -->
  <!-- profile DD -->
  <!-- ---------------------------------------------- -->
  <div class="pa-4">
    <h4 class="my-3">Good Morning, <span class="font-weight-regular">{{ firstName }} {{ lastName }}</span></h4>
    <v-divider />
    <PerfectScrollbar style="height: 100%; max-height: 300px">
      <v-divider />
      <v-list class="mt-0">
        <v-list-item to="/app/user/social/posts" color="secondary" rounded="md">
          <template #prepend>
            <UserIcon size="20" class="mr-2" />
          </template>

          <v-list-item-title class="text-subtitle-2"> โปรไฟล์ </v-list-item-title>
        </v-list-item>

        <v-list-item color="secondary" rounded="md" @click="authStore.Logout()">
          <template #prepend>
            <LogoutIcon size="20" class="mr-2" />
          </template>

          <v-list-item-title class="text-subtitle-2"> ออกจากระบบ </v-list-item-title>
        </v-list-item>
      </v-list>
    </PerfectScrollbar>
  </div>
</template>
