import{v as d,I as g,O as m,D as L,ak as i,x as f,y as p,Y as D,Z as c,$ as h,N as l,H as a,aR as _,a8 as v,J as x}from"./frappe-ui-C1kNCtW7.js";const w={name:"InsertLink",props:["editor"],components:{Button:g,FormControl:m,Dialog:L},data(){return{setLinkDialog:{url:"",show:!1}}},methods:{openDialog(){let t=this.editor.getAttributes("link").href;t&&(this.setLinkDialog.url=t),this.setLinkDialog.show=!0},setLink(t){t===""?this.editor.chain().focus().extendMarkRange("link").unsetLink().run():this.editor.chain().focus().extendMarkRange("link").setLink({href:t}).run(),this.setLinkDialog.show=!1,this.setLinkDialog.url=""},reset(){this.setLinkDialog=this.$options.data().setLinkDialog}}};function V(t,e,C,R,n,s){const r=i("FormControl"),u=i("Button"),k=i("Dialog");return f(),p(x,null,[D(t.$slots,"default",c(h({onClick:s.openDialog}))),l(k,{options:{title:"Set Link"},modelValue:n.setLinkDialog.show,"onUpdate:modelValue":e[3]||(e[3]=o=>n.setLinkDialog.show=o),onAfterLeave:s.reset},{"body-content":a(()=>[l(r,{type:"text",label:"URL",modelValue:n.setLinkDialog.url,"onUpdate:modelValue":e[0]||(e[0]=o=>n.setLinkDialog.url=o),onKeydown:e[1]||(e[1]=_(o=>s.setLink(o.target.value),["enter"]))},null,8,["modelValue"])]),actions:a(()=>[l(u,{variant:"solid",onClick:e[2]||(e[2]=o=>s.setLink(n.setLinkDialog.url))},{default:a(()=>[v(" Save ")]),_:1})]),_:1},8,["modelValue","onAfterLeave"])],64)}const B=d(w,[["render",V]]);export{B as default};
//# sourceMappingURL=InsertLink-BCfmIbfB.js.map