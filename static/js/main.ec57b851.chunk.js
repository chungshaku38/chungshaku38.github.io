(this.webpackJsonpmyportfolotiosite=this.webpackJsonpmyportfolotiosite||[]).push([[0],{106:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(0),a=n.n(i),r=n(10),o=n.n(r),s=(n(48),n(49),n(50),n(5)),l=n(4),d=n(37),j=n(38),b=n(42),h=n(40),p=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{style:{width:"10O%",height:"100%"},children:Object(c.jsx)(s.Grid,{className:"landing-grid",children:Object(c.jsxs)(s.Cell,{col:12,children:[Object(c.jsx)("img",{src:"https://scontent.fsgn5-7.fna.fbcdn.net/v/t1.0-9/53327544_1201427780019681_7002745916142649344_n.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=JdoNgvSBl_8AX_rtnjJ&_nc_ht=scontent.fsgn5-7.fna&oh=ef0a13428338ac6549bc78168cfeb790&oe=5FCACDDE",alt:"avatar",className:"avatar-img"}),Object(c.jsxs)("div",{className:"banner-text",children:[Object(c.jsx)("h1",{children:"Software Engineer"}),Object(c.jsx)("hr",{}),Object(c.jsx)("p",{children:"Java | SpringBoot | Kafka | Micro services | Event driven architecture | Event sourcing | ReactJS | Material UI"}),Object(c.jsxs)("div",{className:"social-links",children:[Object(c.jsx)("a",{href:"https://www.linkedin.com/in/chung-nguyen-31a50487/",target:"_blank",ref:"noopener noreferer",children:Object(c.jsx)("i",{className:"fa fa-linkedin","aria-hidden":"true"})}),Object(c.jsx)("a",{href:"https://www.facebook.com/chungshaku",target:"_blank",ref:"noopener noreferer",children:Object(c.jsx)("i",{className:"fa fa-facebook","aria-hidden":"true"})})]})]})]})})})}}]),n}(i.Component),g=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"Resume page"})})},m=n(41);var u=function(){var e=Object(i.useState)(0),t=Object(m.a)(e,2),n=t[0],a=t[1],r=[{imageUrl:"https://bgasparotto.com/wp-content/uploads/2017/12/spring-boot-logo.png",label:"Backend",items:[{icon:"done",title:"Spring Boot"},{icon:"done",title:"Spring Cloud"}]},{imageUrl:"https://atix.de/wp-content/uploads/apache-kafka-300x300.png",label:"Backend",items:[{icon:"done",title:"Deep knowledege about Apache Kafka"},{icon:"done",title:"Design & integrate application with Kafka"}]},{imageUrl:"https://miro.medium.com/max/960/1*7LOWVelUHYS1iqeX34Whzg.png",label:"Frontend",items:[{icon:"done",title:"ReactJS"},{icon:"done",title:"Material UI"}]},{imageUrl:"http://allvectorlogo.com/img/2019/04/logi-analytics-logo.png",label:"Reporting and data visualization",items:[{icon:"done",title:"Logi Analytics"},{icon:"done",title:"ETL for transforming data"}]},{imageUrl:"https://cdn2.iconfinder.com/data/icons/business-process-1/512/api-512.png",label:"Integration",items:[{icon:"done",title:"LDAP"},{icon:"done",title:"Stripe"}]},{imageUrl:"https://miro.medium.com/max/1024/1*KH-i7gZC9UEUELeMhnAugg.jpeg",label:"Architecture design",items:[{icon:"done",title:"Experienced with micro services"},{icon:"done",title:"Event sourcing & event driven architecture"}]},{imageUrl:"https://webdriver.io/img/webdriverio.png",label:"Test Automation ",items:[{icon:"done",title:"NodeJS, Typescript, WebdriverIO"},{icon:"done",title:"Page object model"},{icon:"done",title:"Saucelabs"}]}];return Object(c.jsxs)("div",{className:"category-tabs",children:[Object(c.jsxs)(s.Tabs,{activeTab:n,onChange:function(e){return a(e)},children:[Object(c.jsx)(s.Tab,{children:"Experience Technologies"}),Object(c.jsx)(s.Tab,{children:"Knowledge Domain"})]}),Object(c.jsx)("section",{className:"projects-grid",children:Object(c.jsx)(s.Grid,{className:"projects-grid",children:Object(c.jsx)(s.Cell,{col:12,children:Object(c.jsx)("div",{className:"content",children:function(){if(0===n)return Object(c.jsx)("div",{className:"card-container",children:Object(c.jsx)(s.Grid,{children:r.map((function(e){return Object(c.jsx)(s.Cell,{col:3,children:Object(c.jsxs)("div",{className:"cell-border",children:[Object(c.jsx)("h4",{className:"tag",children:e.label}),Object(c.jsx)("img",{src:e.imageUrl,className:"card-content-img"}),Object(c.jsx)(s.List,{children:e.items.map((function(e){return Object(c.jsx)(s.ListItem,{children:Object(c.jsxs)(s.ListItemContent,{icon:e.icon,children:[" ",e.title," "]})})}))})]})})}))})})}()})})})})]})},x=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"About page"})})},O=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"Contact page"})})},f=function(){return Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{exact:!0,path:"/",component:p}),Object(c.jsx)(l.a,{path:"/aboutme",component:x}),Object(c.jsx)(l.a,{path:"/experience",component:u}),Object(c.jsx)(l.a,{path:"/contact",component:O}),Object(c.jsx)(l.a,{path:"/resume",component:g})]})},v=n(14);var N=function(){var e=[{path:"/aboutme",title:"About"},{path:"/experience",title:"Experience"},{path:"/contact",title:"Contact"}];return Object(c.jsx)("div",{children:Object(c.jsxs)(s.Layout,{className:"appRoot",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)(s.Header,{className:"container",title:"Chung Nguyen",scroll:!0,children:Object(c.jsx)(s.Navigation,{children:e.map((function(e,t){return Object(c.jsx)(v.b,{to:e.path,children:e.title},t)}))})}),Object(c.jsx)(s.Drawer,{title:"Chung Nguyen",children:Object(c.jsx)(s.Navigation,{children:e.map((function(e,t){return Object(c.jsx)(v.b,{to:e.path,children:e.title},t)}))})})]}),Object(c.jsx)(s.Content,{children:Object(c.jsx)(f,{})})]})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,107)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),a(e),r(e)}))};n(104),n(105);o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(v.a,{children:Object(c.jsx)(N,{})})}),document.getElementById("root")),k()},48:function(e,t,n){},49:function(e,t,n){}},[[106,1,2]]]);
//# sourceMappingURL=main.ec57b851.chunk.js.map