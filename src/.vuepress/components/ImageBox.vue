<template>
  <div>
    <img ref="img" :src="src" :style="imageStyle" />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    center: {
      type: Boolean,
      default: true
    },
    zoom: {
      default: '50%'
    },
    rounded: {
      default: 0
    }
  },
  data() {
    return {
      imageStyle: {
        maxWidth: '100%',
        margin: '0 auto',
        objectFit: 'contain'
      }
    }
  },
  mounted() {
    if (!this.center) {
      this.$refs.img.style.marginLeft = 0
    }
    this.$refs.img.style.zoom = this.zoom
    this.$refs.img.style.borderRadius = this.rounded + 'px'
  }
}
</script>
