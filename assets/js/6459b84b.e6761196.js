(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[868],{4084:function(e,t,n){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function r(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}n.d(t,{Z:function(){return r}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,g=p["".concat(s,".").concat(m)]||p[m]||c[m]||l;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},1395:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var a=n(7294),r=n(944),l=n(6010),i="tabItem_1uMI",o="tabItemActive_2DSg";var s=37,u=39;var d=function(e){var t=e.lazy,n=e.block,d=e.defaultValue,c=e.values,p=e.groupId,m=e.className,g=(0,r.Z)(),h=g.tabGroupChoices,b=g.setTabGroupChoices,k=(0,a.useState)(d),v=k[0],f=k[1],y=a.Children.toArray(e.children),N=[];if(null!=p){var w=h[p];null!=w&&w!==v&&c.some((function(e){return e.value===w}))&&f(w)}var C=function(e){var t=e.currentTarget,n=N.indexOf(t),a=c[n].value;f(a),null!=p&&(b(p,a),setTimeout((function(){var e,n,a,r,l,i,s,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,l=e.right,i=window,s=i.innerHeight,u=i.innerWidth,n>=0&&l<=u&&r<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case u:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case s:var r=N.indexOf(e.target)-1;n=N[r]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},m)},c.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":v===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:C,onClick:C},n)}))),t?(0,a.cloneElement)(y.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},9443:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},944:function(e,t,n){"use strict";var a=n(7294),r=n(9443);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},3314:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x},frontMatter:function(){return y},metadata:function(){return N},toc:function(){return w}});var a=n(2122),r=n(9756),l=n(7294),i=n(3905),o=n(6010),s=n(1395),u=n(8215),d="container_3zCa",c="colFixed_3D7u",p="selected_2YmE",m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},g=n(1811),h=function(e,t){return l.createElement(g.Z,Object.assign({},e,{ref:t,icon:m}))};h.displayName="CheckOutlined";var b=l.forwardRef(h);function k(e){var t=e.children,n=e.infoClassName,a=(0,l.useState)({key:"",info:"Click or tap on the table for more information"}),r=a[0],i=a[1],s=t.props.children[1].props.children.map((function(e,t){var n=e.props.children.map((function(e,n){var a=t+"."+n;return l.cloneElement(e,Object.assign({key:a},a===r.key&&{className:p},n>=2&&{onClick:function(){return i({key:a,info:e.props.children})}}),n>=2&&e.props.children?l.createElement(b,null):e.props.children)}));return l.cloneElement(e,{key:t},n)})),u=l.cloneElement(t.props.children[1],{key:"tbody"},s),m=l.cloneElement(t,null,[t.props.children[0],u]);return l.createElement("div",{className:(0,o.Z)("container",d)},l.createElement("div",{className:"row"},l.createElement("div",{className:(0,o.Z)("col col--6",c)},m),l.createElement("div",{className:(0,o.Z)("col col--6",c)},l.createElement("div",{className:(0,o.Z)("alert alert--info",n)},r.info?r.info:"Not supported"))))}var v=n(6563),f=["components"],y={sidebar_position:20},N={unversionedId:"getting-started/installation",id:"getting-started/installation",isDocsHomePage:!1,title:"Installation",description:"Using native and cross-compiler toolchains to build and install Urho3D library",source:"@site/docs/getting-started/installation.mdx",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/docs/getting-started/installation",editUrl:"https://github.com/urho3d/Urho3D/edit/master/website/docs/getting-started/installation.mdx",version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"docsSidebar",previous:{title:"Quick Start",permalink:"/docs/getting-started/quick-start"}},w=[{value:"Requirements",id:"requirements",children:[{value:"CCache",id:"ccache",children:[]}]},{value:"Build and Install Urho3D Library",id:"build-and-install-urho3d-library",children:[]}],C={toc:w};function x(e){var t=e.components,n=(0,r.Z)(e,f);return(0,i.kt)("wrapper",(0,a.Z)({},C,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Using native and cross-compiler toolchains to build and install Urho3D library"),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"First prepares the build environment by installing a compiler toolchain for your target platform, and the required build tools. The compiler can be GCC, Clang, MSVC, MinGW-w64, or the one bundled in the SDK like Android SDK, Emscripten SDK, etc. On Ubuntu you can easily prepare the build environment by installing the ",(0,i.kt)("inlineCode",{parentName:"p"},"build-essential")," package, on Windows by installing Visual Studio IDE, and on macOS by installing Xcode IDE. However, for cross-compiling usually you have to download and install the corresponding SDK manually. Make sure at the minimum the build environment has these build tools installed:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"CMake"),(0,i.kt)("li",{parentName:"ul"},"Git"),(0,i.kt)("li",{parentName:"ul"},"Rake")),(0,i.kt)("p",null,"Optionally these as well:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ccache - for speeding up the build"),(0,i.kt)("li",{parentName:"ul"},"Doxygen and Graphviz - for building documentation")),(0,i.kt)("p",null,"Although Urho3D project has included all required third-party libraries as source code, there may be system-level dependency packages that must be satisfied before Urho3D can be built from source successfully. The list below is by no mean comprehensive nor canonical, this is especially true on platforms with Linux operating system, but it should get you started."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This may change in the future when the project uses better package manager and Modern CMake. Ideally, the project should bootstrap itself with more ease than currently is."))),(0,i.kt)(s.Z,{className:v.Z.requirements,groupId:"target-platform",defaultValue:"android",values:[{label:"Android",value:"android"},{label:"Apple",value:"apple"},{label:"Arm",value:"arm"},{label:"Linux",value:"linux"},{label:"RPI",value:"rpi"},{label:"Web",value:"web"},{label:"Windows",value:"win"}],mdxType:"Tabs"},(0,i.kt)(u.Z,{value:"android",mdxType:"TabItem"},(0,i.kt)("div",{className:(0,o.Z)("textBlock",v.Z.fixedHeight)},(0,i.kt)("p",null,"Install ",(0,i.kt)("strong",null,"Android Studio")," or ",(0,i.kt)("strong",null,"IntelliJ IDEA")," and it should already provide everything required."),(0,i.kt)("p",null,"Remember to complete the ",(0,i.kt)("strong",null,"Android SDK")," installation as per instructed by IDE."),(0,i.kt)("br",null),(0,i.kt)("p",null,"Tested tool version: ",(0,i.kt)("strong",null,"29.0.2")),(0,i.kt)("p",null,"Tested NDK version: ",(0,i.kt)("strong",null,"21.3.6528147")))),(0,i.kt)(u.Z,{value:"apple",mdxType:"TabItem"},(0,i.kt)("div",{className:(0,o.Z)("textBlock",v.Z.fixedHeight)},(0,i.kt)("p",null,"Install ",(0,i.kt)("strong",null,"Xcode")," and it should provide almost everything required."),(0,i.kt)("p",null,"You may use ",(0,i.kt)("strong",null,"homebrew")," to install other missing development packages, like ",(0,i.kt)("strong",null,"openssl"),"."))),(0,i.kt)(u.Z,{value:"arm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Urho3D only supports ARM platform on Linux OS, so it has the same deps as building Linux platform\napt install \\\n    # !!! MESA is not needed on system with proprietary kernel module/driver !!!\n    libgl1-mesa-dev \\\n    # Display server, still default to X11 at the moment\n    libx11-dev \\\n    # Sound server, still default to PulseAudio at the moment\n    libpulse-dev \\\n    # D-BUS and udev, for game controller hot-plugging\n    libdbus-1-dev libudev-dev \\\n    # IME, optional for Chinese/Japanese/Korean text inputting\n    libibus-1.0-dev \\\n    # SSL, optional for secure networking\n    libssl-dev\n"))),(0,i.kt)(u.Z,{value:"linux",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Building as 32-bit on a 64-bit host requires installation of 32-bit development packages too\napt install \\\n    # !!! MESA is not needed on system with proprietary kernel module/driver !!!\n    libgl1-mesa-dev \\\n    # Display server, still default to X11 at the moment\n    libx11-dev \\\n    # Sound server, still default to PulseAudio at the moment\n    libpulse-dev \\\n    # D-BUS and udev, for game controller hot-plugging\n    libdbus-1-dev libudev-dev \\\n    # IME, optional for Chinese/Japanese/Korean text inputting\n    libibus-1.0-dev \\\n    # SSL, optional for secure networking\n    libssl-dev\n"))),(0,i.kt)(u.Z,{value:"rpi",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# This list was compiled for RPI3 in mind, with proprietary Broadcom Video Core proprietary driver\n# However, you can still use it for RPI4 by also installing MESA and X11 on top of it\napt install \\\n    # Sound server, still default to PulseAudio at the moment\n    libpulse-dev \\\n    # D-BUS and udev, for game controller hot-plugging\n    libdbus-1-dev libudev-dev \\\n    # Generic Linux input driver\n    libevdev2 \\\n    # IME, optional for Chinese/Japanese/Korean text inputting\n    libibus-1.0-dev \\\n    # SSL, optional for secure networking\n    libssl-dev\n"))),(0,i.kt)(u.Z,{value:"web",mdxType:"TabItem"},(0,i.kt)("div",{className:(0,o.Z)("textBlock",v.Z.fixedHeight)},(0,i.kt)("p",null,"Install ",(0,i.kt)("strong",null,"Emscripten SDK")," and it should already provide everything required."),(0,i.kt)("br",null),(0,i.kt)("p",null,"Tested SDK version: ",(0,i.kt)("strong",null,"2.0.8")))),(0,i.kt)(u.Z,{value:"win",mdxType:"TabItem"},(0,i.kt)("div",{className:(0,o.Z)("textBlock",v.Z.fixedHeight)},(0,i.kt)("p",null,"Install ",(0,i.kt)("strong",null,"Visual Studio")," together with ",(0,i.kt)("strong",null,"Windows SDK"),". Alternatively, install ",(0,i.kt)("strong",null,"MinGW-w64"),"."),(0,i.kt)("p",null,"Both should already provide everything required.")))),(0,i.kt)("p",null,"In general when cross-compiling the build system requires both the cross-compiler and native compiler toolchains to be installed on the host machine. This is because Urho3D build system builds the host-tool using the native compiler on the fly while cross-compiling the library for the target platform in one go. Check the table below on the supported cross-compiling scenario using Linux, Mac, and Windows host machine, respectively."),(0,i.kt)(k,{infoClassName:v.Z.infoFixedHeight,mdxType:"CompilerMatrix"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:"center"},"Linux"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Mac"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Windows"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Target Platform"),(0,i.kt)("td",{parentName:"tr",align:null},"Android"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Cross-compiler: Android NDK",(0,i.kt)("br",null),"Native compiler: Clang or GCC"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Cross-compiler: Android NDK",(0,i.kt)("br",null),"Native compiler: Apple Clang"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Cross-compiler: Android NDK",(0,i.kt)("br",null),"Native compiler: MinGW-w64")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Apple"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"Native compiler: Apple Clang, can actually target macOS, iOS, and tvOS"),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Arm"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Cross-compiler: ?, no need for native build",(0,i.kt)("br",null),"Native compiler: Clang or GCC"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Linux"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Native compiler: Clang or GCC"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"RPI"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Cross-compiler: ?, no need for native build",(0,i.kt)("br",null),"Native compiler: Clang or GCC"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Web"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Cross-compiler: Emscripten EMCC",(0,i.kt)("br",null),"Native compiler: Clang or GCC"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Cross-compiler: Emscripten EMCC",(0,i.kt)("br",null),"Native compiler: Apple Clang"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Cross-compiler: Emscripten EMCC",(0,i.kt)("br",null),"Native compiler: MinGW-w64")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Windows"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Cross-compiler: MinGW-w64",(0,i.kt)("br",null),"Native compiler: Clang or GCC"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"Native compiler: MinGW-w64 or MSVC"))))),(0,i.kt)("h3",{id:"ccache"},"CCache"),(0,i.kt)("p",null,"Lorem ipsum"),(0,i.kt)("h2",{id:"build-and-install-urho3d-library"},"Build and Install Urho3D Library"),(0,i.kt)("p",null,"Clone the Urho3D project from the main branch, change directory to its project root, and execute ",(0,i.kt)("strong",{parentName:"p"},"only one of the following commands")," to build and install the library for your desired target platform. For simplicity's sake, this guide provides instruction to install the Urho3D library into a directory under user's home directory that does not require superuser privilege, except for Windows native build."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"On Windows host there is no concept of ",(0,i.kt)("strong",{parentName:"p"},"DESTDIR")," for staged installation, so the library can only be installed to the system-wide installation location which requires Administrator privilege. It also means you cannot have both VS version and MinGW version installed at the same time. Additionally, notice that on Windows host the build options have to set on separate command before invoking Rake task."))),(0,i.kt)(s.Z,{className:v.Z.buildUrho3D,groupId:"target-platform",defaultValue:"android",values:[{label:"Android",value:"android"},{label:"Apple",value:"apple"},{label:"Arm",value:"arm"},{label:"Linux",value:"linux"},{label:"RPI",value:"rpi"},{label:"Web",value:"web"},{label:"Windows",value:"win"}],mdxType:"Tabs"},(0,i.kt)(u.Z,{value:"android",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# When using Rake task, always install to Maven local repository\nPLATFORM=android rake build install\n\n# When using Gradle wrapper on Linux or Mac\n./gradlew build publishToMavenLocal\n\n# When using Gradle wrapper on Windows\ngradlew.bat build publishToMavenLocal\n"))),(0,i.kt)(u.Z,{value:"apple",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# When targeting macOS\nrake build install[~/stage-macOS]\n\n# When targeting iOS\nPLATFORM=iOS rake build install[~/stage-iOS]\n\n# When targeting tvOS\nPLATFORM=tvOS rake build install[~/stage-tvOS]\n"))),(0,i.kt)(u.Z,{value:"arm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# When compiling natively on the ARM board\nPLATFORM=arm rake build install[~/stage-arm]\n\n# When cross-compiling on Linux host machine, substitute '?' accordingly\nARM_ABI_FLAGS=? ARM_PREFIX=? ARM_SYSROOT=? PLATFORM=arm rake build install[~/stage-arm]\n"))),(0,i.kt)(u.Z,{value:"linux",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# When using Clang\nCC=clang CXX=clang++ rake build install[~/stage-linux-clang]\n\n# When using GCC\nrake build install[~/stage-linux-gcc]\n"))),(0,i.kt)(u.Z,{value:"rpi",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# When compiling natively on the RPI board\nRPI_ABI=RPI3 PLATFORM=rpi rake build install[~/stage-rpi]\n\n# When cross-compiling on Linux host machine, substitute '?' accordingly\nRPI_ABI=RPI3 RPI_PREFIX=? RPI_SYSROOT=? PLATFORM=rpi rake build install[~/stage-rpi]\n"))),(0,i.kt)(u.Z,{value:"web",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# When using Rake task on Linux or Mac\nPLATFORM=web rake build install[~/stage-web]\n\n# When using Rake task on Windows\nset "PLATFORM=web" && rake build install[~/stage-web]\n'))),(0,i.kt)(u.Z,{value:"win",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# When compiling natively using VS\nrake build install\n\n# When compiling natively using MinGW-w64\nset "GENERATOR=mingw" && rake build install\n\n# When cross-compiling on Linux host machine\nPLATFORM=mingw rake build install[~/stage-mingw]\n')))))}x.isMDXComponent=!0},6010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})},6563:function(e,t){"use strict";t.Z={quickBuildUrho3D:"quickBuildUrho3D_2quK",fixedHeight:"fixedHeight_2DKB",quickBuildUrhoApp:"quickBuildUrhoApp_2kTs",requirements:"requirements_3RFz",buildUrho3D:"buildUrho3D_1iEB",infoFixedHeight:"infoFixedHeight_3b4Y"}}}]);