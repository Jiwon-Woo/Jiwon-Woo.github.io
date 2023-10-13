"use strict";(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[300],{4765:function(e,t,n){n.d(t,{F:function(){return p},Z:function(){return s}});var l=n(7294),r=n(8733),a=n(795),c=n(8377),m=n(6799),u=n(8871);var i=e=>{let{post:t}=e;return null};const o=["16px","8px","4px"].map((e=>`rgba(0, 0, 0, 0.1) 0px ${e} ${e} 0px`));var E=e=>{let{data:{post:t},children:n}=e;return(0,r.tZ)(c.Z,null,(0,r.tZ)(a.X6,{as:"h1",variant:"styles.h1"},t.title),(0,r.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,r.tZ)("time",null,t.date),t.tags&&(0,r.tZ)(l.Fragment,null," — ",(0,r.tZ)(m.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,r.tZ)("span",null,t.timeToRead," min read")),(0,r.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:o.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,r.tZ)(i,{post:t}))};const p=e=>{var t,n,l;let{data:{post:a}}=e;return(0,r.tZ)(u.Z,{title:a.title,description:a.description?a.description:a.excerpt,image:a.banner?null===(t=a.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(l=n.resize)||void 0===l?void 0:l.src:void 0,pathname:a.slug,canonicalUrl:a.canonicalUrl})};function s(e){let{...t}=e;return l.createElement(E,t)}},6799:function(e,t,n){var l=n(8733),r=n(7294),a=n(1883),c=n(3494),m=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:u}=(0,c.Z)();return(0,l.tZ)(r.Fragment,null,t.map(((e,t)=>(0,l.tZ)(r.Fragment,{key:e.slug},!!t&&", ",(0,l.tZ)(a.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,m.Z)(`/${u}/${n}/${e.slug}`)},e.name)))))}},8871:function(e,t,n){var l=n(7294),r=n(1883),a=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:c="",image:m="",children:u=null,canonicalUrl:i=""}=e;const o=(0,a.Z)(),{siteTitle:E,siteTitleAlt:p,siteUrl:s,siteDescription:d,siteImage:g,author:h,siteLanguage:b}=o,k={title:t?`${t} | ${E}`:p,description:n||d,url:`${s}${c||""}`,image:`${s}${m||g}`};return l.createElement(l.Fragment,null,l.createElement("html",{lang:b}),l.createElement("title",null,k.title),l.createElement("meta",{name:"description",content:k.description}),l.createElement("meta",{name:"image",content:k.image}),l.createElement("meta",{property:"og:title",content:k.title}),l.createElement("meta",{property:"og:url",content:k.url}),l.createElement("meta",{property:"og:description",content:k.description}),l.createElement("meta",{property:"og:image",content:k.image}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{property:"og:image:alt",content:k.description}),l.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),l.createElement("meta",{name:"twitter:title",content:k.title}),l.createElement("meta",{name:"twitter:url",content:k.url}),l.createElement("meta",{name:"twitter:description",content:k.description}),l.createElement("meta",{name:"twitter:image",content:k.image}),l.createElement("meta",{name:"twitter:image:alt",content:k.description}),l.createElement("meta",{name:"twitter:creator",content:h}),l.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),l.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,r.withPrefix)("/favicon-32x32.png")}),l.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,r.withPrefix)("/favicon-16x16.png")}),l.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,r.withPrefix)("/apple-touch-icon.png")}),i?l.createElement("link",{rel:"canonical",href:i}):null,u)}},4988:function(e,t,n){n.r(t),n.d(t,{Head:function(){return m.F},default:function(){return u}});var l=n(7294),r=n(1151);function a(e){const t=Object.assign({h3:"h3",blockquote:"blockquote",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",a:"a"},(0,r.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.h3,null,"git clone"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"리포지토리를 새로운 디렉토리에 복사하는 명렁어"),"\n"),"\n",l.createElement(t.pre,null,l.createElement(t.code,null,"git clone <리모트 저장소 url>\n")),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"리모트 저장소에 있는 거의 모든 데이터를 복사하며, 프로젝트 히스토리를 전부 받아온다."),"\n",l.createElement(t.li,null,"자동으로 디폴트 브랜치의 가장 최신 버전을 보여준다."),"\n",l.createElement(t.li,null,"저장소를 복제하면 ",l.createElement(t.code,null,"origin")," 이라는 리모트 저장소가 자동으로 등록된다."),"\n",l.createElement(t.li,null,l.createElement(t.code,null,"git clone <리모트 저장소 url> <로컬 디렉토리 이름>")," 명령어를 치면 리모트 저장소 이름이 아니라 로컬 디렉토리 이름으로 복제된다."),"\n"),"\n",l.createElement(t.h3,null,"git branch"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"브랜치를 새로 생성하는 명령어"),"\n"),"\n",l.createElement(t.pre,null,l.createElement(t.code,null,"git branch <새로 생성할 브랜치 이름>\n")),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"새로 만드는 브랜치는 당시 작업하고 있던 마지막 커밋을 가리킨다."),"\n",l.createElement(t.li,null,"해당 명령어는 브랜치를 만들기만 하고 브랜치를 옮기진 않는다."),"\n"),"\n",l.createElement(t.h3,null,"git push"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"리모트 저장소에 로컬의 최신 버전을 밀어넣는 명령어"),"\n"),"\n",l.createElement(t.pre,null,l.createElement(t.code,null,"git push <리모트 저장소 이름> <브랜치 이름>\n")),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"해당 명령어는 리모트 저장소에 쓰기 권한이 있어야 사용할 수 있다."),"\n",l.createElement(t.li,null,"clone 한 시점 이후에 아무도 리모트 저장소에 push 하지 않았을 때만 바로 push가 가능하다. 만약 누군가 push 했다면, 누군가 push한 내용을 merge로 가져온 후에 push 할 수 있다."),"\n",l.createElement(t.li,null,"저장소를 복제하면 ",l.createElement(t.code,null,"origin")," 이라는 리모트 저장소가 자동으로 등록되기 때문에, 일반적으로 ",l.createElement(t.code,null,"git push origin <브랜치 이름>")," 이라고 많이 쓴다."),"\n",l.createElement(t.li,null,"만약 로컬에서 새로운 브랜치를 만들어 원격에 push 하는 상황이라면, ",l.createElement(t.code,null,"-u")," 옵션이나 ",l.createElement(t.code,null,"--set-upstream")," 옵션을 사용하여 upstream 브랜치를 설정해야한다.","\n",l.createElement(t.pre,null,l.createElement(t.code,null,"git push --set-upstream <리모트 저장소 이름> <브랜치 이름>\ngit push -u <리모트 저장소 이름> <브랜치 이름>\n")),"\n"),"\n",l.createElement(t.li,null,"upstream이 설정된 상황이라면 ",l.createElement(t.code,null,"<리모트 저장소 이름>"),"과 ",l.createElement(t.code,null,"<브랜치 이름>"),"을 생략할 수 있다."),"\n"),"\n",l.createElement(t.h3,null,"git pull"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"로컬에는 없지만 리모트 저장소에는 있는 데이터를 모두 가져오는 명령어"),"\n"),"\n",l.createElement(t.pre,null,l.createElement(t.code,null,"git pull <리모트 저장소 이름> <브랜치 이름>\n")),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"리모트 저장소의 데이터를 가져올 뿐만 아니라 자동으로 로컬 브랜치와 merge 시킬 수 있다."),"\n",l.createElement(t.li,null,"upstream이 설정된 상황이라면 ",l.createElement(t.code,null,"<리모트 저장소 이름>"),"과 ",l.createElement(t.code,null,"<브랜치 이름>"),"을 생략할 수 있다."),"\n"),"\n",l.createElement(t.h3,null,"git add"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"파일을 Tracked(스냅샷에 포함된) 상태이자, Staged(커밋으로 저장소에 기록할) 상태로 만드는 명령어"),"\n"),"\n",l.createElement(t.pre,null,l.createElement(t.code,null,"git add <파일 혹은 디렉토리의 경로>...\n")),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"git add 명령어는 파일 혹은 디렉토리의 경로를 여러개 받을 수 있다."),"\n",l.createElement(t.li,null,l.createElement(t.code,null,"git commit")," 명령 실행시, 커밋 명령어 실행 시점의 파일이 커밋되는게 아니라 마지막으로 ",l.createElement(t.code,null,"git add")," 명령어를 실행했을 시점의 파일이 커밋되어 저장소 히스토리에 남는다."),"\n"),"\n",l.createElement(t.h3,null,"git commit"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"Staged 상태의 파일을 로컬 저장소에 저장하는 명령어"),"\n"),"\n",l.createElement(t.pre,null,l.createElement(t.code,null,"git commit\n")),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"해당 명령어 실행시, Git 설정에 지정된 편집기(Vim, Emacs 등)가 실행되며, 편집기에 커밋 메세지를 적고 저장하면 된다."),"\n",l.createElement(t.li,null,"커밋 메세지를 인라인으로 넣고 싶다면 다음과 같이 ",l.createElement(t.code,null,"-m")," 옵션을 사용하면 된다.","\n",l.createElement(t.pre,null,l.createElement(t.code,null,'git commit -m "커밋 메세지"\n')),"\n"),"\n",l.createElement(t.li,null,"만약 git add 명령어를 통해 Staged 상태로 올리는 작업을 생략하고 싶다면, ",l.createElement(t.code,null,"-a")," 옵션을 사용하면 된다. 해당 옵션 사용시, Tracked 상태의 파일을 자동으로 Staged 상태로 올려준다.","\n",l.createElement(t.pre,null,l.createElement(t.code,null,'git commit -a -m "커밋 메세지"\n')),"\n"),"\n"),"\n",l.createElement(t.h3,null,"git merge"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,l.createElement(t.code,null,"B")," 브랜치를 ",l.createElement(t.code,null,"A")," 브랜치로 병합하는 명령어"),"\n"),"\n",l.createElement(t.pre,null,l.createElement(t.code,null,"git checkout <합칠 브랜치(A)>\ngit merge <합쳐질 브랜치(B)>\n")),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.code,null,"A"),"와 ",l.createElement(t.code,null,"B")," 각 브랜치의 마지막 커밋과 ",l.createElement(t.code,null,"A"),"와 ",l.createElement(t.code,null,"B"),"의 공통 조상 커밋 하나, 총 3개의 커밋을 사용한 3-way Merge의 결과를 새로운 커밋 하나로 만들어 낸다. 그리고 ",l.createElement(t.code,null,"A")," 브랜치가 해당 커밋을 가리키도록한다."),"\n"),"\n",l.createElement(t.h3,null,"git rebase"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,l.createElement(t.code,null,"A")," 브랜치와 ",l.createElement(t.code,null,"B")," 브랜치를 합치는 또다른 명령어"),"\n"),"\n",l.createElement(t.pre,null,l.createElement(t.code,null,"git checkout <Rebase할 브랜치(B)>\ngit rebase <합칠 브랜치(A)>\n")),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"두 브랜치의 공통 조상 커밋으로 이동한 후, 공통 커밋부터 ",l.createElement(t.code,null,"B")," 브랜치가 가리키는 마지막 커밋까지 diff를 만들어 어딘가에 임시로 저장해둔다. 그 다음 ",l.createElement(t.code,null,"A")," 브랜치의 마지막 커밋을 가리키게 하고, 아까 저장해둔 변경사항을 차례대로 적용하며, ",l.createElement(t.code,null,"A")," 브랜치에 새로운 커밋을 만들어 낸다. 단, 이때 ",l.createElement(t.code,null,"A")," 브랜치는 새로운 커밋이 아닌, 합치기 전 마지막 커밋을 가리키고 있다."),"\n",l.createElement(t.li,null,"두 브랜치를 서로 동기화 하기 위해서는 Fast-forward를 시키면 된다. 아래 명령 수행시, ",l.createElement(t.code,null,"A")," 브랜치가 rebase를 통해 생성된 새로운 커밋을 가리키게 된다.","\n",l.createElement(t.pre,null,l.createElement(t.code,null,"git checkout <합칠 브랜치(A)>\ngit merge <Rebase할 브랜치(B)>\n")),"\n"),"\n",l.createElement(t.li,null,"rebase는 merge와 최종 결과물은 같고 커밋 히스토리만 다르다. rebase를 하면 커밋 히스토리가 선형이 되어 좀 더 깨끗한 히스토리를 만든다."),"\n"),"\n",l.createElement(t.h3,null,"git cherry-pick"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"현재 브랜치(A)에 커밋 하나(C)만 rebase 하는 명령어"),"\n"),"\n",l.createElement(t.pre,null,l.createElement(t.code,null,"git checkout <합칠 브랜치(A)>\ngit cherry-pick <rebase할 커밋 해시(C)>\n")),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.code,null,"C")," 커밋에서 변경된 내용을 ",l.createElement(t.code,null,"A")," 브랜치에 적용하여 새로운 커밋을 생성합니다. cherry-pick 완료 후, ",l.createElement(t.code,null,"A")," 브랜치는 새로운 커밋을 가리키고 있다."),"\n"),"\n",l.createElement(t.h3,null,"참고자료"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://git-scm.com/book/ko/v2"},"Pro Git book 한국어 버전")),"\n"))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(a,e)):a(e)},m=n(4765);function u(e){return l.createElement(m.Z,e,l.createElement(c,e))}m.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-ossca-redis-2023-index-mdx-a5c1070c1b028a5a7c91.js.map