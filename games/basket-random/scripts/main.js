'use strict';
(window.g_aYk = class {
	constructor(e, g) {
		(this.g_ars = e), (this.g_aYl = g), (this.g_aYm = !1), (this.g_aYn = () => this.g_KZ());
	}
	g_aYo() {}
	g_aYp(e, g, a, _) {
		this.g_ars.g_aYq(this.g_aYl, e, g, a, _);
	}
	g_aYr(e, g, a, _) {
		return this.g_ars.g_aYs(this.g_aYl, e, g, a, _);
	}
	g_aYt(e, g, a) {
		this.g_ars.g_aYu()
			? this.g_aYp(e, g, a)
			: this.g_ars
					.g_aYv()
					._OnMessageFromDOM({
						type: 'event',
						component: this.g_aYl,
						handler: e,
						dispatchOpts: a || null,
						data: g,
						responseId: null
					});
	}
	g_aYw(e, g) {
		this.g_ars.g_aYx(this.g_aYl, e, g);
	}
	g_aYy(e) {
		for (const [g, a] of e) this.g_aYw(g, a);
	}
	g_aYz() {
		return this.g_ars;
	}
	g_aYA() {
		return this.g_aYl;
	}
	g_ael() {
		this.g_aYm || (this.g_ars.g_aYB(this.g_aYn), (this.g_aYm = !0));
	}
	g_adY() {
		this.g_aYm && (this.g_ars.g_aYC(this.g_aYn), (this.g_aYm = !1));
	}
	g_KZ() {}
}),
	(window.g_mQ = class {
		constructor(e, g) {
			(this.g_ly = e),
				(this.g_mR = g),
				(this.g_mT = -1),
				(this.g_mU = -Infinity),
				(this.g_mV = () => this.g_mW()),
				(this.g_mX = !1),
				(this.g_mY = !1);
		}
		g_m_(e) {
			this.g_mY = !!e;
		}
		g_nc() {
			if (-1 === this.g_mT) {
				const e = Date.now(),
					g = e - this.g_mU,
					a = this.g_mR;
				g >= a && this.g_mY
					? ((this.g_mU = e), this.g_nd())
					: (this.g_mT = self.setTimeout(this.g_mV, Math.max(a - g, 4)));
			}
		}
		g_nd() {
			(this.g_mX = !0), this.g_ly(), (this.g_mX = !1);
		}
		g_lC() {
			this.g_mX || (this.g_ne(), (this.g_mU = Date.now()));
		}
		g_mW() {
			(this.g_mT = -1), (this.g_mU = Date.now()), this.g_nd();
		}
		g_ne() {
			-1 !== this.g_mT && (self.clearTimeout(this.g_mT), (this.g_mT = -1));
		}
		g_ek() {
			this.g_ne(), (this.g_ly = null), (this.g_mV = null);
		}
	}),
	'use strict',
	(window.g_aYD = class extends g_aYk {
		constructor(e, g) {
			super(e, g),
				(this.g_aYE = new Map()),
				(this.g_aYF = !0),
				this.g_aYw('create', (e) => this.g_aYG(e)),
				this.g_aYw('destroy', (e) => this.g_aYH(e)),
				this.g_aYw('set-visible', (e) => this.g_aYI(e)),
				this.g_aYw('update-position', (e) => this.g_aYJ(e)),
				this.g_aYw('update-state', (e) => this.g_aAc(e)),
				this.g_aYw('focus', (e) => this.g_aYK(e)),
				this.g_aYw('set-css-style', (e) => this.g_aYL(e));
		}
		g_aYM(e) {
			this.g_aYF = !!e;
		}
		g_aYN(e, g) {
			this.g_aYw(e, (e) => {
				const a = e.elementId,
					_ = this.g_aYE.get(a);
				return g(_, e);
			});
		}
		g_aYG(e) {
			const g = e.elementId,
				a = this.g_aeM(g, e);
			this.g_aYE.set(g, a),
				e.isVisible || (a.style.display = 'none'),
				this.g_aYF && document.body.appendChild(a);
		}
		g_aeM() {
			throw new Error('required override');
		}
		g_aYO() {}
		g_aYH(e) {
			const g = e.elementId,
				a = this.g_aYE.get(g);
			this.g_aYO(a), this.g_aYF && a.parentElement.removeChild(a), this.g_aYE.delete(g);
		}
		g_aYP(e, g, a) {
			a || (a = {}), (a.elementId = g), this.g_aYp(e, a);
		}
		g_aYQ(e, g, a) {
			a || (a = {}), (a.elementId = g), this.g_aYt(e, a);
		}
		g_aYI(e) {
			if (this.g_aYF) {
				const g = this.g_aYE.get(e.elementId);
				g.style.display = e.isVisible ? '' : 'none';
			}
		}
		g_aYJ(e) {
			if (this.g_aYF) {
				const g = this.g_aYE.get(e.elementId);
				(g.style.left = e.left + 'px'),
					(g.style.top = e.top + 'px'),
					(g.style.width = e.width + 'px'),
					(g.style.height = e.height + 'px');
				const a = e.fontSize;
				null !== a && (g.style.fontSize = a + 'em');
			}
		}
		g_aAc(e) {
			const g = this.g_aYE.get(e.elementId);
			this.g_aYR(g, e);
		}
		g_aYR() {
			throw new Error('required override');
		}
		g_aYK(e) {
			const g = this.g_aYE.get(e.elementId);
			e.focus ? g.focus() : g.blur();
		}
		g_aYL(e) {
			const g = this.g_aYE.get(e.elementId);
			g.style[e.prop] = e.val;
		}
		g_aYS(e) {
			return this.g_aYE.get(e);
		}
	}),
	'use strict';
{
	function _(e) {
		if (e.g_aYT) {
			const g = document.createElement('script');
			(g.async = !1), (g.textContent = e.g_C), document.head.appendChild(g);
		} else
			return new Promise((g, a) => {
				const _ = document.createElement('script');
				(_.onload = g), (_.onerror = a), (_.async = !1), (_.src = e), document.head.appendChild(_);
			});
	}
	async function t(e) {
		const g = await r(e),
			a = new TextDecoder('utf-8');
		return a.decode(g);
	}
	function r(e) {
		return new Promise((g, _) => {
			const a = new FileReader();
			(a.onload = (e) => g(e.target.result)), (a.onerror = (e) => _(e)), a.readAsArrayBuffer(e);
		});
	}
	function b(e) {
		return n.has(e);
	}
	const a = /(iphone|ipod|ipad)/i.test(navigator.userAgent);
	let e = new Audio();
	const c = {
		'audio/webm; codecs=opus': !!e.canPlayType('audio/webm; codecs=opus'),
		'audio/ogg; codecs=opus': !!e.canPlayType('audio/ogg; codecs=opus'),
		'audio/webm; codecs=vorbis': !!e.canPlayType('audio/webm; codecs=vorbis'),
		'audio/ogg; codecs=vorbis': !!e.canPlayType('audio/ogg; codecs=vorbis'),
		'audio/mp4': !!e.canPlayType('audio/mp4'),
		'audio/mpeg': !!e.canPlayType('audio/mpeg')
	};
	e = null;
	const g = [];
	let s = 0;
	window.RealFile = window.File;
	const i = [],
		u = new Map(),
		p = new Map();
	let l = 0;
	const m = [];
	self.g_aYU = function (e) {
		if ('function' != typeof e) throw new Error('runOnStartup called without a function');
		m.push(e);
	};
	const n = new Set(['cordova', 'playable-ad', 'instant-games']);
	window.g_aYV = class e {
		constructor(e) {
			(this.g_aYW = e.g_aYX),
				(this.g_aYY = null),
				(this.g_apn = ''),
				(this.g_aYZ = e.g_aY_),
				(this.g_aY$ = {}),
				(this.g_aZa = null),
				(this.g_aZb = null),
				(this.g_aZc = []),
				(this.g_aZd = null),
				(this.g_ano = null),
				(this.g_arm = null),
				(this.g_anX = -1),
				(this.g_aZe = () => this.g_aZf()),
				(this.g_aZg = []),
				(this.g_aps = e.g_aZh),
				b(this.g_aps) &&
					this.g_aYW &&
					(console.warn(
						'[C3 runtime] Worker mode is enabled and supported, but is disabled in WebViews due to crbug.com/923007. Reverting to DOM mode.'
					),
					(this.g_aYW = !1)),
				(this.g_aZi = !1),
				(this.g_aZj = null),
				(this.g_aZk = null),
				('html5' === this.g_aps || 'playable-ad' === this.g_aps) &&
					'file' === location.protocol.substr(0, 4) &&
					alert(
						"Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)"
					),
				this.g_aYx('runtime', 'cordova-fetch-local-file', (e) => this.g_aZl(e)),
				this.g_aYx('runtime', 'create-job-worker', (e) => this.g_aZm(e)),
				'cordova' === this.g_aps
					? document.addEventListener('deviceready', () => this.g_ac$(e))
					: this.g_ac$(e);
		}
		g_ek() {
			this.g_ask(),
				this.g_aYY && ((this.g_aYY.onmessage = null), (this.g_aYY = null)),
				this.g_aZa && (this.g_aZa.terminate(), (this.g_aZa = null)),
				this.g_aZb && (this.g_aZb.g_ek(), (this.g_aZb = null)),
				this.g_ano && (this.g_ano.parentElement.removeChild(this.g_ano), (this.g_ano = null));
		}
		g_aZn() {
			return this.g_ano;
		}
		g_fe() {
			return this.g_apn;
		}
		g_aYu() {
			return this.g_aYW;
		}
		g_asZ() {
			return this.g_aps;
		}
		g_arM() {
			return a && 'cordova' === this.g_aps;
		}
		g_as_() {
			return a && b(this.g_aps);
		}
		async g_ac$(e) {
			if ('playable-ad' === this.g_aps) {
				(this.g_aZj = self.c3_base64files), (this.g_aZk = {}), await this.g_aZo();
				for (let g = 0, a = e.g_aZp.length; g < a; ++g) {
					const a = e.g_aZp[g].toLowerCase();
					this.g_aZk.hasOwnProperty(a)
						? (e.g_aZp[g] = { g_aYT: !0, g_C: this.g_aZk[a] })
						: this.g_aZj.hasOwnProperty(a) && (e.g_aZp[g] = URL.createObjectURL(this.g_aZj[a]));
				}
			}
			if (e.g_aZq) this.g_apn = e.g_aZq;
			else {
				const e = location.origin;
				this.g_apn = ('null' === e ? 'file:///' : e) + location.pathname;
				const g = this.g_apn.lastIndexOf('/');
				-1 !== g && (this.g_apn = this.g_apn.substr(0, g + 1));
			}
			if (e.g_aZr)
				for (const [g, a] of Object.entries(e.g_aZr)) this.g_aY$[g] = URL.createObjectURL(a);
			const g = new MessageChannel();
			(this.g_aYY = g.port1),
				(this.g_aYY.onmessage = (e) => this._OnMessageFromRuntime(e.data)),
				window.c3_addPortMessageHandler && window.c3_addPortMessageHandler((e) => this.g_aZs(e)),
				(this.g_arm = new self.g_aZt(this)),
				await this.g_arm.g_akw(),
				this.g_aZu(),
				'object' == typeof window.StatusBar && window.StatusBar.hide(),
				'object' == typeof window.AndroidFullScreen && window.AndroidFullScreen.immersiveMode(),
				await this.g_aZv(),
				this.g_aYW ? await this.g_aZw(e, g.port2) : await this.g_aZx(e, g.port2);
		}
		g_aZy(e) {
			return this.g_aY$.hasOwnProperty(e)
				? this.g_aY$[e]
				: e.endsWith('/workermain.js') && this.g_aY$.hasOwnProperty('workermain.js')
				? this.g_aY$['workermain.js']
				: 'playable-ad' === this.g_aps && this.g_aZj.hasOwnProperty(e.toLowerCase())
				? URL.createObjectURL(this.g_aZj[e.toLowerCase()])
				: e;
		}
		async g_aZz(g, a, _) {
			if (g.startsWith('blob:')) return new Worker(g, _);
			if (this.g_arM()) {
				const e = await this.g_BT(this.g_aYZ + g),
					a = new Blob([e], { type: 'application/javascript' });
				return new Worker(URL.createObjectURL(a), _);
			}
			const t = new URL(g, a),
				n = location.origin !== t.origin;
			if (n) {
				const e = await fetch(t);
				if (!e.ok) throw new Error('failed to fetch worker script');
				const g = await e.blob();
				return new Worker(URL.createObjectURL(g), _);
			}
			return new Worker(t, _);
		}
		g_aZu() {
			if (this.g_as_()) {
				const g = document.documentElement.style,
					a = document.body.style,
					_ = window.innerWidth < window.innerHeight,
					t = _ ? window.screen.width : window.screen.height,
					n = _ ? window.screen.height : window.screen.width;
				(a.height = g.height = n + 'px'), (a.width = g.width = t + 'px');
			}
		}
		g_aZA(g) {
			return {
				baseUrl: this.g_apn,
				windowInnerWidth: window.innerWidth,
				windowInnerHeight: window.innerHeight,
				devicePixelRatio: window.devicePixelRatio,
				isFullscreen: e.g_aoA(),
				projectData: g.g_aZB,
				previewImageBlobs: window.cr_previewImageBlobs || this.g_aZj,
				previewProjectFileBlobs: window.cr_previewProjectFileBlobs,
				exportType: g.g_aZh,
				isDebug: -1 < self.location.search.indexOf('debug'),
				ife: !!self.g_aZC,
				jobScheduler: this.g_arm.g_aZD(),
				supportedAudioFormats: c,
				opusWasmScriptUrl: window.cr_opusWasmScriptUrl || this.g_aYZ + 'opus.wasm.js',
				opusWasmBinaryUrl: window.cr_opusWasmBinaryUrl || this.g_aYZ + 'opus.wasm.wasm',
				isiOSCordova: this.g_arM(),
				isiOSWebView: this.g_as_(),
				isFBInstantAvailable: 'undefined' != typeof self.FBInstant
			};
		}
		async g_aZw(e, g) {
			const a = this.g_aZy(e.g_aZE);
			(this.g_aZa = await this.g_aZz(a, this.g_apn, { name: 'Runtime' })),
				(this.g_ano = document.createElement('canvas')),
				(this.g_ano.style.display = 'none');
			const _ = this.g_ano.transferControlToOffscreen();
			document.body.appendChild(this.g_ano),
				(window.c3canvas = this.g_ano),
				this.g_aZa.postMessage(
					Object.assign(this.g_aZA(e), {
						type: 'init-runtime',
						isInWorker: !0,
						messagePort: g,
						canvas: _,
						workerDependencyScripts: e.g_aZF || [],
						engineScripts: e.g_aZp,
						projectScripts: window.g_aZG,
						projectScriptsStatus: self.C3_ProjectScriptsStatus
					}),
					[g, _, ...this.g_arm.g_aZH()]
				),
				(this.g_aZc = i.map((e) => new e(this))),
				this.g_aZI(),
				(self.c3_callFunction = (e, g) => this.g_aZd.g_Vr(e, g)),
				'preview' === this.g_aps &&
					(self.goToLastErrorScript = () => this.g_aYq('runtime', 'go-to-last-error-script'));
		}
		async g_aZx(g, a) {
			(this.g_ano = document.createElement('canvas')),
				(this.g_ano.style.display = 'none'),
				document.body.appendChild(this.g_ano),
				(window.c3canvas = this.g_ano),
				(this.g_aZc = i.map((e) => new e(this))),
				this.g_aZI();
			const t = g.g_aZp.map((e) => ('string' == typeof e ? new URL(e, this.g_apn).toString() : e));
			if (
				(Array.isArray(g.g_aZF) && t.unshift(...g.g_aZF),
				await Promise.all(t.map((e) => _(e))),
				g.g_aZJ && 0 < g.g_aZJ.length)
			) {
				const e = self.C3_ProjectScriptsStatus;
				try {
					if ((await Promise.all(g.g_aZJ.map((e) => _(e[1]))), Object.values(e).some((e) => !e)))
						return void self.setTimeout(() => this.g_aZK(e), 100);
				} catch (g) {
					return (
						console.error('[Preview] Error loading project scripts: ', g),
						void self.setTimeout(() => this.g_aZK(e), 100)
					);
				}
			}
			if ('preview' === this.g_aps && 'object' != typeof self.g_aO.g_aYj)
				return (
					console.error(
						'[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.'
					),
					void alert(
						'Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.'
					)
				);
			const n = Object.assign(this.g_aZA(g), {
				isInWorker: !1,
				messagePort: a,
				canvas: this.g_ano,
				runOnStartupFunctions: m
			});
			(this.g_aZb = self.C3_CreateRuntime(n)), await self.C3_InitRuntime(this.g_aZb, n);
		}
		g_aZK(e) {
			const g = Object.entries(e)
					.filter((e) => !e[1])
					.map((e) => e[0]),
				a = `Failed to load project script '${g[0]}'. Check all your JavaScript code has valid syntax.`;
			console.error('[Preview] ' + a), alert(a);
		}
		async g_aZm() {
			const e = await this.g_arm.g_aZL();
			return { outputPort: e, transferables: [e] };
		}
		g_aYv() {
			if (this.g_aYW) throw new Error('not available in worker mode');
			return this.g_aZb;
		}
		g_aYq(g, a, _, t, n) {
			this.g_aYY.postMessage(
				{
					type: 'event',
					component: g,
					handler: a,
					dispatchOpts: t || null,
					data: _,
					responseId: null
				},
				this.g_aZi ? void 0 : n
			);
		}
		g_aYs(_, a, t, n, b) {
			const e = l++,
				i = new Promise((g, a) => {
					p.set(e, { resolve: g, reject: a });
				});
			return (
				this.g_aYY.postMessage(
					{
						type: 'event',
						component: _,
						handler: a,
						dispatchOpts: n || null,
						data: t,
						responseId: e
					},
					this.g_aZi ? void 0 : b
				),
				i
			);
		}
		['_OnMessageFromRuntime'](e) {
			const g = e.type;
			if ('event' === g) this.g_aZM(e);
			else if ('result' === g) this.g_aZN(e);
			else if ('runtime-ready' === g) this.g_aZO();
			else if ('alert' === g) alert(e.message);
			else throw new Error(`unknown message '${g}'`);
		}
		g_aZM(_) {
			const t = _.component,
				n = _.handler,
				a = _.data,
				b = _.responseId,
				e = u.get(t);
			if (!e) return void console.warn(`[DOM] No event handlers for component '${t}'`);
			const i = e.get(n);
			if (!i) return void console.warn(`[DOM] No handler '${n}' for component '${t}'`);
			let g = null;
			try {
				g = i(a);
			} catch (e) {
				return (
					console.error(`Exception in '${t}' handler '${n}':`, e),
					void (null !== b && this.g_aZP(b, !1, '' + e))
				);
			}
			null !== b &&
				(g && g.then
					? g
							.then((e) => this.g_aZP(b, !0, e))
							.catch((e) => {
								console.error(`Rejection from '${t}' handler '${n}':`, e),
									this.g_aZP(b, !1, '' + e);
							})
					: this.g_aZP(b, !0, g));
		}
		g_aZP(e, g, a) {
			let _;
			a && a.transferables && (_ = a.transferables),
				this.g_aYY.postMessage({ type: 'result', responseId: e, isOk: g, result: a }, _);
		}
		g_aZN(g) {
			const a = g.responseId,
				_ = g.isOk,
				t = g.result,
				n = p.get(a);
			_ ? n.resolve(t) : n.reject(t), p.delete(a);
		}
		g_aYx(e, g, a) {
			let _ = u.get(e);
			if ((_ || ((_ = new Map()), u.set(e, _)), _.has(g)))
				throw new Error(`[DOM] Component '${e}' already has handler '${g}'`);
			_.set(g, a);
		}
		static g_aZQ(e) {
			if (i.includes(e)) throw new Error('DOM handler already added');
			i.push(e);
		}
		g_aZI() {
			for (const e of this.g_aZc) if ('runtime' === e.g_aYA()) return void (this.g_aZd = e);
			throw new Error('cannot find runtime DOM handler');
		}
		g_aZs(e) {
			this.g_aYq('debugger', 'message', e);
		}
		g_aZO() {
			for (const e of this.g_aZc) e.g_aYo();
		}
		static g_aoA() {
			return !!(
				document.fullscreenElement ||
				document.webkitFullscreenElement ||
				document.mozFullScreenElement
			);
		}
		async g_aZR() {
			return await this.g_aYs('runtime', 'get-remote-preview-status-info');
		}
		g_aYB(e) {
			this.g_aZg.push(e), this.g_asj();
		}
		g_aYC(e) {
			const g = this.g_aZg.indexOf(e);
			if (-1 === g) throw new Error('invalid callback');
			this.g_aZg.splice(g, 1), this.g_aZg.length || this.g_ask();
		}
		g_asj() {
			-1 === this.g_anX && this.g_aZg.length && (this.g_anX = requestAnimationFrame(this.g_aZe));
		}
		g_ask() {
			-1 !== this.g_anX && (cancelAnimationFrame(this.g_anX), (this.g_anX = -1));
		}
		g_aZf() {
			this.g_anX = -1;
			for (const e of this.g_aZg) e();
			this.g_asj();
		}
		g_aZS(e) {
			this.g_aZd.g_aZS(e);
		}
		g_aZT(e) {
			this.g_aZd.g_aZT(e);
		}
		g_aZU() {
			this.g_aZd.g_aZU();
		}
		g_aAQ(e) {
			this.g_aZd.g_aAQ(e);
		}
		g_Co(e) {
			return !!c[e];
		}
		async g_agl(e) {
			const g = await this.g_aYs('runtime', 'opus-decode', { arrayBuffer: e }, null, [e]);
			return new Float32Array(g);
		}
		g_fZ(e) {
			return (
				/^(?:[a-z]+:)?\/\//.test(e) || 'data:' === e.substr(0, 5) || 'blob:' === e.substr(0, 5)
			);
		}
		g_f_(e) {
			return !this.g_fZ(e);
		}
		async g_aZl(e) {
			const g = e.filename;
			switch (e.as) {
				case 'text':
					return await this.g_BU(g);
				case 'buffer':
					return await this.g_BT(g);
				default:
					throw new Error('unsupported type');
			}
		}
		g_aZV() {
			const e = window.cordova && window.cordova.plugins && window.cordova.plugins.permissions;
			if ('object' != typeof e) throw new Error('Permission API is not loaded');
			return e;
		}
		g_aZW(e, g) {
			const a = e[g];
			if ('string' != typeof a) throw new Error('Invalid permission name');
			return a;
		}
		g_aZX(e) {
			const g = this.g_aZV();
			return new Promise((_, a) =>
				g.checkPermission(this.g_aZW(g, e), (e) => _(!!e.hasPermission), a)
			);
		}
		g_aJJ(e) {
			const g = this.g_aZV();
			return new Promise((_, a) =>
				g.requestPermission(this.g_aZW(g, e), (e) => _(!!e.hasPermission), a)
			);
		}
		async g_aZY(e) {
			if ('cordova' !== this.g_asZ()) return !0;
			if (this.g_arM()) return !0;
			for (const g of e) {
				const e = await this.g_aZX(g);
				if (e) continue;
				const a = await this.g_aJJ(g);
				if (!1 === a) return !1;
			}
			return !0;
		}
		async g_aZZ(...e) {
			if (!1 === (await this.g_aZY(e))) throw new Error('Permission not granted');
		}
		g_aZ_(e) {
			const g = window.cordova.file.applicationDirectory + 'www/' + e.toLowerCase();
			return new Promise((e, a) => {
				window.resolveLocalFileSystemURL(
					g,
					(g) => {
						g.file(e, a);
					},
					a
				);
			});
		}
		async g_BU(e) {
			const g = await this.g_aZ_(e);
			return await t(g);
		}
		g_aZ$() {
			if (g.length && !(8 <= s)) {
				s++;
				const e = g.shift();
				this.g_a_a(e.filename, e.g_a_b, e.g_a_c);
			}
		}
		g_BT(e) {
			return new Promise((_, t) => {
				g.push({
					filename: e,
					g_a_b: (e) => {
						s--, this.g_aZ$(), _(e);
					},
					g_a_c: (e) => {
						s--, this.g_aZ$(), t(e);
					}
				}),
					this.g_aZ$();
			});
		}
		async g_a_a(g, a, e) {
			try {
				const _ = await this.g_aZ_(g),
					t = await r(_);
				a(t);
			} catch (g) {
				e(g);
			}
		}
		async g_aZo() {
			const e = [];
			for (const [g, a] of Object.entries(this.g_aZj)) e.push(this.g_a_d(g, a));
			await Promise.all(e);
		}
		async g_a_d(e, g) {
			if ('object' == typeof g)
				(this.g_aZj[e] = new Blob([g.str], { type: g.type })), (this.g_aZk[e] = g.str);
			else {
				let a = await this.g_a_e(g);
				a || (a = this.g_a_f(g)), (this.g_aZj[e] = a);
			}
		}
		async g_a_e(e) {
			try {
				const g = await fetch(e);
				return await g.blob();
			} catch (e) {
				return (
					console.warn(
						'Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.',
						e
					),
					null
				);
			}
		}
		g_a_f(e) {
			const g = this.g_a_g(e);
			return this.g_a_h(g.data, g.g_gq);
		}
		g_a_g(_) {
			const a = _.indexOf(',');
			if (0 > a) throw new URIError('expected comma in data: uri');
			const t = _.substring(5, a),
				n = _.substring(a + 1),
				b = t.split(';'),
				e = b[0] || '',
				c = b[1],
				g = b[2];
			let o;
			return (
				(o = 'base64' === c || 'base64' === g ? atob(n) : decodeURIComponent(n)),
				{ g_gq: e, data: o }
			);
		}
		g_a_h(_, a) {
			let t,
				n,
				b = _.length,
				e = b >> 2,
				i = new Uint8Array(b),
				g = new Uint32Array(i.buffer, 0, e);
			for (t = 0, n = 0; t < e; ++t)
				g[t] =
					_.charCodeAt(n++) |
					(_.charCodeAt(n++) << 8) |
					(_.charCodeAt(n++) << 16) |
					(_.charCodeAt(n++) << 24);
			for (let e = 3 & b; e--; ) (i[n] = _.charCodeAt(n)), ++n;
			return new Blob([i], { type: a });
		}
		g_aZv() {
			let e = null;
			const g = new Promise((g) => (e = g)),
				_ = new ArrayBuffer(1),
				t = new MessageChannel();
			return (
				(t.port2.onmessage = (g) => {
					(g.data && g.data.arrayBuffer) ||
						((this.g_aZi = !0),
						console.warn(
							'MessageChannel transfers determined to be broken. Disabling transferables.'
						)),
						e();
				}),
				t.port1.postMessage({ arrayBuffer: _ }, [_]),
				g
			);
		}
	};
}
{
	function _(e) {
		return (
			(e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) ||
			(e.originalEvent &&
				e.originalEvent.sourceCapabilities &&
				e.originalEvent.sourceCapabilities.firesTouchEvents)
		);
	}
	function t(e) {
		return new Promise((g, _) => {
			const a = document.createElement('link');
			(a.onload = () => g(a)),
				(a.onerror = (e) => _(e)),
				(a.rel = 'stylesheet'),
				(a.href = e),
				document.head.appendChild(a);
		});
	}
	function a(e) {
		return new Promise((g, _) => {
			const a = new Image();
			(a.onload = () => g(a)), (a.onerror = (e) => _(e)), (a.src = e);
		});
	}
	async function s(e) {
		const g = URL.createObjectURL(e);
		try {
			return await a(g);
		} finally {
			URL.revokeObjectURL(g);
		}
	}
	function d(e) {
		return new Promise((g, _) => {
			let a = new FileReader();
			(a.onload = (e) => g(e.target.result)), (a.onerror = (e) => _(e)), a.readAsText(e);
		});
	}
	async function u(e, _, t) {
		if (!/firefox/i.test(navigator.userAgent)) return await s(e);
		let n = await d(e);
		const b = new DOMParser(),
			g = b.parseFromString(n, 'image/svg+xml'),
			o = g.documentElement;
		if (o.hasAttribute('width') && o.hasAttribute('height')) {
			const g = o.getAttribute('width'),
				a = o.getAttribute('height');
			if (!g.includes('%') && !a.includes('%')) return await s(e);
		}
		o.setAttribute('width', _ + 'px'), o.setAttribute('height', t + 'px');
		const i = new XMLSerializer();
		return (n = i.serializeToString(g)), (e = new Blob([n], { type: 'image/svg+xml' })), await s(e);
	}
	function e(e) {
		do {
			if (e.parentNode && e.hasAttribute('contenteditable')) return !0;
			e = e.parentNode;
		} while (e);
		return !1;
	}
	function g(e) {
		const g = e.target.tagName.toLowerCase();
		c.has(g) && e.preventDefault();
	}
	function f(e) {
		(e.metaKey || e.ctrlKey) && e.preventDefault();
	}
	function b() {
		try {
			return window.parent && window.parent.document.hasFocus();
		} catch (e) {
			return !1;
		}
	}
	function i() {
		const g = document.activeElement;
		if (!g) return !1;
		const a = g.tagName.toLowerCase(),
			_ = new Set(['email', 'number', 'password', 'search', 'tel', 'text', 'url']);
		return 'textarea' === a || ('input' === a ? _.has(g.type.toLowerCase() || 'text') : e(g));
	}
	const h = new Map([
			['OSLeft', 'MetaLeft'],
			['OSRight', 'MetaRight']
		]),
		l = { dispatchRuntimeEvent: !0, dispatchUserScriptEvent: !0 },
		m = { dispatchUserScriptEvent: !0 },
		n = { dispatchRuntimeEvent: !0 },
		c = new Set(['canvas', 'body', 'html']);
	(self.C3_GetSvgImageSize = async function (e) {
		const g = await s(e);
		if (0 < g.width && 0 < g.height) return [g.width, g.height];
		else {
			(g.style.position = 'absolute'),
				(g.style.left = '0px'),
				(g.style.top = '0px'),
				(g.style.visibility = 'hidden'),
				document.body.appendChild(g);
			const e = g.getBoundingClientRect();
			return document.body.removeChild(g), [e.width, e.height];
		}
	}),
		(self.C3_RasterSvgImageBlob = async function (_, a, t, n, b) {
			const e = await u(_, a, t),
				g = document.createElement('canvas');
			(g.width = n), (g.height = b);
			const c = g.getContext('2d');
			return c.drawImage(e, 0, 0, a, t), g;
		});
	let o = !1;
	document.addEventListener('pause', () => (o = !0)),
		document.addEventListener('resume', () => (o = !1));
	const p = class extends g_aYk {
		constructor(_) {
			super(_, 'runtime'),
				(this.g_a_i = !0),
				(this.g_a_j = -1),
				(this.g_a_k = 'any'),
				(this.g_a_l = !1),
				(this.g_a_m = !1),
				(this.g_a_n = null),
				(this.g_a_o = null),
				(this.g_a_p = null),
				_.g_aYx('canvas', 'update-size', (e) => this.g_a_q(e)),
				_.g_aYx('runtime', 'invoke-download', (e) => this.g_a_r(e)),
				_.g_aYx('runtime', 'raster-svg-image', (e) => this.g_a_s(e)),
				_.g_aYx('runtime', 'get-svg-image-size', (e) => this.g_a_t(e)),
				_.g_aYx('runtime', 'set-target-orientation', (e) => this.g_a_u(e)),
				_.g_aYx('runtime', 'register-sw', () => this.g_a_v()),
				_.g_aYx('runtime', 'post-to-debugger', (e) => this.g_a_w(e)),
				_.g_aYx('runtime', 'go-to-script', (e) => this.g_a_w(e)),
				_.g_aYx('runtime', 'before-start-ticking', () => this.g_a_x()),
				_.g_aYx('runtime', 'debug-highlight', (e) => this.g_a_y(e)),
				_.g_aYx('runtime', 'enable-device-orientation', () => this.g_a_z()),
				_.g_aYx('runtime', 'enable-device-motion', () => this.g_a_A()),
				_.g_aYx('runtime', 'add-stylesheet', (e) => this.g_a_B(e)),
				_.g_aYx('runtime', 'alert', (e) => this.g_a_C(e));
			const t = new Set(['input', 'textarea', 'datalist']);
			window.addEventListener('contextmenu', (g) => {
				const a = g.target,
					_ = a.tagName.toLowerCase();
				t.has(_) || e(a) || g.preventDefault();
			});
			const a = _.g_aZn();
			window.addEventListener('selectstart', g),
				window.addEventListener('gesturehold', g),
				a.addEventListener('selectstart', g),
				a.addEventListener('gesturehold', g),
				window.addEventListener('touchstart', g, { passive: !1 }),
				'undefined' == typeof PointerEvent
					? a.addEventListener('touchstart', g)
					: (window.addEventListener('pointerdown', g, { passive: !1 }),
					  a.addEventListener('pointerdown', g)),
				(this.g_a_D = 0),
				window.addEventListener('mousedown', (e) => {
					1 === e.button && e.preventDefault();
				}),
				window.addEventListener('mousewheel', f, { passive: !1 }),
				window.addEventListener('wheel', f, { passive: !1 }),
				window.addEventListener('resize', () => this.g_aom()),
				_.g_as_() &&
					window.addEventListener('focusout', () => {
						i() || (document.scrollingElement.scrollTop = 0);
					}),
				(this.g_a_E = new Set()),
				(this.g_a_F = new WeakSet()),
				(this.g_azW = !1);
		}
		g_a_x() {
			return (
				'cordova' === this.g_ars.g_asZ()
					? (document.addEventListener('pause', () => this.g_aro(!0)),
					  document.addEventListener('resume', () => this.g_aro(!1)))
					: document.addEventListener('visibilitychange', () => this.g_aro(document.hidden)),
				{ isSuspended: !!(document.hidden || o) }
			);
		}
		g_aYo() {
			window.addEventListener('focus', () => this.g_a_G('window-focus')),
				window.addEventListener('blur', () => {
					this.g_a_G('window-blur', { parentHasFocus: b() }), (this.g_a_D = 0);
				}),
				window.addEventListener('fullscreenchange', () => this.g_aon()),
				window.addEventListener('webkitfullscreenchange', () => this.g_aon()),
				window.addEventListener('mozfullscreenchange', () => this.g_aon()),
				window.addEventListener('fullscreenerror', (e) => this.g_aoo(e)),
				window.addEventListener('webkitfullscreenerror', (e) => this.g_aoo(e)),
				window.addEventListener('mozfullscreenerror', (e) => this.g_aoo(e)),
				window.addEventListener('keydown', (e) => this.g_a_H('keydown', e)),
				window.addEventListener('keyup', (e) => this.g_a_H('keyup', e)),
				window.addEventListener('dblclick', (e) => this.g_a_I('dblclick', e, l)),
				window.addEventListener('wheel', (e) => this.g_a_J('wheel', e)),
				'undefined' == typeof PointerEvent
					? (window.addEventListener('mousedown', (e) => this.g_a_K('pointerdown', e)),
					  window.addEventListener('mousemove', (e) => this.g_a_K('pointermove', e)),
					  window.addEventListener('mouseup', (e) => this.g_a_K('pointerup', e)),
					  window.addEventListener('touchstart', (e) => this.g_a_L('pointerdown', e)),
					  window.addEventListener('touchmove', (e) => this.g_a_L('pointermove', e)),
					  window.addEventListener('touchend', (e) => this.g_a_L('pointerup', e)),
					  window.addEventListener('touchcancel', (e) => this.g_a_L('pointercancel', e)))
					: (window.addEventListener('pointerdown', (e) => this.g_a_M('pointerdown', e)),
					  this.g_ars.g_aYu() &&
					  'undefined' != typeof window.onpointerrawupdate &&
					  self === self.top
							? ((this.g_a_o = new g_mQ(() => this.g_a_N(), 5)),
							  this.g_a_o.g_m_(!0),
							  window.addEventListener('pointerrawupdate', (e) => this.g_a_O(e)))
							: window.addEventListener('pointermove', (e) => this.g_a_M('pointermove', e)),
					  window.addEventListener('pointerup', (e) => this.g_a_M('pointerup', e)),
					  window.addEventListener('pointercancel', (e) => this.g_a_M('pointercancel', e)));
			const e = () => this.g_aZU();
			window.addEventListener('pointerup', e, !0),
				window.addEventListener('touchend', e, !0),
				window.addEventListener('click', e, !0),
				window.addEventListener('keydown', e, !0),
				window.addEventListener('gamepadconnected', e, !0);
		}
		g_a_G(e, g) {
			this.g_aYp(e, g || null, n);
		}
		g_a_P() {
			return Math.max(window.innerWidth, 1);
		}
		g_a_Q() {
			return Math.max(window.innerHeight, 1);
		}
		g_aom() {
			const e = this.g_a_P(),
				g = this.g_a_Q();
			this.g_a_G('window-resize', {
				innerWidth: e,
				innerHeight: g,
				devicePixelRatio: window.devicePixelRatio
			}),
				this.g_ars.g_as_() && (-1 !== this.g_a_j && clearTimeout(this.g_a_j), this.g_a_R(e, g, 0));
		}
		g_a_S(e, g, a) {
			-1 !== this.g_a_j && clearTimeout(this.g_a_j),
				(this.g_a_j = setTimeout(() => this.g_a_R(e, g, a), 48));
		}
		g_a_R(g, a, _) {
			const t = this.g_a_P(),
				n = this.g_a_Q();
			(this.g_a_j = -1),
				t != g || n != a
					? this.g_a_G('window-resize', {
							innerWidth: t,
							innerHeight: n,
							devicePixelRatio: window.devicePixelRatio
					  })
					: 10 > _ && this.g_a_S(t, n, _ + 1);
		}
		g_a_u(e) {
			this.g_a_k = e.targetOrientation;
		}
		g_a_T() {
			const e = this.g_a_k;
			if (screen.orientation && screen.orientation.lock)
				screen.orientation
					.lock(e)
					.catch((e) => console.warn('[Construct 3] Failed to lock orientation: ', e));
			else
				try {
					let g = !1;
					screen.lockOrientation
						? (g = screen.lockOrientation(e))
						: screen.webkitLockOrientation
						? (g = screen.webkitLockOrientation(e))
						: screen.mozLockOrientation
						? (g = screen.mozLockOrientation(e))
						: screen.msLockOrientation && (g = screen.msLockOrientation(e)),
						g || console.warn('[Construct 3] Failed to lock orientation');
				} catch (e) {
					console.warn('[Construct 3] Failed to lock orientation: ', e);
				}
		}
		g_aon() {
			const e = g_aYV.g_aoA();
			e && 'any' !== this.g_a_k && this.g_a_T(),
				this.g_aYp('fullscreenchange', {
					isFullscreen: e,
					innerWidth: this.g_a_P(),
					innerHeight: this.g_a_Q()
				});
		}
		g_aoo(e) {
			console.warn('[Construct 3] Fullscreen request failed: ', e),
				this.g_aYp('fullscreenerror', {
					isFullscreen: g_aYV.g_aoA(),
					innerWidth: this.g_a_P(),
					innerHeight: this.g_a_Q()
				});
		}
		g_aro(e) {
			e ? this.g_ars.g_ask() : this.g_ars.g_asj(), this.g_aYp('visibilitychange', { hidden: e });
		}
		g_a_H(e, a) {
			'Backspace' === a.key && g(a);
			const _ = h.get(a.code) || a.code;
			this.g_aYt(
				e,
				{
					code: _,
					key: a.key,
					which: a.which,
					repeat: a.repeat,
					altKey: a.altKey,
					ctrlKey: a.ctrlKey,
					metaKey: a.metaKey,
					shiftKey: a.shiftKey,
					timeStamp: a.timeStamp
				},
				l
			);
		}
		g_a_J(e, g) {
			this.g_aYp(
				e,
				{
					clientX: g.clientX,
					clientY: g.clientY,
					deltaX: g.deltaX,
					deltaY: g.deltaY,
					deltaZ: g.deltaZ,
					deltaMode: g.deltaMode,
					timeStamp: g.timeStamp
				},
				l
			);
		}
		g_a_I(e, g, a) {
			_(g) ||
				('mousedown' === e && window !== window.top && window.focus(),
				this.g_aYt(
					e,
					{
						button: g.button,
						buttons: g.buttons,
						clientX: g.clientX,
						clientY: g.clientY,
						timeStamp: g.timeStamp
					},
					a
				));
		}
		g_a_K(e, g) {
			if (!_(g)) {
				'pointerdown' === e && window !== window.top && window.focus();
				const a = this.g_a_D;
				'pointerdown' === e && 0 !== a
					? (e = 'pointermove')
					: 'pointerup' == e && 0 !== g.buttons && (e = 'pointermove'),
					this.g_aYt(
						e,
						{
							pointerId: 1,
							pointerType: 'mouse',
							button: g.button,
							buttons: g.buttons,
							lastButtons: a,
							clientX: g.clientX,
							clientY: g.clientY,
							width: 0,
							height: 0,
							pressure: 0,
							tangentialPressure: 0,
							tiltX: 0,
							tiltY: 0,
							twist: 0,
							timeStamp: g.timeStamp
						},
						l
					),
					(this.g_a_D = g.buttons),
					this.g_a_I(g.type, g, m);
			}
		}
		g_a_M(e, g) {
			'pointerdown' === e && window !== window.top && window.focus(),
				this.g_a_o && 'pointermove' !== e && this.g_a_o.g_lC();
			let a = 0;
			if (
				('mouse' === g.pointerType && (a = this.g_a_D),
				this.g_aYt(
					e,
					{
						pointerId: g.pointerId,
						pointerType: g.pointerType,
						button: g.button,
						buttons: g.buttons,
						lastButtons: a,
						clientX: g.clientX,
						clientY: g.clientY,
						width: g.width || 0,
						height: g.height || 0,
						pressure: g.pressure || 0,
						tangentialPressure: g.tangentialPressure || 0,
						tiltX: g.tiltX || 0,
						tiltY: g.tiltY || 0,
						twist: g.twist || 0,
						timeStamp: g.timeStamp
					},
					l
				),
				'mouse' === g.pointerType)
			) {
				let a = 'mousemove';
				'pointerdown' === e ? (a = 'mousedown') : 'pointerup' == e && (a = 'pointerup'),
					this.g_a_I(a, g, m),
					(this.g_a_D = g.buttons);
			}
		}
		g_a_O(e) {
			(this.g_a_p = e), this.g_a_o.g_nc();
		}
		g_a_N() {
			this.g_a_M('pointermove', this.g_a_p), (this.g_a_p = null);
		}
		g_a_L(e, g) {
			'pointerdown' === e && window !== window.top && window.focus();
			for (let a = 0, _ = g.changedTouches.length; a < _; ++a) {
				const _ = g.changedTouches[a];
				this.g_aYt(
					e,
					{
						pointerId: _.identifier,
						pointerType: 'touch',
						button: 0,
						buttons: 0,
						lastButtons: 0,
						clientX: _.clientX,
						clientY: _.clientY,
						width: 2 * (_.radiusX || _.webkitRadiusX || 0),
						height: 2 * (_.radiusY || _.webkitRadiusY || 0),
						pressure: _.force || _.webkitForce || 0,
						tangentialPressure: 0,
						tiltX: 0,
						tiltY: 0,
						twist: _.rotationAngle || 0,
						timeStamp: g.timeStamp
					},
					l
				);
			}
		}
		g_a_z() {
			this.g_a_l ||
				((this.g_a_l = !0), window.addEventListener('deviceorientation', (e) => this.g_aKc(e)));
		}
		g_a_A() {
			this.g_a_m ||
				((this.g_a_m = !0), window.addEventListener('devicemotion', (e) => this.g_aKd(e)));
		}
		g_aKc(e) {
			this.g_aYp(
				'deviceorientation',
				{ alpha: e.alpha || 0, beta: e.beta || 0, gamma: e.gamma || 0, timeStamp: e.timeStamp },
				l
			);
		}
		g_aKd(_) {
			let a = null;
			const t = _.acceleration;
			t && (a = { x: t.x || 0, y: t.y || 0, z: t.z || 0 });
			let n = null;
			const i = _.accelerationIncludingGravity;
			i && (n = { x: i.x || 0, y: i.y || 0, z: i.z || 0 });
			let e = null;
			const c = _.rotationRate;
			c && (e = { alpha: c.alpha || 0, beta: c.beta || 0, gamma: c.gamma || 0 }),
				this.g_aYp(
					'devicemotion',
					{
						acceleration: a,
						accelerationIncludingGravity: n,
						rotationRate: e,
						interval: _.interval,
						timeStamp: _.timeStamp
					},
					l
				);
		}
		g_a_q(e) {
			const g = this.g_aYz(),
				a = g.g_aZn();
			(a.style.width = e.styleWidth + 'px'),
				(a.style.height = e.styleHeight + 'px'),
				(a.style.marginLeft = e.marginLeft + 'px'),
				(a.style.marginTop = e.marginTop + 'px'),
				g.g_aZu(),
				this.g_a_i && ((a.style.display = ''), (this.g_a_i = !1));
		}
		g_a_r(g) {
			const _ = g.url,
				t = g.filename,
				n = document.createElement('a'),
				e = document.body;
			(n.textContent = t),
				(n.href = _),
				(n.download = t),
				e.appendChild(n),
				n.click(),
				e.removeChild(n);
		}
		async g_a_s(_) {
			const a = _.blob,
				t = _.imageWidth,
				n = _.imageHeight,
				b = _.surfaceWidth,
				e = _.surfaceHeight,
				c = _.imageBitmapOpts,
				g = await self.C3_RasterSvgImageBlob(a, t, n, b, e);
			let o;
			return (
				(o = c ? await createImageBitmap(g, c) : await createImageBitmap(g)),
				{ imageBitmap: o, transferables: [o] }
			);
		}
		async g_a_t(e) {
			return await self.C3_GetSvgImageSize(e.blob);
		}
		async g_a_B(e) {
			await t(e.url);
		}
		g_aZU() {
			const e = [...this.g_a_E];
			if ((this.g_a_E.clear(), !this.g_azW))
				for (const g of e) {
					const e = g.play();
					e &&
						e.catch(() => {
							this.g_a_F.has(g) || this.g_a_E.add(g);
						});
				}
		}
		g_aZS(e) {
			if ('function' != typeof e.play) throw new Error('missing play function');
			this.g_a_F.delete(e);
			let g;
			try {
				g = e.play();
			} catch (g) {
				return void this.g_a_E.add(e);
			}
			g &&
				g.catch(() => {
					this.g_a_F.has(e) || this.g_a_E.add(e);
				});
		}
		g_aZT(e) {
			this.g_a_E.delete(e), this.g_a_F.add(e);
		}
		g_aAQ(e) {
			this.g_azW = !!e;
		}
		g_a_y(e) {
			const g = e.show;
			if (!g) return void (this.g_a_n && (this.g_a_n.style.display = 'none'));
			this.g_a_n ||
				((this.g_a_n = document.createElement('div')),
				(this.g_a_n.id = 'inspectOutline'),
				document.body.appendChild(this.g_a_n));
			const a = this.g_a_n;
			(a.style.display = ''),
				(a.style.left = e.left - 1 + 'px'),
				(a.style.top = e.top - 1 + 'px'),
				(a.style.width = e.width + 2 + 'px'),
				(a.style.height = e.height + 2 + 'px'),
				(a.textContent = e.name);
		}
		g_a_v() {
			window.C3_RegisterSW && window.C3_RegisterSW();
		}
		g_a_w(e) {
			window.c3_postToMessagePort && ((e.from = 'runtime'), window.c3_postToMessagePort(e));
		}
		g_Vr(e, g) {
			return this.g_aYr('js-invoke-function', { name: e, params: g });
		}
		g_a_C(e) {
			alert(e.message + ' [via Web Worker]');
		}
	};
	g_aYV.g_aZQ(p);
}
{
	const e = document.currentScript.src;
	self.g_aZt = class {
		constructor(g) {
			(this.g_a_U = g),
				(this.g_apn = e ? e.substr(0, e.lastIndexOf('/') + 1) : g.g_fe()),
				(this.g_atG = Math.min(navigator.hardwareConcurrency || 2, 16)),
				(this.g_a_V = null),
				(this.g_a_W = []),
				(this.g_atE = null),
				(this.g_a_X = null);
		}
		async g_akw() {
			if (this.g_a_Y) throw new Error('already initialised');
			this.g_a_Y = !0;
			const e = this.g_a_U.g_aZy('dispatchworker.js');
			this.g_a_V = await this.g_a_U.g_aZz(e, this.g_apn, { name: 'DispatchWorker' });
			const g = new MessageChannel();
			(this.g_atE = g.port1),
				this.g_a_V.postMessage({ type: '_init', 'in-port': g.port2 }, [g.port2]),
				(this.g_a_X = await this.g_aZL());
		}
		async g_aZL() {
			const g = this.g_a_W.length,
				a = this.g_a_U.g_aZy('jobworker.js'),
				_ = await this.g_a_U.g_aZz(a, this.g_apn, { name: 'JobWorker' + g }),
				t = new MessageChannel(),
				n = new MessageChannel();
			return (
				this.g_a_V.postMessage({ type: '_addJobWorker', port: t.port1 }, [t.port1]),
				_.postMessage(
					{ type: 'init', number: g, 'dispatch-port': t.port2, 'output-port': n.port2 },
					[t.port2, n.port2]
				),
				this.g_a_W.push(_),
				n.port1
			);
		}
		g_aZD() {
			return { inputPort: this.g_atE, outputPort: this.g_a_X, maxNumWorkers: this.g_atG };
		}
		g_aZH() {
			return [this.g_atE, this.g_a_X];
		}
	};
}
if (('use strict', window.C3_IsSupported)) {
	'undefined' != typeof OffscreenCanvas;
	window.c3_runtimeInterface = new g_aYV({
		g_aYX: !1,
		g_aZE: 'workermain.js',
		g_aZp: ['scripts/c3runtime.js'],
		g_aY_: 'scripts/',
		g_aZF: [],
		g_aZh: 'html5'
	});
}
{
	function e(e, g) {
		return e.length === g.length && (e === g || e.toLowerCase() === g.toLowerCase());
	}
	const g = class extends g_aYk {
		constructor(e) {
			super(e, 'audio'),
				(this.g_a_Z = null),
				(this.g_a__ = null),
				(this.g_a_$ = !1),
				(this.g_a$a = () => this.g_a$b()),
				(this.g_a$c = []),
				(this.g_a$d = []),
				(this.g_a$e = null),
				(this.g_a$f = ''),
				(this.g_a$g = -1),
				(this.g_a$h = new Map()),
				(this.g_azV = 1),
				(this.g_azW = !1),
				(this.g_azI = 0),
				(this.g_aks = 1),
				(this.g_aqN = 0),
				(this.g_azL = 'HRTF'),
				(this.g_azM = 'inverse'),
				(this.g_a$i = 600),
				(this.g_azR = 1e4),
				(this.g_azS = 1),
				(this.g_a$j = !1),
				(this.g_a$k = !1),
				(this.g_a$l = this.g_ars.g_Co('audio/webm; codecs=opus')),
				(this.g_a$m = new Map()),
				(this.g_a$n = new Set()),
				(this.g_a$o = !1),
				(this.g_a$p = ''),
				(this.g_a$q = null),
				(self.C3Audio_OnMicrophoneStream = (e, g) => this.g_a$r(e, g)),
				(this.g_a$s = null),
				(self.C3Audio_GetOutputStream = () => this.g_a$t()),
				(self.C3Audio_DOMInterface = this),
				this.g_aYy([
					['create-audio-context', (e) => this.g_a$u(e)],
					['play', (e) => this.g_a$v(e)],
					['stop', (e) => this.g_a$w(e)],
					['stop-all', () => this.g_a$x()],
					['set-paused', (e) => this.g_a$y(e)],
					['set-volume', (e) => this.g_a$z(e)],
					['fade-volume', (e) => this.g_a$A(e)],
					['set-master-volume', (e) => this.g_a$B(e)],
					['set-muted', (e) => this.g_a$C(e)],
					['set-silent', (e) => this.g_a$D(e)],
					['set-looping', (e) => this.g_a$E(e)],
					['set-playback-rate', (e) => this.g_a$F(e)],
					['seek', (e) => this.g_a$G(e)],
					['preload', (e) => this.g_a$H(e)],
					['unload', (e) => this.g_HE(e)],
					['unload-all', () => this.g_a$I()],
					['set-suspended', (e) => this.g_a$J(e)],
					['add-effect', (e) => this.g_a$K(e)],
					['set-effect-param', (e) => this.g_a$L(e)],
					['remove-effects', (e) => this.g_a$M(e)],
					['tick', (e) => this.g_JX(e)],
					['load-state', (e) => this.g_a$N(e)]
				]);
		}
		async g_a$u(e) {
			e.isiOSCordova && (this.g_a$j = !0),
				(this.g_azI = e.timeScaleMode),
				(this.g_azL = ['equalpower', 'HRTF', 'soundfield'][e.panningModel]),
				(this.g_azM = ['linear', 'inverse', 'exponential'][e.distanceModel]),
				(this.g_a$i = e.refDistance),
				(this.g_azR = e.maxDistance),
				(this.g_azS = e.rolloffFactor);
			const g = { latencyHint: e.latencyHint };
			if ('undefined' != typeof AudioContext) this.g_a_Z = new AudioContext(g);
			else if ('undefined' != typeof webkitAudioContext) this.g_a_Z = new webkitAudioContext(g);
			else throw new Error('Web Audio API not supported');
			(this.g_a__ = this.g_a_Z.createGain()), this.g_a__.connect(this.g_a_Z.destination);
			const a = e.listenerPos;
			this.g_a_Z.listener.setPosition(a[0], a[1], a[2]),
				this.g_a_Z.listener.setOrientation(0, 0, 1, 0, -1, 0),
				window.addEventListener('pointerup', this.g_a$a, !0),
				window.addEventListener('touchend', this.g_a$a, !0),
				window.addEventListener('click', this.g_a$a, !0),
				window.addEventListener('keydown', this.g_a$a, !0),
				(self.C3_GetAudioContextCurrentTime = () => this.g_a$O());
			try {
				await Promise.all(e.preloadList.map((e) => this.g_a$P(e.originalUrl, e.url, e.type, !1)));
			} catch (e) {
				console.error('[Construct 3] Preloading sounds failed: ', e);
			}
			return { sampleRate: this.g_a_Z.sampleRate };
		}
		g_a$b() {
			if (!this.g_a_$) {
				const e = this.g_a_Z;
				'suspended' === e.state && e.resume && e.resume();
				const g = e.createBuffer(1, 220, 22050),
					a = e.createBufferSource();
				(a.buffer = g),
					a.connect(e.destination),
					a.start(0),
					'running' === e.state &&
						((this.g_a_$ = !0),
						window.removeEventListener('pointerup', this.g_a$a, !0),
						window.removeEventListener('touchend', this.g_a$a, !0),
						window.removeEventListener('click', this.g_a$a, !0),
						window.removeEventListener('keydown', this.g_a$a, !0),
						(this.g_a$a = null));
			}
		}
		g_azD() {
			return this.g_a_Z;
		}
		g_a$O() {
			return this.g_a_Z.currentTime;
		}
		g_azF() {
			return this.g_a__;
		}
		g_a$Q(e) {
			const g = this.g_a$m.get(e.toLowerCase());
			return g ? g[0].g_a$R() : this.g_azF();
		}
		g_a$S(e, g) {
			e = e.toLowerCase();
			let _ = this.g_a$m.get(e);
			_ || ((_ = []), this.g_a$m.set(e, _)),
				g.g_al_(_.length),
				g.g_a$T(e),
				_.push(g),
				this.g_a$U(e);
		}
		g_a$U(e) {
			let g = this.g_azF();
			const _ = this.g_a$m.get(e);
			if (_ && _.length) {
				g = _[0].g_a$R();
				for (let e = 0, g = _.length; e < g; ++e) {
					const a = _[e];
					e + 1 === g ? a.g_a$V(this.g_azF()) : a.g_a$V(_[e + 1].g_a$R());
				}
			}
			for (const a of this.g_a$W(e)) a.g_a$X(g);
			this.g_a$q && this.g_a$p === e && (this.g_a$q.disconnect(), this.g_a$q.connect(g));
		}
		g_a$Y() {
			return this.g_azV;
		}
		g_aAz() {
			return this.g_azW;
		}
		g_a$Z() {
			return this.g_azI;
		}
		g_KX() {
			return this.g_aks;
		}
		g_Gk() {
			return this.g_aqN;
		}
		g_a$_() {
			return this.g_a$j;
		}
		g_a$$() {
			return this.g_a$l;
		}
		g_baa() {
			this.g_a$k = !0;
		}
		g_bab() {
			return this.g_azL;
		}
		g_bac() {
			return this.g_azM;
		}
		g_bad() {
			return this.g_a$i;
		}
		g_bae() {
			return this.g_azR;
		}
		g_baf() {
			return this.g_azS;
		}
		g_bag(e, g) {
			return g
				? this.g_ars.g_agl(e).then((e) => {
						const g = this.g_a_Z.createBuffer(1, e.length, 48e3),
							a = g.getChannelData(0);
						return a.set(e), g;
				  })
				: new Promise((g, a) => {
						this.g_a_Z.decodeAudioData(e, g, a);
				  });
		}
		g_aZS(e) {
			this.g_ars.g_aZS(e);
		}
		g_aZT(e) {
			this.g_ars.g_aZT(e);
		}
		g_bah(g) {
			let a = 0;
			for (let _ = 0, e = this.g_a$d.length; _ < e; ++_) {
				const t = this.g_a$d[_];
				(this.g_a$d[a] = t), t.g_bai() === g ? t.g_ek() : ++a;
			}
			this.g_a$d.length = a;
		}
		g_baj() {
			let e = 0;
			for (let g = 0, a = this.g_a$c.length; g < a; ++g) {
				const a = this.g_a$c[g];
				(this.g_a$c[e] = a), a.g_bak() ? a.g_ek() : ++e;
			}
			this.g_a$c.length = e;
		}
		*g_a$W(g) {
			if (g) for (const a of this.g_a$d) e(a.g_bal(), g) && (yield a);
			else this.g_a$e && !this.g_a$e.g_bam() && (yield this.g_a$e);
		}
		async g_a$P(g, a, _, t, n) {
			for (const e of this.g_a$c) if (e.g_ban() === a) return await e.g_Cd(), e;
			if (n) return null;
			t && (this.g_a$j || this.g_a$k) && this.g_baj();
			const e = g_bao.g_sf(this, g, a, _, t);
			return this.g_a$c.push(e), await e.g_Cd(), e;
		}
		async g_bap(_, a, t, n, b) {
			for (const e of this.g_a$d) if (e.g_ban() === a && (e.g_baq() || b)) return e.g_bar(n), e;
			const e = await this.g_a$P(_, a, t, b),
				i = e.g_agB(n);
			return this.g_a$d.push(i), i;
		}
		g_bas(e) {
			let g = this.g_a$h.get(e);
			if (!g) {
				let _ = null;
				const a = new Promise((e) => (_ = e));
				(g = { g_bat: 0, promise: a, resolve: _ }), this.g_a$h.set(e, g);
			}
			g.g_bat++;
		}
		g_bau(e) {
			const g = this.g_a$h.get(e);
			if (!g) throw new Error('expected pending tag');
			g.g_bat--, 0 === g.g_bat && (g.resolve(), this.g_a$h.delete(e));
		}
		g_bav(e) {
			e || (e = this.g_a$f);
			const g = this.g_a$h.get(e);
			return g ? g.promise : Promise.resolve();
		}
		g_baw() {
			if (0 < this.g_a$n.size) return void this.g_ael();
			for (const e of this.g_a$d) if (e.g_Yd()) return void this.g_ael();
		}
		g_KZ() {
			for (const e of this.g_a$n) e.g_KZ();
			const e = this.g_a$O();
			for (const g of this.g_a$d) g.g_KZ(e);
			const g = this.g_a$d.filter((e) => e.g_Yd()).map((e) => e.g_bax());
			this.g_aYp('state', {
				tickCount: this.g_a$g,
				audioInstances: g,
				analysers: [...this.g_a$n].map((e) => e.g_bay())
			}),
				0 === g.length && 0 === this.g_a$n.size && this.g_adY();
		}
		g_baz(e, g, a) {
			this.g_aYp('trigger', { type: e, tag: g, aiid: a });
		}
		async g_a$v(_) {
			const a = _.originalUrl,
				t = _.url,
				n = _.type,
				b = _.isMusic,
				e = _.tag,
				c = _.isLooping,
				g = _.vol,
				o = _.pos,
				i = _.panning;
			let r = _.off;
			if (0 < r && !_.trueClock)
				if (this.g_a_Z.getOutputTimestamp) {
					const e = this.g_a_Z.getOutputTimestamp();
					r = r - e.performanceTime / 1e3 + e.contextTime;
				} else r = r - performance.now() / 1e3 + this.g_a_Z.currentTime;
			(this.g_a$f = e), this.g_bas(e);
			try {
				(this.g_a$e = await this.g_bap(a, t, n, e, b)),
					i
						? (this.g_a$e.g_baA(!0),
						  this.g_a$e.g_baB(i.x, i.y, i.angle, i.innerAngle, i.outerAngle, i.outerGain),
						  i.hasOwnProperty('uid') && this.g_a$e.g_baC(i.uid))
						: this.g_a$e.g_baA(!1),
					this.g_a$e.g_MW(c, g, o, r);
			} catch (e) {
				return void console.error('[Construct 3] Audio: error starting playback: ', e);
			} finally {
				this.g_bau(e);
			}
			this.g_ael();
		}
		g_a$w(e) {
			const g = e.tag;
			for (const a of this.g_a$W(g)) a.g_Kg();
		}
		g_a$x() {
			for (const e of this.g_a$d) e.g_Kg();
		}
		g_a$y(e) {
			const g = e.tag,
				a = e.paused;
			for (const _ of this.g_a$W(g)) a ? _.g_baD() : _.g_MV();
			this.g_baw();
		}
		g_a$z(e) {
			const g = e.tag,
				a = e.vol;
			for (const _ of this.g_a$W(g)) _.g_aAJ(a);
		}
		async g_a$A(g) {
			const a = g.tag,
				_ = g.vol,
				t = g.duration,
				n = g.stopOnEnd;
			await this.g_bav(a);
			for (const e of this.g_a$W(a)) e.g_aAK(_, t, n);
			this.g_baw();
		}
		g_a$B(e) {
			this.g_azV = e.vol;
			for (const g of this.g_a$d) g.g_baE();
		}
		g_a$C(e) {
			const g = e.tag,
				a = e.isMuted;
			for (const _ of this.g_a$W(g)) _.g_aAI(a);
		}
		g_a$D(e) {
			(this.g_azW = e.isSilent), this.g_ars.g_aAQ(this.g_azW);
			for (const g of this.g_a$d) g.g_baF();
		}
		g_a$E(e) {
			const g = e.tag,
				a = e.isLooping;
			for (const _ of this.g_a$W(g)) _.g_aAH(a);
		}
		async g_a$F(e) {
			const g = e.tag,
				a = e.rate;
			await this.g_bav(g);
			for (const _ of this.g_a$W(g)) _.g_Mj(a);
		}
		async g_a$G(e) {
			const g = e.tag,
				a = e.pos;
			await this.g_bav(g);
			for (const _ of this.g_a$W(g)) _.g_aAP(a);
		}
		async g_a$H(g) {
			const a = g.originalUrl,
				_ = g.url,
				t = g.type,
				n = g.isMusic;
			try {
				await this.g_bap(a, _, t, '', n);
			} catch (e) {
				console.error('[Construct 3] Audio: error preloading: ', e);
			}
		}
		async g_HE(g) {
			const a = g.url,
				_ = g.type,
				t = g.isMusic,
				n = await this.g_a$P('', a, _, t, !0);
			if (n) {
				n.g_ek();
				const e = this.g_a$c.indexOf(n);
				-1 !== e && this.g_a$c.splice(e, 1);
			}
		}
		g_a$I() {
			for (const e of this.g_a$c) e.g_ek();
			this.g_a$c.length = 0;
		}
		g_a$J(e) {
			const g = e.isSuspended;
			!g && this.g_a_Z.resume && this.g_a_Z.resume();
			for (const a of this.g_a$d) a.g_asi(g);
			g && this.g_a_Z.suspend && this.g_a_Z.suspend();
		}
		g_JX(e) {
			if (
				((this.g_aks = e.timeScale),
				(this.g_aqN = e.gameTime),
				(this.g_a$g = e.tickCount),
				0 !== this.g_azI)
			)
				for (const e of this.g_a$d) e.g_baG();
			const g = e.listenerPos;
			g && this.g_a_Z.listener.setPosition(g[0], g[1], g[2]);
			for (const g of e.instPans) {
				const e = g.uid;
				for (const a of this.g_a$d) a.g_Ei() === e && a.g_baH(g.x, g.y, g.angle);
			}
		}
		async g_a$K(g) {
			const a = g.type,
				_ = g.tag,
				t = g.params;
			let n;
			if ('filter' === a) n = new g_baI(this, ...t);
			else if ('delay' === a) n = new g_baJ(this, ...t);
			else if ('convolution' === a) {
				let e = null;
				try {
					e = await this.g_a$P(g.bufferOriginalUrl, g.bufferUrl, g.bufferType, !1);
				} catch (e) {
					return void console.log('[Construct 3] Audio: error loading convolution: ', e);
				}
				(n = new g_baK(this, e.g_baL(), ...t)),
					n.g_baM(g.bufferOriginalUrl, g.bufferUrl, g.bufferType);
			} else if ('flanger' === a) n = new g_baN(this, ...t);
			else if ('phaser' === a) n = new g_baO(this, ...t);
			else if ('gain' === a) n = new g_baP(this, ...t);
			else if ('tremolo' === a) n = new g_baQ(this, ...t);
			else if ('ringmod' === a) n = new g_baR(this, ...t);
			else if ('distortion' === a) n = new g_baS(this, ...t);
			else if ('compressor' === a) n = new g_baT(this, ...t);
			else if ('analyser' === a) n = new g_baU(this, ...t);
			else throw new Error('invalid effect type');
			this.g_a$S(_, n), this.g_baV();
		}
		g_a$L(_) {
			const a = _.tag,
				t = _.index,
				n = _.param,
				b = _.value,
				e = _.ramp,
				i = _.time,
				g = this.g_a$m.get(a);
			!g || 0 > t || t >= g.length || (g[t].g_baW(n, b, e, i), this.g_baV());
		}
		g_a$M(e) {
			const g = e.tag.toLowerCase(),
				_ = this.g_a$m.get(g);
			if (_ && _.length) {
				for (const e of _) e.g_ek();
				this.g_a$m.delete(g), this.g_a$U(g);
			}
		}
		g_baX(e) {
			this.g_a$n.add(e), this.g_baw();
		}
		g_baY(e) {
			this.g_a$n.delete(e);
		}
		g_baV() {
			this.g_a$o || ((this.g_a$o = !0), Promise.resolve().then(() => this.g_baZ()));
		}
		g_baZ() {
			const e = {};
			for (const [g, a] of this.g_a$m) e[g] = a.map((e) => e.g_bax());
			this.g_aYp('fxstate', { fxstate: e }), (this.g_a$o = !1);
		}
		async g_a$N(e) {
			const g = e.saveLoadMode;
			if (3 !== g)
				for (const e of this.g_a$d) (e.g_bak() && 1 === g) || (!e.g_bak() && 2 === g) || e.g_Kg();
			for (const g of this.g_a$m.values()) for (const e of g) e.g_ek();
			this.g_a$m.clear(), (this.g_aks = e.timeScale), (this.g_aqN = e.gameTime);
			const a = e.listenerPos;
			this.g_a_Z.listener.setPosition(a[0], a[1], a[2]),
				(this.g_azW = e.isSilent),
				this.g_ars.g_aAQ(this.g_azW),
				(this.g_azV = e.masterVolume);
			const _ = [];
			for (const g of Object.values(e.effects)) _.push(Promise.all(g.map((e) => this.g_a$K(e))));
			await Promise.all(_), await Promise.all(e.playing.map((e) => this.g_ba_(e, g))), this.g_baw();
		}
		async g_ba_(_, a) {
			if (3 === a) return;
			const t = _.bufferOriginalUrl,
				n = _.bufferUrl,
				b = _.bufferType,
				e = _.isMusic,
				c = _.tag,
				g = _.isLooping,
				o = _.volume,
				i = _.playbackTime;
			if (e && 1 === a) return;
			if (!e && 2 === a) return;
			let r = null;
			try {
				r = await this.g_bap(t, n, b, c, e);
			} catch (e) {
				return void console.error('[Construct 3] Audio: error loading audio state: ', e);
			}
			r.g_ba$(_.pan), r.g_MW(g, o, i, 0), _.isPlaying || r.g_baD(), r.g_bba(_);
		}
		g_a$r(e, g) {
			this.g_a$q && this.g_a$q.disconnect(),
				(this.g_a$p = g.toLowerCase()),
				(this.g_a$q = this.g_a_Z.createMediaStreamSource(e)),
				this.g_a$q.connect(this.g_a$Q(this.g_a$p));
		}
		g_a$t() {
			return (
				this.g_a$s ||
					((this.g_a$s = this.g_a_Z.createMediaStreamDestination()),
					this.g_a__.connect(this.g_a$s)),
				this.g_a$s.stream
			);
		}
	};
	g_aYV.g_aZQ(g);
}
'use strict',
	(self.g_bao = class {
		constructor(g, a, _, t, n) {
			(this.g_bbb = g),
				(this.g_bbc = a),
				(this.g_CE = _),
				(this.g_kL = t),
				(this.g_bbd = n),
				(this.g_bbe = ''),
				(this.g_bbf = 'not-loaded'),
				(this.g_CJ = null);
		}
		g_ek() {
			(this.g_bbf = 'not-loaded'), (this.g_bbb = null), (this.g_CJ = null);
		}
		static g_sf(g, a, _, t, n) {
			const e = 'audio/webm; codecs=opus' === t && !g.g_a$$();
			return (
				n && e && g.g_baa(),
				!n || g.g_a$_() || e ? new g_bbg(g, a, _, t, n, e) : new g_bbh(g, a, _, t, n)
			);
		}
		g_agB(e) {
			return 'html5' === this.g_bbe
				? new g_bbi(this.g_bbb, this, e)
				: new g_bbj(this.g_bbb, this, e);
		}
		g_Hw() {}
		g_Cd() {
			return this.g_CJ || (this.g_CJ = this.g_Hw()), this.g_CJ;
		}
		g_CK() {}
		g_bbk() {}
		g_bbl() {
			return 'failed' === this.g_bbf;
		}
		g_azD() {
			return this.g_bbb.g_azD();
		}
		g_bbm() {
			return this.g_bbe;
		}
		g_bbn() {
			return this.g_bbc;
		}
		g_ban() {
			return this.g_CE;
		}
		g_bbo() {
			return this.g_kL;
		}
		g_bak() {
			return this.g_bbd;
		}
		g_aio() {}
	}),
	'use strict',
	(self.g_bbh = class extends g_bao {
		constructor(g, a, _, t, n) {
			super(g, a, _, t, n),
				(this.g_bbe = 'html5'),
				(this.g_bbp = new Audio()),
				(this.g_bbp.crossOrigin = 'anonymous'),
				(this.g_bbp.autoplay = !1),
				(this.g_bbp.preload = 'auto'),
				(this.g_bbq = null),
				(this.g_bbr = null),
				(this.g_bbs = !1),
				this.g_bbp.addEventListener('canplaythrough', () => (this.g_bbs = !0)),
				(this.g_bbt = this.g_azD().createGain()),
				(this.g_bbu = null),
				this.g_bbp.addEventListener('canplay', () => {
					this.g_bbq &&
						((this.g_bbf = 'loaded'), this.g_bbq(), (this.g_bbq = null), (this.g_bbr = null)),
						this.g_bbu ||
							!this.g_bbp ||
							((this.g_bbu = this.g_azD().createMediaElementSource(this.g_bbp)),
							this.g_bbu.connect(this.g_bbt));
				}),
				(this.onended = null),
				this.g_bbp.addEventListener('ended', () => {
					this.onended && this.onended();
				}),
				this.g_bbp.addEventListener('error', (e) => this.g_bbv(e));
		}
		g_ek() {
			this.g_bbb.g_bah(this),
				this.g_bbt.disconnect(),
				(this.g_bbt = null),
				this.g_bbu.disconnect(),
				(this.g_bbu = null),
				this.g_bbp && !this.g_bbp.paused && this.g_bbp.pause(),
				(this.onended = null),
				(this.g_bbp = null),
				super.g_ek();
		}
		g_Hw() {
			return (
				(this.g_bbf = 'loading'),
				new Promise((e, g) => {
					(this.g_bbq = e), (this.g_bbr = g), (this.g_bbp.src = this.g_CE);
				})
			);
		}
		g_bbv(e) {
			console.error(`[Construct 3] Audio '${this.g_CE}' error: `, e),
				this.g_bbr &&
					((this.g_bbf = 'failed'), this.g_bbr(e), (this.g_bbq = null), (this.g_bbr = null));
		}
		g_CK() {
			const e = 4 <= this.g_bbp.readyState;
			return e && (this.g_bbs = !0), e || this.g_bbs;
		}
		g_bbk() {
			return this.g_CK();
		}
		g_bbw() {
			return this.g_bbp;
		}
		g_bbx() {
			return this.g_bbt;
		}
		g_aio() {
			return this.g_bbp.duration;
		}
	}),
	'use strict',
	(self.g_bbg = class extends g_bao {
		constructor(g, a, _, t, n, e) {
			super(g, a, _, t, n),
				(this.g_bbe = 'webaudio'),
				(this.g_bby = null),
				(this.g_bbz = null),
				(this.g_bbA = !!e);
		}
		g_ek() {
			this.g_bbb.g_bah(this), (this.g_bby = null), (this.g_bbz = null), super.g_ek();
		}
		async g_bbB() {
			if (this.g_bby) return this.g_bby;
			const e = this.g_bbb.g_aYz();
			if ('cordova' === e.g_asZ() && e.g_f_(this.g_CE)) this.g_bby = await e.g_BT(this.g_CE);
			else {
				const e = await fetch(this.g_CE);
				if (!e.ok) throw new Error(`error fetching audio data: ${e.status} ${e.statusText}`);
				this.g_bby = await e.arrayBuffer();
			}
		}
		async g_bbC() {
			return this.g_bbz
				? this.g_bbz
				: void ((this.g_bbz = await this.g_bbb.g_bag(this.g_bby, this.g_bbA)), (this.g_bby = null));
		}
		async g_Hw() {
			try {
				(this.g_bbf = 'loading'), await this.g_bbB(), await this.g_bbC(), (this.g_bbf = 'loaded');
			} catch (e) {
				(this.g_bbf = 'failed'),
					console.error(`[Construct 3] Failed to load audio '${this.g_CE}': `, e);
			}
		}
		g_CK() {
			return !!(this.g_bby || this.g_bbz);
		}
		g_bbk() {
			return !!this.g_bbz;
		}
		g_baL() {
			return this.g_bbz;
		}
		g_aio() {
			return this.g_bbz ? this.g_bbz.duration : 0;
		}
	}),
	'use strict';
{
	function _(g) {
		return g * e;
	}
	const e = 180 / Math.PI;
	let g = 0;
	self.g_bbD = class {
		constructor(_, a, t) {
			(this.g_bbb = _),
				(this.g_xD = a),
				(this.g_bbE = t),
				(this.g_bbF = g++),
				(this.g_bbG = this.g_azD().createGain()),
				this.g_bbG.connect(this.g_azF()),
				(this.g_bbH = null),
				(this.g_bbI = !1),
				(this.g_UO = !0),
				(this.g_aRp = !1),
				(this.g_bbJ = !1),
				(this.g_aad = !1),
				(this.g_bbK = 1),
				(this.g_bbL = !1),
				(this.g_Lz = 1);
			const n = this.g_bbb.g_a$Z();
			(this.g_bbM = (1 === n && !this.g_bak()) || 2 === n),
				(this.g_bbN = -1),
				(this.g_bbO = -1),
				(this.g_bbP = !1);
		}
		g_ek() {
			(this.g_bbb = null),
				(this.g_xD = null),
				this.g_bbH && (this.g_bbH.disconnect(), (this.g_bbH = null)),
				this.g_bbG.disconnect(),
				(this.g_bbG = null);
		}
		g_azD() {
			return this.g_bbb.g_azD();
		}
		g_azF() {
			return this.g_bbb.g_a$Q(this.g_bbE);
		}
		g_a$Y() {
			return this.g_bbb.g_a$Y();
		}
		g_aRq() {
			return this.g_bbM ? this.g_bbb.g_Gk() : performance.now() / 1e3;
		}
		g_bbn() {
			return this.g_xD.g_bbn();
		}
		g_ban() {
			return this.g_xD.g_ban();
		}
		g_bbo() {
			return this.g_xD.g_bbo();
		}
		g_bai() {
			return this.g_xD;
		}
		g_bak() {
			return this.g_xD.g_bak();
		}
		g_bar(e) {
			this.g_bbE = e;
		}
		g_bal() {
			return this.g_bbE;
		}
		g_bbQ() {
			return this.g_bbF;
		}
		g_bam() {}
		g_baq() {}
		g_Mm() {
			return !this.g_UO && !this.g_aRp && !this.g_bam();
		}
		g_Yd() {
			return !this.g_UO && !this.g_bam();
		}
		g_bbR() {}
		g_aio(e) {
			let g = this.g_xD.g_aio();
			return e && (g /= this.g_Lz || 0.001), g;
		}
		g_MW() {}
		g_Kg() {}
		g_baD() {}
		g_aRr() {
			return this.g_aRp;
		}
		g_MV() {}
		g_aAJ(e) {
			(this.g_bbK = e),
				this.g_bbG.gain.cancelScheduledValues(0),
				(this.g_bbO = -1),
				(this.g_bbG.gain.value = this.g_bbS());
		}
		g_aAK(g, _, t) {
			if (!this.g_bbT()) {
				g *= this.g_a$Y();
				const a = this.g_bbG.gain;
				a.cancelScheduledValues(0);
				const n = this.g_bbb.g_a$O(),
					e = n + _;
				a.setValueAtTime(a.value, n),
					a.linearRampToValueAtTime(g, e),
					(this.g_bbK = g),
					(this.g_bbO = e),
					(this.g_bbP = t);
			}
		}
		g_baE() {
			this.g_aAJ(this.g_bbK);
		}
		g_KZ(e) {
			-1 !== this.g_bbO &&
				e >= this.g_bbO &&
				((this.g_bbO = -1),
				this.g_bbP && this.g_Kg(),
				this.g_bbb.g_baz('fade-ended', this.g_bbE, this.g_bbF));
		}
		g_bbS() {
			const e = this.g_bbK * this.g_a$Y();
			return isFinite(e) ? e : 0;
		}
		g_aAI(e) {
			(e = !!e), this.g_bbL === e || ((this.g_bbL = e), this.g_baF());
		}
		g_bbT() {
			return this.g_bbL;
		}
		g_aAz() {
			return this.g_bbb.g_aAz();
		}
		g_baF() {}
		g_aAH() {}
		g_ZM() {
			return this.g_aad;
		}
		g_Mj(e) {
			this.g_Lz === e || ((this.g_Lz = e), this.g_baG());
		}
		g_baG() {}
		g_Mk() {
			return this.g_Lz;
		}
		g_aAP() {}
		g_asi() {}
		g_baA(e) {
			(e = !!e),
				this.g_bbI === e ||
					((this.g_bbI = e),
					this.g_bbI
						? (!this.g_bbH &&
								((this.g_bbH = this.g_azD().createPanner()),
								(this.g_bbH.panningModel = this.g_bbb.g_bab()),
								(this.g_bbH.distanceModel = this.g_bbb.g_bac()),
								(this.g_bbH.refDistance = this.g_bbb.g_bad()),
								(this.g_bbH.maxDistance = this.g_bbb.g_bae()),
								(this.g_bbH.rolloffFactor = this.g_bbb.g_baf())),
						  this.g_bbG.disconnect(),
						  this.g_bbG.connect(this.g_bbH),
						  this.g_bbH.connect(this.g_azF()))
						: (this.g_bbH.disconnect(), this.g_bbG.disconnect(), this.g_bbG.connect(this.g_azF())));
		}
		g_baB(a, t, n, b, e, i) {
			this.g_bbI &&
				(this.g_baH(a, t, n),
				(this.g_bbH.coneInnerAngle = _(b)),
				(this.g_bbH.coneOuterAngle = _(e)),
				(this.g_bbH.coneOuterGain = i));
		}
		g_baH(e, g, a) {
			this.g_bbI &&
				(this.g_bbH.setPosition(e, g, 0), this.g_bbH.setOrientation(Math.cos(a), Math.sin(a), 0));
		}
		g_baC(e) {
			this.g_bbN = e;
		}
		g_Ei() {
			return this.g_bbN;
		}
		g_bbU() {}
		g_a$X(e) {
			const g = this.g_bbH || this.g_bbG;
			g.disconnect(), g.connect(e);
		}
		g_bax() {
			return {
				aiid: this.g_bbQ(),
				tag: this.g_bbE,
				duration: this.g_aio(),
				volume: this.g_bbK,
				isPlaying: this.g_Mm(),
				playbackTime: this.g_bbR(),
				playbackRate: this.g_Mk(),
				uid: this.g_bbN,
				bufferOriginalUrl: this.g_bbn(),
				bufferUrl: '',
				bufferType: this.g_bbo(),
				isMusic: this.g_bak(),
				isLooping: this.g_ZM(),
				isMuted: this.g_bbT(),
				resumePosition: this.g_bbU(),
				pan: this.g_bbV()
			};
		}
		g_bba(e) {
			this.g_Mj(e.playbackRate), this.g_aAI(e.isMuted);
		}
		g_bbV() {
			if (!this.g_bbH) return null;
			const e = this.g_bbH;
			return {
				pos: [e.positionX.value, e.positionY.value, e.positionZ.value],
				orient: [e.orientationX.value, e.orientationY.value, e.orientationZ.value],
				cia: e.coneInnerAngle,
				coa: e.coneOuterAngle,
				cog: e.coneOuterGain,
				uid: this.g_bbN
			};
		}
		g_ba$(e) {
			if (!e) return void this.g_baA(!1);
			this.g_baA(!0);
			const g = this.g_bbH;
			g.setPosition(...g.pos),
				g.setOrientation(...g.orient),
				(g.coneInnerAngle = g.cia),
				(g.coneOuterAngle = g.coa),
				(g.coneOuterGain = g.cog),
				(this.g_bbN = g.uid);
		}
	};
}
'use strict',
	(self.g_bbi = class extends g_bbD {
		constructor(e, g, a) {
			super(e, g, a),
				this.g_xD.g_bbx().connect(this.g_bbG),
				(this.g_xD.onended = () => this.g_bbW());
		}
		g_ek() {
			this.g_Kg(), this.g_xD.g_bbx().disconnect(), super.g_ek();
		}
		g_bbw() {
			return this.g_xD.g_bbw();
		}
		g_bbW() {
			(this.g_UO = !0), (this.g_bbN = -1), this.g_bbb.g_baz('ended', this.g_bbE, this.g_bbF);
		}
		g_bam() {
			return this.g_bbw().ended;
		}
		g_baq() {
			return !!this.g_UO || this.g_bam();
		}
		g_bbR(e) {
			let g = this.g_bbw().currentTime;
			return e && (g *= this.g_Lz), this.g_aad || (g = Math.min(g, this.g_aio())), g;
		}
		g_MW(e, g, _) {
			const a = this.g_bbw();
			if (
				(1 !== a.playbackRate && (a.playbackRate = 1),
				a.loop !== e && (a.loop = e),
				this.g_aAJ(g),
				a.muted && (a.muted = !1),
				a.currentTime !== _)
			)
				try {
					a.currentTime = _;
				} catch (e) {
					console.warn(
						`[Construct 3] Exception seeking audio '${this.g_xD.g_ban()}' to position '${_}': `,
						e
					);
				}
			this.g_bbb.g_aZS(a), (this.g_UO = !1), (this.g_aRp = !1), (this.g_aad = e), (this.g_Lz = 1);
		}
		g_Kg() {
			const e = this.g_bbw();
			e.paused || e.pause(),
				this.g_bbb.g_aZT(e),
				(this.g_UO = !0),
				(this.g_aRp = !1),
				(this.g_bbN = -1);
		}
		g_baD() {
			if (!(this.g_aRp || this.g_UO || this.g_bam())) {
				const e = this.g_bbw();
				e.paused || e.pause(), this.g_bbb.g_aZT(e), (this.g_aRp = !0);
			}
		}
		g_MV() {
			!this.g_aRp ||
				this.g_UO ||
				this.g_bam() ||
				(this.g_bbb.g_aZS(this.g_bbw()), (this.g_aRp = !1));
		}
		g_baF() {
			this.g_bbw().muted = this.g_bbL || this.g_aAz();
		}
		g_aAH(e) {
			(e = !!e), this.g_aad === e || ((this.g_aad = e), (this.g_bbw().loop = e));
		}
		g_baG() {
			let e = this.g_Lz;
			this.g_bbM && (e *= this.g_bbb.g_KX());
			try {
				this.g_bbw().playbackRate = e;
			} catch (g) {
				console.warn(`[Construct 3] Unable to set playback rate '${e}':`, g);
			}
		}
		g_aAP(e) {
			if (!(this.g_UO || this.g_bam()))
				try {
					this.g_bbw().currentTime = e;
				} catch (g) {
					console.warn(`[Construct 3] Error seeking audio to '${e}': `, g);
				}
		}
		g_bbU() {
			return this.g_bbR();
		}
		g_asi(e) {
			e
				? this.g_Mm()
					? (this.g_bbw().pause(), (this.g_bbJ = !0))
					: (this.g_bbJ = !1)
				: this.g_bbJ && (this.g_bbb.g_aZS(this.g_bbw()), (this.g_bbJ = !1));
		}
	}),
	'use strict',
	(self.g_bbj = class extends g_bbD {
		constructor(e, g, a) {
			super(e, g, a),
				(this.g_bbX = null),
				(this.g_bbY = (e) => this.g_bbW(e)),
				(this.g_bbZ = !0),
				(this.g_bb_ = null),
				(this.g_aqI = 0),
				(this.g_bb$ = 0),
				(this.g_bca = 1);
		}
		g_ek() {
			this.g_Kg(), this.g_bcb(), (this.g_bbY = null), super.g_ek();
		}
		g_bcb() {
			this.g_bbX && this.g_bbX.disconnect(), (this.g_bbX = null), (this.g_bb_ = null);
		}
		g_bbW(e) {
			this.g_aRp ||
				this.g_bbJ ||
				e.target !== this.g_bb_ ||
				((this.g_bbZ = !0),
				(this.g_UO = !0),
				(this.g_bbN = -1),
				this.g_bcb(),
				this.g_bbb.g_baz('ended', this.g_bbE, this.g_bbF));
		}
		g_bam() {
			return !(!this.g_UO && this.g_bbX && this.g_bbX.loop) && !this.g_aRp && this.g_bbZ;
		}
		g_baq() {
			return !this.g_bbX || this.g_UO || this.g_bam();
		}
		g_bbR(e) {
			let g = 0;
			return (
				(g = this.g_aRp ? this.g_bb$ : this.g_aRq() - this.g_aqI),
				e && (g *= this.g_Lz),
				this.g_aad || (g = Math.min(g, this.g_aio())),
				g
			);
		}
		g_MW(e, g, a, _) {
			(this.g_bca = 1),
				this.g_aAJ(g),
				this.g_bcb(),
				(this.g_bbX = this.g_azD().createBufferSource()),
				(this.g_bbX.buffer = this.g_xD.g_baL()),
				this.g_bbX.connect(this.g_bbG),
				(this.g_bb_ = this.g_bbX),
				(this.g_bbX.onended = this.g_bbY),
				(this.g_bbX.loop = e),
				this.g_bbX.start(_, a),
				(this.g_bbZ = !1),
				(this.g_UO = !1),
				(this.g_aRp = !1),
				(this.g_aad = e),
				(this.g_Lz = 1),
				(this.g_aqI = this.g_aRq() - a);
		}
		g_Kg() {
			this.g_bbX && this.g_bbX.stop(0), (this.g_UO = !0), (this.g_aRp = !1), (this.g_bbN = -1);
		}
		g_baD() {
			this.g_aRp ||
				this.g_UO ||
				this.g_bam() ||
				((this.g_bb$ = this.g_bbR(!0)),
				this.g_aad && (this.g_bb$ %= this.g_aio()),
				(this.g_aRp = !0),
				this.g_bbX.stop(0));
		}
		g_MV() {
			!this.g_aRp ||
				this.g_UO ||
				this.g_bam() ||
				(this.g_bcb(),
				(this.g_bbX = this.g_azD().createBufferSource()),
				(this.g_bbX.buffer = this.g_xD.g_baL()),
				this.g_bbX.connect(this.g_bbG),
				(this.g_bb_ = this.g_bbX),
				(this.g_bbX.onended = this.g_bbY),
				(this.g_bbX.loop = this.g_aad),
				this.g_baE(),
				this.g_baG(),
				(this.g_aqI = this.g_aRq() - this.g_bb$ / (this.g_Lz || 0.001)),
				this.g_bbX.start(0, this.g_bb$),
				(this.g_aRp = !1));
		}
		g_bbS() {
			return super.g_bbS() * this.g_bca;
		}
		g_baF() {
			(this.g_bca = this.g_bbL || this.g_aAz() ? 0 : 1), this.g_baE();
		}
		g_aAH(e) {
			(e = !!e), this.g_aad === e || ((this.g_aad = e), this.g_bbX && (this.g_bbX.loop = e));
		}
		g_baG() {
			let e = this.g_Lz;
			this.g_bbM && (e *= this.g_bbb.g_KX()), this.g_bbX && (this.g_bbX.playbackRate.value = e);
		}
		g_aAP(e) {
			this.g_UO ||
				this.g_bam() ||
				(this.g_aRp ? (this.g_bb$ = e) : (this.g_baD(), (this.g_bb$ = e), this.g_MV()));
		}
		g_bbU() {
			return this.g_bb$;
		}
		g_asi(e) {
			e
				? this.g_Mm()
					? ((this.g_bbJ = !0),
					  (this.g_bb$ = this.g_bbR(!0)),
					  this.g_aad && (this.g_bb$ %= this.g_aio()),
					  this.g_bbX.stop(0))
					: (this.g_bbJ = !1)
				: this.g_bbJ &&
				  (this.g_bcb(),
				  (this.g_bbX = this.g_azD().createBufferSource()),
				  (this.g_bbX.buffer = this.g_xD.g_baL()),
				  this.g_bbX.connect(this.g_bbG),
				  (this.g_bb_ = this.g_bbX),
				  (this.g_bbX.onended = this.g_bbY),
				  (this.g_bbX.loop = this.g_aad),
				  this.g_baE(),
				  this.g_baG(),
				  (this.g_aqI = this.g_aRq() - this.g_bb$ / (this.g_Lz || 0.001)),
				  this.g_bbX.start(0, this.g_bb$),
				  (this.g_bbJ = !1));
		}
		g_bba(e) {
			super.g_bba(e), (this.g_bb$ = e.resumePosition);
		}
	}),
	'use strict';
{
	function g(e) {
		return Math.pow(10, e / 20);
	}
	function _(e) {
		return Math.max(Math.min(g(e), 1), 0);
	}
	function t(e) {
		return 20 * (Math.log(e) / 2.302585092994046);
	}
	function n(e) {
		return t(Math.max(Math.min(e, 1), 0));
	}
	function i(e, g) {
		return 1 - Math.exp(-g * e);
	}
	class e {
		constructor(e) {
			(this.g_bbb = e),
				(this.g_a_Z = e.g_azD()),
				(this.g_Dr = -1),
				(this.g_bbE = ''),
				(this.g_kL = ''),
				(this.g_bcc = null);
		}
		g_ek() {
			this.g_a_Z = null;
		}
		g_al_(e) {
			this.g_Dr = e;
		}
		g_EM() {
			return this.g_Dr;
		}
		g_a$T(e) {
			this.g_bbE = e;
		}
		g_bal() {
			return this.g_bbE;
		}
		g_bcd() {
			return this.g_a_Z.createGain();
		}
		g_a$R() {}
		g_a$V() {}
		g_bce(g, a, _, t) {
			if ((g.cancelScheduledValues(0), 0 === t)) return void (g.value = a);
			const n = this.g_a_Z.currentTime;
			(t += n),
				0 === _
					? g.setValueAtTime(a, t)
					: 1 === _
					? (g.setValueAtTime(g.value, n), g.linearRampToValueAtTime(a, t))
					: 2 === _
					? (g.setValueAtTime(g.value, n), g.exponentialRampToValueAtTime(a, t))
					: void 0;
		}
		g_bax() {
			return { type: this.g_kL, tag: this.g_bbE, params: this.g_bcc };
		}
	}
	(self.g_baI = class extends e {
		constructor(_, a, t, n, b, e, i) {
			super(_),
				(this.g_kL = 'filter'),
				(this.g_bcc = [a, t, n, b, e, i]),
				(this.g_bcf = this.g_bcd()),
				(this.g_bcg = this.g_bcd()),
				(this.g_bcg.gain.value = i),
				(this.g_bch = this.g_bcd()),
				(this.g_bch.gain.value = 1 - i),
				(this.g_bci = this.g_a_Z.createBiquadFilter()),
				(this.g_bci.type = a),
				(this.g_bci.frequency.value = t),
				(this.g_bci.detune.value = n),
				(this.g_bci.Q.value = b),
				(this.g_bci.gain.vlaue = e),
				this.g_bcf.connect(this.g_bci),
				this.g_bcf.connect(this.g_bch),
				this.g_bci.connect(this.g_bcg);
		}
		g_ek() {
			this.g_bcf.disconnect(),
				this.g_bci.disconnect(),
				this.g_bcg.disconnect(),
				this.g_bch.disconnect(),
				super.g_ek();
		}
		g_a$V(e) {
			this.g_bcg.disconnect(),
				this.g_bcg.connect(e),
				this.g_bch.disconnect(),
				this.g_bch.connect(e);
		}
		g_a$R() {
			return this.g_bcf;
		}
		g_baW(e, g, a, _) {
			0 === e
				? ((g = Math.max(Math.min(g / 100, 1), 0)),
				  (this.g_bcc[5] = g),
				  this.g_bce(this.g_bcg.gain, g, a, _),
				  this.g_bce(this.g_bch.gain, 1 - g, a, _))
				: 1 === e
				? ((this.g_bcc[1] = g), this.g_bce(this.g_bci.frequency, g, a, _))
				: 2 === e
				? ((this.g_bcc[2] = g), this.g_bce(this.g_bci.detune, g, a, _))
				: 3 === e
				? ((this.g_bcc[3] = g), this.g_bce(this.g_bci.Q, g, a, _))
				: 4 === e
				? ((this.g_bcc[4] = g), this.g_bce(this.g_bci.gain, g, a, _))
				: void 0;
		}
	}),
		(self.g_baJ = class extends e {
			constructor(e, g, a, _) {
				super(e),
					(this.g_kL = 'delay'),
					(this.g_bcc = [g, a, _]),
					(this.g_bcf = this.g_bcd()),
					(this.g_bcg = this.g_bcd()),
					(this.g_bcg.gain.value = _),
					(this.g_bch = this.g_bcd()),
					(this.g_bch.gain.value = 1 - _),
					(this.g_bcj = this.g_bcd()),
					(this.g_bck = this.g_a_Z.createDelay(g)),
					(this.g_bck.delayTime.value = g),
					(this.g_bcl = this.g_bcd()),
					(this.g_bcl.gain.value = a),
					this.g_bcf.connect(this.g_bcj),
					this.g_bcf.connect(this.g_bch),
					this.g_bcj.connect(this.g_bcg),
					this.g_bcj.connect(this.g_bck),
					this.g_bck.connect(this.g_bcl),
					this.g_bcl.connect(this.g_bcj);
			}
			g_ek() {
				this.g_bcf.disconnect(),
					this.g_bcg.disconnect(),
					this.g_bch.disconnect(),
					this.g_bcj.disconnect(),
					this.g_bck.disconnect(),
					this.g_bcl.disconnect(),
					super.g_ek();
			}
			g_a$V(e) {
				this.g_bcg.disconnect(),
					this.g_bcg.connect(e),
					this.g_bch.disconnect(),
					this.g_bch.connect(e);
			}
			g_a$R() {
				return this.g_bcf;
			}
			g_baW(g, a, t, n) {
				0 === g
					? ((a = Math.max(Math.min(a / 100, 1), 0)),
					  (this.g_bcc[2] = a),
					  this.g_bce(this.g_bcg.gain, a, t, n),
					  this.g_bce(this.g_bch.gain, 1 - a, t, n))
					: 4 === g
					? ((this.g_bcc[1] = _(a)), this.g_bce(this.g_bcl.gain, _(a), t, n))
					: 5 === g
					? ((this.g_bcc[0] = a), this.g_bce(this.g_bck.delayTime, a, t, n))
					: void 0;
			}
		}),
		(self.g_baK = class extends e {
			constructor(e, g, a, _) {
				super(e),
					(this.g_kL = 'convolution'),
					(this.g_bcc = [a, _]),
					(this.g_bcm = ''),
					(this.g_bcn = ''),
					(this.g_bco = ''),
					(this.g_bcf = this.g_bcd()),
					(this.g_bcg = this.g_bcd()),
					(this.g_bcg.gain.value = _),
					(this.g_bch = this.g_bcd()),
					(this.g_bch.gain.value = 1 - _),
					(this.g_bcp = this.g_a_Z.createConvolver()),
					(this.g_bcp.normalize = a),
					(this.g_bcp.buffer = g),
					this.g_bcf.connect(this.g_bcp),
					this.g_bcf.connect(this.g_bch),
					this.g_bcp.connect(this.g_bcg);
			}
			g_ek() {
				this.g_bcf.disconnect(),
					this.g_bcp.disconnect(),
					this.g_bcg.disconnect(),
					this.g_bch.disconnect(),
					super.g_ek();
			}
			g_a$V(e) {
				this.g_bcg.disconnect(),
					this.g_bcg.connect(e),
					this.g_bch.disconnect(),
					this.g_bch.connect(e);
			}
			g_a$R() {
				return this.g_bcf;
			}
			g_baW(e, g, a, _) {
				0 === e
					? ((g = Math.max(Math.min(g / 100, 1), 0)),
					  (this.g_bcc[1] = g),
					  this.g_bce(this.g_bcg.gain, g, a, _),
					  this.g_bce(this.g_bch.gain, 1 - g, a, _))
					: void 0;
			}
			g_baM(e, g, a) {
				(this.g_bcm = e), (this.g_bcn = g), (this.g_bco = a);
			}
			g_bax() {
				const e = super.g_bax();
				return (
					(e.bufferOriginalUrl = this.g_bcm), (e.bufferUrl = ''), (e.bufferType = this.g_bco), e
				);
			}
		}),
		(self.g_baN = class extends e {
			constructor(g, a, _, t, n, e) {
				super(g),
					(this.g_kL = 'flanger'),
					(this.g_bcc = [a, _, t, n, e]),
					(this.g_bcf = this.g_bcd()),
					(this.g_bch = this.g_bcd()),
					(this.g_bch.gain.value = 1 - e / 2),
					(this.g_bcg = this.g_bcd()),
					(this.g_bcg.gain.value = e / 2),
					(this.g_bcq = this.g_bcd()),
					(this.g_bcq.gain.value = n),
					(this.g_bck = this.g_a_Z.createDelay(a + _)),
					(this.g_bck.delayTime.value = a),
					(this.g_bcr = this.g_a_Z.createOscillator()),
					(this.g_bcr.frequency.value = t),
					(this.g_bcs = this.g_bcd()),
					(this.g_bcs.gain.value = _),
					this.g_bcf.connect(this.g_bck),
					this.g_bcf.connect(this.g_bch),
					this.g_bck.connect(this.g_bcg),
					this.g_bck.connect(this.g_bcq),
					this.g_bcq.connect(this.g_bck),
					this.g_bcr.connect(this.g_bcs),
					this.g_bcs.connect(this.g_bck.delayTime),
					this.g_bcr.start(0);
			}
			g_ek() {
				this.g_bcr.stop(0),
					this.g_bcf.disconnect(),
					this.g_bck.disconnect(),
					this.g_bcr.disconnect(),
					this.g_bcs.disconnect(),
					this.g_bch.disconnect(),
					this.g_bcg.disconnect(),
					this.g_bcq.disconnect(),
					super.g_ek();
			}
			g_a$V(e) {
				this.g_bcg.disconnect(),
					this.g_bcg.connect(e),
					this.g_bch.disconnect(),
					this.g_bch.connect(e);
			}
			g_a$R() {
				return this.g_bcf;
			}
			g_baW(e, g, a, _) {
				0 === e
					? ((g = Math.max(Math.min(g / 100, 1), 0)),
					  (this.g_bcc[4] = g),
					  this.g_bce(this.g_bcg.gain, g / 2, a, _),
					  this.g_bce(this.g_bch.gain, 1 - g / 2, a, _))
					: 6 === e
					? ((this.g_bcc[1] = g / 1e3), this.g_bce(this.g_bcs.gain, g / 1e3, a, _))
					: 7 === e
					? ((this.g_bcc[2] = g), this.g_bce(this.g_bcr.frequency, g, a, _))
					: 8 === e
					? ((this.g_bcc[3] = g / 100), this.g_bce(this.g_bcq.gain, g / 100, a, _))
					: void 0;
			}
		}),
		(self.g_baO = class extends e {
			constructor(_, a, t, n, b, e, i) {
				super(_),
					(this.g_kL = 'phaser'),
					(this.g_bcc = [a, t, n, b, e, i]),
					(this.g_bcf = this.g_bcd()),
					(this.g_bch = this.g_bcd()),
					(this.g_bch.gain.value = 1 - i / 2),
					(this.g_bcg = this.g_bcd()),
					(this.g_bcg.gain.value = i / 2),
					(this.g_bci = this.g_a_Z.createBiquadFilter()),
					(this.g_bci.type = 'allpass'),
					(this.g_bci.frequency.value = a),
					(this.g_bci.detune.value = t),
					(this.g_bci.Q.value = n),
					(this.g_bcr = this.g_a_Z.createOscillator()),
					(this.g_bcr.frequency.value = e),
					(this.g_bcs = this.g_bcd()),
					(this.g_bcs.gain.value = b),
					this.g_bcf.connect(this.g_bci),
					this.g_bcf.connect(this.g_bch),
					this.g_bci.connect(this.g_bcg),
					this.g_bcr.connect(this.g_bcs),
					this.g_bcs.connect(this.g_bci.frequency),
					this.g_bcr.start(0);
			}
			g_ek() {
				this.g_bcr.stop(0),
					this.g_bcf.disconnect(),
					this.g_bci.disconnect(),
					this.g_bcr.disconnect(),
					this.g_bcs.disconnect(),
					this.g_bch.disconnect(),
					this.g_bcg.disconnect(),
					super.g_ek();
			}
			g_a$V(e) {
				this.g_bcg.disconnect(),
					this.g_bcg.connect(e),
					this.g_bch.disconnect(),
					this.g_bch.connect(e);
			}
			g_a$R() {
				return this.g_bcf;
			}
			g_baW(e, g, a, _) {
				0 === e
					? ((g = Math.max(Math.min(g / 100, 1), 0)),
					  (this.g_bcc[5] = g),
					  this.g_bce(this.g_bcg.gain, g / 2, a, _),
					  this.g_bce(this.g_bch.gain, 1 - g / 2, a, _))
					: 1 === e
					? ((this.g_bcc[0] = g), this.g_bce(this.g_bci.frequency, g, a, _))
					: 2 === e
					? ((this.g_bcc[1] = g), this.g_bce(this.g_bci.detune, g, a, _))
					: 3 === e
					? ((this.g_bcc[2] = g), this.g_bce(this.g_bci.Q, g, a, _))
					: 6 === e
					? ((this.g_bcc[3] = g), this.g_bce(this.g_bcs.gain, g, a, _))
					: 7 === e
					? ((this.g_bcc[4] = g), this.g_bce(this.g_bcr.frequency, g, a, _))
					: void 0;
			}
		}),
		(self.g_baP = class extends e {
			constructor(e, g) {
				super(e),
					(this.g_kL = 'gain'),
					(this.g_bcc = [g]),
					(this.g_bct = this.g_bcd()),
					(this.g_bct.gain.value = g);
			}
			g_ek() {
				this.g_bct.disconnect(), super.g_ek();
			}
			g_a$V(e) {
				this.g_bct.disconnect(), this.g_bct.connect(e);
			}
			g_a$R() {
				return this.g_bct;
			}
			g_baW(g, a, t, n) {
				4 === g ? ((this.g_bcc[0] = _(a)), this.g_bce(this.g_bct.gain, _(a), t, n)) : void 0;
			}
		}),
		(self.g_baQ = class extends e {
			constructor(e, g, a) {
				super(e),
					(this.g_kL = 'tremolo'),
					(this.g_bcc = [g, a]),
					(this.g_bct = this.g_bcd()),
					(this.g_bct.gain.value = 1 - a / 2),
					(this.g_bcr = this.g_a_Z.createOscillator()),
					(this.g_bcr.frequency.value = g),
					(this.g_bcs = this.g_bcd()),
					(this.g_bcs.gain.value = a / 2),
					this.g_bcr.connect(this.g_bcs),
					this.g_bcs.connect(this.g_bct.gain),
					this.g_bcr.start(0);
			}
			g_ek() {
				this.g_bcr.stop(0),
					this.g_bcr.disconnect(),
					this.g_bcs.disconnect(),
					this.g_bct.disconnect(),
					super.g_ek();
			}
			g_a$V(e) {
				this.g_bct.disconnect(), this.g_bct.connect(e);
			}
			g_a$R() {
				return this.g_bct;
			}
			g_baW(e, g, a, _) {
				0 === e
					? ((g = Math.max(Math.min(g / 100, 1), 0)),
					  (this.g_bcc[1] = g),
					  this.g_bce(this.g_bct.gain.value, 1 - g / 2, a, _),
					  this.g_bce(this.g_bcs.gain.value, g / 2, a, _))
					: 7 === e
					? ((this.g_bcc[0] = g), this.g_bce(this.g_bcr.frequency, g, a, _))
					: void 0;
			}
		}),
		(self.g_baR = class extends e {
			constructor(e, g, a) {
				super(e),
					(this.g_kL = 'ringmod'),
					(this.g_bcc = [g, a]),
					(this.g_bcf = this.g_bcd()),
					(this.g_bcg = this.g_bcd()),
					(this.g_bcg.gain.value = a),
					(this.g_bch = this.g_bcd()),
					(this.g_bch.gain.value = 1 - a),
					(this.g_bcu = this.g_bcd()),
					(this.g_bcu.gain.value = 0),
					(this.g_bcr = this.g_a_Z.createOscillator()),
					(this.g_bcr.frequency.value = g),
					this.g_bcr.connect(this.g_bcu.gain),
					this.g_bcr.start(0),
					this.g_bcf.connect(this.g_bcu),
					this.g_bcf.connect(this.g_bch),
					this.g_bcu.connect(this.g_bcg);
			}
			g_ek() {
				this.g_bcr.stop(0),
					this.g_bcr.disconnect(),
					this.g_bcu.disconnect(),
					this.g_bcf.disconnect(),
					this.g_bcg.disconnect(),
					this.g_bch.disconnect(),
					super.g_ek();
			}
			g_a$V(e) {
				this.g_bcg.disconnect(),
					this.g_bcg.connect(e),
					this.g_bch.disconnect(),
					this.g_bch.connect(e);
			}
			g_a$R() {
				return this.g_bcf;
			}
			g_baW(e, g, a, _) {
				0 === e
					? ((g = Math.max(Math.min(g / 100, 1), 0)),
					  (this.g_bcc[1] = g),
					  this.g_bce(this.g_bcg.gain, g, a, _),
					  this.g_bce(this.g_bch.gain, 1 - g, a, _))
					: 7 === e
					? ((this.g_bcc[0] = g), this.g_bce(this.g_bcr.frequency, g, a, _))
					: void 0;
			}
		}),
		(self.g_baS = class extends e {
			constructor(g, a, _, t, n, e) {
				super(g),
					(this.g_kL = 'distortion'),
					(this.g_bcc = [a, _, t, n, e]),
					(this.g_bcf = this.g_bcd()),
					(this.g_bcv = this.g_bcd()),
					(this.g_bcw = this.g_bcd()),
					this.g_bcx(t, n),
					(this.g_bcg = this.g_bcd()),
					(this.g_bcg.gain.value = e),
					(this.g_bch = this.g_bcd()),
					(this.g_bch.gain.value = 1 - e),
					(this.g_bcy = this.g_a_Z.createWaveShaper()),
					(this.g_bcz = new Float32Array(65536)),
					this.g_bcA(a, _),
					(this.g_bcy.curve = this.g_bcz),
					this.g_bcf.connect(this.g_bcv),
					this.g_bcf.connect(this.g_bch),
					this.g_bcv.connect(this.g_bcy),
					this.g_bcy.connect(this.g_bcw),
					this.g_bcw.connect(this.g_bcg);
			}
			g_ek() {
				this.g_bcf.disconnect(),
					this.g_bcv.disconnect(),
					this.g_bcy.disconnect(),
					this.g_bcw.disconnect(),
					this.g_bcg.disconnect(),
					this.g_bch.disconnect(),
					super.g_ek();
			}
			g_bcx(e, g) {
				0.01 > e && (e = 0.01),
					(this.g_bcv.gain.value = e),
					(this.g_bcw.gain.value = Math.pow(1 / e, 0.6) * g);
			}
			g_bcA(e, g) {
				for (let a, _ = 0; 32768 > _; ++_)
					(a = _ / 32768),
						(a = this.g_bcB(a, e, g)),
						(this.g_bcz[32768 + _] = a),
						(this.g_bcz[32768 - _ - 1] = -a);
			}
			g_bcB(e, a, _) {
				const t = 1.05 * _ * a - a,
					n = 0 > e ? -1 : 1,
					b = 0 > e ? -e : e;
				let g = b < a ? b : a + t * i(b - a, 1 / t);
				return (g *= n), g;
			}
			g_a$V(e) {
				this.g_bcg.disconnect(),
					this.g_bcg.connect(e),
					this.g_bch.disconnect(),
					this.g_bch.connect(e);
			}
			g_a$R() {
				return this.g_bcf;
			}
			g_baW(e, g, a, _) {
				0 === e
					? ((g = Math.max(Math.min(g / 100, 1), 0)),
					  (this.g_bcc[4] = g),
					  this.g_bce(this.g_bcg.gain, g, a, _),
					  this.g_bce(this.g_bch.gain, 1 - g, a, _))
					: void 0;
			}
		}),
		(self.g_baT = class extends e {
			constructor(g, a, _, t, n, e) {
				super(g),
					(this.g_kL = 'compressor'),
					(this.g_bcc = [a, _, t, n, e]),
					(this.g_bct = this.g_a_Z.createDynamicsCompressor()),
					(this.g_bct.threshold.value = a),
					(this.g_bct.knee.value = _),
					(this.g_bct.ratio.value = t),
					(this.g_bct.attack.value = n),
					(this.g_bct.release.value = e);
			}
			g_ek() {
				this.g_bct.disconnect(), super.g_ek();
			}
			g_a$V(e) {
				this.g_bct.disconnect(), this.g_bct.connect(e);
			}
			g_a$R() {
				return this.g_bct;
			}
			g_baW() {}
		}),
		(self.g_baU = class extends e {
			constructor(e, g, a) {
				super(e),
					(this.g_kL = 'analyser'),
					(this.g_bcc = [g, a]),
					(this.g_bct = this.g_a_Z.createAnalyser()),
					(this.g_bct.fftSize = g),
					(this.g_bct.smoothingTimeConstant = a),
					(this.g_bcC = new Float32Array(this.g_bct.frequencyBinCount)),
					(this.g_bcD = new Uint8Array(g)),
					(this.g_bcE = 0),
					(this.g_bcF = 0),
					this.g_bbb.g_baX(this);
			}
			g_ek() {
				this.g_bbb.g_baY(this), this.g_bct.disconnect(), super.g_ek();
			}
			g_KZ() {
				this.g_bct.getFloatFrequencyData(this.g_bcC), this.g_bct.getByteTimeDomainData(this.g_bcD);
				const e = this.g_bct.fftSize;
				this.g_bcE = 0;
				let g = 0;
				for (let a, _ = 0; _ < e; ++_)
					(a = (this.g_bcD[_] - 128) / 128),
						0 > a && (a = -a),
						this.g_bcE < a && (this.g_bcE = a),
						(g += a * a);
				(this.g_bcE = n(this.g_bcE)), (this.g_bcF = n(Math.sqrt(g / e)));
			}
			g_a$V(e) {
				this.g_bct.disconnect(), this.g_bct.connect(e);
			}
			g_a$R() {
				return this.g_bct;
			}
			g_baW() {}
			g_bay() {
				return {
					tag: this.g_bal(),
					index: this.g_EM(),
					peak: this.g_bcE,
					rms: this.g_bcF,
					binCount: this.g_bct.frequencyBinCount,
					freqBins: this.g_bcC
				};
			}
		});
}
{
	const e = class extends g_aYk {
		constructor(e) {
			super(e, 'mouse'), this.g_aYw('cursor', (e) => this.g_bcG(e));
		}
		g_bcG(e) {
			document.documentElement.style.cursor = e;
		}
	};
	g_aYV.g_aZQ(e);
}
{
	const e = class extends g_aYk {
		constructor(e) {
			super(e, 'touch'), this.g_aYw('request-permission', (e) => this.g_bcH(e));
		}
		async g_bcH(e) {
			const g = e.type;
			let a = !0;
			0 === g ? (a = await this.g_bcI()) : 1 === g && (a = await this.g_bcJ()),
				this.g_aYp('permission-result', { type: g, result: a });
		}
		async g_bcI() {
			if (!self.DeviceOrientationEvent || !self.DeviceOrientationEvent.requestPermission) return !0;
			try {
				const e = await self.DeviceOrientationEvent.requestPermission();
				return 'granted' === e;
			} catch (e) {
				return console.warn('[Touch] Failed to request orientation permission: ', e), !1;
			}
		}
		async g_bcJ() {
			if (!self.DeviceMotionEvent || !self.DeviceMotionEvent.requestPermission) return !0;
			try {
				const e = await self.DeviceMotionEvent.requestPermission();
				return 'granted' === e;
			} catch (e) {
				return console.warn('[Touch] Failed to request motion permission: ', e), !1;
			}
		}
	};
	g_aYV.g_aZQ(e);
}
{
	const e = class extends g_aYk {
		constructor(e) {
			super(e, 'browser'),
				(this.g_aps = ''),
				this.g_aYw('get-initial-state', (e) => this.g_bcK(e)),
				this.g_aYw('ready-for-sw-messages', () => this.g_bcL()),
				this.g_aYw('alert', (e) => this.g_a_C(e)),
				this.g_aYw('close', () => this.g_bcM()),
				this.g_aYw('set-focus', (e) => this.g_aYK(e)),
				this.g_aYw('vibrate', (e) => this.g_bcN(e)),
				this.g_aYw('lock-orientation', (e) => this.g_bcO(e)),
				this.g_aYw('unlock-orientation', () => this.g_bcP()),
				this.g_aYw('navigate', (e) => this.g_bcQ(e)),
				this.g_aYw('request-fullscreen', (e) => this.g_bcR(e)),
				this.g_aYw('exit-fullscreen', () => this.g_bcS()),
				window.addEventListener('online', () => this.g_aLB(!0)),
				window.addEventListener('offline', () => this.g_aLB(!1)),
				document.addEventListener('backbutton', () => this.g_bcT()),
				'undefined' != typeof Windows &&
					Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener(
						'backrequested',
						(e) => this.g_bcU(e)
					);
		}
		g_bcK(e) {
			return (
				(this.g_aps = e.exportType),
				{
					location: location.toString(),
					isOnline: !!navigator.onLine,
					referrer: document.referrer,
					title: document.title,
					isCookieEnabled: !!navigator.cookieEnabled,
					screenWidth: screen.width,
					screenHeight: screen.height,
					windowOuterWidth: window.outerWidth,
					windowOuterHeight: window.outerHeight,
					isScirraArcade: 'undefined' != typeof window.is_scirra_arcade
				}
			);
		}
		g_bcL() {
			window.C3_RegisterSW &&
				window.OfflineClientInfo &&
				window.OfflineClientInfo.SetMessageCallback((e) => this.g_aYp('sw-message', e.data));
		}
		g_aLB(e) {
			this.g_aYp('online-state', { isOnline: e });
		}
		g_bcT() {
			this.g_aYp('backbutton');
		}
		g_bcU(e) {
			(e.handled = !0), this.g_aYp('backbutton');
		}
		g_bcV() {
			return 'nwjs' === this.g_aps ? nw.Window.get() : null;
		}
		g_a_C(e) {
			alert(e.message);
		}
		g_bcM() {
			navigator.app && navigator.app.exitApp
				? navigator.app.exitApp()
				: navigator.device && navigator.device.exitApp
				? navigator.device.exitApp()
				: window.close();
		}
		g_aYK(e) {
			const g = e.isFocus;
			if ('nwjs' === this.g_aps) {
				const e = this.g_bcV();
				g ? e.focus() : e.blur();
			} else g ? window.focus() : window.blur();
		}
		g_bcN(e) {
			navigator.vibrate && navigator.vibrate(e.pattern);
		}
		g_bcO(e) {
			const g = e.orientation;
			if (screen.orientation && screen.orientation.lock)
				screen.orientation
					.lock(g)
					.catch((e) => console.warn('[Construct 3] Failed to lock orientation: ', e));
			else
				try {
					let e = !1;
					screen.lockOrientation
						? (e = screen.lockOrientation(g))
						: screen.webkitLockOrientation
						? (e = screen.webkitLockOrientation(g))
						: screen.mozLockOrientation
						? (e = screen.mozLockOrientation(g))
						: screen.msLockOrientation && (e = screen.msLockOrientation(g)),
						e || console.warn('[Construct 3] Failed to lock orientation');
				} catch (e) {
					console.warn('[Construct 3] Failed to lock orientation: ', e);
				}
		}
		g_bcP() {
			try {
				screen.orientation && screen.orientation.unlock
					? screen.orientation.unlock()
					: screen.unlockOrientation
					? screen.unlockOrientation()
					: screen.webkitUnlockOrientation
					? screen.webkitUnlockOrientation()
					: screen.mozUnlockOrientation
					? screen.mozUnlockOrientation()
					: screen.msUnlockOrientation && screen.msUnlockOrientation();
			} catch (e) {}
		}
		g_bcQ(e) {
			const g = e.type;
			if ('back' === g)
				navigator.app && navigator.app.backHistory ? navigator.app.backHistory() : window.back();
			else if ('forward' === g) window.forward();
			else if ('home' === g) window.g_bcW();
			else if ('reload' === g) location.reload();
			else if ('url' === g) {
				const g = e.url,
					a = e.target,
					_ = e.exportType;
				'windows-uwp' === _ && 'undefined' != typeof Windows
					? Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(g))
					: 'cordova' === _
					? window.open(g, '_system')
					: 'preview' === _
					? window.open(g, '_blank')
					: !this.g_aLA &&
					  (2 === a
							? (window.top.location = g)
							: 1 === a
							? (window.parent.location = g)
							: (window.location = g));
			} else if ('new-window' === g) {
				const g = e.url,
					a = e.tag,
					_ = e.exportType;
				'windows-uwp' === _ && 'undefined' != typeof Windows
					? Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(g))
					: 'cordova' === _
					? window.open(g, '_system')
					: window.open(g, a);
			}
		}
		g_bcR(e) {
			const g = { navigationUI: 'auto' },
				a = e.navUI;
			1 === a ? (g.navigationUI = 'hide') : 2 === a && (g.navigationUI = 'show');
			const _ = document.documentElement;
			_.requestFullscreen
				? _.requestFullscreen(g)
				: _.mozRequestFullScreen
				? _.mozRequestFullScreen(g)
				: _.msRequestFullscreen
				? _.msRequestFullscreen(g)
				: _.webkitRequestFullScreen &&
				  ('undefined' == typeof Element.ALLOW_KEYBOARD_INPUT
						? _.webkitRequestFullScreen()
						: _.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT));
		}
		g_bcS() {
			document.exitFullscreen
				? document.exitFullscreen()
				: document.mozCancelFullScreen
				? document.mozCancelFullScreen()
				: document.msExitFullscreen
				? document.msExitFullscreen()
				: document.webkitCancelFullScreen && document.webkitCancelFullScreen();
		}
	};
	g_aYV.g_aZQ(e);
}
