# BPolyline 折线

在地图上绘制简单的折线

```ts
import { BPolyline } from 'vue3-baidu-map-gl'
```

## 组件示例

:::demo 在地图上绘制可编辑的折线
overlay/polyline
:::

## 静态组件 Props

| 属性           | 说明                                                     | 类型      | 可选值 | 默认值  | 版本                               |
| -------------- | -------------------------------------------------------- | --------- | ------ | ------- | ---------------------------------- |
| enableClicking | 是否响应点击事件                                         | `boolean` | -      | `true`  |                                    |
| geodesic       | 是否开启大地线模式，true 时，两点连线将以大地线的形式。  | `boolean` | -      | `false` |                                    |
| clip           | 是否进行跨经度 180 度裁剪，绘制跨精度 180 时为了优化效果 | `boolean` | -      | `true`  |                                    |
| linkRight      | 连接右线，配合`clip`解决跨 ±180 度经线绘制问题           | `boolean` | -      | `true`  | <Badge type="tip" text="^2.1.0" /> |

## 动态组件 Props

| 属性            | 说明                                        | 类型                            | 可选值                    | 默认值     |
| --------------- | ------------------------------------------- | ------------------------------- | ------------------------- | ---------- |
| path            | 多边形的坐标数组                            | `{ lng: number, lat: number}[]` | -                         | `required` |
| strokeColor     | 描边的颜色，同 CSS 颜色                     | `string`                        | -                         | `#000000`  |
| strokeWeight    | 描边的宽度，单位为像素                      | `string`                        | -                         | `2`        |
| strokeOpacity   | 描边的透明度，范围 `0-1`                    | ` number`                       | -                         | ` 1`       |
| strokeStyle     | 描边的样式，为实线、虚线、或者点状线        | `string`                        | `solid / dashed / dotted` | -          |
| enableMassClear | 是否在调用 `map.clearOverlays` 清除此覆盖物 | `boolean`                       | -                         | `true `    |
| enableEditing   | 开启可编辑模式                              | `boolean`                       | -                         | `false `   |

## 组件事件

| 事件名     | 说明                                                                           | 类型                        |
| ---------- | ------------------------------------------------------------------------------ | --------------------------- |
| initd      | 组件初始化后，调用的方法，返回一个地图实例                                     | `{ map, BmapGL, instance }` |
| unload     | 组件卸载时会调用此方法                                                         | -                           |
| click      | 鼠标左键单击事件的回调函数。 当双击时，产生的事件序列为： click click dblclick | ((e: Event) => void)        |
| dblclick   | 鼠标左键双击事件的回调函数                                                     | ((e: Event) => void)        |
| mousedown  | 鼠标左键在该覆盖物上按下的回调函数                                             | ((e: Event) => void)        |
| mouseup    | 鼠标左键在该覆盖物上抬起的回调函数                                             | ((e: Event) => void)        |
| mouseout   | 鼠标指针移出该覆盖物事件的回调函数                                             | ((e: Event) => void)        |
| mouseover  | 鼠标指针移入该覆盖物事件的回调函数                                             | ((e: Event) => void)        |
| remove     | 该覆盖物被移除的回调函数                                                       | ((e: Event) => void)        |
| lineupdate | 覆盖物被编辑后的回调函数                                                       | ((e: Event) => void)        |
