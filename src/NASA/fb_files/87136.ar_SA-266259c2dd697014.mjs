(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([["87136"],{246220:function(e,t,i){var n;i.r(t),i.d(t,{default:()=>o});let a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"usePinImageUrls_pin",selections:[{alias:"imageSpec_60x60",args:[{kind:"Literal",name:"spec",value:"60x60"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:n=[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],storageKey:'images(spec:"60x60")'},{alias:"imageSpec_136x136",args:[{kind:"Literal",name:"spec",value:"136x136"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:n,storageKey:'images(spec:"136x136")'},{alias:"imageSpec_170x",args:[{kind:"Literal",name:"spec",value:"170x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:n,storageKey:'images(spec:"170x")'},{alias:"imageSpec_236x",args:[{kind:"Literal",name:"spec",value:"236x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:n,storageKey:'images(spec:"236x")'},{alias:"imageSpec_474x",args:[{kind:"Literal",name:"spec",value:"474x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:n,storageKey:'images(spec:"474x")'},{alias:"imageSpec_564x",args:[{kind:"Literal",name:"spec",value:"564x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:n,storageKey:'images(spec:"564x")'},{alias:"imageSpec_736x",args:[{kind:"Literal",name:"spec",value:"736x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:n,storageKey:'images(spec:"736x")'},{alias:"imageSpec_600x315",args:[{kind:"Literal",name:"spec",value:"600x315"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:n,storageKey:'images(spec:"600x315")'},{alias:"imageSpec_orig",args:[{kind:"Literal",name:"spec",value:"orig"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:n,storageKey:'images(spec:"orig")'}],type:"Pin",abstractKey:null};a.hash="b7ea441f2c20a68b323088ebe3847835";let o=a},433069:function(e,t,i){i.d(t,{G:()=>s,b:()=>r});var n=i(667294),a=i(616550),o=i(785893);let l=(0,n.createContext)(!0);function s({children:e}){let t=(0,a.TH)(),[i,s]=(0,n.useState)(!0),r=(0,n.useRef)(t);return(0,n.useEffect)(()=>{r.current!==t&&(r.current=t,s(!1))},[t]),(0,o.jsx)(l.Provider,{value:i,children:e})}function r(){return(0,n.useContext)(l)}},583845:function(e,t,i){i.d(t,{Rq:()=>o,Vf:()=>l,jd:()=>s,oy:()=>r,yR:()=>u});var n=i(966502),a=i(470967);let o=e=>"ios"===e&&(window.devicePixelRatio||1)*window.screen.height==2436,l=28,s=e=>window.innerHeight>=748&&o(e),r=()=>"undefined"!=typeof window&&!!window.navigator&&(/iPad/.test(navigator.platform)||"MacIntel"===navigator.platform&&"ontouchend"in document&&Math.min(window.screen.width,window.screen.height)>=700),c=()=>{a.t8(n.oj,String(!0),(0,a.kZ)(n.oj))},d=()=>!!a.U2(n.oj),u=()=>{let e=r();e!==d()&&(e?c():a.zN(n.oj.name),"undefined"!=typeof window&&window.location.reload())}},134136:function(e,t,i){i.r(t),i.d(t,{default:()=>c});var n=i(883119),a=i(806513),o=i(583845),l=i(873438),s=i(774838),r=i(785893);let c=({children:e,dataLayoutShiftBoundaryId:t,hasFixedHeader:i=!1,hasGutter:c=!0,height:d,showKeychainError:u=!1,useViewport:m=!1})=>{let p=(0,s.B)(),g=(0,o.jd)(p.userAgent.platform)?o.Vf:0;return(0,r.jsx)(n.xu,{"data-layout-shift-boundary-id":t||"PageContainer",height:m?`calc(100vh - ${g}px)`:d,paddingX:c?a.D6:void 0,paddingY:i||u?void 0:3,children:(0,r.jsx)(l.C,{value:!!c,children:e})})}},455211:function(e,t,i){i.d(t,{Z:()=>l}),i(167912);var n,a=i(907022);let o=void 0!==n?n:n=i(246220),l=e=>{let t=(0,a.Z)(o,e);return[["60x60",t?.imageSpec_60x60],["136x136",t?.imageSpec_136x136],["170x",t?.imageSpec_170x],["236x",t?.imageSpec_236x],["474x",t?.imageSpec_474x],["564x",t?.imageSpec_564x],["736x",t?.imageSpec_736x],["600x315",t?.imageSpec_600x315],["orig",t?.imageSpec_orig]].reduce((e,[t,i])=>i?{...e,[t]:i.url}:e,{})}},310758:function(e,t,i){i.d(t,{Z:()=>o});var n=i(883119),a=i(785893);function o({children:e,onMouseEnter:t,onMouseLeave:i,onTouch:o,rounding:l,fullWidth:s=!1,pressState:r="none",accessibilityLabel:c,role:d,dataTestId:u}){let m=(Array.isArray(r)?r:[r]).includes("compress");return(0,a.jsx)(n.iP,{accessibilityLabel:c,dataTestId:u,fullWidth:s,onMouseEnter:t&&(({event:e})=>t(e)),onMouseLeave:i&&(({event:e})=>i(e)),onTap:o&&(({event:e})=>o(e)),role:d,rounding:l,tapStyle:m?"compress":"none",children:e})}},603284:function(e,t,i){i.d(t,{Z:()=>c});var n=i(667294),a=i(746868),o=i(360033),l=i(495773),s=i(785893);class r extends n.Component{componentDidMount(){let{setCurrentPageData:e,viewData:t,viewParameter:i,viewType:n}=this.props;e({viewData:t,viewParameter:i,viewType:n})}componentDidUpdate(e){let{setCurrentPageData:t,viewData:i,viewParameter:n,viewType:a}=this.props;n===e.viewParameter&&a===e.viewType&&(0,o.ZP)(i,e.viewData)||t({viewData:i,viewParameter:n,viewType:a})}componentWillUnmount(){this.props.clearCurrentPageData()}render(){let{auxData:e,children:t,component:i,objectIdStr:n,viewData:a,viewParameter:o,viewType:r,clientTrackingParams:c}=this.props;return(0,s.jsx)(l.Z,{auxData:e,clientTrackingParams:c,component:i,objectIdStr:n,viewData:a,viewParameter:o,viewType:r,children:t})}}function c(e){let{setViewContextData:t,clearViewContextData:i}=(0,a.sV)();return(0,s.jsx)(r,{...e,clearCurrentPageData:i,setCurrentPageData:t})}},495773:function(e,t,i){i.d(t,{Z:()=>r});var n=i(667294),a=i(104999),o=i(865043);let l=e=>Object.keys(e).reduce((t,i)=>(void 0===e[i]&&delete t[i],t),{...e}),s=({viewType:e,viewParameter:t,viewData:i,auxData:n,objectIdStr:a,component:s,clientTrackingParams:r,element:c},d)=>{let u=l({event_type:13,view_type:e,view_parameter:t,view_data:i,aux_data:n,object_id_str:a,component:s,clientTrackingParams:r,element:c});-1===Object.keys(u).indexOf("view_type")&&(0,o.My)("mweb.logging.null_view_type"),d(u)};function r(e){let{auxData:t,clientTrackingParams:i,children:o,component:l,element:r,objectIdStr:c,viewData:d,viewParameter:u,viewType:m}=e,p=(0,a.Z)(),g=JSON.stringify(t),h=JSON.stringify(d);return(0,n.useEffect)(()=>{s(e,p)},[p,g,i,l,r,c,h,u,m]),n.Children.only(o)}},949221:function(e,t,i){i.d(t,{Z:()=>b});var n=i(667294),a=i(883119),o=i(138596),l=i(433069),s=i(835531),r=i(774838),c=i(730448),d=i(739405),u=i(530786),m=i(785893);function p({children:e,isImagePinForUnauthOnTablet:t}){let{isAuthenticated:i}=(0,r.B)();return(0,m.jsxs)(a.xu,{alignItems:"center",bottom:!0,dangerouslySetInlineStyle:{__style:{cursor:"pointer",width:t?"40vw":void 0}},display:"flex",justifyContent:"center",left:!0,position:"absolute",right:!t||void 0,top:!0,zIndex:i?void 0:u.eu,children:[(0,m.jsx)(a.xu,{bottom:!0,dangerouslySetInlineStyle:{__style:{backgroundColor:"#000",borderRadius:"6px 6px 0 0",WebkitTransition:"opacity .04s linear",transition:"opacity .04s linear"}},left:!0,opacity:.4,position:"absolute",right:!0,top:!0}),e]})}var g=i(923298),h=i(865043),_=i(736328);function x({setShowClickthroughOverlay:e,isEligibleForPdp:t,isEligibleForDesktopSocialInviteOverlay:i,inviterFirstName:l}){let s=(0,o.ZP)(),r=(0,_.Z)(),c=(0,g.Z)(),u=(0,n.useRef)(null),p="desktop"===(0,d.ZP)(),x=l&&i,y=x&&(s.bt("سجل الاشتراك للانضمام إلى {{ name }} على Pinterest", "Sign up to join {{ name }} on Pinterest", "pin.closeup.wash.desktop.shareNotification", undefined, true)).replace("{{ name }}",l),f=s.bt("انقر لتحقيق أقصى استفادة من هذه الفكرة باستخدام حساب مجاني", "Click to make the most out of this idea with a free account", "web.unauth.plp.clickable_wash.header", undefined, true),v=s.bt("اضغط لتحقيق أقصى استفادة من هذه الفكرة باستخدام حساب مجاني", "Tap to make the most out of this idea with a free account", "mweb.unauth.plp.clickable_wash.header", undefined, true);return(0,m.jsx)(a.iP,{onMouseEnter:()=>{x&&(0,h.My)("dweb.main_pin.social.wash.view"),(0,h.My)("dweb.pin.wash.view")},onMouseLeave:()=>{x?r({action:"dismiss",item:"main-pin-social-wash"}):r({action:"dismiss",item:"main-pin-wash"})},onTap:({event:e})=>{p&&(e.preventDefault(),r({action:"click",item:"pin-image"}),i&&l&&r({action:"click",item:"main-pin-social-wash"}),r({action:"click",item:"main-pin-image-signup-modal"}),c({reason:"UPSELL_LOGIN_OR_SIGNUP",attributionLabel:"click_closeup",desktopOptions:{modalType:"signup",modalOptions:{source:"defaultSource",container:"pinWash"}}}),t&&r({action:"click",item:"pdp-pin-image"}))},children:(0,m.jsxs)(a.xu,{zIndex:new a.Ry(2),children:[(0,m.jsx)(a.xu,{ref:u,alignItems:"center",bottom:!0,"data-test-id":"main-pin-hover-overlay",direction:"column",display:"flex",height:"100%",justifyContent:i?"center":void 0,left:!0,position:"absolute",right:!0,top:!0,width:"100%",children:(0,m.jsx)(a.xu,{alignItems:"center",direction:"column",display:"flex",maxWidth:240,paddingY:10,children:(0,m.jsx)(a.xu,{marginTop:8,children:(0,m.jsx)(a.X6,{align:"center",color:"light",size:x?"500":"400",children:p?y||f:v})})})}),!p&&(0,m.jsx)(a.xu,{marginEnd:4,marginTop:4,position:"absolute",right:!0,top:!0,children:(0,m.jsx)(a.hU,{accessibilityLabel:s.bt("إغلاق الزر القابل للنقر للمنشور", "Close pin clickable wash", "mweb.unauth.plp.clickable_wash.close_button", undefined, true),icon:"cancel",iconColor:"white",onClick:({event:t})=>{t.stopPropagation(),e&&(e(!1),r({action:"dismiss",item:"main-pin-hover-overlay"}))},size:"md"})})]})})}var y=i(407678),f=i(411657),v=i(758594);let b=e=>{let t=(0,o.ZP)(),{alt:i,clickthroughOverlayOptions:u,color:g,isFlashlightPage:h,naturalHeight:_,naturalWidth:b,placeholder:w,pwtElementTimingId:k,pwtSurfaceContext:S,setShowClickthroughOverlay:j,showSpinner:P,src:L,stickyFooter:C,isEligibleForPdp:I}=e,T=!(0,l.b)(),{isAuthenticated:D}=(0,r.B)(),Z=(0,d.ZP)(),A="desktop"===Z,z=(0,n.useRef)(null),[E,$]=(0,n.useState)(!T||!!L&&!!w&&w===L),H=(0,n.useRef)(""),M=()=>{S&&S.markConstraintComplete("PinPageMainImageRendered")};(0,n.useEffect)(()=>{let e=new Image;e.onload=()=>$(!0),e.src=L},[]);let F=(0,n.useRef)(f.a()?.setHasScrolledPastMainContent);(0,n.useEffect)(()=>{let e=(0,c.Z)(()=>{if(z.current){let t=window.scrollY>z.current.offsetTop+z.current.offsetHeight;F.current?.(t),t&&window.removeEventListener("scroll",e)}},10);window.addEventListener("scroll",e)},[]);let[O,K]=(0,n.useState)();(0,n.useEffect)(()=>{z.current&&K(z.current.scrollHeight)},[]);let U=!h&&"tablet"===Z,R=T?(0,m.jsx)(s.Z,{alt:i,color:g,elementTiming:k,naturalHeight:_,naturalWidth:b,onLoad:M,src:w}):null;return(0,m.jsx)(v.Z,{metricName:"CloseupImage",children:(0,m.jsxs)(a.xu,{ref:z,"data-test-id":"pin-closeup-image",maxHeight:"100%",maxWidth:"tablet"===Z?y.g6:void 0,minHeight:O,overflow:C?void 0:"hidden",position:"relative",rounding:h||"phone"===Z?0:6,width:h||"phone"===Z?"100%":A?508:y.Hg,children:[!D&&u&&(0,m.jsx)(p,{isImagePinForUnauthOnTablet:!1,children:(0,m.jsx)(x,{inviterFirstName:H.current,isEligibleForPdp:I,setShowClickthroughOverlay:j})}),R&&(U?(0,m.jsx)(a.xu,{overflow:"hidden",rounding:6,children:R}):R),(0,m.jsx)(a.xu,{bottom:!0,dangerouslySetInlineStyle:{__style:{opacity:E?1:0,transition:E&&!A?"opacity .5s ease-in-out":void 0,backgroundColor:g}},left:!0,overflow:U?"hidden":void 0,position:T?"absolute":"relative",right:!0,rounding:U?6:5,top:!0,children:T?(0,m.jsx)(a.Ee,{alt:i,naturalHeight:_,naturalWidth:b,src:L}):(0,m.jsx)(s.Z,{alt:i,color:g,elementTiming:k,naturalHeight:_,naturalWidth:b,onLoad:M,src:L})}),P&&(0,m.jsx)(a.xu,{bottom:!0,dangerouslySetInlineStyle:{__style:{opacity:E?0:1,transition:E?"opacity .5s ease-in-out":void 0}},display:"flex",justifyContent:"center",left:!0,position:"absolute",right:!0,top:!0,children:!E&&(0,m.jsx)(a.kC,{alignItems:"center",justifyContent:"start",children:(0,m.jsx)(a.$j,{accessibilityLabel:t.bt("جارٍِ تحميل صورة", "Loading image", "Loading higher resolution image", undefined, true),show:!0})})}),C]})})}},153040:function(e,t,i){i.d(t,{D:()=>u,x:()=>d});var n=i(667294),a=i(865043),o=i(785893);let l=(0,n.createContext)(()=>{}),s=()=>{document&&document.body&&document.body.style&&(document.body.style.overflow="hidden")},r=()=>{document&&document.body&&document.body.style&&(document.body.style.overflow="unset")},c=()=>(0,n.useEffect)(()=>r,[]),d=({children:e})=>{let[t,i]=(0,n.useState)(null);c();let d=(0,n.useCallback)(e=>{(0,a.My)("dweb.unauth.context_menu.open_menu"),s(),i(e)},[]),u=!!t;return(0,n.useEffect)(()=>{let e=()=>{i(null),r(),(0,a.My)("dweb.unauth.context_menu.click_away")};return u&&document.addEventListener("click",e),()=>{u&&document.removeEventListener("click",e)}},[u]),(0,o.jsx)(l.Provider,{value:d,children:(0,o.jsxs)(n.Fragment,{children:[e,t]})})},u=()=>(0,n.useContext)(l)},407678:function(e,t,i){i.d(t,{$K:()=>l,Hg:()=>a,g6:()=>o,w6:()=>n});let n=(e,t)=>Array.from({length:t-e},(t,i)=>i+e),a=508,o=600;function l(e){return null!=e}},838751:function(e,t,i){i.d(t,{Z:()=>n});let n=({name:e,width:t,height:i})=>{let n=`${t}${"number"==typeof t?"px":""}`,a=`${i}${"number"==typeof i?"px":""}`,o="number"==typeof t?t:236;return`
.${e} {
  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: ${e}_placeHolderShimmer;
  -webkit-animation-timing-function: linear;
  border-radius: 16px;
  background: #f6f7f9;
  background-image: linear-gradient(to right, #f6f7f9 0%, #e9ebee 20%, #f6f7f9 40%, #f6f7f9 100%);
  background-repeat: no-repeat;
  background-size: ${o} ${a};
  width: ${n};
  height: ${a};
}

@keyframes ${e}_placeHolderShimmer{
  0% {
      background-position: -${o}px 0;
  }
  100% {
      background-position: ${o}px 0;
  }
}
`}},254889:function(e,t,i){i.d(t,{Z:()=>x});var n=i(581722),a=i(616550),o=i(883119),l=i(4533),s=i(104999),r=i(746868),c=i(351736),d=i(138596),u=i(173874),m=i(34550),p=i(865043),g=i(736328),h=i(739405),_=i(785893);function x({alignIconLeft:e,bgColor:t,color:i,disableRedirect:x=!1,fallbackUrl:y,icon:f="arrow-back",onTouch:v,padding:b,placement:w,shouldUseFallbackUrl:k,size:S="lg",viewParameter:j,viewType:P,isVisualSearch:L}){let C=(0,d.ZP)(),I=(0,a.k6)(),T=(0,a.TH)(),D=(0,h.HG)(),Z=(0,n.v9)(e=>e.session.isAuthenticated),A=(0,s.Z)(),z=(0,g.Z)(),E=(0,c.vs)(),{viewType:$,viewParameter:H}=(0,r.SU)(),[M,F]=P?[P,j]:[$,H],O=()=>T.search&&T.search.includes("?nativeShouldDismiss=true"),K=()=>{let e=m.ZP.getItem(l.pm);T.key||"/ideas"!==y?(0,p.My)(`pinner_conversion.back_button.${String(e?.[0].pageType)}`):(0,p.My)("pinner_conversion.back_button.no_history"),(0,p.My)(`web_back_button_click.${String(w)}.is_auth_${String(Z)}`),z({action:"click",item:"back-button"}),M&&A({view_type:M,view_parameter:F,element:34,event_type:102}),v&&v(),x||((!T.key||T.state&&"redirect"===T.state.referrer||k)&&y?I.push(y):T.pathname.includes("/password/reset/")&&O()?I.push("/login/?dismissWebview=true"):I.goBack())},U=E?c.t4:"white",R=(0,u.am)(T)||L||"white"===i;return(0,_.jsx)(o.xu,{"data-test-id":"back-button",children:e?(0,_.jsx)(o.xu,{alignItems:"center",display:"flex",height:48,marginStart:"cancel"===f?-1:-2,width:48,children:(0,_.jsx)(o.hU,{accessibilityLabel:C.bt("رجوع", "Back", "navigation button", undefined, true),bgColor:t,icon:f,iconColor:!i&&(!t||["white","lightGray","transparent"].includes(t))?"gray":i,onClick:K,padding:"auto"!==b?b:2,size:S})}):(0,_.jsx)(o.xu,{dangerouslySetInlineStyle:{__style:{backgroundColor:D||R||t?"":U,width:E&&!R?"fit-content":""}},rounding:"circle",children:(0,_.jsx)(o.hU,{accessibilityLabel:C.bt("رجوع", "Back", "navigation button", undefined, true),bgColor:t||D?t:"transparent",icon:f,iconColor:!i&&(!t||["white","lightGray","transparent"].includes(t))?"gray":i,onClick:K,padding:"auto"!==b?b:2,size:S})})})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/87136.ar_SA-266259c2dd697014.mjs.map