<template>
  <div class="svg">
    <!-- 展示外部图标 -->
    <div
      v-if="isExternal"
      :style="styleExternalIcon"
      class="svg-external-icon svg-icon"
    />
    <!-- 展示内部图标 -->
    <svg
      v-else
      class="svg-icon"
      :class="className"
      aria-hidden="true"
    >
      <use :xlink:href="iconName" />
    </svg>
  </div>
</template>

<script>
import { isExternal as external } from '@/utils/isExternal'
export default {
  name: 'SvgIcon',
  props: {
    icon: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
  },
  computed: {
    // 是否外链
    isExternal() {
      return external(this.icon)
    },
    // 外部图标样式
    styleExternalIcon() {
      return {
        mask: `url(${this.icon}) no-repeat 50% 50%`,
        '-webkit-mask': `url(${this.icon}) no-repeat 50% 50%`,
      }
    },
    // 内部图标样式
    iconName() {
      return `#icon-${this.icon}`
    },
  },
}
</script>

<style>
.svg-icon {
  width: 50px;
  height: 50px;
  vertical-align: -10px;
  fill: currentColor;
  overflow: hidden;
}
.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
