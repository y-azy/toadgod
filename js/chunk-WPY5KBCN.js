import {
    a as d
} from "./chunk-R2ZBTPA6.js";
import {
    a as f
} from "./chunk-YXHM77MI.js";
import {
    a as C
} from "./chunk-BCG2KUGW.js";
import {
    a as F
} from "./chunk-O4TFJKJQ.js";
import {
    f as P,
    h as T,
    q as O,
    u,
    v as N
} from "./chunk-45ZHS42G.js";
import {
    I as v,
    J as x,
    b as H,
    i as B,
    l as A,
    p as ut,
    q as D
} from "./chunk-O2RVWQGL.js";
import {
    e as w
} from "./chunk-3GYLW4KZ.js";
async function b(t, e, o, n) {
    let r = Date.now(),
        a = 0,
        i = t();
    for (; !i && a < e;) await lt(o), i = t(), a = Date.now() - r;
    i && n(i)
}

function lt(t) {
    return new Promise(e => {
        setTimeout(e, t)
    })
}
ut();
x();
x();
var g;

function dt() {
    let t = g.querySelector('[data-cy="activation-component"]'),
        e = g.querySelector('[data-cy="activation-heading"]');
    if (t) {
        let o = {
            subtree: !0,
            childList: !0
        };
        new MutationObserver(i => {
            i.forEach(l => {
                l ? .addedNodes ? .length > 0 && l ? .addedNodes ? .forEach(p => {
                    p instanceof HTMLElement && p ? .innerText.includes("coupons") && G()
                })
            })
        }).observe(g, o);
        let r = t.querySelector('button[data-cy="button"]'),
            a = r.textContent;
        u("track", "citiShopNotification", {
            name: "cashback",
            url: location.href,
            ctaText: a
        }), r.addEventListener("click", () => {
            let i = e && e.innerText;
            h("citiShop", "cashback"), u("track", "citiShopActivate", {
                url: location.href,
                cashbackRate: i
            })
        })
    }
}

function ft(t) {
    f({
        action: "endSavingsCheck",
        comp: "citiShop"
    }), u("track", "citiShopTryCouponsResult", {
        notificationText: t ? .notificationText,
        url: location.href
    }), h("citiShop", "coupons", () => v.set(["warnAboutStandDown"], !0))
}

function ht() {
    let t, e = g.querySelector('[data-cy="non-working-coupons-text"]'),
        o = [...g.querySelectorAll("h1")].find(r => r.textContent.match(/applied/i)),
        n = g.querySelector('[data-cy="cashback-activated-text"]');
    if (n && (t = n ? .parentElement ? .textContent), e && !n && (t = e ? .textContent), o && !n && (t = o.textContent), t) return {
        notificationText: t
    }
}

function G() {
    let t = g.querySelector('[data-cy="coupon-header-text"]');
    if (t) {
        let e = t.querySelector("button"),
            o = e.textContent;
        u("track", "citiShopNotification", {
            name: "coupons",
            url: location.href,
            ctaText: o
        }), e.addEventListener("click", () => {
            f({
                action: "initSavingsCheck",
                comp: "citiShop"
            }), u("track", "citiShopTryCoupons", {
                url: location.href,
                ctaText: o
            }), b(ht, 4e4, 500, ft)
        })
    }
}
async function pt() {
    d(() => {
        let e = [...document.querySelectorAll("x-citi-chrome-extension")].find(o => {
            let n = o.openOrClosedShadowRoot || chrome.dom.openOrClosedShadowRoot(o);
            return n && n ? .querySelector('[aria-label="Citi Shop Extension"]')
        });
        if (e) return e.openOrClosedShadowRoot || chrome.dom.openOrClosedShadowRoot(e)
    }, async t => {
        g = t, G(), dt()
    })
}
async function W() {
    try {
        pt()
    } catch {}
}
var k = w(D());
var y, I = !1;
async function mt() {
    return d(Y, t => _())
}

function _() {
    let t = j();
    if (t) return U(t), yt(t), t
}

function yt(t) {
    t.addEventListener("click", () => {
        h("coupert", "cashback"), u("track", "coupertActivate", {
            url: location.href,
            cashbackRate: R()
        })
    })
}

