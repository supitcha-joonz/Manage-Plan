<script setup lang="ts">
import { defineProps } from 'vue';
import { useCustomizerStore } from '@/stores/customizer';
// import sidebarItems from './sidebarItem';
// import NavGroup from './NavGroup/NavGroup.vue';
import NavItem from './NavItem/NavItem.vue';
import NavCollapse from './NavCollapse/NavCollapse.vue';
import Logo from '../logo/LogoMain.vue';
const customizer = useCustomizerStore();
import type { menuModel } from '@/types/MenuType.ts';

// [x] PASS Customs Props
const props = defineProps<{
  items: menuModel[];
}>();

// [x] PASS Receiver data from props
const menus = props.items;
</script>

<template>
  <v-navigation-drawer
    v-model="customizer.Sidebar_drawer"
    left
    elevation="0"
    rail-width="75"
    mobile-breakpoint="lg"
    app
    class="leftSidebar"
    :rail="customizer.mini_sidebar"
    expand-on-hover
  >
    <!---Logo part -->

    <div class="pa-5">
      <Logo />
    </div>
    <!-- ---------------------------------------------- -->
    <!---Navigation -->
    <!-- ---------------------------------------------- -->
    <PerfectScrollbar class="scrollnavbar">
      <v-list class="px-3 pb-4 pt-0">
        <!---Menu Loop -->
        <!-- v-for="item of menu.Menu" :key="item" -->
        <!-- <template v-for="(item, i) in menu.Menu" :key="i"> -->
        <!-- -Item Sub Header -->
        <!-- <NavGroup v-if="item.header" :key="item.title" :item="item" /> -->
        <!---Item Divider -->
        <!-- <v-divider v-else-if="item.divider" class="my-3" /> -->
        <!---If Has Child -->
        <!-- <NavCollapse v-else-if="item.children" class="leftPadding" :item="item" :level="0" /> -->
        <!---Single Item-->
        <!-- <NavItem v-else :item="item" class="leftPadding" /> -->
        <!---End Single Item -->
        <!-- </template> -->

        <template v-for="(item, i) in menus" :key="i">
          <!-- {{ item.text }} -->
          <NavCollapse v-if="item?.items.length > 0" class="leftPadding" :item="item" :level="0" />
          <NavItem v-else :item="item" class="leftPadding" />
        </template>
      </v-list>
      <div class="pa-4 text-center">
        <v-chip color="inputBorder" size="small"> v1.4.0 </v-chip>
      </div>
    </PerfectScrollbar>
  </v-navigation-drawer>
</template>
