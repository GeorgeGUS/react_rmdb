(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},35:function(e,t,a){e.exports=a(63)},40:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(30),o=a.n(c),l=a(3),m=a(16),i=(a(40),function(){return n.a.createElement("header",{className:"rmdb-header"},n.a.createElement("div",{className:"rmdb-header-content rmdb-container"},n.a.createElement(l.b,{to:"/"},n.a.createElement("img",{className:"rmdb-logo",src:"".concat("/react_rmdb","/images/reactMovie_logo.png"),alt:"rmdb-logo"})),n.a.createElement("a",{href:"https://www.themoviedb.org",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{className:"rmdb-tmdb-logo",src:"".concat("/react_rmdb","/images/tmdb_logo.png"),alt:"tmdb-logo"}))))}),s=function(e){return n.a.createElement("div",null,n.a.createElement("h1",null,"Whoooops. This page doesn't exist..."),n.a.createElement("button",{onClick:e.history.goBack},"Go to previous page"))},u=a(4),d=a.n(u),p=a(14),h=a(15),b=a(9),f=a(10),v=a(12),g=a(11),E=a(13),N="https://api.themoviedb.org/3/",y="844dba0bfd8f3a4f3799f6130ef9e335",k="".concat("/react_rmdb","/images/no_image.jpg"),x=function(e,t){return function(a){var r=t?"":k;return a?"".concat("https://image.tmdb.org/t/p/").concat(e).concat(a):r}},j=x("w1280",!0),w=x("w500"),_=x("w300"),O=x("w154"),I="en-US",S=function(e,t,a){document.title=e;var r=document.location.href,n=[{propName:"name",prop:"title",content:e},{propName:"name",prop:"description",content:t},{propName:"property",prop:"og:type",content:"website"},{propName:"property",prop:"og:url",content:r},{propName:"property",prop:"og:title",content:e},{propName:"property",prop:"og:description",content:t},{propName:"property",prop:"og:image",content:a},{propName:"property",prop:"twitter:card",content:"summary_large_image"},{propName:"property",prop:"twitter:url",content:r},{propName:"property",prop:"twitter:title",content:e},{propName:"property",prop:"twitter:description",content:t},{propName:"property",prop:"twitter:image",content:a}],c=document.head.querySelectorAll("[data-mt]"),o=!0,l=!1,m=void 0;try{for(var i,s=c[Symbol.iterator]();!(o=(i=s.next()).done);o=!0){var u=i.value;document.head.removeChild(u)}}catch(d){l=!0,m=d}finally{try{o||null==s.return||s.return()}finally{if(l)throw m}}n.forEach(function(e){var t=e.propName,a=e.prop,r=e.content;if(r){var n=document.createElement("meta");n.setAttribute(t,a),n.content=r,n.dataset.mt=!0,document.head.appendChild(n)}})},P=a(33),D=a.n(P),M=(a(50),function(e){var t=e.children,a=e.header,r=e.loading,c=e.isActors,o=D()({"rmdb-grid-content":!0,"rmdb-grid-content-actor":c});return n.a.createElement("div",{className:"rmdb-grid"},n.a.createElement("div",{className:"rmdb-container"},a&&!r?n.a.createElement("h2",null,a):null,n.a.createElement("div",{className:o},t&&t.map(function(e,t){return n.a.createElement("div",{key:t,className:"rmdb-grid-element"},e)}))))}),T=(a(51),function(e){var t=e.image,a=e.title,r=e.text,c={backgroundImage:"url('".concat(t,"')")};return n.a.createElement("div",{className:"rmdb-heroimage",style:c},n.a.createElement("div",{className:"rmdb-heroimage-content rmdb-container"},n.a.createElement("div",{className:"rmdb-heroimage-text"},n.a.createElement("h1",null,a),n.a.createElement("p",null,r))))}),C=(a(52),function(e){var t=e.text,a=e.onClick;return n.a.createElement("div",{className:"rmdb-container"},n.a.createElement("button",{type:"button",className:"rmdb-loadmorebtn",onClick:function(){return a(!0)}},t))}),F=(a(53),["Itself","Herself","Himself"]),A=function(e){var t=e.clickable,a=e.image,r=e.title,c=e.year,o=e.movieId,m=e.gender,i=e.character;return n.a.createElement("div",{className:"rmdb-moviethumb"},t?n.a.createElement(l.b,{to:"/movie/".concat(o),className:"rmdb-moviethumb-wrapper"},n.a.createElement("img",{className:"rmdb-moviethumb-image",src:a,alt:r}),n.a.createElement("p",{className:"rmdb-moviethumb-title"},"\u201c",r,"\u201d",c?", ".concat(c):"",n.a.createElement("br",null),m&&n.a.createElement("span",null,"Character: ",i||F[m]))):n.a.createElement("img",{className:"rmdb-moviethumb-image",src:a,alt:"moviethumb"}))},B=a(6),R=(a(57),function(e){function t(){var e,a;Object(b.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(v.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(n)))).state={value:""},a.timeout=null,a.doSearch=function(e){var t=e.target.value;a.setState({value:t}),clearTimeout(a.timeout),a.timeout=setTimeout(function(){var e=a.props,t=e.callback,r=e.history,n=a.state.value.trim();""!==n&&(t(!1,n),r.push("/search/".concat(n)))},1e3)},a}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.searchTerm;e&&this.setState({value:e})}},{key:"componentDidUpdate",value:function(e){var t=this.props.match.params.searchTerm;t&&e.match.params.searchTerm!==t&&this.setState({value:t})}},{key:"componentWillUnmount",value:function(){this.setState({value:""})}},{key:"render",value:function(){return n.a.createElement("div",{className:"rmdb-searchbar"},n.a.createElement("div",{className:"rmdb-container"},n.a.createElement("label",{className:"rmdb-searchbar-label"},n.a.createElement(B.a,{className:"rmdb-searchbar-icon",icon:"search"}),n.a.createElement("span",{className:"visually-hidden"},"Search"),n.a.createElement("input",{type:"text",name:"search",className:"rmdb-searchbar-input",placeholder:"Search",onChange:this.doSearch,value:this.state.value}))))}}]),t}(r.Component)),z=Object(m.e)(R),U=(a(58),function(){return n.a.createElement("div",{className:"loader"})}),J=(a(21),function(e){function t(){var e,a;Object(b.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(v.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(n)))).state={movies:[],heroImage:null,loading:!1,currentPage:0,totalPages:0,searchTerm:""},a.createEndpoint=function(e){return function(t,r){return"".concat(N).concat(e,"?api_key=").concat(y,"&language=").concat(I,"&page=").concat(t&&a.state.currentPage+1,"&query=").concat(r)}},a.popularEP=a.createEndpoint("movie/popular"),a.searchEP=a.createEndpoint("search/movie"),a.updateItems=function(e,t){a.setState({movies:e?Object(h.a)(a.state.movies):[],loading:!0,searchTerm:e?a.state.searchTerm:t},function(){var t=a.state.searchTerm;a.fetchItems(t?a.searchEP(e,t):a.popularEP(e,""))})},a.fetchItems=function(){var e=Object(p.a)(d.a.mark(function e(t){var r,n,c,o;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.state,n=r.movies,c=r.heroImage,e.prev=1,e.next=4,fetch(t);case 4:return e.next=6,e.sent.json();case 6:o=e.sent,S("RMDB - Popular Movies","React Movie (or RMDB) is a database for searching information about movies and actors",j(o.results[0].backdrop_path)),a.setState({movies:[].concat(Object(h.a)(n),Object(h.a)(o.results)),heroImage:c||o.results[0],loading:!1,currentPage:o.page,totalPages:o.total_pages},function(){}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.error("Fetch error:",e.t0);case 14:case"end":return e.stop()}},e,null,[[1,11]])}));return function(t){return e.apply(this,arguments)}}(),a}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.setState({loading:!0}),this.fetchItems(this.popularEP(!1,""))}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.movies,r=e.heroImage,c=e.currentPage,o=e.totalPages;return n.a.createElement("div",{className:"rmdb-page"},r&&n.a.createElement(T,{image:j(r.backdrop_path),title:r.original_title,text:r.overview}),n.a.createElement(z,{callback:this.updateItems}),n.a.createElement(M,{header:"Popular Movies",loading:t},a.map(function(e){return n.a.createElement(A,{key:e.id,clickable:!0,title:e.title,year:e.release_date&&e.release_date.slice(0,4),image:w(e.poster_path),movieId:e.id,movieName:e.title})})),t&&n.a.createElement(U,null),c<o&&!t&&n.a.createElement(C,{text:"Load More",onClick:this.updateItems}))}}]),t}(r.Component)),q=a(22),G=(a(59),function(e){var t=e.actor;return n.a.createElement("div",{className:"rmdb-actor"},n.a.createElement(l.b,{to:"/actor/".concat(t.id),className:"rmdb-actor-image"},n.a.createElement("img",{src:O(t.profile_path),alt:t.name})),n.a.createElement("div",{className:"rmdb-actor-info"},n.a.createElement(l.b,{to:"/actor/".concat(t.id)},n.a.createElement("p",{className:"rmdb-actor-name"},t.name)),n.a.createElement("p",{className:"rmdb-actor-character"},t.character)))}),H=(a(28),function(e){var t=e.movie,a=e.directors,r=void 0===a?[]:a,c=t.backdrop_path,o=t.poster_path,l=t.title,m=t.genres,i=t.overview,s=t.vote_average,u={backgroundImage:"url(".concat(j(c),")")},d=m.map(function(e){return e.name}).join(", ");return n.a.createElement("div",{className:"rmdb-info",style:u},n.a.createElement("div",{className:"rmdb-info-content rmdb-container clearfix"},n.a.createElement("div",{className:"rmdb-info-thumb"},n.a.createElement(A,{image:w(o)})),n.a.createElement("div",{className:"rmdb-info-text"},n.a.createElement("h1",null,l),n.a.createElement("h2",null,"Plot"),n.a.createElement("p",null,i),n.a.createElement("div",{className:"rmdb-info-sections"},n.a.createElement("div",{className:"rmdb-info-section"},n.a.createElement("h2",null,"Genres"),n.a.createElement("p",null,d)),n.a.createElement("div",{className:"rmdb-info-section"},n.a.createElement("h2",null,"IMDB rating"),n.a.createElement("div",{className:"rmdb-rating"},n.a.createElement("meter",{className:"rmdb-rating-scale",min:"0",max:"100",optimum:"100",low:"40",high:"70",value:10*s}),n.a.createElement("p",{className:"rmdb-rating-score"},s))),n.a.createElement("div",{className:"rmdb-info-section"},r.length>1?n.a.createElement("h2",null,"Directors"):n.a.createElement("h2",null,"Director"),n.a.createElement("p",null,r.map(function(e){return e.name}).join(", ")))))))}),W=function(e){return e&&0!==e?new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(e):"n/a"},L=(a(29),function(e){var t=e.movie,a=t.runtime,r=t.budget,c=t.revenue,o=t.release_date;return n.a.createElement("div",{className:"rmdb-infobar"},n.a.createElement("ul",{className:"rmdb-infobar-list rmdb-container"},n.a.createElement("li",{className:"rmdb-infobar-item"},n.a.createElement(B.a,{icon:["far","calendar-alt"],size:"2x"}),n.a.createElement("span",{className:"rmdb-infobar-info"},"Release date: ",o)),n.a.createElement("li",{className:"rmdb-infobar-item"},n.a.createElement(B.a,{icon:["far","clock"],size:"2x"}),n.a.createElement("span",{className:"rmdb-infobar-info"},"Running time: ",function(e){if(!e||0===e)return"n/a";var t=Math.floor(e/60),a=e%60;return"".concat(t,"h ").concat(a,"m")}(a))),n.a.createElement("li",{className:"rmdb-infobar-item"},n.a.createElement(B.a,{icon:["far","money-bill-alt"],size:"2x"}),n.a.createElement("span",{className:"rmdb-infobar-info"},"Budget: ",W(r))),n.a.createElement("li",{className:"rmdb-infobar-item"},n.a.createElement(B.a,{icon:"ticket-alt",size:"2x"}),n.a.createElement("span",{className:"rmdb-infobar-info"},"Revenue: ",W(c)))))}),Y=(a(60),function(e){var t=e.title;return n.a.createElement("div",{className:"rmdb-breadcrumbs"},n.a.createElement("div",{className:"rmdb-container"},n.a.createElement("ul",{className:"rmdb-breadcrumbs-list"},n.a.createElement("li",{className:"rmdb-breadcrumbs-item"},n.a.createElement(l.b,{to:"/"},"Home")),n.a.createElement("li",{className:"rmdb-breadcrumbs-item"},t))))}),K=function(e){function t(){var e,a;Object(b.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(v.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(n)))).state={movie:null,actors:null,directors:[],loading:!1},a.fetchItems=function(){var e=Object(p.a)(d.a.mark(function e(t){var r,n,c,o,l,m,i;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.props.match.params.movieId,e.prev=1,e.next=4,fetch(t);case 4:return e.next=6,e.sent.json();case 6:if(n=e.sent,S('RMDB - "'.concat(n.title,'"'),n.overview,w(n.poster_path)),!n.status_code){e.next=12;break}a.setState({loading:!1}),e.next=23;break;case 12:return a.setState({movie:n}),c="".concat(N,"movie/").concat(r,"/credits?api_key=").concat(y,"&language=").concat(I),e.next=16,fetch(c);case 16:return e.next=18,e.sent.json();case 18:o=e.sent,l=o.crew,m=o.cast,i=l.filter(function(e){return"Director"===e.job}),a.setState({actors:m,directors:i,loading:!1},function(){});case 23:e.next=28;break;case 25:e.prev=25,e.t0=e.catch(1),console.error("Fetch error:",e.t0);case 28:case"end":return e.stop()}},e,null,[[1,25]])}));return function(t){return e.apply(this,arguments)}}(),a}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.movieId,t=localStorage.getItem("".concat(e));if(t)this.setState(Object(q.a)({},JSON.parse(t)));else{this.setState({loading:!0});var a="".concat(N,"movie/").concat(e,"?api_key=").concat(y,"&language=").concat(I);this.fetchItems(a)}}},{key:"render",value:function(){var e=this.state,t=e.movie,a=e.directors,r=e.actors,c=e.loading;return n.a.createElement("main",{className:"rmdb-page"},t&&n.a.createElement(n.a.Fragment,null,n.a.createElement(Y,{title:t.title}),n.a.createElement(H,{movie:t,directors:a}),n.a.createElement(L,{movie:t})),r&&n.a.createElement(M,{header:"Actors",loading:c,isActors:!0},r.map(function(e){return n.a.createElement(G,{key:e.name,actor:e})})),c&&n.a.createElement(U,null),!r&&!c&&n.a.createElement("h1",null,"No movie found!"))}}]),t}(r.Component),Q=function(e){function t(){var e,a;Object(b.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(v.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(n)))).state={movies:[],loading:!1,currentPage:0,totalPages:0,searchTerm:a.props.match.params.searchTerm||""},a.createEndpoint=function(e){return function(t,r){return"".concat(N).concat(e,"?api_key=").concat(y,"&language=").concat(I,"&page=").concat(t&&a.state.currentPage+1,"&query=").concat(r)}},a.searchEP=a.createEndpoint("search/movie"),a.updateItems=function(e,t){a.setState({movies:e?Object(h.a)(a.state.movies):[],loading:!0,searchTerm:e?a.state.searchTerm:t},function(){var t=a.state.searchTerm;a.fetchItems(a.searchEP(e,t))})},a.fetchItems=function(){var e=Object(p.a)(d.a.mark(function e(t){var r,n,c,o;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.state,n=r.movies,c=r.searchTerm,e.prev=1,e.next=4,fetch(t);case 4:return e.next=6,e.sent.json();case 6:o=e.sent,S("RMDB - Search: ".concat(c),'Search results for "'.concat(c,'"')),a.setState({movies:[].concat(Object(h.a)(n),Object(h.a)(o.results)),loading:!1,currentPage:o.page,totalPages:o.total_pages}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.error("Fetch error:",e.t0);case 14:case"end":return e.stop()}},e,null,[[1,11]])}));return function(t){return e.apply(this,arguments)}}(),a}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this.state.searchTerm;document.title="RMDB - Search: ".concat(e),this.setState({loading:!0}),this.fetchItems(this.searchEP(!1,e))}},{key:"componentDidUpdate",value:function(e){var t=this.props.match.params.searchTerm;e.match.params.searchTerm!==t&&this.updateItems(!1,t)}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.searchTerm,r=e.movies,c=e.currentPage,o=e.totalPages,l='Search results for "'.concat(a,'"');return n.a.createElement("div",{className:"rmdb-page"},n.a.createElement(z,{callback:this.updateItems}),n.a.createElement(M,{header:l,loading:t},r.map(function(e){return n.a.createElement(A,{key:e.id,clickable:!0,title:e.title,year:e.release_date&&e.release_date.slice(0,4),image:w(e.poster_path),movieId:e.id,movieName:e.title})})),t&&n.a.createElement(U,null),c<o&&!t&&n.a.createElement(C,{text:"Load More",onClick:this.updateItems}))}}]),t}(r.Component),V=function(e){var t=e.actor,a=t.profile_path,r=t.name,c=t.biography;return n.a.createElement("div",{className:"rmdb-info"},n.a.createElement("div",{className:"rmdb-info-content rmdb-container clearfix"},n.a.createElement("div",{className:"rmdb-info-thumb"},n.a.createElement(A,{image:w(a)})),n.a.createElement("div",{className:"rmdb-info-text"},n.a.createElement("h1",null,r),c&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",null,"Biography"),n.a.createElement("p",null,c)))))},X=[{gen:"n/a",icon:"genderless"},{gen:"Female",icon:"venus"},{gen:"Male",icon:"mars"}],Z=function(e){var t=e.actor,a=t.gender,r=t.birthday,c=t.deathday,o=t.place_of_birth,l=function(e,t){var a=t?new Date(t):new Date,r=new Date(e),n=a.getFullYear()-r.getFullYear(),c=a.getMonth()-r.getMonth();return(c<0||0===c&&a.getDate()<r.getDate())&&n--,n}(r,c),m="".concat(r," \u2013 ").concat(c||"now"," (").concat(l," years old)"),i=X[a],s=i.gen,u=i.icon;return n.a.createElement("div",{className:"rmdb-infobar"},n.a.createElement("ul",{className:"rmdb-infobar-list rmdb-container"},n.a.createElement("li",{className:"rmdb-infobar-item"},n.a.createElement(B.a,{icon:["far","calendar-alt"],size:"2x"}),n.a.createElement("span",{className:"rmdb-infobar-info"},"Age: ",r?m:"n/a")),n.a.createElement("li",{className:"rmdb-infobar-item"},n.a.createElement(B.a,{icon:u,size:"2x"}),n.a.createElement("span",{className:"rmdb-infobar-info"},"Gender: ",s)),n.a.createElement("li",{className:"rmdb-infobar-item"},n.a.createElement(B.a,{icon:"globe",size:"2x"}),n.a.createElement("span",{className:"rmdb-infobar-info"},"Place of birth: ",o||"n/a"))))},$=function(e){function t(){var e,a;Object(b.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(v.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(n)))).state={actor:null,movies:null,loading:!1},a.fetchItems=function(){var e=Object(p.a)(d.a.mark(function e(t){var r,n,c,o,l;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.props.match.params.actorId,e.prev=1,e.next=4,fetch(t);case 4:return e.next=6,e.sent.json();case 6:if(n=e.sent,S('RMDB - "'.concat(n.name,'"'),n.biography,w(n.profile_path)),!n.status_code){e.next=12;break}a.setState({loading:!1}),e.next=21;break;case 12:return a.setState({actor:n}),c="".concat(N,"person/").concat(r,"/movie_credits?api_key=").concat(y,"&language=").concat(I),e.next=16,fetch(c);case 16:return e.next=18,e.sent.json();case 18:o=e.sent,l=o.cast,a.setState({movies:l,loading:!1},function(){localStorage.setItem("actor_".concat(r),JSON.stringify(a.state))});case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(1),console.error("Fetch error:",e.t0);case 26:case"end":return e.stop()}},e,null,[[1,23]])}));return function(t){return e.apply(this,arguments)}}(),a}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentWillMount",value:function(){var e=this.props.match.params.actorId,t=localStorage.getItem("actor_".concat(e));if(t)this.setState(Object(q.a)({},JSON.parse(t)));else{this.setState({loading:!0});var a="".concat(N,"person/").concat(e,"?api_key=").concat(y,"&language=").concat(I);this.fetchItems(a)}}},{key:"render",value:function(){var e=this.state,t=e.actor,a=e.movies,r=e.loading;return n.a.createElement("div",{className:"rmdb-page"},t&&n.a.createElement(n.a.Fragment,null,n.a.createElement(Y,{title:t.name}),n.a.createElement(V,{actor:t}),n.a.createElement(Z,{actor:t})),a&&n.a.createElement(M,{header:"".concat(a.length," Movies with ").concat(t.name),loading:r},a.sort(function(e,t){return new Date(t.release_date)-new Date(e.release_date)}).map(function(e){return n.a.createElement(A,{key:e.id,clickable:!0,title:e.title,year:e.release_date&&e.release_date.slice(0,4),image:_(e.poster_path),movieId:e.id,movieName:e.title,gender:t.gender,character:e.character})})),r&&n.a.createElement(U,null),!a&&!r&&n.a.createElement("h1",null,"Not found!"))}}]),t}(r.Component),ee=a(20),te=a(34),ae=a(17),re=a(23);ee.b.add(te.a,ae.d,re.a,re.b,re.c,ae.e,ae.a,ae.c,ae.f,ae.b);var ne=function(){return n.a.createElement(l.a,null,n.a.createElement(i,null),n.a.createElement(m.c,null,n.a.createElement(m.a,{path:"/",component:J,exact:!0}),n.a.createElement(m.a,{path:"/search/:searchTerm",component:Q,exact:!0}),n.a.createElement(m.a,{path:"/movie/:movieId",component:K,exact:!0}),n.a.createElement(m.a,{path:"/actor/:actorId",component:$,exact:!0}),n.a.createElement(m.a,{component:s})))};a(61),a(62);console.log("Test normal pages"),o.a.render(n.a.createElement(ne,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.e30fe387.chunk.js.map