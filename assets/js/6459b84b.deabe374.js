(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[868],{4084:function(e,t,n){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function l(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}n.d(t,{Z:function(){return l}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(n),m=l,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:l},t)}},1395:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var a=n(7294),l=n(944),i=n(6010),r="tabItem_1uMI",o="tabItemActive_2DSg";var s=37,d=39;var u=function(e){var t=e.lazy,n=e.block,u=e.defaultValue,p=e.values,c=e.groupId,m=e.className,h=(0,l.Z)(),k=h.tabGroupChoices,g=h.setTabGroupChoices,b=(0,a.useState)(u),v=b[0],N=b[1],f=a.Children.toArray(e.children),y=[];if(null!=c){var w=k[c];null!=w&&w!==v&&p.some((function(e){return e.value===w}))&&N(w)}var C=function(e){var t=e.currentTarget,n=y.indexOf(t),a=p[n].value;N(a),null!=c&&(g(c,a),setTimeout((function(){var e,n,a,l,i,r,s,d;(e=t.getBoundingClientRect(),n=e.top,a=e.left,l=e.bottom,i=e.right,r=window,s=r.innerHeight,d=r.innerWidth,n>=0&&i<=d&&l<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case d:var a=y.indexOf(e.target)+1;n=y[a]||y[0];break;case s:var l=y.indexOf(e.target)-1;n=y[l]||y[y.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,i.Z)("tabs__item",r,{"tabs__item--active":v===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:x,onFocus:C,onClick:C},n)}))),t?(0,a.cloneElement)(f.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},9443:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},944:function(e,t,n){"use strict";var a=n(7294),l=n(9443);t.Z=function(){var e=(0,a.useContext)(l.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},3314:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x},frontMatter:function(){return f},metadata:function(){return y},toc:function(){return w}});var a=n(2122),l=n(9756),i=n(7294),r=n(3905),o=n(6010),s=n(1395),d=n(8215),u="container_3zCa",p="colFixed_3D7u",c="selected_2YmE",m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},h=n(1811),k=function(e,t){return i.createElement(h.Z,Object.assign({},e,{ref:t,icon:m}))};k.displayName="CheckOutlined";var g=i.forwardRef(k);function b(e){var t=e.children,n=e.infoClassName,a=(0,i.useState)({key:"",info:"Click or tap on the table for more information"}),l=a[0],r=a[1],s=t.props.children[1].props.children.map((function(e,t){var n=e.props.children.map((function(e,n){var a=t+"."+n;return i.cloneElement(e,Object.assign({key:a},a===l.key&&{className:c},n>=2&&{onClick:function(){return r({key:a,info:e.props.children})}}),n>=2&&e.props.children?i.createElement(g,null):e.props.children)}));return i.cloneElement(e,{key:t},n)})),d=i.cloneElement(t.props.children[1],{key:"tbody"},s),m=i.cloneElement(t,null,[t.props.children[0],d]);return i.createElement("div",{className:(0,o.Z)("container",u)},i.createElement("div",{className:"row"},i.createElement("div",{className:(0,o.Z)("col col--6",p)},m),i.createElement("div",{className:(0,o.Z)("col col--6",p)},i.createElement("div",{className:(0,o.Z)("alert alert--info",n)},l.info?l.info:"Not supported"))))}var v=n(6563),N=["components"],f={sidebar_position:20},y={unversionedId:"getting-started/installation",id:"getting-started/installation",isDocsHomePage:!1,title:"Installation",description:"Using native and cross-compiler toolchains to install Urho3D library",source:"@site/docs/getting-started/installation.mdx",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/docs/getting-started/installation",editUrl:"https://github.com/urho3d/Urho3D/edit/master/website/docs/getting-started/installation.mdx",version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"docsSidebar",previous:{title:"Quick Start",permalink:"/docs/getting-started/quick-start"},next:{title:"Create New Project",permalink:"/docs/getting-started/create-urhoapp"}},w=[{value:"Requirements",id:"requirements",children:[{value:"Setup ccache",id:"setup-ccache",children:[]}]},{value:"Install Urho3D Library",id:"install-urho3d-library",children:[{value:"Using CLI",id:"install-urho3d-library-using-cli",children:[]},{value:"Using IDE",id:"install-urho3d-library-using-ide",children:[]}]}],C={toc:w};function x(e){var t=e.components,n=(0,l.Z)(e,N);return(0,r.kt)("wrapper",(0,a.Z)({},C,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Using native and cross-compiler toolchains to install Urho3D library"),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"First prepares the build environment by installing a compiler toolchain for your target platform, and the required build tools. The compiler can be GCC, Clang, MSVC, MinGW-w64, or the one bundled in the SDK like Android SDK, Emscripten SDK, etc. On Ubuntu you can easily prepare the build environment by installing the ",(0,r.kt)("inlineCode",{parentName:"p"},"build-essential")," package, on Windows by installing Visual Studio IDE, and on macOS by installing Xcode IDE. However, for cross-compiling usually you have to download and install the corresponding SDK manually. Make sure at the minimum the build environment has these build tools installed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CMake"),(0,r.kt)("li",{parentName:"ul"},"Git"),(0,r.kt)("li",{parentName:"ul"},"Rake")),(0,r.kt)("p",null,"Optionally these as well:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ccache - for speeding up the build"),(0,r.kt)("li",{parentName:"ul"},"Doxygen and Graphviz - for building documentation")),(0,r.kt)("p",null,"Although Urho3D project has included all required third-party libraries as source code, there may be system-level dependency packages that must be satisfied before Urho3D can be built from source successfully. The list below is by no mean comprehensive nor canonical, this is especially true on platforms with Linux operating system, but it should get you started."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This may change in the future when the project uses better package manager and Modern CMake. Ideally, the project should bootstrap itself with more ease than currently is."))),(0,r.kt)(s.Z,{className:v.Z.requirements,groupId:"target-platform",defaultValue:"android",values:[{label:"Android",value:"android"},{label:"Apple",value:"apple"},{label:"Arm",value:"arm"},{label:"Linux",value:"linux"},{label:"RPI",value:"rpi"},{label:"Web",value:"web"},{label:"Windows",value:"win"}],mdxType:"Tabs"},(0,r.kt)(d.Z,{value:"android",mdxType:"TabItem"},(0,r.kt)("div",{className:(0,o.Z)("textBlock",v.Z.fixedHeight)},"Install ",(0,r.kt)("strong",null,"OpenJDK"),", and ",(0,r.kt)("strong",null,"Android Studio")," or ",(0,r.kt)("strong",null,"IntelliJ IDEA"),".",(0,r.kt)("br",null),"Remember to complete the ",(0,r.kt)("strong",null,"Android SDK")," installation as per instructed by IDE.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Tested tool version: ",(0,r.kt)("strong",null,"29.0.2"),(0,r.kt)("br",null),"Tested NDK version: ",(0,r.kt)("strong",null,"21.3.6528147"),(0,r.kt)("br",null),"Tested Android gradle plugin version: ",(0,r.kt)("strong",null,"4.0.2"))),(0,r.kt)(d.Z,{value:"apple",mdxType:"TabItem"},(0,r.kt)("div",{className:(0,o.Z)("textBlock",v.Z.fixedHeight)},"Install ",(0,r.kt)("strong",null,"Xcode")," and it should provide almost everything required.",(0,r.kt)("br",null),"You may use ",(0,r.kt)("strong",null,"homebrew")," to install other missing development packages, like ",(0,r.kt)("strong",null,"openssl"),".")),(0,r.kt)(d.Z,{value:"arm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Urho3D only supports ARM platform on Linux OS, so it has the same deps as building Linux platform\napt install \\\n    # !!! MESA is not needed on system with proprietary kernel module/driver !!!\n    libgl1-mesa-dev \\\n    # Display server, still default to X11 at the moment\n    libx11-dev \\\n    # Sound server, still default to PulseAudio at the moment\n    libpulse-dev \\\n    # D-BUS and udev, for game controller hot-plugging\n    libdbus-1-dev libudev-dev \\\n    # IME, optional for Chinese/Japanese/Korean text inputting\n    libibus-1.0-dev \\\n    # SSL, optional for secure networking\n    libssl-dev\n"))),(0,r.kt)(d.Z,{value:"linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Building as 32-bit on a 64-bit host requires installation of 32-bit development packages too\napt install \\\n    # !!! MESA is not needed on system with proprietary kernel module/driver !!!\n    libgl1-mesa-dev \\\n    # Display server, still default to X11 at the moment\n    libx11-dev \\\n    # Sound server, still default to PulseAudio at the moment\n    libpulse-dev \\\n    # D-BUS and udev, for game controller hot-plugging\n    libdbus-1-dev libudev-dev \\\n    # IME, optional for Chinese/Japanese/Korean text inputting\n    libibus-1.0-dev \\\n    # SSL, optional for secure networking\n    libssl-dev\n"))),(0,r.kt)(d.Z,{value:"rpi",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# This list was compiled for RPI3 in mind, with proprietary Broadcom Video Core proprietary driver\n# However, you can still use it for RPI4 by also installing MESA and X11 on top of it\napt install \\\n    # Sound server, still default to PulseAudio at the moment\n    libpulse-dev \\\n    # D-BUS and udev, for game controller hot-plugging\n    libdbus-1-dev libudev-dev \\\n    # Generic Linux input driver\n    libevdev2 \\\n    # IME, optional for Chinese/Japanese/Korean text inputting\n    libibus-1.0-dev \\\n    # SSL, optional for secure networking\n    libssl-dev\n"))),(0,r.kt)(d.Z,{value:"web",mdxType:"TabItem"},(0,r.kt)("div",{className:(0,o.Z)("textBlock",v.Z.fixedHeight)},"Install ",(0,r.kt)("strong",null,"Emscripten SDK")," and it should already provide everything required.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Tested SDK version: ",(0,r.kt)("strong",null,"2.0.8"))),(0,r.kt)(d.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)("div",{className:(0,o.Z)("textBlock",v.Z.fixedHeight)},"Install ",(0,r.kt)("strong",null,"Visual Studio")," together with ",(0,r.kt)("strong",null,"Windows SDK"),". Alternatively, install ",(0,r.kt)("strong",null,"MinGW-w64"),".",(0,r.kt)("br",null),"Both should already provide everything required."))),(0,r.kt)("p",null,"In general when cross-compiling the build system requires both the cross-compiler and native compiler toolchains to be installed on the host machine. This is because Urho3D build system builds the host-tool using the native compiler on the fly while cross-compiling the library for the target platform in one go. Check the table below on the supported cross-compiling scenario using Linux, Mac, and Windows host machine, respectively."),(0,r.kt)(b,{infoClassName:v.Z.infoFixedHeight,mdxType:"CompilerMatrix"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:"center"},"Linux"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Mac"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Windows"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Target Platform"),(0,r.kt)("td",{parentName:"tr",align:null},"Android"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Cross-compiler: Android NDK",(0,r.kt)("br",null),"Native compiler: Clang or GCC"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Cross-compiler: Android NDK",(0,r.kt)("br",null),"Native compiler: Apple Clang"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Cross-compiler: Android NDK",(0,r.kt)("br",null),"Native compiler: MinGW-w64")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Apple"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"Native compiler: Apple Clang, can actually target macOS, iOS, and tvOS"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Arm"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Cross-compiler: ?, no need for native build",(0,r.kt)("br",null),"Native compiler: Clang or GCC"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Linux"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Native compiler: Clang or GCC"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"RPI"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Cross-compiler: ?, no need for native build",(0,r.kt)("br",null),"Native compiler: Clang or GCC"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Web"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Cross-compiler: Emscripten EMCC",(0,r.kt)("br",null),"Native compiler: Clang or GCC"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Cross-compiler: Emscripten EMCC",(0,r.kt)("br",null),"Native compiler: Apple Clang"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Cross-compiler: Emscripten EMCC",(0,r.kt)("br",null),"Native compiler: MinGW-w64")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Windows"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Cross-compiler: MinGW-w64",(0,r.kt)("br",null),"Native compiler: Clang or GCC"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"Native compiler: MinGW-w64 or MSVC"))))),(0,r.kt)("h3",{id:"setup-ccache"},"Setup ccache"),(0,r.kt)("p",null,"It is highly recommended having ",(0,r.kt)("inlineCode",{parentName:"p"},"ccache")," installed on Linux build environment. It reduces the recompilation time drastically. To activate it, simply export these environment variables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=~/.bash_profile",title:"~/.bash_profile"},"export USE_CCACHE=1 CCACHE_SLOPPINESS=pch_defines,time_macros CCACHE_COMPRESS=1\n\n# When also targeting Android platform\nexport ANDROID_CCACHE=$(which ccache)\n")),(0,r.kt)("p",null,"Adjust the ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH")," environment variable so that the ccache symlinks directory is in front of the ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/bin"),' entry, if it has not been automatically system-wide adjusted after installing the package. Basically by doing so, whenever a compiler command is about to be invoked, it would be "intercepted" and invoking one of the ccache symlinks instead.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=~/.bashrc",title:"~/.bashrc"},"\nPATH=$(whereis -b ccache |grep -o '[^ ]*$'):$PATH\n\n")),(0,r.kt)("p",null,"Finally, below is an easy way to verify the setup."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\n[[ -L $(which gcc) ]] && echo "Good!" || echo "Oh no!"\n\n')),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This is the reason Dockerized Build Environment is fast."))),(0,r.kt)("h2",{id:"install-urho3d-library"},"Install Urho3D Library"),(0,r.kt)("h3",{id:"install-urho3d-library-using-cli"},"Using CLI"),(0,r.kt)("p",null,"Clone the Urho3D project from the main branch, change directory to its project root, and execute ",(0,r.kt)("strong",{parentName:"p"},"only one of the following commands")," to install the library for your desired target platform. For simplicity's sake, this section provides instruction that install the Urho3D library into a default install location under user's home directory that does not require superuser privilege. Unless specified otherwise, the default install location is ",(0,r.kt)("code",null,"~/.urho3d/install/",(0,r.kt)("em",null,"<","platform",">"),"/"),". For example, on Linux platform with GCC it is ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.urho3d/install/linux/"),". For Clang on Linux platform it is ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.urho3d/install/linux-clang/")," to prevent clash with GCC. For Android platform, it is installed in ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.m2/repository/")," as AAR in Maven format."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"On Windows host the environment variables have to be set on separate command before invoking Rake task."))),(0,r.kt)(s.Z,{className:v.Z.cliInstall,groupId:"target-platform",defaultValue:"android",values:[{label:"Android",value:"android"},{label:"Apple",value:"apple"},{label:"Arm",value:"arm"},{label:"Linux",value:"linux"},{label:"RPI",value:"rpi"},{label:"Web",value:"web"},{label:"Windows",value:"win"}],mdxType:"Tabs"},(0,r.kt)(d.Z,{value:"android",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# When using Rake task, always install to Maven local repository\nPLATFORM=android rake build install\n\n# When using Gradle wrapper on Linux or Mac\n./gradlew build publishToMavenLocal\n\n# When using Gradle wrapper on Windows\ngradlew.bat build publishToMavenLocal\n"))),(0,r.kt)(d.Z,{value:"apple",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# When targeting macOS, "PLATFORM=macOS" is the default on Mac\nrake build install\n\n# When targeting iOS\nPLATFORM=iOS rake build install\n\n# When targeting tvOS\nPLATFORM=tvOS rake build install\n'))),(0,r.kt)(d.Z,{value:"arm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# When compiling natively on the ARM board, \"PLATFORM=arm\" should be already set\nrake build install\n\n# When cross-compiling on Linux host machine, substitute '?' accordingly\nARM_ABI_FLAGS=? ARM_PREFIX=? ARM_SYSROOT=? PLATFORM=arm rake build install\n"))),(0,r.kt)(d.Z,{value:"linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# When using GCC, "PLATFORM=linux" is the default on Linux\nrake build install\n\n# When using Clang, override the "CC" and "CXX" environment variables\nCC=clang CXX=clang++ rake build install\n'))),(0,r.kt)(d.Z,{value:"rpi",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# When compiling natively on the RPI board, \"PLATFORM=rpi\" should be already set\nRPI_ABI=RPI3 rake build install\n\n# When cross-compiling on Linux host machine, substitute '?' accordingly\nRPI_ABI=RPI3 RPI_PREFIX=? RPI_SYSROOT=? PLATFORM=rpi rake build install\n"))),(0,r.kt)(d.Z,{value:"web",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# When using Rake task on Linux or Mac\nPLATFORM=web rake build install\n\n# When using Rake task on Windows\nset "PLATFORM=web" && rake build install\n'))),(0,r.kt)(d.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# When compiling natively using VS, "PLATFORM=win" is the default on Windows\nrake build install\n\n# When compiling natively using MinGW-w64\nset "GENERATOR=mingw" && rake build install\n\n# When cross-compiling on Linux host machine, substitute \'?\' accordingly\nMINGW_PREFIX=? PLATFORM=mingw rake build install\n')))),(0,r.kt)("h3",{id:"install-urho3d-library-using-ide"},"Using IDE"),(0,r.kt)("p",null,"The Urho3D project can be opened directly in the IDE that supports CMake or Gradle build system, like ",(0,r.kt)("strong",{parentName:"p"},"Android Studio"),", ",(0,r.kt)("strong",{parentName:"p"},"CLion"),", ",(0,r.kt)("strong",{parentName:"p"},"IntelliJ IDEA"),", and ",(0,r.kt)("strong",{parentName:"p"},"Visual Studio"),". For other IDEs, like ",(0,r.kt)("strong",{parentName:"p"},"Xcode"),", use CMake to generate the initial build tree first. This section tries to cover a few of the IDEs available in the market. The steps outlined here should be easily adaptable for other IDEs."),(0,r.kt)(s.Z,{className:v.Z.ideInstall,groupId:"ide",defaultValue:"android-studio",values:[{label:"Android Studio",value:"android-studio"},{label:"CLion",value:"clion"},{label:"Code::Blocks",value:"code-blocks"},{label:"CodeLite",value:"codelite"},{label:"IntelliJ IDEA",value:"intellij"},{label:"Visual Studio",value:"visual-studio"},{label:"Xcode",value:"xcode"}],mdxType:"Tabs"},(0,r.kt)(d.Z,{value:"android-studio",mdxType:"TabItem"},(0,r.kt)("div",{className:(0,o.Z)("textBlock",v.Z.fixedHeight)},(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Do not update the Android Gradle Plugin when being prompted, unless you know what you are doing."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Choose "Open an Existing Project" or "Get from Version Control" if you haven\'t cloned the Urho3D project yet.'),(0,r.kt)("li",{parentName:"ul"},'After Gradle sync is completed, select "launcher-app" from the "Edit Run/Debug Configurations" drop down list, and press "Ctrl+F9" to build the sample launcher app. This should build the Urho3D library as well.'),(0,r.kt)("li",{parentName:"ul"},'To run the sample app, press "Shift+F10".'),(0,r.kt)("li",{parentName:"ul"},"To install the Urho3D library for later use, locate the Gradle task called ",(0,r.kt)("inlineCode",{parentName:"li"},"publishToMavenLocal")," and execute it.")))),(0,r.kt)(d.Z,{value:"clion",mdxType:"TabItem"},(0,r.kt)("div",{className:(0,o.Z)("textBlock",v.Z.fixedHeight)},(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Disable the Gradle plugin and Gradle Native plugin as they may interfere and prevent proper project setup."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Choose "Open" or "Get from VCS" if you haven\'t cloned the Urho3D project yet.'),(0,r.kt)("li",{parentName:"ul"},'In the "Open Project Wizard" or in the "CMake Settings", set the ',(0,r.kt)("inlineCode",{parentName:"li"},"CMAKE_INSTALL_PREFIX"),' accordingly in the "CMake options" field, e.g.:',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"~/.urho3d/install/linux")," when targeting Linux platform with GCC"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"%USERPROFILE%\\.urho3d\\install\\win")," when targeting Windows platform with MSVC"))),(0,r.kt)("li",{parentName:"ul"},'Select "01_HelloWorld" or any other samples from the "Select Run/Debug Configuration" drop down list and press "Ctrl+F9" to build the sample app. This should build the Urho3D library as well.'),(0,r.kt)("li",{parentName:"ul"},'To run the sample app, press "Shift+F10".'),(0,r.kt)("li",{parentName:"ul"},'To install the Urho3D library for later use, run "Install" under the "Build" menu.')))),(0,r.kt)(d.Z,{value:"code-blocks",mdxType:"TabItem"},(0,r.kt)("div",{className:(0,o.Z)("textBlock",v.Z.fixedHeight)},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Generate a build tree using CMake's Code::Blocks generator. One way to do it is by using rake task, like so: ",(0,r.kt)("inlineCode",{parentName:"li"},"GENERATOR=codeblocks rake cmake"),"."),(0,r.kt)("li",{parentName:"ul"},'Open the "Urho3D.cbp" Code::Blocks project file in the build tree. In the above case, the project file can be found in ',(0,r.kt)("inlineCode",{parentName:"li"},"build/linux-codeblocks/")," directory."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"// FIXME: Please submit PR to complete the install steps."))))),(0,r.kt)(d.Z,{value:"codelite",mdxType:"TabItem"},(0,r.kt)("div",{className:(0,o.Z)("textBlock",v.Z.fixedHeight)},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Generate a build tree using CMake's CodeLite generator. One way to do it is by using rake task, like so: ",(0,r.kt)("inlineCode",{parentName:"li"},"GENERATOR=codelite rake cmake")),(0,r.kt)("li",{parentName:"ul"},'Open the "Urho3D.workspace" CodeLite workspace file in the build tree. In the above case, the workspace file can be found in ',(0,r.kt)("inlineCode",{parentName:"li"},"build/linux-codelite/")," directory."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"// FIXME: Please submit PR to complete the install steps."))))),(0,r.kt)(d.Z,{value:"intellij",mdxType:"TabItem"},(0,r.kt)("div",{className:(0,o.Z)("textBlock",v.Z.fixedHeight)},(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Do not update the Android Gradle Plugin when being prompted, unless you know what you are doing."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Choose "Open" or "Get from VCS" if you haven\'t cloned the Urho3D project yet.'),(0,r.kt)("li",{parentName:"ul"},'After Gradle sync is completed, select "launcher-app" from the "Select Run/Debug Configuration" drop down list, and press "Ctrl+F9" to build the sample launcher app. This should build the Urho3D library as well.'),(0,r.kt)("li",{parentName:"ul"},'To run the sample app, press "Shift+F10".'),(0,r.kt)("li",{parentName:"ul"},"To install the Urho3D library for later use, locate the Gradle task called ",(0,r.kt)("inlineCode",{parentName:"li"},"publishToMavenLocal")," and execute it.")))),(0,r.kt)(d.Z,{value:"visual-studio",mdxType:"TabItem"},(0,r.kt)("div",{className:(0,o.Z)("textBlock",v.Z.fixedHeight)},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Choose "Open a project or solution" or "Clone a repository" if you haven\'t clone the Urho3D project yet.'),(0,r.kt)("li",{parentName:"ul"},'After CMake initial build tree is generated, open the "CMake Settings for Urho3D" under the "Project" menu, then in the "CMake variables and cache" section:',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Disable the ",(0,r.kt)("inlineCode",{parentName:"li"},"URHO3D_PCH")," build option"),(0,r.kt)("li",{parentName:"ul"},"Set the ",(0,r.kt)("inlineCode",{parentName:"li"},"CMAKE_INSTALL_PREFIX")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"%USERPROFILE%\\.urho3d\\install\\win")))),(0,r.kt)("li",{parentName:"ul"},"Save the above changes to allow CMake to reconfigure the build tree."),(0,r.kt)("li",{parentName:"ul"},'Double click the "Folder View" in the "Solution Explorer", then select the "01_HelloWorld.exe" from the "Select Startup Item" drop down list and press "Ctrl+B" to build the sample app. This should build the Urho3D library as well.'),(0,r.kt)("li",{parentName:"ul"},'To run the sample app, press "Ctrl+F5".'),(0,r.kt)("li",{parentName:"ul"},'To install the Urho3D library for later use, run "Install Urho3D" under the "Build" menu.')))),(0,r.kt)(d.Z,{value:"xcode",mdxType:"TabItem"},(0,r.kt)("div",{className:(0,o.Z)("textBlock",v.Z.fixedHeight)},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Generate a build tree using CMake's Xcode generator. One way to do it is by using rake task, like so:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rake cmake")," for targeting macOS"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PLATFORM=iOS rake cmake")," for targeting iOS"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PLATFORM=tvOS rake cmake")," for targeting tvOS"))),(0,r.kt)("li",{parentName:"ul"},'Open the "Urho3D.xcodeproj" Xcode project file in the build tree. In the above case, the project file can be found in "build/macos", "build/ios", and "build/tvos", respectively.'),(0,r.kt)("li",{parentName:"ul"},'Select "01_HelloWorld" or any other samples from the list of targets and press "\u2318+B" to build the sample app. This should build the Urho3D library as well.'),(0,r.kt)("li",{parentName:"ul"},'To run the sample app, press "\u2318+R".'),(0,r.kt)("li",{parentName:"ul"},'Select "Install" from the list of targets and press "\u2318+B" to actually install the Urho3D library for later use.'))))))}x.isMDXComponent=!0},6010:function(e,t,n){"use strict";function a(e){var t,n,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(l&&(l+=" "),l+=n);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}function l(){for(var e,t,n=0,l="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(l&&(l+=" "),l+=t);return l}n.d(t,{Z:function(){return l}})},6563:function(e,t){"use strict";t.Z={dbeInstall:"dbeInstall_27gX",fixedHeight:"fixedHeight_2DKB",dbeBuildUrhoApp:"dbeBuildUrhoApp_hg99",requirements:"requirements_3RFz",cliInstall:"cliInstall_2A-F",cliUrhoApp:"cliUrhoApp_1MZ7",ideInstall:"ideInstall_3yeU",ideUrhoApp:"ideUrhoApp_3cTW",infoFixedHeight:"infoFixedHeight_3b4Y"}}}]);