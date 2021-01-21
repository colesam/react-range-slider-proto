(this["webpackJsonpslider-proto"]=this["webpackJsonpslider-proto"]||[]).push([[0],{19:function(e,n,t){},20:function(e,n,t){},21:function(e,n,t){"use strict";t.r(n);var o=t(0),i=t(1),s=t.n(i),r=t(8),l=t.n(r),a=t(3),c=t(2),d=t(9),u=t(10),h=t(12),b=t(11),j=t(7),v=t(13),p=function(e){var n=e.position,t=e.isActive,i=Object(v.a)(e,["position","isActive"]);return Object(o.jsx)("div",Object(j.a)(Object(j.a)({className:"Slider_handle ".concat(t?"Slider_handle-active":""),style:{left:"".concat(n,"%")},draggable:"false"},i),{},{children:" "}))},m=function(e){var n=e.position,t=e.type,i=e.isColored,s=["Slider_knob-".concat(t),i?"Slider_knob-colored":""].join(" ");return Object(o.jsx)("div",{className:"Slider_knob ".concat(s),style:{left:"".concat(n,"%")},children:" "})},f=function(e){var n=e.coloredRailPositions,t=null;if(Array.isArray(n)&&2===n.length){var i=Object(c.a)(n,2),s=i[0],r=i[1];t=Object(o.jsx)("div",{className:"Slider_rail Slider_rail-colored",style:{left:"".concat(s,"%"),right:"".concat(100-r,"%")},children:" "})}return Object(o.jsx)("div",{className:"Slider_rail",children:t})},x=function(e){return Object(a.a)(e).sort((function(e,n){return e-n}))},O=function(e){Object(h.a)(t,e);var n=Object(b.a)(t);function t(e){var o;return Object(d.a)(this,t),(o=n.call(this,e)).clickEndHandler=function(){return o.setActiveHandleIndex(null)},o.mouseMoveHandler=function(e){return o.drag(e.pageX)},o.touchMoveHandler=function(e){e.touches&&e.touches.length>0&&o.drag(e.touches[0].pageX)},o.ref=s.a.createRef(),o.state={activeHandleIndex:null},o}return Object(u.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("mousemove",this.mouseMoveHandler),document.addEventListener("touchmove",this.touchMoveHandler),document.addEventListener("mouseup",this.clickEndHandler),document.addEventListener("touchend",this.clickEndHandler)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousemove",this.mouseMoveHandler),document.removeEventListener("touchmove",this.touchMoveHandler),document.removeEventListener("mouseup",this.clickEndHandler),document.removeEventListener("touchend",this.clickEndHandler)}},{key:"knobIsColored",value:function(e){if(null===this.coloredRailPositions)return!1;var n=Object(c.a)(this.coloredRailPositions,2),t=n[0],o=n[1];return t<=e&&o>=e}},{key:"calculateSnappedPosition",value:function(e){return this.snapToThresholds.forEach((function(n){var t=Object(c.a)(n,2),o=t[0],i=t[1];e>=o-i&&e<=o+i&&(e=o)})),e}},{key:"drag",value:function(e){var n=this.state.activeHandleIndex;if(null!==n){var t,o=this.props,i=o.values,s=o.min,r=o.max,l=o.collisionsEnabled,c=o.snapToEnabled,d=o.onChange,u=(e-this.sliderCoordinates.left)/this.sliderPixelLength*100;c&&(u=this.calculateSnappedPosition(u)),t=u<0?s:u>100?r:function(e,n,t){return e/100*(t-n)+n}(u,s,r);var h=Object(a.a)(i);h[n]=t,l&&(h=x(h)),d(h)}}},{key:"setActiveHandleIndex",value:function(e){this.setState({activeHandleIndex:e})}},{key:"render",value:function(){var e=this,n=this.handlePositions.map((function(n,t){return Object(o.jsx)(p,{position:n,isActive:e.state.activeHandleIndex===t,onMouseDown:function(){return e.setActiveHandleIndex(t)},onTouchStart:function(){return e.setActiveHandleIndex(t)}},"handle_".concat(t))})),t=this.props.knobs.map((function(n){var t=n.position,i=n.type;return Object(o.jsx)(m,{position:t,type:i,isColored:e.knobIsColored(t)},"knob_".concat(t))}));return Object(o.jsxs)("div",{className:"Slider",ref:this.ref,children:[Object(o.jsx)(f,{coloredRailPositions:this.coloredRailPositions}),n,t]})}},{key:"sliderCoordinates",get:function(){return null!==this.ref.current?this.ref.current.getBoundingClientRect():{left:null,right:null,top:null,bottom:null}}},{key:"sliderPixelLength",get:function(){var e=this.sliderCoordinates,n=e.left;return e.right-n}},{key:"handlePositions",get:function(){var e=this.props,n=e.values,t=e.min,o=e.max;return n.map((function(e){return function(e,n,t){return(e-n)/(t-n)*100}(e,t,o)}))}},{key:"coloredRailPositions",get:function(){if(!this.props.coloredRailEnabled||this.handlePositions.length<1)return null;if(1===this.handlePositions.length)return[0,this.handlePositions[0]];var e=x(this.handlePositions);return[e[0],e.slice(-1)]}},{key:"snapToThresholds",get:function(){return this.props.knobs.filter((function(e){var n=e.snapToThreshold;return!isNaN(n)&&n>0})).map((function(e){return[e.position,e.snapToThreshold]}))}}]),t}(s.a.Component);O.defaultProps={coloredRailEnabled:!0,collisionsEnabled:!0,snapToEnabled:!0};var k=O;function g(){var e=Object(i.useState)([50,100]),n=Object(c.a)(e,2),t=n[0],s=n[1],r=Object(i.useState)(!0),l=Object(c.a)(r,2),d=l[0],u=l[1],h=Object(i.useState)(!0),b=Object(c.a)(h,2),j=b[0],v=b[1],p=Object(i.useState)(!0),m=Object(c.a)(p,2),f=m[0],x=m[1],O=t.map((function(e,n){return Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{type:"text",style:{width:100,margin:"0 5px 10px 20px"},value:e,onChange:function(e){return o=e.target.value,i=n,void s(t.map((function(e,n){return n===i?o:e})));var o,i}}),","]},n)}));return Object(o.jsx)("div",{className:"Demo Demo-full",children:Object(o.jsxs)("div",{className:"SliderContainer",children:[Object(o.jsx)("h1",{className:"SliderContainer_header",children:"Demo:"}),Object(o.jsx)(k,{values:t,min:50,max:150,knobs:[{position:0,type:"major",snapToThreshold:3},{position:25,type:"minor",snapToThreshold:1},{position:50,type:"normal",snapToThreshold:1},{position:75,type:"minor",snapToThreshold:1},{position:100,type:"major",snapToThreshold:3}],coloredRailEnabled:d,collisionsEnabled:f,snapToEnabled:j,onChange:s}),Object(o.jsxs)("div",{className:"SliderContainer_body",children:[Object(o.jsx)("hr",{}),Object(o.jsxs)("div",{className:"mb-10",children:[Object(o.jsx)("b",{children:"values"})," = ["]}),O,Object(o.jsx)("div",{className:"mb-10",children:"]"}),Object(o.jsxs)("div",{className:"mb-10",children:[Object(o.jsx)("button",{style:{marginRight:"10px"},onClick:function(){s([].concat(Object(a.a)(t),[150]))},children:"Add Value"}),Object(o.jsx)("button",{onClick:function(){s(t.slice(0,t.length-1))},children:"Remove Value"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{type:"checkbox",id:"enableColoredRail",checked:d,onChange:function(){return u(!d)}}),Object(o.jsx)("label",{htmlFor:"enableColoredRail",children:"Colored Rail Enabled"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{type:"checkbox",id:"enableSnapTo",checked:j,onChange:function(){return v(!j)}}),Object(o.jsx)("label",{htmlFor:"enableSnapTo",children:"Snap To Enabled"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{type:"checkbox",id:"enableCollisions",checked:f,onChange:function(){return x(!f)}}),Object(o.jsx)("label",{htmlFor:"enableSnapTo",children:"Handle Collisions Enabled"})]})]})]})})}t(19),t(20);l.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.46de4d18.chunk.js.map