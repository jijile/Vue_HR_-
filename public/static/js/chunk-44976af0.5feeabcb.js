(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44976af0"],{"0ccb":function(t,e,n){var r=n("50c4"),i=n("1148"),a=n("1d80"),s=Math.ceil,o=function(t){return function(e,n,o){var c,l,u=String(a(e)),d=u.length,f=void 0===o?" ":String(o),m=r(n);return m<=d||""==f?u:(c=m-d,l=i.call(f,s(c/f.length)),l.length>c&&(l=l.slice(0,c)),t?u+l:l+u)}};t.exports={start:o(!1),end:o(!0)}},"0feb":function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return a})),n.d(e,"e",(function(){return s})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return c}));var r=n("b775");function i(t){return Object(r["a"])({url:"/sys/permission",params:t})}function a(t){return Object(r["a"])({url:"/sys/permission",method:"post",data:t})}function s(t){return Object(r["a"])({url:"/sys/permission/".concat(t.id),method:"put",data:t})}function o(t){return Object(r["a"])({url:"/sys/permission/".concat(t),method:"delete"})}function c(t){return Object(r["a"])({url:"/sys/permission/".concat(t)})}},"4d90":function(t,e,n){"use strict";var r=n("23e7"),i=n("0ccb").start,a=n("9a0c");r({target:"String",proto:!0,forced:a},{padStart:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"9a0c":function(t,e,n){var r=n("342f");t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r)},c23a:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dashboard-container"},[n("div",{staticClass:"app-container"},[n("page-tools",{scopedSlots:t._u([{key:"after",fn:function(){return[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.addPermission(1,"0")}}},[t._v("添加权限")])]},proxy:!0}])}),n("el-table",{attrs:{border:"",data:t.list,"row-key":"id"}},[n("el-table-column",{attrs:{label:"名称",prop:"name"}}),n("el-table-column",{attrs:{label:"标识",align:"center",prop:"code"}}),n("el-table-column",{attrs:{label:"描述",align:"center",prop:"description"}}),n("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[1===r.type?n("el-button",{attrs:{type:"text"},on:{click:function(e){return t.addPermission(2,r.id)}}},[t._v("添加")]):t._e(),n("el-button",{attrs:{type:"text"},on:{click:function(e){return t.editPermission(r.id)}}},[t._v("编辑")]),n("el-button",{attrs:{type:"text"},on:{click:function(e){return t.delPermission(r.id)}}},[t._v("删除")])]}}])})],1)],1),n("el-dialog",{attrs:{visible:t.showDialog,title:t.showText},on:{close:t.btnCancel}},[n("el-form",{ref:"addPermissionRef",attrs:{model:t.formData,rules:t.rules,"label-width":"120px"}},[n("el-form-item",{attrs:{label:"名称",prop:"name"}},[n("el-input",{staticStyle:{width:"90%"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),n("el-form-item",{attrs:{label:"标识",prop:"code"}},[n("el-input",{staticStyle:{width:"90%"},model:{value:t.formData.code,callback:function(e){t.$set(t.formData,"code",e)},expression:"formData.code"}})],1),n("el-form-item",{attrs:{label:"描述"}},[n("el-input",{staticStyle:{width:"90%"},model:{value:t.formData.description,callback:function(e){t.$set(t.formData,"description",e)},expression:"formData.description"}})],1),n("el-form-item",{attrs:{label:"开启"}},[n("el-switch",{staticStyle:{width:"90%"},attrs:{"inactive-value":"0","active-value":"1"},model:{value:t.formData.enVisible,callback:function(e){t.$set(t.formData,"enVisible",e)},expression:"formData.enVisible"}})],1)],1),n("el-row",{attrs:{slot:"footer",type:"flex",justify:"center"},slot:"footer"},[n("el-col",{attrs:{span:6}},[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.btnOK}},[t._v("确定")]),n("el-button",{attrs:{size:"small"},on:{click:t.btnCancel}},[t._v("取消")])],1)],1)],1)],1)},i=[],a=n("1da1"),s=(n("96cf"),n("0feb")),o=n("ed08"),c={data:function(){return{list:[],showDialog:!1,formData:{name:"",code:"",description:"",type:"",pid:"",enVisible:"1"},rules:{name:[{required:!0,message:"权限名称不能为空",trigger:"blur"}],code:[{required:!0,message:"权限标识不能为空",trigger:"blur"}]}}},computed:{showText:function(){return this.formData.id?"编辑":"新增"}},created:function(){this.getPermissionList()},methods:{getPermissionList:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=o["a"],e.next=3,Object(s["d"])();case 3:e.t1=e.sent,t.list=(0,e.t0)(e.t1,"0");case 5:case"end":return e.stop()}}),e)})))()},delPermission:function(t){var e=this;this.$confirm("确认删除该权限吗？").then((function(){return Object(s["b"])(t)})).then((function(){e.$message.success("删除成功！"),e.getPermissionList()}))},addPermission:function(t,e){this.showDialog=!0,this.formData.type=t,this.formData.pid=e},btnOK:function(){var t=this;this.$refs.addPermissionRef.validate().then((function(){return t.formData.id?Object(s["e"])(t.formData):Object(s["a"])(t.formData)})).then((function(){t.$message.success("操作成功"),t.getPermissionList(),t.showDialog=!1}))},btnCancel:function(){this.formData={name:"",code:"",description:"",type:"",pid:"",enVisible:"1"},this.$refs.addPermissionRef.resetFields(),this.showDialog=!1},editPermission:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(s["c"])(t);case 2:e.formData=n.sent,e.showDialog=!0;case 4:case"end":return n.stop()}}),n)})))()}}},l=c,u=n("2877"),d=Object(u["a"])(l,r,i,!1,null,null,null);e["default"]=d.exports},ed08:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("53ca"),n("ac1f"),n("00b4"),n("5319"),n("4d63"),n("2c3e"),n("25f0"),n("d3b7"),n("4d90"),n("1276"),n("159b");function r(t,e){var n=[];return t.forEach((function(i){if(i.pid===e){var a=r(t,i.id);a.length>0&&(i.children=a),n.push(i)}})),n}}}]);