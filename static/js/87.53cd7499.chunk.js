"use strict";(self.webpackChunksocial_network=self.webpackChunksocial_network||[]).push([[87],{3087:function(s,e,t){t.r(e),t.d(e,{default:function(){return W}});var a=t(8683),r=t(2791),n=t(7781),i=t(364),o=t(6871),u=t(6070),l="Profile_profile__n+LxT",c=t(2982),d="MyPosts_postsBlock__xF1+G",f="MyPosts_posts__qWDsY",h="MyPosts_blueButton__CybSN",p="Post_post__G6WIJ",x="Post_profileImage__DT8Ht",j="Post_postText__8zl55",m="Post_likes__4-pyj",_=t(184),v=function(s){var e=s.message,t=s.likesCount;return(0,_.jsxs)("div",{className:p,children:[(0,_.jsx)("img",{className:x,src:"https://cdn-icons-png.flaticon.com/512/1464/1464795.png",alt:"Profile avatar"}),(0,_.jsxs)("div",{children:[(0,_.jsx)("div",{className:j,children:e}),(0,_.jsxs)("div",{className:m,children:[t,(0,_.jsx)("span",{children:" likes"})]})]})]})},N=t(6139),P=t(704),g=t(5441),I=t(7791),S=[I.C,(0,I.D)(50)],k=(0,P.Z)({form:"profileMyPostsForm"})((function(s){var e=s.handleSubmit;return(0,_.jsxs)("form",{onSubmit:e,children:[(0,_.jsx)("div",{children:(0,_.jsx)(N.Z,{component:g.g,name:"newPostText",placeholder:"Enter your post text...",validate:S})}),(0,_.jsx)("div",{children:(0,_.jsx)("button",{className:h,children:"Add post"})})]})})),C=r.memo((function(s){var e=(0,c.Z)(s.posts).reverse().map((function(s){return(0,_.jsx)(v,{message:s.message,likesCount:s.likesCount},s.id)}));return(0,_.jsxs)("div",{className:d,children:[(0,_.jsx)("h3",{children:"My posts"}),(0,_.jsx)(k,{onSubmit:function(e){s.addPost(e.newPostText)}}),(0,_.jsx)("div",{className:f,children:e})]})})),b={addPost:u.q2},T=(0,i.$j)((function(s){return{posts:s.profilePage.posts}}),b)(C),U="ProfileInfo_blueText__aphDT",y="ProfileInfo_profileInfo__rys-e",Z="ProfileInfo_userAvatar__TFwT5",w="ProfileInfo_profileData__0LXHh",D="ProfileInfo_status__FQ334",F="ProfileInfo_statusInput__-cX0T",M="ProfileInfo_blueButton__VqmxD",q=t(393),A=t(6135),B=t(885),E=function(s){var e=(0,r.useState)(!1),t=(0,B.Z)(e,2),a=t[0],n=t[1],i=(0,r.useState)(s.status),o=(0,B.Z)(i,2),u=o[0],l=o[1];(0,r.useEffect)((function(){l(s.status)}),[s.status]);return(0,_.jsx)("div",{children:s.profile.userId===s.authorisedUserId?(0,_.jsx)(_.Fragment,{children:a?(0,_.jsxs)("div",{className:D,children:[(0,_.jsxs)("div",{children:[(0,_.jsx)("span",{className:U,children:"Status:"}),(0,_.jsx)("input",{onChange:function(s){l(s.currentTarget.value)},value:u,autoFocus:!0,className:F})]}),(0,_.jsxs)("div",{children:[(0,_.jsx)("button",{onClick:function(){n(!1),s.updateStatus(u)},className:M,children:"Save Changes"}),(0,_.jsx)("button",{onClick:function(){n(!1)},className:M,children:"Discard Changes"})]})]}):(0,_.jsxs)("div",{className:D,children:[(0,_.jsxs)("div",{children:[(0,_.jsx)("span",{className:U,children:"Status: "}),(0,_.jsx)("span",{children:s.status||"No status"})]}),(0,_.jsx)("button",{onClick:function(){n(!0)},className:M,children:"Change Status"})]})}):(0,_.jsx)("div",{className:D,children:(0,_.jsxs)("div",{children:[(0,_.jsx)("span",{className:U,children:"Status: "}),(0,_.jsx)("span",{children:s.status||"No status"})]})})})},H=function(s){var e=s.profile,t=s.authorisedUserId,a=s.status,r=s.updateStatus;return(0,_.jsx)(_.Fragment,{children:e?(0,_.jsxs)("div",{className:y,children:[(0,_.jsx)("img",{src:e.photos.large||q,className:Z,alt:"Profile photo"}),(0,_.jsxs)("div",{className:w,children:[(0,_.jsx)("span",{className:U,children:"Nickname: "}),(0,_.jsx)("span",{children:e.fullName}),(0,_.jsx)(E,{profile:e,authorisedUserId:t,status:a,updateStatus:r})]})]}):(0,_.jsx)(A.Z,{})})},G=function(s){var e=s.profile,t=s.authorisedUserId,a=s.status,r=s.updateStatus;return(0,_.jsxs)("section",{className:l,children:[(0,_.jsx)(H,{profile:e,authorisedUserId:t,status:a,updateStatus:r}),(0,_.jsx)(T,{})]})};var L={getUserProfile:u.et,getStatus:u.lR,updateStatus:u.Nf},W=(0,n.qC)((0,i.$j)((function(s){return{profile:s.profilePage.profile,status:s.profilePage.status,authorisedUserId:s.auth.userId,isAuth:s.auth.isAuth}}),L),(function(s){return function(e){var t=(0,o.TH)(),r=(0,o.s0)(),n=(0,o.UO)();return(0,_.jsx)(s,(0,a.Z)((0,a.Z)({},e),{},{router:{location:t,navigate:r,params:n}}))}}))((function(s){return(0,r.useEffect)((function(){var e=s.router.params.userId;e||(e=s.authorisedUserId)||s.history.push("/login"),s.getUserProfile(e),s.getStatus(e)}),[s.router.params.userId]),(0,_.jsx)(G,{profile:s.profile,authorisedUserId:s.authorisedUserId,status:s.status,updateStatus:s.updateStatus})}))}}]);
//# sourceMappingURL=87.53cd7499.chunk.js.map