function R() {
    if (!y && (q(), !y)) return null;
    let t = [...y.querySelectorAll('div[style*="color: initial;"] div div > div span')].find(o => !!o.textContent.match(/Cash Back(?! Terms)/));
    if (t) {
        let o = t.previousElementSibling ? t.previousElementSibling.innerText : t.nextElementSibling ? t.nextElementSibling.innerText : void 0;
        return o || null
    }
    let e = [...y.querySelectorAll('div[style*="color: initial;"] div div > div > div')].find(o => o.textContent.includes("Rewards Found!"));
    if (e) {
        let o = e.nextElementSibling && e.nextElementSibling.innerText;
        return o || null
    }
}

function U(t) {
    if (I) return;
    I = !0;
    let e = R();
    u("track", "coupertNotification", {
        name: "cashback",
        url: location.href,
        ctaText: t.innerText,
        cashbackRate: e
    })
}
async function $() {
    d(Y, async t => {
        let e = !1,
            o = {
                childList: !0
            };
        new MutationObserver(i => {
            k.default.forEach(i, async l => {
                k.default.get(l, "type") === "childList" && e === !1 && (e = !0, await mt())
            })
        }).observe(t, o);
        let r = _(),
            a = await f({
                action: "getCompState",
                comp: "coupert"
            });
        r && !a && U(r)
    })
}

function Y() {
    try {
        let t = q();
        return !!y ? .querySelector("div").innerText.match(/^(?!.*coupons?).*rewards.*$/is) ? t : !1
    } catch {
        return !1
    }
}

function Ct() {
    if (!!y.querySelector("div").innerText.match(/Continue to Checkout/)) return y.querySelector('div[style*="color: initial;"]')
}
async function St(t) {
    f({
        action: "endSavingsCheck",
        comp: "coupert"
    });
    let e = [...t.querySelectorAll("div")].find(r => r.textContent.match(/Congratulations!|You saved/)),
        o = 0,
        n = [];
    if (e) {
        let r = [...t.querySelectorAll("div p")].find(l => l.textContent.includes("Congratulations!")),
            a = [...t.querySelectorAll("div div > div > div > div > div")].find(l => l.textContent.includes("You saved")),
            i = r ? r.previousElementSibling : a;
        if (i) {
            let p = [...i.querySelectorAll("span, p")].find(L => L.textContent === "With the code:") ? .nextElementSibling ? .textContent,
                m;
            a ? m = [...a.querySelectorAll("div > div")].find(st => st.innerText.includes("You saved")).nextElementSibling.textContent : m = i.previousElementSibling.textContent, m && (o = C(m)), p && n.push(p)
        }
    }
    u("track", "coupertTryCouponsResult", {
        savings: o,
        coupons: n,
        url: location.href
    }), R(), h("coupert", "coupons")
}
async function vt() {
    return d(z, t => V())
}

function j() {
    return y.querySelector("[class*=cpui-btn-primary--]")
}

function V() {
    let t = j();
    if (t) return gt(t), t
}

function gt(t) {
    let e = t.innerText;
    t.addEventListener("click", () => {
        f({
            action: "initSavingsCheck",
            comp: "coupert"
        }), u("track", "coupertTryCoupons", {
            ctaText: e,
            url: location.href
        }), b(Ct, 12e4, 500, St)
    })
}
async function K() {
    d(z, t => {
        let e = !1,
            o = {
                childList: !0
            };
        new MutationObserver(a => {
            k.default.forEach(a, async i => {
                k.default.get(i, "type") === "childList" && e === !1 && (e = !0, await vt())
            })
        }).observe(t, o);
        let r = V();
        if (r) {
            let a = y.querySelector("[class^=cbButton]"),
                i = r.innerText,
                l = a ? .innerText;
            u("track", "coupertNotification", {
                name: "coupon",
                ctaText: i,
                url: location.href,
                secondaryCtaText: l
            })
        }
    })
}

function z() {
    try {
        let t = q();
        return !!t ? .querySelector("div").innerText.match(/(coupons?|savings)/i) ? t : !1
    } catch {
        return !1
    }
}

