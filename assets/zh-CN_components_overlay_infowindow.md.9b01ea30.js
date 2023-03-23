import{_ as t,c as p,f as E,g as e,h as n,i as o,o as C,p as c,j as l,b as u}from"./app.69478d92.js";const b=JSON.parse('{"title":"BInfoWindow 信息窗口","description":"","frontmatter":{},"headers":[{"level":2,"title":"组件示例","slug":"组件示例","link":"#组件示例","children":[]},{"level":2,"title":"动态组件 Props","slug":"动态组件-props","link":"#动态组件-props","children":[]},{"level":2,"title":"组件事件","slug":"组件事件","link":"#组件事件","children":[]}],"relativePath":"zh-CN/components/overlay/infowindow.md","lastUpdated":1679542440000}'),D={name:"zh-CN/components/overlay/infowindow.md"},d=a=>(c("data-v-5e203827"),a=a(),l(),a),F=n(`<h1 id="binfowindow-信息窗口" tabindex="-1" data-v-5e203827>BInfoWindow 信息窗口 <a class="header-anchor" href="#binfowindow-信息窗口" aria-hidden="true" data-v-5e203827>#</a></h1><p data-v-5e203827>使用 slot 模式渲染子节点向地图添加信息窗口，以及与地图相关的一些交互。</p><div class="language-ts" data-v-5e203827><button title="Copy Code" class="copy" data-v-5e203827></button><span class="lang" data-v-5e203827>ts</span><pre class="shiki material-theme-palenight" tabindex="0" data-v-5e203827><code data-v-5e203827><span class="line" data-v-5e203827><span style="color:#89DDFF;font-style:italic;" data-v-5e203827>import</span><span style="color:#A6ACCD;" data-v-5e203827> </span><span style="color:#89DDFF;" data-v-5e203827>{</span><span style="color:#F07178;" data-v-5e203827> </span><span style="color:#A6ACCD;" data-v-5e203827>BInfoWindow</span><span style="color:#F07178;" data-v-5e203827> </span><span style="color:#89DDFF;" data-v-5e203827>}</span><span style="color:#A6ACCD;" data-v-5e203827> </span><span style="color:#89DDFF;font-style:italic;" data-v-5e203827>from</span><span style="color:#A6ACCD;" data-v-5e203827> </span><span style="color:#89DDFF;" data-v-5e203827>&#39;</span><span style="color:#C3E88D;" data-v-5e203827>vue3-baidu-map-gl</span><span style="color:#89DDFF;" data-v-5e203827>&#39;</span></span>
<span class="line" data-v-5e203827></span></code></pre></div><div class="tip custom-block" data-v-5e203827><p class="custom-block-title" data-v-5e203827>提示</p><p data-v-5e203827>地图上只能同时显示一个<code data-v-5e203827>infoWindow</code>，所以当地图上有多个<code data-v-5e203827>infoWindow</code>组件同时绑定<code data-v-5e203827>v-model=&quot;true&quot;</code>，只有最后一个 <code data-v-5e203827>infoWindow</code>组件会在地图上显示。</p></div><h2 id="组件示例" tabindex="-1" data-v-5e203827>组件示例 <a class="header-anchor" href="#组件示例" aria-hidden="true" data-v-5e203827>#</a></h2>`,5),i=d(()=>u("p",null,"overlay/infowindow",-1)),k=n('<h2 id="动态组件-props" tabindex="-1" data-v-5e203827>动态组件 Props <a class="header-anchor" href="#动态组件-props" aria-hidden="true" data-v-5e203827>#</a></h2><table data-v-5e203827><thead data-v-5e203827><tr data-v-5e203827><th data-v-5e203827>属性</th><th data-v-5e203827>说明</th><th data-v-5e203827>类型</th><th data-v-5e203827>可选值</th><th data-v-5e203827>默认值</th></tr></thead><tbody data-v-5e203827><tr data-v-5e203827><td data-v-5e203827>modelValue / v-model</td><td data-v-5e203827>是否开启信息窗体</td><td data-v-5e203827><code data-v-5e203827>boolean </code></td><td data-v-5e203827>-</td><td data-v-5e203827><code data-v-5e203827>false</code></td></tr><tr data-v-5e203827><td data-v-5e203827>position</td><td data-v-5e203827>信息窗体所在坐标</td><td data-v-5e203827><code data-v-5e203827>{ lng: number, lat: number}[]</code></td><td data-v-5e203827>-</td><td data-v-5e203827><code data-v-5e203827>required</code></td></tr><tr data-v-5e203827><td data-v-5e203827>title</td><td data-v-5e203827>信息窗标题文字</td><td data-v-5e203827><code data-v-5e203827>string</code></td><td data-v-5e203827>-</td><td data-v-5e203827>-</td></tr><tr data-v-5e203827><td data-v-5e203827>width</td><td data-v-5e203827>信息窗宽度，单位像素。取值范围：0, 220 - 730。如果您指定宽度为 0，则信息窗口的宽度将按照其内容自动调整</td><td data-v-5e203827><code data-v-5e203827>number</code></td><td data-v-5e203827><code data-v-5e203827>220-730</code></td><td data-v-5e203827><code data-v-5e203827>0</code></td></tr><tr data-v-5e203827><td data-v-5e203827>height</td><td data-v-5e203827>信息窗高度，单位像素。取值范围：0, 60 - 650。如果您指定高度为 0，则信息窗口的高度将按照其内容自动调整</td><td data-v-5e203827><code data-v-5e203827>number</code></td><td data-v-5e203827><code data-v-5e203827>60-650</code></td><td data-v-5e203827><code data-v-5e203827>0</code></td></tr><tr data-v-5e203827><td data-v-5e203827>offset</td><td data-v-5e203827>信息窗位置偏移值。默认情况下在地图上打开的信息窗底端的尖角将指向其地理坐标，在标注上打开的信息窗底端尖角的位置取决于标注所用图标的 infoWindowOffset 属性值，您可以为信息窗添加偏移量来改变默认位置</td><td data-v-5e203827><code data-v-5e203827>{x: number, y: number }</code></td><td data-v-5e203827>-</td><td data-v-5e203827><code data-v-5e203827>{x: 0, y: 0 }</code></td></tr><tr data-v-5e203827><td data-v-5e203827>enableAutoPan</td><td data-v-5e203827>是否开启信息窗口打开时地图自动移动</td><td data-v-5e203827><code data-v-5e203827>boolean</code></td><td data-v-5e203827>-</td><td data-v-5e203827><code data-v-5e203827> true</code></td></tr><tr data-v-5e203827><td data-v-5e203827>enableCloseOnClick</td><td data-v-5e203827>是否开启点击地图关闭信息窗口</td><td data-v-5e203827><code data-v-5e203827>boolean</code></td><td data-v-5e203827>-</td><td data-v-5e203827><code data-v-5e203827> true</code></td></tr></tbody></table><h2 id="组件事件" tabindex="-1" data-v-5e203827>组件事件 <a class="header-anchor" href="#组件事件" aria-hidden="true" data-v-5e203827>#</a></h2><table data-v-5e203827><thead data-v-5e203827><tr data-v-5e203827><th data-v-5e203827>事件名</th><th data-v-5e203827>说明</th><th data-v-5e203827>属性</th></tr></thead><tbody data-v-5e203827><tr data-v-5e203827><td data-v-5e203827>initd</td><td data-v-5e203827>组件初始化后，调用的方法，返回一个地图实例</td><td data-v-5e203827><code data-v-5e203827>{ map, BmapGL, instance }</code></td></tr><tr data-v-5e203827><td data-v-5e203827>unload</td><td data-v-5e203827>组件卸载时会调用此方法</td><td data-v-5e203827>-</td></tr><tr data-v-5e203827><td data-v-5e203827>close</td><td data-v-5e203827>信息窗口被关闭时触发此事件</td><td data-v-5e203827><code data-v-5e203827>event{type, target, point}</code></td></tr><tr data-v-5e203827><td data-v-5e203827>open</td><td data-v-5e203827>信息窗口被打开时触发此事件</td><td data-v-5e203827><code data-v-5e203827>event{type, target, point}</code></td></tr><tr data-v-5e203827><td data-v-5e203827>clickclose</td><td data-v-5e203827>点击信息窗口的关闭按钮时触发此事件</td><td data-v-5e203827><code data-v-5e203827>event{type, target}</code></td></tr></tbody></table>',4);function A(a,r,B,v,g,h){const s=o("Demo");return C(),p("div",null,[F,E(s,{class:"p-top",source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Einput%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Etype%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Echeckbox%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Ev-model%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eshow%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%E6%96%87%E5%AD%97%E5%86%85%E5%AE%B9infoWindow%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ebr%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Einput%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Etype%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Echeckbox%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Ev-model%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eshow1%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%E5%8A%A8%E6%80%81%E5%86%85%E5%AE%B9infoWindow%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ebr%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Einput%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Etype%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Echeckbox%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Ev-model%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eshow2%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%E5%9B%BE%E6%96%87%E7%BB%84%E5%90%88%E6%8E%92%E7%89%88infoWindow%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ebr%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ebr%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBMap%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EenableScrollWheelZoom%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBInfoWindow%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Ev-model%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eshow%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EenableMaximize%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aposition%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%7B%20lng%3A%20116.404%2C%20lat%3A%2039.925%20%7D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Etitle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%E6%96%87%E5%AD%97%E5%86%85%E5%AE%B9%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%E5%9C%B0%E5%9D%80%EF%BC%9A%E5%8C%97%E4%BA%AC%E5%B8%82%E4%B8%9C%E5%9F%8E%E5%8C%BA%E7%8E%8B%E5%BA%9C%E4%BA%95%E5%A4%A7%E8%A1%9788%E5%8F%B7%E4%B9%90%E5%A4%A9%E9%93%B6%E6%B3%B0%E7%99%BE%E8%B4%A7%E5%85%AB%E5%B1%82%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%23maxContent%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eh1%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E6%9C%80%E5%A4%A7%E5%8C%96%E5%86%85%E5%AE%B9%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eh1%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3EBInfoWindow%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBInfoWindow%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Ev-model%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eshow1%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aposition%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%7B%20lng%3A%20116.404%2C%20lat%3A%2039.925%20%7D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Etitle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%E5%8A%A8%E6%80%81%E5%86%85%E5%AE%B9%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eh2%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3Ecount%3A%20%7B%7B%20count%20%7D%7D%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eh2%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ebutton%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ecount%20%2B%3D%201%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3Ecount%2B%2B%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ebutton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3EBInfoWindow%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBInfoWindow%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Ev-model%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eshow2%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aposition%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%7B%20lng%3A%20116.404%2C%20lat%3A%2039.925%20%7D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Etitle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%E5%9B%BE%E6%96%87%E7%BB%84%E5%90%88%E6%8E%92%E7%89%88%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eh2%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E5%A4%A9%E5%AE%89%E9%97%A8%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eh2%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EinfoWindow-content%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ep%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E5%A4%A9%E5%AE%89%E9%97%A8%E5%9D%90%E8%90%BD%E5%9C%A8%E4%B8%AD%E5%9B%BD%E5%8C%97%E4%BA%AC%E5%B8%82%E4%B8%AD%E5%BF%83%EF%BC%8C%E6%95%85%E5%AE%AB%E7%9A%84%E5%8D%97%E4%BE%A7%EF%BC%8C%E4%B8%8E%E5%A4%A9%E5%AE%89%E9%97%A8%E5%B9%BF%E5%9C%BA%E9%9A%94%E9%95%BF%E5%AE%89%E8%A1%97%E7%9B%B8%E6%9C%9B%EF%BC%8C%E6%98%AF%E6%B8%85%E6%9C%9D%E7%9A%87%E5%9F%8E%E7%9A%84%E5%A4%A7%E9%97%A8%E3%80%82..%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ep%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eimg%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Ewidth%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E139%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eheight%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E104%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esrc%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ehttps%3A%2F%2Flbs.baidu.com%2Fjsdemo%2Fimg%2FtianAnMen.jpg%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Ealt%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3EBInfoWindow%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3EBMap%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20ref%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue'%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20show%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20ref%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3Eboolean%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20boolean%22%3Efalse%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20show1%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20ref%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3Eboolean%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20boolean%22%3Etrue%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20show2%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20ref%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3Eboolean%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20boolean%22%3Efalse%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20count%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20ref%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3Enumber%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E1%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Estyle%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Escoped%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20style%22%3E%3Cspan%20class%3D%22token%20language-css%22%3E%0A%20%20%3Cspan%20class%3D%22token%20selector%22%3Ebutton%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20property%22%3Eborder-radius%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%206px%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20property%22%3Ebackground%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20%23ddd%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20property%22%3Eoutline%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20none%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20property%22%3Epadding%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%201px%205px%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20property%22%3Efont-size%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%2014px%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20property%22%3Emargin-bottom%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%2010px%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20selector%22%3E.infoWindow-content%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20property%22%3Edisplay%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20flex%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20property%22%3Ejustify-content%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20space-between%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20property%22%3Epadding%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%2010px%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20selector%22%3E.infoWindow-content%20p%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20property%22%3Emargin%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%200%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20property%22%3Eline-height%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20initial%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"overlay/infowindow","raw-source":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Clabel%3E%0A%20%20%20%20%20%20%3Cinput%20type%3D%22checkbox%22%20v-model%3D%22show%22%20%2F%3E%0A%20%20%20%20%20%20%E6%96%87%E5%AD%97%E5%86%85%E5%AE%B9infoWindow%0A%20%20%20%20%3C%2Flabel%3E%0A%20%20%20%20%3Cbr%20%2F%3E%0A%20%20%20%20%3Clabel%3E%0A%20%20%20%20%20%20%3Cinput%20type%3D%22checkbox%22%20v-model%3D%22show1%22%20%2F%3E%0A%20%20%20%20%20%20%E5%8A%A8%E6%80%81%E5%86%85%E5%AE%B9infoWindow%0A%20%20%20%20%3C%2Flabel%3E%0A%20%20%20%20%3Cbr%20%2F%3E%0A%20%20%20%20%3Clabel%3E%0A%20%20%20%20%20%20%3Cinput%20type%3D%22checkbox%22%20v-model%3D%22show2%22%20%2F%3E%0A%20%20%20%20%20%20%E5%9B%BE%E6%96%87%E7%BB%84%E5%90%88%E6%8E%92%E7%89%88infoWindow%0A%20%20%20%20%3C%2Flabel%3E%0A%20%20%20%20%3Cbr%20%2F%3E%0A%20%20%20%20%3Cbr%20%2F%3E%0A%20%20%20%20%3CBMap%20v-bind%3D%22%24attrs%22%20enableScrollWheelZoom%3E%0A%20%20%20%20%20%20%3CBInfoWindow%20v-model%3D%22show%22%20enableMaximize%20%3Aposition%3D%22%7B%20lng%3A%20116.404%2C%20lat%3A%2039.925%20%7D%22%20title%3D%22%E6%96%87%E5%AD%97%E5%86%85%E5%AE%B9%22%3E%0A%20%20%20%20%20%20%20%20%E5%9C%B0%E5%9D%80%EF%BC%9A%E5%8C%97%E4%BA%AC%E5%B8%82%E4%B8%9C%E5%9F%8E%E5%8C%BA%E7%8E%8B%E5%BA%9C%E4%BA%95%E5%A4%A7%E8%A1%9788%E5%8F%B7%E4%B9%90%E5%A4%A9%E9%93%B6%E6%B3%B0%E7%99%BE%E8%B4%A7%E5%85%AB%E5%B1%82%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23maxContent%3E%0A%20%20%20%20%20%20%20%20%20%20%3Ch1%3E%E6%9C%80%E5%A4%A7%E5%8C%96%E5%86%85%E5%AE%B9%3C%2Fh1%3E%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%3C%2FBInfoWindow%3E%0A%20%20%20%20%20%20%3CBInfoWindow%20v-model%3D%22show1%22%20%3Aposition%3D%22%7B%20lng%3A%20116.404%2C%20lat%3A%2039.925%20%7D%22%20title%3D%22%E5%8A%A8%E6%80%81%E5%86%85%E5%AE%B9%22%3E%0A%20%20%20%20%20%20%20%20%3Ch2%3Ecount%3A%20%7B%7B%20count%20%7D%7D%3C%2Fh2%3E%0A%20%20%20%20%20%20%20%20%3Cbutton%20%40click%3D%22count%20%2B%3D%201%22%3Ecount%2B%2B%3C%2Fbutton%3E%0A%20%20%20%20%20%20%3C%2FBInfoWindow%3E%0A%20%20%20%20%20%20%3CBInfoWindow%20v-model%3D%22show2%22%20%3Aposition%3D%22%7B%20lng%3A%20116.404%2C%20lat%3A%2039.925%20%7D%22%20title%3D%22%E5%9B%BE%E6%96%87%E7%BB%84%E5%90%88%E6%8E%92%E7%89%88%22%3E%0A%20%20%20%20%20%20%20%20%3Ch2%3E%E5%A4%A9%E5%AE%89%E9%97%A8%3C%2Fh2%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22infoWindow-content%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cp%3E%E5%A4%A9%E5%AE%89%E9%97%A8%E5%9D%90%E8%90%BD%E5%9C%A8%E4%B8%AD%E5%9B%BD%E5%8C%97%E4%BA%AC%E5%B8%82%E4%B8%AD%E5%BF%83%EF%BC%8C%E6%95%85%E5%AE%AB%E7%9A%84%E5%8D%97%E4%BE%A7%EF%BC%8C%E4%B8%8E%E5%A4%A9%E5%AE%89%E9%97%A8%E5%B9%BF%E5%9C%BA%E9%9A%94%E9%95%BF%E5%AE%89%E8%A1%97%E7%9B%B8%E6%9C%9B%EF%BC%8C%E6%98%AF%E6%B8%85%E6%9C%9D%E7%9A%87%E5%9F%8E%E7%9A%84%E5%A4%A7%E9%97%A8%E3%80%82..%3C%2Fp%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cimg%20width%3D%22139%22%20height%3D%22104%22%20src%3D%22https%3A%2F%2Flbs.baidu.com%2Fjsdemo%2Fimg%2FtianAnMen.jpg%22%20alt%3D%22%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%3C%2FBInfoWindow%3E%0A%20%20%20%20%3C%2FBMap%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%20%20const%20show%20%3D%20ref%3Cboolean%3E(false)%0A%20%20const%20show1%20%3D%20ref%3Cboolean%3E(true)%0A%20%20const%20show2%20%3D%20ref%3Cboolean%3E(false)%0A%20%20const%20count%20%3D%20ref%3Cnumber%3E(1)%0A%3C%2Fscript%3E%0A%0A%3Cstyle%20scoped%3E%0A%20%20button%20%7B%0A%20%20%20%20border-radius%3A%206px%3B%0A%20%20%20%20background%3A%20%23ddd%3B%0A%20%20%20%20outline%3A%20none%3B%0A%20%20%20%20padding%3A%201px%205px%3B%0A%20%20%20%20font-size%3A%2014px%3B%0A%20%20%20%20margin-bottom%3A%2010px%3B%0A%20%20%7D%0A%20%20.infoWindow-content%20%7B%0A%20%20%20%20display%3A%20flex%3B%0A%20%20%20%20justify-content%3A%20space-between%3B%0A%20%20%20%20padding%3A%2010px%3B%0A%20%20%7D%0A%20%20.infoWindow-content%20p%20%7B%0A%20%20%20%20margin%3A%200%3B%0A%20%20%20%20line-height%3A%20initial%3B%0A%20%20%7D%0A%3C%2Fstyle%3E%0A",description:"%3Cp%3E%E9%80%9A%E8%BF%87%20slot%20%E6%8F%92%E6%A7%BD%E6%B8%B2%E6%9F%93%E4%B8%8D%E5%90%8C%E5%86%85%E5%AE%B9%20infoWindow%3C%2Fp%3E%0A"},{default:e(()=>[i]),_:1}),k])}const f=t(D,[["render",A],["__scopeId","data-v-5e203827"]]);export{b as __pageData,f as default};
