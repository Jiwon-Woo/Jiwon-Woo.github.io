"use strict";(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[366],{8556:function(e,t,n){n.r(t),n.d(t,{Head:function(){return y},default:function(){return x}});var a=n(7294),r=n(8733),l=n(1883),o=n(8377),i=n(5221),c=n(4372);var s=e=>{let{children:t}=e;return(0,r.tZ)("section",{sx:{mb:[5,5,6],ul:{margin:0,padding:0},li:{listStyle:"none",mb:3,a:{variant:"links.listItem"}},variant:"section_bottom"}},t)},m=n(3494),u=n(4232),p=n(9706),g=n(8170),h=n(8871),E=n(1151);function d(e){const t=Object.assign({p:"p"},(0,E.ah)(),e.components),{Text:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Text",!0),a.createElement(a.Fragment,null,a.createElement(n,{children:"안녕하세요.",sx:{fontSize:[4,5,6],fontWeight:"bold",color:"heading"}}),"\n",a.createElement(t.p,null,"신입 개발자 우지원입니다.",a.createElement("br"),"\n호기심으로 시작한 개발에서 몰입의 즐거움을 경험하고 개발자의 길을 걷고 있습니다.",a.createElement("br")))}var f=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,E.ah)(),e.components);return t?a.createElement(t,e,a.createElement(d,e)):d(e)};function Z(e){const t=Object.assign({ul:"ul",li:"li",a:"a"},(0,E.ah)(),e.components),{Title:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Title",!0),a.createElement(a.Fragment,null,a.createElement(n,{text:"Projects"}),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://github.com/jiphyeonjeon-42"},"도서관 웹서비스 프로젝트")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://github.com/Together42"},"도서관 동아리 커뮤니티 웹서비스 프로젝트")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://github.com/charsyam/ossca-redis-2023#redis"},"2023 오픈소스 컨트리뷰션 아카데미 체험형 프로젝트 - Redis")),"\n"))}var b=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,E.ah)(),e.components);return t?a.createElement(t,e,a.createElement(Z,e)):Z(e)};var v=e=>{let{posts:t}=e;const{basePath:n,blogPath:a}=(0,m.Z)(),{siteTitle:h}=(0,u.Z)();return(0,r.tZ)(o.Z,null,(0,r.tZ)("h1",{sx:g.j},h),(0,r.tZ)("section",{sx:{mb:[5,6,7],p:{fontSize:[1,2,3],mt:2},variant:"section_hero"}},(0,r.tZ)(f,null)),(0,r.tZ)(i.Z,{text:"Latest Posts"},(0,r.tZ)(l.Link,{to:(0,p.Z)(`/${n}/${a}`)},"Read all posts")),(0,r.tZ)(c.Z,{posts:t,showTags:!1}),(0,r.tZ)(s,null,(0,r.tZ)(b,null)))};const y=()=>(0,r.tZ)(h.Z,null);var x=function(e){let{...t}=e;const{data:{allPost:n}}=t;return a.createElement(v,Object.assign({posts:n.nodes},t))}},6799:function(e,t,n){var a=n(8733),r=n(7294),l=n(1883),o=n(3494),i=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:c}=(0,o.Z)();return(0,a.tZ)(r.Fragment,null,t.map(((e,t)=>(0,a.tZ)(r.Fragment,{key:e.slug},!!t&&", ",(0,a.tZ)(l.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,i.Z)(`/${c}/${n}/${e.slug}`)},e.name)))))}},4372:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(8733),r=n(7294),l=n(795),o=n(1883),i=n(6799);var c=e=>{let{post:t,showTags:n=!0}=e;return(0,a.tZ)(l.xu,{mb:4},(0,a.tZ)(o.Link,{to:t.slug,sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a,fontSize:[1,2,3],color:"text"}}},t.title),(0,a.tZ)("p",{sx:{color:"secondary",mt:1,a:{color:"secondary"},fontSize:[1,1,2]}},(0,a.tZ)("time",null,t.date),t.tags&&n&&(0,a.tZ)(r.Fragment,null," — ",(0,a.tZ)(i.Z,{tags:t.tags}))))};var s=e=>{let{posts:t,className:n="",showTags:r=!0}=e;return(0,a.tZ)("section",{sx:{mb:[5,6,7]},className:n},t.map((e=>(0,a.tZ)(c,{key:e.slug,post:e,showTags:r}))))}},8871:function(e,t,n){var a=n(7294),r=n(1883),l=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:o="",image:i="",children:c=null,canonicalUrl:s=""}=e;const m=(0,l.Z)(),{siteTitle:u,siteTitleAlt:p,siteUrl:g,siteDescription:h,siteImage:E,author:d,siteLanguage:f}=m,Z={title:t?`${t} | ${u}`:p,description:n||h,url:`${g}${o||""}`,image:`${g}${i||E}`};return a.createElement(a.Fragment,null,a.createElement("html",{lang:f}),a.createElement("title",null,Z.title),a.createElement("meta",{name:"description",content:Z.description}),a.createElement("meta",{name:"image",content:Z.image}),a.createElement("meta",{property:"og:title",content:Z.title}),a.createElement("meta",{property:"og:url",content:Z.url}),a.createElement("meta",{property:"og:description",content:Z.description}),a.createElement("meta",{property:"og:image",content:Z.image}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:image:alt",content:Z.description}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:Z.title}),a.createElement("meta",{name:"twitter:url",content:Z.url}),a.createElement("meta",{name:"twitter:description",content:Z.description}),a.createElement("meta",{name:"twitter:image",content:Z.image}),a.createElement("meta",{name:"twitter:image:alt",content:Z.description}),a.createElement("meta",{name:"twitter:creator",content:d}),a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,r.withPrefix)("/favicon-32x32.png")}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,r.withPrefix)("/favicon-16x16.png")}),a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,r.withPrefix)("/apple-touch-icon.png")}),s?a.createElement("link",{rel:"canonical",href:s}):null,c)}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-homepage-query-tsx-0a04d935586089b100a9.js.map