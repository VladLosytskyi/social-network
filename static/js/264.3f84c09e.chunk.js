"use strict";(self.webpackChunksocial_network=self.webpackChunksocial_network||[]).push([[264],{9264:function(s,e,n){n.r(e),n.d(e,{default:function(){return Z}});var a=n(7781),t=n(364),i="Messages_chats__5sSzs",r="Messages_chatsItems__hDNq9",c="Messages_active__b93f2",u="Messages_messages__8s+pC",m="Messages_message__O19dD",o="Messages_addMessageForm__3sFj0",d="Messages_button__ccvvi",g=n(3504),l=n(184),h=function(s){var e=s.nickname,n=s.name,a="/messages/"+e;return(0,l.jsx)(g.OL,{to:a,className:function(s){return s.isActive?c:""},children:n})},_=function(s){var e=s.message;return(0,l.jsx)("div",{className:m,children:e})},f=n(6139),j=n(704),v=n(3459),x=n(3098),M=[x.C,(0,x.D)(100)],b=(0,j.Z)({form:"messagesAddMessageForm"})((function(s){var e=s.handleSubmit;return(0,l.jsxs)("form",{onSubmit:e,className:o,children:[(0,l.jsx)("div",{children:(0,l.jsx)(f.Z,{component:v.g,name:"newMessageText",placeholder:"Enter your message...",validate:M})}),(0,l.jsx)("div",{children:(0,l.jsx)("button",{className:d,children:"Send message"})})]})})),k=function(s){var e=s.messagesPage,n=s.sendMessage,a=e.chats.map((function(s){return(0,l.jsx)(h,{name:s.name,nickname:s.nickname},s.id)})),t=e.messages.map((function(s){return(0,l.jsx)(_,{message:s.message},s.id)}));return(0,l.jsxs)("div",{className:i,children:[(0,l.jsx)("div",{className:r,children:a}),(0,l.jsxs)("div",{className:u,children:[(0,l.jsx)("div",{children:t}),(0,l.jsx)(b,{onSubmit:function(s){n(s.newMessageText)}})]})]})},p=n(2350),N=n(8683),w=n(5987),A=n(6871),C=["isAuth"],S=function(s){return{isAuth:s.auth.isAuth}};var F={sendMessage:p.b},Z=(0,a.qC)((0,t.$j)((function(s){return{messagesPage:s.messagesPage}}),F),(function(s){return(0,t.$j)(S)((function(e){var n=e.isAuth,a=(0,w.Z)(e,C);return n?(0,l.jsx)(s,(0,N.Z)({},a)):(0,l.jsx)(A.Fg,{to:"/login"})}))}))(k)}}]);
//# sourceMappingURL=264.3f84c09e.chunk.js.map