function q() {
    let e = [...document.querySelectorAll('div[style^="display: block"]')].find(o => {
        let n = o.openOrClosedShadowRoot || chrome.dom.openOrClosedShadowRoot(o);
        if (n && n.querySelector('link[href="chrome-extension://mfidniedemcgceagapgdekdbmanojomk/css/content.css"]')) return n
    });
    if (e) {
        let o = e.openOrClosedShadowRoot || chrome.dom.openOrClosedShadowRoot(e);
        return y = o, o
    }
}
var M = w(F());
async function J() {
    let t = await f({
            action: "getHoneyState",
            comp: "honey"
        }),
        e = await f({
            action: "getCompState",
            comp: "piggy"
        });
    !t && !e && d(bt, o => {
        let [n, r] = xt(o);
        u("track", "ebatesNotif", {
            url: location.href,
            cashbackRate: n,
            previousCashbackRate: r
        });
        let a = wt(o);
        a && a.addEventListener("click", () => {
            u("track", "ebatesActivate", {
                url: location.href,
                cashbackRate: n,
                previousCashbackRate: r
            }), h("ebates", "cashback")
        });
        let i = o.querySelector(".rr-button-close, [title^=Dismiss], .rr-tertiary");
        i && i.addEventListener("click", () => {
            u("track", "ebatesDismiss", {
                url: location.href,
                cashbackRate: n,
                previousCashbackRate: r
            })
        })
    })
}
async function Q() {
    await f({
        action: "getHoneyState",
        comp: "honey"
    }) || d(kt, e => {
        u("track", "ebatesCouponNotif", {
            url: location.href
        });
        let o = [...e.querySelectorAll(".r-button")].find(r => r.textContent.includes("Apply Coupons"));
        o && o.addEventListener("click", () => {
            u("track", "ebatesTryCoupons", {
                url: location.href
            })
        });
        let n = e.querySelector(".rr-button-close, [aria-label^=Dismiss]");
        n && n.addEventListener("click", () => {
            u("track", "ebatesCouponDismiss", {
                url: location.href
            })
        })
    })
}

function bt() {
    try {
        return X().shadowRoot.querySelector(".ebates-notification")
    } catch {
        return !1
    }
}

function kt() {
    try {
        let t = X().shadowRoot;
        return [...t.querySelectorAll(".r-button")].find(o => o.textContent.includes("Apply Coupons")) ? t.querySelector("aside[data-tid=coupons-magic-notification]") : !1
    } catch {
        return !1
    }
}

function wt(t) {
    let e = t.querySelector(".rr-button-primary, button.r-button");
    return e && /activate/i.test(e.innerText) ? e : t.querySelector(".ebates-notification-button.ebates-notification-button-activate") || t.querySelector("ebates-notification-button.ebates-notification-button-login")
}

function xt(t) {
    try {
        let e = t.querySelector(".ebates-notification .ebates-notification-button-activate") || t.querySelector(".rr-button-primary, button.r-button"),
            o = t.querySelector(".rr-text-secondary"),
            n = (0, M.default)(e).text(),
            r = (0, M.default)(o).text().trim() || void 0;
        return [n, r]
    } catch {
        return !1
    }
}

function X() {
    return [...document.querySelectorAll("html > *")].find(t => {
        if (t.shadowRoot && t.shadowRoot.querySelector(".ebates-notification, aside[data-tid=coupons-magic-notification]")) return !0
    })
}
var S = w(F()),
    s = w(D());
x();
var c;

function tt() {
    try {
        let t = c ? .querySelectorAll("#honey button");
        return t ? .length && t
    } catch {
        return !1
    }
}

function E() {
    try {
        let t = c ? .querySelector("#honey-shadow"),
            e;
        if (t) {
            let o = (0, S.default)(t).find("[id*=HoneyGoldAmount]").text() || (0, S.default)(t).find("[class*=DescriptiveGold] span[class*=textBold]").text() || (0, S.default)(t).find("[class^=ctaColumn] [class^=container] [class^=title]").text() || (0, S.default)(t).find('[class*=goldText] span:contains("Gold")').text() || (0, S.default)(t).find("[class^=valueContainer] [class*=price]").text() || (0, S.default)(t).find("[class^=subTextAndTerms] [class*=subText]").text(),
                n = o && o.match(/(\d+[,\.]?\d*% to \d+[,\.]?\d*(?:%|\sHoney Gold|\sGold|\scash back))/);
            e = n ? n[1] : null
        }
        return e
    } catch {
        return null
    }
}

function Tt() {
    return new Promise((t, e) => {
        d(tt, o => {
            let n = s.default.last(o);
            t(n)
        })
    })
}

