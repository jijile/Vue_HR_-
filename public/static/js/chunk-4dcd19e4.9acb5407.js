(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4dcd19e4"],{2506:function(e,t,a){"use strict";a.d(t,"h",(function(){return s})),a.d(t,"l",(function(){return n})),a.d(t,"m",(function(){return o})),a.d(t,"n",(function(){return i})),a.d(t,"i",(function(){return l})),a.d(t,"j",(function(){return c})),a.d(t,"g",(function(){return u})),a.d(t,"k",(function(){return p})),a.d(t,"p",(function(){return m})),a.d(t,"o",(function(){return d})),a.d(t,"c",(function(){return v})),a.d(t,"f",(function(){return h})),a.d(t,"d",(function(){return b})),a.d(t,"e",(function(){return f})),a.d(t,"a",(function(){return g})),a.d(t,"b",(function(){return w})),a.d(t,"q",(function(){return y}));a("99af");var r=a("b775");function s(e){return Object(r["a"])({url:"/user/process/instance/".concat(e.page,"/").concat(e.pageSize),method:"put",data:e})}function n(e){return Object(r["a"])({url:"/user/process/instance/getById/".concat(e)})}function o(e){return Object(r["a"])({url:"/approvals/flows/".concat(e)})}function i(e){return Object(r["a"])({url:"/approvals/setting",method:"put",data:e})}function l(e){return Object(r["a"])({url:"/user/process/instance/".concat(e)})}function c(e){return Object(r["a"])({url:"/user/process/instance/tasks/".concat(e)})}function u(e){return Object(r["a"])({url:"//user/process/buss/showBussImgById/".concat(e)})}function p(e){return Object(r["a"])({url:"/user/process/definition",params:e})}function m(e){return Object(r["a"])({url:"/user/process/suspend/".concat(e.processKey),params:e})}function d(e){return Object(r["a"])({url:"/user/process/startProcess",data:e,method:"post"})}function v(e){return Object(r["a"])({url:"/user/process_leave/startProcess",data:e,method:"post"})}function h(e){return Object(r["a"])({url:"/user/approvals/".concat(e.id,"/reject"),method:"put",data:e})}function b(e){return Object(r["a"])({url:"/user/approvals/".concat(e),method:"delete"})}function f(e){return Object(r["a"])({url:"/user/process/instance/commit",method:"put",data:e})}function g(e){return Object(r["a"])({url:"/user/process_dimission/startProcess",method:"post",data:e})}function w(e){return Object(r["a"])({url:"/user/process_overtime/startProcess",method:"post",data:e})}function y(e){return Object(r["a"])({url:"/sys/user/".concat(e.id),method:"put",data:e})}},"298a":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"usersApprovalsContainer"},[a("div",{staticClass:"approvalsTop"},[a("el-tabs",{on:{"tab-click":e.tabSwitch},model:{value:e.tagName,callback:function(t){e.tagName=t},expression:"tagName"}},[a("el-tab-pane",{attrs:{label:"全部",name:"copy"}}),a("el-tab-pane",{attrs:{label:"我发起的",name:"launch"}}),a("el-tab-pane",{attrs:{label:"待审批",name:"approvals"}})],1)],1),a("div",{staticClass:"approvalsContent"},[a("div",{staticClass:"topTitle"},[a("div",[a("span",[e._v("审批类型：")]),a("el-radio-group",{staticStyle:{margin:"5px 0"},model:{value:e.approvalsTypes,callback:function(t){e.approvalsTypes=t},expression:"approvalsTypes"}},e._l(e.approvalsType,(function(t){return a("el-radio",{key:t.deploymentId,attrs:{label:t.key,value:t.key},on:{change:e.changeSelectParams}},[e._v(e._s(t.name))])})),1)],1),"approvals"!=e.tagName?a("div",[a("span",[e._v("审批状态：")]),a("el-checkbox-group",{model:{value:e.approvalsStates,callback:function(t){e.approvalsStates=t},expression:"approvalsStates"}},e._l(e.approvalsState,(function(t){return a("el-checkbox",{key:t.id,attrs:{label:t.id,value:t.id},on:{change:e.changeSelectParams}},[e._v(e._s(t.value))])})),1)],1):e._e()]),a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"default-sort":{order:"descending",prop:"procApplyTime"}}},[a("el-table-column",{attrs:{type:"selection",width:"28"}}),a("el-table-column",{attrs:{type:"index",label:"序号",width:"60"}}),a("el-table-column",{attrs:{prop:"processName",label:"审批类型"}}),"launch"!==e.tagName?a("el-table-column",{attrs:{prop:"username",label:"申请人"}}):e._e(),"approvals"!==e.tagName?a("el-table-column",{attrs:{prop:"procCurrNodeUserName",label:"当前审批人"}}):e._e(),a("el-table-column",{attrs:{label:"申请时间",sortable:"",prop:"procApplyTime"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("formatDate")(t.row.procApplyTime)))])]}}])}),a("el-table-column",{attrs:{label:"审批状态"},scopedSlots:e._u([{key:"default",fn:function(t){return["0"===t.row.processState?a("span",{staticClass:"rovalsState"},[a("em",{staticClass:"sub"}),e._v("已提交 ")]):e._e(),"1"===t.row.processState?a("span",{staticClass:"rovalsState"},[a("em",{staticClass:"stay"}),e._v("审批中 ")]):e._e(),"2"===t.row.processState?a("span",{staticClass:"rovalsState"},[a("em",{staticClass:"adopt"}),e._v("审批通过 ")]):e._e(),"3"===t.row.processState?a("span",{staticClass:"rovalsState"},[a("em",{staticClass:"reject"}),e._v("审批不通过 ")]):e._e(),"4"===t.row.processState?a("span",{staticClass:"rovalsState"},[a("em",{staticClass:"revoke"}),e._v("撤销 ")]):e._e()]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"show",rawName:"v-show",value:"launch"==e.tagName&&"1"===t.row.processState,expression:"(tagName == 'launch')&&(scope.row.processState==='1')"}],attrs:{size:"mini",type:"text"},on:{click:function(a){return e.clickPass("4",t.row.processId)}}},[e._v("撤销")]),a("el-button",{directives:[{name:"show",rawName:"v-show",value:("copy"==e.tagName||"approvals"==e.tagName)&&"1"===t.row.processState,expression:"(tagName == 'copy' || tagName == 'approvals')&&(scope.row.processState==='1')"}],attrs:{size:"mini",type:"text"},on:{click:function(a){return e.clickPass("2",t.row.processId)}}},[e._v("通过")]),a("el-button",{directives:[{name:"show",rawName:"v-show",value:("copy"==e.tagName||"approvals"==e.tagName)&&"1"===t.row.processState,expression:"(tagName == 'copy' || tagName == 'approvals')&&(scope.row.processState==='1')"}],attrs:{size:"mini",type:"text"},on:{click:function(a){return e.clickPass("3",t.row.processId)}}},[e._v("驳回")]),a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(a){return e.clickDetail(t.row.processId,t.row.processName)}}},[e._v("查看")])]}}])})],1),a("el-row",{staticStyle:{height:"60px"},attrs:{type:"flex",justify:"center",align:"middle"}},[a("el-pagination",{attrs:{total:Number(e.total),"page-sizes":[10,20,30,50],layout:"prev, pager, next"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)]),a("el-dialog",{attrs:{title:e.topLabel,visible:e.centerDialogVisible,width:"50%",left:""},on:{"update:visible":function(t){e.centerDialogVisible=t}}},[a("Quit",{directives:[{name:"show",rawName:"v-show",value:"quit"==e.seeState,expression:"seeState == 'quit'"}],ref:"quit",attrs:{"selected-id":e.selectedId,"tab-lab":e.tagName},on:{closeDialog:e.closeDialog}}),a("Leave",{directives:[{name:"show",rawName:"v-show",value:"leave"==e.seeState,expression:"seeState == 'leave'"}],ref:"leave",attrs:{"selected-id":e.selectedId,"tab-lab":e.tagName},on:{closeDialog:e.closeDialog}}),a("Overtime",{directives:[{name:"show",rawName:"v-show",value:"overtime"==e.seeState,expression:"seeState == 'overtime'"}],ref:"overtime",attrs:{"selected-id":e.selectedId,"tab-lab":e.tagName},on:{closeDialog:e.closeDialog}})],1),a("el-dialog",{attrs:{title:"通过审核",visible:e.adoptVisible,width:"30%","before-close":e.handleClose},on:{"update:visible":function(t){e.adoptVisible=t}}},[a("span",[a("el-input",{attrs:{type:"textarea"},model:{value:e.formData.handleOpinion,callback:function(t){e.$set(e.formData,"handleOpinion",t)},expression:"formData.handleOpinion"}})],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.adoptVisible=!1}}},[e._v("取消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.handleProcess}},[e._v("确认")])],1)])],1)},s=[],n=a("1da1"),o=a("5530"),i=(a("a15b"),a("96cf"),a("2506")),l={approvalType:[{id:"1",value:"转正"},{id:"2",value:"调岗"},{id:"3",value:"离职"},{id:"4",value:"员工信息审核"},{id:"5",value:"调薪"},{id:"6",value:"工资审核"},{id:"7",value:"请假"},{id:"8",value:"销假"},{id:"9",value:"外出"},{id:"10",value:"销外出"},{id:"11",value:"出差"},{id:"12",value:"销出差"},{id:"13",value:"外勤打卡"},{id:"14",value:"补打卡"},{id:"15",value:"加班"},{id:"16",value:"招聘"},{id:"17",value:"录用"}],approvalState:[{id:"1",value:"审批中"},{id:"2",value:"审批驳回"},{id:"3",value:"已撤销"},{id:"4",value:"审批通过"}]},c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"AdjustThePost"},[a("div",{staticClass:"infoBox"},[e._m(0),a("div",{staticClass:"info"},[a("p",[a("span",{staticClass:"name"},[e._v(e._s(e.ruleForm.username))])]),a("p",[a("span",[e._v("部门：")]),e._v(" "+e._s(e.ruleForm.departmentName)+" ")]),a("p",[a("span",[e._v("入职时间：")]),e._v(" "+e._s(e._f("formatDate")(e.ruleForm.timeOfEntry))+" ")])])]),a("div",[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"期望离职时间：",prop:"expectedDepartureTime"}},[a("el-date-picker",{attrs:{type:"date",format:"yyyy-MM-dd",placeholder:"选择日期",disabled:e.computeOpType},model:{value:e.ruleForm.data.exceptTime,callback:function(t){e.$set(e.ruleForm.data,"exceptTime",t)},expression:"ruleForm.data.exceptTime"}})],1),a("el-form-item",{attrs:{label:"离职原因：",prop:"reasonsForLeaving"}},[a("el-input",{staticStyle:{width:"400px"},attrs:{type:"textarea",placeholder:"显示提交人填写的离职原因",disabled:e.computeOpType},model:{value:e.ruleForm.data.reason,callback:function(t){e.$set(e.ruleForm.data,"reason",t)},expression:"ruleForm.data.reason"}})],1),a("div",{staticClass:"buttones",staticStyle:{"text-align":"center","margin-top":"40px"}},[a("el-form-item",[a("el-button",{directives:[{name:"show",rawName:"v-show",value:(0==e.ruleForm.state||1==e.ruleForm.state)&&"launch"==e.tabLab,expression:"(ruleForm.state == 0 || ruleForm.state == 1) && tabLab =='launch'"}],attrs:{type:"primary"},on:{click:e.btnClick}},[e._v("撤销")]),a("el-button",{directives:[{name:"show",rawName:"v-show",value:(0==e.ruleForm.state||1==e.ruleForm.state)&&"approvals"==e.tabLab,expression:"(ruleForm.state == 0 || ruleForm.state == 1) && tabLab =='approvals'"}],attrs:{type:"primary"},on:{click:e.btnPass}},[e._v("通过")]),a("el-button",{directives:[{name:"show",rawName:"v-show",value:(0==e.ruleForm.state||1==e.ruleForm.state)&&"approvals"==e.tabLab,expression:"(ruleForm.state == 0 || ruleForm.state == 1) && tabLab =='approvals'"}],attrs:{type:"primary"},on:{click:e.btnReject}},[e._v("驳回")]),a("el-button",{directives:[{name:"show",rawName:"v-show",value:4==e.ruleForm.state&&"launch"==e.tabLab,expression:"ruleForm.state == 4 && tabLab =='launch'"}],attrs:{type:"primary"},on:{click:e.btnSave}},[e._v("提交")])],1)],1)],1)],1)])},u=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"logo"},[r("img",{attrs:{src:a("616f"),alt:""}})])}],p={name:"UsersTableIndex",props:{selectedId:{type:String,default:""},tabLab:{type:String,default:""}},data:function(){return{dialogImageUrl:"",dialogVisible:!1,timeValue:"",ruleForm:{}}},computed:{computeOpType:function(){return"已撤销"!==this.ruleForm.stateOfApproval}},created:function(){this.init()},methods:{init:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["i"])(e.selectedId);case 2:a=t.sent,e.ruleForm=a,e.ruleForm.data=JSON.parse(e.ruleForm.procData);case 5:case"end":return t.stop()}}),t)})))()},btnClick:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["d"])(e.selectedId);case 2:e.$message.success("撤销成功"),e.$emit("closeDialog");case 4:case"end":return t.stop()}}),t)})))()},btnPass:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["e"])({id:e.selectedId});case 2:e.$message.success("操作成功"),e.$emit("closeDialog");case 4:case"end":return t.stop()}}),t)})))()},btnReject:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["f"])({id:e.selectedId});case 2:e.$message.success("操作成功"),e.$emit("closeDialog");case 4:case"end":return t.stop()}}),t)})))()},btnSave:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a,r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={},a.processInstanceId=e.selectedId,a.expectedDepartureTime=e.ruleForm.startTime,a.reasonsForLeaving=e.ruleForm.cause,t.next=6,Object(i["a"])(a);case 6:r=t.sent,s=r.data,s.success&&(e.ruleForm={},e.$emit("closeDialog"));case 9:case"end":return t.stop()}}),t)})))()},handleRemove:function(e,t){console.log(e,t)},updateData:function(){this.init()},handlePictureCardPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0}}},m=p,d=(a("c1a4"),a("2877")),v=Object(d["a"])(m,c,u,!1,null,"57196058",null),h=v.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"AdjustThePost"},[a("div",{staticClass:"infoBox"},[e._m(0),a("div",{staticClass:"info"},[a("p",[a("span",{staticClass:"name"},[e._v(e._s(e.ruleForm.username))])]),a("p",[a("span",[e._v("部门：")]),e._v(" "+e._s(e.ruleForm.departmentName)+" ")]),a("p",[a("span",[e._v("入职时间：")]),e._v(" "+e._s(e._f("formatDate")(e.ruleForm.timeOfEntry))+" ")])])]),a("div",[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"请假类型：",prop:"holidayType"}},[a("el-input",{staticStyle:{width:"220px"},attrs:{disabled:!0},model:{value:e.ruleForm.data.holidayType,callback:function(t){e.$set(e.ruleForm.data,"holidayType",t)},expression:"ruleForm.data.holidayType"}})],1),a("el-form-item",{attrs:{label:"开始时间：",prop:"startTime"}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期",disabled:e.computeOpType},model:{value:e.ruleForm.data.start_time,callback:function(t){e.$set(e.ruleForm.data,"start_time",t)},expression:"ruleForm.data.start_time"}})],1),a("el-form-item",{attrs:{label:"结束时间：",prop:"endTime"}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期",disabled:e.computeOpType},model:{value:e.ruleForm.data.end_time,callback:function(t){e.$set(e.ruleForm.data,"end_time",t)},expression:"ruleForm.data.end_time"}})],1),a("el-form-item",{attrs:{label:"请假时长：",prop:"duration"}},[a("el-input",{staticStyle:{width:"220px"},attrs:{disabled:!0},model:{value:e.ruleForm.data.duration,callback:function(t){e.$set(e.ruleForm.data,"duration",t)},expression:"ruleForm.data.duration"}})],1),a("el-form-item",{attrs:{label:"申请原因：",prop:"cause"}},[a("el-input",{staticStyle:{width:"400px"},attrs:{type:"textarea",placeholder:"显示请假人填写的请假原因",disabled:e.computeOpType},model:{value:e.ruleForm.data.reason,callback:function(t){e.$set(e.ruleForm.data,"reason",t)},expression:"ruleForm.data.reason"}})],1),a("div",{staticClass:"buttones",staticStyle:{"text-align":"center","margin-top":"40px"}},[a("el-form-item",[a("el-button",{directives:[{name:"show",rawName:"v-show",value:(0==e.ruleForm.state||1==e.ruleForm.state)&&"launch"==e.tabLab,expression:"(ruleForm.state == 0 || ruleForm.state == 1) && tabLab =='launch'"}],attrs:{type:"primary"},on:{click:e.btnClick}},[e._v("撤销")]),a("el-button",{directives:[{name:"show",rawName:"v-show",value:(0==e.ruleForm.state||1==e.ruleForm.state)&&"approvals"==e.tabLab,expression:"(ruleForm.state == 0 || ruleForm.state == 1) && tabLab =='approvals'"}],attrs:{type:"primary"},on:{click:e.btnPass}},[e._v("通过")]),a("el-button",{directives:[{name:"show",rawName:"v-show",value:(0==e.ruleForm.state||1==e.ruleForm.state)&&"approvals"==e.tabLab,expression:"(ruleForm.state == 0 || ruleForm.state == 1) && tabLab =='approvals'"}],attrs:{type:"primary"},on:{click:e.btnReject}},[e._v("驳回")]),a("el-button",{directives:[{name:"show",rawName:"v-show",value:4==e.ruleForm.state&&"launch"==e.tabLab,expression:"ruleForm.state == 4 && tabLab =='launch'"}],attrs:{type:"primary"},on:{click:e.btnSave}},[e._v("提交")])],1)],1)],1)],1)])},f=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"logo"},[r("img",{attrs:{src:a("616f"),alt:""}})])}],g={name:"UsersTableIndex",props:{selectedId:{type:String,default:""},tabLab:{type:String,default:""}},data:function(){return{dialogImageUrl:"",dialogVisible:!1,timeValue:"",ruleForm:{}}},computed:{computeOpType:function(){return"已撤销"!==this.ruleForm.stateOfApproval}},created:function(){this.init()},methods:{init:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["i"])(e.selectedId);case 2:a=t.sent,e.ruleForm=a,e.ruleForm.data=JSON.parse(e.ruleForm.procData),r=e.ruleForm.data.holidayType,e.ruleForm.data.holidayType=1===r?"请假":"调休";case 7:case"end":return t.stop()}}),t)})))()},btnClick:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["d"])({id:e.selectedId});case 2:e.$message.success("撤销成功"),e.$emit("closeDialog");case 4:case"end":return t.stop()}}),t)})))()},btnPass:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["e"])({id:e.selectedId});case 2:e.$message.success("操作成功"),e.$emit("closeDialog");case 4:case"end":return t.stop()}}),t)})))()},btnReject:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["f"])({id:e.selectedId});case 2:e.$message.success("操作成功"),e.$emit("closeDialog");case 4:case"end":return t.stop()}}),t)})))()},btnSave:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={},a.processInstanceId=e.selectedId,a.holidayType="请假"===e.ruleForm.holidayType?7:18,a.startTime=e.ruleForm.startTime,a.endTime=e.ruleForm.endTime,a.reasonsForApplication=e.ruleForm.cause,t.next=8,Object(i["c"])(a);case 8:e.ruleForm={},e.$emit("closeDialog");case 10:case"end":return t.stop()}}),t)})))()},handleRemove:function(e,t){console.log(e,t)},handlePictureCardPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0},updateData:function(){this.init()}}},w=g,y=(a("4ea0"),Object(d["a"])(w,b,f,!1,null,"6e6f9d70",null)),F=y.exports,x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"AdjustThePost"},[a("div",{staticClass:"infoBox"},[e._m(0),a("div",{staticClass:"info"},[a("p",[a("span",{staticClass:"name"},[e._v(e._s(e.ruleForm.username))])]),a("p",[a("span",[e._v("部门：")]),e._v(" "+e._s(e.ruleForm.departmentName)+" ")]),a("p",[a("span",[e._v("入职时间：")]),e._v(" "+e._s(e._f("formatDate")(e.ruleForm.timeOfEntry))+" ")])])]),a("div",[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"补偿方式",prop:"types"}},[e._v(" 调休 ")]),a("el-form-item",{attrs:{label:"加班开始时间",prop:"timeValue"}},[a("el-date-picker",{attrs:{format:"yyyy-MM-dd HH:mm:ss",type:"date",placeholder:"选择日期",disabled:e.computeOpType},model:{value:e.ruleForm.data.start_time,callback:function(t){e.$set(e.ruleForm.data,"start_time",t)},expression:"ruleForm.data.start_time"}})],1),a("el-form-item",{attrs:{label:"加班结束时间",prop:"timeValue"}},[a("el-date-picker",{attrs:{type:"date",format:"yyyy-MM-dd HH:mm:ss",placeholder:"选择日期",disabled:e.computeOpType},model:{value:e.ruleForm.data.end_time,callback:function(t){e.$set(e.ruleForm.data,"end_time",t)},expression:"ruleForm.data.end_time"}})],1),a("el-form-item",{attrs:{label:"申请原因",prop:"evaluate"}},[a("el-input",{staticStyle:{width:"400px"},attrs:{type:"textarea",placeholder:"显示加班人填写的加班原因",disabled:e.computeOpType},model:{value:e.ruleForm.data.reason,callback:function(t){e.$set(e.ruleForm.data,"reason",t)},expression:"ruleForm.data.reason"}})],1),a("div",{staticClass:"buttones",staticStyle:{"text-align":"center","margin-top":"40px"}},[a("el-form-item",[a("el-button",{directives:[{name:"show",rawName:"v-show",value:(0==e.ruleForm.state||1==e.ruleForm.state)&&"launch"==e.tabLab,expression:"(ruleForm.state == 0 || ruleForm.state == 1) && tabLab =='launch'"}],attrs:{type:"primary"},on:{click:e.btnClick}},[e._v("撤销")]),a("el-button",{directives:[{name:"show",rawName:"v-show",value:(0==e.ruleForm.state||1==e.ruleForm.state)&&"approvals"==e.tabLab,expression:"(ruleForm.state == 0 || ruleForm.state == 1) && tabLab =='approvals'"}],attrs:{type:"primary"},on:{click:e.btnPass}},[e._v("通过")]),a("el-button",{directives:[{name:"show",rawName:"v-show",value:(0==e.ruleForm.state||1==e.ruleForm.state)&&"approvals"==e.tabLab,expression:"(ruleForm.state == 0 || ruleForm.state == 1) && tabLab =='approvals'"}],attrs:{type:"primary"},on:{click:e.btnReject}},[e._v("驳回")]),a("el-button",{directives:[{name:"show",rawName:"v-show",value:4==e.ruleForm.stateOfApproval&&"launch"==e.tabLab,expression:"ruleForm.stateOfApproval == 4 && tabLab =='launch'"}],attrs:{type:"primary"},on:{click:e.btnSave}},[e._v("提交")])],1)],1)],1)],1)])},_=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"logo"},[r("img",{attrs:{src:a("616f"),alt:""}})])}],k={name:"Overtime",props:{selectedId:{type:String,default:""},tabLab:{type:String,default:""}},data:function(){return{id:"",dialogImageUrl:"",dialogVisible:!1,timeValue:"",ruleForm:{},rules:{}}},computed:{computeOpType:function(){return"已撤销"!==this.ruleForm.stateOfApproval}},mounted:function(){this.init()},methods:{init:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=3,Object(i["i"])(e.selectedId);case 3:a=t.sent,e.ruleForm=a,e.ruleForm.data=JSON.parse(e.ruleForm.procData);case 6:case"end":return t.stop()}}),t)})))()},btnClick:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["d"])({id:e.selectedId});case 2:e.$message.success("撤销成功"),e.$emit("closeDialog");case 4:case"end":return t.stop()}}),t)})))()},btnPass:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["e"])({id:e.selectedId});case 2:e.$message.success("操作成功"),e.$emit("closeDialog");case 4:case"end":return t.stop()}}),t)})))()},btnReject:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["f"])({id:e.selectedId});case 2:e.$message.success("操作成功"),e.$emit("closeDialog");case 4:case"end":return t.stop()}}),t)})))()},btnSave:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={},a.processInstanceId=e.selectedId,a.overtimeStartTime=e.ruleForm.startTime,a.overtimeTime=e.ruleForm.endTime,a.overtimeCause=e.ruleForm.cause,t.next=7,Object(i["b"])(a);case 7:e.ruleForm={},e.$emit("closeDialog");case 9:case"end":return t.stop()}}),t)})))()},updateData:function(){this.init()},handleRemove:function(e,t){console.log(e,t)},handlePictureCardPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0}}},O=k,j=(a("dd8e"),Object(d["a"])(O,x,_,!1,null,"7a3013c9",null)),S=j.exports,I=a("2f62"),C={name:"UsersTableIndex",components:{Quit:h,Leave:F,Overtime:S},data:function(){return{tagName:"copy",seeState:"becomeARegularWorker",centerDialogVisible:!1,topLabel:"转正",approvalsType:[],approvalsTypes:"",approvalsState:l.approvalState,approvalsStates:[],tableData:[],page:null,pageSize:null,total:"",selectedId:"",pagination:{page:1,pageSize:10,process_key$equal:this.process_key$equal,process_state$in:this.process_state$in},adoptVisible:!1,formData:{handleOpinion:"",processId:"",handleType:""}}},computed:Object(o["a"])({},Object(I["d"])(["userId"])),created:function(){this.getApprovalList(),this.getFlowList()},methods:{getApprovalList:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["h"])(e.pagination);case 2:a=t.sent,e.total=a.total,e.tableData=a.rows;case 5:case"end":return t.stop()}}),t)})))()},getFlowList:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["k"])();case 2:e.approvalsType=t.sent;case 3:case"end":return t.stop()}}),t)})))()},delProcess:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(i["d"])({id:e});case 2:t.$message.success("撤销成功"),t.getApprovalList();case 4:case"end":return a.stop()}}),a)})))()},handleProcess:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["e"])(e.formData);case 2:e.$message.success("操作成功"),e.getApprovalList(),e.adoptVisible=!1;case 5:case"end":return t.stop()}}),t)})))()},rejectProcess:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(i["f"])({id:e});case 2:t.getApprovalList(),t.$message.success("操作成功");case 4:case"end":return a.stop()}}),a)})))()},changeSelectParams:function(){this.pagination.processKey=this.approvalsTypes,this.pagination.processState=this.approvalsStates.join(","),this.getApprovalList()},handleSizeChange:function(e){this.pagination.pagesize=e,1===this.pagination.page&&this.getApprovalList()},handleCurrentChange:function(e){this.pagination.page=e,this.getApprovalList()},tabSwitch:function(){this.approvalsStates=[],this.pagination.processState="","launch"===this.tagName?(delete this.pagination.userId,delete this.pagination.procCurrNodeUserId,this.pagination.userId=this.userId):"approvals"===this.tagName?(delete this.pagination.userId,delete this.pagination.procCurrNodeUserId,this.pagination.procCurrNodeUserId=this.userId,this.pagination.processState="1"):"copy"===this.tagName&&(delete this.pagination.userId,delete this.pagination.procCurrNodeUserId),this.getApprovalList()},clickCancel:function(e){var t=this;this.$confirm("是否撤销该流程").then((function(){t.delProcess(e)}))},clickPass:function(e,t){this.adoptVisible=!0,this.formData.processId=t,"2"===e?this.formData.handleType="2":"3"===e?this.formData.handleType="3":"4"===e&&(this.formData.handleType="4"),this.formData.handleUserId=this.userId},clickBack:function(e){var t=this;this.$confirm("是否驳回","确认",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((function(){t.rejectProcess(e)}))},clickDetail:function(e,t){switch(this.centerDialogVisible=!0,this.topLabel=t,t){case"调岗":this.seeState="adjustThePost";break;case"离职":this.seeState="quit",this.selectedId=e,this.$refs.quit.updateData();break;case"审核":this.seeState="examine";break;case"加班":this.seeState="overtime",this.selectedId=e,this.$refs.overtime.updateData();break;case"录用":this.seeState="employment";break;case"请假":this.seeState="leave",this.selectedId=e,this.$refs.leave.updateData();break;case"调休":this.seeState="leave",this.selectedId=e,this.$refs.leave.updateData();break;default:this.seeState="becomeARegularWorker",this.topLabel="转正"}},closeDialog:function(){this.centerDialogVisible=!1,this.getApprovalList()},handleClose:function(e){this.$confirm("确认关闭？").then((function(t){e()}))}}},T=C,N=(a("79be"),Object(d["a"])(T,r,s,!1,null,"7596e6e7",null));t["default"]=N.exports},"2d6e":function(e,t,a){},"4ea0":function(e,t,a){"use strict";a("5e77")},"5d86":function(e,t,a){},"5e77":function(e,t,a){},"616f":function(e,t,a){e.exports=a.p+"static/img/img.0615818f.jpeg"},"79be":function(e,t,a){"use strict";a("2d6e")},a15b:function(e,t,a){"use strict";var r=a("23e7"),s=a("44ad"),n=a("fc6a"),o=a("a640"),i=[].join,l=s!=Object,c=o("join",",");r({target:"Array",proto:!0,forced:l||!c},{join:function(e){return i.call(n(this),void 0===e?",":e)}})},c1a4:function(e,t,a){"use strict";a("f980")},dd8e:function(e,t,a){"use strict";a("5d86")},f980:function(e,t,a){}}]);