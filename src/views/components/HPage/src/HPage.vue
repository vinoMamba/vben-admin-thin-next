<template>
  <div :class="getClass">
    <header v-if="showHeader">
      <h6>
        {{ title }}
        <span>{{ subTitle }}</span>
      </h6>
      <div class="box2">
        <slot name="headerContent"></slot>
      </div>
    </header>
    <main>
      <slot></slot>
    </main>
  </div>
</template>
<script lang="ts" setup>
  import { computed, useSlots } from 'vue';

  const slots = useSlots();
  const props = defineProps({
    title: {
      type: String,
      default: '',
    },
    subTitle: {
      type: String,
      default: '',
    },
    bgWhite: {
      type: Boolean,
      default: false,
    },
  });
  const getClass = computed(() => {
    return ['p-4', 'select-none', { 'bg-white': props.bgWhite }];
  });
  const showHeader = computed(() => {
    return props.title !== '' || props.subTitle !== '' || slots.hasOwnProperty('headerContent');
  });
</script>

<style lang="less" scoped>
  header {
    padding: 0 0 8px;
    margin: 0;
    display: grid;
    align-items: start;
    grid-template: 'box1 box2' 1fr /0.5fr 1fr;

    h6 {
      cursor: default;
      font-size: 16px;
      font-weight: 550;
      padding: 0;
      margin: 0;
      grid-area: box1;

      span {
        color: #00000073;
        margin-left: 4px;
        font-size: 14px;
        font-weight: 400;
      }
    }

    .box2 {
      grid-area: box2;
      display: grid;
      grid-auto-flow: column;
      justify-content: end;
      grid-gap: 4px;
    }
  }

  main {
    margin-top: 4px;
  }
</style>
