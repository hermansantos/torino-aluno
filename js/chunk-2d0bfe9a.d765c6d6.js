(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bfe9a"],{4019:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"navbar-demo"}},[a("navbar-default"),a("navbar-input"),a("navbar-type"),a("navbar-color"),a("navbar-collapse")],1)},r=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vx-card",{attrs:{title:"Default","code-toggler":""}},[a("p",[t._v("To add a navbar we have the component "),a("code",[t._v("vs-navbar")]),t._v(", there is a series of sub components to determine internal elements "),a("code",[t._v("vs-navbar-title")]),t._v(", "),a("code",[t._v("vs-spacer")])]),a("div",{staticClass:"mt-5"},[a("vs-navbar",{staticClass:"p-2",model:{value:t.activeItem,callback:function(e){t.activeItem=e},expression:"activeItem"}},[a("div",{attrs:{slot:"title"},slot:"title"},[a("vs-navbar-title",[a("span",[t._v("Vuexy")])])],1),a("vs-navbar-item",{attrs:{index:"0"}},[a("a",{attrs:{href:"#"}},[t._v("Home")])]),a("vs-navbar-item",{attrs:{index:"1"}},[a("a",{attrs:{href:"#"}},[t._v("News")])]),a("vs-navbar-item",{attrs:{index:"2"}},[a("a",{attrs:{href:"#"}},[t._v("Update")])])],1)],1),a("template",{slot:"codeContainer"},[t._v('\n<template>\n  <vs-navbar v-model="activeItem" class="p-2">\n\n    <div slot="title">\n      <vs-navbar-title>\n        <span>Vuexy</span>\n      </vs-navbar-title>\n    </div>\n\n    <vs-navbar-item index="0">\n      <a href="#">Home</a>\n    </vs-navbar-item>\n\n    <vs-navbar-item index="1">\n      <a href="#">News</a>\n    </vs-navbar-item>\n\n    <vs-navbar-item index="2">\n      <a href="#">Update</a>\n    </vs-navbar-item>\n  </vs-navbar>\n</template>\n\n<script>\nexport default {\n  data: () => ({\n    activeItem: 0\n  })\n}\n<\/script>\n        ')])],2)},v=[],l={data:function(){return{activeItem:0}}},o=l,i=a("2877"),c=Object(i["a"])(o,s,v,!1,null,null,null),d=c.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vx-card",{attrs:{title:"Input","code-toggler":""}},[a("p",[t._v("You may need an entry in the menu to simply use the "),a("code",[t._v("vs-input")]),t._v(" component, for example if you need a search engine")]),a("div",{staticClass:"mt-5"},[a("vs-navbar",{staticClass:"p-2",model:{value:t.activeItem,callback:function(e){t.activeItem=e},expression:"activeItem"}},[a("div",{attrs:{slot:"title"},slot:"title"},[a("vs-navbar-title",[a("span",[t._v("Vuexy")])])],1),a("vs-navbar-item",{attrs:{index:"0"}},[a("a",{attrs:{href:"#"}},[t._v("Home")])]),a("vs-navbar-item",{attrs:{index:"1"}},[a("a",{attrs:{href:"#"}},[t._v("News")])]),a("vs-navbar-item",{attrs:{index:"2"}},[a("a",{attrs:{href:"#"}},[t._v("Update")])]),a("vs-input",{staticClass:"input-rounded-full",attrs:{"icon-pack":"feather",icon:"icon-search",placeholder:"Search","icon-no-border":"",size:"small"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),a("template",{slot:"codeContainer"},[t._v('\n<template>\n  <vs-navbar v-model="activeItem" class="p-2">\n\n    <div slot="title">\n      <vs-navbar-title>\n        <span>Vuexy</span>\n      </vs-navbar-title>\n    </div>\n\n    <vs-navbar-item index="0">\n      <a href="#">Home</a>\n    </vs-navbar-item>\n\n    <vs-navbar-item index="1">\n      <a href="#">News</a>\n    </vs-navbar-item>\n\n    <vs-navbar-item index="2">\n      <a href="#">Update</a>\n    </vs-navbar-item>\n\n    <vs-input icon-pack="feather" icon="icon-search" placeholder="Search" v-model="search" />\n  </vs-navbar>\n</template>\n\n<script>\nexport default {\n  data: () => ({\n    activeItem: 0,\n    search: "",\n  })\n}\n<\/script>\n        ')])],2)},m=[],u={data:function(){return{activeItem:0,search:""}}},b=u,x=Object(i["a"])(b,p,m,!1,null,null,null),f=x.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vx-card",{attrs:{title:"Type","code-toggler":""}},[a("p",[t._v("If you want you can change the style of the buttons and the navbar by changing the property "),a("code",[t._v("type")])]),a("div",{staticClass:"mt-5"},[a("vs-select",{staticClass:"selectExample mb-5",attrs:{label:"Figuras"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},t._l(t.types,(function(t,e){return a("vs-select-item",{key:e,attrs:{value:t.value,text:t.text}})})),1),a("vs-navbar",{staticClass:"p-2",attrs:{type:t.type},model:{value:t.activeItem,callback:function(e){t.activeItem=e},expression:"activeItem"}},[a("div",{attrs:{slot:"title"},slot:"title"},[a("vs-navbar-title",[a("span",[t._v("Type "+t._s(t.type))])])],1),a("vs-navbar-item",{attrs:{index:"0"}},[a("a",{attrs:{href:"#"}},[t._v("Home")])]),a("vs-navbar-item",{attrs:{index:"1"}},[a("a",{attrs:{href:"#"}},[t._v("News")])]),a("vs-navbar-item",{attrs:{index:"2"}},[a("a",{attrs:{href:"#"}},[t._v("Update")])])],1)],1),a("template",{slot:"codeContainer"},[t._v('\n<template>\n  <div>\n    <vs-select class="selectExample mb-5" label="Figuras" v-model="type" class="p-2">\n      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in types" />\n    </vs-select>\n\n    <vs-navbar :type="type" v-model="activeItem" class="nabarx">\n\n      <div slot="title">\n        <vs-navbar-title>\n          <span>Type '+t._s("{{ type }}")+"</span>\n        </vs-navbar-title>\n      </div>\n\n      <vs-navbar-item index=\"0\">\n        <a href=\"#\">Home</a>\n      </vs-navbar-item>\n\n      <vs-navbar-item index=\"1\">\n        <a href=\"#\">News</a>\n      </vs-navbar-item>\n\n      <vs-navbar-item index=\"2\">\n        <a href=\"#\">Update</a>\n      </vs-navbar-item>\n    </vs-navbar>\n  </div>\n</template>\n\n<script>\nexport default {\n  data: () => ({\n    activeItem: 0,\n    type: 'flat',\n    types: [{\n        value: null,\n        text: 'Default'\n      },\n      {\n        value: 'flat',\n        text: 'Flat'\n      },\n      {\n        value: 'fund',\n        text: 'Fund'\n      },\n      {\n        value: 'border',\n        text: 'border'\n      },\n      {\n        value: 'gradient',\n        text: 'Gradient'\n      },\n      {\n        value: 'shadow',\n        text: 'Shadow'\n      }\n    ]\n  })\n}\n<\/script>\n        ")])],2)},_=[],y={data:function(){return{activeItem:0,type:"gradient",types:[{value:null,text:"Default"},{value:"flat",text:"Flat"},{value:"fund",text:"Fund"},{value:"border",text:"border"},{value:"gradient",text:"Gradient"},{value:"shadow",text:"Shadow"}]}}},g=y,w=Object(i["a"])(g,h,_,!1,null,null,null),I=w.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vx-card",{attrs:{title:"Color","code-toggler":""}},[a("p",[t._v("You can change the color of the Topbar with the property "),a("code",[t._v("color")]),t._v(". You are able to use the Main Colors or RGB and HEX colors")]),a("vs-alert",{staticClass:"mt-5",attrs:{icon:"warning",active:"true",color:"warning"}},[a("span",[t._v("Only "),a("strong",[t._v("RGB")]),t._v(" and "),a("strong",[t._v("HEX")]),t._v(" colors are supported.")])]),a("div",[a("div",{staticClass:"demo-alignment my-5"},[a("vs-radio",{attrs:{"vs-value":"primary"},model:{value:t.colorx,callback:function(e){t.colorx=e},expression:"colorx"}},[t._v("Primary")]),a("vs-radio",{attrs:{color:"danger","vs-value":"danger"},model:{value:t.colorx,callback:function(e){t.colorx=e},expression:"colorx"}},[t._v("Danger")]),a("vs-radio",{attrs:{color:"success","vs-value":"success"},model:{value:t.colorx,callback:function(e){t.colorx=e},expression:"colorx"}},[t._v("Success")]),a("vs-radio",{attrs:{color:"warning","vs-value":"warning"},model:{value:t.colorx,callback:function(e){t.colorx=e},expression:"colorx"}},[t._v("Warning")]),a("vs-radio",{attrs:{color:"dark","vs-value":"dark"},model:{value:t.colorx,callback:function(e){t.colorx=e},expression:"colorx"}},[t._v("Dark")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.colorx,expression:"colorx"}],staticClass:"input-color",attrs:{type:"color"},domProps:{value:t.colorx},on:{input:function(e){e.target.composing||(t.colorx=e.target.value)}}})],1),a("vs-navbar",{staticClass:"myNavbar text-white",attrs:{color:t.colorx,"text-color":"rgba(255,255,255,.6)","active-text-color":"rgba(255,255,255,1)"},model:{value:t.indexActive,callback:function(e){t.indexActive=e},expression:"indexActive"}},[a("div",{attrs:{slot:"title"},slot:"title"},[a("vs-navbar-title",[t._v("\n                        Navbar Color\n                    ")])],1),a("vs-navbar-item",{attrs:{index:"0"}},[a("a",{attrs:{href:"#"}},[t._v("Home")])]),a("vs-navbar-item",{attrs:{index:"1"}},[a("a",{attrs:{href:"#"}},[t._v("News")])]),a("vs-navbar-item",{attrs:{index:"2"}},[a("a",{attrs:{href:"#"}},[t._v("Update")])]),a("vs-spacer"),a("vs-button",{attrs:{"color-text":"rgb(255, 255, 255)",color:"rgba(255, 255, 255, 0.3)",type:"flat",icon:"more_horiz"}})],1)],1),a("template",{slot:"codeContainer"},[t._v('\n<template>\n\n  <input class="input-color" v-model="colorx" type="color">\n  <vs-navbar v-model="indexActive" :color="colorx" text-color="rgba(255,255,255,.6)" active-text-color="rgba(255,255,255,1)" class="myNavbar text-white">\n    <div slot="title">\n      <vs-navbar-title>\n        Navbar Color\n      </vs-navbar-title>\n    </div>\n\n    <vs-navbar-item index="0">\n      <a href="#">Home</a>\n    </vs-navbar-item>\n\n    <vs-navbar-item index="1">\n      <a href="#">News</a>\n    </vs-navbar-item>\n\n    <vs-navbar-item index="2">\n      <a href="#">Update</a>\n    </vs-navbar-item>\n\n    <vs-spacer></vs-spacer>\n\n    <vs-button color-text="rgb(255, 255, 255)" color="rgba(255, 255, 255, 0.3)" type="flat" icon="more_horiz"></vs-button>\n  </vs-navbar>\n</template>\n\n<script>\nexport default {\n  data: ()=>({\n    colorx:\'#5A8DEE\',\n    indexActive: 0\n  })\n}\n<\/script>\n        ')])],2)},k=[],N={data:function(){return{colorx:"#5A8DEE",indexActive:0}}},E=N,H=Object(i["a"])(E,C,k,!1,null,null,null),U=H.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vx-card",{attrs:{title:"Collapse","code-toggler":""}},[a("p",[a("code",[t._v("collapse")]),t._v(" property determines if the component starts hidden and with the option of clicking on the menu to open or show the options")]),a("div",{staticClass:"mt-5"},[a("vs-navbar",{staticClass:"p-2",attrs:{collapse:""},model:{value:t.activeItem,callback:function(e){t.activeItem=e},expression:"activeItem"}},[a("div",{attrs:{slot:"title"},slot:"title"},[a("vs-navbar-title",[a("span",[t._v("Vuexy")])])],1),a("vs-navbar-item",{attrs:{index:"0"}},[a("a",{attrs:{href:"#"}},[t._v("Home")])]),a("vs-navbar-item",{attrs:{index:"1"}},[a("a",{attrs:{href:"#"}},[t._v("News")])]),a("vs-navbar-item",{attrs:{index:"2"}},[a("a",{attrs:{href:"#"}},[t._v("Update")])])],1)],1),a("template",{slot:"codeContainer"},[t._v('\n<template>\n  <vs-navbar collapse v-model="activeItem" class="p-2">\n\n    <div slot="title">\n      <vs-navbar-title>\n        <span>Vuexy</span>\n      </vs-navbar-title>\n    </div>\n\n    <vs-navbar-item index="0">\n      <a href="#">Home</a>\n    </vs-navbar-item>\n\n    <vs-navbar-item index="1">\n      <a href="#">News</a>\n    </vs-navbar-item>\n\n    <vs-navbar-item index="2">\n      <a href="#">Update</a>\n    </vs-navbar-item>\n  </vs-navbar>\n</template>\n\n<script>\nexport default {\n  data: () => ({\n    activeItem: 0\n  })\n}\n<\/script>\n        ')])],2)},D=[],O={data:function(){return{activeItem:0}}},j=O,F=Object(i["a"])(j,A,D,!1,null,null,null),T=F.exports,V={components:{NavbarDefault:d,NavbarInput:f,NavbarType:I,NavbarCollapse:T,NavbarColor:U}},$=V,S=Object(i["a"])($,n,r,!1,null,null,null);e["default"]=S.exports}}]);
//# sourceMappingURL=chunk-2d0bfe9a.d765c6d6.js.map