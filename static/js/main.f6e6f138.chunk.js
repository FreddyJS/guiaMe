(this.webpackJsonpreactapp=this.webpackJsonpreactapp||[]).push([[0],{102:function(e,t,n){},127:function(e,t,n){},130:function(e,t,n){},131:function(e,t,n){},133:function(e,t,n){},136:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),i=(n(102),n(141)),a=n(142),s=n(143),o=n(160),l=n(145),d=n(146),u=n(147),h=n(148),j=n(149),b=n(150),x=n(161),p=n(151),f=n(152),O=n(153),m=n(154),g=n(36),y=n(4),v=function(){return Object(y.jsx)(i.a,{render:function(e){var t=e.isSideNavExpanded,n=e.onClickSideNavExpand;return Object(y.jsxs)(a.a,{"aria-label":"guiaMe",children:[Object(y.jsx)(s.a,{}),Object(y.jsx)(o.a,{"aria-label":"Open menu",onClick:n,isActive:t}),Object(y.jsx)(l.a,{element:g.b,to:"/",prefix:"AGR",children:"guiaMe"}),Object(y.jsxs)(d.a,{"aria-label":"guiaMe",children:[Object(y.jsx)(u.a,{element:g.b,to:"/room",children:"Room Page"}),Object(y.jsx)(u.a,{element:g.b,to:"/mapdev",children:"Map Editor"}),Object(y.jsx)(u.a,{element:g.b,to:"/stats",children:"Estad\xedsticas"})]}),Object(y.jsx)(h.a,{"aria-label":"Side navigation",expanded:t,isPersistent:!1,children:Object(y.jsx)(j.a,{children:Object(y.jsxs)(b.a,{children:[Object(y.jsx)(u.a,{element:g.b,to:"/room",children:"Room Page"}),Object(y.jsx)(u.a,{element:g.b,to:"/mapdev",children:"Map Editor"}),Object(y.jsx)(u.a,{element:g.b,to:"/stats",children:"Estad\xedsticas"})]})})}),Object(y.jsxs)(x.a,{children:[Object(y.jsx)(p.a,{"aria-label":"Notifications",children:Object(y.jsx)(f.a,{})}),Object(y.jsx)(p.a,{"aria-label":"User Avatar",children:Object(y.jsx)(O.a,{})}),Object(y.jsx)(p.a,{"aria-label":"App Switcher",children:Object(y.jsx)(m.a,{})})]})]})}})},w=n(21),S=n(156),k=n(23),R=n.n(k),T=n(38),C=n(18),N=n.p+"static/media/robot.5e2091c7.png",_=new WebSocket("ws://localhost:8000/ws/robot/R01/");_.onmessage=function(e){var t=JSON.parse(e.data);console.log("RobotSocket Received: ",t)};var E=new WebSocket("ws://localhost:8000/ws/ui/R01/");E.onmessage=function(e){var t=JSON.parse(e.data);console.log("UISocket Received: ",t)};var I=n(137),B=n(158),H=n(159),P=n(51),D=n.n(P),z=function(){var e=Object(T.a)(R.a.mark((function e(){var t;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("".concat("http://localhost:8000/api/","routes"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=(n(127),function(e){var t=e.onSubmit,n=e.onChange,r=e.value;return Object(y.jsxs)("div",{className:"room-page__keyboard",children:[Object(y.jsxs)("div",{className:"room-page__keyboard-row",children:[Object(y.jsx)(I.a,{className:"room-page__keyboard-button",onClick:function(){return n(r+"1")},children:"1"}),Object(y.jsx)(I.a,{className:"room-page__keyboard-button",onClick:function(){return n(r+"2")},children:"2"}),Object(y.jsx)(I.a,{className:"room-page__keyboard-button",onClick:function(){return n(r+"3")},children:"3"})]}),Object(y.jsxs)("div",{className:"room-page__keyboard-row",children:[Object(y.jsx)(I.a,{className:"room-page__keyboard-button",onClick:function(){return n(r+"4")},children:"4"}),Object(y.jsx)(I.a,{className:"room-page__keyboard-button",onClick:function(){return n(r+"5")},children:"5"}),Object(y.jsx)(I.a,{className:"room-page__keyboard-button",onClick:function(){return n(r+"6")},children:"6"})]}),Object(y.jsxs)("div",{className:"room-page__keyboard-row",children:[Object(y.jsx)(I.a,{className:"room-page__keyboard-button",onClick:function(){return n(r+"7")},children:"7"}),Object(y.jsx)(I.a,{className:"room-page__keyboard-button",onClick:function(){return n(r+"8")},children:"8"}),Object(y.jsx)(I.a,{className:"room-page__keyboard-button",onClick:function(){return n(r+"9")},children:"9"})]}),Object(y.jsxs)("div",{className:"room-page__keyboard-row",children:[Object(y.jsx)(I.a,{className:"room-page__keyboard-button",onClick:function(){return n("")},children:"Reset"}),Object(y.jsx)(I.a,{className:"room-page__keyboard-button",onClick:function(){return n(r+"0")},children:"0"}),Object(y.jsx)(I.a,{className:"room-page__keyboard-button",onClick:function(){return t()},children:"OK"})]})]})}),M=n(63),W=function(){var e=c.a.useState(""),t=Object(C.a)(e,2),n=t[0],r=t[1],i=c.a.useState(!1),a=Object(C.a)(i,2),s=a[0],o=a[1],l=c.a.useState(!1),d=Object(C.a)(l,2),u=d[0],h=d[1],j=c.a.useState(),b=Object(C.a)(j,2),x=b[0],p=b[1],f=c.a.useState(!1),O=Object(C.a)(f,2),m=O[0],g=O[1],v=c.a.useState(""),w=Object(C.a)(v,2),S=w[0],k=w[1],_=function(){var e=Object(T.a)(R.a.mark((function e(){var t,r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z();case 2:t=e.sent,(r=t.find((function(e){return e.dest_room===n&&"hall"===e.origin_room})))?(console.log("Route:",r),p(r),o(!0)):h(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(y.jsxs)("div",{className:"room-page",children:[!1,s&&Object(y.jsx)(B.a,{open:s,onRequestClose:function(){return o(!1)},onRequestSubmit:function(){return function(){g(!0),k(x.route[0]);var e={type:"to.robot",message:{type:"start",room:n,route:x}};E.send(JSON.stringify(e)),o(!1)}()},modalHeading:"Confirmar destino",primaryButtonText:"Submit",children:Object(y.jsxs)("div",{children:[Object(y.jsxs)("h1",{children:["Ir a la habitaci\xf3n ",n,"?"]}),Object(y.jsx)("img",{src:"https://i.etsystatic.com/17441626/r/il/362050/1469060776/il_fullxfull.1469060776_e867.jpg",alt:"room"})]})}),Object(y.jsxs)(H.a,{className:"room-page__content",children:[""===n?Object(y.jsx)("h3",{children:"Introduce el n\xfamero de habitaci\xf3n"}):Object(y.jsxs)("h3",{children:["Habitaci\xf3n: ",n]}),u&&Object(y.jsx)("h3",{style:{color:"red"},children:"No existe la habitaci\xf3n"}),m?Object(y.jsxs)("div",{children:[Object(y.jsxs)("h4",{children:["En el pr\xf3ximo cruce: ",Object(y.jsx)("strong",{children:S.split(".")[0]})]}),S.startsWith("recto")&&Object(y.jsx)(M.d,{style:{width:"70%",height:"70%",fill:"green"}}),S.startsWith("derecha")&&Object(y.jsx)(M.c,{style:{width:"70%",height:"70%",fill:"green"}}),S.startsWith("atras")&&Object(y.jsx)(M.a,{style:{width:"70%",height:"70%",fill:"green"}}),S.startsWith("izquierda")&&Object(y.jsx)(M.b,{style:{width:"70%",height:"70%",fill:"green"}})]}):Object(y.jsx)(A,{onSubmit:function(){return _()},onChange:function(e){r(e),h(!1)},value:n})]}),Object(y.jsx)("img",{src:N,alt:"robot"})]})},F=n(14),L=n(80),G=n(75),J=n.p+"static/media/background.c7bb9117.png",U=n(25),q=(n(130),{running:!1,currentTime:0,lastTime:0});function X(e,t){switch(t.type){case"reset":return{running:!1,currentTime:0,lastTime:0};case"start":return Object(F.a)(Object(F.a)({},e),{},{running:!0,lastTime:Date.now()});case"stop":return Object(F.a)(Object(F.a)({},e),{},{running:!1});case"tick":return e.running?Object(F.a)(Object(F.a)({},e),{},{currentTime:e.currentTime+(Date.now()-e.lastTime),lastTime:Date.now()}):e;default:return e}}function Y(){var e=Object(r.useReducer)(X,q),t=Object(C.a)(e,2),n=t[0],c=t[1],i=function(e){var t=new Date(e),n=t.getHours()+t.getTimezoneOffset()/60,r=t.getMinutes(),c=t.getSeconds(),i=t.getMilliseconds();return n=n.toString().padStart(2,"0"),r=r.toString().padStart(2,"0"),{seconds:c=c.toString().padStart(2,"0"),minutes:r,hours:n,milliseconds:i=i.toString().padStart(3,"0")}}(n.currentTime);return Object(r.useEffect)((function(){var e;return e=requestAnimationFrame((function t(){c({type:"tick"}),e=requestAnimationFrame(t)})),function(){return cancelAnimationFrame(e)}}),[]),Object(y.jsxs)("div",{className:"ppal",children:[Object(y.jsx)("div",{className:"textt",children:" Tiempo en ruta : "}),Object(y.jsxs)("span",{className:"timer",id:"timer",children:[i.hours,":",i.minutes,":",i.seconds,".",i.milliseconds]}),Object(y.jsxs)("div",{children:[Object(y.jsxs)("button",{id:"restart",hidden:!0,onClick:function(){return c({type:"reset"})},children:["Reset"," "]}),n.running?Object(y.jsxs)("button",{id:"stop",hidden:!0,onClick:function(){return c({type:"stop"})},children:["stop"," "]}):Object(y.jsxs)("button",{id:"start",hidden:!0,onClick:function(){return c({type:"start"})},children:["start"," "]})]})]})}var K=new WebSocket("ws://localhost:8000/ws/dashboard/"),V=[],Q=function(){var e=c.a.useState("BASE"),t=Object(C.a)(e,2),n=t[0],r=t[1],i=c.a.useRef(null),a=c.a.useRef(null),s=new window.Image;s.src=J;var o=!0,l=!1,d=[],u=[];return K.onmessage=function(e){var t=JSON.parse(e.data);if(console.log("Dashboard Received: ",t),void 0!==t.hall&&(a.current.opacity(1),V.push(t.hall),r(t.hall)),void 0!==t.active&&t.active&&o)document.getElementById("restart").click(),document.getElementById("start").click(),o=!o,l=!l;else if(void 0!==t.active&&!t.active&&l){document.getElementById("stop").click();var n=document.getElementById("timer").textContent;d=n.split(":"),u=d[2].split("."),l=!l,o=!o;var c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({robot_id:"R01",destiny:t.route.dest_room,minutes:d[1],seconds:u[0],miliseconds:u[1]})};try{fetch("http://localhost:8000/api/stats/",c).then((function(e){e.json()}))}catch(i){console.error(i)}}},c.a.useEffect((function(){if(console.log(a),null!==a.current){var e=new L.a.Animation((function(e){null!==a.current&&a.current.opacity((Math.sin(e.time/300)+1)/2)}),a.current.getLayer());return e.start(),function(){e.stop()}}}),[]),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(Y,{id:"crono"}),Object(y.jsx)(U.d,{width:G.stageWidth,height:G.stageHeight,ref:i,children:G.layers.map((function(e,t){return Object(y.jsxs)(U.b,{children:[0===t&&Object(y.jsx)(U.a,{image:s,width:1280,height:720}),e.elements.map((function(e,t){if("Rect"===e.type){var r=!1;return r=(r=!!V.find((function(t){return e.attrs.id===t})))||e.attrs.id===n,"BASE"===e.attrs.id&&(r=!1),"BASE"===n&&0!==V.length&&(V.splice(0,V.length),V.splice(0,V.length)),Object(y.jsx)(U.c,Object(F.a)(Object(F.a)({},e.attrs),{},{fill:!0===r?"green":e.attrs.fill,ref:e.attrs.id===n?a:null}),t)}return"Text"===e.type?Object(y.jsx)(U.e,Object(F.a)({},e.attrs),t):null}))]},t)}))})]})},Z=n(48),$=(n(131),n(157)),ee=n(155),te=function(e){var t=e.shapeProps,n=e.isSelected,r=e.onSelect,i=e.onChange,a=c.a.useRef(),s=c.a.useRef();return c.a.useEffect((function(){n&&(s.current.nodes([a.current]),s.current.getLayer().batchDraw())}),[n]),Object(y.jsxs)(c.a.Fragment,{children:[Object(y.jsx)(U.c,Object(F.a)(Object(F.a)({onClick:r,onTap:r,ref:a},t),{},{draggable:!0,onDragEnd:function(e){i(Object(F.a)(Object(F.a)({},t),{},{x:e.target.x()>0?e.target.x():0,y:e.target.y()>0?e.target.y():0}))},onTransformEnd:function(e){var n=a.current,r=n.scaleX(),c=n.scaleY();n.scaleX(1),n.scaleY(1),i(Object(F.a)(Object(F.a)({},t),{},{x:n.x(),y:n.y(),width:Math.max(5,n.width()*r),height:Math.max(n.height()*c)}))}})),n&&Object(y.jsx)(U.f,{ref:s,boundBoxFunc:function(e,t){return t.width<5||t.height<5?e:t}})]})},ne={type:"Text",x:100,y:100,text:"Hello World",fontSize:16,fill:"black"},re={type:"Rect",x:100,y:100,width:100,height:100,fill:"purple"},ce={type:"Rect",x:100,y:100,width:30,height:100,fill:"black"},ie={type:"Rect",x:100,y:100,width:30,height:30,fill:"blue"},ae=function(){var e=c.a.useRef(),t=new window.Image;t.src=J;var n=c.a.useState([]),r=Object(C.a)(n,2),i=r[0],a=r[1],s=c.a.useState(null),o=Object(C.a)(s,2),l=o[0],d=o[1],u=c.a.useState(""),h=Object(C.a)(u,2),j=h[0],b=h[1],x=c.a.useState("blue"),p=Object(C.a)(x,2),f=p[0],O=p[1],m=c.a.useState("vertical"),g=Object(C.a)(m,2),v=g[0],w=g[1];var S=function(){var t=e.current,n=t.children.map((function(e,t){return{layer:"layer"+t,elements:e.children.filter((function(e){return"Transformer"!==e.className})).map((function(e){return"Rect"===e.className?{type:e.className,attrs:{id:e.id(),x:e.x(),y:e.y(),width:e.width(),height:e.height(),fill:e.fill()}}:"Text"===e.className?{type:e.className,attrs:{id:e.id(),x:e.x(),y:e.y(),text:e.text(),fontSize:e.fontSize(),fill:e.fill()}}:null}))}}));!function(e,t){var n="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(e,null,2)),r=document.createElement("a");r.download=t,r.href=n,document.body.appendChild(r),r.click(),document.body.removeChild(r)}({stageWidth:t.width(),stageHeight:t.height(),layers:n},"stage.json")};function k(e){if("room"===e){var t=Object(F.a)({id:"room"+i.filter((function(e){return e.id.startsWith("room")})).length},re);a([].concat(Object(Z.a)(i),[t]))}else if("text"===e){var n=Object(F.a)({id:"text"+i.filter((function(e){return e.id.startsWith("text")})).length},ne);""!==j&&(n.text=j,b("")),a([].concat(Object(Z.a)(i),[n]))}else if("hall"===e){var r=Object(F.a)({id:"hall"+i.filter((function(e){return e.id.startsWith("hall")})).length},ce);if("vertical"===v);else{var c=r.width;r.width=r.height,r.height=c}a([].concat(Object(Z.a)(i),[r]))}else if("sticker"===e){var s=Object(F.a)({id:"sticker"+i.filter((function(e){return e.id.startsWith("sticker")})).length},ie);s.fill=f,a([].concat(Object(Z.a)(i),[s]))}}return Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{style:{display:"flex",flexDirection:"row",marginTop:"1rem",textAlign:"center",justifyContent:"space-around"},children:null!==l&&"Rect"===i.find((function(e){return e.id===l})).type?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("strong",{children:"Shape ID"})," ",Object(y.jsx)($.a,{id:"change-id",labelText:"",placeholder:i.find((function(e){return e.id===l})).id.toString()})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("strong",{children:"Shape Width"})," ",Object(y.jsx)($.a,{id:"change-width",labelText:"",placeholder:i.find((function(e){return e.id===l})).width.toString()})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("strong",{children:"Shape Height"})," ",Object(y.jsx)($.a,{id:"change-height",labelText:"",placeholder:i.find((function(e){return e.id===l})).height.toString()})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("strong",{children:"Shape X-Position"})," ",Object(y.jsx)($.a,{id:"change-x-pos",labelText:"",placeholder:i.find((function(e){return e.id===l})).x.toString()})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("strong",{children:"Shape Y-Position"})," ",Object(y.jsx)($.a,{id:"change-y-pos",labelText:"",placeholder:i.find((function(e){return e.id===l})).y.toString()})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("strong",{children:"Shape Color"})," ",Object(y.jsx)($.a,{id:"change-color",labelText:"",placeholder:i.find((function(e){return e.id===l})).fill})]}),Object(y.jsx)(I.a,{onClick:function(){var e=document.getElementById("change-id").value,t=document.getElementById("change-width").value,n=document.getElementById("change-height").value,r=document.getElementById("change-x-pos").value,c=document.getElementById("change-y-pos").value,s=document.getElementById("change-color").value,o=i.map((function(i){return i.id===l&&(i.id=""!==e?e:i.id,i.width=""!==t?parseInt(t):i.width,i.height=""!==n?parseInt(n):i.height,i.x=""!==r?parseInt(r):i.x,i.y=""!==c?parseInt(c):i.y,i.fill=""!==s?s:i.fill),i}));a(o),d(""!==e?e:l)},style:{marginLeft:"1rem",padding:"1rem"},children:"Save Shape"}),Object(y.jsx)(I.a,{onClick:function(){return d(null)},style:{marginLeft:"10px",padding:"1rem"},children:"Unselect"})]}):Object(y.jsx)(y.Fragment,{})}),Object(y.jsxs)("div",{style:{display:"flex",flexDirection:"row",marginTop:"1rem"},children:[Object(y.jsxs)("div",{style:{display:"flex",flexDirection:"column",marginRight:"1rem"},children:[Object(y.jsx)(I.a,{onClick:function(){return k("room")},style:{margin:"1px"},children:"New Room"}),Object(y.jsx)(I.a,{onClick:function(){return k("hall")},style:{margin:"1px"},children:"New Hall"}),Object(y.jsxs)("div",{children:[Object(y.jsx)(ee.a,{id:"cb-vertical",labelText:"Vertical",onChange:function(){return w("vertical")},checked:"vertical"===v}),Object(y.jsx)(ee.a,{id:"cb-horizontal",labelText:"Horizontal",onChange:function(){return w("horizontal")},checked:"horizontal"===v})]}),Object(y.jsx)(I.a,{onClick:function(){return k("sticker")},style:{margin:"1px"},children:"New Sticker"}),Object(y.jsxs)("div",{children:[Object(y.jsx)(ee.a,{id:"cb-blue",labelText:"Blue",onClick:function(){return O("blue")},checked:"blue"===f}),Object(y.jsx)(ee.a,{id:"cb-red",labelText:"Red",onClick:function(){return O("red")},checked:"red"===f})]}),Object(y.jsx)(I.a,{onClick:function(){return k("text")},style:{margin:"1px"},children:"New Text"}),Object(y.jsx)("div",{children:Object(y.jsx)($.a,{id:"text-input",labelText:"",placeholder:"Hello World",onChange:function(e){return b(e.target.value)},value:j})}),Object(y.jsx)(I.a,{onClick:function(){l===i[i.length-1].id&&d(null),a(i.slice(0,i.length-1))},style:{margin:"1px"},children:"Del Last"}),Object(y.jsx)(I.a,{onClick:function(){return S()},style:{margin:"1px"},children:"Export"}),e.current&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",{children:["Stage width: ",e.current.width()]}),Object(y.jsxs)("div",{children:["Stage height: ",e.current.height()]})]})]}),Object(y.jsx)("div",{style:{border:"1px solid"},children:Object(y.jsxs)(U.d,{width:1280,height:720,ref:e,children:[Object(y.jsxs)(U.b,{children:[Object(y.jsx)(U.a,{image:t,width:1280,height:720}),i.map((function(e,t){var n=l===e.id;return"Rect"===e.type?Object(y.jsx)(te,{shapeProps:e,onSelect:function(){l===e.id?d(null):d(e.id)},onChange:function(t){a(i.map((function(n){return n.id===e.id?t:n})))},isSelected:n},e.id):null}))]}),Object(y.jsx)(U.b,{children:i.map((function(e,t){var n=l===e.id;return"Text"===e.type?Object(y.jsx)(U.e,Object(F.a)(Object(F.a)({draggable:!0},e),{},{isSelected:n,onClick:function(){if(l===e.id){var t=["red","black","white"],n=(t.indexOf(e.fill)+1)%t.length;e.fill=t[n],d(null)}else d(e.id)}}),e.id):null}))})]})})]})]})},se=n(55);n(79);function oe(){var e=Object(r.useState)(!0),t=Object(C.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)([]),a=Object(C.a)(i,2),s=a[0],o=a[1];Object(r.useEffect)((function(){function e(){return(e=Object(T.a)(R.a.mark((function e(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("http://localhost:8000/api/statsHalls/?format=json").then((function(e){o(e.data),c(!1)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n&&function(){e.apply(this,arguments)}()}),[n]);var l=Object(r.useMemo)((function(){return[{Header:"PASILLO",accessor:"hall"},{Header:"SE HA DETENIDO",accessor:"stopped"}]}),[]),d=Object(se.useTable)({columns:l,data:s},se.useSortBy),u=d.getTableProps,h=d.getTableBodyProps,j=d.headerGroups,b=d.rows,x=d.prepareRow;return Object(y.jsx)("div",{className:"container",children:Object(y.jsxs)("table",Object(F.a)(Object(F.a)({},u()),{},{children:[Object(y.jsx)("thead",{children:j.map((function(e){return Object(y.jsx)("tr",Object(F.a)(Object(F.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(y.jsx)("th",Object(F.a)(Object(F.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{className:e.isSorted?e.isSortedDesc?"desc":"asc":"",children:e.render("Header")}))}))}))}))}),Object(y.jsx)("tbody",Object(F.a)(Object(F.a)({},h()),{},{children:b.map((function(e){return x(e),Object(y.jsx)("tr",Object(F.a)(Object(F.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(y.jsx)("td",Object(F.a)(Object(F.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]}))})}function le(){var e=Object(r.useState)(!0),t=Object(C.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)([]),a=Object(C.a)(i,2),s=a[0],o=a[1];Object(r.useEffect)((function(){function e(){return(e=Object(T.a)(R.a.mark((function e(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("http://localhost:8000/api/stats/?format=json").then((function(e){o(e.data),c(!1)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n&&function(){e.apply(this,arguments)}()}),[n]);var l=Object(r.useMemo)((function(){return[{Header:"ROBOT",accessor:"robot_id"},{Header:"DESTINO",accessor:"destiny"},{Header:"MINUTOS",accessor:"minutes"},{Header:"SEGUNDOS",accessor:"seconds"},{Header:"MILISEGUNDOS",accessor:"miliseconds"}]}),[]),d=Object(se.useTable)({columns:l,data:s},se.useSortBy),u=d.getTableProps,h=d.getTableBodyProps,j=d.headerGroups,b=d.rows,x=d.prepareRow;return Object(y.jsx)("div",{className:"container",children:Object(y.jsxs)("table",Object(F.a)(Object(F.a)({},u()),{},{children:[Object(y.jsx)("thead",{children:j.map((function(e){return Object(y.jsx)("tr",Object(F.a)(Object(F.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(y.jsx)("th",Object(F.a)(Object(F.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{className:e.isSorted?e.isSortedDesc?"desc":"asc":"",children:e.render("Header")}))}))}))}))}),Object(y.jsx)("tbody",Object(F.a)(Object(F.a)({},h()),{},{children:b.map((function(e){return x(e),Object(y.jsx)("tr",Object(F.a)(Object(F.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(y.jsx)("td",Object(F.a)(Object(F.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]}))})}function de(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("div",{}),Object(y.jsx)("div",{className:"text",children:"Estad\xedsticas de las rutas"}),Object(y.jsx)(le,{}),Object(y.jsx)("div",{className:"text",children:"Pasillos en los que se ha parado debido a obstaculos"}),Object(y.jsx)(oe,{})]})}var ue=function(){return Object(y.jsxs)(y.Fragment,{children:[!window.location.href.includes("room")&&Object(y.jsx)(v,{}),Object(y.jsxs)(S.a,{children:[Object(y.jsxs)("div",{className:"room-page__header",children:[Object(y.jsx)("h1",{children:"GuiaMe: Automated Guiding Robot"}),Object(y.jsx)("p",{children:"Un gu\xeda de confianza para gente de todo tipo"})]}),Object(y.jsxs)(w.c,{children:[Object(y.jsx)(w.a,{exact:!0,path:"/",component:Q}),Object(y.jsx)(w.a,{exact:!0,path:"/mapdev",component:ae}),Object(y.jsx)(w.a,{exact:!0,path:"/room",component:W}),Object(y.jsx)(w.a,{exact:!0,path:"/stats",component:de})]})]})]})},he=(n(133),n(68)),je=n.n(he),be=n(96),xe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,162)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),i(e),a(e)}))},pe=n(56),fe=(n(135),n(62)),Oe=function(e){return function(t,n,r){return e((function(e,n){var r,c=performance.now(),i=t(e,n),a=performance.now(),s=(r=a-c,Math.round(100*r)/100);return console.log("Reducer process time:",s),i}),n,r)}},me=function(e){return function(t){return function(n){console.group(n.type),console.info("Dispatching",n);var r=t(n);return console.log("Next state",e.getState()),console.groupEnd(),r}}},ge=n(82);function ye(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}var ve=Object(ge.a)("counter/fetchCount",function(){var e=Object(T.a)(R.a.mark((function e(t){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ye(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),we=Object(ge.b)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(ve.pending,(function(e){e.status="loading"})).addCase(ve.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),Se=we.actions,ke=(Se.increment,Se.decrement,Se.incrementByAmount,we.reducer),Re=Object(pe.combineReducers)({counter:ke});var Te=function(e){var t=[me,fe.a],n=[pe.applyMiddleware.apply(void 0,t),Oe],r=null;return r=pe.compose.apply(void 0,n),Object(pe.createStore)(Re,e,r)}();je.a.render(Object(y.jsx)(be.a,{store:Te,children:Object(y.jsx)(g.a,{children:Object(y.jsx)(ue,{})})}),document.getElementById("root")),xe()},75:function(e){e.exports=JSON.parse('{"stageWidth":1280,"stageHeight":720,"layers":[{"layer":"layer0","elements":[{"type":"Rect","attrs":{"id":"room0","x":243,"y":13,"width":100,"height":100,"fill":"purple"}},{"type":"Rect","attrs":{"id":"hall8","x":163.00000000000009,"y":117.99999999999989,"width":263.99999999999994,"height":29.99999999999997,"fill":"black"}},{"type":"Rect","attrs":{"id":"room1","x":243,"y":151,"width":100,"height":100,"fill":"purple"}},{"type":"Rect","attrs":{"id":"sticker0","x":277,"y":118,"width":30,"height":30,"fill":"blue"}},{"type":"Rect","attrs":{"id":"sticker1","x":133,"y":118,"width":30,"height":30,"fill":"red"}},{"type":"Rect","attrs":{"id":"sticker2","x":427,"y":118,"width":30,"height":30,"fill":"red"}},{"type":"Rect","attrs":{"id":"hall1","x":457.0000000000001,"y":118.00000000000003,"width":263.99999999999994,"height":30.00000000000002,"fill":"black"}},{"type":"Rect","attrs":{"id":"sticker3","x":721,"y":118,"width":30,"height":30,"fill":"red"}},{"type":"Rect","attrs":{"id":"hall2","x":133.00000000000003,"y":147.00000000000003,"width":30.000000000000014,"height":315.99999999999994,"fill":"black"}},{"type":"Rect","attrs":{"id":"sticker4","x":133,"y":463,"width":30,"height":30,"fill":"red"}},{"type":"Rect","attrs":{"id":"hall3","x":427.00000000000114,"y":147.9999999999999,"width":30.00000000000002,"height":314.00000000000006,"fill":"black"}},{"type":"Rect","attrs":{"id":"hall4","x":163.0000000000001,"y":462.0000000000004,"width":263.9999999999999,"height":30.000000000000032,"fill":"black"}},{"type":"Rect","attrs":{"id":"sticker5","x":427,"y":462,"width":30,"height":30,"fill":"red"}},{"type":"Rect","attrs":{"id":"room2","x":315,"y":326,"width":100,"height":100,"fill":"purple"}},{"type":"Rect","attrs":{"id":"room3","x":467,"y":326,"width":100,"height":100,"fill":"purple"}},{"type":"Rect","attrs":{"id":"room4","x":467,"y":163,"width":100,"height":100,"fill":"purple"}},{"type":"Rect","attrs":{"id":"sticker6","x":427,"y":356,"width":30,"height":30,"fill":"blue"}},{"type":"Rect","attrs":{"id":"sticker7","x":427,"y":191,"width":30,"height":30,"fill":"blue"}},{"type":"Rect","attrs":{"id":"hall5","x":721.0000000000009,"y":147,"width":30.000000000000075,"height":314.99999999999994,"fill":"black"}},{"type":"Rect","attrs":{"id":"hall6","x":457.0000000000001,"y":461.00000000000034,"width":263.9999999999999,"height":30.00000000000003,"fill":"black"}},{"type":"Rect","attrs":{"id":"sticker8","x":721,"y":461,"width":30,"height":30,"fill":"red"}},{"type":"Rect","attrs":{"id":"room5","x":613,"y":167,"width":100,"height":100,"fill":"purple"}},{"type":"Rect","attrs":{"id":"room6","x":759,"y":166,"width":100,"height":100,"fill":"purple"}},{"type":"Rect","attrs":{"id":"sticker9","x":721,"y":201,"width":30,"height":30,"fill":"blue"}},{"type":"Rect","attrs":{"id":"room7","x":616,"y":324,"width":100,"height":100,"fill":"purple"}},{"type":"Rect","attrs":{"id":"room8","x":758,"y":327,"width":100,"height":100,"fill":"purple"}},{"type":"Rect","attrs":{"id":"hall7","x":427,"y":492,"width":30,"height":100,"fill":"black"}},{"type":"Rect","attrs":{"id":"BASE","x":392,"y":591,"width":100,"height":100,"fill":"cyan"}}]},{"layer":"layer1","elements":[{"type":"Text","attrs":{"id":"text0","x":265,"y":37,"text":"Room 1","fontSize":16,"fill":"white"}},{"type":"Text","attrs":{"id":"text1","x":263,"y":172,"text":"Room 2","fontSize":16,"fill":"white"}},{"type":"Text","attrs":{"id":"text2","x":333,"y":338,"text":"Room 3","fontSize":16,"fill":"white"}},{"type":"Text","attrs":{"id":"text3","x":487,"y":340,"text":"Room 4","fontSize":16,"fill":"white"}},{"type":"Text","attrs":{"id":"text4","x":490,"y":180,"text":"Room 5","fontSize":16,"fill":"white"}},{"type":"Text","attrs":{"id":"text5","x":635,"y":185,"text":"Room 6","fontSize":16,"fill":"white"}},{"type":"Text","attrs":{"id":"text6","x":780,"y":185,"text":"Room 7","fontSize":16,"fill":"white"}},{"type":"Text","attrs":{"id":"text7","x":637,"y":339,"text":"Room 8","fontSize":16,"fill":"white"}},{"type":"Text","attrs":{"id":"text8","x":775,"y":340,"text":"Room 9","fontSize":16,"fill":"white"}},{"type":"Text","attrs":{"id":"text9","x":420,"y":630,"text":"HALL","fontSize":16,"fill":"black"}}]}]}')},79:function(e,t,n){}},[[136,1,2]]]);
//# sourceMappingURL=main.f6e6f138.chunk.js.map