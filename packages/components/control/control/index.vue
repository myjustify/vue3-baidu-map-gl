<template>
  <div style="display: none">
    <div ref="controlContainer" v-bind="$attrs">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import useLifeCycle from '../../../hooks/useLifeCycle'
  import useBaseMapEffect from '../../../hooks/useBaseMapEffect'
  import { ControlAnchor } from '../../../utils'
  export interface ControlOptions {
    /**
     * 控件的停靠位置
     */
    anchor?: ControlAnchor
    /**
     * 控件的偏移值
     */
    offset?: {
      x: number
      y: number
    }
  }
  const controlContainer = ref<HTMLDivElement>()
  const { ready } = useLifeCycle()
  const props = withDefaults(defineProps<ControlOptions>(), {
    anchor: 'BMAP_ANCHOR_TOP_LEFT',
    offset: () => ({ x: 83, y: 18 })
  })
  defineEmits(['initd', 'unload'])
  onMounted(() => {
    useBaseMapEffect((map: BMapGL.Map) => {
      if (!controlContainer.value) return
      const customControl = new BMapGL.Control()
      customControl.defaultAnchor = window[props.anchor]
      customControl.defaultOffset = new BMapGL.Size(props.offset!.x, props.offset!.y)
      customControl.initialize = (_map: BMapGL.Map) => {
        return _map.getContainer().appendChild(controlContainer.value as Node) as HTMLElement
      }
      map.addControl(customControl)
      ready(map, customControl)
      return () => map.removeControl(customControl)
    })
  })
</script>
<script lang="ts">
  export default {
    name: 'BControl',
    inheritAttrs: false
  }
</script>
