"use strict";exports.id=362,exports.ids=[362],exports.modules={9518:(e,r,t)=>{t.d(r,{Z:()=>l});var o=t(9850);let l=(0,o.Z)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65",key:"1p50m8"}]])},8089:(e,r,t)=>{t.d(r,{Z:()=>l});var o=t(9850);let l=(0,o.Z)("Send",[["line",{x1:"22",y1:"2",x2:"11",y2:"13",key:"10auo0"}],["polygon",{points:"22 2 15 22 11 13 2 9 22 2",key:"12uapv"}]])},5389:(e,r,t)=>{t.d(r,{u:()=>clamp});function clamp(e,[r,t]){return Math.min(t,Math.max(r,e))}},2129:(e,r,t)=>{t.d(r,{Ee:()=>m,NY:()=>y,fC:()=>S});var o=t(9885),l=t(8718),n=t(2285),i=t(5852),a=t(3979),s=t(784),c="Avatar",[d,u]=(0,l.b)(c),[f,h]=d(c),p=o.forwardRef((e,r)=>{let{__scopeAvatar:t,...l}=e,[n,i]=o.useState("idle");return(0,s.jsx)(f,{scope:t,imageLoadingStatus:n,onImageLoadingStatusChange:i,children:(0,s.jsx)(a.WV.span,{...l,ref:r})})});p.displayName=c;var v="AvatarImage",w=o.forwardRef((e,r)=>{let{__scopeAvatar:t,src:l,onLoadingStatusChange:c=()=>{},...d}=e,u=h(v,t),f=function(e,r){let[t,l]=o.useState("idle");return(0,i.b)(()=>{if(!e){l("error");return}let t=!0,o=new window.Image,updateStatus=e=>()=>{t&&l(e)};return l("loading"),o.onload=updateStatus("loaded"),o.onerror=updateStatus("error"),o.src=e,r&&(o.referrerPolicy=r),()=>{t=!1}},[e,r]),t}(l,d.referrerPolicy),p=(0,n.W)(e=>{c(e),u.onImageLoadingStatusChange(e)});return(0,i.b)(()=>{"idle"!==f&&p(f)},[f,p]),"loaded"===f?(0,s.jsx)(a.WV.img,{...d,ref:r,src:l}):null});w.displayName=v;var b="AvatarFallback",g=o.forwardRef((e,r)=>{let{__scopeAvatar:t,delayMs:l,...n}=e,i=h(b,t),[c,d]=o.useState(void 0===l);return o.useEffect(()=>{if(void 0!==l){let e=window.setTimeout(()=>d(!0),l);return()=>window.clearTimeout(e)}},[l]),c&&"loaded"!==i.imageLoadingStatus?(0,s.jsx)(a.WV.span,{...n,ref:r}):null});g.displayName=b;var S=p,m=w,y=g},1779:(e,r,t)=>{t.d(r,{Ns:()=>V,fC:()=>H,gb:()=>T,l_:()=>M,q4:()=>A});var o=t(9885),l=t(3979),n=t(9752),i=t(8718),a=t(880),s=t(2285),c=t(3994),d=t(5852),u=t(5389),f=t(5418),h=t(784),p="ScrollArea",[v,w]=(0,i.b)(p),[b,g]=v(p),S=o.forwardRef((e,r)=>{let{__scopeScrollArea:t,type:n="hover",dir:i,scrollHideDelay:s=600,...d}=e,[u,f]=o.useState(null),[p,v]=o.useState(null),[w,g]=o.useState(null),[S,m]=o.useState(null),[y,x]=o.useState(null),[T,R]=o.useState(0),[E,C]=o.useState(0),[P,L]=o.useState(!1),[D,W]=o.useState(!1),j=(0,a.e)(r,e=>f(e)),z=(0,c.gm)(i);return(0,h.jsx)(b,{scope:t,type:n,dir:z,scrollHideDelay:s,scrollArea:u,viewport:p,onViewportChange:v,content:w,onContentChange:g,scrollbarX:S,onScrollbarXChange:m,scrollbarXEnabled:P,onScrollbarXEnabledChange:L,scrollbarY:y,onScrollbarYChange:x,scrollbarYEnabled:D,onScrollbarYEnabledChange:W,onCornerWidthChange:R,onCornerHeightChange:C,children:(0,h.jsx)(l.WV.div,{dir:z,...d,ref:j,style:{position:"relative","--radix-scroll-area-corner-width":T+"px","--radix-scroll-area-corner-height":E+"px",...e.style}})})});S.displayName=p;var m="ScrollAreaViewport",y=o.forwardRef((e,r)=>{let{__scopeScrollArea:t,children:n,nonce:i,...s}=e,c=g(m,t),d=o.useRef(null),u=(0,a.e)(r,d,c.onViewportChange);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:i}),(0,h.jsx)(l.WV.div,{"data-radix-scroll-area-viewport":"",...s,ref:u,style:{overflowX:c.scrollbarXEnabled?"scroll":"hidden",overflowY:c.scrollbarYEnabled?"scroll":"hidden",...e.style},children:(0,h.jsx)("div",{ref:c.onContentChange,style:{minWidth:"100%",display:"table"},children:n})})]})});y.displayName=m;var x="ScrollAreaScrollbar",T=o.forwardRef((e,r)=>{let{forceMount:t,...l}=e,n=g(x,e.__scopeScrollArea),{onScrollbarXEnabledChange:i,onScrollbarYEnabledChange:a}=n,s="horizontal"===e.orientation;return o.useEffect(()=>(s?i(!0):a(!0),()=>{s?i(!1):a(!1)}),[s,i,a]),"hover"===n.type?(0,h.jsx)(R,{...l,ref:r,forceMount:t}):"scroll"===n.type?(0,h.jsx)(E,{...l,ref:r,forceMount:t}):"auto"===n.type?(0,h.jsx)(C,{...l,ref:r,forceMount:t}):"always"===n.type?(0,h.jsx)(P,{...l,ref:r}):null});T.displayName=x;var R=o.forwardRef((e,r)=>{let{forceMount:t,...l}=e,i=g(x,e.__scopeScrollArea),[a,s]=o.useState(!1);return o.useEffect(()=>{let e=i.scrollArea,r=0;if(e){let handlePointerEnter=()=>{window.clearTimeout(r),s(!0)},handlePointerLeave=()=>{r=window.setTimeout(()=>s(!1),i.scrollHideDelay)};return e.addEventListener("pointerenter",handlePointerEnter),e.addEventListener("pointerleave",handlePointerLeave),()=>{window.clearTimeout(r),e.removeEventListener("pointerenter",handlePointerEnter),e.removeEventListener("pointerleave",handlePointerLeave)}}},[i.scrollArea,i.scrollHideDelay]),(0,h.jsx)(n.z,{present:t||a,children:(0,h.jsx)(C,{"data-state":a?"visible":"hidden",...l,ref:r})})}),E=o.forwardRef((e,r)=>{var t;let{forceMount:l,...i}=e,a=g(x,e.__scopeScrollArea),s="horizontal"===e.orientation,c=useDebounceCallback(()=>u("SCROLL_END"),100),[d,u]=(t={hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}},o.useReducer((e,r)=>{let o=t[e][r];return o??e},"hidden"));return o.useEffect(()=>{if("idle"===d){let e=window.setTimeout(()=>u("HIDE"),a.scrollHideDelay);return()=>window.clearTimeout(e)}},[d,a.scrollHideDelay,u]),o.useEffect(()=>{let e=a.viewport,r=s?"scrollLeft":"scrollTop";if(e){let t=e[r],handleScroll=()=>{let o=e[r],l=t!==o;l&&(u("SCROLL"),c()),t=o};return e.addEventListener("scroll",handleScroll),()=>e.removeEventListener("scroll",handleScroll)}},[a.viewport,s,u,c]),(0,h.jsx)(n.z,{present:l||"hidden"!==d,children:(0,h.jsx)(P,{"data-state":"hidden"===d?"hidden":"visible",...i,ref:r,onPointerEnter:(0,f.M)(e.onPointerEnter,()=>u("POINTER_ENTER")),onPointerLeave:(0,f.M)(e.onPointerLeave,()=>u("POINTER_LEAVE"))})})}),C=o.forwardRef((e,r)=>{let t=g(x,e.__scopeScrollArea),{forceMount:l,...i}=e,[a,s]=o.useState(!1),c="horizontal"===e.orientation,d=useDebounceCallback(()=>{if(t.viewport){let e=t.viewport.offsetWidth<t.viewport.scrollWidth,r=t.viewport.offsetHeight<t.viewport.scrollHeight;s(c?e:r)}},10);return useResizeObserver(t.viewport,d),useResizeObserver(t.content,d),(0,h.jsx)(n.z,{present:l||a,children:(0,h.jsx)(P,{"data-state":a?"visible":"hidden",...i,ref:r})})}),P=o.forwardRef((e,r)=>{let{orientation:t="vertical",...l}=e,n=g(x,e.__scopeScrollArea),i=o.useRef(null),a=o.useRef(0),[s,c]=o.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),d=getThumbRatio(s.viewport,s.content),u={...l,sizes:s,onSizesChange:c,hasThumb:!!(d>0&&d<1),onThumbChange:e=>i.current=e,onThumbPointerUp:()=>a.current=0,onThumbPointerDown:e=>a.current=e};function getScrollPosition(e,r){return function(e,r,t,o="ltr"){let l=getThumbSize(t),n=r||l/2,i=t.scrollbar.paddingStart+n,a=t.scrollbar.size-t.scrollbar.paddingEnd-(l-n),s=t.content-t.viewport,c=linearScale([i,a],"ltr"===o?[0,s]:[-1*s,0]);return c(e)}(e,a.current,s,r)}return"horizontal"===t?(0,h.jsx)(L,{...u,ref:r,onThumbPositionChange:()=>{if(n.viewport&&i.current){let e=n.viewport.scrollLeft,r=getThumbOffsetFromScroll(e,s,n.dir);i.current.style.transform=`translate3d(${r}px, 0, 0)`}},onWheelScroll:e=>{n.viewport&&(n.viewport.scrollLeft=e)},onDragScroll:e=>{n.viewport&&(n.viewport.scrollLeft=getScrollPosition(e,n.dir))}}):"vertical"===t?(0,h.jsx)(D,{...u,ref:r,onThumbPositionChange:()=>{if(n.viewport&&i.current){let e=n.viewport.scrollTop,r=getThumbOffsetFromScroll(e,s);i.current.style.transform=`translate3d(0, ${r}px, 0)`}},onWheelScroll:e=>{n.viewport&&(n.viewport.scrollTop=e)},onDragScroll:e=>{n.viewport&&(n.viewport.scrollTop=getScrollPosition(e))}}):null}),L=o.forwardRef((e,r)=>{let{sizes:t,onSizesChange:l,...n}=e,i=g(x,e.__scopeScrollArea),[s,c]=o.useState(),d=o.useRef(null),u=(0,a.e)(r,d,i.onScrollbarXChange);return o.useEffect(()=>{d.current&&c(getComputedStyle(d.current))},[d]),(0,h.jsx)(z,{"data-orientation":"horizontal",...n,ref:u,sizes:t,style:{bottom:0,left:"rtl"===i.dir?"var(--radix-scroll-area-corner-width)":0,right:"ltr"===i.dir?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":getThumbSize(t)+"px",...e.style},onThumbPointerDown:r=>e.onThumbPointerDown(r.x),onDragScroll:r=>e.onDragScroll(r.x),onWheelScroll:(r,t)=>{if(i.viewport){let o=i.viewport.scrollLeft+r.deltaX;e.onWheelScroll(o),function(e,r){return e>0&&e<r}(o,t)&&r.preventDefault()}},onResize:()=>{d.current&&i.viewport&&s&&l({content:i.viewport.scrollWidth,viewport:i.viewport.offsetWidth,scrollbar:{size:d.current.clientWidth,paddingStart:toInt(s.paddingLeft),paddingEnd:toInt(s.paddingRight)}})}})}),D=o.forwardRef((e,r)=>{let{sizes:t,onSizesChange:l,...n}=e,i=g(x,e.__scopeScrollArea),[s,c]=o.useState(),d=o.useRef(null),u=(0,a.e)(r,d,i.onScrollbarYChange);return o.useEffect(()=>{d.current&&c(getComputedStyle(d.current))},[d]),(0,h.jsx)(z,{"data-orientation":"vertical",...n,ref:u,sizes:t,style:{top:0,right:"ltr"===i.dir?0:void 0,left:"rtl"===i.dir?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":getThumbSize(t)+"px",...e.style},onThumbPointerDown:r=>e.onThumbPointerDown(r.y),onDragScroll:r=>e.onDragScroll(r.y),onWheelScroll:(r,t)=>{if(i.viewport){let o=i.viewport.scrollTop+r.deltaY;e.onWheelScroll(o),function(e,r){return e>0&&e<r}(o,t)&&r.preventDefault()}},onResize:()=>{d.current&&i.viewport&&s&&l({content:i.viewport.scrollHeight,viewport:i.viewport.offsetHeight,scrollbar:{size:d.current.clientHeight,paddingStart:toInt(s.paddingTop),paddingEnd:toInt(s.paddingBottom)}})}})}),[W,j]=v(x),z=o.forwardRef((e,r)=>{let{__scopeScrollArea:t,sizes:n,hasThumb:i,onThumbChange:c,onThumbPointerUp:d,onThumbPointerDown:u,onThumbPositionChange:p,onDragScroll:v,onWheelScroll:w,onResize:b,...S}=e,m=g(x,t),[y,T]=o.useState(null),R=(0,a.e)(r,e=>T(e)),E=o.useRef(null),C=o.useRef(""),P=m.viewport,L=n.content-n.viewport,D=(0,s.W)(w),j=(0,s.W)(p),z=useDebounceCallback(b,10);function handleDragScroll(e){if(E.current){let r=e.clientX-E.current.left,t=e.clientY-E.current.top;v({x:r,y:t})}}return o.useEffect(()=>{let handleWheel=e=>{let r=e.target,t=y?.contains(r);t&&D(e,L)};return document.addEventListener("wheel",handleWheel,{passive:!1}),()=>document.removeEventListener("wheel",handleWheel,{passive:!1})},[P,y,L,D]),o.useEffect(j,[n,j]),useResizeObserver(y,z),useResizeObserver(m.content,z),(0,h.jsx)(W,{scope:t,scrollbar:y,hasThumb:i,onThumbChange:(0,s.W)(c),onThumbPointerUp:(0,s.W)(d),onThumbPositionChange:j,onThumbPointerDown:(0,s.W)(u),children:(0,h.jsx)(l.WV.div,{...S,ref:R,style:{position:"absolute",...S.style},onPointerDown:(0,f.M)(e.onPointerDown,e=>{if(0===e.button){let r=e.target;r.setPointerCapture(e.pointerId),E.current=y.getBoundingClientRect(),C.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",m.viewport&&(m.viewport.style.scrollBehavior="auto"),handleDragScroll(e)}}),onPointerMove:(0,f.M)(e.onPointerMove,handleDragScroll),onPointerUp:(0,f.M)(e.onPointerUp,e=>{let r=e.target;r.hasPointerCapture(e.pointerId)&&r.releasePointerCapture(e.pointerId),document.body.style.webkitUserSelect=C.current,m.viewport&&(m.viewport.style.scrollBehavior=""),E.current=null})})})}),_="ScrollAreaThumb",A=o.forwardRef((e,r)=>{let{forceMount:t,...o}=e,l=j(_,e.__scopeScrollArea);return(0,h.jsx)(n.z,{present:t||l.hasThumb,children:(0,h.jsx)(N,{ref:r,...o})})}),N=o.forwardRef((e,r)=>{let{__scopeScrollArea:t,style:n,...i}=e,s=g(_,t),c=j(_,t),{onThumbPositionChange:d}=c,u=(0,a.e)(r,e=>c.onThumbChange(e)),p=o.useRef(void 0),v=useDebounceCallback(()=>{p.current&&(p.current(),p.current=void 0)},100);return o.useEffect(()=>{let e=s.viewport;if(e){let handleScroll=()=>{if(v(),!p.current){let r=addUnlinkedScrollListener(e,d);p.current=r,d()}};return d(),e.addEventListener("scroll",handleScroll),()=>e.removeEventListener("scroll",handleScroll)}},[s.viewport,v,d]),(0,h.jsx)(l.WV.div,{"data-state":c.hasThumb?"visible":"hidden",...i,ref:u,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...n},onPointerDownCapture:(0,f.M)(e.onPointerDownCapture,e=>{let r=e.target,t=r.getBoundingClientRect(),o=e.clientX-t.left,l=e.clientY-t.top;c.onThumbPointerDown({x:o,y:l})}),onPointerUp:(0,f.M)(e.onPointerUp,c.onThumbPointerUp)})});A.displayName=_;var O="ScrollAreaCorner",I=o.forwardRef((e,r)=>{let t=g(O,e.__scopeScrollArea),o=!!(t.scrollbarX&&t.scrollbarY),l="scroll"!==t.type&&o;return l?(0,h.jsx)(k,{...e,ref:r}):null});I.displayName=O;var k=o.forwardRef((e,r)=>{let{__scopeScrollArea:t,...n}=e,i=g(O,t),[a,s]=o.useState(0),[c,d]=o.useState(0);return useResizeObserver(i.scrollbarX,()=>{let e=i.scrollbarX?.offsetHeight||0;i.onCornerHeightChange(e),d(e)}),useResizeObserver(i.scrollbarY,()=>{let e=i.scrollbarY?.offsetWidth||0;i.onCornerWidthChange(e),s(e)}),a&&c?(0,h.jsx)(l.WV.div,{...n,ref:r,style:{width:a,height:c,position:"absolute",right:"ltr"===i.dir?0:void 0,left:"rtl"===i.dir?0:void 0,bottom:0,...e.style}}):null});function toInt(e){return e?parseInt(e,10):0}function getThumbRatio(e,r){let t=e/r;return isNaN(t)?0:t}function getThumbSize(e){let r=getThumbRatio(e.viewport,e.content),t=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,o=(e.scrollbar.size-t)*r;return Math.max(o,18)}function getThumbOffsetFromScroll(e,r,t="ltr"){let o=getThumbSize(r),l=r.scrollbar.paddingStart+r.scrollbar.paddingEnd,n=r.scrollbar.size-l,i=r.content-r.viewport,a="ltr"===t?[0,i]:[-1*i,0],s=(0,u.u)(e,a),c=linearScale([0,i],[0,n-o]);return c(s)}function linearScale(e,r){return t=>{if(e[0]===e[1]||r[0]===r[1])return r[0];let o=(r[1]-r[0])/(e[1]-e[0]);return r[0]+o*(t-e[0])}}var addUnlinkedScrollListener=(e,r=()=>{})=>{let t={left:e.scrollLeft,top:e.scrollTop},o=0;return function loop(){let l={left:e.scrollLeft,top:e.scrollTop},n=t.left!==l.left,i=t.top!==l.top;(n||i)&&r(),t=l,o=window.requestAnimationFrame(loop)}(),()=>window.cancelAnimationFrame(o)};function useDebounceCallback(e,r){let t=(0,s.W)(e),l=o.useRef(0);return o.useEffect(()=>()=>window.clearTimeout(l.current),[]),o.useCallback(()=>{window.clearTimeout(l.current),l.current=window.setTimeout(t,r)},[t,r])}function useResizeObserver(e,r){let t=(0,s.W)(r);(0,d.b)(()=>{let r=0;if(e){let o=new ResizeObserver(()=>{cancelAnimationFrame(r),r=window.requestAnimationFrame(t)});return o.observe(e),()=>{window.cancelAnimationFrame(r),o.unobserve(e)}}},[e,t])}var H=S,M=y,V=I}};