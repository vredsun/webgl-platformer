(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./src/ui/atomic/pages/start_game/StartGamePage.tsx":function(e,t,a){"use strict";a.r(t);var s=a("./node_modules/react/index.js"),n=a("./node_modules/react-redux/es/index.js"),o=a("./src/ui/atomic/atoms/ui_menu/UiMenu.ts"),r=a("./src/store/ui/selectors.ts"),i=a("./src/ui/global_hooks/useInitialDataIsLoaded/index.ts"),c=a("./src/store/loading/types.ts"),u=a("./src/store/loading/selectors.ts"),d=s.memo((function(e){Object(i.a)(c.a.START_PAGE);var t=Object(n.c)(r.d),a=Object(n.c)(u.a);return s.useEffect((function(){console.info({isInitialLoading:a})}),[a]),s.createElement(o.a,{allPointerEvents:t?"all":"none"},s.createElement("div",null,"StartGamePage"))}));t.default=d},"./src/ui/global_hooks/useInitialDataIsLoaded/index.ts":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var s=a("./node_modules/react/index.js"),n=a("./node_modules/react-redux/es/index.js"),o=a("./src/store/loading/reducer.ts");var r=function(e,t){return{type:o.a,payload:(a={},s=e,n=t,s in a?Object.defineProperty(a,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[s]=n,a)};var a,s,n},i=function(e){var t=Object(n.b)();s.useEffect((function(){t(r(e,!1))}),[])}}}]);