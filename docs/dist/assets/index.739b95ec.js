import{_ as f,d as i,f as l,b as d,c as u,r as c}from"./app.ba2ed4a1.js";import{u as p}from"./useLife.8993d4d7.js";import{u as _}from"./useBaseMapEffect.392aa7e7.js";const m=i({props:{anchor:{default:"BMAP_ANCHOR_TOP_LEFT"},offset:{default:()=>({x:83,y:18})}},emits:["initd","unload"],setup(r){const t=r,n=l(),{ready:a}=p();return _(o=>{if(!n.value)return;const e=new window.BMapGL.Control;return e.defaultAnchor=window[t.anchor],e.defaultOffset=new window.BMapGL.Size(t.offset.x,t.offset.y),e.initialize=s=>s.getContainer().appendChild(n.value),o.addControl(e),a(o),()=>o.removeControl(e)}),(o,e)=>(d(),u("div",{ref_key:"controlContainer",ref:n},[c(o.$slots,"default")],512))}});var x=f(m,[["__file","index.vue"]]);export{x as default};