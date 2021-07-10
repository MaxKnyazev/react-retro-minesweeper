(this["webpackJsonpreact-retro-minesweeper"]=this["webpackJsonpreact-retro-minesweeper"]||[]).push([[0],{29:function(t,e,i){},30:function(t,e,i){},31:function(t,e,i){},33:function(t,e,i){},39:function(t,e,i){},40:function(t,e,i){},41:function(t,e,i){},42:function(t,e,i){},43:function(t,e,i){},44:function(t,e,i){},45:function(t,e,i){"use strict";i.r(e);var s=i(1),n=i.n(s),a=i(21),r=i.n(a),c=(i(29),i(3)),o=i(4),h=i(7),l=i(6),u=i(14),d=i(2),m=(i(30),i(12)),j=(i(31),new(function(){function t(){Object(c.a)(this,t),this._w=12,this._h=12,this._m=28}return Object(o.a)(t,[{key:"w",get:function(){return this._w},set:function(t){this._w=t}},{key:"h",get:function(){return this._h},set:function(t){this._h=t}},{key:"m",get:function(){return this._m},set:function(t){this._m=t}}]),t}())),b=i(0),p=function(t){Object(h.a)(i,t);var e=Object(l.a)(i);function i(){var t;Object(c.a)(this,i);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))).width=j.w,t.height=j.h,t.quantityMines=j.m,t}return Object(o.a)(i,[{key:"render",value:function(){var t=this,e=this.props.options,i=e.arrGameField,s=e.isGameOver;return Object(b.jsx)("div",{className:"field__main",children:Object(b.jsx)("div",{className:"field__wrapper",children:Object(b.jsx)("div",{className:"field",style:{gridTemplateRows:"repeat(".concat(this.height,", 1fr)"),gridTemplateColumns:"repeat(".concat(this.width,", 1fr)")},children:i.map((function(e,i){return e.map((function(e,n){var a="".concat(i,":").concat(n," "),r="field__element";return e>=0&&e<9&&-1!==e&&(r+=" field__element--".concat(e)),9!==e&&-1!==e||(9===e&&s&&(r+=" field__element--mine"),e=""),e>=49&&(r+=" field__element--marked"),Object(b.jsx)("span",{onClick:t.props.leftClickHandler,onContextMenu:t.props.rightClickHandler,id:a,className:r,children:e},a)}))}))})})})}}]),i}(n.a.Component),f=(i(33),function(t){Object(h.a)(i,t);var e=Object(l.a)(i);function i(){var t;Object(c.a)(this,i);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))).state={redirect:!1},t.buttonSettingsHandler=function(){t.setState({redirect:!0})},t}return Object(o.a)(i,[{key:"render",value:function(){return Object(b.jsxs)("section",{className:"game__control",children:[Object(b.jsx)("button",{onClick:this.buttonSettingsHandler,className:"button__control",children:"Back to settings"}),this.state.redirect?Object(b.jsx)(d.a,{to:"/"}):null,this.props.itIsVictory?Object(b.jsx)("div",{className:"game__overInfo",children:"Victory!"}):null,this.props.itIsDefeat?Object(b.jsx)("div",{className:"game__overInfo game__overInfo--defeat",children:"Defeat"}):null,Object(b.jsx)("button",{onClick:this.props.restartHandler,className:"button__control",children:"Restart"})]})}}]),i}(n.a.Component)),g=(i(39),i(40),function(t){Object(h.a)(i,t);var e=Object(l.a)(i);function i(){return Object(c.a)(this,i),e.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return console.log("this.props"),console.log(this.props),Object(b.jsx)("div",{className:"mine__counter",children:this.props.count})}}]),i}(n.a.Component)),O=(i(41),function(t){Object(h.a)(i,t);var e=Object(l.a)(i);function i(){return Object(c.a)(this,i),e.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"timer",children:[this.props.timer>=0&&this.props.timer<=9&&"000".concat(this.props.timer),this.props.timer>=10&&this.props.timer<=99&&"00".concat(this.props.timer),this.props.timer>=100&&this.props.timer<=999&&"0".concat(this.props.timer),this.props.timer>=1e3&&this.props.timer<=9999&&"".concat(this.props.timer),this.props.timer>=9999&&"9999"]})}}]),i}(n.a.Component)),v=function(t){Object(h.a)(i,t);var e=Object(l.a)(i);function i(){return Object(c.a)(this,i),e.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(b.jsxs)("section",{className:"game__info",style:{width:"".concat(1.5*j.w,"rem"),minWidth:"20vw"},children:[Object(b.jsx)(O,{timer:this.props.timer}),Object(b.jsx)(g,{count:this.props.count})]})}}]),i}(n.a.Component),_=(i(42),i(24)),x=i(23),w=function(t,e){for(var i=[],s=0;s<t;s++)i[s]=[];for(var n=0;n<t;n++)for(var a=0;a<e;a++)i[n][a]=-1;return i},S=function(t,e){var i=t+Math.random()*(e+1-t);return Math.floor(i)},y=function(t,e,i,s,n,a){for(var r,c,o=0;o<s;)r=S(0,e-1),c=S(0,i-1),-1===t[r][c]&&(Math.abs(n-r)>1||Math.abs(a-c)>1)&&(t[r][c]=9,o+=1);return t},C=function(t,e,i,s,n){var a=0;return e-1>=0&&i-1>=0&&(9!==t[e-1][i-1]&&59!==t[e-1][i-1]||(a+=1)),i-1>=0&&(9!==t[e][i-1]&&59!==t[e][i-1]||(a+=1)),e+1<s&&i-1>=0&&(9!==t[e+1][i-1]&&59!==t[e+1][i-1]||(a+=1)),e-1>=0&&(9!==t[e-1][i]&&59!==t[e-1][i]||(a+=1)),e+1<s&&(9!==t[e+1][i]&&59!==t[e+1][i]||(a+=1)),e-1>=0&&i+1<n&&(9!==t[e-1][i+1]&&59!==t[e-1][i+1]||(a+=1)),i+1<n&&(9!==t[e][i+1]&&59!==t[e][i+1]||(a+=1)),e+1<s&&i+1<n&&(9!==t[e+1][i+1]&&59!==t[e+1][i+1]||(a+=1)),a},k=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;return t.split(e).map((function(t){return+t}))},N=function(t,e,i,s,n){var a=new Set;t[s][n]=0,a.add("".concat(s,":").concat(n));var r,c=Object(x.a)(a);try{for(c.s();!(r=c.n()).done;){var o=r.value,h=k(o,":"),l=Object(_.a)(h,2);s=l[0],n=l[1],s-1>=0&&n-1>=0&&(t[s-1][n-1]=C(t,s-1,n-1,e,i),0===t[s-1][n-1]&&a.add("".concat(s-1,":").concat(n-1))),n-1>=0&&(t[s][n-1]=C(t,s,n-1,e,i),0===t[s][n-1]&&a.add("".concat(s,":").concat(n-1))),s+1<e&&n-1>=0&&(t[s+1][n-1]=C(t,s+1,n-1,e,i),0===t[s+1][n-1]&&a.add("".concat(s+1,":").concat(n-1))),s-1>=0&&(t[s-1][n]=C(t,s-1,n,e,i),0===t[s-1][n]&&a.add("".concat(s-1,":").concat(n))),s+1<e&&(t[s+1][n]=C(t,s+1,n,e,i),0===t[s+1][n]&&a.add("".concat(s+1,":").concat(n))),s-1>=0&&n+1<i&&(t[s-1][n+1]=C(t,s-1,n+1,e,i),0===t[s-1][n+1]&&a.add("".concat(s-1,":").concat(n+1))),n+1<i&&(t[s][n+1]=C(t,s,n+1,e,i),0===t[s][n+1]&&a.add("".concat(s,":").concat(n+1))),s+1<e&&n+1<i&&(t[s+1][n+1]=C(t,s+1,n+1,e,i),0===t[s+1][n+1]&&a.add("".concat(s+1,":").concat(n+1)))}}catch(u){c.e(u)}finally{c.f()}return t},M=function(t,e,i){for(var s=0;s<e;s++)for(var n=0;n<i;n++)-1===t[s][n]&&(t[s][n]=C(t,s,n,e,i))},G=function(t,e,i){for(var s=0,n=0;n<e;n++)for(var a=0;a<i;a++)t[n][a]>=49&&(s+=1);return s},H=function(t){Object(h.a)(i,t);var e=Object(l.a)(i);function i(){var t;Object(c.a)(this,i);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))).state={isGameStart:!1,isGameOver:!1,itIsVictory:!1,itIsDefeat:!1,arrGameField:[[]],countMines:0,timer:0},t.timerCounter=null,t.width=j.w,t.height=j.h,t.quantityMines=j.m,t.leftClickHandler=function(e){var i=+e.target.id.split(":")[0],s=+e.target.id.split(":")[1],n=C(t.state.arrGameField,i,s,t.height,t.width),a=JSON.parse(JSON.stringify(t.state.arrGameField));t.state.isGameStart?e.target.classList.contains("field__element--marked")||t.state.isGameOver||(9===t.state.arrGameField[i][s]?(console.log("Game over"),console.log(t.state),M(a,t.height,t.width),clearInterval(t.timerCounter),t.setState({isGameOver:!0,itIsDefeat:!0,arrGameField:a})):0===n?(a=N(a,t.height,t.width,i,s),t.setState({countMines:t.quantityMines-G(a,t.width,t.height),arrGameField:a})):((a=JSON.parse(JSON.stringify(t.state.arrGameField)))[i][s]=n,t.setState((function(t){return Object(m.a)(Object(m.a)({},t),{},{arrGameField:a})})))):(a=y(a,t.height,t.width,t.quantityMines,i,s),a=N(a,t.height,t.width,i,s),t.setState((function(t){return Object(m.a)(Object(m.a)({},t),{},{isGameStart:!0,arrGameField:a})})),t.timerCounter=setInterval((function(){console.log("timer start"),t.state.isGameStart&&!t.state.isGameOver&&t.setState((function(t){return{timer:t.timer+1}}))}),1e3)),console.log(e.target.id),console.log("arrGameField"),console.log(t.state.arrGameField),console.log("countMines = ".concat(t.state.countMines))},t.rightClickHandler=function(e){if(e.preventDefault(),t.state.isGameStart&&!t.state.isGameOver){var i=JSON.parse(JSON.stringify(t.state.arrGameField)),s=+e.target.id.split(":")[0],n=+e.target.id.split(":")[1];(-1===i[s][n]||i[s][n]>=9)&&(i[s][n]<49?(i[s][n]+=50,t.setState((function(t){return{countMines:t.countMines-1,arrGameField:i}}))):(i[s][n]-=50,t.setState((function(t){return{countMines:t.countMines+1,arrGameField:i}}))),console.log("\u043f\u0440\u0430\u0432\u044b\u0439 \u043a\u043b\u0438\u043a"))}},t.restartHandler=function(){clearInterval(t.timerCounter),t.timerCounter=null,t.setState({isGameStart:!1,isGameOver:!1,itIsVictory:!1,itIsDefeat:!1,timer:0,arrGameField:w(t.height,t.width),countMines:t.quantityMines})},t}return Object(o.a)(i,[{key:"componentDidMount",value:function(){this.setState(Object(m.a)(Object(m.a)({},this.state),{},{arrGameField:w(this.height,this.width),countMines:this.quantityMines}))}},{key:"componentDidUpdate",value:function(){this.state.isGameOver&&console.log("GameOver (componentDidUpdate)"),function(t,e,i){for(var s=0,n=0;n<e;n++)for(var a=0;a<i;a++)-1!==t[n][a]&&49!==t[n][a]||(s+=1);return!s}(this.state.arrGameField,this.height,this.width)&&!this.state.isGameOver&&(console.log("it is victory"),clearInterval(this.timerCounter),this.setState({itIsVictory:!0,isGameOver:!0}))}},{key:"render",value:function(){return console.log("arrGameField"),console.log(this.state.arrGameField),Object(b.jsxs)("main",{className:"main",children:[Object(b.jsx)(v,{count:this.state.countMines,timer:this.state.timer}),Object(b.jsx)(p,{leftClickHandler:this.leftClickHandler,options:this.state,rightClickHandler:this.rightClickHandler}),Object(b.jsx)(f,{restartHandler:this.restartHandler,itIsVictory:this.state.itIsVictory,itIsDefeat:this.state.itIsDefeat})]})}}]),i}(n.a.Component),D=(i(43),i(44),function(t){Object(h.a)(i,t);var e=Object(l.a)(i);function i(){return Object(c.a)(this,i),e.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"error",children:[Object(b.jsx)("p",{children:"Error! This data is incorrect!"}),Object(b.jsx)("p",{children:"3 < width < 41"}),Object(b.jsx)("p",{children:"3 < height < 41"}),Object(b.jsx)("p",{children:"0 < mines < width * height - 9"})]})}}]),i}(n.a.Component)),F=function(t){Object(h.a)(i,t);var e=Object(l.a)(i);function i(){var t;Object(c.a)(this,i);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))).state={width:j.w,height:j.h,mines:j.m,maxMines:j.w*j.h-9,isDataCorrect:!1,showError:!1,test:j.h},t.inputWidthHandler=function(e){var i=e.target.value;i=i.split("").filter((function(t){return t.charCodeAt()>=48&&t.charCodeAt()<=57})).join(""),console.log(i),""===i&&t.setState({width:4}),+i>=0&&+i<=40&&(1===i.length&&("0"===i?t.setState({width:4}):t.setState({width:+i})),2===i.length&&(0===+i?t.setState({width:4}):t.setState({width:+i}))),+i>40&&t.setState({width:40})},t.inputHeightHandler=function(e){var i=e.target.value;i=i.split("").filter((function(t){return t.charCodeAt()>=48&&t.charCodeAt()<=57})).join(""),console.log(i),""===i&&t.setState({height:4}),+i>=0&&+i<=40&&(1===i.length&&("0"===i?t.setState({height:4}):t.setState({height:+i})),2===i.length&&(0===+i?t.setState({height:4}):t.setState({height:+i}))),+i>40&&t.setState({height:40})},t.inputMinesHandler=function(e){var i=e.target.value;i=i.split("").filter((function(t){return t.charCodeAt()>=48&&t.charCodeAt()<=57})).join(""),console.log(i),""===i&&t.setState({mines:1}),+i>=0&&+i<=t.state.maxMines&&(1===i.length&&("0"===i?t.setState({mines:1}):t.setState({mines:+i})),i.length>=2&&(0===+i?t.setState({mines:1}):t.setState({mines:+i}))),+i>t.state.maxMines&&t.setState({mines:t.state.maxMines})},t.clickHandler=function(){t.state.width>=4&&t.state.width<=40&&t.state.height>=4&&t.state.height<=40&&t.state.mines>=1&&t.state.mines<=t.state.maxMines?(t.setState({isDataCorrect:!0}),j.w=t.state.width,j.h=t.state.height,j.m=t.state.mines):(t.setState({showError:!0}),t.state.width<4&&t.setState({width:4}),t.state.width>40&&t.setState({width:40}),t.state.height<4&&t.setState({height:4}),t.state.height>40&&t.setState({height:40}))},t.buttonWidthUp=function(){t.state.width<40&&t.setState({width:t.state.width+1})},t.buttonWidthDown=function(){t.state.width>4&&t.setState({width:t.state.width-1})},t.buttonHeightUp=function(){t.state.height<40&&t.setState({height:t.state.height+1})},t.buttonHeightDown=function(){t.state.height>4&&t.setState({height:t.state.height-1})},t.buttonMinesUp=function(){t.state.mines<t.state.maxMines&&t.setState({mines:t.state.mines+1})},t.buttonMinesDown=function(){t.state.mines>1&&t.setState({mines:t.state.mines-1})},t.xxx=function(t){t.target.value.charCode>=48&&t.target.value.charCode<=57&&console.log("*********************")},t}return Object(o.a)(i,[{key:"componentDidUpdate",value:function(t,e){console.log(this.state),this.state.mines>this.state.maxMines&&this.setState({mines:this.state.maxMines}),this.state.width*this.state.height-9!==this.state.maxMines&&this.state.width*this.state.height-9>0&&this.setState({maxMines:this.state.width*this.state.height-9})}},{key:"render",value:function(){return Object(b.jsxs)("section",{className:"settings",children:[Object(b.jsx)("div",{className:"settings__title",children:"Settings"}),this.state.showError?Object(b.jsx)(D,{}):Object(b.jsx)("div",{style:{height:"17.5vh"}}),Object(b.jsxs)("div",{className:"settings__inputs",children:[Object(b.jsxs)("div",{className:"settings__block",children:[Object(b.jsx)("div",{className:"settings__label",children:"Width :"}),Object(b.jsxs)("div",{className:"settings__edit-elems edit-elems",children:[Object(b.jsx)("button",{onClick:this.buttonWidthDown,className:this.state.width<5?"edit-elems__button edit-elems__button--passive":"edit-elems__button",children:"<"}),Object(b.jsx)("input",{className:"edit-elems__input",onChange:this.inputWidthHandler,type:"text",value:this.state.width}),Object(b.jsx)("button",{onClick:this.buttonWidthUp,className:this.state.width>39?"edit-elems__button edit-elems__button--passive":"edit-elems__button",children:">"})]})]}),Object(b.jsxs)("div",{className:"settings__block",children:[Object(b.jsx)("div",{className:"settings__label",children:"Height :"}),Object(b.jsxs)("div",{className:"settings__edit-elems edit-elems",children:[Object(b.jsx)("button",{onClick:this.buttonHeightDown,className:this.state.height<5?"edit-elems__button edit-elems__button--passive":"edit-elems__button",children:"<"}),Object(b.jsx)("input",{className:"edit-elems__input",onChange:this.inputHeightHandler,type:"text",value:this.state.height}),Object(b.jsx)("button",{onClick:this.buttonHeightUp,className:this.state.height>39?"edit-elems__button edit-elems__button--passive":"edit-elems__button",children:">"})]})]}),Object(b.jsxs)("div",{className:"settings__block",children:[Object(b.jsx)("div",{className:"settings__label",children:"Mines :"}),Object(b.jsxs)("div",{className:"settings__edit-elems edit-elems",children:[Object(b.jsx)("button",{onClick:this.buttonMinesDown,className:this.state.mines<2?"edit-elems__button edit-elems__button--passive":"edit-elems__button",children:"<"}),Object(b.jsx)("input",{className:"edit-elems__input",onChange:this.inputMinesHandler,type:"text",value:this.state.mines}),Object(b.jsx)("button",{onClick:this.buttonMinesUp,className:this.state.mines>this.state.maxMines-1?"edit-elems__button edit-elems__button--passive":"edit-elems__button",children:">"})]})]})]}),Object(b.jsxs)("button",{onClick:this.clickHandler,className:"settings__button",children:["Start Game",this.state.isDataCorrect?Object(b.jsx)(d.a,{to:"/game"}):null]})]})}}]),i}(n.a.Component),I=function(t){Object(h.a)(i,t);var e=Object(l.a)(i);function i(){return Object(c.a)(this,i),e.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(b.jsx)(u.a,{children:Object(b.jsxs)(d.d,{children:[Object(b.jsx)(d.b,{path:"/game",children:Object(b.jsx)(H,{})}),Object(b.jsx)(d.b,{path:"/",children:Object(b.jsx)(F,{})})]})})}}]),i}(n.a.Component);r.a.render(Object(b.jsx)(I,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.adc77d99.chunk.js.map