var he=Object.defineProperty;var ee=Object.getOwnPropertySymbols;var ve=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable;var te=(d,c,u)=>c in d?he(d,c,{enumerable:!0,configurable:!0,writable:!0,value:u}):d[c]=u,H=(d,c)=>{for(var u in c||(c={}))ve.call(c,u)&&te(d,u,c[u]);if(ee)for(var u of ee(c))fe.call(c,u)&&te(d,u,c[u]);return d};var O=(d,c,u)=>new Promise((m,r)=>{var g=i=>{try{b(u.next(i))}catch(h){r(h)}},s=i=>{try{b(u.throw(i))}catch(h){r(h)}},b=i=>i.done?m(i.value):Promise.resolve(i.value).then(g,s);b((u=u.apply(d,c)).next())});import{ag as N,d as M,ad as A,a as G,k as S,w as se,x as o,G as x,H as y,B as a,C as p,N as n,A as e,az as ge,O as U,y as v,J as w,K as B,a0 as R,F as C,D as P,r as T,a8 as L,I as D,b as q,Q as I,aA as oe,aB as ne,aa as J,aC as re,aD as ie,aE as ue,aF as de,ab as ae,ay as ce,aG as me,aH as le,aI as ye,j as z,ak as ke,at as $e,P as xe,au as Ve}from"./frappe-ui-C1kNCtW7.js";import{_ as Ce}from"./CourseInstructors-DXvXgK2q.js";import{_ as Se}from"./UserAvatar-DAzeZQK4.js";import{f as j,c as Y,h as _e,d as K,i as we,j as F,k as Me,P as Q,T as pe,l as Le,M as De,V as Ae,t as Be,u as Te,L as Ue,m as Ee,n as je,o as Ne,B as Pe,p as ze,q as Re,r as Ye,G as qe}from"./index-z00NSwZC.js";import{_ as He}from"./Discussions-oti8Pf_v.js";import{_ as Oe}from"./DateRange-CjW-ebz9.js";const Fe={class:"flex flex-col gap-4"},Ge={class:"mb-1.5 text-sm text-gray-600"},Ie={class:"mb-1.5 text-sm text-gray-600"},Je={key:0},Ke={class:"mb-1.5 text-sm text-gray-600"},Qe={class:"grid grid-cols-2 gap-2"},We=["onClick"],Xe={key:1,class:"text-sm italic text-red-600"},Ze={__name:"EvaluationModal",props:N({courses:{type:Array,default:[]},batch:{type:String,default:null},endDate:{type:String,default:null}},{modelValue:{},modelModifiers:{},reloadEvals:{},reloadEvalsModifiers:{}}),emits:["update:modelValue","update:reloadEvals"],setup(d){const c=M("$user"),u=M("$dayjs"),m=A(d,"modelValue"),r=A(d,"reloadEvals"),g=d;let s=G({course:"",date:"",start_time:"",end_time:"",day:"",batch:g.batch,member:c.data.name});const b=S({url:"frappe.client.insert",makeParams(t){return{doc:H({doctype:"LMS Certificate Request",batch_name:t.batch},t)}}});function i(t){b.submit(s,{validate(){if(!s.course)return"Please select a course.";if(!s.date)return"Please select a date.";if(!s.start_time)return"Please select a slot.";if(u(s.date).isBefore(u(),"day"))return"Please select a future date.";if(u(s.date).isAfter(u(g.endDate),"day"))return`Please select a date before the end date ${u(g.endDate).format("DD MMMM YYYY")}.`},onSuccess(){r.value.reload(),t()},onError(l){var E;let f=((E=l.messages)==null?void 0:E[0])||l,V=f.includes("unavailable");Y({title:V?"Evaluator is Unavailable":"Error",text:f,icon:V?"alert-circle":"x",iconClasses:"bg-yellow-600 text-white rounded-md p-px",position:"top-center",timeout:10})}})}const h=()=>{let t=[];for(const l of g.courses)t.push({label:l.title,value:l.course});return t},_=S({url:"lms.lms.doctype.course_evaluator.course_evaluator.get_schedule",makeParams(t){return{course:t.course,date:t.date,batch:g.batch}}});se(()=>s.date,t=>{s.start_time="",t&&s.course&&_.submit(s)}),se(()=>s.course,t=>{s.date="",s.start_time="",_.reset()});const k=t=>{s.start_time=t.start_time,s.end_time=t.end_time,s.day=t.day};return(t,l)=>(o(),x(e(P),{modelValue:m.value,"onUpdate:modelValue":l[2]||(l[2]=f=>m.value=f),options:{title:t.__("Schedule Evaluation"),size:"xl",actions:[{label:t.__("Submit"),variant:"solid",onClick:f=>i(f)}]}},{"body-content":y(()=>{var f;return[a("div",Fe,[a("div",null,[a("div",Ge,p(t.__("Course")),1),n(e(ge),{modelValue:e(s).course,"onUpdate:modelValue":l[0]||(l[0]=V=>e(s).course=V),options:h()},null,8,["modelValue","options"])]),a("div",null,[a("div",Ie,p(t.__("Date")),1),n(e(U),{type:"date",modelValue:e(s).date,"onUpdate:modelValue":l[1]||(l[1]=V=>e(s).date=V)},null,8,["modelValue"])]),(f=e(_).data)!=null&&f.length?(o(),v("div",Je,[a("div",Ke,p(t.__("Select a slot")),1),a("div",Qe,[(o(!0),v(w,null,B(e(_).data,V=>(o(),v("div",null,[a("div",{class:R(["text-base text-center border rounded-md bg-gray-200 p-2 cursor-pointer",{"border-gray-900":e(s).start_time==V.start_time}]),onClick:E=>k(V)},p(e(j)(V.start_time))+" - "+p(e(j)(V.end_time)),11,We)]))),256))])])):e(s).course&&e(s).date?(o(),v("div",Xe,p(t.__("No slots available for this date.")),1)):C("",!0)])]}),_:1},8,["modelValue","options"]))}},et={class:"mb-10"},tt={class:"text-lg font-semibold mb-4"},st={key:1},at={class:"grid grid-cols-2 gap-4"},lt={class:"border rounded-md p-3"},ot={class:"font-semibold mb-3"},nt={class:"flex items-center mb-2"},rt={class:"ml-2"},it={class:"flex items-center mb-2"},ut={class:"ml-2"},dt={class:"flex items-center"},ct={class:"ml-2 font-medium"},mt={key:2,class:"text-sm italic text-gray-600"},_t={__name:"UpcomingEvaluations",props:{batch:{type:String,default:null},courses:{type:Array,default:[]},isStudent:{type:Boolean,default:!1},endDate:{type:String,default:null}},setup(d){const c=M("$dayjs"),u=M("$user"),m=T(!1),r=d,g=S({url:"lms.lms.utils.get_upcoming_evals",cache:["upcoming_evals",u.data.name],params:{student:u.data.name,courses:r.courses.map(b=>b.course)},auto:!0});function s(){m.value=!0}return(b,i)=>{var h;return o(),v(w,null,[a("div",et,[d.isStudent?(o(),x(e(D),{key:0,onClick:s,class:"float-right"},{default:y(()=>[L(p(b.__("Schedule Evaluation")),1)]),_:1})):C("",!0),a("div",tt,p(b.__("Upcoming Evaluations")),1),(h=e(g).data)!=null&&h.length?(o(),v("div",st,[a("div",at,[(o(!0),v(w,null,B(e(g).data,_=>(o(),v("div",null,[a("div",lt,[a("div",ot,p(_.course_title),1),a("div",nt,[n(e(_e),{class:"w-4 h-4 stroke-1.5"}),a("span",rt,p(e(c)(_.date).format("DD MMMM YYYY")),1)]),a("div",it,[n(e(K),{class:"w-4 h-4 stroke-1.5"}),a("span",ut,p(e(j)(_.start_time)),1)]),a("div",dt,[n(e(we),{class:"w-4 h-4 stroke-1.5"}),a("span",ct,p(_.evaluator_name),1)])])]))),256))])])):(o(),v("div",mt,p(b.__("No upcoming evaluations.")),1))]),n(Ze,{batch:d.batch,endDate:d.endDate,courses:d.courses,modelValue:m.value,"onUpdate:modelValue":i[0]||(i[0]=_=>m.value=_),reloadEvals:e(g),"onUpdate:reloadEvals":i[1]||(i[1]=_=>q(g)?g.value=_:null)},null,8,["batch","endDate","courses","modelValue","reloadEvals"])],64)}}},pt={class:"text-lg font-semibold mb-4"},bt={key:0},ht={key:1,class:"text-sm italic text-gray-600"},be={__name:"Assessments",props:{batch:{type:String,required:!0},rows:{type:Array},columns:{type:Array},options:{type:Object,default:()=>({selectable:!0,totalCount:0,rowCount:0})}},setup(d){const c=M("$user"),m=S({url:"lms.lms.utils.get_assessments",params:{batch:d.batch},auto:!0}),r=()=>{var s;let g=[{label:"Assessment",key:"title"},{label:"Type",key:"assessment_type"}];return(s=c.data)!=null&&s.is_moderator||g.push({label:"Status/Score",key:"status",align:"center"}),g};return(g,s)=>{var b;return o(),v("div",null,[a("div",pt,p(g.__("Assessments")),1),(b=e(m).data)!=null&&b.length?(o(),v("div",bt,[n(e(I),{columns:r(),rows:e(m).data,"row-key":"name",options:{selectable:!1,showTooltip:!1,getRowRoute:i=>i.submission?{name:"AssignmentSubmission",params:{assignmentName:i.assessment_name,submissionName:i.submission.name}}:{name:"AssignmentSubmission",params:{assignmentName:i.assessment_name,submissionName:"new"}}}},null,8,["columns","rows","options"])])):(o(),v("div",ht,p(g.__("No Assessments")),1))])}}},vt={__name:"BatchDashboard",props:{batch:{type:Object,default:null},isStudent:{type:Boolean,default:!1}},setup(d){return(c,u)=>(o(),v("div",null,[n(_t,{batch:d.batch.data.name,endDate:d.batch.data.evaluation_end_date,courses:d.batch.data.courses,isStudent:d.isStudent},null,8,["batch","endDate","courses","isStudent"]),n(be,{batch:d.batch.data.name},null,8,["batch"])]))}},ft={__name:"BatchCourseModal",props:N({batch:{type:String,default:null}},{modelValue:{},modelModifiers:{},courses:{},coursesModifiers:{}}),emits:["update:modelValue","update:courses"],setup(d){const c=A(d,"modelValue"),u=T(null),m=T(null),r=A(d,"courses"),g=d,s=S({url:"frappe.client.insert",makeParams(i){return{doc:{doctype:"Batch Course",parent:g.batch,parenttype:"LMS Batch",parentfield:"courses",course:u.value,evaluator:m.value}}}}),b=i=>{s.submit({},{onSuccess(){r.value.reload(),i(),u.value=null,m.value=null},onError(h){Me("Error",h.message[0]||h,"x")}})};return(i,h)=>(o(),x(e(P),{modelValue:c.value,"onUpdate:modelValue":h[2]||(h[2]=_=>c.value=_),options:{title:i.__("Add a course"),size:"sm",actions:[{label:i.__("Submit"),variant:"solid",onClick:_=>b(_)}]}},{"body-content":y(()=>[n(F,{doctype:"LMS Course",modelValue:u.value,"onUpdate:modelValue":h[0]||(h[0]=_=>u.value=_),label:i.__("Course")},null,8,["modelValue","label"]),n(F,{doctype:"Course Evaluator",modelValue:m.value,"onUpdate:modelValue":h[1]||(h[1]=_=>m.value=_),label:i.__("Evaluator"),class:"mt-4"},null,8,["modelValue","label"])]),_:1},8,["modelValue","options"]))}},gt={class:"flex items-center justify-between mb-4"},yt={class:"text-xl font-semibold"},kt={key:0},$t={class:"flex gap-2"},xt={__name:"BatchCourses",props:{batch:{type:String,required:!0}},setup(d){const c=T(!1),u=M("$user"),m=d,r=S({url:"lms.lms.utils.get_batch_courses",params:{batch:m.batch},cache:["batchCourses",m.batchName],auto:!0}),g=()=>{c.value=!0},s=()=>[{label:"Title",key:"title",width:2},{label:"Lessons",key:"lesson_count",align:"right"},{label:"Enrollments",align:"right",key:"enrollment_count"}],b=S({url:"frappe.client.delete",makeParams(h){return{doctype:"Batch Course",name:h.course}}}),i=(h,_)=>{h.forEach(k=>O(this,null,function*(){b.submit({course:k})})),setTimeout(()=>{r.reload(),_()},1e3)};return(h,_)=>{var k,t;return o(),v("div",null,[a("div",gt,[a("div",yt,p(h.__("Courses")),1),(k=e(u).data)!=null&&k.is_moderator?(o(),x(e(D),{key:0,variant:"solid",onClick:_[0]||(_[0]=l=>g())},{prefix:y(()=>[n(e(Q),{class:"h-4 w-4"})]),default:y(()=>[L(" "+p(h.__("Add Course")),1)]),_:1})):C("",!0)]),(t=e(r).data)!=null&&t.length?(o(),v("div",kt,[n(e(I),{columns:s(),rows:e(r).data,"row-key":"batch_course",options:{showTooltip:!1,getRowRoute:l=>({name:"CourseDetail",params:{courseName:l.name}})}},{default:y(()=>[n(e(oe),{class:"mb-2 grid items-center space-x-4 rounded bg-gray-100 p-2"},{default:y(()=>[(o(!0),v(w,null,B(s(),l=>(o(),x(e(ne),{item:l},{prefix:y(({item:f})=>[f.icon?(o(),x(J(f.icon),{key:0,class:"h-4 w-4 stroke-1.5 ml-4"})):C("",!0)]),_:2},1032,["item"]))),256))]),_:1}),n(e(re),null,{default:y(()=>[(o(!0),v(w,null,B(e(r).data,l=>(o(),x(e(ie),{row:l},{default:y(({column:f,item:V})=>[n(e(ue),{item:l[f.key],align:f.align},{default:y(()=>[a("div",null,p(l[f.key]),1)]),_:2},1032,["item","align"])]),_:2},1032,["row"]))),256))]),_:1}),n(e(de),null,{actions:y(({unselectAll:l,selections:f})=>[a("div",$t,[n(e(D),{variant:"ghost",onClick:V=>i(f,l)},{default:y(()=>[n(e(pe),{class:"h-4 w-4 stroke-1.5"})]),_:2},1032,["onClick"])])]),_:1})]),_:1},8,["columns","rows","options"])])):C("",!0),n(ft,{modelValue:c.value,"onUpdate:modelValue":_[1]||(_[1]=l=>c.value=l),batch:d.batch,courses:e(r),"onUpdate:courses":_[2]||(_[2]=l=>q(r)?r.value=l:null)},null,8,["modelValue","batch","courses"])])}}},Vt={class:"flex flex-col gap-4"},Ct={class:"grid grid-cols-2 gap-4"},St={__name:"LiveClassModal",props:N({batch:{type:String,default:null}},{reloadLiveClasses:{},reloadLiveClassesModifiers:{},modelValue:{},modelModifiers:{}}),emits:["update:reloadLiveClasses","update:modelValue"],setup(d){const c=A(d,"reloadLiveClasses"),u=A(d,"modelValue"),m=M("$user"),r=M("$dayjs");let s=G({title:"",description:"",date:"",time:"",duration:"",timezone:"",auto_recording:"No Recording",batch:d.batch,host:m.data.name});const b=()=>Le().map(t=>({label:t,value:t})),i=()=>[{label:"No Recording",value:"No Recording"},{label:"Local",value:"Local"},{label:"Cloud",value:"Cloud"}],h=S({url:"lms.lms.doctype.lms_batch.lms_batch.create_live_class",makeParams(t){return H({doctype:"LMS Live Class",batch_name:t.batch},t)}}),_=t=>h.submit(s,{validate(){if(!s.title)return"Please enter a title.";if(!s.date)return"Please select a date.";if(r(s.date).isSameOrBefore(r(),"day"))return"Please select a future date.";if(!s.time)return"Please select a time.";if(!k())return"Please enter a valid time in the format HH:mm.";if(!s.duration)return"Please select a duration.";if(!s.timezone)return"Please select a timezone."},onSuccess(){c.value.reload(),t()},onError(l){var f;Y({title:"Error",text:((f=l.messages)==null?void 0:f[0])||l,icon:"x",iconClasses:"bg-red-600 text-white rounded-md p-px",position:"top-center",timeout:10})}}),k=()=>{let t=s.time.split(":");return!(t.length!=2||t[0]<0||t[0]>23||t[1]<0||t[1]>59)};return(t,l)=>(o(),x(e(P),{modelValue:u.value,"onUpdate:modelValue":l[7]||(l[7]=f=>u.value=f),options:{title:t.__("Create a Live Class"),size:"xl",actions:[{label:"Submit",variant:"solid",onClick:f=>_(f)}]}},{"body-content":y(()=>[a("div",Vt,[a("div",Ct,[a("div",null,[n(e(U),{type:"text",modelValue:e(s).title,"onUpdate:modelValue":l[0]||(l[0]=f=>e(s).title=f),label:t.__("Title"),class:"mb-4"},null,8,["modelValue","label"]),n(e(ae),{text:t.__("Time must be in 24 hour format (HH:mm). Example 11:30 or 22:00")},{default:y(()=>[n(e(U),{modelValue:e(s).time,"onUpdate:modelValue":l[1]||(l[1]=f=>e(s).time=f),type:"time",label:t.__("Time"),class:"mb-4"},null,8,["modelValue","label"])]),_:1},8,["text"]),n(e(U),{modelValue:e(s).timezone,"onUpdate:modelValue":l[2]||(l[2]=f=>e(s).timezone=f),type:"select",options:b(),label:t.__("Timezone")},null,8,["modelValue","options","label"])]),a("div",null,[n(e(U),{modelValue:e(s).date,"onUpdate:modelValue":l[3]||(l[3]=f=>e(s).date=f),type:"date",class:"mb-4",label:t.__("Date")},null,8,["modelValue","label"]),n(e(ae),{text:t.__("Duration of the live class in minutes")},{default:y(()=>[n(e(U),{type:"number",modelValue:e(s).duration,"onUpdate:modelValue":l[4]||(l[4]=f=>e(s).duration=f),label:t.__("Duration"),class:"mb-4"},null,8,["modelValue","label"])]),_:1},8,["text"]),n(e(U),{modelValue:e(s).auto_recording,"onUpdate:modelValue":l[5]||(l[5]=f=>e(s).auto_recording=f),type:"select",options:i(),label:t.__("Auto Recording")},null,8,["modelValue","options","label"])])]),n(e(U),{modelValue:e(s).description,"onUpdate:modelValue":l[6]||(l[6]=f=>e(s).description=f),type:"textarea",label:t.__("Description")},null,8,["modelValue","label"])])]),_:1},8,["modelValue","options"]))}},wt={class:"text-lg font-semibold mb-5"},Mt={key:1,class:"grid grid-cols-2 gap-5"},Lt={class:"flex flex-col border rounded-md h-full p-3"},Dt={class:"font-semibold text-lg mb-4"},At={class:"mb-4"},Bt={class:"flex items-center mb-2"},Tt={class:"ml-2"},Ut={class:"flex items-center mb-5"},Et={class:"ml-2"},jt={class:"flex items-center space-x-2 mt-auto"},Nt=["href"],Pt=["href"],zt={key:2,class:"text-sm italic text-gray-600"},Rt={__name:"LiveClass",props:{batch:{type:String,required:!0}},setup(d){const c=M("$user"),u=T(!1),m=M("$dayjs"),r=d,g=ce({doctype:"LMS Live Class",filters:{batch_name:r.batch,date:[">=",new Date]},fields:["title","description","time","date","start_url","join_url","owner"],orderBy:"date",auto:!0}),s=()=>{u.value=!0};return(b,i)=>{var h;return o(),v(w,null,[e(c).data.is_moderator?(o(),x(e(D),{key:0,variant:"solid",class:"float-right mb-5",onClick:s},{prefix:y(()=>[n(e(Q),{class:"h-4 w-4"})]),default:y(()=>[a("span",null,p(b.__("Add Live Class")),1)]),_:1})):C("",!0),a("div",wt,p(b.__("Live Class")),1),(h=e(g).data)!=null&&h.length?(o(),v("div",Mt,[(o(!0),v(w,null,B(e(g).data,_=>(o(),v("div",Lt,[a("div",Dt,p(_.title),1),a("div",At,p(_.description),1),a("div",Bt,[n(e(_e),{class:"w-4 h-4 stroke-1.5"}),a("span",Tt,p(e(m)(_.date).format("DD MMMM YYYY")),1)]),a("div",Ut,[n(e(K),{class:"w-4 h-4 stroke-1.5"}),a("span",Et,p(e(j)(_.time)),1)]),a("div",jt,[a("a",{href:_.start_url,target:"_blank",class:"w-1/2 cursor-pointer inline-flex items-center justify-center gap-2 transition-colors focus:outline-none text-gray-800 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 focus-visible:ring focus-visible:ring-gray-400 h-7 text-base px-2 rounded"},[n(e(De),{class:"h-4 w-4 stroke-1.5"}),L(" "+p(b.__("Start")),1)],8,Nt),a("a",{href:_.join_url,target:"_blank",class:"w-1/2 cursor-pointer inline-flex items-center justify-center gap-2 transition-colors focus:outline-none text-gray-800 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 focus-visible:ring focus-visible:ring-gray-400 h-7 text-base px-2 rounded"},[n(e(Ae),{class:"h-4 w-4 stroke-1.5"}),L(" "+p(b.__("Join")),1)],8,Pt)])]))),256))])):(o(),v("div",zt,p(b.__("No live classes scheduled")),1)),n(St,{batch:r.batch,modelValue:u.value,"onUpdate:modelValue":i[0]||(i[0]=_=>u.value=_),reloadLiveClasses:e(g),"onUpdate:reloadLiveClasses":i[1]||(i[1]=_=>q(g)?g.value=_:null)},null,8,["batch","modelValue","reloadLiveClasses"])],64)}}},Yt={class:"flex flex-col gap-4"},qt={__name:"StudentModal",props:N({batch:{type:String,default:null}},{reloadStudents:{},reloadStudentsModifiers:{},modelValue:{},modelModifiers:{}}),emits:["update:reloadStudents","update:modelValue"],setup(d){const c=A(d,"reloadStudents"),u=T(),m=A(d,"modelValue"),r=d,g=S({url:"frappe.client.insert",makeParams(b){return{doc:{doctype:"Batch Student",parent:r.batch,parenttype:"LMS Batch",parentfield:"students",student:u.value}}}}),s=b=>{g.submit({},{onSuccess(){c.value.reload(),b(),u.value=null}})};return(b,i)=>(o(),x(e(P),{modelValue:m.value,"onUpdate:modelValue":i[1]||(i[1]=h=>m.value=h),options:{title:b.__("Add a Student"),size:"sm",actions:[{label:"Submit",variant:"solid",onClick:h=>s(h)}]}},{"body-content":y(()=>[a("div",Yt,[n(F,{doctype:"User",modelValue:u.value,"onUpdate:modelValue":i[0]||(i[0]=h=>u.value=h),filters:{ignore_user_type:1}},null,8,["modelValue"])])]),_:1},8,["modelValue","options"]))}},Ht={class:"text-lg font-semibold mb-4"},Ot={key:0},Ft={key:0},Gt={class:"flex gap-2"},It={key:1,class:"text-sm italic text-gray-600"},Jt={__name:"BatchStudents",props:{batch:{type:String,default:null}},setup(d){const c=T(!1),u=d,m=S({url:"lms.lms.utils.get_batch_students",cache:["students",u.batch],params:{batch:u.batch},auto:!0}),r=()=>[{label:"Full Name",key:"full_name",width:2},{label:"Courses Done",key:"courses_completed",align:"center"},{label:"Assessments Done",key:"assessments_completed",align:"center"},{label:"Last Active",key:"last_active"}],g=()=>{c.value=!0},s=S({url:"frappe.client.delete",makeParams(i){return{doctype:"Batch Student",name:i.student}}}),b=(i,h)=>{i.forEach(_=>O(this,null,function*(){s.submit({student:_})})),setTimeout(()=>{m.reload(),h()},500)};return(i,h)=>{var _;return o(),v(w,null,[n(e(D),{class:"float-right mb-3",variant:"solid",onClick:h[0]||(h[0]=k=>g())},{prefix:y(()=>[n(e(Q),{class:"h-4 w-4"})]),default:y(()=>[L(" "+p(i.__("Add Student")),1)]),_:1}),a("div",Ht,p(i.__("Students")),1),(_=e(m).data)!=null&&_.length?(o(),v("div",Ot,[n(e(I),{columns:r(),rows:e(m).data,"row-key":"name",options:{showTooltip:!1}},{default:y(()=>[n(e(oe),{class:"mb-2 grid items-center space-x-4 rounded bg-gray-100 p-2"},{default:y(()=>[(o(!0),v(w,null,B(r(),k=>(o(),x(e(ne),{item:k},{prefix:y(({item:t})=>[t.icon?(o(),x(J(t.icon),{key:0,class:"h-4 w-4 stroke-1.5 ml-4"})):C("",!0)]),_:2},1032,["item"]))),256))]),_:1}),n(e(re),null,{default:y(()=>[(o(!0),v(w,null,B(e(m).data,k=>(o(),x(e(ie),{row:k},{default:y(({column:t,item:l})=>[n(e(ue),{item:k[t.key],align:t.align},{prefix:y(()=>[t.key=="full_name"?(o(),v("div",Ft,[n(e(me),{class:"flex items-center",image:k.user_image,label:l,size:"sm"},null,8,["image","label"])])):C("",!0)]),default:y(()=>[a("div",null,p(k[t.key]),1)]),_:2},1032,["item","align"])]),_:2},1032,["row"]))),256))]),_:1}),n(e(de),null,{actions:y(({unselectAll:k,selections:t})=>[a("div",Gt,[n(e(D),{variant:"ghost",onClick:l=>b(t,k)},{default:y(()=>[n(e(pe),{class:"h-4 w-4 stroke-1.5"})]),_:2},1032,["onClick"])])]),_:1})]),_:1},8,["columns","rows"])])):(o(),v("div",It,p(i.__("There are no students in this batch.")),1)),n(qt,{batch:u.batch,modelValue:c.value,"onUpdate:modelValue":h[1]||(h[1]=k=>c.value=k),reloadStudents:e(m),"onUpdate:reloadStudents":h[2]||(h[2]=k=>q(m)?m.value=k:null)},null,8,["batch","modelValue","reloadStudents"])],64)}}},Kt={key:0},Qt={class:"mb-8"},Wt={class:"flex items-center justify-between mb-2"},Xt={class:"flex items-center"},Zt={class:"ml-2"},es={class:"text-sm"},ts=["innerHTML"],ss={key:1,class:"text-sm italic text-gray-600"},as={__name:"Annoucements",props:{batch:{type:String,required:!0}},setup(d){const c=d,u=ce({doctype:"Communication",fields:["subject","content","recipients","cc","communication_date","sender","sender_full_name"],filters:{reference_doctype:"LMS Batch",reference_name:c.batch},orderBy:"communication_date desc",auto:!0,cache:["batch",c.batch]});return(m,r)=>{var g;return(g=e(u).data)!=null&&g.length?(o(),v("div",Kt,[(o(!0),v(w,null,B(e(u).data,s=>(o(),v("div",null,[a("div",Qt,[a("div",Wt,[a("div",Xt,[n(e(me),{label:s.sender_full_name,size:"lg"},null,8,["label"]),a("div",Zt,p(s.sender_full_name),1)]),a("div",es,p(e(Be)(s.communication_date)),1)]),a("div",{class:"prose prose-sm bg-gray-50 !min-w-full px-4 py-2 rounded-md",innerHTML:s.content},null,8,ts)])]))),256))])):(o(),v("div",ss,p(m.__("No announcements")),1))}}},ls={class:"flex flex-col gap-4"},os={class:""},ns={class:"mb-1.5 text-sm text-gray-600"},rs={class:""},is={class:"mb-1.5 text-sm text-gray-600"},us={class:"mb-4"},ds={class:"mb-1.5 text-sm text-gray-600"},cs={__name:"AnnouncementModal",props:N({batch:{type:String,required:!0},students:{type:Array,required:!0}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(d){const c=A(d,"modelValue"),u=d,m=G({subject:"",replyTo:"",announcement:""}),r=S({url:"frappe.core.doctype.communication.email.make",makeParams(s){return{recipients:u.students.join(", "),cc:m.replyTo,subject:m.subject,content:m.announcement,doctype:"LMS Batch",name:u.batch,send_email:1}}}),g=s=>{r.submit({},{validate(){if(!u.students.length)return"No students in this batch";if(!m.subject)return"Subject is required"},onSuccess(){s(),Y({title:"Success",text:"Announcement has been sent successfully",icon:"Check",iconClasses:"bg-green-600 text-white rounded-md p-px"})},onError(b){var i;Y({title:"Error",text:((i=b.messages)==null?void 0:i[0])||b,icon:"x",iconClasses:"bg-red-600 text-white rounded-md p-px",position:"top-center",timeout:10})}})};return(s,b)=>(o(),x(e(P),{modelValue:c.value,"onUpdate:modelValue":b[3]||(b[3]=i=>c.value=i),options:{title:s.__("Make an Announcement"),size:"xl",actions:[{label:"Submit",variant:"solid",onClick:i=>g(i)}]}},{"body-content":y(()=>[a("div",ls,[a("div",os,[a("div",ns,p(s.__("Subject")),1),n(e(le),{type:"text",modelValue:m.subject,"onUpdate:modelValue":b[0]||(b[0]=i=>m.subject=i)},null,8,["modelValue"])]),a("div",rs,[a("div",is,p(s.__("Reply To")),1),n(e(le),{type:"text",modelValue:m.replyTo,"onUpdate:modelValue":b[1]||(b[1]=i=>m.replyTo=i)},null,8,["modelValue"])]),a("div",us,[a("div",ds,p(s.__("Announcement")),1),n(e(ye),{bubbleMenu:!0,onChange:b[2]||(b[2]=i=>m.announcement=i),editorClass:"prose-sm py-2 px-2 min-h-[200px] border-gray-300 hover:border-gray-400 rounded-md bg-gray-200"})])])]),_:1},8,["modelValue","options"]))}},ms={key:0,class:""},_s={class:"sticky top-0 z-10 flex items-center justify-between border-b bg-white px-3 py-2.5 sm:px-5"},ps={key:0,class:"grid grid-cols-[70%,30%] h-screen"},bs={class:"border-r-2"},hs={class:"pt-5 px-5 pb-10"},vs={key:0},fs={key:1},gs={key:2},ys={key:3},ks={key:4},$s={key:5},xs={key:6},Vs={class:"p-5"},Cs={class:"text-2xl font-semibold mb-2"},Ss=["innerHTML"],ws={class:"flex avatar-group overlap mb-5"},Ms={class:"flex items-center mb-4"},Ls={key:0,class:"flex items-center mb-4"},Ds={key:1,class:""},As={class:"text-base border rounded-md w-1/3 mx-auto my-32"},Bs={class:"border-b px-5 py-3 font-medium"},Ts=a("span",{class:"inline-flex items-center before:bg-red-600 before:w-2 before:h-2 before:rounded-md before:mr-2"},null,-1),Us={class:"px-5 py-3"},Es={key:0,class:"mb-4 leading-6"},js={key:1,class:"mb-4 leading-6"},Os={__name:"Batch",props:{batchName:{type:String,required:!0}},setup(d){const c=M("$user"),u=T(!1),m=d,r=S({url:"lms.lms.utils.get_batch_details",cache:["batch",m.batchName],params:{batch:m.batchName},auto:!0}),g=z(()=>{var l,f;let t=[{label:"All Batches",route:{name:"Batches"}}];return s.value||t.push({label:"Details",route:{name:"BatchDetail",params:{batchName:(l=r.data)==null?void 0:l.name}}}),t.push({label:(f=r==null?void 0:r.data)==null?void 0:f.title,route:{name:"Batch",params:{batchName:m.batchName}}}),t}),s=z(()=>{var t,l;return(c==null?void 0:c.data)&&((t=r.data)==null?void 0:t.students.length)&&((l=r.data)==null?void 0:l.students.includes(c.data.name))}),b=T(0),i=z(()=>{var l;let t=[];return s.value&&t.push({label:"Dashboard",icon:Ue}),(l=c.data)!=null&&l.is_moderator&&(t.push({label:"Students",icon:Ee}),t.push({label:"Assessments",icon:je})),t.push({label:"Live Class",icon:Ne}),t.push({label:"Courses",icon:Pe}),t.push({label:"Announcements",icon:ze}),t.push({label:"Discussions",icon:Re}),t}),h=()=>{window.location.href="/login?redirect-to=/batches"},_=()=>{u.value=!0},k=z(()=>{var t,l;return{title:(t=r.data)==null?void 0:t.title,description:(l=r.data)==null?void 0:l.description}});return Te(k),(t,l)=>{var V,E,W,X;const f=ke("router-link");return(V=e(c).data)!=null&&V.is_moderator||s.value?(o(),v("div",ms,[a("header",_s,[n(e($e),{class:"h-7",items:g.value},null,8,["items"]),(E=e(c).data)!=null&&E.is_moderator?(o(),x(e(D),{key:0,onClick:l[0]||(l[0]=$=>_())},{suffix:y(()=>[n(e(Ye),{class:"h-4 stroke-1.5"})]),default:y(()=>[a("span",null,p(t.__("Make an Announcement")),1)]),_:1})):C("",!0)]),e(r).data?(o(),v("div",ps,[a("div",bs,[n(e(Ve),{modelValue:b.value,"onUpdate:modelValue":l[1]||(l[1]=$=>b.value=$),tabs:i.value,tablistClass:"overflow-y-hidden"},{tab:y(({tab:$,selected:Z})=>[a("div",null,[a("button",{class:R(["group -mb-px flex items-center gap-1 border-b border-transparent py-2.5 text-base text-gray-600 duration-300 ease-in-out hover:border-gray-400 hover:text-gray-900",{"text-gray-900":Z}])},[$.icon?(o(),x(J($.icon),{key:0,class:"h-4 stroke-1.5"})):C("",!0),L(" "+p(t.__($.label))+" ",1),$.count?(o(),x(e(xe),{key:1,class:R({"text-gray-900 border border-gray-900":Z}),variant:"subtle",theme:"gray",size:"sm"},{default:y(()=>[L(p($.count),1)]),_:2},1032,["class"])):C("",!0)],2)])]),default:y(({tab:$})=>[a("div",hs,[$.label=="Courses"?(o(),v("div",vs,[n(xt,{batch:e(r).data.name},null,8,["batch"])])):$.label=="Dashboard"?(o(),v("div",fs,[n(vt,{batch:e(r),isStudent:s.value},null,8,["batch","isStudent"])])):$.label=="Live Class"?(o(),v("div",gs,[n(Rt,{batch:e(r).data.name},null,8,["batch"])])):$.label=="Students"?(o(),v("div",ys,[n(Jt,{batch:e(r).data.name},null,8,["batch"])])):$.label=="Assessments"?(o(),v("div",ks,[n(be,{batch:e(r).data.name},null,8,["batch"])])):$.label=="Announcements"?(o(),v("div",$s,[n(as,{batch:e(r).data.name},null,8,["batch"])])):$.label=="Discussions"?(o(),v("div",xs,[(o(),x(He,{doctype:"LMS Batch",docname:e(r).data.name,title:t.__("Discussions"),key:e(r).data.name,singleThread:!0,scrollToBottom:!0},null,8,["docname","title"]))])):C("",!0)])]),_:1},8,["modelValue","tabs"])]),a("div",Vs,[a("div",Cs,p(e(r).data.title),1),a("div",{innerHTML:e(r).data.description,class:"leading-5 mb-2"},null,8,Ss),a("div",ws,[a("div",{class:R(["h-6 mr-1",{"avatar-group overlap":e(r).data.instructors.length>1}])},[(o(!0),v(w,null,B(e(r).data.instructors,$=>(o(),x(Se,{user:$},null,8,["user"]))),256))],2),n(Ce,{instructors:e(r).data.instructors},null,8,["instructors"])]),n(Oe,{startDate:e(r).data.start_date,endDate:e(r).data.end_date,class:"mb-3"},null,8,["startDate","endDate"]),a("div",Ms,[n(e(K),{class:"h-4 w-4 stroke-1.5 mr-2 text-gray-700"}),a("span",null,p(e(j)(e(r).data.start_time))+" - "+p(e(j)(e(r).data.end_time)),1)]),e(r).data.timezone?(o(),v("div",Ls,[n(e(qe),{class:"h-4 w-4 stroke-1.5 mr-2 text-gray-700"}),a("span",null,p(e(r).data.timezone),1)])):C("",!0)]),n(cs,{modelValue:u.value,"onUpdate:modelValue":l[2]||(l[2]=$=>u.value=$),batch:e(r).data.name,students:e(r).data.students},null,8,["modelValue","batch","students"])])):C("",!0)])):(W=e(c).data)!=null&&W.name?C("",!0):(o(),v("div",Ds,[a("div",As,[a("div",Bs,[Ts,L(" "+p(t.__("Not Permitted")),1)]),a("div",Us,[e(c).data?(o(),v("div",Es,p(t.__("You are not a member of this batch. Please checkout our upcoming batches.")),1)):(o(),v("div",js,p(t.__("Please login to access this page.")),1)),e(c).data?(o(),x(f,{key:2,to:{name:"Batches",params:{batchName:(X=e(r).data)==null?void 0:X.name}}},{default:y(()=>[n(e(D),{variant:"solid",class:"w-full"},{default:y(()=>[L(p(t.__("Upcoming Batches")),1)]),_:1})]),_:1},8,["to"])):(o(),x(e(D),{key:3,variant:"solid",class:"w-full",onClick:l[3]||(l[3]=$=>h())},{default:y(()=>[L(p(t.__("Login")),1)]),_:1}))])])]))}}};export{Os as default};
//# sourceMappingURL=Batch-Dz_nKx-X.js.map
