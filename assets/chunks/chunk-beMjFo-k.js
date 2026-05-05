import{g as h,j as m,R as x}from"./chunk-x9pfHLEC.js";var N=[16,32,48,64,96,128,256,384],u=[640,750,828,1080,1200,1920,2048,3840],c=[...N,...u],S=(t,e)=>{if(e){const s=/(^|\s)(1?\d?\d)vw/g,i=[];for(let a;a=s.exec(e);a)i.push(Number.parseInt(a[2],10));if(i.length){const a=Math.min(...i)*.01;return{widths:c.filter(d=>d>=u[0]*a),kind:"w"}}return{widths:c,kind:"w"}}if(t==null)return{widths:u,kind:"w"};const n=2;let r=c.findIndex(s=>s>=n*t);return r=r<0?c.length:r,{widths:c.slice(0,r+1),kind:"w"}},z=({src:t,width:e,quality:n,sizes:r,loader:s})=>{const{widths:i,kind:a}=S(e,r);return{sizes:!r&&a==="w"?"100vw":r,srcSet:i.map((d,l)=>`${s({src:t,quality:n,width:d})} ${a==="w"?d:l+1}${a}`).join(", "),src:s({src:t,quality:n,width:i[i.length-1]})}},f=t=>{if(typeof t=="number")return Math.round(t);if(typeof t=="string"){const e=Number.parseFloat(t);if(!Number.isNaN(e))return Math.round(e)}},I="(min-width: 1280px) 50vw, 100vw",y=80,b=t=>{try{return new URL(t),!0}catch{return!1}},E=t=>{const e=f(t.width),n=Math.max(Math.min(f(t.quality)??y,100),0);if(t.src!=null&&t.src!==""){if(t.src.startsWith("data:"))return{src:t.src};if(t.srcSet==null&&t.optimize){const s=t.sizes??(t.width==null?I:void 0);return z({src:t.src,width:e,quality:n,sizes:s,loader:t.loader})}const r={src:b(t.src)?t.src:t.loader({src:t.src,format:"raw"})};return t.srcSet!=null&&(r.srcSet=t.srcSet),t.sizes!=null&&(r.sizes=t.sizes),r}},g=h.forwardRef(({quality:t,loader:e,optimize:n=!0,loading:r="lazy",decoding:s="async",...i},a)=>{const d=E({src:i.src,srcSet:i.srcSet,sizes:i.sizes,width:i.width,quality:t,loader:e,optimize:n})??{src:L};return m.jsx("img",{alt:"",...i,...d,decoding:s,loading:r,ref:a})});g.displayName="Image";var L=`data:image/svg+xml;base64,${btoa(`<svg
  width="140"
  height="140"
  viewBox="0 0 600 600"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  >
  <rect width="600" height="600" fill="#DFE3E6" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M450 170H150C141.716 170 135 176.716 135 185V415C135 423.284 141.716 430 150 430H450C458.284 430 465 423.284 465 415V185C465 176.716 458.284 170 450 170ZM150 145C127.909 145 110 162.909 110 185V415C110 437.091 127.909 455 150 455H450C472.091 455 490 437.091 490 415V185C490 162.909 472.091 145 450 145H150Z"
    fill="#C1C8CD"
  />
  <path
    d="M237.135 235.012C237.135 255.723 220.345 272.512 199.635 272.512C178.924 272.512 162.135 255.723 162.135 235.012C162.135 214.301 178.924 197.512 199.635 197.512C220.345 197.512 237.135 214.301 237.135 235.012Z"
    fill="#C1C8CD"
  />
  <path
    d="M160 405V367.205L221.609 306.364L256.552 338.628L358.161 234L440 316.043V405H160Z"
    fill="#C1C8CD"
  />
</svg>`)}`;const M=h.forwardRef(({loading:t="lazy",width:e,height:n,optimize:r=!0,decoding:s,$webstudio$canvasOnly$assetId:i,...a},d)=>{const l=String(a.src??""),{imageLoader:v,renderer:C}=h.useContext(x);let o=s,w=l;return C==="canvas"&&(t="eager",o="sync",w=i??l,e!==void 0&&n!==void 0&&Number.isNaN(e)&&Number.isNaN(n)&&(r=!1,e=void 0,n=void 0)),m.jsx(g,{loading:t,decoding:o,optimize:r,width:e,height:n,...a,loader:v,src:l,ref:d},w)});M.displayName="Image";const R="hr",A=h.forwardRef((t,e)=>h.createElement(R,{...t,ref:e}));A.displayName="Separator";export{A as p,M as y};
