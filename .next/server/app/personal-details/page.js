(()=>{var e={};e.id=337,e.ids=[337],e.modules={5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},1247:(e,s,r)=>{"use strict";r.r(s),r.d(s,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>x,pages:()=>c,routeModule:()=>m,tree:()=>d});var t=r(7096),a=r(6132),l=r(7284),i=r.n(l),n=r(2564),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);r.d(s,o);let d=["",{children:["personal-details",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,5662)),"C:\\kalbela-IT\\kalbela-jobs-nextjs\\app\\personal-details\\page.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,8043)),"C:\\kalbela-IT\\kalbela-jobs-nextjs\\app\\personal-details\\layout.tsx"]}]},{"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"]}],c=["C:\\kalbela-IT\\kalbela-jobs-nextjs\\app\\personal-details\\page.tsx"],x="/personal-details/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new t.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/personal-details/page",pathname:"/personal-details",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},224:(e,s,r)=>{Promise.resolve().then(r.bind(r,8485))},2218:(e,s,r)=>{Promise.resolve().then(r.bind(r,623)),Promise.resolve().then(r.bind(r,6841))},8485:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>page});var t=r(784),a=r(9885),l=r(5371),i=r(8699);let n=l.fC,o=a.forwardRef(({className:e,...s},r)=>t.jsx(l.aV,{ref:r,className:(0,i.cn)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",e),...s}));o.displayName=l.aV.displayName;let d=a.forwardRef(({className:e,...s},r)=>t.jsx(l.xz,{ref:r,className:(0,i.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",e),...s}));d.displayName=l.xz.displayName;let c=a.forwardRef(({className:e,...s},r)=>t.jsx(l.VY,{ref:r,className:(0,i.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",e),...s}));c.displayName=l.VY.displayName;var x=r(6544),p=r(3894),m=r(6558),u=r(9033),h=r(599),f=r(3770),g=r(2451),j=r(2878),v=r(8035);let b=[{value:"javascript",label:"JavaScript"},{value:"typescript",label:"TypeScript"},{value:"react",label:"React"},{value:"nextjs",label:"Next.js"}],Other_info=({setPersonalInfo:e,setActiveTab:s})=>{let{handleSubmit:r,control:a,setValue:l,formState:{errors:i}}=(0,m.cI)({resolver:(0,p.F)(x.x5),defaultValues:{position:"",skills:[]}});return t.jsx("div",{className:"mx-auto w-full lg:w-[800px]",children:t.jsx("div",{className:"min-h-screen px-4 py-12 sm:px-6 lg:px-8",children:(0,t.jsxs)(h.Zb,{children:[t.jsx(h.Ol,{children:t.jsx(h.ll,{children:"Others Info"})}),t.jsx(h.aY,{children:(0,t.jsxs)("form",{onSubmit:r(s=>{e(s)}),className:"space-y-6",children:[(0,t.jsxs)("div",{children:[t.jsx(g._,{htmlFor:"position",children:"Your Position"}),t.jsx(m.Qr,{name:"position",control:a,render:({field:e})=>t.jsx(f.I,{id:"position",placeholder:"Current Position",...e})}),i.position&&t.jsx("p",{className:"mt-1 text-sm text-red-500",children:i.position.message})]}),(0,t.jsxs)("div",{children:[t.jsx(g._,{htmlFor:"skills",children:"Skills"}),t.jsx(m.Qr,{name:"skills",control:a,render:({field:e})=>t.jsx(u.Z,{isMulti:!0,options:b,value:e.value,onChange:s=>e.onChange(s||[])})}),i.skills&&t.jsx("p",{className:"mt-1 text-sm text-red-500",children:i.skills.message})]}),(0,t.jsxs)("div",{className:"flex space-x-4",children:[t.jsx(v.Z,{onClick:()=>s("personal_info"),children:"Back"}),t.jsx(j.Z,{type:"submit",children:"Update"})]})]})})]})})})};var y=r(5008),N=r.n(y);r(2745);var _=r(4723);let k=a.forwardRef(({className:e,...s},r)=>t.jsx("textarea",{className:(0,i.cn)("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",e),ref:r,...s}));k.displayName="Textarea";let Personal_Info=({setPersonalInfo:e,setActiveTab:s})=>{let{register:r,handleSubmit:a,control:l,setValue:i,formState:{errors:n}}=(0,m.cI)({resolver:(0,p.F)(x.oQ)});return t.jsx("div",{className:"lg:w-[800px] w-full mx-auto",children:t.jsx("div",{className:"min-h-screen py-12 px-4 sm:px-6 lg:px-8",children:(0,t.jsxs)("div",{className:"lg:w-[800px] w-full mx-auto bg-white rounded-lg shadow-md overflow-hidden",children:[t.jsx("div",{className:"px-4 py-5 sm:px-6",children:t.jsx("h2",{className:"text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate",children:"Personal Details"})}),(0,t.jsxs)("form",{onSubmit:a(r=>{e(r),s("other_info")}),className:"px-4 py-5 sm:p-6 space-y-6",children:[(0,t.jsxs)("div",{children:[t.jsx(g._,{className:"text-gray-800",htmlFor:"fullName",children:"Full Name"}),t.jsx(f.I,{type:"text",id:"fullName",placeholder:"Mir Sorkar",...r("fullName")}),n.fullName&&t.jsx("p",{className:"text-red-500",children:n.fullName.message})]}),(0,t.jsxs)("div",{children:[t.jsx(g._,{className:"text-gray-800",htmlFor:"email",children:"Email"}),t.jsx(f.I,{type:"email",id:"email",placeholder:"mir@gmail.com",...r("email")}),n.email&&t.jsx("p",{className:"text-red-500",children:n.email.message})]}),(0,t.jsxs)("div",{children:[t.jsx(g._,{className:"text-gray-800",htmlFor:"currentAddress",children:"Current Address"}),t.jsx(k,{id:"currentAddress",placeholder:"Current Address",rows:3,...r("currentAddress")}),n.currentAddress&&t.jsx("p",{className:"text-red-500",children:n.currentAddress.message})]}),(0,t.jsxs)("div",{children:[t.jsx(g._,{className:"text-gray-800",children:"Phone"}),t.jsx(m.Qr,{name:"phone",control:l,render:({field:e})=>t.jsx(N(),{country:"bd",placeholder:"+880 177 503 ----",value:e.value,onChange:s=>e.onChange(s),inputStyle:{width:"100%",borderRadius:"8px"}})}),n.phone&&t.jsx("p",{className:"text-red-500",children:n.phone.message})]}),(0,t.jsxs)("div",{children:[t.jsx(g._,{className:"text-gray-800",htmlFor:"image",children:"Profile Image"}),t.jsx(f.I,{type:"file",id:"image",accept:"image/*",onChange:e=>i("image",e.target.files?.[0]||null)}),n.image&&t.jsx("p",{className:"text-red-500",children:n.image.message})]}),(0,t.jsxs)("div",{children:[t.jsx(g._,{className:"text-gray-800",htmlFor:"gender",children:"Gender"}),t.jsx(m.Qr,{name:"gender",control:l,render:({field:e})=>(0,t.jsxs)(_.Ph,{onValueChange:s=>e.onChange(s),value:e.value,children:[t.jsx(_.i4,{children:t.jsx(_.ki,{placeholder:"Select gender"})}),(0,t.jsxs)(_.Bw,{children:[t.jsx(_.Ql,{value:"male",children:"Male"}),t.jsx(_.Ql,{value:"female",children:"Female"}),t.jsx(_.Ql,{value:"other",children:"Other"})]})]})}),n.gender&&t.jsx("p",{className:"text-red-500",children:n.gender.message})]}),(0,t.jsxs)("div",{children:[t.jsx(g._,{className:"text-gray-800",htmlFor:"dateOfBirth",children:"Date of Birth"}),t.jsx(f.I,{type:"date",id:"dateOfBirth",...r("dateOfBirth")}),n.dateOfBirth&&t.jsx("p",{className:"text-red-500",children:n.dateOfBirth.message})]}),t.jsx(j.Z,{type:"submit",className:"w-1/5",children:"Update"})]})]})})})},page=()=>{let[e,s]=(0,a.useState)("personal_info"),[r,l]=(0,a.useState)({});return console.log("checked",r),(0,t.jsxs)(n,{value:e,onValueChange:s,children:[t.jsx(c,{value:"personal_info",children:t.jsx(Personal_Info,{setPersonalInfo:l,setActiveTab:s})}),t.jsx(c,{value:"other_info",children:t.jsx(Other_info,{setPersonalInfo:l,setActiveTab:s})})]})}},8043:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>RootLayout,metadata:()=>x});var t=r(4656);r(7633);var a=r(2601),l=r(6012),i=r.n(l),n=r(3935),o=r(2863),d=r(2187),c=r(8957);let x={title:{default:a.J.name,template:`%s - ${a.J.name}`},description:a.J.description,themeColor:[{media:"(prefers-color-scheme: light)",color:"white"},{media:"(prefers-color-scheme: dark)",color:"black"}],icons:{icon:"/favicon.ico",shortcut:"/favicon-16x16.png",apple:"/apple-touch-icon.png"}};function RootLayout({children:e}){return t.jsx(t.Fragment,{children:(0,t.jsxs)("html",{lang:"en",suppressHydrationWarning:!0,children:[t.jsx("head",{}),t.jsx("body",{className:(0,n.cn)("min-h-screen bg-background font-sans antialiased",i().variable),children:(0,t.jsxs)(d.f,{attribute:"class",enableSystem:!0,children:[(0,t.jsxs)("div",{className:"relative flex min-h-screen flex-col bg-light-theme dark:bg-dark-theme",children:[t.jsx("header",{className:"sticky top-0 z-50",children:t.jsx(c.ZP,{})}),t.jsx("main",{children:t.jsx("div",{className:"flex-1",children:e})})]}),t.jsx(o.P,{})]})})]})})}},5662:(e,s,r)=>{"use strict";r.r(s),r.d(s,{$$typeof:()=>i,__esModule:()=>l,default:()=>o});var t=r(5153);let a=(0,t.createProxy)(String.raw`C:\kalbela-IT\kalbela-jobs-nextjs\app\personal-details\page.tsx`),{__esModule:l,$$typeof:i}=a,n=a.default,o=n}};var s=require("../../webpack-runtime.js");s.C(e);var __webpack_exec__=e=>s(s.s=e),r=s.X(0,[51,545,455,403,97,501,531,290,112,599,842,10],()=>__webpack_exec__(1247));module.exports=r})();