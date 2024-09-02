<script setup lang="ts">
import { ref, watch } from 'vue';
import { useCustomizerStore } from '../../../stores/customizer';
// Icon Imports
import { AccessPointIcon, BellIcon, SettingsIcon, LanguageIcon, SearchIcon, Menu2Icon } from 'vue-tabler-icons';

// dropdown imports
import LanguageDD from './LanguageDD.vue';
import NotificationDD from './NotificationDD.vue';
import ProfileDD from './ProfileDD.vue';
import MegaMenuDD from './MegaMenuDD.vue';
// import Searchbar from './SearchBarPanel.vue';

const customizer = useCustomizerStore();
const showSearch = ref(false);
const priority = ref(customizer.setHorizontalLayout ? 0 : 0);
function searchbox() {
  showSearch.value = !showSearch.value;
}
watch(priority, (newPriority) => {
  // yes, console.log() is a side effect
  priority.value = newPriority;
});
</script>

<template>
  <v-app-bar elevation="0" :priority="priority" height="80">
    <v-btn
      class="hidden-md-and-down text-secondary"
      color="lightprimary"
      icon
      rounded="sm"
      variant="flat"
      size="small"
      @click.stop="customizer.SET_MINI_SIDEBAR(!customizer.mini_sidebar)"
    >
      <Menu2Icon size="20" stroke-width="1.5" />
    </v-btn>
    <v-btn
      class="hidden-lg-and-up text-secondary ms-3"
      color="lightprimary"
      icon
      rounded="sm"
      variant="flat"
      size="small"
      @click.stop="customizer.SET_SIDEBAR_DRAWER"
    >
      <Menu2Icon size="20" stroke-width="1.5" />
    </v-btn>


    <v-spacer />
    <!-- ---------------------------------------------- -->
    <!---right part -->
    <!-- ---------------------------------------------- -->

    <!-- ---------------------------------------------- -->
    <!-- Messages -->
    <!-- ---------------------------------------------- -->
    <!-- <v-menu :close-on-content-click="false">
      <template #activator="{ props }">
        <v-btn
          icon
          class="text-secondary hidden-sm-and-down"
          color="lightprimary"
          rounded="sm"
          size="small"
          variant="flat"
          v-bind="props"
        >
          <AccessPointIcon stroke-width="1.5" size="22" />
        </v-btn>
      </template>
      <v-sheet width="900" height="395" elevation="12" rounded="md" class="pa-4">
        <MegaMenuDD />
      </v-sheet>
    </v-menu> -->
    <!-- ---------------------------------------------- -->
    <!-- translate -->
    <!-- ---------------------------------------------- -->
    <!-- <v-menu :close-on-content-click="false" location="bottom">
      <template #activator="{ props }">
        <v-btn icon class="text-primary ml-3" color="lightprimary" rounded="sm" size="small" variant="flat" v-bind="props">
          <LanguageIcon stroke-width="1.5" size="22" />
        </v-btn>
      </template>
      <v-sheet rounded="md" width="200" elevation="12">
        <LanguageDD />
      </v-sheet>
    </v-menu> -->

    <!-- ---------------------------------------------- -->
    <!-- Notification -->
    <!-- ---------------------------------------------- -->
    <v-menu :close-on-content-click="false">
      <template #activator="{ props }">
        <v-btn icon class="text-secondary mx-3" color="lightprimary" rounded="sm" size="small" variant="flat" v-bind="props">
          <i :class="`mdi mdi-message-badge-outline`" style="font-size: 20px;"></i>
        </v-btn>
        <v-btn icon class="text-secondary mx-3" color="lightprimary" rounded="sm" size="small" variant="flat" v-bind="props">
          <BellIcon stroke-width="1.5" size="22" />
        </v-btn>
      </template>
      <!-- <v-sheet rounded="md" width="330" elevation="12">
        <NotificationDD />
      </v-sheet> -->
    </v-menu>

    <!-- ---------------------------------------------- -->
    <!-- User Profile -->
    <!-- ---------------------------------------------- -->
    <v-menu :close-on-content-click="false">
      <template #activator="{ props }">
        <v-btn class="profileBtn text-primary" color="lightprimary" variant="flat" rounded="pill" v-bind="props">
          <v-avatar size="30" class="mr-2 py-2">
            <img src="@/assets/images/profile/user-round.svg" alt="Julia" />
          </v-avatar>
          <SettingsIcon stroke-width="1.5" />
        </v-btn>
      </template>
      <v-sheet rounded="md" width="330" elevation="12">
        <ProfileDD />
      </v-sheet>
    </v-menu>
  </v-app-bar>
</template>
