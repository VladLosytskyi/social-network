"use strict";(self.webpackChunksocial_network=self.webpackChunksocial_network||[]).push([[644],{7644:function(s,e,n){n.r(e),n.d(e,{default:function(){return ns}});var a=n(2791),t=n(364),i=n(6871),o="Profile_profile__VHbzQ",l=n(2982),r="MyPosts_newPostForm__AK0gB",c="MyPosts_postsBlock__lB-pf",u="MyPosts_posts__GSiZ2",d="MyPosts_blueButton__b6Bow",f="Post_post__wW6-Y",m="Post_profileImage__hiFi6",h="Post_postText__xEaxK",x="Post_likes__K9KVP",j=n(393),p=n(184),v=function(s){var e=s.avatar,n=s.message,a=s.likesCount;return(0,p.jsxs)("div",{className:f,children:[(0,p.jsx)("img",{className:m,src:(null===e||void 0===e?void 0:e.small)||j,alt:"Profile avatar"}),(0,p.jsxs)("div",{children:[(0,p.jsx)("div",{className:h,children:n}),(0,p.jsxs)("div",{className:x,children:[a,(0,p.jsx)("span",{children:" likes"})]})]})]})},_=n(6139),N=n(704),g=n(3459),b=n(3098),P=[b.C,(0,b.D)(50)],k=(0,N.Z)({form:"profileMyPostsForm"})((function(s){var e=s.handleSubmit;return(0,p.jsxs)("form",{onSubmit:e,children:[(0,p.jsx)("div",{className:r,children:(0,p.jsx)(_.Z,{component:g.g,name:"newPostText",placeholder:"Enter your post text...",validate:P})}),(0,p.jsx)("div",{children:(0,p.jsx)("button",{className:d,children:"Add post"})})]})})),S=n(7973),C=function(s){return s.profilePage.profile},I=function(s){var e;return null===(e=s.profilePage.profile)||void 0===e?void 0:e.photos},F=function(s){return s.profilePage.status},y=function(s){return s.profilePage.posts},A=a.memo((function(){var s=(0,t.v9)(y),e=(0,t.v9)(I),n=(0,t.I0)(),a=(0,l.Z)(s).reverse().map((function(s){return(0,p.jsx)(v,{avatar:e,message:s.message,likesCount:s.likesCount},s.id)}));return(0,p.jsxs)("div",{className:c,children:[(0,p.jsx)("h3",{children:"My posts"}),(0,p.jsx)(k,{onSubmit:function(s){n((0,S.Pi)(s.newPostText))}}),(0,p.jsx)("div",{className:u,children:a})]})})),w=n(5861),M=n(885),Z=n(7757),O=n.n(Z),D="ProfileInfo_mr5__4XyWt",E="ProfileInfo_blueText__HM4iA",J="ProfileInfo_profileInfo__QG8TK",B="ProfileInfo_userAvatarContainer__Ffhil",T="ProfileInfo_userAvatar__+uFDb",K="ProfileInfo_setUserAvatar__bNSSg",U="ProfileInfo_profileData__m1bqM",V="ProfileInfo_status__YrBI5",Y="ProfileInfo_statusInput__XlSnR",Q="ProfileInfo_fieldsContainer__u9xNU",R="ProfileInfo_fieldContainer__EXeV+",W="ProfileInfo_contact__sQB8W",X="ProfileInfo_error__Vu9Ki",q="ProfileInfo_buttonsContainer__FEDZe",G="ProfileInfo_blueButton__E5ofx",H=n(3445),L=function(s){var e=s.initialStatus,n=s.updateStatus,t=s.isOwner,i=(0,a.useState)(!1),o=(0,M.Z)(i,2),l=o[0],r=o[1],c=(0,a.useState)(e),u=(0,M.Z)(c,2),d=u[0],f=u[1];(0,a.useEffect)((function(){f(e)}),[e]);return(0,p.jsx)("div",{children:t?(0,p.jsx)(p.Fragment,{children:l?(0,p.jsxs)("div",{className:V,children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("span",{className:E,children:"Status:"}),(0,p.jsx)("input",{type:"text",onChange:function(s){f(s.currentTarget.value)},value:d,autoFocus:!0,className:Y})]}),(0,p.jsxs)("div",{className:q,children:[(0,p.jsx)("button",{onClick:function(){r(!1),n(d)},className:G,style:{marginRight:"10px"},children:"Save Changes"}),(0,p.jsx)("button",{onClick:function(){r(!1)},className:G,children:"Discard Changes"})]})]}):(0,p.jsxs)("div",{className:V,children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("span",{className:E,children:"Status: "}),d||"No status"]}),(0,p.jsx)("button",{onClick:function(){r(!0)},className:G,children:"Change Status"})]})}):(0,p.jsx)("div",{className:V,children:(0,p.jsxs)("div",{children:[(0,p.jsx)("span",{className:E,children:"Status: "}),(0,p.jsx)("span",{children:d||"No status"})]})})})},z=function(s){var e=s.profile,n=s.isOwner,a=s.activateEditMode;return(0,p.jsxs)("div",{className:U,children:[(0,p.jsxs)("div",{className:Q,children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("span",{className:"".concat(E," ").concat(D),children:"Full Name:"}),e.fullName]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("span",{className:"".concat(E," ").concat(D),children:"About Me:"}),e.aboutMe||"No info"]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("span",{className:"".concat(E," ").concat(D),children:"Looking for a job:"}),e.lookingForAJob?"Yes":"No"]}),e.lookingForAJob&&(0,p.jsxs)("div",{children:[(0,p.jsx)("span",{className:"".concat(E," ").concat(D),children:"My Professional Skills:"}),e.lookingForAJobDescription||"No Skills"]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("span",{className:"".concat(E," ").concat(D),children:"Contacts:"}),0!==Object.keys(e.contacts).filter((function(s){return e.contacts[s]})).length?Object.keys(e.contacts).filter((function(s){return e.contacts[s]})).map((function(s){return(0,p.jsx)("div",{className:W,children:(0,p.jsx)("a",{href:e.contacts[s],target:"_blank",children:s})},s)})):(0,p.jsx)(p.Fragment,{children:"No Contacts"})]})]}),n&&(0,p.jsx)("div",{className:q,children:(0,p.jsx)("button",{className:G,onClick:a,children:"Edit Info"})})]})},$=(0,N.Z)({form:"editProfileData"})((function(s){var e=s.contacts,n=s.discardChanges,a=s.handleSubmit,t=s.error;return(0,p.jsxs)("form",{className:U,onSubmit:a,children:[(0,p.jsxs)("div",{className:Q,children:[(0,p.jsxs)("div",{className:R,children:[(0,p.jsx)("label",{htmlFor:"fullName",className:E,children:"Full Name:"}),(0,p.jsx)(_.Z,{component:g.I,name:"fullName",id:"fullName",type:"text",placeholder:"Your full name"})]}),(0,p.jsxs)("div",{className:R,children:[(0,p.jsx)("label",{htmlFor:"aboutMe",className:E,children:"About Me:"}),(0,p.jsx)(_.Z,{component:g.g,name:"aboutMe",id:"aboutMe",type:"text",placeholder:"Tell about yourself"})]}),(0,p.jsxs)("div",{className:R,children:[(0,p.jsx)("label",{htmlFor:"lookingForAJob",className:E,children:"Looking For a Job:"}),(0,p.jsx)(_.Z,{component:g.I,name:"lookingForAJob",id:"lookingForAJob",type:"checkbox"})]}),(0,p.jsxs)("div",{className:R,children:[(0,p.jsx)("label",{htmlFor:"lookingForAJobDescription",className:E,children:"My Professional Skills:"}),(0,p.jsx)(_.Z,{component:g.g,name:"lookingForAJobDescription",id:"lookingForAJobDescription",type:"text",placeholder:"Your professional skills"})]}),(0,p.jsxs)("div",{className:R,children:[(0,p.jsx)("span",{className:E,children:"Contacts:"}),Object.keys(e).map((function(s){return(0,p.jsxs)("div",{className:W,children:[(0,p.jsxs)("label",{className:E,htmlFor:s,children:[s,": "]}),(0,p.jsx)(_.Z,{component:g.I,name:"contacts.".concat(s),id:s,type:"url",placeholder:s})]},s)}))]})]}),t&&(0,p.jsx)("div",{className:X,children:t}),(0,p.jsxs)("div",{className:q,children:[(0,p.jsx)("button",{className:G,style:{marginRight:"10px"},children:"Save Changes"}),(0,p.jsx)("button",{className:G,onClick:n,children:"Discard Changes"})]})]})})),ss=function(s){var e=s.profile,n=s.status,t=s.updateProfile,i=s.updateStatus,o=s.postUserAvatar,l=s.isOwner,r=(0,a.useState)(!1),c=(0,M.Z)(r,2),u=c[0],d=c[1],f=function(){var s=(0,w.Z)(O().mark((function s(e){return O().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,t(e);case 2:d(!1);case 3:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}();return e?(0,p.jsxs)("div",{className:J,children:[(0,p.jsxs)("div",{className:B,children:[(0,p.jsx)("img",{src:e.photos.large||j,className:T,alt:"Profile photo"}),l&&(0,p.jsxs)("label",{className:"".concat(K," ").concat(G),children:[(0,p.jsx)("input",{type:"file",accept:"image/png, image/jpg, image/gif, image/jpeg",onChange:function(s){var e;null!==(e=s.target.files)&&void 0!==e&&e.length&&o(s.target.files[0])}}),(0,p.jsx)("span",{children:"Change Avatar"})]})]}),(0,p.jsx)(L,{initialStatus:n,updateStatus:i,isOwner:l}),u?(0,p.jsx)($,{initialValues:e,contacts:e.contacts,discardChanges:function(){return d(!1)},onSubmit:f}):(0,p.jsx)(z,{profile:e,isOwner:l,activateEditMode:function(){return d(!0)}})]}):(0,p.jsx)(H.Z,{})},es=n(7437),ns=function(){var s=(0,t.v9)(C),e=(0,t.v9)(F),n=(0,t.v9)(es.qO),l=(0,t.I0)(),r=(0,i.s0)(),c=(0,i.UO)();return(0,a.useEffect)((function(){var s=+c.userId;s||(s=n)||r("/login"),l((0,S.SO)(s)),l((0,S.$b)(s))}),[c.userId]),(0,p.jsxs)("section",{className:o,children:[(0,p.jsx)(ss,{profile:s,status:e,updateProfile:function(s){l((0,S.Fw)(s))},updateStatus:function(s){l((0,S.dw)(s))},postUserAvatar:function(s){l((0,S.yi)(s))},isOwner:!c.userId}),(0,p.jsx)(A,{})]})}}}]);
//# sourceMappingURL=644.c1e4c147.chunk.js.map