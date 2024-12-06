import {
    G as Yt,
    I as s,
    J as x,
    h as xe,
    j as Ce,
    p as Jt,
    q as O,
    r as Re,
    y as Xt
} from "./chunk-O2RVWQGL.js";
import {
    a as y,
    b as Ie,
    c as re
} from "./chunk-ZZJM66LV.js";
import {
    m as qe,
    n as te
} from "./chunk-SOWOQI5E.js";
import {
    f as De,
    h as Ae,
    l as Me,
    t as Te
} from "./chunk-JAUVA5AU.js";
import {
    c as v,
    d as Qt,
    e as _
} from "./chunk-3GYLW4KZ.js";
var Le = v(G => {
    "use strict";
    Object.defineProperty(G, "__esModule", {
        value: !0
    });
    G.getSiteData = void 0;

    function Zt(e) {
        var r, t, n, i, o, c = {
                Magento: {
                    applySelectors: "#discount-coupon-form button:contains(Apply), .button.applyCoupon",
                    inputSelectors: "#coupon_code, .discount-form input.input-box",
                    cartIdentifier: "\\/(onestep)*checkout",
                    confirmationIdentifiers: "\\/checkout/onepage/success/"
                },
                WooCommerce: {
                    applySelectors: '[value="Apply coupon"], [value="Apply Promocode"], [value="Apply"], button.coupon-submit-button, [name="apply_coupon"], #swell_coupon_submit, [id*=coupon_submit]',
                    inputSelectors: '#coupon_code, #coupontext, .checkout_promo_code_input, [placeholder="Coupon Code"], [name="coupon_code"]',
                    checkoutIdentifier: "\\/(checkout|check-out|secure-checkout|onestepcheckout)+",
                    cartIdentifier: "\\/(cart|shopping-cart|basket)+",
                    confirmationIdentifiers: "/order-received"
                },
                Squarespace: {
                    applySelectors: '[data-test="apply-gift-or-promo-code-button"]',
                    inputSelectors: '[data-test="gift-and-promo-code-input"]',
                    checkoutIdentifier: "\\/checkout",
                    confirmationIdentifiers: "\\/order-confirmed"
                },
                BigCommerce: {
                    applySelectors: "#couponSubmit, .coupon-code .button, #applyRedeemableButton, .cart-form .btn",
                    inputSelectors: "#couponCode, #couponcode, [name=redeemableCode]",
                    checkoutIdentifier: "\\/checkout",
                    confirmationIdentifiers: "\\/checkout\\/order-confirmation"
                }
            },
            u = {
                cartPage: I((r = c ? . [e]) === null || r === void 0 ? void 0 : r.cartIdentifier),
                checkoutPage: I((t = c ? . [e]) === null || t === void 0 ? void 0 : t.checkoutIdentifier),
                confirmationPage: {
                    identifiers: {
                        and: [{
                            type: "url",
                            value: (n = c ? . [e]) === null || n === void 0 ? void 0 : n.confirmationIdentifiers
                        }]
                    },
                    data: {}
                },
                roo: {
                    script: {
                        promoApplyAction: ((i = c ? . [e]) === null || i === void 0 ? void 0 : i.applySelectors) || "",
                        promoInputSelector: ((o = c ? . [e]) === null || o === void 0 ? void 0 : o.inputSelectors) || "",
                        cartTotalSelector: ""
                    }
                }
            };
        return u
    }

    function I(e) {
        if (e) return {
            identifiers: {
                or: [{
                    type: "url",
                    value: e
                }]
            }
        }
    }

    function N(e) {
        return e === void 0 && (e = "\\/confirmation"), {
            identifiers: {
                or: [{
                    type: "url",
                    value: e
                }]
            }
        }
    }

    function Kt(e, r) {
        var t, n = {
                Shopify: {
                    checkoutPage: {
                        data: {
                            coupons: [{
                                parsers: [],
                                selector: ".applied-reduction-code__information",
                                type: "text"
                            }, {
                                parsers: [{
                                    type: "regex",
                                    regex: `([^ 
]+)`
                                }],
                                selector: ".tags-list .tag",
                                type: "text"
                            }, {
                                parsers: [],
                                selector: 'ul[aria-label="Gift card or discount code"], ul[aria-label="Discount code or gift card"]',
                                type: "text"
                            }],
                            order_total: [{
                                parsers: [{
                                    type: "price"
                                }],
                                selector: ".payment-due__price",
                                type: "text"
                            }]
                        },
                        identifiers: {
                            and: [{
                                type: "element",
                                value: '#checkout_reduction_code, #checkout_discount_code, input[name=reductions], #discount_code, [class*="_DiscountWrapper"]'
                            }, {
                                type: "element",
                                value: '.order-summary__section--discount, #discount.order-summary__section, form input[name=reductions], .order_summary, [class*="_DiscountWrapper"]'
                            }, {
                                type: "element",
                                value: '.payment-due__price, abbr ~ strong, #totalLabel, [aria-labelledby="order-total"]'
                            }]
                        },
                        triggers: [{
                            selector: ".applied-reduction-code__information, .tags-list .tag",
                            trigger: "exists",
                            action: "run_data",
                            repeat: "uniq"
                        }]
                    },
                    confirmationPage: {
                        identifiers: {
                            and: [{
                                type: "url",
                                value: "\\.[a-z]{2,9}\\/\\d{4,11}\\/checkouts\\/[0-9a-f]{32}\\/thank_you"
                            }]
                        },
                        data: {},
                        triggers: [{
                            trigger: "url",
                            action: "run_all",
                            delay: "100"
                        }]
                    }
                },
                FastSpring: {
                    checkoutPage: I("\\/order\\/"),
                    confirmationPage: N("\\/confirmation\\/")
                },
                FoxyCart: {
                    checkoutPage: I("\\/checkout"),
                    confirmationPage: N()
                },
                PoweredByGps: {
                    checkoutPage: I("\\/Checkout\\/"),
                    confirmationPage: {
                        identifiers: {
                            or: [{
                                type: "url",
                                value: "\\/itinerary-receipt"
                            }, {
                                type: "url",
                                value: "\\/Confirmation-Flight"
                            }, {
                                type: "url",
                                value: "HotelBookingConfirmation"
                            }, {
                                type: "url",
                                value: "\\/MultiItemBookingConfirmation"
                            }, {
                                type: "url",
                                value: "\\/ConfirmationSuccess"
                            }, {
                                type: "url",
                                value: "\\/FlightBookingConfirmation"
                            }]
                        }
                    }
                },
                Stripe: {
                    checkoutPage: I("\\/c\\pay\\/"),
                    confirmationPage: N()
                },
                Teachable: {
                    checkoutPage: I("\\/checkout\\/"),
                    confirmationPage: N()
                },
                Chargify: {
                    checkoutPage: I("\\/subscribe\\/"),
                    confirmationPage: N()
                }
            },
            i = new Set(["Magento", "WooCommerce", "BigCommerce", "Squarespace"]);
        if (i.has(e)) {
            var o = Zt(e);
            n[e] = o
        }
        return (t = n ? . [e]) === null || t === void 0 ? void 0 : t[r]
    }
    G.getSiteData = Kt
});
var Fe = v(D => {
    "use strict";
    var Oe = D && D.__importDefault || function (e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
    Object.defineProperty(D, "__esModule", {
        value: !0
    });
    D.getSeparateCheckoutDomain = D.getShopifyDomain = void 0;
    var f = Oe(O()),
        b = Oe(qe());

    function er(e) {
        var r, t = (r = e[0]) === null || r === void 0 ? void 0 : r.innerHTML.trim(),
            n = t.match(/allowlistedUrls = (\[.+\]);/)[1],
            i = f.default.indexOf(n, "[") + 1,
            o = f.default.indexOf(n, "]"),
            c = n.slice(i, o).replaceAll('"', "").split(",");
        return c
    }

    function tr(e) {
        try {
            var r = void 0,
                t = f.default.filter(document.querySelectorAll("script"), function (c) {
                    return c.innerHTML.match(/Shopify.Checkout.allowlistedUrls/)
                }),
                n = er(t),
                i = f.default.find(n, function (c) {
                    return !c.match(/shopify\.com/)
                }),
                o = i.replaceAll("\\", "");
            return o && (r = f.default.get(o.match(/https*:\/\/(.+)\/*/), "[1]")), r || e
        } catch {
            return e
        }
    }

    function rr(e) {
        var r, t = e.domain,
            n = document.URL,
            i = n.match(/shopify\.com\/\d+/);
        if (i && !n.match(/myshopify\.com|pay\.shopify\.com/)) return i[0];
        var o = window.location.hostname.match(/pay\.shopify\.com/) || window.location.hostname.match(/^shop\.app$/);
        if (o) {
            if (document.querySelector("[name=configuration]")) {
                var c = JSON.parse(document.querySelector("[name=configuration]").getAttribute("content"));
                return c.primary_domain
            } else if (document.querySelector('[aria-label="Cart"], #cart-link')) {
                var u = document.querySelector('[aria-label="Cart"], #cart-link').getAttribute("href"),
                    d = f.default.get(b.default.parse(u), "hostname") || f.default.get(u.match(/\b[\w-]+\.([a-z]+)/), "[0]");
                return d
            } else if (document.querySelector('header[role="banner"] a')) {
                var a = document.querySelector('header[role="banner"] a').getAttribute("href"),
                    d = f.default.get(b.default.parse(a), "hostname") || f.default.get(a.match(/\b[\w-]+\.([a-z]+)/), "[0]");
                return d
            } else if (document.querySelector('[name="serialized-post-purchase-changesets-endpoint"], [name="serialized-login-url"]')) {
                var l = document.querySelector('[name="serialized-post-purchase-changesets-endpoint"], [name="serialized-login-url"]').getAttribute("content"),
                    d = f.default.get(b.default.parse(l), "hostname") || f.default.get(l.match(/\b[\w-]+\.([a-z]+)/), "[0]");
                return d
            } else if (document.querySelector('[name="serialized-shop-pay-config"]')) {
                var c = JSON.parse(document.querySelector('[name="serialized-shop-pay-config"]').getAttribute("content")),
                    u = f.default.get(c, "web_url"),
                    d = f.default.get(b.default.parse(u), "hostname") || f.default.get(u.match(/\b[\w-]+\.([a-z]+)/), "[0]");
                return d
            }
        }
        if (document.querySelector("#checkout_reduction_code") && document.querySelector(".payment-due__price") && document.querySelector(".order-summary__section--discount") && !n.match(/myshopify\.com/) || document.querySelector('[name="reductions"]') && document.querySelector("abbr ~ strong") && n.match(/\/checkouts\/(c|co|cn|do)\/\w+/) && !n.match(/myshopify\.com/)) return t;
        var p = n.match(/\/a\/secure\/checkout\//);
        if (p) return t;
        var k = n.match(/\/apps\/secure-checkout\/\w+/);
        if (k) return t;
        var q = !!(n.match(/r\/checkout\?myshopify|myshopify\.com/) || document.querySelector(".recharge_checkout_option, #recharge_payment_method_nonce"));
        if (q)
            if (t === "rechargeapps.com") {
                if (n.match(/r\/checkout/)) {
                    var T = Array.from(document.querySelectorAll("a")).reduce(function (ke, Pe) {
                        return Pe.textContent.match(/Return to cart/i) && (ke = Pe.href), ke
                    }, "");
                    return b.default.getDomain(T)
                }
                var z = document.querySelector(".footer__copyright a");
                if (z) {
                    var T = z ? .href;
                    return b.default.getDomain(T)
                }
            } else if (t.match(/myshopify\.com/)) {
            var L = void 0,
                B = document.querySelector(".breadcrumb__item a, .breadcrumb__link");
            return B ? L = f.default.get(B ? .href.match(/https*:\/\/(.+)\//), "[1]") : L = tr(t), L || t
        } else return t;
        var Wt = !!document.querySelector(".shopemoji") && n.match(/\/checkouts\/\w+/);
        if (Wt) return t;
        var $t = n.match(/shipearlyapp\.com/);
        if ($t) {
            var L = (r = document.querySelector(".heading-color")) === null || r === void 0 ? void 0 : r.href;
            return f.default.get(b.default.parse(L), "hostname") || f.default.get(L.match(/\b[\w-]+\.([a-z]+)/), "[0]")
        }
        var we = n.match(/chronotrack\.com\/r\/\d+/);
        if (we) return we[0];
        var be = document.querySelector("script.analytics");
        if (be) {
            var Se = be.innerHTML.match(/:\{"shopId":(\d+)\}/);
            if (Se) return "shopify.com/".concat(Se[1])
        }
    }
    D.getShopifyDomain = rr;

    function or(e) {
        var r, t, n, i, o, c;
        try {
            var u = document.URL,
                d = void 0,
                a = void 0;
            if (u.match(/\.fastspring\.com/)) {
                d = "FastSpring";
                var l = (r = document.querySelector(".store-order-action-more .store-action-command")) === null || r === void 0 ? void 0 : r.href;
                a = f.default.get(b.default.parse(l), "hostname") || f.default.get(l.match(/\b[\w-]+\.([a-z]+)/), "[0]")
            } else if (u.match(/\.foxycart\.com/)) {
                d = "FoxyCart";
                var p = (t = document.querySelector(".fc-cancel-continue-shopping a")) === null || t === void 0 ? void 0 : t.href;
                a = f.default.get(b.default.parse(p), "hostname") || f.default.get(p.match(/\b[\w-]+\.([a-z]+)/), "[0]")
            } else if (u.match(/poweredbygps\.com\/Checkout/)) {
                d = "PoweredByGps";
                var k = (n = document.querySelector(".logo-div a.header-logo")) === null || n === void 0 ? void 0 : n.href;
                a = f.default.get(b.default.parse(k), "hostname") || f.default.get(k.match(/\b[\w-]+\.([a-z]+)/), "[0]")
            } else if (u.match(/checkout\.stripe\.com|billing\.stripe\.com/)) {
                d = "Stripe";
                var q = (i = document.querySelector('.Header-businessLink, [data-testid="return-to-business-link"]')) === null || i === void 0 ? void 0 : i.href;
                a = f.default.get(b.default.parse(q), "hostname") || f.default.get(q.match(/\b[\w-]+\.([a-z]+)/), "[0]")
            } else if (u.match(/(sso|upgrade)\.teachable\.com/)) {
                d = "Teachable";
                var k = (o = document.querySelector(".header-logo")) === null || o === void 0 ? void 0 : o.href;
                a = f.default.get(b.default.parse(k), "hostname") || f.default.get(k.match(/\b[\w-]+\.([a-z]+)/), "[0]"), (a === void 0 || a === "undefined") && (a = window.location.hostname)
            } else if (u.match(/chargifypay\.com/)) {
                d = "Chargify";
                var T = (c = document.querySelector(".header__logo a, .disclaimer a")) === null || c === void 0 ? void 0 : c.href;
                a = f.default.get(b.default.parse(T), "hostname") || f.default.get(T.match(/\b[\w-]+\.([a-z]+)/), "[0]")
            }
            return {
                separatePlatform: d,
                separatePlatformDomain: a
            }
        } catch {
            return {
                separatePlatform: void 0,
                separatePlatformDomain: void 0
            }
        }
    }
    D.getSeparateCheckoutDomain = or
});
var Ue = v(W => {
    "use strict";
    Object.defineProperty(W, "__esModule", {
        value: !0
    });
    W.checkWooCommerce = void 0;

    function nr() {
        if ((document.URL.includes("/checkout") || document.URL.includes("/check-out") || document.URL.includes("/secure-checkout") || document.URL.includes("/cart") || document.URL.includes("/basket") || document.URL.includes("/shopping-cart") || document.URL.includes("/onestepcheckout") || document.URL.includes("/products/")) && document.querySelector("[class*=woocommerce]") && (document.querySelector('[placeholder*="coupon" i]') || document.querySelector("#coupon_code, #cfw-promo-code") || document.querySelector("[class*=promo_code], .woocommerce-form-coupon input") || document.querySelector('[name="coupon_code"]') || document.querySelector('.woocommerce-input-wrapper [placeholder*="promo" i]') || document.querySelector('[placeholder="Enter Promo Code"]') || document.querySelector(".fkcart-preview-ui") || document.querySelector("#wfacp_coupon_code_field") || document.querySelector('[class*="wc-block-components"]') || document.querySelector("[class*=discount][class*=coupon], .c-coupon-cart .c-coupon-cart__code") || document.querySelector('[placeholder="Coupon Code"]') || document.querySelector('button[class*="add-code-button"]'))) return "WooCommerce"
    }
    W.checkWooCommerce = nr
});
var ze = v($ => {
    "use strict";
    Object.defineProperty($, "__esModule", {
        value: !0
    });
    $.checkSquarespace = void 0;

    function ar() {
        if (document.querySelector("[id*=sqs]") && document.URL.includes("/checkout") && document.querySelector("#sqs-standard-checkout")) return "Squarespace"
    }
    $.checkSquarespace = ar
});
var ne = v(oe => {
    "use strict";
    Object.defineProperty(oe, "__esModule", {
        value: !0
    });

    function ir(e) {
        return new Promise(function (r) {
            setTimeout(r, e)
        })
    }
    oe.default = ir
});
var Ne = v(C => {
    "use strict";
    var cr = C && C.__awaiter || function (e, r, t, n) {
            function i(o) {
                return o instanceof t ? o : new t(function (c) {
                    c(o)
                })
            }
            return new(t || (t = Promise))(function (o, c) {
                function u(l) {
                    try {
                        a(n.next(l))
                    } catch (p) {
                        c(p)
                    }
                }

                function d(l) {
                    try {
                        a(n.throw(l))
                    } catch (p) {
                        c(p)
                    }
                }

                function a(l) {
                    l.done ? o(l.value) : i(l.value).then(u, d)
                }
                a((n = n.apply(e, r || [])).next())
            })
        },
        ur = C && C.__generator || function (e, r) {
            var t = {
                    label: 0,
                    sent: function () {
                        if (o[0] & 1) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                },
                n, i, o, c;
            return c = {
                next: u(0),
                throw: u(1),
                return: u(2)
            }, typeof Symbol == "function" && (c[Symbol.iterator] = function () {
                return this
            }), c;

            function u(a) {
                return function (l) {
                    return d([a, l])
                }
            }

            function d(a) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; c && (c = 0, a[0] && (t = 0)), t;) try {
                    if (n = 1, i && (o = a[0] & 2 ? i.return : a[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, a[1])).done) return o;
                    switch (i = 0, o && (a = [a[0] & 2, o.value]), a[0]) {
                        case 0:
                        case 1:
                            o = a;
                            break;
                        case 4:
                            return t.label++, {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            t.label++, i = a[1], a = [0];
                            continue;
                        case 7:
                            a = t.ops.pop(), t.trys.pop();
                            continue;
                        default:
                            if (o = t.trys, !(o = o.length > 0 && o[o.length - 1]) && (a[0] === 6 || a[0] === 2)) {
                                t = 0;
                                continue
                            }
                            if (a[0] === 3 && (!o || a[1] > o[0] && a[1] < o[3])) {
                                t.label = a[1];
                                break
                            }
                            if (a[0] === 6 && t.label < o[1]) {
                                t.label = o[1], o = a;
                                break
                            }
                            if (o && t.label < o[2]) {
                                t.label = o[2], t.ops.push(a);
                                break
                            }
                            o[2] && t.ops.pop(), t.trys.pop();
                            continue
                    }
                    a = r.call(e, t)
                } catch (l) {
                    a = [6, l], i = 0
                } finally {
                    n = o = 0
                }
                if (a[0] & 5) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
        },
        sr = C && C.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(C, "__esModule", {
        value: !0
    });
    C.checkMagento = void 0;
    var dr = sr(ne());

    function lr(e) {
        var r = e.hasFeature;
        return cr(this, void 0, void 0, function () {
            var t, n, i, o, c;
            return ur(this, function (u) {
                switch (u.label) {
                    case 0:
                        if (t = "#coupon_code, .checkout-container, .discount-form .input-box, .sliding-cart-discount, #discount-code, #coupon_code_onestepcheckout, #remove-coupon, #coupon-code, .coupon-code, #discount-coupon-form", n = (document.URL.includes("/checkout") || document.URL.includes("onestepcheckout") || document.URL.includes("/expresscheckout") || document.querySelector(".sliding-cart-modal") && document.querySelector("#product-addtocart-button") || document.URL.includes("/firecheckout") || document.URL.includes("/onepage")) && (document.querySelector("#discount-coupon-form") || document.querySelector(".discount-form") || document.querySelector('[class*="opc-wrapper"]') || document.querySelector(".checkout-onepage-index") || document.querySelector("#coupon-form") || document.documentElement.outerHTML.match(/magento/i)), !n) return [3, 4];
                        if (i = document.querySelector(t), o = document.querySelector('[class*="opc-wrapper"]'), !r("magento_delay_test")) return [3, 3];
                        c = 0, u.label = 1;
                    case 1:
                        return !i && c < 30 ? [4, (0, dr.default)(100)] : [3, 3];
                    case 2:
                        return u.sent(), c += 1, i = document.querySelector(t), [3, 1];
                    case 3:
                        if (i || document.querySelector(".action.primary.checkout") || o) return [2, "Magento"];
                        u.label = 4;
                    case 4:
                        return [2]
                }
            })
        })
    }
    C.checkMagento = lr
});
var Ve = v(R => {
    "use strict";
    var fr = R && R.__awaiter || function (e, r, t, n) {
            function i(o) {
                return o instanceof t ? o : new t(function (c) {
                    c(o)
                })
            }
            return new(t || (t = Promise))(function (o, c) {
                function u(l) {
                    try {
                        a(n.next(l))
                    } catch (p) {
                        c(p)
                    }
                }

                function d(l) {
                    try {
                        a(n.throw(l))
                    } catch (p) {
                        c(p)
                    }
                }

                function a(l) {
                    l.done ? o(l.value) : i(l.value).then(u, d)
                }
                a((n = n.apply(e, r || [])).next())
            })
        },
        mr = R && R.__generator || function (e, r) {
            var t = {
                    label: 0,
                    sent: function () {
                        if (o[0] & 1) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                },
                n, i, o, c;
            return c = {
                next: u(0),
                throw: u(1),
                return: u(2)
            }, typeof Symbol == "function" && (c[Symbol.iterator] = function () {
                return this
            }), c;

            function u(a) {
                return function (l) {
                    return d([a, l])
                }
            }

            function d(a) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; c && (c = 0, a[0] && (t = 0)), t;) try {
                    if (n = 1, i && (o = a[0] & 2 ? i.return : a[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, a[1])).done) return o;
                    switch (i = 0, o && (a = [a[0] & 2, o.value]), a[0]) {
                        case 0:
                        case 1:
                            o = a;
                            break;
                        case 4:
                            return t.label++, {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            t.label++, i = a[1], a = [0];
                            continue;
                        case 7:
                            a = t.ops.pop(), t.trys.pop();
                            continue;
                        default:
                            if (o = t.trys, !(o = o.length > 0 && o[o.length - 1]) && (a[0] === 6 || a[0] === 2)) {
                                t = 0;
                                continue
                            }
                            if (a[0] === 3 && (!o || a[1] > o[0] && a[1] < o[3])) {
                                t.label = a[1];
                                break
                            }
                            if (a[0] === 6 && t.label < o[1]) {
                                t.label = o[1], o = a;
                                break
                            }
                            if (o && t.label < o[2]) {
                                t.label = o[2], t.ops.push(a);
                                break
                            }
                            o[2] && t.ops.pop(), t.trys.pop();
                            continue
                    }
                    a = r.call(e, t)
                } catch (l) {
                    a = [6, l], i = 0
                } finally {
                    n = o = 0
                }
                if (a[0] & 5) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
        },
        pr = R && R.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(R, "__esModule", {
        value: !0
    });
    R.checkBigCommerce = void 0;
    var hr = pr(ne());

    function gr(e) {
        var r = e.hasFeature,
            t = e.mobile;
        return fr(this, void 0, void 0, function () {
            var n, i, o, c, u, d;
            return mr(this, function (a) {
                switch (a.label) {
                    case 0:
                        if (n = '#couponcode, .redeemable-label, #applyRedeemableButton, .coupon-code-add, .cart-total-label a, [data-test=cart-price-code], [data-tid=discount-code-link], [data-test="redeemable-label"], meta[name="platform"][content*=bigcommerce]', i = "".concat(n, ', .coupons .mat-input-element, [class*="cart-coupon"]'), o = "".concat(n, ",  .cartDrawer.optimizedCheckout-orderSummary, #remove-coupon"), c = t ? o : i, !(document.URL.includes("/checkout") || document.URL.includes("/cart"))) return [3, 4];
                        if (!document.documentElement.outerHTML.match(/bigcommerce/i)) return [3, 4];
                        if (u = document.querySelector("".concat(c)), !(r("big_commerce_delay_test") && document.URL.includes("/checkout"))) return [3, 3];
                        d = 0, a.label = 1;
                    case 1:
                        return !u && d < 30 ? [4, (0, hr.default)(100)] : [3, 3];
                    case 2:
                        return a.sent(), d += 1, u = document.querySelector("".concat(c)), [3, 1];
                    case 3:
                        return [2, u && "BigCommerce"];
                    case 4:
                        return [2]
                }
            })
        })
    }
    R.checkBigCommerce = gr
});
var He = v(A => {
    "use strict";
    var yr = A && A.__awaiter || function (e, r, t, n) {
            function i(o) {
                return o instanceof t ? o : new t(function (c) {
                    c(o)
                })
            }
            return new(t || (t = Promise))(function (o, c) {
                function u(l) {
                    try {
                        a(n.next(l))
                    } catch (p) {
                        c(p)
                    }
                }

                function d(l) {
                    try {
                        a(n.throw(l))
                    } catch (p) {
                        c(p)
                    }
                }

                function a(l) {
                    l.done ? o(l.value) : i(l.value).then(u, d)
                }
                a((n = n.apply(e, r || [])).next())
            })
        },
        vr = A && A.__generator || function (e, r) {
            var t = {
                    label: 0,
                    sent: function () {
                        if (o[0] & 1) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                },
                n, i, o, c;
            return c = {
                next: u(0),
                throw: u(1),
                return: u(2)
            }, typeof Symbol == "function" && (c[Symbol.iterator] = function () {
                return this
            }), c;

            function u(a) {
                return function (l) {
                    return d([a, l])
                }
            }

            function d(a) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; c && (c = 0, a[0] && (t = 0)), t;) try {
                    if (n = 1, i && (o = a[0] & 2 ? i.return : a[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, a[1])).done) return o;
                    switch (i = 0, o && (a = [a[0] & 2, o.value]), a[0]) {
                        case 0:
                        case 1:
                            o = a;
                            break;
                        case 4:
                            return t.label++, {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            t.label++, i = a[1], a = [0];
                            continue;
                        case 7:
                            a = t.ops.pop(), t.trys.pop();
                            continue;
                        default:
                            if (o = t.trys, !(o = o.length > 0 && o[o.length - 1]) && (a[0] === 6 || a[0] === 2)) {
                                t = 0;
                                continue
                            }
                            if (a[0] === 3 && (!o || a[1] > o[0] && a[1] < o[3])) {
                                t.label = a[1];
                                break
                            }
                            if (a[0] === 6 && t.label < o[1]) {
                                t.label = o[1], o = a;
                                break
                            }
                            if (o && t.label < o[2]) {
                                t.label = o[2], t.ops.push(a);
                                break
                            }
                            o[2] && t.ops.pop(), t.trys.pop();
                            continue
                    }
                    a = r.call(e, t)
                } catch (l) {
                    a = [6, l], i = 0
                } finally {
                    n = o = 0
                }
                if (a[0] & 5) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
        };
    Object.defineProperty(A, "__esModule", {
        value: !0
    });
    A.getPlatform = void 0;
    var _r = Ue(),
        wr = ze(),
        br = Ne(),
        Sr = Ve();

    function kr(e) {
        var r = e.hasFeature,
            t = e.mobile,
            n = e.desktop,
            i = n === void 0 ? !t : n;
        return yr(this, void 0, void 0, function () {
            var o, c, u, d;
            return vr(this, function (a) {
                switch (a.label) {
                    case 0:
                        return (r("woo_coup_on") && i || t) && (o = (0, _r.checkWooCommerce)(), o) ? [2, o] : (r("square_coup_on") && i || t) && (c = (0, wr.checkSquarespace)(), c) ? [2, c] : r("mag_coup_on") ? [4, (0, br.checkMagento)({
                            hasFeature: r
                        })] : [3, 2];
                    case 1:
                        if (u = a.sent(), u) return [2, u];
                        a.label = 2;
                    case 2:
                        return r("big_coup_on") && i || t ? [4, (0, Sr.checkBigCommerce)({
                            hasFeature: r,
                            desktop: i,
                            mobile: t
                        })] : [3, 4];
                    case 3:
                        if (d = a.sent(), d) return [2, d];
                        a.label = 4;
                    case 4:
                        return [2]
                }
            })
        })
    }
    A.getPlatform = kr
});
var Ee = v(Q => {
    "use strict";
    Object.defineProperty(Q, "__esModule", {
        value: !0
    });
    Q.getShopifyPath = void 0;

    function Pr() {
        return xr() ? "invalidPath" : Cr() ? "myShopifyPath" : Rr() ? "graphqlCheckoutPath" : qr() ? "shipEarlyAppPath" : Ir() ? "commonPath" : "unknownPath"
    }
    Q.getShopifyPath = Pr;

    function xr() {
        return /accounts\.shopify\.com/.test(document.URL) || /admin\.shopify\.com/.test(document.URL) || /help\.shopify\.com/.test(document.URL) || /community\.shopify\.com/.test(document.URL) || /apps\.shopify\.com/.test(document.URL) || /stock-problems/.test(document.URL) || /shoppay_login/.test(document.URL)
    }

    function Cr() {
        return !!(window.location.pathname.match(/r\/checkout/i) || window.location.pathname.match(/r\/pay/i) && document.querySelector("#discount-field"))
    }

    function Rr() {
        return !!document.querySelector('[name="reductions"]') && !!document.querySelector("abbr ~ strong") && /\/checkouts\/(c|co|cn|do)\/\w+|shop.app\/checkout/.test(document.URL) || !!document.querySelector("#discount-container__input, .discount-container__left .rbg-link") && /\/checkouts\/\w+/.test(document.URL)
    }

    function qr() {
        return !!document.querySelector("#discount_code")
    }

    function Ir() {
        var e = !!document.querySelector('#checkout_reduction_code, [for="checkout_reduction_code"]') && !!document.querySelector(".order-summary__section--discount") && !!document.querySelector(".payment-due__price, .total-line-table__footer .total-line__price"),
            r = document.URL.match(/pay.shopify.com\/transactions/) || document.URL.match(/shop.app\/pay\/transactions/) || document.URL.match(/shop.app\/checkout/);
        return e || r
    }
});
var Ge = v(S => {
    "use strict";
    Object.defineProperty(S, "__esModule", {
        value: !0
    });
    S.getShopifyPath = S.getPlatform = S.getSeparateCheckoutDomain = S.getShopifyDomain = S.getSiteData = void 0;
    var je = Le();
    Object.defineProperty(S, "getSiteData", {
        enumerable: !0,
        get: function () {
            return je.getSiteData
        }
    });
    var Be = Fe();
    Object.defineProperty(S, "getShopifyDomain", {
        enumerable: !0,
        get: function () {
            return Be.getShopifyDomain
        }
    });
    Object.defineProperty(S, "getSeparateCheckoutDomain", {
        enumerable: !0,
        get: function () {
            return Be.getSeparateCheckoutDomain
        }
    });
    var Dr = He();
    Object.defineProperty(S, "getPlatform", {
        enumerable: !0,
        get: function () {
            return Dr.getPlatform
        }
    });
    var Ar = Ee();
    Object.defineProperty(S, "getShopifyPath", {
        enumerable: !0,
        get: function () {
            return Ar.getShopifyPath
        }
    });
    S.default = je.getSiteData
});
var se = v((po, ue) => {
    var We = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof window.msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto);
    We ? (ie = new Uint8Array(16), ue.exports = function () {
        return We(ie), ie
    }) : (ce = new Array(16), ue.exports = function () {
        for (var r = 0, t; r < 16; r++) r & 3 || (t = Math.random() * 4294967296), ce[r] = t >>> ((r & 3) << 3) & 255;
        return ce
    });
    var ie, ce
});
var de = v((ho, Qe) => {
    var $e = [];
    for (V = 0; V < 256; ++V) $e[V] = (V + 256).toString(16).substr(1);
    var V;

    function Mr(e, r) {
        var t = r || 0,
            n = $e;
        return [n[e[t++]], n[e[t++]], n[e[t++]], n[e[t++]], "-", n[e[t++]], n[e[t++]], "-", n[e[t++]], n[e[t++]], "-", n[e[t++]], n[e[t++]], "-", n[e[t++]], n[e[t++]], n[e[t++]], n[e[t++]], n[e[t++]], n[e[t++]]].join("")
    }
    Qe.exports = Mr
});
var Ye = v((go, Xe) => {
    var Tr = se(),
        Lr = de(),
        Je, le, fe = 0,
        me = 0;

    function Or(e, r, t) {
        var n = r && t || 0,
            i = r || [];
        e = e || {};
        var o = e.node || Je,
            c = e.clockseq !== void 0 ? e.clockseq : le;
        if (o == null || c == null) {
            var u = Tr();
            o == null && (o = Je = [u[0] | 1, u[1], u[2], u[3], u[4], u[5]]), c == null && (c = le = (u[6] << 8 | u[7]) & 16383)
        }
        var d = e.msecs !== void 0 ? e.msecs : new Date().getTime(),
            a = e.nsecs !== void 0 ? e.nsecs : me + 1,
            l = d - fe + (a - me) / 1e4;
        if (l < 0 && e.clockseq === void 0 && (c = c + 1 & 16383), (l < 0 || d > fe) && e.nsecs === void 0 && (a = 0), a >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        fe = d, me = a, le = c, d += 122192928e5;
        var p = ((d & 268435455) * 1e4 + a) % 4294967296;
        i[n++] = p >>> 24 & 255, i[n++] = p >>> 16 & 255, i[n++] = p >>> 8 & 255, i[n++] = p & 255;
        var k = d / 4294967296 * 1e4 & 268435455;
        i[n++] = k >>> 8 & 255, i[n++] = k & 255, i[n++] = k >>> 24 & 15 | 16, i[n++] = k >>> 16 & 255, i[n++] = c >>> 8 | 128, i[n++] = c & 255;
        for (var q = 0; q < 6; ++q) i[n + q] = o[q];
        return r || Lr(i)
    }
    Xe.exports = Or
});
var Ke = v((yo, Ze) => {
    var Fr = se(),
        Ur = de();

    function zr(e, r, t) {
        var n = r && t || 0;
        typeof e == "string" && (r = e === "binary" ? new Array(16) : null, e = null), e = e || {};
        var i = e.random || (e.rng || Fr)();
        if (i[6] = i[6] & 15 | 64, i[8] = i[8] & 63 | 128, r)
            for (var o = 0; o < 16; ++o) r[n + o] = i[o];
        return r || Ur(i)
    }
    Ze.exports = zr
});
var rt = v((vo, tt) => {
    var Nr = Ye(),
        et = Ke(),
        pe = et;
    pe.v1 = Nr;
    pe.v4 = et;
    tt.exports = pe
});
var Gt = _(Ge());
Te();
re();
async function ae() {
    document.readyState === "loading" && (await Ae(Me(document, "DOMContentLoaded")), Ie("DOMContentLoaded"))
}
var _e = _(O()),
    jt = _(Re());
re();
var Ht = _(rt()),
    Et = _(Xt());
var ve = {};
Qt(ve, {
    abortRun: () => J,
    addPriceRun: () => ct,
    amazonResultsReceived: () => ut,
    communityDealReceived: () => kt,
    getCookie: () => xt,
    getShopAppMerchant: () => Ct,
    hideFollow: () => Rt,
    modalDetailsReceived: () => qt,
    notifyXHRIsQuiet: () => Dt,
    platformSelectors: () => Mt,
    setupPriceRunPusherBindings: () => it,
    showFollow: () => Lt,
    showSiteHub: () => Ut,
    terminatePriceRun: () => zt,
    updatePriceRun: () => Nt,
    warnAboutStandDown: () => Vt
});
var J = e => {
    F("abortRun", e)
};
var he = _(te()),
    ot = _(Yt());
re();
x();
var H = e => w("pusherEvents", e);
var U = {},
    h = {};

function nt(e, r) {
    h[e] && (h[e] = {
        ...h[e],
        ...r
    })
}

function Vr(e, r) {
    return setTimeout(() => {
        X(e, r)
    }, 3e4)
}

function Hr(e, r) {
    if (e) return setTimeout(() => {
        J({
            run: {
                runId: r
            }
        }), H({
            eventType: "run-aborted",
            response: {
                runId: r
            }
        })
    }, 3e4)
}

function at(e, r) {
    let t = Vr(r.userId, e),
        n = Hr(r.meta.isAmzProductPage, e);
    h[e] = {
        input: r,
        inTabTimeoutIds: {
            abortAmzProductPageRunId: n,
            terminateRunId: t
        }
    }, y("**** added price run ****", e, h[e])
}

function X(e, r) {
    h[r] && (delete h[r], y("**** terminated price run ****", r)), Er(e)
}
async function Er(e) {
    if (Object.keys(h).length > 0) return;
    let r = await U[e];
    r && (r.disconnect(), delete U[e], y("**** disconnected pusher ****", e))
}
var it = e => {
    let {
        userId: r
    } = e;
    return U[r] ? U[r].then(() => he.default.resolve()) : (U[r] = (0, ot.setupPriceRunPusherBindings)(e, jr(r), Br, Gr), U[r].then(() => he.default.resolve()))
};

function jr(e) {
    return async r => {
        let t = "run-finished-v2",
            {
                runId: n
            } = r;
        try {
            if (y(`**** handling event ${t} ****`, n, h[n]), !h[n]) {
                y(`*** Terminating ${t} handler. Price run is not available.`);
                return
            }
            clearTimeout(h[n].inTabTimeoutIds.terminateRunId), clearTimeout(h[n].inTabTimeoutIds.abortAmzProductPageRunId), H({
                eventType: t,
                response: r,
                additionalData: h[n]
            })
        } catch (i) {
            y("**** run-finished-v2 error ****", i.message, i.stack, {
                runId: n
            })
        } finally {
            X(e, n)
        }
    }
}

function Br(e) {
    let r = "run-instantOffers",
        {
            runId: t
        } = e;
    try {
        if (y(`**** handling event ${r} ****`, t, h[t]), !h[t]) {
            y(`*** Terminating ${r} handler. Price run is not available.`);
            return
        }
        H({
            eventType: r,
            response: e,
            additionalData: h[t]
        })
    } catch (n) {
        y("**** run-instantOffers error ****", n.message, n.stack, {
            runId: t
        })
    }
}

function Gr(e) {
    try {
        let r = "run-priceRequest-v2",
            t = e.inputData ? .meta ? .tab ? .id,
            n = s.get("tabId"),
            i = h[e.runId] || t === n && {
                input: e.inputData
            };
        if (y(`**** handling event ${r} ****`, e.runId, e.result ? .id, i), !h[e.runId] && (!t || t !== n)) {
            y(`*** Terminating ${r} handler. No price run or tab data available.`);
            return
        }
        H({
            eventType: r,
            response: e,
            additionalData: i
        })
    } catch (r) {
        y("**** run price request error ****", r.message, r.stack, {
            runId: e.runId,
            priceId: e.result ? .id
        })
    }
}
var ct = (e, r) => at(e, r);
var ut = e => {
    F("amazonResultsReceived", e)
};
var K = _(O());
var E = e => w("setBrowserAction", e);
x();
var ht = _(te());
Jt();
var m = _(O()),
    gt = _(Re());
var st = e => w("addToAmazonCart", e);
var dt = e => w("loadProduct", e);
x();

function ge(e) {
    return e === "amazon.com" || e === "amazon.ca"
}
var lt = _(qe()),
    Y;
window.__wbCurrentDomain && (Y = window.__wbCurrentDomain);
var P = () => Y || lt.default.getDomain(location.href);

function No(e) {
    Y = e, window.__wbCurrentDomain = Y
}
var ft = _(O());
x();

function Z(e) {
    return mt().indexOf(e) > -1
}

function mt() {
    return s.get(["session", "features"]) || []
}

function pt(e, r) {
    return !!mt().find(n => n.startsWith(e) && n.endsWith("_" + ft.default.snakeCase(r)))
}
var Eo = () => Z("is_pc_notif_off");
var g = s.select("notification");

function Wr(e) {
    if ((e.asin || m.default.get(e, "gtins[0]")) !== s.get("currentASIN") && !s.get("ignoreCurrentASIN") && !e.instantOffers) return;
    e.instantOffers && M("track", "instantOffersReceived", {
        parentQuoteId: e.instantOffers.runId,
        quoteId: e.instantOffers.instantOffersRunId,
        trigger: s.get("trigger"),
        currentLocation: m.default.pick(window.location, ["hash", "host", "hostname", "href", "origin", "pathname", "port", "search"])
    });
    let t = m.default.clone(g.get("run") || {});
    m.default.get(e, "run.runId") === m.default.get(t, "runId") && e.modal && (t.betterResults = m.default.map(m.default.get(t, "betterResults"), n => (n.id === e.modal.id && (n = e.modal), n))), g.merge({
        details: e.modal,
        run: m.default.isEmpty(t) ? e.run : t,
        lastChance: !1,
        cartPricing: e.cartPricing
    }), yt(e)
}

function yt(e, r) {
    let t = m.default.get(e, "cartPricing.savings") || e.run.savings;
    if ((m.default.get(e, "run.inputData.asin") || m.default.get(e, "run.inputData.gtins[0]")) !== s.get("currentASIN") && !r || g.get("activeRunId") === m.default.get(e.run, "runId")) return;
    e.run.status === "complete" && (M("page", "quoteCompleteNotification", {
        view: "quoteCompleteNotification",
        type: "notification",
        matchDomain: m.default.get(e.run, "betterResults[0].vendor", null),
        matchUrl: m.default.get(e.run, "betterResults[0].product.url", null),
        savings: t > 0 ? t : null,
        paymentsSupport: !!m.default.get(e, "cartPricing.paymentsSupport")
    }), _t(e.run), g.merge({
        activeRunId: m.default.get(e.run, "runId")
    }));
    let o = t > 0;
    g.merge({
        run: e.run,
        currentSavings: t,
        updating: !0,
        lastSavings: g.get("currentSavings"),
        showPopup: o,
        resetting: !1,
        ignoreRun: !1
    })
}

function vt(e) {
    window.priceCheckId = gt.default.v4(), g.set(["priceCheckStarted"], !0), M("track", "priceCheckStart", {
        quoteId: e,
        priceCheckId: window.priceCheckId,
        trigger: s.get("trigger"),
        currentLocation: m.default.pick(window.location, ["hash", "host", "hostname", "href", "origin", "pathname", "port", "search"])
    })
}

function _t(e) {
    g.get("priceCheckStarted") || (vt(e.runId), g.set(["endFiredFirst"], e.runId)), g.set(["priceCheckStarted"], !1), M("track", "priceCheckEnd", {
        quoteId: e.runId,
        category: m.default.get(e, "originResult.product.vendorCategory"),
        priceCheckId: window.priceCheckId,
        matchId: m.default.get(e, "betterResults[0].id")
    })
}

function $r() {
    g.merge({
        run: {},
        details: null,
        cartPricing: null,
        currentSavings: 0,
        updating: !0,
        lastSavings: g.get("currentSavings"),
        showPopup: !1,
        resetting: !0,
        ignoreRun: !1,
        communityDeal: null
    }), s.set("bestAmazonResult", null)
}

function Zo() {
    g.merge({
        ignoreRun: !0
    })
}
async function Ko() {
    s.set("appReady", !0);
    let e = s.get("messages");
    await ht.default.delay(1e3), m.default.forEach(e, r => {
        r.type !== "resetNotification" && wt(r)
    }), s.set("messages", [])
}

function Qr(e, r) {
    let t = m.default.find(e, o => !!m.default.get(o, "meta.isOrigin")),
        n = m.default.get(t, "pricing.total");
    if (!t || !n) return !1;
    let i = (0, m.default)(e).map(o => {
        let c = m.default.get(o, "pricing.total") ? n - m.default.get(o, "pricing.total") : 0;
        if (o.savings = c > 0 ? c : 0, !o.product.wbpid) try {
            let u = o.product.url.match(/gp\/product\/(.*)\/|dp\/(.*)\?/),
                d = u[2] || u[1];
            d && (o.product.wbpid = `amazon.com_${d}`)
        } catch {}
        return o
    }).filter(o => !!o.savings).sortBy(["savings", o => Ce(xe(o ? .details ? .arrival_date, "ccc. MMM. d"))], ["desc", "asc"]).reverse().value();
    i && i.length && s.set("bestAmazonResult", i[0])
}

function wt(e) {
    if (!s.get("appReady")) {
        s.push(["messages"], e);
        return
    }
    let {
        type: r,
        ...t
    } = e;
    if (t) switch (r) {
        case "setInputData":
            g.merge({
                inputData: t.inputData
            });
            break;
        case "modalDetailsReceived":
            Wr(t);
            break;
        case "runUpdated":
            yt(t);
            break;
        case "abortRun":
            g.merge({
                run: {
                    status: "complete",
                    runId: m.default.get(t, "run.runId"),
                    aborted: !0
                },
                currentSavings: 0,
                updating: !1,
                lastSavings: g.get("currentSavings"),
                showPopup: !1,
                resetting: !1
            }), t.run && _t(t.run);
            break;
        case "resetNotification":
            $r();
            break;
        case "setRunId": {
            g.get("endFiredFirst") !== t.runId && (vt(t.runId), g.set(["endFiredFirst"], null));
            break
        }
        case "amazonResultsReceived":
            Qr(e.amazonResults, e.runId);
            break;
        default:
            console.log("unknown message", e)
    }
}
window.handleMessage = wt;

function en() {
    let e = ge(P()),
        r = Z("ac_elasticity_2"),
        t = s.get(["couponView", "partnerGroupsList"]) ? .groupA ? .includes(P());
    return r && t && !e || !e && !r
}
async function bt(e) {
    if (s.get(["ProductPage", "lastRunId"]) === e.runId) return;
    s.get(["ProductPage"]) ? s.merge("ProductPage", {
        isFetching: !0,
        lastRunId: e.runId
    }) : s.set("ProductPage", {
        isFetching: !0,
        lastRunId: e.runId
    });
    let t = await dt(e);
    t ? (t.isFetching = !1, s.merge("ProductPage", t)) : s.merge("ProductPage", {
        isFetching: !1
    })
}

function tn(e) {
    return st(e)
}
var j;
async function St(e) {
    j = e, s.set(["siteHubView", "primaryDeal"], e), Jr([]);
    let r = e.id,
        t = e.runId,
        n = e.asin;
    bt({
        id: r,
        asin: n,
        runId: t
    })
}

function Jr(e) {
    e = K.default.filter(e, t => t.savings);
    let r = s.get(["siteHubView", "deals"]);
    if (r ? r = (0, K.default)(r.concat(e)).uniq("asin").filter(t => t.asin !== K.default.get(j, "asin")).value() : r = e, s.set(["siteHubView", "deals"], r), j) j.savings > 0 ? E({
        active: !0,
        text: "1"
    }) : E({
        active: !0,
        text: ""
    });
    else if (r.length) {
        let t = r.length + (j ? 1 : 0);
        E({
            active: !0,
            text: t.toString()
        })
    } else E({
        active: !1,
        text: ""
    })
}
x();
var kt = e => {
    if (e && !e.error && e.deal.asin === s.get("currentASIN")) {
        s.set(["notification", "communityDeal"], e);
        let r = e.deal;
        St(r)
    } else e && e.error && s.set(["notification", "communityDeal"], e)
};
var Pt = e => {
    let r = `${e}=`,
        n = decodeURIComponent(document.cookie).split(";");
    for (let i = 0; i < n.length; i++) {
        let o = n[i].trim();
        if (o.indexOf(r) === 0) return o.substring(r.length, o.length)
    }
    return ""
};
var xt = ({
    cookieKey: e
} = {}) => {
    if (e) return Pt(e)
};
var Ct = async () => ye(P());
x();
var Rt = async e => {
    s.merge("followView", {
        hiddenFromWebApp: !0
    })
};
var qt = e => {
    F("modalDetailsReceived", e)
};
Te();
var It = new De,
    Sn = It.asObservable(),
    Dt = () => {
        It.next()
    };
var At = _(O()),
    Mt = e => At.default.map(e, r => ({
        selector: r,
        present: !!document.querySelector(r)
    }));
var Tt = e => w("initNotificationApp", e);
x();
var Lt = async e => {
    s.set("followView", {
        resultData: e
    }), Tt({
        name: "follow"
    })
};
var Ft = _(te());
x();

function Ot(e) {
    let r = s.get(["siteHubView", "deals"]),
        t = s.get(["siteHubView", "primaryDeal"]);
    return s.get(["siteHubView", "shown"]) ? (s.set(["siteHubView", "visible"], !0), s.set(["siteHubView", "site"], e.site)) : s.set("siteHubView", {
        shown: !0,
        visible: !0,
        site: e.site,
        deals: r,
        primaryDeal: t
    }), pt("mit_isqualified", P()) ? !1 : !s.get(["siteHubScriptLoaded"])
}
var Ut = async e => document.readyState === "interactive" || document.readyState === "complete" || document.readyState === "loaded" ? Ot(e) : new Ft.default(r => {
    document.addEventListener("DOMContentLoaded", () => {
        r(Ot(e))
    })
});
var zt = (e, r) => X(e, r);
var Nt = (e, r) => nt(e, r);
x();
var Vt = async () => s.set(["warnAboutStandDown"], !0);
var Xr = "__wikibuy_instant_content",
    Yr = "__wikibuy_instant_bg",
    Zr = "__wikibuy_instant_external_messages";

function Kr(e) {
    return ve[e]
}
var ee = window.wb_messenger;
if (!ee) {
    let e = chrome.runtime.connect(chrome.runtime.id, {
        name: Zr
    });
    ee = window.wb_messenger = (0, Et.default)(Kr, r => {
        chrome.runtime.sendMessage({
            src: Xr,
            data: r
        })
    }, {
        getId: () => (0, Ht.v4)({
            rng: () => {
                for (var r = new Array(16), t = 0, n; t < 16; t++) t & 3 || (n = Math.random() * 4294967296), r[t] = n >>> ((t & 3) << 3) & 255;
                return r
            }
        })
    }), chrome.runtime.onMessage.addListener(r => {
        r.src === Yr && ee.handleMessage(r.data)
    })
}

function w(e, r = {}) {
    return ee.invoke(e, [r])
}

function F(e, r = {}) {
    window.handleMessage && window.handleMessage({
        type: e,
        ...r
    })
}
x();
var Bt = e => ({
    domain: P(),
    pagePath: location.pathname,
    pageViewId: s.get("pageViewId"),
    docStartAt: window.__wb_timing.docStartAt,
    DOMContentLoadedAt: window.__wb_timing.DOMContentLoadedAt,
    sendMetricAt: performance.now(),
    ...e
});

function ca(e, r = {}) {
    if (!e) {
        y("pageName parameter is required");
        return
    }
    let t = Bt(r);
    w("wbAnalytics", {
        method: "page",
        priceCheckId: window.priceCheckId,
        args: [e, t]
    })
}

function ua(e, r = {}) {
    if (!e) {
        y("eventName parameter is required");
        return
    }
    let t = Bt(r);
    w("wbAnalytics", {
        method: "track",
        priceCheckId: window.priceCheckId,
        args: [e, t]
    })
}

function M(e, ...r) {
    let t = _e.default.find(r, i => !_e.default.isString(i));
    t ? (t.domain = t.domain || P(), t.pagePath = t.pagePath || location.pathname, t.pageViewId = s.get("pageViewId"), t.docStartAt = window.__wb_timing.docStartAt, t.DOMContentLoadedAt = window.__wb_timing.DOMContentLoadedAt, t.sendMetricAt = performance.now(), e === "page" && t.source && ((!window.__wb_contentId || window.__wb_contentId.constructor !== Object) && (window.__wb_contentId = {}), t.contentId = (0, jt.v4)(), window.__wb_contentId[t.source] = t.contentId)) : r.push({
        domain: P(),
        pagePath: location.pathname
    });
    let n = {
        page: {
            path: window.location.pathname,
            referrer: document.referrer,
            search: window.location.search,
            title: document.title,
            url: window.location.href
        }
    };
    r.push(n), w("wbAnalytics", {
        method: e,
        priceCheckId: window.priceCheckId,
        args: r
    })
}
async function ye(e) {
    await ae();
    try {
        return (0, Gt.getShopifyDomain)({
            domain: e
        })
    } catch (r) {
        M("track", "shopifyDomainParseError", {
            message: r,
            url: document.URL
        })
    }
}
export {
    Ge as a, ae as b, rt as c, E as d, ge as e, P as f, No as g, Z as h, mt as i, Eo as j, $r as k, Zo as l, Ko as m, en as n, tn as o, Sn as p, w as q, F as r, ca as s, ua as t, M as u, ye as v
};