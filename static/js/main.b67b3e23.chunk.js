(this["webpackJsonpslider-proto"]=this["webpackJsonpslider-proto"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n(1),s=n.n(i),a=n(8),c=n.n(a),l=n(3),r=n(2),d=n(9),u=n(10),h=n(12),b=n(11),j=n(7),p=n(13),m=function(e){var t=e.position,n=e.isActive,i=Object(p.a)(e,["position","isActive"]);return Object(o.jsx)("div",Object(j.a)(Object(j.a)({className:"Slider_handle ".concat(n?"Slider_handle-active":""),style:{left:"".concat(t,"%")},draggable:"false"},i),{},{children:" "}))},v=function(e){var t=e.position,n=e.type,i=e.isColored,s=["Slider_knob-".concat(n),i?"Slider_knob-colored":""].join(" ");return Object(o.jsx)("div",{className:"Slider_knob ".concat(s),style:{left:"".concat(t,"%")},children:" "})},x=function(e){var t=e.coloredRailPositions,n=null;if(Array.isArray(t)&&2===t.length){var i=Object(r.a)(t,2),s=i[0],a=i[1];n=Object(o.jsx)("div",{className:"Slider_rail Slider_rail-colored",style:{left:"".concat(s,"%"),right:"".concat(100-a,"%")},children:" "})}return Object(o.jsx)("div",{className:"Slider_rail",children:n})},O=function(e){return Object(l.a)(e).sort((function(e,t){return e-t}))},f=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var o;return Object(d.a)(this,n),(o=t.call(this,e)).clickEndHandler=function(){return o.setActiveHandleIndex(null)},o.mouseMoveHandler=function(e){return o.drag(e.pageX)},o.touchMoveHandler=function(e){e.touches&&e.touches.length>0&&o.drag(e.touches[0].pageX)},o.ref=s.a.createRef(),o.state={activeHandleIndex:null},o}return Object(u.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("mousemove",this.mouseMoveHandler),document.addEventListener("touchmove",this.touchMoveHandler),document.addEventListener("mouseup",this.clickEndHandler),document.addEventListener("touchend",this.clickEndHandler)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousemove",this.mouseMoveHandler),document.removeEventListener("touchmove",this.touchMoveHandler),document.removeEventListener("mouseup",this.clickEndHandler),document.removeEventListener("touchend",this.clickEndHandler)}},{key:"knobIsColored",value:function(e){if(null===this.coloredRailPositions)return!1;var t=Object(r.a)(this.coloredRailPositions,2),n=t[0],o=t[1];return n<=e&&o>=e}},{key:"calculateSnappedPosition",value:function(e){return this.snapToThresholds.forEach((function(t){var n=Object(r.a)(t,2),o=n[0],i=n[1];e>=o-i&&e<=o+i&&(e=o)})),e}},{key:"drag",value:function(e){var t=this.state.activeHandleIndex;if(null!==t){var n,o=this.props,i=o.values,s=o.min,a=o.max,c=o.collisionsEnabled,r=o.snapToEnabled,d=o.onChange,u=(e-this.sliderCoordinates.left)/this.sliderPixelLength*100;r&&(u=this.calculateSnappedPosition(u)),n=u<0?s:u>100?a:function(e,t,n){return e/100*(n-t)+t}(u,s,a);var h=Object(l.a)(i);h[t]=n,c&&(h=O(h)),d(h)}}},{key:"setActiveHandleIndex",value:function(e){this.setState({activeHandleIndex:e})}},{key:"render",value:function(){var e=this,t=this.handlePositions.map((function(t,n){return Object(o.jsx)(m,{position:t,isActive:e.state.activeHandleIndex===n,onMouseDown:function(){return e.setActiveHandleIndex(n)},onTouchStart:function(){return e.setActiveHandleIndex(n)}},"handle_".concat(n))})),n=this.props.knobs.map((function(t){var n=t.position,i=t.type;return Object(o.jsx)(v,{position:n,type:i,isColored:e.knobIsColored(n)},"knob_".concat(n))}));return Object(o.jsxs)("div",{className:"Slider",ref:this.ref,children:[Object(o.jsx)(x,{coloredRailPositions:this.coloredRailPositions}),t,n]})}},{key:"sliderCoordinates",get:function(){return null!==this.ref.current?this.ref.current.getBoundingClientRect():{left:null,right:null,top:null,bottom:null}}},{key:"sliderPixelLength",get:function(){var e=this.sliderCoordinates,t=e.left;return e.right-t}},{key:"handlePositions",get:function(){var e=this.props,t=e.values,n=e.min,o=e.max;return t.map((function(e){return e>o?100:e<n?0:function(e,t,n){return(e-t)/(n-t)*100}(e,n,o)}))}},{key:"coloredRailPositions",get:function(){if(!this.props.coloredRailEnabled||this.handlePositions.length<1)return null;if(1===this.handlePositions.length)return[0,this.handlePositions[0]];var e=O(this.handlePositions);return[e[0],e.slice(-1)]}},{key:"snapToThresholds",get:function(){return this.props.knobs.filter((function(e){var t=e.snapToThreshold;return!isNaN(t)&&t>0})).map((function(e){return[e.position,e.snapToThreshold]}))}}]),n}(s.a.Component);f.defaultProps={coloredRailEnabled:!0,collisionsEnabled:!0,snapToEnabled:!0};var g=f;function k(){var e=Object(i.useState)([15,60]),t=Object(r.a)(e,2),n=t[0],s=t[1],a=Object(i.useState)(0),c=Object(r.a)(a,2),d=c[0],u=c[1],h=Object(i.useState)(100),b=Object(r.a)(h,2),j=b[0],p=b[1],m=Object(i.useState)(!0),v=Object(r.a)(m,2),x=v[0],O=v[1],f=Object(i.useState)(!0),k=Object(r.a)(f,2),y=k[0],S=k[1],C=Object(i.useState)(!1),E=Object(r.a)(C,2),T=E[0],N=E[1],H=Object(i.useState)(!1),_=Object(r.a)(H,2),P=_[0],R=_[1],I=n.map((function(e,t){return Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{type:"text",className:"Demo_textInput",style:{margin:"0 5px 10px 20px"},value:e,onChange:function(e){return o=e.target.value,i=t,void s(n.map((function(e,t){return t===i?o:e})));var o,i}}),","]},t)})),D=y?[{position:0,type:"major",snapToThreshold:3},{position:25,type:"minor",snapToThreshold:1},{position:50,type:"normal",snapToThreshold:1},{position:75,type:"minor",snapToThreshold:1},{position:100,type:"major",snapToThreshold:3}]:[];return Object(o.jsx)("div",{className:"Demo Demo-full",children:Object(o.jsxs)("div",{className:"SliderContainer",children:[Object(o.jsx)("h1",{className:"SliderContainer_header",children:"Demo:"}),Object(o.jsx)(g,{values:n,min:d,max:j,knobs:D,coloredRailEnabled:x,collisionsEnabled:P,snapToEnabled:T,onChange:s}),Object(o.jsxs)("div",{className:"SliderContainer_body",children:[Object(o.jsx)("hr",{className:"Demo_hr"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{type:"checkbox",id:"enableColoredRail",checked:x,onChange:function(){return O(!x)}}),Object(o.jsx)("label",{htmlFor:"enableColoredRail",children:"Colored Rail Enabled"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{type:"checkbox",id:"enableKnobs",checked:y,onChange:function(){y?(S(!1),N(!1)):S(!0)}}),Object(o.jsx)("label",{htmlFor:"enableSnapTo",children:"Knobs Enabled"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{type:"checkbox",id:"enableSnapTo",checked:T,disabled:!y,onChange:function(){return N(!T)}}),Object(o.jsx)("label",{htmlFor:"enableSnapTo",children:"Snap To Knobs Enabled"})]}),Object(o.jsxs)("div",{className:"mb-20",children:[Object(o.jsx)("input",{type:"checkbox",id:"enableCollisions",checked:P,onChange:function(){return R(!P)}}),Object(o.jsx)("label",{htmlFor:"enableSnapTo",children:"Handle Collisions Enabled"})]}),Object(o.jsx)("hr",{className:"Demo_hr"}),Object(o.jsxs)("div",{className:"mb-10",children:[Object(o.jsx)("b",{children:"values"})," = ["]}),I,Object(o.jsx)("div",{className:"mb-20",children:"]"}),Object(o.jsxs)("div",{className:"mb-20",children:[Object(o.jsx)("button",{className:"mr-10",onClick:function(){s([].concat(Object(l.a)(n),[j]))},children:"Add Value"}),Object(o.jsx)("button",{onClick:function(){s(n.slice(0,n.length-1))},children:"Remove Value"})]}),Object(o.jsx)("hr",{className:"Demo_hr"}),Object(o.jsxs)("div",{className:"mb-20",children:[Object(o.jsx)("b",{children:"min"})," =",Object(o.jsx)("input",{type:"text",className:"Demo_textInput",value:d,onChange:function(e){return u(parseFloat(e.target.value))}})]}),Object(o.jsxs)("div",{className:"",children:[Object(o.jsx)("b",{children:"max"})," =",Object(o.jsx)("input",{type:"text",className:"Demo_textInput",value:j,onChange:function(e){return p(parseFloat(e.target.value))}})]})]})]})})}n(19),n(20);c.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(k,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.b67b3e23.chunk.js.map