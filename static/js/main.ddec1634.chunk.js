(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,a,t){e.exports=t(75)},43:function(e,a,t){},75:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(16),l=t.n(c),o=(t(42),t(79)),s=t(78),u=t(80),i=t(8),m=(t(43),t(77)),d=function(e){return n.a.createElement("div",{className:"header-grid"},n.a.createElement("div",{className:"header-grid__logo"}),n.a.createElement("div",{className:"header-grid__nav"},n.a.createElement("ul",{className:"header-nav"},n.a.createElement("li",{className:"header-nav__item"},n.a.createElement(m.a,{to:"/markets"},"Markets")),n.a.createElement("li",{className:"header-nav__item"},n.a.createElement(m.a,{to:"/stock"},"Stock Quote")),n.a.createElement("li",{className:"header-nav__item"},n.a.createElement(m.a,{to:"/forex"},"Forex")))))},h=t(2),p=t.n(h),v=t(6),g=t(15),E=t(81),f=t(82),_=t(7),y=t.n(_),k=t(10),b=t(11),N=t(13),C=t(12),w=t(14),S=function(e){var a=e.stock,t=e.color,r=e.handleQuoteChange,c=a.symbol,l=a.name,o=a.price,s=a.day_change,u=a.change_pct;return n.a.createElement("div",{className:"featured-container__item",key:c},n.a.createElement("ul",{className:"featured-stock",style:{cursor:"pointer"},onClick:function(){r(a.symbol)}},n.a.createElement("li",{className:"featured-stock__name"},l),n.a.createElement("li",{className:"featured-stock__price"},o),n.a.createElement("li",{className:"featured-stock__change",style:{color:t}},"".concat(s," (").concat(u,"%)"))))},x=function(e){var a=e.featuredStocks,t=e.handleQuoteChange,r=e.upColor,c=e.downColor;return n.a.createElement("div",{className:"featured-container"},a.map(function(e){var a=e.day_change>=0?r:c;return n.a.createElement(S,{key:e.symbol,stock:e,color:a,handleQuoteChange:t})}))},O=t(34),j=t.n(O),A=t(35),D=t.n(A),q=function(e){var a=e.quote,t=e.currentQuoteColor,r=e.historicData,c=a.name,l=a.symbol,o=a.price,s=a.stock_exchange_long,u=a.day_change,i=a.change_pct,m=a.price_open,d=a.day_high,h=a.day_low,p=a.volume,v=a.volume_avg,g=a["52_week_high"],E=a["52_week_low"];return n.a.createElement("div",{className:"quote-grid",style:{borderTop:"solid 1rem ".concat(t)}},n.a.createElement("div",{className:"quote-grid__header"},n.a.createElement("ul",{className:"quote-header"},n.a.createElement("li",{className:"quote-header__name-and-symbol"},n.a.createElement("span",{className:"quote-header__name"},c),n.a.createElement("span",{className:"quote-header__symbol"},"(".concat(l,")"))),n.a.createElement("li",{className:"quote-header__exchange"},s),n.a.createElement("li",{className:"quote-header__price"},o),n.a.createElement("li",{className:"quote-header__change",style:{color:t}},"".concat(u," (").concat(i,")%")))),n.a.createElement("div",{className:"quote-grid__details"},n.a.createElement("table",{className:"quote-details-table"},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Open"),n.a.createElement("td",null,m)),n.a.createElement("tr",null,n.a.createElement("td",null,"Day's Range"),n.a.createElement("td",null,"".concat(h," - ").concat(d))),n.a.createElement("tr",null,n.a.createElement("td",null,"52 Week Range"),n.a.createElement("td",null,"".concat(E," - ").concat(g))),n.a.createElement("tr",null,n.a.createElement("td",null,"Volume"),n.a.createElement("td",null,p)),n.a.createElement("tr",null,n.a.createElement("td",null,"Avg. Volume"),n.a.createElement("td",null,v))))),n.a.createElement("div",{className:"quote-grid__highchart"},n.a.createElement(D.a,{highcharts:j.a,constructorType:"stockChart",options:{series:[{data:r,tooltip:{valueDecimals:2}}],credits:{enabled:!1}}})))},B=function(e){function a(){var e,t;Object(k.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=Object(N.a)(this,(e=Object(C.a)(a)).call.apply(e,[this].concat(n)))).state={featuredIsLoading:!0,featuredStockSymbols:"^DJI,^SP400,^IXIC",featuredStocks:[]},t.getFeaturedStocks=function(){var e=Object(v.a)(p.a.mark(function e(a){var r,n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y()("https://www.worldtradingdata.com/api/v1/stock?symbol=".concat(a,"&api_token=").concat(t.props.apiKey));case 3:r=e.sent,n=r.data.data,t.setState({featuredStocks:n,featuredIsLoading:!1}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error fetching featured stocks",e.t0);case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(a){return e.apply(this,arguments)}}(),t}return Object(w.a)(a,e),Object(b.a)(a,[{key:"componentDidMount",value:function(){this.getFeaturedStocks(this.state.featuredStockSymbols)}},{key:"render",value:function(){var e=this.state,a=e.featuredStocks,t=e.featuredIsLoading,r=this.props,c=r.upColor,l=r.downColor,o=r.handleQuoteChange,s=r.quote,u=r.quoteIsLoading,m=r.historicData,d=s.day_change>=0?c:l;return t?null:n.a.createElement("div",{className:"markets-grid"},n.a.createElement("div",{className:"markets-grid__heading"},n.a.createElement("h2",null,"Market Overview")),t?null:n.a.createElement("div",{className:"markets-grid__overview"},n.a.createElement(x,{featuredIsLoading:t,featuredStocks:a,upColor:c,downColor:l,handleQuoteChange:o})),n.a.createElement("div",{className:"markets-grid__info"},u?n.a.createElement("div",null,"Click Items for Details"):n.a.createElement(i.TransitionGroup,{className:"transition-group"},n.a.createElement(i.CSSTransition,{key:s.symbol,in:!0,appear:!0,timeout:500,classNames:"slide"},n.a.createElement("section",{className:"route-section"},n.a.createElement(q,{currentQuoteColor:d,quote:s,historicData:m}))))))}}]),a}(r.Component),F={};var R=function(){var e;return function(){var a=Object(v.a)(p.a.mark(function a(t){var r,n;return p.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(e&&e.cancel(),e=y.a.CancelToken.source(),a.prev=2,!F[t]){a.next=5;break}return a.abrupt("return",F[t]);case 5:return a.next=7,y()(t,{cancelToken:e.token});case 7:return r=a.sent,n=r.data,F[t]=n,a.abrupt("return",n);case 13:a.prev=13,a.t0=a.catch(2),y.a.isCancel(a.t0)?console.log("Request canceled",a.t0.message):console.log("Something went wrong: ",a.t0);case 16:case"end":return a.stop()}},a,null,[[2,13]])}));return function(e){return a.apply(this,arguments)}}()}(),I=function(e){var a=e.clearSearch,t=e.cursor,r=e.handleSearchChange,c=e.handleQuoteChange,l=e.handleSearchKeyDowns,o=e.searchValue,s=e.searchResults;return n.a.createElement("div",{className:"search-container"},n.a.createElement("form",{className:"searchForm"},n.a.createElement("div",{className:"searchForm__inputs"},n.a.createElement("input",{type:"text",className:"searchForm__text",placeholder:"Search by symbol or name",value:o,onChange:function(e){return r(e)},onKeyDown:l,onBlur:a}),""!==o&&n.a.createElement("button",{className:"searchForm__clear",onClick:function(e){e.preventDefault(),a()}},"clear")),null!=s&&""!==o&&n.a.createElement("div",{className:"searchForm__results"},s.map(function(e,a){var r=e.symbol,l=e.name;return n.a.createElement("ul",{className:t===a?"searchForm__result active":"searchForm__result",key:r,onMouseDown:function(){c(r)},style:{cursor:"pointer"}},n.a.createElement("li",{className:"searchForm__resultSymbol"},r),n.a.createElement("li",{className:"searchForm__resultName"},l))}))))},Q=function(e){function a(){var e,t;Object(k.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=Object(N.a)(this,(e=Object(C.a)(a)).call.apply(e,[this].concat(n)))).state={cursor:0,searchValue:"",searchResults:null},t.search=function(){var e=Object(v.a)(p.a.mark(function e(a){var r,n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R("https://www.worldtradingdata.com/api/v1/stock_search?search_term=".concat(a,"&search_by=symbol,name&limit=50&page=1&api_token=").concat(t.props.apiKey));case 3:r=e.sent,n=r.data,t.setState({searchResults:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("No search results");case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(a){return e.apply(this,arguments)}}(),t.handleSearchChange=function(e){t.search(e.target.value),t.setState({searchValue:e.target.value})},t.clearSearch=function(){t.setState({searchValue:"",cursor:0})},t.handleSearchKeyDowns=function(e){var a=t.state,r=a.cursor,n=a.searchResults,c=a.searchValue;38===e.keyCode&&r>0?t.setState(function(e){return{cursor:e.cursor-1}}):40===e.keyCode&&r<n.length-1?t.setState(function(e){return{cursor:e.cursor+1}}):13===e.keyCode?(e.preventDefault(),t.props.handleQuoteChange(n[r].symbol),t.clearSearch()):(27===e.keyCode||8===e.keyCode&&c.length<=1)&&t.clearSearch()},t}return Object(w.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){var e=this.state,a=e.cursor,t=e.searchValue,r=e.searchResults,c=this.props,l=c.upColor,o=c.downColor,s=c.handleQuoteChange,u=c.quote,m=c.quoteIsLoading,d=c.historicData,h=u.day_change>=0?l:o;return n.a.createElement("div",{className:"stock-grid"},n.a.createElement("div",{className:"stock-grid__heading"},n.a.createElement("h2",null,"Get a Stock Quote")),n.a.createElement("div",{className:"stock-grid__search"},n.a.createElement(I,{clearSearch:this.clearSearch,cursor:a,searchValue:t,searchResults:r,handleSearchChange:this.handleSearchChange,handleQuoteChange:s,handleSearchKeyDowns:this.handleSearchKeyDowns})),n.a.createElement("div",{className:"stock-grid__info"},m?null:n.a.createElement(i.TransitionGroup,{className:"transition-group"},n.a.createElement(i.CSSTransition,{key:u.symbol,in:!0,appear:!0,timeout:500,classNames:"slide"},n.a.createElement("section",{className:"route-section"},n.a.createElement(q,{currentQuoteColor:h,quote:u,historicData:d}))))))}}]),a}(r.Component),L=t(1),T=t.n(L),K=function(e){var a=e.currenciesArray,t=e.onSelectCurrency;return n.a.createElement("select",{id:"convert-select",className:"calculator__convert-select",onChange:function(e){return t(e.target.value)}},a.map(function(e,a){var t=e.name,r=e.value;return n.a.createElement("option",{value:r,key:a},t)}))};K.prototypes={currenciesArray:T.a.array.isRequired,onSelectCurrency:T.a.func.isRequired};var V=K,P=function(e){var a=e.onSelectCurrency,t=e.valueA,r=e.valueB,c=e.handleInputChange;return n.a.createElement("div",{className:"calculator"},n.a.createElement("div",{className:"calculator__currency-A"},n.a.createElement("label",{htmlFor:"usd-input",className:"calculator__label-A"},"US Dollars"),n.a.createElement("br",null),n.a.createElement("input",{className:"calculator__input-A calculator__input--style",value:t,type:"number",name:"usd",id:"usd-input",onChange:function(e){c(e,"A")}})),n.a.createElement("div",{className:"calculator__equals-sign"},"="),n.a.createElement("div",{className:"calculator__currency-B"},n.a.createElement("div",{className:"calculator__select"},n.a.createElement("label",{htmlFor:"convert-select",className:"calculator__select-label"},"Convert to:"),n.a.createElement(V,{currenciesArray:[{name:"European Euros",value:"EUR"},{name:"Japanese Yen",value:"JPY"},{name:"British Pounds",value:"GBP"},{name:"Swiss Francs",value:"CHF"},{name:"Canadian Dollars",value:"CAD"},{name:"Australian Dollars",value:"AUD"},{name:"New Zealand",value:"NZD"},{name:"South African Rand",value:"ZAR"}],onSelectCurrency:a})),n.a.createElement("input",{className:"calculator__input-B calculator__input--style",value:r,type:"number",name:"convert-to",id:"convert-to",onChange:function(e){c(e,"B")}})))},U=function(e){function a(){var e,t;Object(k.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=Object(N.a)(this,(e=Object(C.a)(a)).call.apply(e,[this].concat(n)))).state={currencyA:"USD",currencyB:"EUR",valueA:1,valueB:0,rates:[],ratesAreLoading:!0},t.getExchangeRates=function(){var e=Object(v.a)(p.a.mark(function e(a){var r,n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y()("https://www.worldtradingdata.com/api/v1/forex?base=".concat(a,"&sort=newest&api_token=").concat(t.props.apiKey));case 3:r=e.sent,n=r.data.data,t.setState({valueB:n[t.state.currencyB],rates:n,ratesAreLoading:!1}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error fetching stock data",e.t0);case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(a){return e.apply(this,arguments)}}(),t.onSelectCurrency=function(e){var a=t.state,r=a.valueA,n=a.rates;t.setState({currencyB:e,valueB:(r*n[e]).toFixed(6)})},t.handleInputChange=function(e,a){var r=t.state,n=r.currencyB,c=r.rates[n];if("A"===a){var l=e.target.value;t.setState({valueA:l,valueB:(l*c).toFixed(6)})}if("B"===a){var o=e.target.value;t.setState({valueB:o,valueA:(o/c).toFixed(6)})}},t}return Object(w.a)(a,e),Object(b.a)(a,[{key:"componentDidMount",value:function(){this.getExchangeRates(this.state.currencyA)}},{key:"render",value:function(){var e=this.state,a=e.valueA,t=e.valueB,r=e.currencyA,c=e.currencyB,l=e.ratesAreLoading,o=e.rates;return l?null:n.a.createElement("div",{className:"forex-grid"},n.a.createElement("div",{className:"forex-grid__heading"},n.a.createElement("h2",null,"Exchange Rate Calculator")),n.a.createElement("div",{className:"forex-grid__calculator"},n.a.createElement(P,{onSelectCurrency:this.onSelectCurrency,handleInputChange:this.handleInputChange,valueA:a,valueB:t,ratesAreLoading:l})),n.a.createElement("div",{className:"forex-grid__exchange-rate"},n.a.createElement("p",null,"1 ".concat(r," equals ").concat(o[c]," ").concat(c,"."))))}}]),a}(r.Component);function M(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=new Date,t=a.getDate(),r=a.getMonth()+1,n=a.getFullYear()-e;return t<10&&(t="0"+t),r<10&&(r="0"+r),"".concat(n,"-").concat(r,"-").concat(t)}function G(e){return Object.keys(e).map(function(a){return[(t=a,new Date(t).getTime()),Number(e[a].close)];var t})}var J=Object(f.a)(function(e){var a=e.location,t=Object(r.useState)({}),c=Object(g.a)(t,2),l=c[0],o=c[1],u=Object(r.useState)([]),m=Object(g.a)(u,2),d=m[0],h=m[1],f=Object(r.useState)(""),_=Object(g.a)(f,2),k=_[0],b=_[1],N=Object(r.useState)(!0),C=Object(g.a)(N,2),w=C[0],S=C[1],x=function(e){O(e),j(e),b(e)},O=function(){var e=Object(v.a)(p.a.mark(function e(a){var t,r,n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y()("https://www.worldtradingdata.com/api/v1/stock?symbol=".concat(a,"&api_token=").concat(A));case 3:t=e.sent,r=t.data.data,n=r[0],o(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Error fetching stock data",e.t0);case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(a){return e.apply(this,arguments)}}(),j=function(){var e=Object(v.a)(p.a.mark(function e(a){var t,r,n,c;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=M(1),e.prev=1,e.next=4,y()("https://api.worldtradingdata.com/api/v1/history?symbol=".concat(a,"&date_from=").concat(t,"&sort=oldest&api_token=").concat(A));case 4:r=e.sent,n=r.data.history,c=G(n),h(c),S(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log("Error fetching stock data",e.t0);case 14:case"end":return e.stop()}},e,null,[[1,11]])}));return function(a){return e.apply(this,arguments)}}(),A=Object({NODE_ENV:"production",PUBLIC_URL:"/react-stocks"}).REACT_APP_API_KEY;return n.a.createElement(i.TransitionGroup,{className:"transition-group"},n.a.createElement(i.CSSTransition,{key:a.pathname,timeout:700,classNames:"fade"},n.a.createElement("section",{className:"route-section"},n.a.createElement(E.a,{location:a},n.a.createElement(s.a,{path:"/markets",render:function(e){return n.a.createElement(B,Object.assign({},e,{upColor:"#1ac567",downColor:"#ff333a",apiKey:A,handleQuoteChange:x,quote:l,quoteSymbol:k,quoteIsLoading:w,historicData:d}))}}),n.a.createElement(s.a,{path:"/stock",render:function(e){return n.a.createElement(Q,Object.assign({},e,{upColor:"#1ac567",downColor:"#ff333a",apiKey:A,handleQuoteChange:x,quote:l,quoteSymbol:k,quoteIsLoading:w,historicData:d}))}}),n.a.createElement(s.a,{path:"/forex",render:function(e){return n.a.createElement(U,Object.assign({},e,{apiKey:A}))}})))))});var Y=function(){return n.a.createElement(o.a,null,n.a.createElement(i.CSSTransition,{in:!0,appear:!0,timeout:500,classNames:"fade"},n.a.createElement("div",{className:"app-container"},n.a.createElement(s.a,{exact:!0,path:"/",render:function(){return n.a.createElement(u.a,{to:"/markets"})}}),n.a.createElement("header",{className:"header"},n.a.createElement(d,null)),n.a.createElement("main",{className:"main"},n.a.createElement(J,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[37,1,2]]]);
//# sourceMappingURL=main.ddec1634.chunk.js.map