(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),o=n(2),i=n(3),r=n(5),s=n(4),l=n(1),d=(n(12),n(0));function u(){return(new Date).toUTCString().slice(-12,-4)}function m(t){var e=t.toString().slice(-4);return"Clock-".concat(e)}var h=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={today:u()},t.timerIdClockName=0,t.timerIdToday=0,t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerIdToday=window.setInterval((function(){t.setState({today:u()}),console.info(t.state.today)}),1e3)}},{key:"componentDidUpdate",value:function(t){+this.props.date-+t.date>3050&&console.debug("Renamed from ".concat(m(t.date))+" to ".concat(m(this.props.date)))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerIdToday)}},{key:"render",value:function(){var t=this.state.today,e=this.props.date;return Object(d.jsxs)("div",{className:"Clock",children:[Object(d.jsx)("strong",{className:"Clock__name",children:m(e)})," time is ",Object(d.jsx)("span",{className:"Clock__time",children:t})]})}}]),n}(l.Component),v=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={hasClock:!0,clockDate:0},t.timerIdClockDate=0,t.handleClick=function(){t.setState({hasClock:!0})},t.handleContextmenu=function(e){e.preventDefault(),t.setState({hasClock:!1})},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerIdClockDate=window.setInterval((function(){t.setState({clockDate:Date.now()})}),3300),document.addEventListener("click",(function(){t.handleClick()})),document.addEventListener("contextmenu",(function(e){t.handleContextmenu(e)}))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.handleClick),document.removeEventListener("contextmenu",this.handleContextmenu),window.clearInterval(this.timerIdClockDate)}},{key:"render",value:function(){var t=this.state,e=t.hasClock,n=t.clockDate;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"React clock"}),e&&Object(d.jsx)(h,{date:n})]})}}]),n}(l.Component);a.a.render(Object(d.jsx)(v,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.ec5f58e3.chunk.js.map