function et() {
    let t = c ? .querySelector("#honey-shadow"),
        e;
    return t && (e = (0, S.default)(t).find('[class*=bodyContentGreen] p:contains("Cart Total")').text(), e = C(e)), e
}

function ot() {
    let t = c ? .querySelector("#honey-shadow"),
        e;
    return t && (e = (0, S.default)(t).find("div:contains('re-activate Honey')").text()), !!e
}

function Z() {
    h("honey", "cashback")
}

function Rt(t) {
    let e = t ? .innerText;
    u("track", "activateHoney", {
        url: location.href,
        ctaText: e,
        cashbackRate: E(),
        reactivation: ot()
    })
}

function qt() {
    d(tt, t => {
        let e = [...t].find(r => r.innerText === "Apply Coupons"),
            o = Mt(t),
            n = Et(t);
        if (e) {
            let r = et(),
                a = e.textContent,
                i = E();
            e.addEventListener("click", () => {
                o && u("track", "honeyTryCoupons", {
                    url: location.href,
                    cartTotal: r,
                    ctaText: a,
                    cashbackRate: i
                }), f({
                    action: "initSavingsCheck",
                    comp: "honey"
                }), b(it, 4e4, 500, rt)
            })
        }
        o && o.addEventListener("click", Z), n && n.addEventListener("click", () => {
            Rt(n), Z()
        })
    })
}
async function nt() {
    try {
        b(it, 4e4, 500, rt), d(() => {
            let e = [...document.querySelectorAll("#honeyContainer, div[data-reactroot]")].find(o => {
                let n = o.openOrClosedShadowRoot || chrome.dom.openOrClosedShadowRoot(o);
                return n && n ? .getElementById("honey-shadow")
            });
            if (e) return e.openOrClosedShadowRoot || chrome.dom.openOrClosedShadowRoot(e)
        }, async t => {
            c = t, qt();
            let e = await Tt(),
                o = e ? e.textContent : null,
                n = et(),
                r = s.default.debounce(l => {
                    u("track", l ? "showHoney" : "hideHoney", {
                        url: location.href,
                        cartTotal: n,
                        ctaText: o,
                        cashbackRate: E(),
                        reactivation: ot()
                    })
                }, 1e3),
                a = new MutationObserver(l => {
                    s.default.forEach(l, p => {
                        let m = s.default.get(p, "target.style.visibility");
                        m === "hidden" ? r(!1) : (m === "initial" || m === "visible") && r(!0)
                    })
                }),
                i = c ? .querySelector("#honey-shadow");
            if (i) {
                a.observe(i, {
                    attributes: !0,
                    attributeFilter: ["style"]
                });
                let l = i ? .style ? .visibility;
                l === "hidden" ? r(!1) : (l === "initial" || l === "visible") && r(!0)
            }
        })
    } catch {}
}

function rt(t) {
    f({
        action: "endSavingsCheck",
        comp: "honey"
    });
    let e = s.default.get(t, "savings") && typeof t.savings == "number" ? +t.savings : null,
        o = s.default.get(t, "originalPrice") && typeof t.originalPrice == "number" ? +t.originalPrice : null,
        n = s.default.get(t, "withHoneyPrice") && typeof t.withHoneyPrice == "number" ? +t.withHoneyPrice : null;
    u("track", "honeyTryCouponsResult", {
        savings: e,
        rewardsSavings: s.default.get(t, "rewards", null),
        originPrice: o,
        finalPrice: n,
        codeApplied: s.default.get(t, "workingCode", null),
        url: location.href
    }), h("honey", "coupons", () => v.set(["warnAboutStandDown"], !0))
}

function Mt(t) {
    return s.default.find(t, e => /coupon(?:s)?|code(?:s)?/i.test(e.innerHTML)) || s.default.find(c ? .querySelector("#honey") ? .querySelectorAll("span"), e => e.innerHTML === "Coupon codes")
}

