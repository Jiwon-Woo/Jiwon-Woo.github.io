"use strict";(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[996],{4765:function(e,t,n){n.d(t,{F:function(){return g},Z:function(){return u}});var a=n(7294),r=n(8733),l=n(795),i=n(8377),c=n(6799),s=n(8871);var o=e=>{let{post:t}=e;return null};const m=["16px","8px","4px"].map((e=>`rgba(0, 0, 0, 0.1) 0px ${e} ${e} 0px`));var p=e=>{let{data:{post:t},children:n}=e;return(0,r.tZ)(i.Z,null,(0,r.tZ)(l.X6,{as:"h1",variant:"styles.h1"},t.title),(0,r.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,r.tZ)("time",null,t.date),t.tags&&(0,r.tZ)(a.Fragment,null," — ",(0,r.tZ)(c.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,r.tZ)("span",null,t.timeToRead," min read")),(0,r.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:m.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,r.tZ)(o,{post:t}))};const g=e=>{var t,n,a;let{data:{post:l}}=e;return(0,r.tZ)(s.Z,{title:l.title,description:l.description?l.description:l.excerpt,image:l.banner?null===(t=l.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(a=n.resize)||void 0===a?void 0:a.src:void 0,pathname:l.slug,canonicalUrl:l.canonicalUrl})};function u(e){let{...t}=e;return a.createElement(p,t)}},6799:function(e,t,n){var a=n(8733),r=n(7294),l=n(1883),i=n(3494),c=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:s}=(0,i.Z)();return(0,a.tZ)(r.Fragment,null,t.map(((e,t)=>(0,a.tZ)(r.Fragment,{key:e.slug},!!t&&", ",(0,a.tZ)(l.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,c.Z)(`/${s}/${n}/${e.slug}`)},e.name)))))}},8871:function(e,t,n){var a=n(7294),r=n(1883),l=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:i="",image:c="",children:s=null,canonicalUrl:o=""}=e;const m=(0,l.Z)(),{siteTitle:p,siteTitleAlt:g,siteUrl:u,siteDescription:d,siteImage:h,author:f,siteLanguage:E}=m,b={title:t?`${t} | ${p}`:g,description:n||d,url:`${u}${i||""}`,image:`${u}${c||h}`};return a.createElement(a.Fragment,null,a.createElement("html",{lang:E}),a.createElement("title",null,b.title),a.createElement("meta",{name:"description",content:b.description}),a.createElement("meta",{name:"image",content:b.image}),a.createElement("meta",{property:"og:title",content:b.title}),a.createElement("meta",{property:"og:url",content:b.url}),a.createElement("meta",{property:"og:description",content:b.description}),a.createElement("meta",{property:"og:image",content:b.image}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:image:alt",content:b.description}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:b.title}),a.createElement("meta",{name:"twitter:url",content:b.url}),a.createElement("meta",{name:"twitter:description",content:b.description}),a.createElement("meta",{name:"twitter:image",content:b.image}),a.createElement("meta",{name:"twitter:image:alt",content:b.description}),a.createElement("meta",{name:"twitter:creator",content:f}),a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,r.withPrefix)("/favicon-32x32.png")}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,r.withPrefix)("/favicon-16x16.png")}),a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,r.withPrefix)("/apple-touch-icon.png")}),o?a.createElement("link",{rel:"canonical",href:o}):null,s)}},9666:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c.F},default:function(){return s}});var a=n(7294),r=n(1151);function l(e){const t=Object.assign({h3:"h3",p:"p",em:"em",blockquote:"blockquote",a:"a",span:"span",pre:"pre",code:"code"},(0,r.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h3,null,"의문점 🤔"),"\n",a.createElement(t.p,null,"TypeScript와 NestJS로 개발하던 도중, 문득 그런 의문이 들었다."),"\n",a.createElement(t.p,null,a.createElement(t.em,null,"'DTO는 왜 class로 구현하는걸까..?'")),"\n",a.createElement(t.p,null,"그저 타입 체크를 위해서라면 interface나 type으로도 가능한게 아닌가?",a.createElement("br"),"\n그런데 왜 많은 레퍼런스에서, 그리고 공식 문서에서도 class로 DTO를 구현하는 걸까?"),"\n",a.createElement("br"),"\n",a.createElement("br"),"\n",a.createElement(t.h3,null,"💡 궁금증 해결..!"),"\n",a.createElement(t.p,null,"의외로 궁금증은 빠르게 해결할 수 있었다.. ",a.createElement("br"),"\n심지어 공식 문서에 기재 되어 있던 내용이었던 것..."),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,a.createElement(t.a,{href:"https://blog.jh8459.com/2022-06-24-TIL"},"NestJS DTO vs Interface"),a.createElement("br"),"\n",a.createElement(t.a,{href:"https://docs.nestjs.com/controllers#request-payloads"},"NestJS 공식문서 - Controllers - Request payloads")),"\n"),"\n",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 960px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 80.41666666666667%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB9ElEQVR42pVUaZOiQAyd///v9sOOQtPNIYgHdHN6IPgmiUPV1ohOLVXPQAgv6eTFDx360GGIuqngmg79ZcDlNuE8jGJv0x3/c310bYn06GB2DaJDg+RIdl8h2FqY3GFbNti7Fm1/xu12w+V6xf3+OskH/3StQ57FUEoj3WxQFEdY61DOcBWsc6jrGra0GMfxNSHnupxrqDDAp06h4i2yosY0TRipook+Hv8B+7lSxhLxd4UWyvsDEyUwcYzV2ofv+/A8T6zvUZ+1RhAE4gtUIP40TZ+OL4Rt11GwhjEaGzqyMQahCbFarQT8MZPFlIytJCEcDoflCvu+k+AoihDSxDkzPydxgjzPJQn7+B37GXzP4KM/EZ5OJ3mZJMmDiCyTMwmTcTXs48qj8OGfk3NPFyrsJYDJOFgpJTbLsscxqWczIfdSkm1SlGX53EN2zBObMQzD4kR/4qUOr0QQSW8SNLQxfDGZZCdwDXz/s5olgYsOx/MV7bFAURZwtnwr3F9XT4ZCaxUle3gkahXntIo1jnWPrGyxq3rktsfOdjhUJ0o2ScK3whYd0vS0iWDIBjrEmsT8d7WGRwP5JKGz2Neeksny0GZdLgq7aRoYbSTA0BR5oo52t/qGtVaeLbWDLU+XLX+3fOShpcWngMqRhE5v/01+6+EXByzIuUR5fikAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="slack"\n        title=""\n        src="/static/f5d40168a48e24b5460b7f2644200fcf/7d769/slack.png"\n        srcset="/static/f5d40168a48e24b5460b7f2644200fcf/5243c/slack.png 240w,\n/static/f5d40168a48e24b5460b7f2644200fcf/ab158/slack.png 480w,\n/static/f5d40168a48e24b5460b7f2644200fcf/7d769/slack.png 960w,\n/static/f5d40168a48e24b5460b7f2644200fcf/87339/slack.png 1440w,\n/static/f5d40168a48e24b5460b7f2644200fcf/298f8/slack.png 1560w"\n        sizes="(max-width: 960px) 100vw, 960px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"But first (if you use TypeScript), we need to determine the DTO (Data Transfer Object) schema.\nA DTO is an object that defines how the data will be sent over the network.\nWe could determine the DTO schema by using TypeScript interfaces, or by simple classes.\nInterestingly, we recommend using classes here. Why?\nClasses are part of the JavaScript ES6 standard, and therefore they are preserved as real entities in the compiled JavaScript.\nOn the other hand, since TypeScript interfaces are removed during the transpilation, Nest can't refer to them at runtime.\nThis is important because features such as Pipes enable additional possibilities when they have access to the metatype of the variable at runtime.\n",a.createElement("br"),a.createElement("br"),"TypeScript를 사용하는 경우 DTO 스키마를 결정해야 합니다. DTO는 네트워크를 통해 데이터가 전송되는 방법을 정의하는 개체입니다.\nTypeScript Interface나 간단한 class를 사용하여 DTO 스키마를 결정할 수 있습니다.\n흥미롭게도 이 상황에서는 class를 사용하는 것이 좋습니다.\nclass는 JavaScript ES6 표준의 일부이므로 JavaScript로 컴파일해도 실제 객체로 남아있지만, TypeScript interface는 변환 중에 제거되므로 Nest가 런타임에 interface를 참조할 수 없기 때문입니다.\nPipe와 같은 기능은 런타임에 변수의 메타타입에 접근할 수 있을 때 유용하므로, 런타임 시 참조 가능 여부는 중요합니다.\n",a.createElement("br"),a.createElement("br"),"출처: ",a.createElement(t.a,{href:"https://docs.nestjs.com/controllers#request-payloads"},"NestJS 공식 문서")),"\n"),"\n",a.createElement("br"),"\n",a.createElement(t.p,null,"class는 컴파일 이후에도 남아있어 런타임에도 참조할 수 있다는 점이 DTO를 class로 구현하는 핵심적인 이유였다.",a.createElement("br"),"\nDTO는 데이터 전송에 쓰는 객체인 만큼 데이터 타입이나 값에 대한 유효성 검사를 수행하는 경우가 많은데, 이를 위해서는 런타임에도 DTO에 접근할 수 있어야한다...!"),"\n",a.createElement("br"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-typescript"},"export class CreateMeetupDto {\n  @ApiProperty({\n    description: '이벤트 제목 (최대 50자)',\n    minLength: 1,\n    maxLength: 50,\n  })\n  @Transform((params) =>\n    typeof params.value === 'string' ? params.value.trim() : params.value\n  )\n  @IsString()\n  @IsNotEmpty()\n  @MaxLength(50)\n  title: string;\n\n  @ApiProperty({\n    description: '이벤트 설명 (최대 255자)',\n    minLength: 1,\n    maxLength: 255,\n  })\n  @IsString()\n  @Transform((params) => params.value.trim())\n  @IsNotEmpty()\n  @MaxLength(255)\n  description: string;\n}\n")),"\n",a.createElement("br"),"\n",a.createElement(t.p,null,"위는 내가 실제로 프로젝트에서 사용하는 DTO 중 하나다.",a.createElement("br"),"\n해당 DTO에서도 ",a.createElement(t.code,null,"@IsString()"),", ",a.createElement(t.code,null,"@IsNotEmpty()"),", ",a.createElement(t.code,null,"@MaxLength(255)")," 등을 활용하여 유효성 검사를 하는 것을 볼 수 있다."))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?a.createElement(t,e,a.createElement(l,e)):l(e)},c=n(4765);function s(e){return a.createElement(c.Z,e,a.createElement(i,e))}c.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-together-index-mdx-c46f339f3b144c5853e3.js.map