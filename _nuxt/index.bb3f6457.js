import{a as x,o as n,b as c,e as t,t as p,f as u,l as y,m as H,p as $,h as b,F as k,r as g,c as w,q as V,i as B,w as m,s as Z,k as r,u as f,v as L,x as h}from"./entry.f6625cdd.js";import{a as A,u as v}from"./useAsset.0b991335.js";import{_ as N}from"./Dev.60f1c29e.js";import{A as F,C as P}from"./index.5d061937.js";import{u as S}from"./composables.ef274010.js";import"./startale-horizontal.8687359d.js";const T={},I={class:"flex items-end h-screen justify-center px-3 pb-24"},j={class:"text-center"},D=t("h1",{class:"text-6xl lg:text-8xl font-semibold mb-4"},"Web3 for Billions",-1),R={class:"text-xl lg:text-2xl"};function W(a,e){return n(),c("div",I,[t("div",j,[D,t("p",R,p(a.$t("meta.description")),1)])])}const z=x(T,[["render",W]]),q={mounted(){this.$nextTick(()=>{new NextParticle({image:this.$refs.logoImg,width:window.innerWidth,height:window.innerHeight,maxWidth:300,maxHeight:300,particleGap:2,mouseForce:150}).start()})}},E={class:"absolute -top-10 left-1/2 z-0 -translate-x-1/2"},G={ref:"logoImg",id:"logo",class:"next-particle hidden",src:A,alt:""};function J(a,e,i,s,o,l){return n(),c("div",E,[t("img",G,null,512)])}const O=x(q,[["render",J]]),K=u({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(a,{slots:e,attrs:i}){const s=y(!1);return H(()=>{s.value=!0}),o=>{var C;if(s.value)return(C=e.default)==null?void 0:C.call(e);const l=e.fallback||e.placeholder;if(l)return l();const _=o.fallback||o.placeholder||"",d=o.fallbackTag||o.placeholderTag||"span";return c(d,i,_)}}}),Q={},U={viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg"},X=$('<path d="M80.54 35.7634C80.54 17.9634 65.14 3.12337 46.27 5.19337C32.13 6.75337 20.74 18.1434 19.19 32.2834C18.15 41.7634 21.41 51.0134 28.15 57.6634C32.87 62.3234 35.61 68.8934 35.79 75.7834C34.33 76.3134 33.27 77.7034 33.27 79.3534C33.27 80.4934 33.79 81.5134 34.6 82.2034C33.79 82.9034 33.27 83.9234 33.27 85.0734C33.27 87.1634 34.98 88.8634 37.08 88.8634H41.75L46.16 93.2734C48.44 95.5634 52.16 95.5634 54.45 93.2734L58.86 88.8634H62.43C64.53 88.8634 66.24 87.1634 66.24 85.0734C66.24 83.9234 65.72 82.9034 64.91 82.2034C65.72 81.5034 66.24 80.4934 66.24 79.3534C66.24 77.7034 65.19 76.3134 63.72 75.7834C63.89 68.8734 66.63 62.4034 71.52 57.5034C77.32 51.6934 80.52 43.9734 80.52 35.7634H80.54Z" stroke="currentColor"></path><path d="M63.2 44.7734L82.89 64.4634C83.51 65.0834 83.51 66.0934 82.89 66.7134L81.2 68.4034C80.58 69.0234 79.57 69.0234 78.95 68.4034L59.26 48.7134" fill="white"></path><path d="M63.2 44.7734L82.89 64.4634C83.51 65.0834 83.51 66.0934 82.89 66.7134L81.2 68.4034C80.58 69.0234 79.57 69.0234 78.95 68.4034L59.26 48.7134" stroke="currentColor"></path><path d="M69.53 29.1534L67.95 25.2934C67.78 24.8734 67.33 24.6334 66.88 24.7334L62.99 25.5834C61.97 24.1434 60.72 22.8934 59.26 21.8334L60.12 17.9434C60.22 17.5034 59.98 17.0534 59.56 16.8734L55.73 15.2834C55.31 15.1134 54.83 15.2634 54.59 15.6434L52.43 18.9934C50.67 18.7034 48.9 18.6934 47.16 18.9834L45.03 15.6234C44.79 15.2334 44.3 15.0834 43.88 15.2534L40.04 16.8334C39.62 17.0034 39.39 17.4534 39.48 17.8934L40.3 21.7734C38.97 22.6734 37.68 23.9734 36.59 25.5134L32.7 24.6534C32.26 24.5534 31.81 24.7834 31.63 25.2034L30.04 29.0334C29.87 29.4534 30.01 29.9334 30.39 30.1834L33.74 32.3434C33.44 34.0734 33.44 35.8434 33.72 37.6134L30.37 39.7534C29.99 39.9934 29.84 40.4734 30.01 40.8934L31.57 44.7334C31.74 45.1534 32.18 45.3834 32.63 45.2934L36.55 44.4534C37.56 45.8834 38.83 47.1534 40.25 48.1834L39.39 52.0734C39.29 52.5134 39.53 52.9634 39.95 53.1434L43.78 54.7334C44.19 54.9034 44.68 54.7534 44.92 54.3834L47.1 51.0334C48.82 51.3334 50.62 51.3334 52.36 51.0334L54.51 54.3934C54.76 54.7734 55.24 54.9234 55.65 54.7534L59.47 53.1934C59.89 53.0234 60.13 52.5734 60.03 52.1334L59.19 48.2234C60.63 47.2034 61.88 45.9534 62.92 44.5034L66.82 45.3534C67.26 45.4434 67.71 45.2134 67.88 44.8034L69.47 40.9934C69.64 40.5734 69.5 40.0934 69.12 39.8434L65.77 37.6834C66.07 35.9534 66.07 34.1934 65.79 32.4234L69.16 30.2734C69.54 30.0334 69.69 29.5534 69.52 29.1334L69.53 29.1534Z" stroke="currentColor" stroke-miterlimit="10"></path><path d="M50.48 25.4834C45.07 25.1034 40.61 29.1234 40.22 34.2934C39.82 39.5634 43.78 44.1534 49.03 44.5434C54.34 44.9334 58.89 40.9534 59.29 35.7434C59.69 30.4934 55.74 25.8834 50.48 25.4834Z" stroke="currentColor" stroke-miterlimit="10"></path><path d="M8.37 20.6334L12.76 23.1734" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M5 33.4434H10.07" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M7.37 47.0735L11.76 44.5435" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M91.63 20.6334L87.24 23.1734" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M95.0001 33.4434H89.9301" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M92.63 47.0735L88.24 44.5435" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M35.79 75.7834H63.73" stroke="currentColor" stroke-miterlimit="10"></path><path d="M34.61 82.2134H64.92" stroke="currentColor" stroke-miterlimit="10"></path><path d="M41.76 88.8734H58.87" stroke="currentColor" stroke-miterlimit="10"></path>',14),Y=[X];function t3(a,e){return n(),c("svg",U,Y)}const e3=x(Q,[["render",t3]]),o3={},s3={viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r3=$('<path fill-rule="evenodd" clip-rule="evenodd" d="M88.6454 80.07C87.2254 78.16 84.9854 77.03 82.6054 77.03H18.3354C15.9554 77.03 13.7154 78.16 12.2954 80.07C10.7854 82.11 8.66542 84.97 6.81542 87.47C5.88542 88.73 5.73542 90.41 6.44542 91.81C7.14542 93.21 8.58542 94.09 10.1454 94.09H90.7954C92.3654 94.09 93.7954 93.21 94.5054 91.81C95.2054 90.41 95.0654 88.73 94.1354 87.47L88.6554 80.07H88.6454Z" stroke="currentColor" stroke-miterlimit="10"></path><path d="M80.7553 77.2599V76.4699C80.7553 74.1799 78.8953 72.3199 76.6053 72.3199H24.3353C22.0453 72.3199 20.1853 74.1799 20.1853 76.4699V77.1699" stroke="currentColor" stroke-miterlimit="10"></path><path d="M88.6454 80.07C89.0754 79.22 89.1454 78.79 89.1454 77.82V44.67C89.1454 23.33 71.8154 6 50.4754 6C29.1354 6 11.7954 23.33 11.7954 44.68V77.83C11.7954 78.8 11.9854 79.48 12.4154 80.33" stroke="currentColor" stroke-miterlimit="10"></path><path d="M18.7354 77.1699V44.6799C18.7354 27.1599 32.9554 12.9399 50.4754 12.9399C67.9954 12.9399 82.2154 27.1599 82.2154 44.6799V77.1199" stroke="currentColor" stroke-miterlimit="10"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M61.7853 35.62C61.5653 35.57 61.3853 35.5 61.2853 35.37C61.1753 35.22 61.1753 35.02 61.2053 34.78C61.2453 34.41 61.0253 34.06 60.6653 33.94C60.3653 33.84 60.0753 33.72 59.7953 33.58C59.4653 33.41 59.0553 33.5 58.8253 33.79C58.6753 33.98 58.5253 34.12 58.3453 34.15C58.1753 34.18 58.0053 34.1 57.8253 33.98C57.5453 33.74 57.2853 33.48 57.0453 33.2C56.9153 33 56.8353 32.83 56.8653 32.66C56.8953 32.48 57.0353 32.33 57.2253 32.18C57.5153 31.95 57.6053 31.54 57.4353 31.21C57.2953 30.93 57.1653 30.64 57.0753 30.34C56.9653 29.98 56.6153 29.76 56.2353 29.8C55.9853 29.83 55.7853 29.82 55.6453 29.72C55.5053 29.62 55.4453 29.45 55.3953 29.23C55.3653 28.86 55.3653 28.49 55.3953 28.13C55.4453 27.9 55.5153 27.72 55.6453 27.62C55.7953 27.51 55.9953 27.51 56.2353 27.54C56.6053 27.58 56.9553 27.36 57.0753 27C57.1753 26.7 57.2953 26.41 57.4353 26.13C57.6053 25.8 57.5153 25.39 57.2253 25.16C57.0353 25.01 56.8953 24.86 56.8653 24.68C56.8353 24.51 56.9153 24.34 57.0353 24.16C57.2753 23.87 57.5353 23.62 57.8153 23.38C58.0153 23.25 58.1853 23.17 58.3553 23.2C58.5353 23.23 58.6853 23.37 58.8353 23.56C59.0653 23.85 59.4753 23.94 59.8053 23.77C60.0853 23.62 60.3753 23.5 60.6753 23.41C61.0353 23.3 61.2553 22.95 61.2153 22.57C61.1853 22.32 61.1953 22.12 61.2953 21.98C61.3953 21.84 61.5653 21.78 61.7853 21.73C62.1553 21.7 62.5253 21.7 62.8853 21.73C63.1153 21.78 63.2953 21.85 63.3953 21.99C63.5053 22.14 63.5053 22.34 63.4753 22.58C63.4353 22.95 63.6553 23.3 64.0153 23.42C64.3153 23.52 64.6053 23.64 64.8853 23.78C65.2153 23.95 65.6253 23.86 65.8553 23.57C66.0053 23.38 66.1553 23.24 66.3353 23.21C66.5053 23.18 66.6753 23.26 66.8553 23.38C67.1353 23.62 67.3953 23.88 67.6353 24.16C67.7653 24.36 67.8453 24.53 67.8153 24.7C67.7853 24.88 67.6453 25.03 67.4553 25.18C67.1653 25.41 67.0753 25.82 67.2453 26.15C67.3953 26.43 67.5153 26.72 67.6053 27.02C67.7153 27.38 68.0653 27.6 68.4453 27.56C68.6953 27.53 68.8953 27.54 69.0353 27.64C69.1753 27.74 69.2353 27.91 69.2853 28.13C69.3153 28.5 69.3153 28.87 69.2853 29.23C69.2353 29.46 69.1653 29.64 69.0353 29.74C68.8853 29.85 68.6853 29.85 68.4453 29.82C68.0753 29.78 67.7253 30 67.6053 30.36C67.5053 30.66 67.3853 30.95 67.2453 31.23C67.0753 31.56 67.1653 31.97 67.4553 32.2C67.6453 32.35 67.7853 32.5 67.8153 32.68C67.8453 32.85 67.7653 33.02 67.6453 33.2C67.4053 33.49 67.1453 33.74 66.8653 33.98C66.6653 34.11 66.4953 34.19 66.3253 34.16C66.1453 34.13 65.9953 33.99 65.8453 33.8C65.6153 33.51 65.2053 33.42 64.8753 33.59C64.5953 33.73 64.3053 33.86 64.0053 33.95C63.6453 34.06 63.4253 34.41 63.4653 34.79C63.4953 35.04 63.4853 35.24 63.3853 35.38C63.2853 35.52 63.1153 35.58 62.8953 35.63C62.5253 35.66 62.1553 35.66 61.7953 35.63L61.7853 35.62Z" stroke="currentColor" stroke-miterlimit="10"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M62.3354 25.99C63.8154 25.99 65.0154 27.19 65.0154 28.67C65.0154 30.15 63.8154 31.35 62.3354 31.35C60.8554 31.35 59.6554 30.15 59.6554 28.67C59.6554 27.19 60.8554 25.99 62.3354 25.99Z" stroke="currentColor" stroke-miterlimit="10"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M30.9754 69.95C30.7554 69.9 30.5754 69.83 30.4754 69.7C30.3654 69.55 30.3654 69.35 30.3954 69.11C30.4354 68.74 30.2154 68.39 29.8554 68.27C29.5554 68.17 29.2654 68.05 28.9854 67.91C28.6554 67.74 28.2454 67.83 28.0154 68.12C27.8654 68.31 27.7154 68.45 27.5354 68.48C27.3654 68.51 27.1954 68.43 27.0154 68.31C26.7354 68.07 26.4754 67.81 26.2354 67.53C26.1054 67.33 26.0254 67.16 26.0554 66.99C26.0854 66.81 26.2254 66.66 26.4154 66.51C26.7054 66.28 26.7954 65.87 26.6254 65.54C26.4854 65.26 26.3554 64.97 26.2654 64.67C26.1554 64.31 25.8054 64.09 25.4254 64.13C25.1754 64.16 24.9754 64.15 24.8354 64.05C24.6954 63.95 24.6354 63.78 24.5854 63.56C24.5554 63.19 24.5554 62.82 24.5854 62.46C24.6354 62.23 24.7054 62.05 24.8354 61.95C24.9854 61.84 25.1854 61.84 25.4254 61.87C25.7954 61.91 26.1454 61.69 26.2654 61.33C26.3654 61.03 26.4854 60.74 26.6254 60.46C26.7954 60.13 26.7054 59.72 26.4154 59.49C26.2254 59.34 26.0854 59.19 26.0554 59.01C26.0254 58.84 26.1054 58.67 26.2254 58.49C26.4654 58.2 26.7254 57.95 27.0054 57.71C27.2054 57.58 27.3754 57.5 27.5454 57.53C27.7254 57.56 27.8754 57.7 28.0254 57.89C28.2554 58.18 28.6654 58.27 28.9954 58.1C29.2754 57.95 29.5654 57.83 29.8654 57.74C30.2254 57.63 30.4454 57.28 30.4054 56.9C30.3754 56.65 30.3854 56.45 30.4854 56.31C30.5854 56.17 30.7554 56.11 30.9754 56.06C31.3454 56.03 31.7154 56.03 32.0754 56.06C32.3054 56.11 32.4854 56.18 32.5854 56.32C32.6954 56.47 32.6954 56.67 32.6654 56.91C32.6254 57.28 32.8454 57.63 33.2054 57.75C33.5054 57.85 33.7954 57.97 34.0754 58.11C34.4054 58.28 34.8154 58.19 35.0454 57.9C35.1954 57.71 35.3454 57.57 35.5254 57.54C35.6954 57.51 35.8654 57.59 36.0454 57.71C36.3254 57.95 36.5854 58.21 36.8254 58.49C36.9554 58.69 37.0354 58.86 37.0054 59.03C36.9754 59.21 36.8354 59.36 36.6454 59.51C36.3554 59.74 36.2654 60.15 36.4354 60.48C36.5854 60.76 36.7054 61.05 36.7954 61.35C36.9054 61.71 37.2554 61.93 37.6354 61.89C37.8854 61.86 38.0854 61.87 38.2254 61.97C38.3654 62.07 38.4254 62.24 38.4754 62.46C38.5054 62.83 38.5054 63.2 38.4754 63.56C38.4254 63.79 38.3554 63.97 38.2254 64.07C38.0754 64.18 37.8754 64.18 37.6354 64.15C37.2654 64.11 36.9154 64.33 36.7954 64.69C36.6954 64.99 36.5754 65.28 36.4354 65.56C36.2654 65.89 36.3554 66.3 36.6454 66.53C36.8354 66.68 36.9754 66.83 37.0054 67.01C37.0354 67.18 36.9554 67.35 36.8354 67.53C36.5954 67.82 36.3354 68.07 36.0554 68.31C35.8554 68.44 35.6854 68.52 35.5154 68.49C35.3354 68.46 35.1854 68.32 35.0354 68.13C34.8054 67.84 34.3954 67.75 34.0654 67.92C33.7854 68.06 33.4954 68.19 33.1954 68.28C32.8354 68.39 32.6154 68.74 32.6554 69.12C32.6854 69.37 32.6754 69.57 32.5754 69.71C32.4754 69.85 32.3054 69.91 32.0854 69.96C31.7154 69.99 31.3454 69.99 30.9854 69.96L30.9754 69.95Z" stroke="currentColor" stroke-miterlimit="10"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M31.5253 60.33C33.0053 60.33 34.2053 61.53 34.2053 63.01C34.2053 64.49 33.0053 65.69 31.5253 65.69C30.0453 65.69 28.8453 64.49 28.8453 63.01C28.8453 61.53 30.0453 60.33 31.5253 60.33Z" stroke="currentColor" stroke-miterlimit="10"></path><path d="M75.2153 85.52H92.5253" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M30.5254 85.52H36.6654" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M18.0354 85.52H24.1754" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M62.8354 39.74L73.9754 46.17C74.4054 46.42 74.6654 46.87 74.6654 47.37V60.23C74.6654 60.72 74.4054 61.18 73.9754 61.43L62.8354 67.86C62.4054 68.11 61.8754 68.11 61.4554 67.86L50.3154 61.43C49.8854 61.18 49.6254 60.73 49.6254 60.23V47.37C49.6254 46.88 49.8854 46.42 50.3154 46.17L61.4554 39.74C61.8854 39.49 62.4154 39.49 62.8354 39.74Z" stroke="currentColor" stroke-miterlimit="10"></path><path d="M49.7053 46.6801L62.1753 53.2801L74.5953 46.7501" stroke="currentColor" stroke-miterlimit="10"></path><path d="M62.1254 67.9699V52.8199" stroke="currentColor" stroke-miterlimit="10"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M42.1354 27.6L53.2754 34.03C53.7054 34.28 53.9654 34.73 53.9654 35.23V48.09C53.9654 48.58 53.7054 49.04 53.2754 49.29L42.1354 55.72C41.7054 55.97 41.1754 55.97 40.7554 55.72L29.6154 49.29C29.1854 49.04 28.9254 48.59 28.9254 48.09V35.23C28.9254 34.74 29.1854 34.28 29.6154 34.03L40.7554 27.6C41.1854 27.35 41.7154 27.35 42.1354 27.6Z" fill="white" stroke="currentColor" stroke-miterlimit="10"></path><path d="M29.0054 34.54L41.4654 41.14L53.8954 34.6" stroke="currentColor" stroke-miterlimit="10"></path><path d="M41.4254 55.8301V40.6801" stroke="currentColor" stroke-miterlimit="10"></path>',17),n3=[r3];function l3(a,e){return n(),c("svg",s3,n3)}const c3=x(o3,[["render",l3]]),a3={class:"max-w-7xl mx-auto px-3 lg:flex lg:-space-x-4 items-start"},i3={class:"text-3xl font-medium mt-4 mb-2"},C3={class:"lg:pb-6"},d3=u({__name:"Features",setup(a){const{t:e}=b(),i=N,s=e3,o=c3,l=[{title:e("home.features.dapps.title"),description:e("home.features.dapps.description"),icon:i,class:""},{title:e("home.features.rd.title"),description:e("home.features.rd.description"),icon:s,class:"mt-4 lg:mt-8"},{title:e("home.features.incubation.title"),description:e("home.features.incubation.description"),icon:o,class:"mt-4 lg:mt-16"}];return(_,d)=>(n(),c("ul",a3,[(n(),c(k,null,g(l,C=>t("li",{class:B(["lg:w-1/3 border border-gray-500 px-6 py-8 lg:p-10 bg-white",C.class])},[(n(),w(V(C.icon),{class:"h-20 w-20 text-black"})),t("h2",i3,p(C.title),1),t("p",C3,p(C.description),1)],2)),64))]))}}),M=u({__name:"Button",props:{href:{type:String,default:""}},setup(a){return(e,i)=>{const s=L;return n(),w(s,{to:a.href,class:"bg-black font-serif text-white py-4 pl-8 pr-6 hover:bg-gray-800 inline-flex items-center text-xl hover:no-underline hover:text-white"},{default:m(()=>[Z(e.$slots,"default"),r(f(F),{class:"w-6 h-6 stroke-1 ml-1"})]),_:3},8,["to"])}}}),m3={class:"px-3"},p3={class:"font-medium text-3xl lg:text-5xl max-w-3xl mx-auto text-center mb-12"},_3={class:"grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-40 text-center max-w-4xl mx-auto mb-12"},u3=["src","alt"],h3={class:"text-xl mt-4"},f3={class:"text-center"},x3=u({__name:"Products",setup(a){const{t:e}=b(),i=S(),s=[{name:"Astar Network",description:e("home.products.astar"),logo:"astar-vertical.svg"},{name:"Swanky Suite",description:e("home.products.swanky"),logo:"swanky-vertical.svg"}];return(o,l)=>{const _=M;return n(),c("div",m3,[t("h2",p3,p(o.$t("home.products.title")),1),t("ul",_3,[(n(),c(k,null,g(s,d=>t("li",null,[t("img",{class:"w-44 lg:w-44 mx-auto",src:("useAsset"in o?o.useAsset:f(v))("logos/"+d.logo),alt:d.name},null,8,u3),t("p",h3,p(d.description),1)])),64))]),t("div",f3,[r(_,{href:f(i)("/products")},{default:m(()=>[h(p(o.$t("home.products.button")),1)]),_:1},8,["href"])])])}}}),k3={class:"border-y border-gray-500 py-12 lg:py-20"},g3={class:"lg:flex justify-center items-center lg:space-x-12 max-w-7xl mx-auto px-3"},L3=t("p",{class:"text-black font-serif font-normal text-center mb-8 lg:mb-0"}," Featured on ",-1),$3={class:"md:flex md:space-x-12 space-y-8 md:space-y-0"},b3=["src","alt"],w3={class:"sr-only"},v3=u({__name:"Logos",setup(a){const e=[{image:"nikkei.png",name:"日本経済新聞",href:"https://www.nikkei.com/"},{image:"coindesk.svg",name:"CoinDesk",href:"https://www.coindesk.com/"},{image:"forbes.svg",name:"Forbes",href:"https://www.forbes.com/"}];return(i,s)=>{const o=L;return n(),c("div",k3,[t("div",g3,[L3,t("ul",$3,[(n(),c(k,null,g(e,l=>t("li",null,[r(o,{to:l.href,target:"_blank"},{default:m(()=>[t("img",{class:"h-10 w-60 object-contain mx-auto",src:("useAsset"in i?i.useAsset:f(v))("logos/"+l.image),alt:l.name},null,8,b3),t("span",w3,p(l.name),1)]),_:2},1032,["to"])])),64))])])])}}}),M3={class:"w-[300px] md:w-full lg:max-w-7xl mx-auto md:px-3"},y3=t("h2",{class:"font-serif text-black text-4xl lg:text-7xl font-medium"}," From the Blog ",-1),H3={class:"mb-12"},V3={class:"md:flex border-b border-gray-300 py-8 md:space-x-8"},B3={class:"flex-1"},Z3={class:"mb-2 lg:mb-4"},A3=t("p",{class:"text-base lg:text-lg"},[t("time",null,"January 11, 2023"),h(" — "),t("span",null,"Category")],-1),N3={class:"items-center hidden lg:flex"},F3=t("span",{class:"uppercase"},"Read",-1),P3={class:"text-center"},S3=u({__name:"Blog",setup(a){return(e,i)=>{const s=L,o=M;return n(),c("div",M3,[y3,t("ul",H3,[(n(),c(k,null,g(3,l=>t("li",V3,[r(s,{class:"w-[300px] h-[156px] object-cover bg-gray-200 flex justify-center items-center shrink-0 mb-4 lg:mb-0"},{default:m(()=>[h(" img ")]),_:1}),t("div",B3,[t("h3",Z3,[r(s,{class:"text-xl lg:text-2xl font-medium"},{default:m(()=>[h(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.")]),_:1})]),A3]),t("div",N3,[r(s,{class:"flex items-center text-gray-500"},{default:m(()=>[F3,r(f(P),{class:"w-6 h-6 stroke-1"})]),_:1})])])),64))]),t("div",P3,[r(o,null,{default:m(()=>[h(p(e.$t("home.blog.button")),1)]),_:1})])])}}}),T3={},I3={class:"space-y-28 lg:space-y-40"};function j3(a,e){const i=z,s=O,o=K,l=d3,_=x3,d=v3,C=S3;return n(),c(k,null,[r(i),r(o,null,{default:m(()=>[r(s)]),_:1}),t("div",I3,[r(l),r(_),r(d),r(C)])],64)}const G3=x(T3,[["render",j3]]);export{G3 as default};
