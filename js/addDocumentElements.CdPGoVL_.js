import{ab as c,ac as m}from"./siteModulesConstants.CtAQQZTV.js";const p=t=>t.startsWith("www."),$=t=>p(t)?t.substring(4):t,N=t=>{const e=`${t}=`,a=decodeURIComponent(document.cookie).split(";");for(let r=0;r<a.length;r+=1){let o=a[r];for(;o.charAt(0)===" ";)o=o.substring(1);if(o.indexOf(e)===0)return o.substring(e.length,o.length)}return""},S=(t,e,n,{cdomain:a=null}={})=>{const r=new Date;r.setTime(r.getTime()+n*24*60*60*1e3);const o=n?`expires=${r.toUTCString()};`:"",i=a?`domain=${a};`:"";document.cookie=`${t}=${e};${o}path=/;${i}`},L=!1,I=()=>window.self!==window.top,s=({type:t,tagName:e,properties:n={},children:a=[]})=>{if(t!=="element")return console.error("Failed to injected HTML element - missing node type");const r=document.createElement(e);if(Object.entries(n).forEach(([o,i])=>{r.setAttribute(o,i)}),a.length){const o=a.find(i=>i.type==="text").value;o&&(r.innerHTML=o)}return r},g=t=>{const e=`[${c}="${t}"]`;return document.querySelector(e)},h=t=>{const e=s(t),n=g(e.getAttribute(c));return e.outerHTML===n?.outerHTML?n:(n?.remove(),document.head.append(e),e)},u=t=>{const e=s(t),n=g(e.getAttribute(c));return e.outerHTML===n?.outerHTML?n:(n?.remove(),document.body.append(e),e)},f=t=>`!function(f,b,e,v,n,t,s)
	{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
	n.callMethod.apply(n,arguments):n.queue.push(arguments)};
	if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
	n.queue=[];t=b.createElement(e);t.async=!0;
	t.src=v;s=b.getElementsByTagName(e)[0];
	s.parentNode.insertBefore(t,s)}(window, document,'script',
	'https://connect.facebook.net/en_US/fbevents.js');
	fbq('init', '${t}');
	fbq('track', 'PageView');`,w=t=>`<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${t}&ev=PageView&noscript=1"/>`,y=({containerId:t,gtmQuery:e=""}={})=>`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'https://www.googletagmanager.com/gtm.js?id='+i+dl${e};f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','${t}');`,j=({containerId:t,gtmQuery:e=""}={})=>`<iframe src="https://www.googletagmanager.com/ns.html?id=${t}${e}"
		height="0" width="0" style="display:none;visibility:hidden"></iframe>`,E=({containerId:t})=>`window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', '${t}');`,b=t=>`https://www.googletagmanager.com/gtag/js?id=${t}`,T=t=>`(function(h,o,t,j,a,r){
		h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
		h._hjSettings={hjid:${t},hjsv:6};
		a=o.getElementsByTagName('head')[0];
		r=o.createElement('script');r.async=1;
		r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
		a.appendChild(r);
	})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,v=t=>`https://code-eu1.jivosite.com/widget/${t}`,l=({siteMeta:t,areCookiesAllowed:e})=>{const n={};return e&&t.facebookPixel&&(n["noscript-fb-pixel"]={tagName:"noscript",children:[{type:"text",value:w(t.facebookPixel)}]}),e&&t.googleTagManager&&(n["noscript-gtm"]={tagName:"noscript",children:[{type:"text",value:j(t.googleTagManager)}]}),e&&t.facebookPixel&&(n["script-fb-pixel"]={tagName:"script",children:[{type:"text",value:f(t.facebookPixel)}]}),e&&t.googleTagManager&&(n["script-gtm"]={tagName:"script",children:[{type:"text",value:y({containerId:t.googleTagManager})}]}),e&&t.googleAnalytics&&(n["script-google-analytics"]={tagName:"script",children:[{type:"text",value:E({containerId:t.googleAnalytics})}]},n["script-google-analytics-async"]={tagName:"script",properties:{src:b(t.googleAnalytics)}}),e&&t.hotjar&&(n["script-hotjar"]={tagName:"script",children:[{type:"text",value:T(t.hotjar)}]}),t.jivoChat&&(n["script-jivochat"]={tagName:"script",properties:{src:v(t.jivoChat)}}),Object.entries(n).map(([a,{tagName:r,properties:o={},children:i=[]}])=>({type:"element",tagName:r,properties:{...o,[c]:a},children:i}))},d=t=>{t.forEach(e=>m.includes(e.properties[c])?u(e):h(e))},_=({siteMeta:t,areCookiesAllowed:e})=>{const n=l({siteMeta:t,areCookiesAllowed:e});d(n)},q=({siteMeta:t,areCookiesAllowed:e})=>{const n=l({siteMeta:t,areCookiesAllowed:e});d(n)};export{N as a,_ as b,I as c,q as d,h as e,$ as g,L as i,S as s};
