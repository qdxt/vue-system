<template>
  <d2-container class="page">
    Hello World
  </d2-container>
</template>

<script>
import D2HelpBtn from './components/d2-help-btn'
import D2Badge from './components/d2-badge'
import D2PageCover from './components/d2-page-cover'
export default {
  components: {
    D2HelpBtn,
    D2Badge,
    D2PageCover
  },
  data () {
    return {
      filename: __filename
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  .logo {
    width: 120px;
  }
  .btn-group {
    color: $color-text-placehoder;
    font-size: 12px;
    margin-top: 0px;
    margin-bottom: 20px;
    .btn-group__btn {
      color: $color-text-sub;
      &:hover {
        color: $color-text-main;
      }
      &.btn-group__btn--link {
        color: $color-primary;
      }
    }
  }
}
</style>
