"use strict";(self.webpackChunkportfolio_gerson_carrasco=self.webpackChunkportfolio_gerson_carrasco||[]).push([[111],{111:(P,p,i)=>{i.r(p),i.d(p,{ContactMeModule:()=>H});var m=i(6895),u=i(9455),r=i(4006),s=i(4838);const f=[{text:"Facebook",link:s.u.facebook},{text:"Github",link:s.u.github},{text:"LinkedIn",link:s.u.linkedIn}];var o=i(4650),g=i(9102),C=i(3336);let _=(()=>{class t{constructor(){}ngOnInit(){}onClick(){window.open(this.link,"_blank")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["portfolio-links-find-me"]],inputs:{text:"text",link:"link"},decls:6,vars:1,consts:[[1,"row",3,"click"],[1,"col-1"],[1,"color-icon-launch"],[1,"col","my-auto"]],template:function(e,c){1&e&&(o.TgZ(0,"div",0),o.NdJ("click",function(){return c.onClick()}),o.TgZ(1,"div",1)(2,"mat-icon",2),o._uU(3,"launch"),o.qZA()(),o.TgZ(4,"div",3),o._uU(5),o.qZA()()),2&e&&(o.xp6(5),o.hij(" ",c.text," "))},dependencies:[C.Hw],styles:[".color-icon-launch[_ngcontent-%COMP%]{color:#607b96;font-size:20px;vertical-align:middle}"]}),t})();var M=i(9306),Z=i(3095),h=i(8205),v=i(9724),d=i(4859),l=i(9549),T=i(4144);function x(t,n){1&t&&(o.TgZ(0,"mat-error"),o._uU(1,"The name is required"),o.qZA())}function F(t,n){1&t&&(o.TgZ(0,"mat-error"),o._uU(1,"The email is required"),o.qZA())}function k(t,n){1&t&&(o.TgZ(0,"mat-error"),o._uU(1,"The email is mal formated"),o.qZA())}function b(t,n){1&t&&(o.TgZ(0,"mat-error"),o._uU(1,"The message is required"),o.qZA())}let y=(()=>{class t{constructor(){this.onSubmit=new o.vpe}ngOnInit(){}get contactMeForm(){return this.form.controls}onContactMe(){this.onSubmit.emit(this.form.value)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["contact-me-form"]],inputs:{form:"form"},outputs:{onSubmit:"onSubmit"},decls:20,vars:6,consts:[[1,"mt-4"],[3,"formGroup"],["appearance","outline",1,"w-100","mt-2"],["matInput","","formControlName","name"],[4,"ngIf"],["matInput","","formControlName","email"],["matInput","","formControlName","message","rows","3","cols","40"],["mat-raised-button","","color","primary",1,"mt-2",3,"disabled","click"]],template:function(e,c){1&e&&(o.TgZ(0,"div",0)(1,"form",1)(2,"mat-form-field",2)(3,"mat-label"),o._uU(4,"_name"),o.qZA(),o._UZ(5,"input",3),o.YNc(6,x,2,0,"mat-error",4),o.qZA(),o.TgZ(7,"mat-form-field",2)(8,"mat-label"),o._uU(9,"_email"),o.qZA(),o._UZ(10,"input",5),o.YNc(11,F,2,0,"mat-error",4),o.YNc(12,k,2,0,"mat-error",4),o.qZA(),o.TgZ(13,"mat-form-field",2)(14,"mat-label"),o._uU(15,"_message"),o.qZA(),o._UZ(16,"textarea",6),o.YNc(17,b,2,0,"mat-error",4),o.qZA(),o.TgZ(18,"button",7),o.NdJ("click",function(){return c.onContactMe()}),o._uU(19,"submit-message"),o.qZA()()()),2&e&&(o.xp6(1),o.Q6J("formGroup",c.form),o.xp6(5),o.Q6J("ngIf",c.contactMeForm.name.hasError("required")),o.xp6(5),o.Q6J("ngIf",c.contactMeForm.email.hasError("required")),o.xp6(1),o.Q6J("ngIf",c.contactMeForm.email.hasError("email")),o.xp6(5),o.Q6J("ngIf",c.contactMeForm.message.hasError("required")),o.xp6(1),o.Q6J("disabled",c.form.invalid))},dependencies:[m.O5,d.lW,l.TO,l.KE,l.hX,T.Nt,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u],styles:[".mat-form-field-appearance-outline .mat-form-field-outline{color:#1e2d3d!important;background-color:#011221}input.mat-input-element,textarea.mat-input-element{color:#465e77}.mat-focused .mat-form-field-label{color:#607b96!important}\n"],encapsulation:2}),t})(),A=(()=>{class t{constructor(){this.resendNewMessage=new o.vpe}ngOnInit(){}onResend(){this.resendNewMessage.emit()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["contact-me-success"]],outputs:{resendNewMessage:"resendNewMessage"},decls:7,vars:0,consts:[[1,"text-center"],[1,"title-success","mt-4"],[1,"message-success","mt-3"],["mat-raised-button","","color","primary",1,"mt-3",3,"click"]],template:function(e,c){1&e&&(o.TgZ(0,"div",0)(1,"div",1),o._uU(2," Thank you! \u{1f91f}\u{1f3fc} "),o.qZA(),o.TgZ(3,"div",2),o._uU(4," Your message has been accepted. You will receive answer really soon! "),o.qZA(),o.TgZ(5,"button",3),o.NdJ("click",function(){return c.onResend()}),o._uU(6,"send-new-message"),o.qZA()())},dependencies:[d.lW],styles:[".title-success[_ngcontent-%COMP%]{font-size:24px}.message-success[_ngcontent-%COMP%]{color:#607b96}"]}),t})();function N(t,n){1&t&&(o.TgZ(0,"div",16),o._uU(1," A simple and customizable accordion component made with functionalities provided by angular without having to use any 3rd party libraries. Ideal when you want custom basic accordion. "),o.qZA())}function I(t,n){if(1&t&&(o.ynx(0),o._UZ(1,"portfolio-links-find-me",18),o.BQk()),2&t){const e=n.$implicit;o.xp6(1),o.Q6J("text",e.text)("link",e.link)}}function w(t,n){if(1&t&&(o.TgZ(0,"div",16),o.YNc(1,I,2,2,"ng-container",17),o.qZA()),2&t){const e=o.oxw();o.xp6(1),o.Q6J("ngForOf",e.personalLinksFindMe)}}function U(t,n){if(1&t){const e=o.EpF();o.ynx(0),o.TgZ(1,"contact-me-form",19),o.NdJ("onSubmit",function(a){o.CHM(e);const Q=o.oxw();return o.KtG(Q.onSubmitForm(a))}),o.qZA(),o.BQk()}if(2&t){const e=o.oxw();o.xp6(1),o.Q6J("form",e.contactForm)}}function J(t,n){if(1&t){const e=o.EpF();o.ynx(0),o.TgZ(1,"contact-me-success",20),o.NdJ("resendNewMessage",function(){o.CHM(e);const a=o.oxw();return o.KtG(a.onResendMessage())}),o.qZA(),o.BQk()}}const S=[{path:"",component:(()=>{class t{constructor(e){this.fb=e,this.collapsing=!0,this.personalLinksFindMe=f,this.messageSend=!1}ngOnInit(){this.init()}init(){this.contactForm=this.fb.group({name:new r.NI("",[r.kI.required]),email:new r.NI("",[r.kI.required,r.kI.email]),message:new r.NI("",[r.kI.required])})}onSubmitForm(e){console.log(e),this.messageSend=!0}onResendMessage(){this.contactForm.reset(),this.messageSend=!1}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(r.qu))},t.\u0275cmp=o.Xpm({type:t,selectors:[["portfolio-contact-me-home"]],decls:23,vars:3,consts:[[1,"portfolio-container-full","portfolio-contact-me-container"],[1,"h-100","d-none","d-md-block"],[1,"row","h-100","m-0"],[1,"portfolio-contact-me-container__sidebar-desktop","col-md-3","p-0"],[1,"row","m-0","h-100"],[1,"portfolio-contact-me-container__icon-list-desktop","col-2","p-0","h-100"],[1,"col-9"],[1,"col-md-9"],[1,"mobile","d-block","d-md-none"],[1,"portfolio-contact-me-container__title","pb-4","px-4"],[3,"collapsing"],["title","contacts"],["accordionContent",""],["title","find-me-also-in"],[1,"portfolio-contact-me-container__info","px-4"],[4,"ngIf"],[1,"px-4","py-2"],[4,"ngFor","ngForOf"],[3,"text","link"],[3,"form","onSubmit"],[3,"resendNewMessage"]],template:function(e,c){1&e&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),o._UZ(6,"portfolio-icon-side-bar"),o.qZA(),o.TgZ(7,"div",6),o._uU(8," asdasd "),o.qZA()()(),o.TgZ(9,"div",7),o._uU(10," hola ancho 9 "),o.qZA()()(),o.TgZ(11,"div",8)(12,"div",9),o._uU(13," _contact-me "),o.qZA(),o.TgZ(14,"portfolio-accordion",10)(15,"accordion-item",11),o.YNc(16,N,2,0,"ng-template",12),o.qZA(),o.TgZ(17,"accordion-item",13),o.YNc(18,w,2,1,"ng-template",12),o.qZA()(),o.TgZ(19,"div",14),o.YNc(20,U,2,1,"ng-container",15),o.YNc(21,J,2,0,"ng-container",15),o.qZA()()(),o._UZ(22,"find-me-in")),2&e&&(o.xp6(14),o.Q6J("collapsing",c.collapsing),o.xp6(6),o.Q6J("ngIf",!c.messageSend),o.xp6(1),o.Q6J("ngIf",c.messageSend))},dependencies:[m.sg,m.O5,g.C,_,M.u,Z.k,h.G,v.S,y,A],styles:[".portfolio-contact-me-container[_ngcontent-%COMP%]{padding-bottom:40px!important}.portfolio-contact-me-container__info[_ngcontent-%COMP%]{max-height:100%;height:100%;display:flex;flex-direction:column;overflow:scroll;background-color:#011627}.portfolio-contact-me-container__sidebar-desktop[_ngcontent-%COMP%], .portfolio-contact-me-container__icon-list-desktop[_ngcontent-%COMP%]{border-right:1px solid #1E2D3D}"]}),t})()}];let q=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[u.Bz.forChild(S),u.Bz]}),t})();var O=i(9997);let H=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[m.ez,q,O.m]}),t})()}}]);