function Et(t) {
    return s.default.find(t, e => /claim honey gold|claim rewards|activate cash back|activate rewards/i.test(e.innerHTML))
}
var Lt = [() => {
    try {
        let t = /You saved|you’re saving/i;
        if (c ? .innerHTML.match(t)) {
            let o = s.default.get(c ? .querySelector("[class*=savingsPrice], [class^=savingsText]"), "textContent"),
                n = o ? C(o) : null,
                r = s.default.get(c ? .querySelector("[id*=OriginalPrice], [class^=originalTotal]"), "textContent"),
                a = r ? C(r) : null,
                i = s.default.get(c ? .querySelector("[id*=WithHoneyPrice], [class^=price].price5"), "textContent"),
                l = i ? C(i) : null,
                p = s.default.get(c ? .querySelector("[id*=HoneyGoldAmount], [class^=valueContainer] > [class^=value]"), "textContent"),
                m = s.default.get(c ? .querySelector("[class*=workingCode], [class*=bestCode-]"), "textContent");
            return {
                foundModal: !0,
                savings: n,
                rewards: p,
                originalPrice: a,
                withHoneyPrice: l,
                workingCode: m
            }
        }
    } catch {}
    return !1
}, () => {
    try {
        let t = /Honey Gold.+activated/i;
        if (c ? .innerHTML.match(t)) return {
            foundModal: !0,
            rewards: s.default.get(c ? .querySelector("[class*=DescriptiveGold] span[class*=textBold]"), "textContent")
        }
    } catch {}
    return !1
}, () => {
    try {
        let t = /forget your free sample/i;
        if (c ? .innerHTML.match(t)) {
            let o = s.default.get(c ? .querySelector("[id*=FreeItemReceipt][id*=titleContent]"), "textContent"),
                n = o ? C(o) : null,
                r = s.default.get(c ? .querySelector("[id*=honeyGoldContainer] [class*=bold]"), "textContent"),
                a = c ? .querySelectorAll("[class*=couponsContainer] [class*=couponPointer] [class*=couponTitle]"),
                i = s.default.map(a, l => l.textContent);
            return {
                foundModal: !0,
                savings: n,
                rewards: r,
                workingCode: i
            }
        }
    } catch {}
    return !1
}, () => {
    try {
        let t = /have the best/i;
        if (c ? .innerHTML.match(t)) {
            let o = c ? .querySelector("[class^=price]") ? .textContent;
            return {
                foundModal: !0,
                withHoneyPrice: o ? C(o) : void 0
            }
        }
    } catch {}
    return !1
}, () => {
    try {
        let t = /Get.+Gold back/;
        if (c ? .innerHTML.match(t)) return {
            foundModal: !0,
            rewards: s.default.get(c ? .querySelector("[id*=bonusCashContentContainer] [id*=span-bonusCashContent]"), "textContent")
        }
    } catch {}
    return !1
}, () => {
    try {
        let t = /\d+% back|activated/;
        if (c ? .innerHTML.match(t)) return {
            foundModal: !0,
            rewards: s.default.get(c ? .querySelector("[id*=bonusCashContentContainer] [id*=span-bonusCashContent]"), "textContent")
        }
    } catch {}
    return !1
}, () => {
    try {
        let t = /you’re earning cash back/i;
        if (c ? .innerHTML.match(t)) return {
            foundModal: !0,
            rewards: s.default.get(c ? .querySelector("[class^=valueContainer] [class*=price]"), "textContent")
        }
    } catch {}
    return !1
}];

function it() {
    let t = !1;
    return s.default.forEach(Lt, e => {
        let o = e();
        if (s.default.has(o, "foundModal")) {
            t = o;
            return
        }
    }), t
}

function Ht() {
    function t() {
        d(() => document.querySelector('form[action*="i.clean.gg"]'), e => {
            u("track", "extensionError", {
                type: "possible_error",
                source: "clean"
            })
        })
    }
    document.readyState !== "loading" ? t() : document.addEventListener("DOMContentLoaded", t)
}
async function at() {
    let t = P();
    return t = T("ext_separate_domain_platform") ? v.get("platformDomain") : await N(t) || t, t
}
var ye = () => {
    nt(), J(), Q(), W(), $(), K(), Ht()
};
var ct = (t, e) => O("hasActivatedCompetitor", t);
x();
async function h(t, e, o) {
    let n = await at(),
        r = `${t}WarningNotif-${n}`;
    chrome.storage.local.get(r, a => {
        let i = a[r];
        (e === "cashback" && v.get(["cashback", "user", "activated"]) || e === "coupons") && (!i || A(H(B(i), {
            days: 1
        }), new Date)) && T("notif_reactivation_base") && (o && o(), ct({
            domain: n,
            comp: t
        }))
    })
}
export {
    b as a, h as b, ye as c
};