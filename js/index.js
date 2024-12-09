import {
    a as S,
    b as k
} from "../../../../chunks/chunk-WPY5KBCN.js";
import {
    a as r
} from "../../../../chunks/chunk-R2ZBTPA6.js";
import {
    a as y
} from "../../../../chunks/chunk-YXHM77MI.js";
import {
    a as g
} from "../../../../chunks/chunk-BCG2KUGW.js";
import "../../../../chunks/chunk-75TK4H44.js";
import "../../../../chunks/chunk-O4TFJKJQ.js";
import {
    u
} from "../../../../chunks/chunk-45ZHS42G.js";
import "../../../../chunks/chunk-RXMLGJMT.js";
import "../../../../chunks/chunk-HY2GWXPO.js";
import {
    I as R,
    J as M
} from "../../../../chunks/chunk-O2RVWQGL.js";
import "../../../../chunks/chunk-ZZJM66LV.js";
import "../../../../chunks/chunk-SOWOQI5E.js";
import "../../../../chunks/chunk-JAUVA5AU.js";
import "../../../../chunks/chunk-3GYLW4KZ.js";
async function i(e, t = {}) {
    u("track", e, {
        ...t,
        url: location.href
    })
}

function P(e) {
    return /%s/.test(e) ? e.replace(/%/, "% ") : e
}

function d(e, t) {
    let o = t ? .textContent ? .trim() ? .replace(/[\t\n\r\s]+/gm, " ");
    i("pieNotification", {
        name: e,
        ctaText: P(o)
    })
}
M();
var a, l;

function O() {
    try {
        l && (l = void 0);
        let e = a ? .querySelectorAll("#root button");
        return e ? .length && e
    } catch {
        return !1
    }
}

function q(e) {
    if (/cash back/i.test(e.innerHTML)) return e ? .textContent
}

function v(e) {
    y({
        action: "endSavingsCheck",
        comp: "pie"
    });
    let t = e.savings && typeof e.savings == "number" ? +e.savings : null,
        o = typeof l == "number" && Date.now() - l;
    u("track", "pieTryCouponsResult", {
        savings: t,
        cashbackRate: e ? .rewards || null,
        coupons: e ? .coupons || [],
        runTime: o,
        url: location.href
    }), k("pie", "coupons", () => R.set(["warnAboutStandDown"], !0))
}

function B(e) {
    return [...e].find(o => /Apply Coupons/i.test(o.innerHTML))
}

function N() {
    r(O, e => {
        let t = B(e);
        if (t) {
            d("coupon", t);
            let o = t.textContent || void 0;
            t.addEventListener("click", () => {
                l = Date.now(), t && i("pieTryCoupons", {
                    url: location.href,
                    ctaText: o
                }), y({
                    action: "initSavingsCheck",
                    comp: "pie"
                }), S(E, 4e4, 500, v)
            })
        }
    })
}
async function b() {
    S(E, 4e4, 500, v);
    try {
        r(() => {
            let t = [...document.querySelectorAll('div[style^="all: initial !important;"]')].find(o => {
                let n = o.openOrClosedShadowRoot || chrome.dom.openOrClosedShadowRoot(o);
                return n && n ? .querySelector('style[data-emotion="pie"]')
            });
            if (t) return t.openOrClosedShadowRoot || chrome.dom.openOrClosedShadowRoot(t)
        }, async e => {
            a = e, N()
        })
    } catch {}
}
var F = [() => {
    try {
        if (a) {
            let e = [],
                t = /Continue to Checkout/i;
            if (a.innerHTML.match(t)) {
                let n = [...a.querySelectorAll("span")].find(h => h ? .textContent ? .includes("Cash Back")),
                    s;
                n && (s = q(n));
                let m = a ? .querySelector('svg[fill="currentColor"]') ? .nextElementSibling,
                    f = m ? .textContent,
                    c = m ? .parentElement ? .nextElementSibling ? .textContent;
                return f && e.push(f), {
                    foundModal: !0,
                    savings: c ? g(c) : void 0,
                    rewards: s,
                    coupons: e
                }
            }
        }
    } catch {}
    return !1
}];

function E() {
    let e = !1;
    return F.forEach(t => {
        let o = t();
        if (o && o.foundModal) {
            e = o;
            return
        }
    }), e
}
var p, w, C;

function H() {
    try {
        let e = w ? .querySelectorAll("#root button");
        return e ? .length && e
    } catch {
        return !1
    }
}

function _(e) {
    return [...e].find(o => /rewards/i.test(o.innerHTML))
}

function D() {
    r(H, e => {
        let t = _(e);
        if (t) {
            let o = t.textContent || void 0,
                s = w ? .querySelector("#root svg #Vector") ? .parentElement ? .parentElement,
                c = s ? .parentElement ? .nextElementSibling ? .querySelector("div"),
                h = c ? .nextElementSibling,
                A = c ? .textContent || void 0,
                T = h ? .textContent || void 0;
            i("pieNotification", {
                name: "placement",
                ctaText: o,
                header: A,
                bodyText: T
            }), t.addEventListener("click", () => {
                if (t) {
                    let L = s ? .nextElementSibling ? .textContent || void 0;
                    i("pieActivate", {
                        name: "placement",
                        ctaText: o,
                        cashbackRate: L
                    })
                }
            })
        }
    })
}
async function W() {
    r(() => {
        let t = [...document.querySelectorAll('div[style^="all: initial !important;"]')].find(o => {
            let n = o.openOrClosedShadowRoot || chrome.dom.openOrClosedShadowRoot(o);
            return n && n ? .querySelector('style[data-emotion="pie"]')
        });
        if (t) return t.openOrClosedShadowRoot || chrome.dom.openOrClosedShadowRoot(t)
    }, async e => {
        w = e, D()
    })
}
async function U() {
    if (C) {
        let e = [...C.querySelectorAll("p")].find(t => {
            if (typeof t.textContent == "string") return /rewards/i.test(t.textContent)
        });
        e && d("adUnblocked", e)
    }
}
async function V() {
    r(() => {
        let t = [...document.querySelectorAll("div")].find(o => {
            let n = o.openOrClosedShadowRoot || chrome.dom.openOrClosedShadowRoot(o);
            return n && n ? .querySelector("#modal_container")
        });
        if (t) return t.openOrClosedShadowRoot || chrome.dom.openOrClosedShadowRoot(t)
    }, async e => {
        C = e, U()
    })
}
async function j() {
    let e = p ? .querySelector('#pie_adb_hover_container[style*="right: -"], #detect-ads-popup[style*="right: -"]');
    if (p) {
        let t = [...p.querySelectorAll("#pie_adb_hover_container > div, #detect-ads-popup > div")].find(o => {
            if (typeof o.textContent == "string") return /%[\n.\s]*.+saved/i.test(o.textContent)
        });
        t && !e && d("adBlocked", t)
    }
}
async function z() {
    r(() => {
        let t = [...document.querySelectorAll("div")].find(o => {
            let n = o.openOrClosedShadowRoot || chrome.dom.openOrClosedShadowRoot(o);
            return n && n ? .querySelector("#pie_adb_hover_container, #detect-ads-popup")
        });
        if (t) return t.openOrClosedShadowRoot || chrome.dom.openOrClosedShadowRoot(t)
    }, async e => {
        p = e, j()
    })
}
async function x() {
    try {
        z(), W(), document.querySelector("#pie_logo") && V()
    } catch {}
}
b();
x();