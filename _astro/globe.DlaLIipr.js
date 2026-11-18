import{C as e,S as t,_ as n,a as r,b as i,d as a,f as o,g as ee,h as s,i as c,o as l,s as u,t as te,u as d,v as ne,x as f,y as p}from"./three.module.B6dfvgAa.js";var m=`/zanovix/`.replace(/\/$/,``);function h(e){return!e.startsWith(`/`)||e.startsWith(`//`)?e:`${m}${e}`}var g={lat:36.72,lon:-4.42},_=35,v=4,y=new r(`#00df81`),b=h(`/textures/earth/`),x=new e(-.84,.36,.36).normalize(),S=1.007,C=1.07,w=.006;function T(t,n,r){let i=(90-t)*Math.PI/180,a=(n+180)*Math.PI/180;return new e(-r*Math.sin(i)*Math.cos(a),r*Math.cos(i),r*Math.sin(i)*Math.sin(a))}var E=`
	varying vec2 vUv;
	varying vec3 vAxis;
	varying vec3 vWorldNormal;
	varying vec3 vWorldPosition;
	void main() {
		vUv = uv;
		// The planet's own north, for the fragment shaders to find east and north.
		vAxis = mat3(modelMatrix) * vec3(0.0, 1.0, 0.0);
		vWorldNormal = normalize(mat3(modelMatrix) * normal);
		vec4 world = modelMatrix * vec4(position, 1.0);
		vWorldPosition = world.xyz;
		gl_Position = projectionMatrix * viewMatrix * world;
	}
`,D=`
	uniform sampler2D dayMap;
	uniform sampler2D nightMap;
	uniform sampler2D reliefMap;
	uniform sampler2D waterMap;
	uniform sampler2D cloudMap;
	uniform vec2 reliefTexel;
	uniform float cloudShift;
	uniform vec3 sun;
	varying vec2 vUv;
	varying vec3 vAxis;
	varying vec3 vWorldNormal;
	varying vec3 vWorldPosition;

	void main() {
		vec3 normal = normalize(vWorldNormal);
		vec3 view = normalize(cameraPosition - vWorldPosition);

		// Relief: tilt the normal against the slope of the height map.
		vec3 east = cross(normalize(vAxis), normal);
		vec3 relief = normal;
		if (dot(east, east) > 1e-6) {
			east = normalize(east);
			vec3 north = cross(normal, east);
			float slopeEast = texture2D(reliefMap, vUv + vec2(reliefTexel.x, 0.0)).r - texture2D(reliefMap, vUv - vec2(reliefTexel.x, 0.0)).r;
			float slopeNorth = texture2D(reliefMap, vUv + vec2(0.0, reliefTexel.y)).r - texture2D(reliefMap, vUv - vec2(0.0, reliefTexel.y)).r;
			relief = normalize(normal - 5.0 * (slopeEast * east + slopeNorth * north));
		}

		float sunlight = dot(normal, sun);
		float day = smoothstep(-0.12, 0.3, sunlight);
		float water = texture2D(waterMap, vUv).r;
		float cloudShadow = 1.0 - 0.4 * texture2D(cloudMap, vec2(vUv.x - cloudShift, vUv.y)).r;

		vec3 surface = texture2D(dayMap, vUv).rgb;
		float diffuse = max(dot(mix(relief, normal, water), sun), 0.0);
		vec3 lit = surface * (0.03 + 2.4 * diffuse) * cloudShadow;

		// Sun glint on the oceans: a tight highlight inside a wider sheen.
		float glint = max(dot(normal, normalize(sun + view)), 0.0);
		lit += water * cloudShadow * day * vec3(1.0, 0.95, 0.85) * (0.45 * pow(glint, 350.0) + 0.04 * pow(glint, 40.0));

		// Black Marble paints the land a dim blue; keep only the warm city lights.
		vec3 night = texture2D(nightMap, vUv).rgb;
		float lights = smoothstep(0.02, 0.7, max(night.r, night.g) - 0.6 * night.b);
		vec3 dark = surface * 0.012 + vec3(1.0, 0.74, 0.42) * lights * 1.3;

		vec3 color = mix(dark, lit, day);
		// Warm band where the sun is setting.
		color *= mix(vec3(1.0), vec3(1.0, 0.8, 0.66), smoothstep(0.0, 0.5, day) * (1.0 - smoothstep(0.5, 1.0, day)));
		// Air between the viewer and the limb.
		float rim = pow(1.0 - max(dot(normal, view), 0.0), 3.2);
		color += vec3(0.25, 0.5, 1.0) * rim * (0.03 + 0.4 * day);

		gl_FragColor = vec4(color, 1.0);
		#include <tonemapping_fragment>
		#include <colorspace_fragment>
	}
`,O=`
	uniform sampler2D cloudMap;
	uniform vec3 sun;
	varying vec2 vUv;
	varying vec3 vWorldNormal;

	void main() {
		float cover = texture2D(cloudMap, vUv).r;
		float sunlight = dot(normalize(vWorldNormal), sun);
		float day = smoothstep(-0.15, 0.3, sunlight);
		vec3 color = vec3(0.012, 0.014, 0.02) + vec3(1.0, 0.99, 0.97) * 1.9 * day * (0.25 + 0.75 * max(sunlight, 0.0));
		// Thin at night, so the city lights show through.
		gl_FragColor = vec4(color, smoothstep(0.05, 0.85, cover) * mix(0.3, 0.95, day));
		#include <tonemapping_fragment>
		#include <colorspace_fragment>
	}
`,k=`
	uniform vec3 sun;
	uniform float depth;
	varying vec3 vWorldNormal;
	varying vec3 vWorldPosition;

	void main() {
		vec3 normal = normalize(vWorldNormal);
		vec3 view = normalize(cameraPosition - vWorldPosition);
		float thickness = clamp(-dot(normal, view) / depth, 0.0, 1.0);
		float lit = 0.12 + 0.88 * smoothstep(-0.55, 0.5, dot(normal, sun));
		gl_FragColor = vec4(mix(vec3(0.2, 0.5, 1.0), vec3(0.55, 0.78, 1.0), thickness * thickness), pow(thickness, 3.2) * lit * 0.4);
	}
`;function A(e,t,n,r=``){let i=new l(new Uint8Array([e,t,n,255]),1,1);return i.colorSpace=r,i.needsUpdate=!0,i}function j(e,r,l,m){let h=new te({canvas:e,alpha:!0,antialias:!0});h.setPixelRatio(Math.min(window.devicePixelRatio,2)),h.toneMapping=4;let j=new ne,M=new o(_,1,.1,100),N=new u;j.add(N);let P={dayMap:{value:A(13,38,84,n)},nightMap:{value:A(0,0,0,n)},reliefMap:{value:A(0,0,0)},waterMap:{value:A(255,255,255)},cloudMap:{value:A(0,0,0)},reliefTexel:{value:new t(1/2048,1/1024)},cloudShift:{value:0},sun:{value:x},depth:{value:Math.sqrt(1-1/C**2)}},F=new i(1,96,96);N.add(new d(F,new p({uniforms:P,vertexShader:E,fragmentShader:D})));let I=new d(F,new p({uniforms:P,vertexShader:E,fragmentShader:O,transparent:!0,depthWrite:!1}));I.scale.setScalar(S),N.add(I);let L=new d(F,new p({uniforms:P,vertexShader:E,fragmentShader:k,transparent:!0,side:1,depthWrite:!1}));L.scale.setScalar(C),N.add(L);let R=new u,z=T(g.lat,g.lon,1.011);R.position.copy(z),R.lookAt(z.clone().multiplyScalar(2));let B=new d(new c(.016,24),new a({color:15857654,toneMapped:!1})),V=new d(new ee(.022,.029,48),new a({color:y,transparent:!0,side:2,toneMapped:!1}));V.renderOrder=1,R.add(B,V),N.add(R);let H={y:-((g.lon+90)*Math.PI)/180,x:g.lat*Math.PI/180-.25},U=1;function W(){let{clientWidth:t,clientHeight:n}=e;if(!t||!n)return;h.setSize(t,n,!1),M.aspect=t/n,M.updateProjectionMatrix();let r=t>768&&t>n,i=2*Math.tan(_*Math.PI/360)*v;U=r?1:Math.max(1,2.25/(i*M.aspect)),N.position.set(r?.75:0,r?0:i*U*.23,0),K()}let G=performance.now();function K(){let e=(performance.now()-G)/1e3;N.rotation.y=H.y+r.spin+(l?Math.sin(e*.15)*.04:0),N.rotation.x=H.x*r.tilt,M.position.set(0,0,r.distance*U),I.rotation.y=l?e*w:0,P.cloudShift.value=I.rotation.y/(2*Math.PI);let t=l?e%2/2:.4;V.scale.setScalar(1+t*2.5),V.material.opacity=1-t,h.render(j,M)}let q=!1,J=new f,Y=Math.min(8,h.capabilities.getMaxAnisotropy());function X(e,t,n){return new Promise(r=>{J.load(b+t,t=>{if(q)return t.dispose();t.colorSpace=n,t.anisotropy=Y,t.wrapS=s,P[e].value.dispose(),P[e].value=t,l||K(),r()},void 0,()=>r())})}let re=[X(`dayMap`,`day-2k.webp`,n),X(`nightMap`,`night-2k.webp`,n),X(`waterMap`,`water-2k.webp`,``),X(`reliefMap`,`relief-2k.webp`,``),X(`cloudMap`,`clouds-2k.webp`,``)];Math.min(window.innerWidth,window.innerHeight)>=700&&h.capabilities.maxTextureSize>=4096&&Promise.all(re).then(()=>{q||(X(`dayMap`,`day-4k.webp`,n),X(`nightMap`,`night-4k.webp`,n))});let Z=!0,Q=new IntersectionObserver(([e])=>Z=e.isIntersecting);Q.observe(e);let $=new ResizeObserver(W);return $.observe(e),W(),l&&h.setAnimationLoop(()=>{Z&&m()&&K()}),()=>{q=!0,h.setAnimationLoop(null),Q.disconnect(),$.disconnect(),j.traverse(e=>{e instanceof d&&(e.geometry.dispose(),e.material.dispose())});for(let e of[`dayMap`,`nightMap`,`reliefMap`,`waterMap`,`cloudMap`])P[e].value.dispose();h.dispose()}}export{j as initGlobe};