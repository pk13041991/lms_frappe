import{d as m,r as H,a9 as S,s as D,j as _,ay as $,k as w,x as s,y as c,B as o,N as r,A as e,G as f,H as l,F as k,J as B,K as F,C as p,at as z,a8 as R,I as U,aQ as E,aZ as G,ab as I}from"./frappe-ui-C1kNCtW7.js";import{_ as J}from"./UserAvatar-DAzeZQK4.js";import{u as K,X as P}from"./index-z00NSwZC.js";const Q={class:"sticky top-0 z-10 flex flex-col md:flex-row md:items-center justify-between border-b bg-white px-3 py-2.5 sm:px-5"},X={class:"flex items-center space-x-2"},Z={class:"w-3/4 mx-auto px-5 pt-6 divide-y"},q={class:"flex items-center py-2 justify-between"},O={class:"flex items-center"},W=["innerHTML"],Y={class:"flex items-center space-x-2"},ee={key:1,class:"text-gray-600"},ne={__name:"Notifications",setup(ae){var v,x;const d=m("$user"),V=m("$socket"),j=m("$allUsers"),i=H("Unread"),L=S();D(()=>{d.data||L.push({name:"Courses"}),V.on("publish_lms_notifications",a=>{n.reload()})});const b=_(()=>i.value==="Unread"?n.data:u.data),n=$({doctype:"Notification Log",fields:["subject","from_user","link","read","name"],filters:{for_user:(v=d.data)==null?void 0:v.name,read:0},orderBy:"creation desc",auto:!0,cache:"Unread Notifications"}),u=$({doctype:"Notification Log",fields:["subject","from_user","link","read","name"],filters:{for_user:(x=d.data)==null?void 0:x.name,read:1},orderBy:"creation desc",auto:!0,cache:"Read Notifications"}),y=w({url:"lms.lms.api.mark_as_read",makeParams(a){return{name:a.name}},onSuccess(a){n.reload(),u.reload()}}),h=w({url:"lms.lms.api.mark_all_as_read",onSuccess(a){n.reload(),u.reload()}}),M=_(()=>[{label:"Notifications",route:{name:"Notifications"}}]),T=_(()=>({title:"Notifications",description:"All your notifications in one place."}));return K(T),(a,N)=>{var g,C;return s(),c(B,null,[o("header",Q,[r(e(z),{items:M.value},null,8,["items"]),o("div",X,[i.value==="Unread"&&((g=e(n).data)==null?void 0:g.length)>0?(s(),f(e(U),{key:0,onClick:e(h).submit,loading:e(h).loading},{default:l(()=>[R(p(a.__("Mark all as read")),1)]),_:1},8,["onClick","loading"])):k("",!0),r(e(E),{class:"inline-block",buttons:[{label:"Unread",active:!0},{label:"Read"}],modelValue:i.value,"onUpdate:modelValue":N[0]||(N[0]=t=>i.value=t)},null,8,["modelValue"])])]),o("div",Z,[(C=b.value)!=null&&C.length?(s(!0),c(B,{key:0},F(b.value,t=>(s(),c("div",q,[o("div",O,[r(J,{user:e(j).data[t.from_user],class:"mr-2"},null,8,["user"]),o("div",{class:"notification",innerHTML:t.subject},null,8,W)]),o("div",Y,[t.link?(s(),f(e(G),{key:0,to:t.link,onClick:A=>e(y).submit({name:t.name}),class:"text-gray-600 font-medium text-sm hover:text-gray-700"},{default:l(()=>[R(p(a.__("View")),1)]),_:2},1032,["to","onClick"])):k("",!0),r(e(I),{text:a.__("Mark as read")},{default:l(()=>[t.read?k("",!0):(s(),f(e(U),{key:0,variant:"ghost",onClick:A=>e(y).submit({name:t.name})},{icon:l(()=>[r(e(P),{class:"h-4 w-4 text-gray-700 stroke-1.5"})]),_:2},1032,["onClick"]))]),_:2},1032,["text"])])]))),256)):(s(),c("div",ee,p(a.__("Nothing to see here.")),1))])],64)}}};export{ne as default};
//# sourceMappingURL=Notifications-BoEV4B8s.js.map
