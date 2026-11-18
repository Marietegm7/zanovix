const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/globe.DlaLIipr.js","_astro/three.module.B6dfvgAa.js"])))=>i.map(i=>d[i]);
import{t as e}from"./gsap.Dm7UF3sG.js";import{t}from"./ScrollTrigger.PHyRlFVX.js";import{t as n}from"./preload-helper.tKKOKUQQ.js";e.registerPlugin(t);var r=`zx:world-active`,i=1,a=.4,o=[`wheel`,`touchstart`,`keydown`],s=28;function c(n={}){let s=document.querySelector(`[data-worlds]`);if(!s)return;let c=e.utils.toArray(`[data-world]`,s);if(!c.length)return;s.toggleAttribute(`data-stacked`,!0),c.forEach((e,t)=>e.style.zIndex=String(t+1));let u=e.timeline({defaults:{ease:`none`}}),d,f=e=>d?d.start+(d.end-d.start)*(e/u.duration()):0,p=[],m=0;c.forEach((t,r)=>{let a={world:t,from:r?m-i:0,start:m,until:1/0,scroller:t.querySelector(`[data-world-scroll]`),scrollStart:m,scrollLength:0};p.push(a);let o=Number(t.dataset.worldLength)||0,d=m;if(o){let r=e.timeline({paused:!0});n[t.dataset.world??``]?.({world:t,timeline:r,scrollAt:e=>f(d+e*o)}),r.duration()>0&&(r.paused(!1),u.add(r.duration(o),m)),m+=o}let{scroller:h}=a;if(h){let e=()=>Math.max(0,h.offsetHeight-t.clientHeight);o&&h.dataset.worldScroll===`with`?(a.scrollStart=d+o*.15,a.scrollLength=o*.7):(a.scrollStart=m,a.scrollLength=Math.max(e()/window.innerHeight,.001),m+=a.scrollLength),u.to(h,{y:()=>-e(),duration:a.scrollLength},a.scrollStart)}let g=c[r+1];if(!g)return;l(u,s,g,r+2,m);let _=g.querySelectorAll(`[data-world-enter]`);if(_.length){let e=i*.5,t=Math.min(.05,e*.4/_.length);u.fromTo(_,{y:56,opacity:0},{y:0,opacity:1,duration:e-t*(_.length-1),stagger:t,ease:`power2.out`},m+i-e)}let v=t.querySelector(`[data-world-inner]`);v&&u.fromTo(v,{scale:1,borderRadius:`0rem`,filter:`brightness(1) blur(0px)`},{scale:.86,borderRadius:`2.5rem`,filter:`brightness(0.45) blur(3px)`,duration:i,immediateRender:!1},m),m+=i,a.until=m}),u.to({},{duration:a},m);let h=new Set,g=()=>{let e=u.time();for(let{world:t,from:n,until:i}of p){let a=e>=n&&e<=i;a!==h.has(t)&&(a?h.add(t):h.delete(t),t.toggleAttribute(`data-world-active`,a),t.dispatchEvent(new CustomEvent(r,{detail:a})))}};d=t.create({trigger:s,start:`top top`,end:()=>`+=${u.duration()*window.innerHeight}`,pin:!0,scrub:.5,animation:u,invalidateOnRefresh:!0,onRefresh:g}),u.eventCallback(`onUpdate`,g),g();let _=e=>{window.zxLenis?(window.zxLenis.resize(),window.zxLenis.scrollTo(e,{immediate:!0,force:!0})):window.scrollTo(0,e)},v=p.filter(({world:e})=>e.id).map(e=>{let t=document.createElement(`span`);return t.id=e.world.id,e.world.removeAttribute(`id`),t.setAttribute(`aria-hidden`,`true`),t.style.cssText=`position:absolute;left:0;width:1px;height:1px;pointer-events:none`,document.body.append(t),{marker:t,span:e}}),y=()=>{for(let{marker:e,span:t}of v)e.style.top=`${Math.ceil(f(t.start))+1}px`};t.addEventListener(`refresh`,y),y();let b=v.find(({marker:e})=>`#${e.id}`===window.location.hash);if(b){let e=()=>_(b.marker.offsetTop),n=()=>requestAnimationFrame(e),r=()=>{t.removeEventListener(`refresh`,n);for(let e of o)window.removeEventListener(e,r)};t.addEventListener(`refresh`,n);for(let e of o)window.addEventListener(e,r,{passive:!0});e()}s.addEventListener(`focusin`,t=>{let n=t.target;if(!n.matches(`:focus-visible`))return;let r=p.find(({world:e})=>e.contains(n));if(!r)return;let i=r.start,{scroller:a,world:o}=r;if(a?.contains(n)){let t=Math.max(0,a.offsetHeight-o.clientHeight),s=n.getBoundingClientRect().top-a.getBoundingClientRect().top,c=e.utils.clamp(0,t,s-o.clientHeight*.35);i=r.scrollStart+(t?c/t:0)*r.scrollLength}else if(h.has(o)&&u.time()>=r.start)return;_(f(i)+1)}),window.addEventListener(`load`,()=>t.refresh())}function l(e,n,r,a,o){let c=r.dataset.worldReveal===`liquid`,l={value:0},u;c||(u=document.createElement(`div`),u.className=`world-ring`,u.setAttribute(`aria-hidden`,`true`),u.style.zIndex=String(a),r.after(u));let d=()=>{let[e=50,t=50]=(window.innerWidth<window.innerHeight&&r.dataset.worldOriginNarrow||r.dataset.worldOrigin||`50% 50%`).split(/\s+/).map(parseFloat);return{x:n.clientWidth*e/100,y:n.clientHeight*t/100}},f=()=>{let e=l.value,t=n.clientWidth,i=n.clientHeight;if(u&&(u.style.opacity=e>0&&e<1?`1`:`0`),e>=1)r.style.clipPath=`none`;else if(c){let n=i*(1-e*1.12),a=i*.06*Math.sin(Math.PI*e),o=[];for(let r=0;r<=s;r++){let i=r/s,c=n+a*Math.sin(i*Math.PI*3+e*7)+a*.4*Math.sin(i*Math.PI*7-e*11);o.push(`${(i*t).toFixed(1)}px ${c.toFixed(1)}px`)}r.style.clipPath=`polygon(${o.join(`,`)},${t}px ${i}px,0 ${i}px)`}else{let{x:n,y:a}=d(),o=e*(Math.hypot(Math.max(n,t-n),Math.max(a,i-a))*1.04);r.style.clipPath=`circle(${o.toFixed(1)}px at ${n}px ${a}px)`,u&&(u.style.width=u.style.height=`${(o*2).toFixed(1)}px`,u.style.transform=`translate(${(n-o).toFixed(1)}px,${(a-o).toFixed(1)}px)`)}};e.fromTo(l,{value:0},{value:1,duration:i,ease:c?`power1.inOut`:`power2.in`,onUpdate:f},o),f(),t.addEventListener(`refresh`,f)}e.registerPlugin(t);var u=.1,d=.9,f=1.6,p=2.3,m=3,h=3.7,g=.5,_=1.01,v=24,y=50;function b({world:n,timeline:r,scrollAt:i}){let a=n.querySelector(`[data-laptop-stage]`),o=n.querySelector(`[data-laptop-lid]`),s=n.querySelector(`[data-laptop-display]`),c=a?.parentElement;if(!a||!o||!s||!c)return;let l=n.querySelector(`[data-laptop-caption]`),b=n.querySelector(`[data-laptop-note]`),x=()=>{let e=document.querySelector(`[data-site-header]`);return e?e.offsetTop+e.offsetHeight:0},S=()=>{let e=c.clientWidth,t=c.clientHeight,n=Math.max(e/s.offsetWidth,t/s.offsetHeight)*_,r=0;for(let e=s;e&&e!==a;e=e.offsetParent)r+=e.offsetTop;return{width:e,height:t,scale:n,y:-(r+s.offsetHeight/2-a.offsetHeight/2)*n}},C=()=>{let{width:t,height:n,scale:r}=S(),i=t/r,o=(s.offsetHeight-n/r)/2,c=window.matchMedia(`(max-width: 640px)`).matches,l=a.offsetWidth/100*(c?2.5:1.5);e.set(a,{"--fit-x":`${(s.offsetWidth-i)/2}px`,"--fit-top":`${o+x()/r}px`,"--fit-bottom":`${o}px`,"--fit-font":`${Math.min(l,i/(c?v:y))}px`})};C(),t.addEventListener(`refreshInit`,C);let w={y:`-22svh`,scale:.86,rotateX:-32,"--open":0},T={y:`-9svh`,scale:.92,rotateX:-12,"--open":1};if(r.fromTo(a,{...w,"--fit":0},{...w,"--fit":0,duration:u,ease:`none`},0).fromTo(o,{rotateX:-88},{rotateX:-88,duration:u,ease:`none`},0).to(o,{rotateX:-3,duration:.8,ease:`power2.out`},u).to(a,{...T,duration:.8,ease:`power1.out`},u).to(o,{rotateX:0,duration:.7000000000000001,ease:`power2.inOut`},d).to(a,{y:()=>S().y,scale:()=>S().scale,rotateX:0,duration:.7000000000000001,ease:`power2.inOut`},d).to(a,{"--fit":1,duration:.42000000000000004,ease:`power1.inOut`},1.1800000000000002).to({},{duration:.6999999999999997},f).to(o,{rotateX:-3,duration:.7000000000000002,ease:`power2.inOut`},p).to(a,{...T,duration:.7000000000000002,ease:`power2.inOut`},p).to(a,{"--fit":0,duration:.4200000000000001,ease:`power1.inOut`},p).to(o,{rotateX:-88,duration:.7000000000000002,ease:`power2.inOut`},m).to(a,{...w,duration:.7000000000000002,ease:`power1.inOut`},m),l){let e=window.innerWidth>window.innerHeight*.75?.45:d;r.to(l,{autoAlpha:0,y:-16,duration:.3},e).to(l,{autoAlpha:1,y:0,duration:.3},3.35)}b&&e.set(b,{autoAlpha:0});let E=window.scrollY,D=0,O=!1;window.addEventListener(`scroll`,()=>{let e=window.scrollY;e!==E&&(D=e>E?1:-1),E=e},{passive:!0});let k=()=>O=!1;window.addEventListener(`wheel`,k,{passive:!0}),window.addEventListener(`touchstart`,k,{passive:!0}),window.addEventListener(`keydown`,k),t.addEventListener(`scrollEnd`,()=>{if(O||D<=0)return;let t=window.scrollY;if(t<i(g/h)||t>=i(f/h))return;let n=i(1.7000000000000002/h);O=!0;let r=e.utils.clamp(.35,.9,Math.abs(n-t)/900);window.zxLenis?window.zxLenis.scrollTo(n,{duration:r,onComplete:k}):(window.scrollTo({top:n,behavior:`smooth`}),window.setTimeout(k,r*1e3))})}var x=e=>e.toLocaleString(`es-ES`,{minimumFractionDigits:1,maximumFractionDigits:1});function S(t){let n=t.querySelector(`[data-demo]`);if(!n)return;let i=e.utils.toArray(`[data-demo-task]`,n),a=n.querySelector(`[data-demo-hours]`),o=n.querySelector(`[data-demo-done]`),s=n.querySelector(`[data-demo-meter]`),c=i.reduce((e,t)=>e+Number(t.dataset.hours),0),l={hours:0,done:0},u=()=>{a&&(a.textContent=x(l.hours)),o&&(o.textContent=String(Math.round(l.done)))},d=e.timeline({paused:!0,repeat:-1,repeatDelay:2.4,onRepeat:()=>{l.hours=l.done=0,u()}});d.fromTo(l,{hours:0,done:0},{hours:0,done:0,duration:.4,onUpdate:u},0),s&&d.fromTo(s,{scaleX:0},{scaleX:0,duration:.4},0);let f=0;i.forEach((e,t)=>{let n=.4+t*1.5;f+=Number(e.dataset.hours);let r=e.querySelector(`[data-demo-bar]`),i=e.querySelector(`[data-demo-check]`),a=e.querySelector(`[data-demo-wait]`),o=e.querySelector(`[data-demo-ok]`);d.fromTo(e,{"--on":0},{"--on":1,duration:.25},n).fromTo(r,{scaleX:0},{scaleX:1,duration:1,ease:`power1.inOut`},n).fromTo(i,{scale:0,autoAlpha:0},{scale:1,autoAlpha:1,duration:.35,ease:`back.out(2.4)`},n+1).fromTo(a,{autoAlpha:1},{autoAlpha:0,duration:.15},n+1).fromTo(o,{autoAlpha:0},{autoAlpha:1,duration:.2},n+1.1).to(l,{hours:f,done:t+1,duration:.45,ease:`power2.out`,onUpdate:u},n+1),s&&d.to(s,{scaleX:f/c,duration:.45,ease:`power2.out`},n+1)}),u(),t.addEventListener(r,e=>d.paused(!e.detail)),t.hasAttribute(`data-world-active`)&&d.play()}e.registerPlugin(t);var C=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,w=document.querySelector(`[data-worlds]`),T=e=>w?.querySelector(`[data-world="${e}"]`)??null,E=e=>!w?.hasAttribute(`data-stacked`)||!!e?.hasAttribute(`data-world-active`),D=`attribute vec2 aPosition; void main() { gl_Position = vec4(aPosition, 0.0, 1.0); }`,O=`
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform float uDpr;
uniform float uSize;
uniform vec2 uCenter;

const vec3 BASE = vec3(0.008, 0.106, 0.102);
const vec3 GREEN = vec3(0.0, 0.875, 0.506);
const vec3 MEADOW = vec3(0.173, 0.761, 0.584);
const vec3 SILVER = vec3(0.945, 0.969, 0.965);

float line(vec2 p, float cell, float width) {
	vec2 g = abs(fract(p / cell + 0.5) - 0.5) * cell;
	return 1.0 - smoothstep(0.0, width, min(g.x, g.y));
}

// Rich Black with a fine grid, a coarser one and a mark where the coarse lines cross.
vec3 backdrop(vec2 p) {
	float cell = 44.0 * uDpr;
	float fine = line(p, cell, 1.1 * uDpr);
	float coarse = line(p, cell * 4.0, 1.4 * uDpr);
	vec2 c = abs(fract(p / (cell * 4.0) + 0.5) - 0.5) * cell * 4.0;
	float node = 1.0 - smoothstep(1.5 * uDpr, 3.0 * uDpr, max(c.x, c.y));
	vec2 q = (p - 0.5 * uRes) / min(uRes.x, uRes.y) - uCenter;
	float halo = exp(-dot(q, q) * 2.6);
	vec3 col = BASE + vec3(0.03, 0.05, 0.046) * halo;
	col += mix(GREEN, SILVER, 0.75) * (fine * 0.05 + coarse * 0.075 + node * 0.4) * (0.4 + 0.6 * halo);
	return col;
}

float smin(float a, float b, float k) {
	float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
	return mix(b, a, h) - k * h * (1.0 - h);
}

// Signed distance to four spheres melted together.
float blob(vec2 q) {
	float t = uTime;
	float s = uSize;
	vec2 c = uCenter + vec2(sin(t * 0.42), cos(t * 0.35)) * 0.025;
	float d = length(q - c) - 0.25 * s;
	d = smin(d, length(q - c - s * vec2(0.26 * cos(t * 0.31), 0.21 * sin(t * 0.43))) - 0.14 * s, 0.15 * s);
	d = smin(d, length(q - c - s * vec2(-0.23 * sin(t * 0.27 + 1.0), 0.25 * cos(t * 0.36 + 2.0))) - 0.11 * s, 0.15 * s);
	d = smin(d, length(q - c - s * vec2(0.1 * sin(t * 0.5 + 4.0), -0.3 * cos(t * 0.29 + 0.5))) - 0.09 * s, 0.14 * s);
	return d;
}

void main() {
	vec2 p = gl_FragCoord.xy;
	float m = min(uRes.x, uRes.y);
	vec2 q = (p - 0.5 * uRes) / m;
	float d = blob(q);
	vec3 col = backdrop(p);
	// Light the glass throws on the grid around it.
	col += mix(GREEN, SILVER, 0.6) * 0.06 * exp(-max(d, 0.0) * 7.0);

	if (d < 0.004) {
		float e = 0.003;
		vec2 n = normalize(vec2(blob(q + vec2(e, 0.0)) - blob(q - vec2(e, 0.0)), blob(q + vec2(0.0, e)) - blob(q - vec2(0.0, e))) + 1e-6);
		float depth = clamp(-d / (0.11 * uSize), 0.0, 1.0);
		float edge = 1.0 - depth;
		float bend = edge * edge * edge;

		// A lens: magnifies a little everywhere and bends hard near the rim.
		vec2 centre = uCenter * m + 0.5 * uRes;
		vec2 at = p + (centre - p) * 0.1 - n * (bend * 0.16 + 0.02) * m;
		vec2 split = n * bend * 7.0 * uDpr;
		vec3 refracted = vec3(backdrop(at - split).r, backdrop(at).g, backdrop(at + split).b);

		float h = pow(edge, 2.5);
		vec3 normal = normalize(vec3(n * h, 1.0 - h * 0.9));
		float specular = pow(max(dot(normal, normalize(vec3(-0.55, 0.65, 0.55))), 0.0), 40.0);
		float bounce = pow(max(dot(normal, normalize(vec3(0.6, -0.6, 0.5))), 0.0), 18.0);

		// Clear glass: most of the green of the backdrop is washed out to silver.
		refracted = mix(refracted, SILVER * dot(refracted, vec3(0.3, 0.6, 0.1)), 0.6);
		vec3 glass = refracted * 1.9 + SILVER * (0.05 + 0.12 * bend) + GREEN * 0.04 * bend;
		glass += vec3(1.0) * specular * 0.85 + mix(GREEN, SILVER, 0.5) * bounce * 0.45;
		glass += mix(MEADOW, vec3(1.0), 0.75) * pow(edge, 9.0) * 0.55;
		col = mix(col, glass, smoothstep(0.004, -0.004, d));
	}

	gl_FragColor = vec4(col, 1.0);
}`,k={grow:0};function A(){let e=T(`hero`),t=e?.querySelector(`[data-hero-glass]`),n=t?.getContext(`webgl`,{alpha:!1,antialias:!1,powerPreference:`low-power`});if(!t||!n)return;let r=(e,t)=>{let r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r},i=n.createProgram();if(n.attachShader(i,r(n.VERTEX_SHADER,D)),n.attachShader(i,r(n.FRAGMENT_SHADER,O)),n.linkProgram(i),!n.getProgramParameter(i,n.LINK_STATUS))return;n.useProgram(i),n.bindBuffer(n.ARRAY_BUFFER,n.createBuffer()),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),n.STATIC_DRAW);let a=n.getAttribLocation(i,`aPosition`);n.enableVertexAttribArray(a),n.vertexAttribPointer(a,2,n.FLOAT,!1,0,0);let o=e=>n.getUniformLocation(i,e),s=o(`uRes`),c=o(`uTime`),l=o(`uDpr`),u=o(`uSize`),d=o(`uCenter`),f=1,p={x:0,y:0,size:1},m={x:0,y:0,targetX:0,targetY:0};function h(){let{clientWidth:e,clientHeight:r}=t;e&&r&&(f=Math.min(window.devicePixelRatio,1.5),t.width=Math.round(e*f),t.height=Math.round(r*f),n.viewport(0,0,t.width,t.height),p=e>r?{x:.5,y:.03,size:1.12}:{x:.04,y:.56,size:.86},g(performance.now()))}function g(e){let{grow:r}=k;m.x+=(m.targetX-m.x)*.05,m.y+=(m.targetY-m.y)*.05,n.uniform2f(s,t.width,t.height),n.uniform1f(c,C?1.5:e/1e3),n.uniform1f(l,f),n.uniform1f(u,p.size*(1+r*.7)),n.uniform2f(d,(p.x+m.x*.04)*(1-r),(p.y+m.y*.04)*(1-r)),n.drawArrays(n.TRIANGLES,0,3)}if(t.toggleAttribute(`data-live`,!0),new ResizeObserver(h).observe(t),h(),C)return;window.addEventListener(`pointermove`,e=>{e.pointerType!==`touch`&&(m.targetX=e.clientX/window.innerWidth*2-1,m.targetY=1-e.clientY/window.innerHeight*2)},{passive:!0});let _=t=>{E(e)&&!document.hidden&&g(t),requestAnimationFrame(_)};requestAnimationFrame(_)}function j({world:e,timeline:t}){t.to(k,{grow:1,duration:1,ease:`power1.inOut`},0);let n=e.querySelector(`[data-hero-copy]`);n&&t.to(n,{y:-48,duration:1,ease:`none`},0)}function M(){document.querySelectorAll(`[data-particles]`).forEach(e=>{let t=e.getContext(`2d`);if(!t)return;let n=e.closest(`[data-world]`),r=e.dataset.particles===`light`,i=[],a=0,o=0;function s(){if(a=e.clientWidth,o=e.clientHeight,!a||!o)return;let n=Math.min(window.devicePixelRatio,2);e.width=Math.round(a*n),e.height=Math.round(o*n),t.setTransform(n,0,0,n,0,0);let r=Math.min(90,Math.round(a*o/16e3));i=Array.from({length:r},()=>({x:Math.random()*a,y:Math.random()*o,radius:.6+Math.random()*1.6,speed:5+Math.random()*14,phase:Math.random()*Math.PI*2,bright:Math.random()<.15})),c(0,0)}function c(e,n){t.clearRect(0,0,a,o);for(let s of i){s.y-=s.speed*n,s.y<-4&&(s.y=o+4,s.x=Math.random()*a);let i=s.x+Math.sin(e*.4+s.phase)*14,c=.25+.45*(.5+.5*Math.sin(e*.9+s.phase));r?t.fillStyle=s.bright?`rgb(3 98 76 / ${c*.7})`:`rgb(112 125 125 / ${c*.5})`:t.fillStyle=s.bright?`rgb(0 223 129 / ${c})`:`rgb(241 247 246 / ${c*.55})`,t.beginPath(),t.arc(i,s.y,s.radius,0,Math.PI*2),t.fill()}}if(new ResizeObserver(s).observe(e),s(),C)return;let l=performance.now(),u=e=>{let t=Math.min((e-l)/1e3,.05);l=e,E(n)&&!document.hidden&&c(e/1e3,t),requestAnimationFrame(u)};requestAnimationFrame(u)})}function N({world:t,timeline:n}){let r=t.querySelector(`[data-steps-track]`),i=e.utils.toArray(`[data-step]`,t);!r||i.length<2||(n.fromTo(r,{"--p":0},{"--p":1,duration:1,ease:`none`},0),i.forEach((e,t)=>{t&&n.fromTo(e,{"--on":0},{"--on":1,duration:.1,ease:`power1.out`},t/(i.length-1)-.07)}),n.to({},{duration:.2}))}var P=C?{spin:0,tilt:1,distance:4}:{spin:-2.2,tilt:.1,distance:5.2};function F({timeline:e}){e.to(P,{spin:0,tilt:1,distance:4,duration:1,ease:`power2.inOut`})}function I(){let e=T(`globe`),t=e?.querySelector(`[data-globe]`);if(!e||!t)return;let i=!1,a=async()=>{if(i)return;i=!0;let{initGlobe:r}=await n(async()=>{let{initGlobe:e}=await import(`./globe.DlaLIipr.js`);return{initGlobe:e}},__vite__mapDeps([0,1]));r(t,P,!C,()=>E(e))};if(C){let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(t.disconnect(),a())},{rootMargin:`150% 0px`});t.observe(e)}else w?.querySelectorAll(`[data-world]:not([data-world="hero"])`).forEach(e=>{e.addEventListener(r,a,{once:!0}),e.hasAttribute(`data-world-active`)&&a()})}A(),M(),I(),C||(t.config({ignoreMobileResize:!0}),document.fonts.ready.then(()=>{c({hero:j,laptop:b,steps:N,globe:F});let e=T(`laptop`);e&&S(e),t.sort(),t.refresh()}));