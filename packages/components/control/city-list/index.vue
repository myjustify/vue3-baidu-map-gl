<template></template>

<script setup lang="ts">
  import useBaseMapEffect from '../../../hooks/useBaseMapEffect'
  import useLifeCycle from '../../../hooks/useLifeCycle'
  import { ControlAnchor } from '../../../utils'
  export interface CityListProps {
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
    /**
     * 列表是否展开
     */
    expand?: boolean
  }
  const { ready } = useLifeCycle()
  const props = withDefaults(defineProps<CityListProps>(), {
    anchor: 'BMAP_ANCHOR_TOP_LEFT',
    offset: () => ({ x: 18, y: 18 }),
    expand: false
  })
  let cityListControl: BMapGL.CityListControl
  defineEmits(['initd', 'unload'])
  useBaseMapEffect((map) => {
    cityListControl = new BMapGL.CityListControl({
      expand: props.expand,
      offset: new BMapGL.Size(props.offset.x, props.offset.y),
      anchor: window[props.anchor]
    })
    map.addControl(cityListControl)
    ready(map, cityListControl)
    return () => map.removeControl(cityListControl)
  })
  defineOptions({
    name: 'BCityList'
  })
</script>
