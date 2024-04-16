import{y as et,z as tt,j as i,T as nt,A as rt,D as st,c as oe,f as R,u as Me,o as be,d as U,a as O,E as l,F as X,G as se,b as ot,J as _,K as M,I as Oe,N as at,O as lt,P as me,Q as ut,l as it,r as ct,t as dt,n as mt,C as ft,q as pt,w as bt,V as vt,B as fe,H as xt,v as ht,x as Ct}from"./shared-9236078a.js";var yt={duration:5e3,variant:"solid"},K={theme:tt,colorMode:"light",toggleColorMode:()=>{},setColorMode:()=>{},defaultOptions:yt,forced:!1};function Nt({theme:t=K.theme,colorMode:e=K.colorMode,toggleColorMode:o=K.toggleColorMode,setColorMode:s=K.setColorMode,defaultOptions:r=K.defaultOptions,motionVariants:a,toastSpacing:u,component:m,forced:c}=K){const b={colorMode:e,setColorMode:s,toggleColorMode:o,forced:c};return{ToastContainer:()=>i.jsx(nt,{theme:t,children:i.jsx(rt.Provider,{value:b,children:i.jsx(st,{defaultOptions:r,motionVariants:a,toastSpacing:u,component:m})})}),toast:et(t.direction,r)}}var[gt,De]=oe({name:"FormControlStylesContext",errorMessage:`useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `}),[It,ae]=oe({strict:!1,name:"FormControlContext"});function St(t){const{id:e,isRequired:o,isInvalid:s,isDisabled:r,isReadOnly:a,...u}=t,m=l.useId(),c=e||`field-${m}`,b=`${c}-label`,h=`${c}-feedback`,C=`${c}-helptext`,[I,y]=l.useState(!1),[w,k]=l.useState(!1),[N,A]=l.useState(!1),B=l.useCallback((g={},F=null)=>({id:C,...g,ref:X(F,D=>{D&&k(!0)})}),[C]),q=l.useCallback((g={},F=null)=>({...g,ref:F,"data-focus":se(N),"data-disabled":se(r),"data-invalid":se(s),"data-readonly":se(a),id:g.id!==void 0?g.id:b,htmlFor:g.htmlFor!==void 0?g.htmlFor:c}),[c,r,N,s,a,b]),L=l.useCallback((g={},F=null)=>({id:h,...g,ref:X(F,D=>{D&&y(!0)}),"aria-live":"polite"}),[h]),G=l.useCallback((g={},F=null)=>({...g,...u,ref:F,role:"group"}),[u]),T=l.useCallback((g={},F=null)=>({...g,ref:F,role:"presentation","aria-hidden":!0,children:g.children||"*"}),[]);return{isRequired:!!o,isInvalid:!!s,isReadOnly:!!a,isDisabled:!!r,isFocused:!!N,onFocus:()=>A(!0),onBlur:()=>A(!1),hasFeedbackText:I,setHasFeedbackText:y,hasHelpText:w,setHasHelpText:k,id:c,labelId:b,feedbackId:h,helpTextId:C,htmlProps:u,getHelpTextProps:B,getErrorMessageProps:L,getRootProps:G,getLabelProps:q,getRequiredIndicatorProps:T}}var Ve=R(function(e,o){const s=Me("Form",e),r=be(e),{getRootProps:a,htmlProps:u,...m}=St(r),c=U("chakra-form-control",e.className);return i.jsx(It,{value:m,children:i.jsx(gt,{value:s,children:i.jsx(O.div,{...a({},o),className:c,__css:s.container})})})});Ve.displayName="FormControl";var Be=R(function(e,o){const s=ae(),r=De(),a=U("chakra-form__helper-text",e.className);return i.jsx(O.div,{...s==null?void 0:s.getHelpTextProps(e,o),__css:r.helperText,className:a})});Be.displayName="FormHelperText";var qe=R(function(e,o){var s;const r=ot("FormLabel",e),a=be(e),{className:u,children:m,requiredIndicator:c=i.jsx(Le,{}),optionalIndicator:b=null,...h}=a,C=ae(),I=(s=C==null?void 0:C.getLabelProps(h,o))!=null?s:{ref:o,...h};return i.jsxs(O.label,{...I,className:U("chakra-form__label",a.className),__css:{display:"block",textAlign:"start",...r},children:[m,C!=null&&C.isRequired?c:b]})});qe.displayName="FormLabel";var Le=R(function(e,o){const s=ae(),r=De();if(!(s!=null&&s.isRequired))return null;const a=U("chakra-form__required-indicator",e.className);return i.jsx(O.span,{...s==null?void 0:s.getRequiredIndicatorProps(e,o),__css:r.requiredIndicator,className:a})});Le.displayName="RequiredIndicator";function Pt(t){var e,o,s;const r=ae(),{id:a,disabled:u,readOnly:m,required:c,isRequired:b,isInvalid:h,isReadOnly:C,isDisabled:I,onFocus:y,onBlur:w,...k}=t,N=t["aria-describedby"]?[t["aria-describedby"]]:[];return r!=null&&r.hasFeedbackText&&(r!=null&&r.isInvalid)&&N.push(r.feedbackId),r!=null&&r.hasHelpText&&N.push(r.helpTextId),{...k,"aria-describedby":N.join(" ")||void 0,id:a??(r==null?void 0:r.id),isDisabled:(e=u??I)!=null?e:r==null?void 0:r.isDisabled,isReadOnly:(o=m??C)!=null?o:r==null?void 0:r.isReadOnly,isRequired:(s=c??b)!=null?s:r==null?void 0:r.isRequired,isInvalid:h??(r==null?void 0:r.isInvalid),onFocus:_(r==null?void 0:r.onFocus,y),onBlur:_(r==null?void 0:r.onBlur,w)}}function Ft(t){const e=parseFloat(t);return typeof e!="number"||Number.isNaN(e)?0:e}function He(t,e){let o=Ft(t);const s=10**(e??10);return o=Math.round(o*s)/s,e?o.toFixed(e):o.toString()}function we(t){if(!Number.isFinite(t))return 0;let e=1,o=0;for(;Math.round(t*e)/e!==t;)e*=10,o+=1;return o}function _t(t,e,o){return t==null?t:(o<e&&console.warn("clamp: max cannot be less than min"),Math.min(Math.max(t,e),o))}function kt(t={}){const{onChange:e,precision:o,defaultValue:s,value:r,step:a=1,min:u=Number.MIN_SAFE_INTEGER,max:m=Number.MAX_SAFE_INTEGER,keepWithinRange:c=!0}=t,b=M(e),[h,C]=l.useState(()=>{var v;return s==null?"":(v=pe(s,a,o))!=null?v:""}),I=typeof r<"u",y=I?r:h,w=Ke(E(y),a),k=o??w,N=l.useCallback(v=>{v!==y&&(I||C(v.toString()),b==null||b(v.toString(),E(v)))},[b,I,y]),A=l.useCallback(v=>{let p=v;return c&&(p=_t(p,u,m)),He(p,k)},[k,c,m,u]),B=l.useCallback((v=a)=>{let p;y===""?p=E(v):p=E(y)+v,p=A(p),N(p)},[A,a,N,y]),q=l.useCallback((v=a)=>{let p;y===""?p=E(-v):p=E(y)-v,p=A(p),N(p)},[A,a,N,y]),L=l.useCallback(()=>{var v;let p;s==null?p="":p=(v=pe(s,a,o))!=null?v:u,N(p)},[s,o,a,N,u]),G=l.useCallback(v=>{var p;const ue=(p=pe(v,a,k))!=null?p:u;N(ue)},[k,a,N,u]),T=E(y);return{isOutOfRange:T>m||T<u,isAtMax:T===m,isAtMin:T===u,precision:k,value:y,valueAsNumber:T,update:N,reset:L,increment:B,decrement:q,clamp:A,cast:G,setValue:C}}function E(t){return parseFloat(t.toString().replace(/[^\w.-]+/g,""))}function Ke(t,e){return Math.max(we(e),we(t))}function pe(t,e,o){const s=E(t);if(Number.isNaN(s))return;const r=Ke(s,e);return He(s,o??r)}function At(t,e,o,s){const r=M(o);return l.useEffect(()=>{const a=typeof t=="function"?t():t??document;if(!(!o||!a))return a.addEventListener(e,r,s),()=>{a.removeEventListener(e,r,s)}},[e,t,s,r,o]),()=>{const a=typeof t=="function"?t():t??document;a==null||a.removeEventListener(e,r,s)}}var Tt=t=>i.jsx(Oe,{viewBox:"0 0 24 24",...t,children:i.jsx("path",{fill:"currentColor",d:"M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z"})}),Rt=t=>i.jsx(Oe,{viewBox:"0 0 24 24",...t,children:i.jsx("path",{fill:"currentColor",d:"M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"})});function je(t,e,o,s){l.useEffect(()=>{var r;if(!t.current||!s)return;const a=(r=t.current.ownerDocument.defaultView)!=null?r:window,u=Array.isArray(e)?e:[e],m=new a.MutationObserver(c=>{for(const b of c)b.type==="attributes"&&b.attributeName&&u.includes(b.attributeName)&&o(b)});return m.observe(t.current,{attributes:!0,attributeFilter:u}),()=>m.disconnect()})}function wt(t,e){const o=M(t);l.useEffect(()=>{let s=null;const r=()=>o();return e!==null&&(s=window.setInterval(r,e)),()=>{s&&window.clearInterval(s)}},[e,o])}var jt=50,Ee=300;function Et(t,e){const[o,s]=l.useState(!1),[r,a]=l.useState(null),[u,m]=l.useState(!0),c=l.useRef(null),b=()=>clearTimeout(c.current);wt(()=>{r==="increment"&&t(),r==="decrement"&&e()},o?jt:null);const h=l.useCallback(()=>{u&&t(),c.current=setTimeout(()=>{m(!1),s(!0),a("increment")},Ee)},[t,u]),C=l.useCallback(()=>{u&&e(),c.current=setTimeout(()=>{m(!1),s(!0),a("decrement")},Ee)},[e,u]),I=l.useCallback(()=>{m(!0),s(!1),b()},[]);return l.useEffect(()=>()=>b(),[]),{up:h,down:C,stop:I,isSpinning:o}}var Mt=/^[Ee0-9+\-.]$/;function Ot(t){return Mt.test(t)}function Dt(t,e){if(t.key==null)return!0;const o=t.ctrlKey||t.altKey||t.metaKey;return!(t.key.length===1)||o?!0:e(t.key)}function Vt(t={}){const{focusInputOnChange:e=!0,clampValueOnBlur:o=!0,keepWithinRange:s=!0,min:r=Number.MIN_SAFE_INTEGER,max:a=Number.MAX_SAFE_INTEGER,step:u=1,isReadOnly:m,isDisabled:c,isRequired:b,isInvalid:h,pattern:C="[0-9]*(.[0-9]+)?",inputMode:I="decimal",allowMouseWheel:y,id:w,onChange:k,precision:N,name:A,"aria-describedby":B,"aria-label":q,"aria-labelledby":L,onFocus:G,onBlur:T,onInvalid:g,getAriaValueText:F,isValidCharacter:D,format:v,parse:p,...ue}=t,ie=M(G),xe=M(T),z=M(g),Y=M(D??Ot),ce=M(F),d=kt(t),{update:W,increment:he,decrement:Ce}=d,[Ye,de]=l.useState(!1),J=!(m||c),j=l.useRef(null),Q=l.useRef(null),ye=l.useRef(null),Ne=l.useRef(null),Z=l.useCallback(n=>n.split("").filter(Y).join(""),[Y]),ee=l.useCallback(n=>{var f;return(f=p==null?void 0:p(n))!=null?f:n},[p]),H=l.useCallback(n=>{var f;return((f=v==null?void 0:v(n))!=null?f:n).toString()},[v]);at(()=>{(d.valueAsNumber>a||d.valueAsNumber<r)&&(z==null||z("rangeOverflow",H(d.value),d.valueAsNumber))},[d.valueAsNumber,d.value,H,z]),lt(()=>{if(!j.current)return;if(j.current.value!=d.value){const f=ee(j.current.value);d.setValue(Z(f))}},[ee,Z]);const te=l.useCallback((n=u)=>{J&&he(n)},[he,J,u]),ne=l.useCallback((n=u)=>{J&&Ce(n)},[Ce,J,u]),S=Et(te,ne);je(ye,"disabled",S.stop,S.isSpinning),je(Ne,"disabled",S.stop,S.isSpinning);const ge=l.useCallback(n=>{if(n.nativeEvent.isComposing)return;const x=ee(n.currentTarget.value);W(Z(x)),Q.current={start:n.currentTarget.selectionStart,end:n.currentTarget.selectionEnd}},[W,Z,ee]),Ie=l.useCallback(n=>{var f,x,P;ie==null||ie(n),Q.current&&(n.target.selectionStart=(x=Q.current.start)!=null?x:(f=n.currentTarget.value)==null?void 0:f.length,n.currentTarget.selectionEnd=(P=Q.current.end)!=null?P:n.currentTarget.selectionStart)},[ie]),Se=l.useCallback(n=>{if(n.nativeEvent.isComposing)return;Dt(n,Y)||n.preventDefault();const f=Pe(n)*u,x=n.key,V={ArrowUp:()=>te(f),ArrowDown:()=>ne(f),Home:()=>W(r),End:()=>W(a)}[x];V&&(n.preventDefault(),V(n))},[Y,u,te,ne,W,r,a]),Pe=n=>{let f=1;return(n.metaKey||n.ctrlKey)&&(f=.1),n.shiftKey&&(f=10),f},Fe=l.useMemo(()=>{const n=ce==null?void 0:ce(d.value);if(n!=null)return n;const f=d.value.toString();return f||void 0},[d.value,ce]),_e=l.useCallback(()=>{let n=d.value;if(d.value==="")return;/^[eE]/.test(d.value.toString())?d.setValue(""):(d.valueAsNumber<r&&(n=r),d.valueAsNumber>a&&(n=a),d.cast(n))},[d,a,r]),ke=l.useCallback(()=>{de(!1),o&&_e()},[o,de,_e]),re=l.useCallback(()=>{e&&requestAnimationFrame(()=>{var n;(n=j.current)==null||n.focus()})},[e]),Ae=l.useCallback(n=>{n.preventDefault(),S.up(),re()},[re,S]),Te=l.useCallback(n=>{n.preventDefault(),S.down(),re()},[re,S]);At(()=>j.current,"wheel",n=>{var f,x;const V=((x=(f=j.current)==null?void 0:f.ownerDocument)!=null?x:document).activeElement===j.current;if(!y||!V)return;n.preventDefault();const $=Pe(n)*u,Re=Math.sign(n.deltaY);Re===-1?te($):Re===1&&ne($)},{passive:!1});const Je=l.useCallback((n={},f=null)=>{const x=c||s&&d.isAtMax;return{...n,ref:X(f,ye),role:"button",tabIndex:-1,onPointerDown:_(n.onPointerDown,P=>{P.button!==0||x||Ae(P)}),onPointerLeave:_(n.onPointerLeave,S.stop),onPointerUp:_(n.onPointerUp,S.stop),disabled:x,"aria-disabled":me(x)}},[d.isAtMax,s,Ae,S.stop,c]),Qe=l.useCallback((n={},f=null)=>{const x=c||s&&d.isAtMin;return{...n,ref:X(f,Ne),role:"button",tabIndex:-1,onPointerDown:_(n.onPointerDown,P=>{P.button!==0||x||Te(P)}),onPointerLeave:_(n.onPointerLeave,S.stop),onPointerUp:_(n.onPointerUp,S.stop),disabled:x,"aria-disabled":me(x)}},[d.isAtMin,s,Te,S.stop,c]),Ze=l.useCallback((n={},f=null)=>{var x,P,V,$;return{name:A,inputMode:I,type:"text",pattern:C,"aria-labelledby":L,"aria-label":q,"aria-describedby":B,id:w,disabled:c,...n,readOnly:(x=n.readOnly)!=null?x:m,"aria-readonly":(P=n.readOnly)!=null?P:m,"aria-required":(V=n.required)!=null?V:b,required:($=n.required)!=null?$:b,ref:X(j,f),value:H(d.value),role:"spinbutton","aria-valuemin":r,"aria-valuemax":a,"aria-valuenow":Number.isNaN(d.valueAsNumber)?void 0:d.valueAsNumber,"aria-invalid":me(h??d.isOutOfRange),"aria-valuetext":Fe,autoComplete:"off",autoCorrect:"off",onChange:_(n.onChange,ge),onKeyDown:_(n.onKeyDown,Se),onFocus:_(n.onFocus,Ie,()=>de(!0)),onBlur:_(n.onBlur,xe,ke)}},[A,I,C,L,q,H,B,w,c,b,m,h,d.value,d.valueAsNumber,d.isOutOfRange,r,a,Fe,ge,Se,Ie,xe,ke]);return{value:H(d.value),valueAsNumber:d.valueAsNumber,isFocused:Ye,isDisabled:c,isReadOnly:m,getIncrementButtonProps:Je,getDecrementButtonProps:Qe,getInputProps:Ze,htmlProps:ue}}var[Bt,le]=oe({name:"NumberInputStylesContext",errorMessage:`useNumberInputStyles returned is 'undefined'. Seems you forgot to wrap the components in "<NumberInput />" `}),[qt,ve]=oe({name:"NumberInputContext",errorMessage:"useNumberInputContext: `context` is undefined. Seems you forgot to wrap number-input's components within <NumberInput />"}),Ue=R(function(e,o){const s=Me("NumberInput",e),r=be(e),a=Pt(r),{htmlProps:u,...m}=Vt(a),c=l.useMemo(()=>m,[m]);return i.jsx(qt,{value:c,children:i.jsx(Bt,{value:s,children:i.jsx(O.div,{...u,ref:o,className:U("chakra-numberinput",e.className),__css:{position:"relative",zIndex:0,...s.root}})})})});Ue.displayName="NumberInput";var Ge=R(function(e,o){const s=le();return i.jsx(O.div,{"aria-hidden":!0,ref:o,...e,__css:{display:"flex",flexDirection:"column",position:"absolute",top:"0",insetEnd:"0px",margin:"1px",height:"calc(100% - 2px)",zIndex:1,...s.stepperGroup}})});Ge.displayName="NumberInputStepper";var ze=R(function(e,o){const{getInputProps:s}=ve(),r=s(e,o),a=le();return i.jsx(O.input,{...r,className:U("chakra-numberinput__field",e.className),__css:{width:"100%",...a.field}})});ze.displayName="NumberInputField";var We=O("div",{baseStyle:{display:"flex",justifyContent:"center",alignItems:"center",flex:1,transitionProperty:"common",transitionDuration:"normal",userSelect:"none",cursor:"pointer",lineHeight:"normal"}}),$e=R(function(e,o){var s;const r=le(),{getDecrementButtonProps:a}=ve(),u=a(e,o);return i.jsx(We,{...u,__css:r.stepper,children:(s=e.children)!=null?s:i.jsx(Tt,{})})});$e.displayName="NumberDecrementStepper";var Xe=R(function(e,o){var s;const{getIncrementButtonProps:r}=ve(),a=r(e,o),u=le();return i.jsx(We,{...a,__css:u.stepper,children:(s=e.children)!=null?s:i.jsx(Rt,{})})});Xe.displayName="NumberIncrementStepper";const[Lt,Ht]=dt(),{ToastContainer:Kt,toast:Ut}=Nt();function Gt(){return Ut({position:"top",title:"Options saved!",status:"success",duration:2e3,isClosable:!0})}async function zt(t){return new Promise(e=>{chrome.storage.sync.set(t,e)})}function Wt(){const[t,e]=mt(Ct);return i.jsxs(ft,{theme:pt,children:[i.jsx(Kt,{}),i.jsx(bt,{backgroundColor:"gray.700",padding:"5",borderRadius:"md",marginY:"5",children:i.jsxs(vt,{spacing:4,align:"stretch",children:[i.jsx(fe,{children:i.jsx(xt,{as:"h1",size:"md",children:"LinkedIn AutoConnect Options"})}),i.jsx(fe,{children:i.jsxs(Ve,{children:[i.jsx(qe,{children:"Maximum auto-connections per session"}),i.jsxs(Ue,{value:t,onChange:e,children:[i.jsx(ze,{}),i.jsxs(Ge,{children:[i.jsx(Xe,{}),i.jsx($e,{})]})]}),i.jsx(Be,{children:"Automatically stops connecting after reaching this value."})]})}),i.jsx(fe,{children:i.jsx(ht,{colorScheme:"blue",onClick:()=>Lt(),children:"Save Options"})})]})})]})}(async()=>(Ht(async()=>{await zt({maximumAutoConnectionsPerSession:ut()}),Gt()}),await it(),ct.render(i.jsx(Wt,{}),document.body.appendChild(document.createElement("div")))))();
