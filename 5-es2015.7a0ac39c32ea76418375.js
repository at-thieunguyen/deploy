(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{nsiF:function(e,t,i){"use strict";i.r(t);var r=i("ofXK"),s=i("tyNb"),o=i("fXoL"),a=i("Vurf"),l=i("nJlW");let n=(()=>{class e{constructor(e,t){this.auth=e,this.login=t}ngOnInit(){this.login.curentUser.subscribe(e=>{this.userName=JSON.parse(e)}),this.userName=JSON.parse(localStorage.getItem("userLogin")),console.log(this.userName)}}return e.\u0275fac=function(t){return new(t||e)(o.Jb(a.a),o.Jb(l.a))},e.\u0275cmp=o.Db({type:e,selectors:[["app-dashboard"]],decls:13,vars:1,consts:[[1,"container"],[1,"col-md-3"],[1,"wlc-title"],[1,"row"],[1,"col-md-3","col-sm-12","list-item"],[1,"list-group"],["routerLink","/dashboard/profile",1,"list-group-item","list-group-item-action","btn","btn-light"],["routerLink","/dashboard/favorite",1,"list-group-item","list-group-item-actionbtn","btn-light","step-router"],[1,"col-lg-9","col-md-6","col-sm-12"]],template:function(e,t){1&e&&(o.Mb(0,"div",0),o.Mb(1,"div",1),o.Mb(2,"h2",2),o.jc(3),o.Lb(),o.Lb(),o.Mb(4,"div",3),o.Mb(5,"div",4),o.Mb(6,"div",5),o.Mb(7,"a",6),o.jc(8,"Profile"),o.Lb(),o.Mb(9,"a",7),o.jc(10,"Favorite"),o.Lb(),o.Lb(),o.Lb(),o.Mb(11,"div",8),o.Kb(12,"router-outlet"),o.Lb(),o.Lb(),o.Lb()),2&e&&(o.zb(3),o.lc("Welcome: ",t.userName.lastName,""))},directives:[s.c,s.e],styles:[""]}),e})();var c=i("Mg80"),b=i("3Pt+");function u(e,t){1&e&&(o.Mb(0,"div",10),o.jc(1,"Update success "),o.Kb(2,"i",11),o.Lb())}let p=(()=>{class e{constructor(e,t){this.apiService=e,this.login=t,this.id=!!JSON.parse(localStorage.getItem("userLogin"))&&JSON.parse(localStorage.getItem("userLogin")).id,this.success=!1}ngOnInit(){this.id&&this.apiService.get("users/",this.id).subscribe(e=>{this.profileUser=e})}onSubmit(e){confirm("Are you sure ?")&&(this.profileUser.firstName=e.value.fName,this.profileUser.lastName=e.value.lName,localStorage.setItem("userLogin",JSON.stringify(this.profileUser)),this.login.changeUser(JSON.stringify(this.profileUser)),this.apiService.put("users/"+this.profileUser.id,this.profileUser)),this.success=!0,setTimeout(()=>this.success=!1,2e3)}}return e.\u0275fac=function(t){return new(t||e)(o.Jb(c.a),o.Jb(l.a))},e.\u0275cmp=o.Db({type:e,selectors:[["app-profile"]],decls:16,vars:4,consts:[[1,"row"],[1,"form-profile",3,"ngSubmit"],["form","ngForm"],[1,"input-form"],["class","alert alert-success",4,"ngIf"],["for",""],["name","email","type","text","disabled","",1,"form-control","profile",3,"ngModel"],["name","fName","type","text",1,"form-control","profile",3,"ngModel"],["name","lName","type","text",1,"form-control","profile",3,"ngModel"],["type","submit",1,"btn","btn-dark","btn-profile"],[1,"alert","alert-success"],[1,"far","fa-check-circle"]],template:function(e,t){if(1&e){const e=o.Nb();o.Mb(0,"div",0),o.Mb(1,"form",1,2),o.Ub("ngSubmit",(function(){o.ec(e);const i=o.dc(2);return t.onSubmit(i)})),o.Mb(3,"div",3),o.ic(4,u,3,0,"div",4),o.Mb(5,"label",5),o.jc(6,"Email"),o.Lb(),o.Kb(7,"input",6),o.Mb(8,"label",5),o.jc(9,"First Name"),o.Lb(),o.Kb(10,"input",7),o.Mb(11,"label",5),o.jc(12,"Last Name"),o.Lb(),o.Kb(13,"input",8),o.Mb(14,"button",9),o.jc(15," Edit profile "),o.Lb(),o.Lb(),o.Lb(),o.Lb()}2&e&&(o.zb(4),o.Zb("ngIf",t.success),o.zb(3),o.Zb("ngModel",null==t.profileUser?null:t.profileUser.email),o.zb(3),o.Zb("ngModel",null==t.profileUser?null:t.profileUser.firstName),o.zb(3),o.Zb("ngModel",null==t.profileUser?null:t.profileUser.lastName))},directives:[b.m,b.g,b.h,r.i,b.a,b.f,b.i],styles:[""]}),e})();var f=i("5CrI");function m(e,t){if(1&e&&(o.Mb(0,"div",3),o.Kb(1,"app-module-products",4),o.Lb()),2&e){const e=t.$implicit;o.zb(1),o.Zb("moduleProduct",e)}}const d=[{path:"",component:n,children:[{path:"profile",component:p},{path:"favorite",component:(()=>{class e{constructor(e){this.apiService=e,this.showFavorite=!1,this.id=!!JSON.parse(localStorage.getItem("userLogin"))&&JSON.parse(localStorage.getItem("userLogin")).id}checkFavorite(e,t){this.id&&(this.showFavorite=!0,this.apiService.get("users/"+this.id,"").subscribe(i=>{this.userData=i,this.userData.arrFavorite=JSON.parse(this.userData.arrFavorite);for(let r=0;r<this.userData.arrFavorite.length;r++)for(let i=0;i<e.length;i++)this.userData.arrFavorite[r].id===e[i].id&&(e[i].isToken=!0,1===t?this.phone=e:2===t?this.laptop=e[i]:this.accessories=e[i])}))}ngOnInit(){this.id&&this.apiService.get("users/",this.id).subscribe(e=>{this.userData=e,this.arrFavorite=JSON.parse(this.userData.arrFavorite)})}}return e.\u0275fac=function(t){return new(t||e)(o.Jb(c.a))},e.\u0275cmp=o.Db({type:e,selectors:[["app-favorite"]],decls:3,vars:1,consts:[[1,"container"],[1,"row"],["class","col-sm-12 col-md-6 col-lg-4",4,"ngFor","ngForOf"],[1,"col-sm-12","col-md-6","col-lg-4"],[1,"pro-fa",3,"moduleProduct"]],template:function(e,t){1&e&&(o.Mb(0,"div",0),o.Mb(1,"div",1),o.ic(2,m,2,1,"div",2),o.Lb(),o.Lb()),2&e&&(o.zb(2),o.Zb("ngForOf",t.arrFavorite))},directives:[r.h,f.a],styles:[""]}),e})()}]}];let h=(()=>{class e{}return e.\u0275mod=o.Hb({type:e}),e.\u0275inj=o.Gb({factory:function(t){return new(t||e)},imports:[[s.d.forChild(d)],s.d]}),e})();i.d(t,"DashboradModule",(function(){return g}));let g=(()=>{class e{}return e.\u0275mod=o.Hb({type:e}),e.\u0275inj=o.Gb({factory:function(t){return new(t||e)},imports:[[r.b,h]]}),e})()}}]);