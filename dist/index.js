<<<<<<< Updated upstream
"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // bin/live-reload.js
  var init_live_reload = __esm({
    "bin/live-reload.js"() {
      "use strict";
      new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());
    }
  });

  // node_modules/.pnpm/@barba+core@2.9.7/node_modules/@barba/core/dist/barba.umd.js
  var require_barba_umd = __commonJS({
    "node_modules/.pnpm/@barba+core@2.9.7/node_modules/@barba/core/dist/barba.umd.js"(exports, module) {
      init_live_reload();
      !function(t, n) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : (t = t || self).barba = n();
      }(exports, function() {
        function t(t2, n2) {
          for (var r2 = 0; r2 < n2.length; r2++) {
            var e2 = n2[r2];
            e2.enumerable = e2.enumerable || false, e2.configurable = true, "value" in e2 && (e2.writable = true), Object.defineProperty(t2, e2.key, e2);
          }
        }
        function n(n2, r2, e2) {
          return r2 && t(n2.prototype, r2), e2 && t(n2, e2), n2;
        }
        function r() {
          return (r = Object.assign || function(t2) {
            for (var n2 = 1; n2 < arguments.length; n2++) {
              var r2 = arguments[n2];
              for (var e2 in r2)
                Object.prototype.hasOwnProperty.call(r2, e2) && (t2[e2] = r2[e2]);
            }
            return t2;
          }).apply(this, arguments);
        }
        function e(t2, n2) {
          t2.prototype = Object.create(n2.prototype), t2.prototype.constructor = t2, t2.__proto__ = n2;
        }
        function i(t2) {
          return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function(t3) {
            return t3.__proto__ || Object.getPrototypeOf(t3);
          })(t2);
        }
        function o(t2, n2) {
          return (o = Object.setPrototypeOf || function(t3, n3) {
            return t3.__proto__ = n3, t3;
          })(t2, n2);
        }
        function u(t2, n2, r2) {
          return (u = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
              })), true;
            } catch (t3) {
              return false;
            }
          }() ? Reflect.construct : function(t3, n3, r3) {
            var e2 = [null];
            e2.push.apply(e2, n3);
            var i2 = new (Function.bind.apply(t3, e2))();
            return r3 && o(i2, r3.prototype), i2;
          }).apply(null, arguments);
        }
        function f(t2) {
          var n2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
          return (f = function(t3) {
            if (null === t3 || -1 === Function.toString.call(t3).indexOf("[native code]"))
              return t3;
            if ("function" != typeof t3)
              throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== n2) {
              if (n2.has(t3))
                return n2.get(t3);
              n2.set(t3, r2);
            }
            function r2() {
              return u(t3, arguments, i(this).constructor);
            }
            return r2.prototype = Object.create(t3.prototype, { constructor: { value: r2, enumerable: false, writable: true, configurable: true } }), o(r2, t3);
          })(t2);
        }
        function s(t2, n2) {
          try {
            var r2 = t2();
          } catch (t3) {
            return n2(t3);
          }
          return r2 && r2.then ? r2.then(void 0, n2) : r2;
        }
        "undefined" != typeof Symbol && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))), "undefined" != typeof Symbol && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
        var c, a = "2.9.7", h = function() {
        };
        !function(t2) {
          t2[t2.off = 0] = "off", t2[t2.error = 1] = "error", t2[t2.warning = 2] = "warning", t2[t2.info = 3] = "info", t2[t2.debug = 4] = "debug";
        }(c || (c = {}));
        var v = c.off, l = function() {
          function t2(t3) {
            this.t = t3;
          }
          t2.getLevel = function() {
            return v;
          }, t2.setLevel = function(t3) {
            return v = c[t3];
          };
          var n2 = t2.prototype;
          return n2.error = function() {
            for (var t3 = arguments.length, n3 = new Array(t3), r2 = 0; r2 < t3; r2++)
              n3[r2] = arguments[r2];
            this.i(console.error, c.error, n3);
          }, n2.warn = function() {
            for (var t3 = arguments.length, n3 = new Array(t3), r2 = 0; r2 < t3; r2++)
              n3[r2] = arguments[r2];
            this.i(console.warn, c.warning, n3);
          }, n2.info = function() {
            for (var t3 = arguments.length, n3 = new Array(t3), r2 = 0; r2 < t3; r2++)
              n3[r2] = arguments[r2];
            this.i(console.info, c.info, n3);
          }, n2.debug = function() {
            for (var t3 = arguments.length, n3 = new Array(t3), r2 = 0; r2 < t3; r2++)
              n3[r2] = arguments[r2];
            this.i(console.log, c.debug, n3);
          }, n2.i = function(n3, r2, e2) {
            r2 <= t2.getLevel() && n3.apply(console, ["[" + this.t + "] "].concat(e2));
          }, t2;
        }(), d = O, m = E, p = g, w = x, b = T, y = "/", P = new RegExp(["(\\\\.)", "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"), "g");
        function g(t2, n2) {
          for (var r2, e2 = [], i2 = 0, o2 = 0, u2 = "", f2 = n2 && n2.delimiter || y, s2 = n2 && n2.whitelist || void 0, c2 = false; null !== (r2 = P.exec(t2)); ) {
            var a2 = r2[0], h2 = r2[1], v2 = r2.index;
            if (u2 += t2.slice(o2, v2), o2 = v2 + a2.length, h2)
              u2 += h2[1], c2 = true;
            else {
              var l2 = "", d2 = r2[2], m2 = r2[3], p2 = r2[4], w2 = r2[5];
              if (!c2 && u2.length) {
                var b2 = u2.length - 1, g2 = u2[b2];
                (!s2 || s2.indexOf(g2) > -1) && (l2 = g2, u2 = u2.slice(0, b2));
              }
              u2 && (e2.push(u2), u2 = "", c2 = false);
              var E2 = m2 || p2, x2 = l2 || f2;
              e2.push({ name: d2 || i2++, prefix: l2, delimiter: x2, optional: "?" === w2 || "*" === w2, repeat: "+" === w2 || "*" === w2, pattern: E2 ? A(E2) : "[^" + k(x2 === f2 ? x2 : x2 + f2) + "]+?" });
            }
          }
          return (u2 || o2 < t2.length) && e2.push(u2 + t2.substr(o2)), e2;
        }
        function E(t2, n2) {
          return function(r2, e2) {
            var i2 = t2.exec(r2);
            if (!i2)
              return false;
            for (var o2 = i2[0], u2 = i2.index, f2 = {}, s2 = e2 && e2.decode || decodeURIComponent, c2 = 1; c2 < i2.length; c2++)
              if (void 0 !== i2[c2]) {
                var a2 = n2[c2 - 1];
                f2[a2.name] = a2.repeat ? i2[c2].split(a2.delimiter).map(function(t3) {
                  return s2(t3, a2);
                }) : s2(i2[c2], a2);
              }
            return { path: o2, index: u2, params: f2 };
          };
        }
        function x(t2, n2) {
          for (var r2 = new Array(t2.length), e2 = 0; e2 < t2.length; e2++)
            "object" == typeof t2[e2] && (r2[e2] = new RegExp("^(?:" + t2[e2].pattern + ")$", R(n2)));
          return function(n3, e3) {
            for (var i2 = "", o2 = e3 && e3.encode || encodeURIComponent, u2 = !e3 || false !== e3.validate, f2 = 0; f2 < t2.length; f2++) {
              var s2 = t2[f2];
              if ("string" != typeof s2) {
                var c2, a2 = n3 ? n3[s2.name] : void 0;
                if (Array.isArray(a2)) {
                  if (!s2.repeat)
                    throw new TypeError('Expected "' + s2.name + '" to not repeat, but got array');
                  if (0 === a2.length) {
                    if (s2.optional)
                      continue;
                    throw new TypeError('Expected "' + s2.name + '" to not be empty');
                  }
                  for (var h2 = 0; h2 < a2.length; h2++) {
                    if (c2 = o2(a2[h2], s2), u2 && !r2[f2].test(c2))
                      throw new TypeError('Expected all "' + s2.name + '" to match "' + s2.pattern + '"');
                    i2 += (0 === h2 ? s2.prefix : s2.delimiter) + c2;
                  }
                } else if ("string" != typeof a2 && "number" != typeof a2 && "boolean" != typeof a2) {
                  if (!s2.optional)
                    throw new TypeError('Expected "' + s2.name + '" to be ' + (s2.repeat ? "an array" : "a string"));
                } else {
                  if (c2 = o2(String(a2), s2), u2 && !r2[f2].test(c2))
                    throw new TypeError('Expected "' + s2.name + '" to match "' + s2.pattern + '", but got "' + c2 + '"');
                  i2 += s2.prefix + c2;
                }
              } else
                i2 += s2;
            }
            return i2;
          };
        }
        function k(t2) {
          return t2.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
        }
        function A(t2) {
          return t2.replace(/([=!:$/()])/g, "\\$1");
        }
        function R(t2) {
          return t2 && t2.sensitive ? "" : "i";
        }
        function T(t2, n2, r2) {
          for (var e2 = (r2 = r2 || {}).strict, i2 = false !== r2.start, o2 = false !== r2.end, u2 = r2.delimiter || y, f2 = [].concat(r2.endsWith || []).map(k).concat("$").join("|"), s2 = i2 ? "^" : "", c2 = 0; c2 < t2.length; c2++) {
            var a2 = t2[c2];
            if ("string" == typeof a2)
              s2 += k(a2);
            else {
              var h2 = a2.repeat ? "(?:" + a2.pattern + ")(?:" + k(a2.delimiter) + "(?:" + a2.pattern + "))*" : a2.pattern;
              n2 && n2.push(a2), s2 += a2.optional ? a2.prefix ? "(?:" + k(a2.prefix) + "(" + h2 + "))?" : "(" + h2 + ")?" : k(a2.prefix) + "(" + h2 + ")";
            }
          }
          if (o2)
            e2 || (s2 += "(?:" + k(u2) + ")?"), s2 += "$" === f2 ? "$" : "(?=" + f2 + ")";
          else {
            var v2 = t2[t2.length - 1], l2 = "string" == typeof v2 ? v2[v2.length - 1] === u2 : void 0 === v2;
            e2 || (s2 += "(?:" + k(u2) + "(?=" + f2 + "))?"), l2 || (s2 += "(?=" + k(u2) + "|" + f2 + ")");
          }
          return new RegExp(s2, R(r2));
        }
        function O(t2, n2, r2) {
          return t2 instanceof RegExp ? function(t3, n3) {
            if (!n3)
              return t3;
            var r3 = t3.source.match(/\((?!\?)/g);
            if (r3)
              for (var e2 = 0; e2 < r3.length; e2++)
                n3.push({ name: e2, prefix: null, delimiter: null, optional: false, repeat: false, pattern: null });
            return t3;
          }(t2, n2) : Array.isArray(t2) ? function(t3, n3, r3) {
            for (var e2 = [], i2 = 0; i2 < t3.length; i2++)
              e2.push(O(t3[i2], n3, r3).source);
            return new RegExp("(?:" + e2.join("|") + ")", R(r3));
          }(t2, n2, r2) : function(t3, n3, r3) {
            return T(g(t3, r3), n3, r3);
          }(t2, n2, r2);
        }
        d.match = function(t2, n2) {
          var r2 = [];
          return E(O(t2, r2, n2), r2);
        }, d.regexpToFunction = m, d.parse = p, d.compile = function(t2, n2) {
          return x(g(t2, n2), n2);
        }, d.tokensToFunction = w, d.tokensToRegExp = b;
        var S = { container: "container", history: "history", namespace: "namespace", prefix: "data-barba", prevent: "prevent", wrapper: "wrapper" }, j = new (function() {
          function t2() {
            this.o = S, this.u = new DOMParser();
          }
          var n2 = t2.prototype;
          return n2.toString = function(t3) {
            return t3.outerHTML;
          }, n2.toDocument = function(t3) {
            return this.u.parseFromString(t3, "text/html");
          }, n2.toElement = function(t3) {
            var n3 = document.createElement("div");
            return n3.innerHTML = t3, n3;
          }, n2.getHtml = function(t3) {
            return void 0 === t3 && (t3 = document), this.toString(t3.documentElement);
          }, n2.getWrapper = function(t3) {
            return void 0 === t3 && (t3 = document), t3.querySelector("[" + this.o.prefix + '="' + this.o.wrapper + '"]');
          }, n2.getContainer = function(t3) {
            return void 0 === t3 && (t3 = document), t3.querySelector("[" + this.o.prefix + '="' + this.o.container + '"]');
          }, n2.removeContainer = function(t3) {
            document.body.contains(t3) && t3.parentNode.removeChild(t3);
          }, n2.addContainer = function(t3, n3) {
            var r2 = this.getContainer();
            r2 ? this.s(t3, r2) : n3.appendChild(t3);
          }, n2.getNamespace = function(t3) {
            void 0 === t3 && (t3 = document);
            var n3 = t3.querySelector("[" + this.o.prefix + "-" + this.o.namespace + "]");
            return n3 ? n3.getAttribute(this.o.prefix + "-" + this.o.namespace) : null;
          }, n2.getHref = function(t3) {
            if (t3.tagName && "a" === t3.tagName.toLowerCase()) {
              if ("string" == typeof t3.href)
                return t3.href;
              var n3 = t3.getAttribute("href") || t3.getAttribute("xlink:href");
              if (n3)
                return this.resolveUrl(n3.baseVal || n3);
            }
            return null;
          }, n2.resolveUrl = function() {
            for (var t3 = arguments.length, n3 = new Array(t3), r2 = 0; r2 < t3; r2++)
              n3[r2] = arguments[r2];
            var e2 = n3.length;
            if (0 === e2)
              throw new Error("resolveUrl requires at least one argument; got none.");
            var i2 = document.createElement("base");
            if (i2.href = arguments[0], 1 === e2)
              return i2.href;
            var o2 = document.getElementsByTagName("head")[0];
            o2.insertBefore(i2, o2.firstChild);
            for (var u2, f2 = document.createElement("a"), s2 = 1; s2 < e2; s2++)
              f2.href = arguments[s2], i2.href = u2 = f2.href;
            return o2.removeChild(i2), u2;
          }, n2.s = function(t3, n3) {
            n3.parentNode.insertBefore(t3, n3.nextSibling);
          }, t2;
        }())(), M = new (function() {
          function t2() {
            this.h = [], this.v = -1;
          }
          var e2 = t2.prototype;
          return e2.init = function(t3, n2) {
            this.l = "barba";
            var r2 = { ns: n2, scroll: { x: window.scrollX, y: window.scrollY }, url: t3 };
            this.h.push(r2), this.v = 0;
            var e3 = { from: this.l, index: 0, states: [].concat(this.h) };
            window.history && window.history.replaceState(e3, "", t3);
          }, e2.change = function(t3, n2, r2) {
            if (r2 && r2.state) {
              var e3 = r2.state, i2 = e3.index;
              n2 = this.m(this.v - i2), this.replace(e3.states), this.v = i2;
            } else
              this.add(t3, n2);
            return n2;
          }, e2.add = function(t3, n2) {
            var r2 = this.size, e3 = this.p(n2), i2 = { ns: "tmp", scroll: { x: window.scrollX, y: window.scrollY }, url: t3 };
            this.h.push(i2), this.v = r2;
            var o2 = { from: this.l, index: r2, states: [].concat(this.h) };
            switch (e3) {
              case "push":
                window.history && window.history.pushState(o2, "", t3);
                break;
              case "replace":
                window.history && window.history.replaceState(o2, "", t3);
            }
          }, e2.update = function(t3, n2) {
            var e3 = n2 || this.v, i2 = r({}, this.get(e3), {}, t3);
            this.set(e3, i2);
          }, e2.remove = function(t3) {
            t3 ? this.h.splice(t3, 1) : this.h.pop(), this.v--;
          }, e2.clear = function() {
            this.h = [], this.v = -1;
          }, e2.replace = function(t3) {
            this.h = t3;
          }, e2.get = function(t3) {
            return this.h[t3];
          }, e2.set = function(t3, n2) {
            return this.h[t3] = n2;
          }, e2.p = function(t3) {
            var n2 = "push", r2 = t3, e3 = S.prefix + "-" + S.history;
            return r2.hasAttribute && r2.hasAttribute(e3) && (n2 = r2.getAttribute(e3)), n2;
          }, e2.m = function(t3) {
            return Math.abs(t3) > 1 ? t3 > 0 ? "forward" : "back" : 0 === t3 ? "popstate" : t3 > 0 ? "back" : "forward";
          }, n(t2, [{ key: "current", get: function() {
            return this.h[this.v];
          } }, { key: "state", get: function() {
            return this.h[this.h.length - 1];
          } }, { key: "previous", get: function() {
            return this.v < 1 ? null : this.h[this.v - 1];
          } }, { key: "size", get: function() {
            return this.h.length;
          } }]), t2;
        }())(), L = function(t2, n2) {
          try {
            var r2 = function() {
              if (!n2.next.html)
                return Promise.resolve(t2).then(function(t3) {
                  var r3 = n2.next;
                  if (t3) {
                    var e2 = j.toElement(t3);
                    r3.namespace = j.getNamespace(e2), r3.container = j.getContainer(e2), r3.html = t3, M.update({ ns: r3.namespace });
                    var i2 = j.toDocument(t3);
                    document.title = i2.title;
                  }
                });
            }();
            return Promise.resolve(r2 && r2.then ? r2.then(function() {
            }) : void 0);
          } catch (t3) {
            return Promise.reject(t3);
          }
        }, $2 = d, _ = { __proto__: null, update: L, nextTick: function() {
          return new Promise(function(t2) {
            window.requestAnimationFrame(t2);
          });
        }, pathToRegexp: $2 }, q = function() {
          return window.location.origin;
        }, B = function(t2) {
          return void 0 === t2 && (t2 = window.location.href), U(t2).port;
        }, U = function(t2) {
          var n2, r2 = t2.match(/:\d+/);
          if (null === r2)
            /^http/.test(t2) && (n2 = 80), /^https/.test(t2) && (n2 = 443);
          else {
            var e2 = r2[0].substring(1);
            n2 = parseInt(e2, 10);
          }
          var i2, o2 = t2.replace(q(), ""), u2 = {}, f2 = o2.indexOf("#");
          f2 >= 0 && (i2 = o2.slice(f2 + 1), o2 = o2.slice(0, f2));
          var s2 = o2.indexOf("?");
          return s2 >= 0 && (u2 = D(o2.slice(s2 + 1)), o2 = o2.slice(0, s2)), { hash: i2, path: o2, port: n2, query: u2 };
        }, D = function(t2) {
          return t2.split("&").reduce(function(t3, n2) {
            var r2 = n2.split("=");
            return t3[r2[0]] = r2[1], t3;
          }, {});
        }, F = function(t2) {
          return void 0 === t2 && (t2 = window.location.href), t2.replace(/(\/#.*|\/|#.*)$/, "");
        }, H = { __proto__: null, getHref: function() {
          return window.location.href;
        }, getOrigin: q, getPort: B, getPath: function(t2) {
          return void 0 === t2 && (t2 = window.location.href), U(t2).path;
        }, parse: U, parseQuery: D, clean: F };
        function I(t2, n2, r2) {
          return void 0 === n2 && (n2 = 2e3), new Promise(function(e2, i2) {
            var o2 = new XMLHttpRequest();
            o2.onreadystatechange = function() {
              if (o2.readyState === XMLHttpRequest.DONE) {
                if (200 === o2.status)
                  e2(o2.responseText);
                else if (o2.status) {
                  var n3 = { status: o2.status, statusText: o2.statusText };
                  r2(t2, n3), i2(n3);
                }
              }
            }, o2.ontimeout = function() {
              var e3 = new Error("Timeout error [" + n2 + "]");
              r2(t2, e3), i2(e3);
            }, o2.onerror = function() {
              var n3 = new Error("Fetch error");
              r2(t2, n3), i2(n3);
            }, o2.open("GET", t2), o2.timeout = n2, o2.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml"), o2.setRequestHeader("x-barba", "yes"), o2.send();
          });
        }
        var C = function(t2) {
          return !!t2 && ("object" == typeof t2 || "function" == typeof t2) && "function" == typeof t2.then;
        };
        function N(t2, n2) {
          return void 0 === n2 && (n2 = {}), function() {
            for (var r2 = arguments.length, e2 = new Array(r2), i2 = 0; i2 < r2; i2++)
              e2[i2] = arguments[i2];
            var o2 = false, u2 = new Promise(function(r3, i3) {
              n2.async = function() {
                return o2 = true, function(t3, n3) {
                  t3 ? i3(t3) : r3(n3);
                };
              };
              var u3 = t2.apply(n2, e2);
              o2 || (C(u3) ? u3.then(r3, i3) : r3(u3));
            });
            return u2;
          };
        }
        var X = new (function(t2) {
          function n2() {
            var n3;
            return (n3 = t2.call(this) || this).logger = new l("@barba/core"), n3.all = ["ready", "page", "reset", "currentAdded", "currentRemoved", "nextAdded", "nextRemoved", "beforeOnce", "once", "afterOnce", "before", "beforeLeave", "leave", "afterLeave", "beforeEnter", "enter", "afterEnter", "after"], n3.registered = /* @__PURE__ */ new Map(), n3.init(), n3;
          }
          e(n2, t2);
          var r2 = n2.prototype;
          return r2.init = function() {
            var t3 = this;
            this.registered.clear(), this.all.forEach(function(n3) {
              t3[n3] || (t3[n3] = function(r3, e2) {
                t3.registered.has(n3) || t3.registered.set(n3, /* @__PURE__ */ new Set()), t3.registered.get(n3).add({ ctx: e2 || {}, fn: r3 });
              });
            });
          }, r2.do = function(t3) {
            for (var n3 = this, r3 = arguments.length, e2 = new Array(r3 > 1 ? r3 - 1 : 0), i2 = 1; i2 < r3; i2++)
              e2[i2 - 1] = arguments[i2];
            if (this.registered.has(t3)) {
              var o2 = Promise.resolve();
              return this.registered.get(t3).forEach(function(t4) {
                o2 = o2.then(function() {
                  return N(t4.fn, t4.ctx).apply(void 0, e2);
                });
              }), o2.catch(function(r4) {
                n3.logger.debug("Hook error [" + t3 + "]"), n3.logger.error(r4);
              });
            }
            return Promise.resolve();
          }, r2.clear = function() {
            var t3 = this;
            this.all.forEach(function(n3) {
              delete t3[n3];
            }), this.init();
          }, r2.help = function() {
            this.logger.info("Available hooks: " + this.all.join(","));
            var t3 = [];
            this.registered.forEach(function(n3, r3) {
              return t3.push(r3);
            }), this.logger.info("Registered hooks: " + t3.join(","));
          }, n2;
        }(h))(), z = function() {
          function t2(t3) {
            if (this.P = [], "boolean" == typeof t3)
              this.g = t3;
            else {
              var n2 = Array.isArray(t3) ? t3 : [t3];
              this.P = n2.map(function(t4) {
                return $2(t4);
              });
            }
          }
          return t2.prototype.checkHref = function(t3) {
            if ("boolean" == typeof this.g)
              return this.g;
            var n2 = U(t3).path;
            return this.P.some(function(t4) {
              return null !== t4.exec(n2);
            });
          }, t2;
        }(), G = function(t2) {
          function n2(n3) {
            var r2;
            return (r2 = t2.call(this, n3) || this).k = /* @__PURE__ */ new Map(), r2;
          }
          e(n2, t2);
          var i2 = n2.prototype;
          return i2.set = function(t3, n3, r2) {
            return this.k.set(t3, { action: r2, request: n3 }), { action: r2, request: n3 };
          }, i2.get = function(t3) {
            return this.k.get(t3);
          }, i2.getRequest = function(t3) {
            return this.k.get(t3).request;
          }, i2.getAction = function(t3) {
            return this.k.get(t3).action;
          }, i2.has = function(t3) {
            return !this.checkHref(t3) && this.k.has(t3);
          }, i2.delete = function(t3) {
            return this.k.delete(t3);
          }, i2.update = function(t3, n3) {
            var e2 = r({}, this.k.get(t3), {}, n3);
            return this.k.set(t3, e2), e2;
          }, n2;
        }(z), Q = function() {
          return !window.history.pushState;
        }, W = function(t2) {
          return !t2.el || !t2.href;
        }, J = function(t2) {
          var n2 = t2.event;
          return n2.which > 1 || n2.metaKey || n2.ctrlKey || n2.shiftKey || n2.altKey;
        }, K = function(t2) {
          var n2 = t2.el;
          return n2.hasAttribute("target") && "_blank" === n2.target;
        }, V = function(t2) {
          var n2 = t2.el;
          return void 0 !== n2.protocol && window.location.protocol !== n2.protocol || void 0 !== n2.hostname && window.location.hostname !== n2.hostname;
        }, Y = function(t2) {
          var n2 = t2.el;
          return void 0 !== n2.port && B() !== B(n2.href);
        }, Z = function(t2) {
          var n2 = t2.el;
          return n2.getAttribute && "string" == typeof n2.getAttribute("download");
        }, tt = function(t2) {
          return t2.el.hasAttribute(S.prefix + "-" + S.prevent);
        }, nt = function(t2) {
          return Boolean(t2.el.closest("[" + S.prefix + "-" + S.prevent + '="all"]'));
        }, rt = function(t2) {
          var n2 = t2.href;
          return F(n2) === F() && B(n2) === B();
        }, et = function(t2) {
          function n2(n3) {
            var r3;
            return (r3 = t2.call(this, n3) || this).suite = [], r3.tests = /* @__PURE__ */ new Map(), r3.init(), r3;
          }
          e(n2, t2);
          var r2 = n2.prototype;
          return r2.init = function() {
            this.add("pushState", Q), this.add("exists", W), this.add("newTab", J), this.add("blank", K), this.add("corsDomain", V), this.add("corsPort", Y), this.add("download", Z), this.add("preventSelf", tt), this.add("preventAll", nt), this.add("sameUrl", rt, false);
          }, r2.add = function(t3, n3, r3) {
            void 0 === r3 && (r3 = true), this.tests.set(t3, n3), r3 && this.suite.push(t3);
          }, r2.run = function(t3, n3, r3, e2) {
            return this.tests.get(t3)({ el: n3, event: r3, href: e2 });
          }, r2.checkLink = function(t3, n3, r3) {
            var e2 = this;
            return this.suite.some(function(i2) {
              return e2.run(i2, t3, n3, r3);
            });
          }, n2;
        }(z), it = function(t2) {
          function n2(r2, e2) {
            var i2;
            void 0 === e2 && (e2 = "Barba error");
            for (var o2 = arguments.length, u2 = new Array(o2 > 2 ? o2 - 2 : 0), f2 = 2; f2 < o2; f2++)
              u2[f2 - 2] = arguments[f2];
            return (i2 = t2.call.apply(t2, [this].concat(u2)) || this).error = r2, i2.label = e2, Error.captureStackTrace && Error.captureStackTrace(function(t3) {
              if (void 0 === t3)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return t3;
            }(i2), n2), i2.name = "BarbaError", i2;
          }
          return e(n2, t2), n2;
        }(f(Error)), ot = function() {
          function t2(t3) {
            void 0 === t3 && (t3 = []), this.logger = new l("@barba/core"), this.all = [], this.page = [], this.once = [], this.A = [{ name: "namespace", type: "strings" }, { name: "custom", type: "function" }], t3 && (this.all = this.all.concat(t3)), this.update();
          }
          var n2 = t2.prototype;
          return n2.add = function(t3, n3) {
            switch (t3) {
              case "rule":
                this.A.splice(n3.position || 0, 0, n3.value);
                break;
              case "transition":
              default:
                this.all.push(n3);
            }
            this.update();
          }, n2.resolve = function(t3, n3) {
            var r2 = this;
            void 0 === n3 && (n3 = {});
            var e2 = n3.once ? this.once : this.page;
            e2 = e2.filter(n3.self ? function(t4) {
              return t4.name && "self" === t4.name;
            } : function(t4) {
              return !t4.name || "self" !== t4.name;
            });
            var i2 = /* @__PURE__ */ new Map(), o2 = e2.find(function(e3) {
              var o3 = true, u3 = {};
              return !(!n3.self || "self" !== e3.name) || (r2.A.reverse().forEach(function(n4) {
                o3 && (o3 = r2.R(e3, n4, t3, u3), e3.from && e3.to && (o3 = r2.R(e3, n4, t3, u3, "from") && r2.R(e3, n4, t3, u3, "to")), e3.from && !e3.to && (o3 = r2.R(e3, n4, t3, u3, "from")), !e3.from && e3.to && (o3 = r2.R(e3, n4, t3, u3, "to")));
              }), i2.set(e3, u3), o3);
            }), u2 = i2.get(o2), f2 = [];
            if (f2.push(n3.once ? "once" : "page"), n3.self && f2.push("self"), u2) {
              var s2, c2 = [o2];
              Object.keys(u2).length > 0 && c2.push(u2), (s2 = this.logger).info.apply(s2, ["Transition found [" + f2.join(",") + "]"].concat(c2));
            } else
              this.logger.info("No transition found [" + f2.join(",") + "]");
            return o2;
          }, n2.update = function() {
            var t3 = this;
            this.all = this.all.map(function(n3) {
              return t3.T(n3);
            }).sort(function(t4, n3) {
              return t4.priority - n3.priority;
            }).reverse().map(function(t4) {
              return delete t4.priority, t4;
            }), this.page = this.all.filter(function(t4) {
              return void 0 !== t4.leave || void 0 !== t4.enter;
            }), this.once = this.all.filter(function(t4) {
              return void 0 !== t4.once;
            });
          }, n2.R = function(t3, n3, r2, e2, i2) {
            var o2 = true, u2 = false, f2 = t3, s2 = n3.name, c2 = s2, a2 = s2, h2 = s2, v2 = i2 ? f2[i2] : f2, l2 = "to" === i2 ? r2.next : r2.current;
            if (i2 ? v2 && v2[s2] : v2[s2]) {
              switch (n3.type) {
                case "strings":
                default:
                  var d2 = Array.isArray(v2[c2]) ? v2[c2] : [v2[c2]];
                  l2[c2] && -1 !== d2.indexOf(l2[c2]) && (u2 = true), -1 === d2.indexOf(l2[c2]) && (o2 = false);
                  break;
                case "object":
                  var m2 = Array.isArray(v2[a2]) ? v2[a2] : [v2[a2]];
                  l2[a2] ? (l2[a2].name && -1 !== m2.indexOf(l2[a2].name) && (u2 = true), -1 === m2.indexOf(l2[a2].name) && (o2 = false)) : o2 = false;
                  break;
                case "function":
                  v2[h2](r2) ? u2 = true : o2 = false;
              }
              u2 && (i2 ? (e2[i2] = e2[i2] || {}, e2[i2][s2] = f2[i2][s2]) : e2[s2] = f2[s2]);
            }
            return o2;
          }, n2.O = function(t3, n3, r2) {
            var e2 = 0;
            return (t3[n3] || t3.from && t3.from[n3] || t3.to && t3.to[n3]) && (e2 += Math.pow(10, r2), t3.from && t3.from[n3] && (e2 += 1), t3.to && t3.to[n3] && (e2 += 2)), e2;
          }, n2.T = function(t3) {
            var n3 = this;
            t3.priority = 0;
            var r2 = 0;
            return this.A.forEach(function(e2, i2) {
              r2 += n3.O(t3, e2.name, i2 + 1);
            }), t3.priority = r2, t3;
          }, t2;
        }(), ut = function() {
          function t2(t3) {
            void 0 === t3 && (t3 = []), this.logger = new l("@barba/core"), this.S = false, this.store = new ot(t3);
          }
          var r2 = t2.prototype;
          return r2.get = function(t3, n2) {
            return this.store.resolve(t3, n2);
          }, r2.doOnce = function(t3) {
            var n2 = t3.data, r3 = t3.transition;
            try {
              var e2 = function() {
                i2.S = false;
              }, i2 = this, o2 = r3 || {};
              i2.S = true;
              var u2 = s(function() {
                return Promise.resolve(i2.j("beforeOnce", n2, o2)).then(function() {
                  return Promise.resolve(i2.once(n2, o2)).then(function() {
                    return Promise.resolve(i2.j("afterOnce", n2, o2)).then(function() {
                    });
                  });
                });
              }, function(t4) {
                i2.S = false, i2.logger.debug("Transition error [before/after/once]"), i2.logger.error(t4);
              });
              return Promise.resolve(u2 && u2.then ? u2.then(e2) : e2());
            } catch (t4) {
              return Promise.reject(t4);
            }
          }, r2.doPage = function(t3) {
            var n2 = t3.data, r3 = t3.transition, e2 = t3.page, i2 = t3.wrapper;
            try {
              var o2 = function(t4) {
                if (u2)
                  return t4;
                f2.S = false;
              }, u2 = false, f2 = this, c2 = r3 || {}, a2 = true === c2.sync || false;
              f2.S = true;
              var h2 = s(function() {
                function t4() {
                  return Promise.resolve(f2.j("before", n2, c2)).then(function() {
                    var t5 = false;
                    function r5(r6) {
                      return t5 ? r6 : Promise.resolve(f2.remove(n2)).then(function() {
                        return Promise.resolve(f2.j("after", n2, c2)).then(function() {
                        });
                      });
                    }
                    var o3 = function() {
                      if (a2)
                        return s(function() {
                          return Promise.resolve(f2.add(n2, i2)).then(function() {
                            return Promise.resolve(f2.j("beforeLeave", n2, c2)).then(function() {
                              return Promise.resolve(f2.j("beforeEnter", n2, c2)).then(function() {
                                return Promise.resolve(Promise.all([f2.leave(n2, c2), f2.enter(n2, c2)])).then(function() {
                                  return Promise.resolve(f2.j("afterLeave", n2, c2)).then(function() {
                                    return Promise.resolve(f2.j("afterEnter", n2, c2)).then(function() {
                                    });
                                  });
                                });
                              });
                            });
                          });
                        }, function(t6) {
                          if (f2.M(t6))
                            throw new it(t6, "Transition error [sync]");
                        });
                      var r6 = function(r7) {
                        return t5 ? r7 : s(function() {
                          var t6 = function() {
                            if (false !== o4)
                              return Promise.resolve(f2.add(n2, i2)).then(function() {
                                return Promise.resolve(f2.j("beforeEnter", n2, c2)).then(function() {
                                  return Promise.resolve(f2.enter(n2, c2, o4)).then(function() {
                                    return Promise.resolve(f2.j("afterEnter", n2, c2)).then(function() {
                                    });
                                  });
                                });
                              });
                          }();
                          if (t6 && t6.then)
                            return t6.then(function() {
                            });
                        }, function(t6) {
                          if (f2.M(t6))
                            throw new it(t6, "Transition error [before/after/enter]");
                        });
                      }, o4 = false, u3 = s(function() {
                        return Promise.resolve(f2.j("beforeLeave", n2, c2)).then(function() {
                          return Promise.resolve(Promise.all([f2.leave(n2, c2), L(e2, n2)]).then(function(t6) {
                            return t6[0];
                          })).then(function(t6) {
                            return o4 = t6, Promise.resolve(f2.j("afterLeave", n2, c2)).then(function() {
                            });
                          });
                        });
                      }, function(t6) {
                        if (f2.M(t6))
                          throw new it(t6, "Transition error [before/after/leave]");
                      });
                      return u3 && u3.then ? u3.then(r6) : r6(u3);
                    }();
                    return o3 && o3.then ? o3.then(r5) : r5(o3);
                  });
                }
                var r4 = function() {
                  if (a2)
                    return Promise.resolve(L(e2, n2)).then(function() {
                    });
                }();
                return r4 && r4.then ? r4.then(t4) : t4();
              }, function(t4) {
                if (f2.S = false, t4.name && "BarbaError" === t4.name)
                  throw f2.logger.debug(t4.label), f2.logger.error(t4.error), t4;
                throw f2.logger.debug("Transition error [page]"), f2.logger.error(t4), t4;
              });
              return Promise.resolve(h2 && h2.then ? h2.then(o2) : o2(h2));
            } catch (t4) {
              return Promise.reject(t4);
            }
          }, r2.once = function(t3, n2) {
            try {
              return Promise.resolve(X.do("once", t3, n2)).then(function() {
                return n2.once ? N(n2.once, n2)(t3) : Promise.resolve();
              });
            } catch (t4) {
              return Promise.reject(t4);
            }
          }, r2.leave = function(t3, n2) {
            try {
              return Promise.resolve(X.do("leave", t3, n2)).then(function() {
                return n2.leave ? N(n2.leave, n2)(t3) : Promise.resolve();
              });
            } catch (t4) {
              return Promise.reject(t4);
            }
          }, r2.enter = function(t3, n2, r3) {
            try {
              return Promise.resolve(X.do("enter", t3, n2)).then(function() {
                return n2.enter ? N(n2.enter, n2)(t3, r3) : Promise.resolve();
              });
            } catch (t4) {
              return Promise.reject(t4);
            }
          }, r2.add = function(t3, n2) {
            try {
              return j.addContainer(t3.next.container, n2), X.do("nextAdded", t3), Promise.resolve();
            } catch (t4) {
              return Promise.reject(t4);
            }
          }, r2.remove = function(t3) {
            try {
              return j.removeContainer(t3.current.container), X.do("currentRemoved", t3), Promise.resolve();
            } catch (t4) {
              return Promise.reject(t4);
            }
          }, r2.M = function(t3) {
            return t3.message ? !/Timeout error|Fetch error/.test(t3.message) : !t3.status;
          }, r2.j = function(t3, n2, r3) {
            try {
              return Promise.resolve(X.do(t3, n2, r3)).then(function() {
                return r3[t3] ? N(r3[t3], r3)(n2) : Promise.resolve();
              });
            } catch (t4) {
              return Promise.reject(t4);
            }
          }, n(t2, [{ key: "isRunning", get: function() {
            return this.S;
          }, set: function(t3) {
            this.S = t3;
          } }, { key: "hasOnce", get: function() {
            return this.store.once.length > 0;
          } }, { key: "hasSelf", get: function() {
            return this.store.all.some(function(t3) {
              return "self" === t3.name;
            });
          } }, { key: "shouldWait", get: function() {
            return this.store.all.some(function(t3) {
              return t3.to && !t3.to.route || t3.sync;
            });
          } }]), t2;
        }(), ft = function() {
          function t2(t3) {
            var n2 = this;
            this.names = ["beforeLeave", "afterLeave", "beforeEnter", "afterEnter"], this.byNamespace = /* @__PURE__ */ new Map(), 0 !== t3.length && (t3.forEach(function(t4) {
              n2.byNamespace.set(t4.namespace, t4);
            }), this.names.forEach(function(t4) {
              X[t4](n2.L(t4));
            }));
          }
          return t2.prototype.L = function(t3) {
            var n2 = this;
            return function(r2) {
              var e2 = t3.match(/enter/i) ? r2.next : r2.current, i2 = n2.byNamespace.get(e2.namespace);
              return i2 && i2[t3] ? N(i2[t3], i2)(r2) : Promise.resolve();
            };
          }, t2;
        }();
        Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(t2) {
          var n2 = this;
          do {
            if (n2.matches(t2))
              return n2;
            n2 = n2.parentElement || n2.parentNode;
          } while (null !== n2 && 1 === n2.nodeType);
          return null;
        });
        var st = { container: null, html: "", namespace: "", url: { hash: "", href: "", path: "", port: null, query: {} } };
        return new (function() {
          function t2() {
            this.version = a, this.schemaPage = st, this.Logger = l, this.logger = new l("@barba/core"), this.plugins = [], this.hooks = X, this.dom = j, this.helpers = _, this.history = M, this.request = I, this.url = H;
          }
          var e2 = t2.prototype;
          return e2.use = function(t3, n2) {
            var r2 = this.plugins;
            r2.indexOf(t3) > -1 ? this.logger.warn("Plugin [" + t3.name + "] already installed.") : "function" == typeof t3.install ? (t3.install(this, n2), r2.push(t3)) : this.logger.warn("Plugin [" + t3.name + '] has no "install" method.');
          }, e2.init = function(t3) {
            var n2 = void 0 === t3 ? {} : t3, e3 = n2.transitions, i2 = void 0 === e3 ? [] : e3, o2 = n2.views, u2 = void 0 === o2 ? [] : o2, f2 = n2.schema, s2 = void 0 === f2 ? S : f2, c2 = n2.requestError, a2 = n2.timeout, h2 = void 0 === a2 ? 2e3 : a2, v2 = n2.cacheIgnore, d2 = void 0 !== v2 && v2, m2 = n2.prefetchIgnore, p2 = void 0 !== m2 && m2, w2 = n2.preventRunning, b2 = void 0 !== w2 && w2, y2 = n2.prevent, P2 = void 0 === y2 ? null : y2, g2 = n2.debug, E2 = n2.logLevel;
            if (l.setLevel(true === (void 0 !== g2 && g2) ? "debug" : void 0 === E2 ? "off" : E2), this.logger.info(this.version), Object.keys(s2).forEach(function(t4) {
              S[t4] && (S[t4] = s2[t4]);
            }), this.$ = c2, this.timeout = h2, this.cacheIgnore = d2, this.prefetchIgnore = p2, this.preventRunning = b2, this._ = this.dom.getWrapper(), !this._)
              throw new Error("[@barba/core] No Barba wrapper found");
            this._.setAttribute("aria-live", "polite"), this.q();
            var x2 = this.data.current;
            if (!x2.container)
              throw new Error("[@barba/core] No Barba container found");
            if (this.cache = new G(d2), this.prevent = new et(p2), this.transitions = new ut(i2), this.views = new ft(u2), null !== P2) {
              if ("function" != typeof P2)
                throw new Error("[@barba/core] Prevent should be a function");
              this.prevent.add("preventCustom", P2);
            }
            this.history.init(x2.url.href, x2.namespace), this.B = this.B.bind(this), this.U = this.U.bind(this), this.D = this.D.bind(this), this.F(), this.plugins.forEach(function(t4) {
              return t4.init();
            });
            var k2 = this.data;
            k2.trigger = "barba", k2.next = k2.current, k2.current = r({}, this.schemaPage), this.hooks.do("ready", k2), this.once(k2), this.q();
          }, e2.destroy = function() {
            this.q(), this.H(), this.history.clear(), this.hooks.clear(), this.plugins = [];
          }, e2.force = function(t3) {
            window.location.assign(t3);
          }, e2.go = function(t3, n2, r2) {
            var e3;
            if (void 0 === n2 && (n2 = "barba"), this.transitions.isRunning)
              this.force(t3);
            else if (!(e3 = "popstate" === n2 ? this.history.current && this.url.getPath(this.history.current.url) === this.url.getPath(t3) : this.prevent.run("sameUrl", null, null, t3)) || this.transitions.hasSelf)
              return n2 = this.history.change(t3, n2, r2), r2 && (r2.stopPropagation(), r2.preventDefault()), this.page(t3, n2, e3);
          }, e2.once = function(t3) {
            try {
              var n2 = this;
              return Promise.resolve(n2.hooks.do("beforeEnter", t3)).then(function() {
                function r2() {
                  return Promise.resolve(n2.hooks.do("afterEnter", t3)).then(function() {
                  });
                }
                var e3 = function() {
                  if (n2.transitions.hasOnce) {
                    var r3 = n2.transitions.get(t3, { once: true });
                    return Promise.resolve(n2.transitions.doOnce({ transition: r3, data: t3 })).then(function() {
                    });
                  }
                }();
                return e3 && e3.then ? e3.then(r2) : r2();
              });
            } catch (t4) {
              return Promise.reject(t4);
            }
          }, e2.page = function(t3, n2, e3) {
            try {
              var i2 = function() {
                var t4 = o2.data;
                return Promise.resolve(o2.hooks.do("page", t4)).then(function() {
                  var n3 = s(function() {
                    var n4 = o2.transitions.get(t4, { once: false, self: e3 });
                    return Promise.resolve(o2.transitions.doPage({ data: t4, page: u2, transition: n4, wrapper: o2._ })).then(function() {
                      o2.q();
                    });
                  }, function() {
                    0 === l.getLevel() && o2.force(t4.current.url.href);
                  });
                  if (n3 && n3.then)
                    return n3.then(function() {
                    });
                });
              }, o2 = this;
              o2.data.next.url = r({ href: t3 }, o2.url.parse(t3)), o2.data.trigger = n2;
              var u2 = o2.cache.has(t3) ? o2.cache.update(t3, { action: "click" }).request : o2.cache.set(t3, o2.request(t3, o2.timeout, o2.onRequestError.bind(o2, n2)), "click").request, f2 = function() {
                if (o2.transitions.shouldWait)
                  return Promise.resolve(L(u2, o2.data)).then(function() {
                  });
              }();
              return Promise.resolve(f2 && f2.then ? f2.then(i2) : i2());
            } catch (t4) {
              return Promise.reject(t4);
            }
          }, e2.onRequestError = function(t3) {
            this.transitions.isRunning = false;
            for (var n2 = arguments.length, r2 = new Array(n2 > 1 ? n2 - 1 : 0), e3 = 1; e3 < n2; e3++)
              r2[e3 - 1] = arguments[e3];
            var i2 = r2[0], o2 = r2[1], u2 = this.cache.getAction(i2);
            return this.cache.delete(i2), !(this.$ && false === this.$(t3, u2, i2, o2) || ("click" === u2 && this.force(i2), 1));
          }, e2.prefetch = function(t3) {
            var n2 = this;
            this.cache.has(t3) || this.cache.set(t3, this.request(t3, this.timeout, this.onRequestError.bind(this, "barba")).catch(function(t4) {
              n2.logger.error(t4);
            }), "prefetch");
          }, e2.F = function() {
            true !== this.prefetchIgnore && (document.addEventListener("mouseover", this.B), document.addEventListener("touchstart", this.B)), document.addEventListener("click", this.U), window.addEventListener("popstate", this.D);
          }, e2.H = function() {
            true !== this.prefetchIgnore && (document.removeEventListener("mouseover", this.B), document.removeEventListener("touchstart", this.B)), document.removeEventListener("click", this.U), window.removeEventListener("popstate", this.D);
          }, e2.B = function(t3) {
            var n2 = this, r2 = this.I(t3);
            if (r2) {
              var e3 = this.dom.getHref(r2);
              this.prevent.checkHref(e3) || this.cache.has(e3) || this.cache.set(e3, this.request(e3, this.timeout, this.onRequestError.bind(this, r2)).catch(function(t4) {
                n2.logger.error(t4);
              }), "enter");
            }
          }, e2.U = function(t3) {
            var n2 = this.I(t3);
            if (n2)
              return this.transitions.isRunning && this.preventRunning ? (t3.preventDefault(), void t3.stopPropagation()) : void this.go(this.dom.getHref(n2), n2, t3);
          }, e2.D = function(t3) {
            this.go(this.url.getHref(), "popstate", t3);
          }, e2.I = function(t3) {
            for (var n2 = t3.target; n2 && !this.dom.getHref(n2); )
              n2 = n2.parentNode;
            if (n2 && !this.prevent.checkLink(n2, t3, this.dom.getHref(n2)))
              return n2;
          }, e2.q = function() {
            var t3 = this.url.getHref(), n2 = { container: this.dom.getContainer(), html: this.dom.getHtml(), namespace: this.dom.getNamespace(), url: r({ href: t3 }, this.url.parse(t3)) };
            this.C = { current: n2, next: r({}, this.schemaPage), trigger: void 0 }, this.hooks.do("reset", this.data);
          }, n(t2, [{ key: "data", get: function() {
            return this.C;
          } }, { key: "wrapper", get: function() {
            return this._;
          } }]), t2;
        }())();
      });
    }
  });

  // src/index.ts
  init_live_reload();
  var import_core = __toESM(require_barba_umd(), 1);

  // node_modules/.pnpm/gsap@3.11.5/node_modules/gsap/index.js
  init_live_reload();

  // node_modules/.pnpm/gsap@3.11.5/node_modules/gsap/gsap-core.js
  init_live_reload();
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  var _config = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
      lineHeight: ""
    }
  };
  var _defaults = {
    duration: 0.5,
    overwrite: false,
    delay: 0
  };
  var _suppressOverwrites;
  var _reverting;
  var _context;
  var _bigNum = 1e8;
  var _tinyNum = 1 / _bigNum;
  var _2PI = Math.PI * 2;
  var _HALF_PI = _2PI / 4;
  var _gsID = 0;
  var _sqrt = Math.sqrt;
  var _cos = Math.cos;
  var _sin = Math.sin;
  var _isString = function _isString2(value) {
    return typeof value === "string";
  };
  var _isFunction = function _isFunction2(value) {
    return typeof value === "function";
  };
  var _isNumber = function _isNumber2(value) {
    return typeof value === "number";
  };
  var _isUndefined = function _isUndefined2(value) {
    return typeof value === "undefined";
  };
  var _isObject = function _isObject2(value) {
    return typeof value === "object";
  };
  var _isNotFalse = function _isNotFalse2(value) {
    return value !== false;
  };
  var _windowExists = function _windowExists2() {
    return typeof window !== "undefined";
  };
  var _isFuncOrString = function _isFuncOrString2(value) {
    return _isFunction(value) || _isString(value);
  };
  var _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {
  };
  var _isArray = Array.isArray;
  var _strictNumExp = /(?:-?\.?\d|\.)+/gi;
  var _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g;
  var _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g;
  var _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi;
  var _relExp = /[+-]=-?[.\d]+/;
  var _delimitedValueExp = /[^,'"\[\]\s]+/gi;
  var _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i;
  var _globalTimeline;
  var _win;
  var _coreInitted;
  var _doc;
  var _globals = {};
  var _installScope = {};
  var _coreReady;
  var _install = function _install2(scope) {
    return (_installScope = _merge(scope, _globals)) && gsap;
  };
  var _missingPlugin = function _missingPlugin2(property, value) {
    return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
  };
  var _warn = function _warn2(message, suppress) {
    return !suppress && console.warn(message);
  };
  var _addGlobal = function _addGlobal2(name, obj) {
    return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
  };
  var _emptyFunc = function _emptyFunc2() {
    return 0;
  };
  var _startAtRevertConfig = {
    suppressEvents: true,
    isStart: true,
    kill: false
  };
  var _revertConfigNoKill = {
    suppressEvents: true,
    kill: false
  };
  var _revertConfig = {
    suppressEvents: true
  };
  var _reservedProps = {};
  var _lazyTweens = [];
  var _lazyLookup = {};
  var _lastRenderedFrame;
  var _plugins = {};
  var _effects = {};
  var _nextGCFrame = 30;
  var _harnessPlugins = [];
  var _callbackNames = "";
  var _harness = function _harness2(targets) {
    var target = targets[0], harnessPlugin, i;
    _isObject(target) || _isFunction(target) || (targets = [targets]);
    if (!(harnessPlugin = (target._gsap || {}).harness)) {
      i = _harnessPlugins.length;
      while (i-- && !_harnessPlugins[i].targetTest(target)) {
      }
      harnessPlugin = _harnessPlugins[i];
    }
    i = targets.length;
    while (i--) {
      targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
    }
    return targets;
  };
  var _getCache = function _getCache2(target) {
    return target._gsap || _harness(toArray(target))[0]._gsap;
  };
  var _getProperty = function _getProperty2(target, property, v) {
    return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
  };
  var _forEachName = function _forEachName2(names, func) {
    return (names = names.split(",")).forEach(func) || names;
  };
  var _round = function _round2(value) {
    return Math.round(value * 1e5) / 1e5 || 0;
  };
  var _roundPrecise = function _roundPrecise2(value) {
    return Math.round(value * 1e7) / 1e7 || 0;
  };
  var _parseRelative = function _parseRelative2(start, value) {
    var operator = value.charAt(0), end = parseFloat(value.substr(2));
    start = parseFloat(start);
    return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
  };
  var _arrayContainsAny = function _arrayContainsAny2(toSearch, toFind) {
    var l = toFind.length, i = 0;
    for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l; ) {
    }
    return i < l;
  };
  var _lazyRender = function _lazyRender2() {
    var l = _lazyTweens.length, a = _lazyTweens.slice(0), i, tween;
    _lazyLookup = {};
    _lazyTweens.length = 0;
    for (i = 0; i < l; i++) {
      tween = a[i];
      tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
    }
  };
  var _lazySafeRender = function _lazySafeRender2(animation, time, suppressEvents, force) {
    _lazyTweens.length && !_reverting && _lazyRender();
    animation.render(time, suppressEvents, force || _reverting && time < 0 && (animation._initted || animation._startAt));
    _lazyTweens.length && !_reverting && _lazyRender();
  };
  var _numericIfPossible = function _numericIfPossible2(value) {
    var n = parseFloat(value);
    return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
  };
  var _passThrough = function _passThrough2(p) {
    return p;
  };
  var _setDefaults = function _setDefaults2(obj, defaults2) {
    for (var p in defaults2) {
      p in obj || (obj[p] = defaults2[p]);
    }
    return obj;
  };
  var _setKeyframeDefaults = function _setKeyframeDefaults2(excludeDuration) {
    return function(obj, defaults2) {
      for (var p in defaults2) {
        p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults2[p]);
      }
    };
  };
  var _merge = function _merge2(base, toMerge) {
    for (var p in toMerge) {
      base[p] = toMerge[p];
    }
    return base;
  };
  var _mergeDeep = function _mergeDeep2(base, toMerge) {
    for (var p in toMerge) {
      p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep2(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
    }
    return base;
  };
  var _copyExcluding = function _copyExcluding2(obj, excluding) {
    var copy = {}, p;
    for (p in obj) {
      p in excluding || (copy[p] = obj[p]);
    }
    return copy;
  };
  var _inheritDefaults = function _inheritDefaults2(vars) {
    var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;
    if (_isNotFalse(vars.inherit)) {
      while (parent) {
        func(vars, parent.vars.defaults);
        parent = parent.parent || parent._dp;
      }
    }
    return vars;
  };
  var _arraysMatch = function _arraysMatch2(a1, a2) {
    var i = a1.length, match = i === a2.length;
    while (match && i-- && a1[i] === a2[i]) {
    }
    return i < 0;
  };
  var _addLinkedListItem = function _addLinkedListItem2(parent, child, firstProp, lastProp, sortBy) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }
    if (lastProp === void 0) {
      lastProp = "_last";
    }
    var prev = parent[lastProp], t;
    if (sortBy) {
      t = child[sortBy];
      while (prev && prev[sortBy] > t) {
        prev = prev._prev;
      }
    }
    if (prev) {
      child._next = prev._next;
      prev._next = child;
    } else {
      child._next = parent[firstProp];
      parent[firstProp] = child;
    }
    if (child._next) {
      child._next._prev = child;
    } else {
      parent[lastProp] = child;
    }
    child._prev = prev;
    child.parent = child._dp = parent;
    return child;
  };
  var _removeLinkedListItem = function _removeLinkedListItem2(parent, child, firstProp, lastProp) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }
    if (lastProp === void 0) {
      lastProp = "_last";
    }
    var prev = child._prev, next = child._next;
    if (prev) {
      prev._next = next;
    } else if (parent[firstProp] === child) {
      parent[firstProp] = next;
    }
    if (next) {
      next._prev = prev;
    } else if (parent[lastProp] === child) {
      parent[lastProp] = prev;
    }
    child._next = child._prev = child.parent = null;
  };
  var _removeFromParent = function _removeFromParent2(child, onlyIfParentHasAutoRemove) {
    child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove(child);
    child._act = 0;
  };
  var _uncache = function _uncache2(animation, child) {
    if (animation && (!child || child._end > animation._dur || child._start < 0)) {
      var a = animation;
      while (a) {
        a._dirty = 1;
        a = a.parent;
      }
    }
    return animation;
  };
  var _recacheAncestors = function _recacheAncestors2(animation) {
    var parent = animation.parent;
    while (parent && parent.parent) {
      parent._dirty = 1;
      parent.totalDuration();
      parent = parent.parent;
    }
    return animation;
  };
  var _rewindStartAt = function _rewindStartAt2(tween, totalTime, suppressEvents, force) {
    return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
  };
  var _hasNoPausedAncestors = function _hasNoPausedAncestors2(animation) {
    return !animation || animation._ts && _hasNoPausedAncestors2(animation.parent);
  };
  var _elapsedCycleDuration = function _elapsedCycleDuration2(animation) {
    return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
  };
  var _animationCycle = function _animationCycle2(tTime, cycleDuration) {
    var whole = Math.floor(tTime /= cycleDuration);
    return tTime && whole === tTime ? whole - 1 : whole;
  };
  var _parentToChildTotalTime = function _parentToChildTotalTime2(parentTime, child) {
    return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
  };
  var _setEnd = function _setEnd2(animation) {
    return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
  };
  var _alignPlayhead = function _alignPlayhead2(animation, totalTime) {
    var parent = animation._dp;
    if (parent && parent.smoothChildTiming && animation._ts) {
      animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
      _setEnd(animation);
      parent._dirty || _uncache(parent, animation);
    }
    return animation;
  };
  var _postAddChecks = function _postAddChecks2(timeline2, child) {
    var t;
    if (child._time || child._initted && !child._dur) {
      t = _parentToChildTotalTime(timeline2.rawTime(), child);
      if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
        child.render(t, true);
      }
    }
    if (_uncache(timeline2, child)._dp && timeline2._initted && timeline2._time >= timeline2._dur && timeline2._ts) {
      if (timeline2._dur < timeline2.duration()) {
        t = timeline2;
        while (t._dp) {
          t.rawTime() >= 0 && t.totalTime(t._tTime);
          t = t._dp;
        }
      }
      timeline2._zTime = -_tinyNum;
    }
  };
  var _addToTimeline = function _addToTimeline2(timeline2, child, position, skipChecks) {
    child.parent && _removeFromParent(child);
    child._start = _roundPrecise((_isNumber(position) ? position : position || timeline2 !== _globalTimeline ? _parsePosition(timeline2, position, child) : timeline2._time) + child._delay);
    child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
    _addLinkedListItem(timeline2, child, "_first", "_last", timeline2._sort ? "_start" : 0);
    _isFromOrFromStart(child) || (timeline2._recent = child);
    skipChecks || _postAddChecks(timeline2, child);
    timeline2._ts < 0 && _alignPlayhead(timeline2, timeline2._tTime);
    return timeline2;
  };
  var _scrollTrigger = function _scrollTrigger2(animation, trigger) {
    return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
  };
  var _attemptInitTween = function _attemptInitTween2(tween, time, force, suppressEvents, tTime) {
    _initTween(tween, time, tTime);
    if (!tween._initted) {
      return 1;
    }
    if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
      _lazyTweens.push(tween);
      tween._lazy = [tTime, suppressEvents];
      return 1;
    }
  };
  var _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart2(_ref) {
    var parent = _ref.parent;
    return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart2(parent));
  };
  var _isFromOrFromStart = function _isFromOrFromStart2(_ref2) {
    var data2 = _ref2.data;
    return data2 === "isFromStart" || data2 === "isStart";
  };
  var _renderZeroDurationTween = function _renderZeroDurationTween2(tween, totalTime, suppressEvents, force) {
    var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1, repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
    if (repeatDelay && tween._repeat) {
      tTime = _clamp(0, tween._tDur, totalTime);
      iteration = _animationCycle(tTime, repeatDelay);
      tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
      if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
        prevRatio = 1 - ratio;
        tween.vars.repeatRefresh && tween._initted && tween.invalidate();
      }
    }
    if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
      if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) {
        return;
      }
      prevIteration = tween._zTime;
      tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
      suppressEvents || (suppressEvents = totalTime && !prevIteration);
      tween.ratio = ratio;
      tween._from && (ratio = 1 - ratio);
      tween._time = 0;
      tween._tTime = tTime;
      pt = tween._pt;
      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
      totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
      tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
      tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
      if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
        ratio && _removeFromParent(tween, 1);
        if (!suppressEvents && !_reverting) {
          _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
          tween._prom && tween._prom();
        }
      }
    } else if (!tween._zTime) {
      tween._zTime = totalTime;
    }
  };
  var _findNextPauseTween = function _findNextPauseTween2(animation, prevTime, time) {
    var child;
    if (time > prevTime) {
      child = animation._first;
      while (child && child._start <= time) {
        if (child.data === "isPause" && child._start > prevTime) {
          return child;
        }
        child = child._next;
      }
    } else {
      child = animation._last;
      while (child && child._start >= time) {
        if (child.data === "isPause" && child._start < prevTime) {
          return child;
        }
        child = child._prev;
      }
    }
  };
  var _setDuration = function _setDuration2(animation, duration, skipUncache, leavePlayhead) {
    var repeat = animation._repeat, dur = _roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
    totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
    animation._dur = dur;
    animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
    totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
    animation.parent && _setEnd(animation);
    skipUncache || _uncache(animation.parent, animation);
    return animation;
  };
  var _onUpdateTotalDuration = function _onUpdateTotalDuration2(animation) {
    return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
  };
  var _zeroPosition = {
    _start: 0,
    endTime: _emptyFunc,
    totalDuration: _emptyFunc
  };
  var _parsePosition = function _parsePosition2(animation, position, percentAnimation) {
    var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur, i, offset, isPercent;
    if (_isString(position) && (isNaN(position) || position in labels)) {
      offset = position.charAt(0);
      isPercent = position.substr(-1) === "%";
      i = position.indexOf("=");
      if (offset === "<" || offset === ">") {
        i >= 0 && (position = position.replace(/=/, ""));
        return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
      }
      if (i < 0) {
        position in labels || (labels[position] = clippedDuration);
        return labels[position];
      }
      offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));
      if (isPercent && percentAnimation) {
        offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
      }
      return i > 1 ? _parsePosition2(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
    }
    return position == null ? clippedDuration : +position;
  };
  var _createTweenType = function _createTweenType2(type, params, timeline2) {
    var isLegacy = _isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars, parent;
    isLegacy && (vars.duration = params[1]);
    vars.parent = timeline2;
    if (type) {
      irVars = vars;
      parent = timeline2;
      while (parent && !("immediateRender" in irVars)) {
        irVars = parent.vars.defaults || {};
        parent = _isNotFalse(parent.vars.inherit) && parent.parent;
      }
      vars.immediateRender = _isNotFalse(irVars.immediateRender);
      type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
    }
    return new Tween(params[0], vars, params[varsIndex + 1]);
  };
  var _conditionalReturn = function _conditionalReturn2(value, func) {
    return value || value === 0 ? func(value) : func;
  };
  var _clamp = function _clamp2(min, max, value) {
    return value < min ? min : value > max ? max : value;
  };
  var getUnit = function getUnit2(value, v) {
    return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
  };
  var clamp = function clamp2(min, max, value) {
    return _conditionalReturn(value, function(v) {
      return _clamp(min, max, v);
    });
  };
  var _slice = [].slice;
  var _isArrayLike = function _isArrayLike2(value, nonEmpty) {
    return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
  };
  var _flatten = function _flatten2(ar, leaveStrings, accumulator) {
    if (accumulator === void 0) {
      accumulator = [];
    }
    return ar.forEach(function(value) {
      var _accumulator;
      return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
    }) || accumulator;
  };
  var toArray = function toArray2(value, scope, leaveStrings) {
    return _context && !scope && _context.selector ? _context.selector(value) : _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
  };
  var selector = function selector2(value) {
    value = toArray(value)[0] || _warn("Invalid scope") || {};
    return function(v) {
      var el = value.current || value.nativeElement || value;
      return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
    };
  };
  var shuffle = function shuffle2(a) {
    return a.sort(function() {
      return 0.5 - Math.random();
    });
  };
  var distribute = function distribute2(v) {
    if (_isFunction(v)) {
      return v;
    }
    var vars = _isObject(v) ? v : {
      each: v
    }, ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
    if (_isString(from)) {
      ratioX = ratioY = {
        center: 0.5,
        edges: 0.5,
        end: 1
      }[from] || 0;
    } else if (!isDecimal && ratios) {
      ratioX = from[0];
      ratioY = from[1];
    }
    return function(i, target, a) {
      var l = (a || vars).length, distances = cache[l], originX, originY, x, y, d, j, max, min, wrapAt;
      if (!distances) {
        wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];
        if (!wrapAt) {
          max = -_bigNum;
          while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {
          }
          wrapAt--;
        }
        distances = cache[l] = [];
        originX = ratios ? Math.min(wrapAt, l) * ratioX - 0.5 : from % wrapAt;
        originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - 0.5 : from / wrapAt | 0;
        max = 0;
        min = _bigNum;
        for (j = 0; j < l; j++) {
          x = j % wrapAt - originX;
          y = originY - (j / wrapAt | 0);
          distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
          d > max && (max = d);
          d < min && (min = d);
        }
        from === "random" && shuffle(distances);
        distances.max = max - min;
        distances.min = min;
        distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
        distances.b = l < 0 ? base - l : base;
        distances.u = getUnit(vars.amount || vars.each) || 0;
        ease = ease && l < 0 ? _invertEase(ease) : ease;
      }
      l = (distances[i] - distances.min) / distances.max || 0;
      return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u;
    };
  };
  var _roundModifier = function _roundModifier2(v) {
    var p = Math.pow(10, ((v + "").split(".")[1] || "").length);
    return function(raw) {
      var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);
      return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw));
    };
  };
  var snap = function snap2(snapTo, value) {
    var isArray = _isArray(snapTo), radius, is2D;
    if (!isArray && _isObject(snapTo)) {
      radius = isArray = snapTo.radius || _bigNum;
      if (snapTo.values) {
        snapTo = toArray(snapTo.values);
        if (is2D = !_isNumber(snapTo[0])) {
          radius *= radius;
        }
      } else {
        snapTo = _roundModifier(snapTo.increment);
      }
    }
    return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function(raw) {
      is2D = snapTo(raw);
      return Math.abs(is2D - raw) <= radius ? is2D : raw;
    } : function(raw) {
      var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum, closest = 0, i = snapTo.length, dx, dy;
      while (i--) {
        if (is2D) {
          dx = snapTo[i].x - x;
          dy = snapTo[i].y - y;
          dx = dx * dx + dy * dy;
        } else {
          dx = Math.abs(snapTo[i] - x);
        }
        if (dx < min) {
          min = dx;
          closest = i;
        }
      }
      closest = !radius || min <= radius ? snapTo[closest] : raw;
      return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
    });
  };
  var random = function random2(min, max, roundingIncrement, returnFunction) {
    return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function() {
      return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * 0.99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
    });
  };
  var pipe = function pipe2() {
    for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
      functions[_key] = arguments[_key];
    }
    return function(value) {
      return functions.reduce(function(v, f) {
        return f(v);
      }, value);
    };
  };
  var unitize = function unitize2(func, unit) {
    return function(value) {
      return func(parseFloat(value)) + (unit || getUnit(value));
    };
  };
  var normalize = function normalize2(min, max, value) {
    return mapRange(min, max, 0, 1, value);
  };
  var _wrapArray = function _wrapArray2(a, wrapper, value) {
    return _conditionalReturn(value, function(index) {
      return a[~~wrapper(index)];
    });
  };
  var wrap = function wrap2(min, max, value) {
    var range = max - min;
    return _isArray(min) ? _wrapArray(min, wrap2(0, min.length), max) : _conditionalReturn(value, function(value2) {
      return (range + (value2 - min) % range) % range + min;
    });
  };
  var wrapYoyo = function wrapYoyo2(min, max, value) {
    var range = max - min, total = range * 2;
    return _isArray(min) ? _wrapArray(min, wrapYoyo2(0, min.length - 1), max) : _conditionalReturn(value, function(value2) {
      value2 = (total + (value2 - min) % total) % total || 0;
      return min + (value2 > range ? total - value2 : value2);
    });
  };
  var _replaceRandom = function _replaceRandom2(value) {
    var prev = 0, s = "", i, nums, end, isArray;
    while (~(i = value.indexOf("random(", prev))) {
      end = value.indexOf(")", i);
      isArray = value.charAt(i + 7) === "[";
      nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
      s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
      prev = end + 1;
    }
    return s + value.substr(prev, value.length - prev);
  };
  var mapRange = function mapRange2(inMin, inMax, outMin, outMax, value) {
    var inRange = inMax - inMin, outRange = outMax - outMin;
    return _conditionalReturn(value, function(value2) {
      return outMin + ((value2 - inMin) / inRange * outRange || 0);
    });
  };
  var interpolate = function interpolate2(start, end, progress, mutate) {
    var func = isNaN(start + end) ? 0 : function(p2) {
      return (1 - p2) * start + p2 * end;
    };
    if (!func) {
      var isString = _isString(start), master = {}, p, i, interpolators, l, il;
      progress === true && (mutate = 1) && (progress = null);
      if (isString) {
        start = {
          p: start
        };
        end = {
          p: end
        };
      } else if (_isArray(start) && !_isArray(end)) {
        interpolators = [];
        l = start.length;
        il = l - 2;
        for (i = 1; i < l; i++) {
          interpolators.push(interpolate2(start[i - 1], start[i]));
        }
        l--;
        func = function func2(p2) {
          p2 *= l;
          var i2 = Math.min(il, ~~p2);
          return interpolators[i2](p2 - i2);
        };
        progress = end;
      } else if (!mutate) {
        start = _merge(_isArray(start) ? [] : {}, start);
      }
      if (!interpolators) {
        for (p in end) {
          _addPropTween.call(master, start, p, "get", end[p]);
        }
        func = function func2(p2) {
          return _renderPropTweens(p2, master) || (isString ? start.p : start);
        };
      }
    }
    return _conditionalReturn(progress, func);
  };
  var _getLabelInDirection = function _getLabelInDirection2(timeline2, fromTime, backward) {
    var labels = timeline2.labels, min = _bigNum, p, distance, label;
    for (p in labels) {
      distance = labels[p] - fromTime;
      if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
        label = p;
        min = distance;
      }
    }
    return label;
  };
  var _callback = function _callback2(animation, type, executeLazyFirst) {
    var v = animation.vars, callback = v[type], prevContext = _context, context3 = animation._ctx, params, scope, result;
    if (!callback) {
      return;
    }
    params = v[type + "Params"];
    scope = v.callbackScope || animation;
    executeLazyFirst && _lazyTweens.length && _lazyRender();
    context3 && (_context = context3);
    result = params ? callback.apply(scope, params) : callback.call(scope);
    _context = prevContext;
    return result;
  };
  var _interrupt = function _interrupt2(animation) {
    _removeFromParent(animation);
    animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
    animation.progress() < 1 && _callback(animation, "onInterrupt");
    return animation;
  };
  var _quickTween;
  var _registerPluginQueue = [];
  var _createPlugin = function _createPlugin2(config3) {
    if (!_windowExists()) {
      _registerPluginQueue.push(config3);
      return;
    }
    config3 = !config3.name && config3["default"] || config3;
    var name = config3.name, isFunc = _isFunction(config3), Plugin = name && !isFunc && config3.init ? function() {
      this._props = [];
    } : config3, instanceDefaults = {
      init: _emptyFunc,
      render: _renderPropTweens,
      add: _addPropTween,
      kill: _killPropTweensOf,
      modifier: _addPluginModifier,
      rawVars: 0
    }, statics = {
      targetTest: 0,
      get: 0,
      getSetter: _getSetter,
      aliases: {},
      register: 0
    };
    _wake();
    if (config3 !== Plugin) {
      if (_plugins[name]) {
        return;
      }
      _setDefaults(Plugin, _setDefaults(_copyExcluding(config3, instanceDefaults), statics));
      _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config3, statics)));
      _plugins[Plugin.prop = name] = Plugin;
      if (config3.targetTest) {
        _harnessPlugins.push(Plugin);
        _reservedProps[name] = 1;
      }
      name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
    }
    _addGlobal(name, Plugin);
    config3.register && config3.register(gsap, Plugin, PropTween);
  };
  var _255 = 255;
  var _colorLookup = {
    aqua: [0, _255, _255],
    lime: [0, _255, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, _255],
    navy: [0, 0, 128],
    white: [_255, _255, _255],
    olive: [128, 128, 0],
    yellow: [_255, _255, 0],
    orange: [_255, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [_255, 0, 0],
    pink: [_255, 192, 203],
    cyan: [0, _255, _255],
    transparent: [_255, _255, _255, 0]
  };
  var _hue = function _hue2(h, m1, m2) {
    h += h < 0 ? 1 : h > 1 ? -1 : 0;
    return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < 0.5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + 0.5 | 0;
  };
  var splitColor = function splitColor2(v, toHSL, forceAlpha) {
    var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0, r, g, b, h, s, l, max, min, d, wasHSL;
    if (!a) {
      if (v.substr(-1) === ",") {
        v = v.substr(0, v.length - 1);
      }
      if (_colorLookup[v]) {
        a = _colorLookup[v];
      } else if (v.charAt(0) === "#") {
        if (v.length < 6) {
          r = v.charAt(1);
          g = v.charAt(2);
          b = v.charAt(3);
          v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
        }
        if (v.length === 9) {
          a = parseInt(v.substr(1, 6), 16);
          return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
        }
        v = parseInt(v.substr(1), 16);
        a = [v >> 16, v >> 8 & _255, v & _255];
      } else if (v.substr(0, 3) === "hsl") {
        a = wasHSL = v.match(_strictNumExp);
        if (!toHSL) {
          h = +a[0] % 360 / 360;
          s = +a[1] / 100;
          l = +a[2] / 100;
          g = l <= 0.5 ? l * (s + 1) : l + s - l * s;
          r = l * 2 - g;
          a.length > 3 && (a[3] *= 1);
          a[0] = _hue(h + 1 / 3, r, g);
          a[1] = _hue(h, r, g);
          a[2] = _hue(h - 1 / 3, r, g);
        } else if (~v.indexOf("=")) {
          a = v.match(_numExp);
          forceAlpha && a.length < 4 && (a[3] = 1);
          return a;
        }
      } else {
        a = v.match(_strictNumExp) || _colorLookup.transparent;
      }
      a = a.map(Number);
    }
    if (toHSL && !wasHSL) {
      r = a[0] / _255;
      g = a[1] / _255;
      b = a[2] / _255;
      max = Math.max(r, g, b);
      min = Math.min(r, g, b);
      l = (max + min) / 2;
      if (max === min) {
        h = s = 0;
      } else {
        d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
        h *= 60;
      }
      a[0] = ~~(h + 0.5);
      a[1] = ~~(s * 100 + 0.5);
      a[2] = ~~(l * 100 + 0.5);
    }
    forceAlpha && a.length < 4 && (a[3] = 1);
    return a;
  };
  var _colorOrderData = function _colorOrderData2(v) {
    var values = [], c = [], i = -1;
    v.split(_colorExp).forEach(function(v2) {
      var a = v2.match(_numWithUnitExp) || [];
      values.push.apply(values, a);
      c.push(i += a.length + 1);
    });
    values.c = c;
    return values;
  };
  var _formatColors = function _formatColors2(s, toHSL, orderMatchData) {
    var result = "", colors = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i = 0, c, shell, d, l;
    if (!colors) {
      return s;
    }
    colors = colors.map(function(color) {
      return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
    });
    if (orderMatchData) {
      d = _colorOrderData(s);
      c = orderMatchData.c;
      if (c.join(result) !== d.c.join(result)) {
        shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
        l = shell.length - 1;
        for (; i < l; i++) {
          result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
        }
      }
    }
    if (!shell) {
      shell = s.split(_colorExp);
      l = shell.length - 1;
      for (; i < l; i++) {
        result += shell[i] + colors[i];
      }
    }
    return result + shell[l];
  };
  var _colorExp = function() {
    var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", p;
    for (p in _colorLookup) {
      s += "|" + p + "\\b";
    }
    return new RegExp(s + ")", "gi");
  }();
  var _hslExp = /hsl[a]?\(/;
  var _colorStringFilter = function _colorStringFilter2(a) {
    var combined = a.join(" "), toHSL;
    _colorExp.lastIndex = 0;
    if (_colorExp.test(combined)) {
      toHSL = _hslExp.test(combined);
      a[1] = _formatColors(a[1], toHSL);
      a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
      return true;
    }
  };
  var _tickerActive;
  var _ticker = function() {
    var _getTime = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime(), _lastUpdate = _startTime, _gap = 1e3 / 240, _nextTime = _gap, _listeners2 = [], _id, _req, _raf, _self, _delta, _i, _tick = function _tick2(v) {
      var elapsed = _getTime() - _lastUpdate, manual = v === true, overlap, dispatch, time, frame;
      elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
      _lastUpdate += elapsed;
      time = _lastUpdate - _startTime;
      overlap = time - _nextTime;
      if (overlap > 0 || manual) {
        frame = ++_self.frame;
        _delta = time - _self.time * 1e3;
        _self.time = time = time / 1e3;
        _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
        dispatch = 1;
      }
      manual || (_id = _req(_tick2));
      if (dispatch) {
        for (_i = 0; _i < _listeners2.length; _i++) {
          _listeners2[_i](time, _delta, frame, v);
        }
      }
    };
    _self = {
      time: 0,
      frame: 0,
      tick: function tick() {
        _tick(true);
      },
      deltaRatio: function deltaRatio(fps) {
        return _delta / (1e3 / (fps || 60));
      },
      wake: function wake() {
        if (_coreReady) {
          if (!_coreInitted && _windowExists()) {
            _win = _coreInitted = window;
            _doc = _win.document || {};
            _globals.gsap = gsap;
            (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);
            _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});
            _raf = _win.requestAnimationFrame;
            _registerPluginQueue.forEach(_createPlugin);
          }
          _id && _self.sleep();
          _req = _raf || function(f) {
            return setTimeout(f, _nextTime - _self.time * 1e3 + 1 | 0);
          };
          _tickerActive = 1;
          _tick(2);
        }
      },
      sleep: function sleep() {
        (_raf ? _win.cancelAnimationFrame : clearTimeout)(_id);
        _tickerActive = 0;
        _req = _emptyFunc;
      },
      lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
        _lagThreshold = threshold || Infinity;
        _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
      },
      fps: function fps(_fps) {
        _gap = 1e3 / (_fps || 240);
        _nextTime = _self.time * 1e3 + _gap;
      },
      add: function add(callback, once, prioritize) {
        var func = once ? function(t, d, f, v) {
          callback(t, d, f, v);
          _self.remove(func);
        } : callback;
        _self.remove(callback);
        _listeners2[prioritize ? "unshift" : "push"](func);
        _wake();
        return func;
      },
      remove: function remove(callback, i) {
        ~(i = _listeners2.indexOf(callback)) && _listeners2.splice(i, 1) && _i >= i && _i--;
      },
      _listeners: _listeners2
    };
    return _self;
  }();
  var _wake = function _wake2() {
    return !_tickerActive && _ticker.wake();
  };
  var _easeMap = {};
  var _customEaseExp = /^[\d.\-M][\d.\-,\s]/;
  var _quotesExp = /["']/g;
  var _parseObjectInString = function _parseObjectInString2(value) {
    var obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i = 1, l = split.length, index, val, parsedVal;
    for (; i < l; i++) {
      val = split[i];
      index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
      parsedVal = val.substr(0, index);
      obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
      key = val.substr(index + 1).trim();
    }
    return obj;
  };
  var _valueInParentheses = function _valueInParentheses2(value) {
    var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
    return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
  };
  var _configEaseFromString = function _configEaseFromString2(name) {
    var split = (name + "").split("("), ease = _easeMap[split[0]];
    return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
  };
  var _invertEase = function _invertEase2(ease) {
    return function(p) {
      return 1 - ease(1 - p);
    };
  };
  var _propagateYoyoEase = function _propagateYoyoEase2(timeline2, isYoyo) {
    var child = timeline2._first, ease;
    while (child) {
      if (child instanceof Timeline) {
        _propagateYoyoEase2(child, isYoyo);
      } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
        if (child.timeline) {
          _propagateYoyoEase2(child.timeline, isYoyo);
        } else {
          ease = child._ease;
          child._ease = child._yEase;
          child._yEase = ease;
          child._yoyo = isYoyo;
        }
      }
      child = child._next;
    }
  };
  var _parseEase = function _parseEase2(ease, defaultEase) {
    return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
  };
  var _insertEase = function _insertEase2(names, easeIn, easeOut, easeInOut) {
    if (easeOut === void 0) {
      easeOut = function easeOut2(p) {
        return 1 - easeIn(1 - p);
      };
    }
    if (easeInOut === void 0) {
      easeInOut = function easeInOut2(p) {
        return p < 0.5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
      };
    }
    var ease = {
      easeIn,
      easeOut,
      easeInOut
    }, lowercaseName;
    _forEachName(names, function(name) {
      _easeMap[name] = _globals[name] = ease;
      _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
      for (var p in ease) {
        _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
      }
    });
    return ease;
  };
  var _easeInOutFromOut = function _easeInOutFromOut2(easeOut) {
    return function(p) {
      return p < 0.5 ? (1 - easeOut(1 - p * 2)) / 2 : 0.5 + easeOut((p - 0.5) * 2) / 2;
    };
  };
  var _configElastic = function _configElastic2(type, amplitude, period) {
    var p1 = amplitude >= 1 ? amplitude : 1, p2 = (period || (type ? 0.3 : 0.45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut2(p) {
      return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
      return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);
    p2 = _2PI / p2;
    ease.config = function(amplitude2, period2) {
      return _configElastic2(type, amplitude2, period2);
    };
    return ease;
  };
  var _configBack = function _configBack2(type, overshoot) {
    if (overshoot === void 0) {
      overshoot = 1.70158;
    }
    var easeOut = function easeOut2(p) {
      return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
      return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);
    ease.config = function(overshoot2) {
      return _configBack2(type, overshoot2);
    };
    return ease;
  };
  _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i) {
    var power = i < 5 ? i + 1 : i;
    _insertEase(name + ",Power" + (power - 1), i ? function(p) {
      return Math.pow(p, power);
    } : function(p) {
      return p;
    }, function(p) {
      return 1 - Math.pow(1 - p, power);
    }, function(p) {
      return p < 0.5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
    });
  });
  _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
  _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
  (function(n, c) {
    var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut2(p) {
      return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + 0.75 : p < n3 ? n * (p -= 2.25 / c) * p + 0.9375 : n * Math.pow(p - 2.625 / c, 2) + 0.984375;
    };
    _insertEase("Bounce", function(p) {
      return 1 - easeOut(1 - p);
    }, easeOut);
  })(7.5625, 2.75);
  _insertEase("Expo", function(p) {
    return p ? Math.pow(2, 10 * (p - 1)) : 0;
  });
  _insertEase("Circ", function(p) {
    return -(_sqrt(1 - p * p) - 1);
  });
  _insertEase("Sine", function(p) {
    return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
  });
  _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
  _easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
    config: function config(steps, immediateStart) {
      if (steps === void 0) {
        steps = 1;
      }
      var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
      return function(p) {
        return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
      };
    }
  };
  _defaults.ease = _easeMap["quad.out"];
  _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name) {
    return _callbackNames += name + "," + name + "Params,";
  });
  var GSCache = function GSCache2(target, harness) {
    this.id = _gsID++;
    target._gsap = this;
    this.target = target;
    this.harness = harness;
    this.get = harness ? harness.get : _getProperty;
    this.set = harness ? harness.getSetter : _getSetter;
  };
  var Animation = /* @__PURE__ */ function() {
    function Animation2(vars) {
      this.vars = vars;
      this._delay = +vars.delay || 0;
      if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
        this._rDelay = vars.repeatDelay || 0;
        this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
      }
      this._ts = 1;
      _setDuration(this, +vars.duration, 1, 1);
      this.data = vars.data;
      if (_context) {
        this._ctx = _context;
        _context.data.push(this);
      }
      _tickerActive || _ticker.wake();
    }
    var _proto = Animation2.prototype;
    _proto.delay = function delay(value) {
      if (value || value === 0) {
        this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
        this._delay = value;
        return this;
      }
      return this._delay;
    };
    _proto.duration = function duration(value) {
      return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
    };
    _proto.totalDuration = function totalDuration(value) {
      if (!arguments.length) {
        return this._tDur;
      }
      this._dirty = 0;
      return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
    };
    _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
      _wake();
      if (!arguments.length) {
        return this._tTime;
      }
      var parent = this._dp;
      if (parent && parent.smoothChildTiming && this._ts) {
        _alignPlayhead(this, _totalTime);
        !parent._dp || parent.parent || _postAddChecks(parent, this);
        while (parent && parent.parent) {
          if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
            parent.totalTime(parent._tTime, true);
          }
          parent = parent.parent;
        }
        if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
          _addToTimeline(this._dp, this, this._start - this._delay);
        }
      }
      if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
        this._ts || (this._pTime = _totalTime);
        _lazySafeRender(this, _totalTime, suppressEvents);
      }
      return this;
    };
    _proto.time = function time(value, suppressEvents) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time;
    };
    _proto.totalProgress = function totalProgress(value, suppressEvents) {
      return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
    };
    _proto.progress = function progress(value, suppressEvents) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
    };
    _proto.iteration = function iteration(value, suppressEvents) {
      var cycleDuration = this.duration() + this._rDelay;
      return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
    };
    _proto.timeScale = function timeScale(value) {
      if (!arguments.length) {
        return this._rts === -_tinyNum ? 0 : this._rts;
      }
      if (this._rts === value) {
        return this;
      }
      var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
      this._rts = +value || 0;
      this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
      this.totalTime(_clamp(-Math.abs(this._delay), this._tDur, tTime), true);
      _setEnd(this);
      return _recacheAncestors(this);
    };
    _proto.paused = function paused(value) {
      if (!arguments.length) {
        return this._ps;
      }
      if (this._ps !== value) {
        this._ps = value;
        if (value) {
          this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
          this._ts = this._act = 0;
        } else {
          _wake();
          this._ts = this._rts;
          this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum));
        }
      }
      return this;
    };
    _proto.startTime = function startTime(value) {
      if (arguments.length) {
        this._start = value;
        var parent = this.parent || this._dp;
        parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
        return this;
      }
      return this._start;
    };
    _proto.endTime = function endTime(includeRepeats) {
      return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
    };
    _proto.rawTime = function rawTime(wrapRepeats) {
      var parent = this.parent || this._dp;
      return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
    };
    _proto.revert = function revert(config3) {
      if (config3 === void 0) {
        config3 = _revertConfig;
      }
      var prevIsReverting = _reverting;
      _reverting = config3;
      if (this._initted || this._startAt) {
        this.timeline && this.timeline.revert(config3);
        this.totalTime(-0.01, config3.suppressEvents);
      }
      this.data !== "nested" && config3.kill !== false && this.kill();
      _reverting = prevIsReverting;
      return this;
    };
    _proto.globalTime = function globalTime(rawTime) {
      var animation = this, time = arguments.length ? rawTime : animation.rawTime();
      while (animation) {
        time = animation._start + time / (animation._ts || 1);
        animation = animation._dp;
      }
      return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 : this._sat.globalTime(rawTime) : time;
    };
    _proto.repeat = function repeat(value) {
      if (arguments.length) {
        this._repeat = value === Infinity ? -2 : value;
        return _onUpdateTotalDuration(this);
      }
      return this._repeat === -2 ? Infinity : this._repeat;
    };
    _proto.repeatDelay = function repeatDelay(value) {
      if (arguments.length) {
        var time = this._time;
        this._rDelay = value;
        _onUpdateTotalDuration(this);
        return time ? this.time(time) : this;
      }
      return this._rDelay;
    };
    _proto.yoyo = function yoyo(value) {
      if (arguments.length) {
        this._yoyo = value;
        return this;
      }
      return this._yoyo;
    };
    _proto.seek = function seek(position, suppressEvents) {
      return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
    };
    _proto.restart = function restart(includeDelay, suppressEvents) {
      return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
    };
    _proto.play = function play(from, suppressEvents) {
      from != null && this.seek(from, suppressEvents);
      return this.reversed(false).paused(false);
    };
    _proto.reverse = function reverse(from, suppressEvents) {
      from != null && this.seek(from || this.totalDuration(), suppressEvents);
      return this.reversed(true).paused(false);
    };
    _proto.pause = function pause(atTime, suppressEvents) {
      atTime != null && this.seek(atTime, suppressEvents);
      return this.paused(true);
    };
    _proto.resume = function resume() {
      return this.paused(false);
    };
    _proto.reversed = function reversed(value) {
      if (arguments.length) {
        !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
        return this;
      }
      return this._rts < 0;
    };
    _proto.invalidate = function invalidate() {
      this._initted = this._act = 0;
      this._zTime = -_tinyNum;
      return this;
    };
    _proto.isActive = function isActive() {
      var parent = this.parent || this._dp, start = this._start, rawTime;
      return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
    };
    _proto.eventCallback = function eventCallback(type, callback, params) {
      var vars = this.vars;
      if (arguments.length > 1) {
        if (!callback) {
          delete vars[type];
        } else {
          vars[type] = callback;
          params && (vars[type + "Params"] = params);
          type === "onUpdate" && (this._onUpdate = callback);
        }
        return this;
      }
      return vars[type];
    };
    _proto.then = function then(onFulfilled) {
      var self2 = this;
      return new Promise(function(resolve) {
        var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough, _resolve = function _resolve2() {
          var _then = self2.then;
          self2.then = null;
          _isFunction(f) && (f = f(self2)) && (f.then || f === self2) && (self2.then = _then);
          resolve(f);
          self2.then = _then;
        };
        if (self2._initted && self2.totalProgress() === 1 && self2._ts >= 0 || !self2._tTime && self2._ts < 0) {
          _resolve();
        } else {
          self2._prom = _resolve;
        }
      });
    };
    _proto.kill = function kill() {
      _interrupt(this);
    };
    return Animation2;
  }();
  _setDefaults(Animation.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: false,
    parent: null,
    _initted: false,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -_tinyNum,
    _prom: 0,
    _ps: false,
    _rts: 1
  });
  var Timeline = /* @__PURE__ */ function(_Animation) {
    _inheritsLoose(Timeline2, _Animation);
    function Timeline2(vars, position) {
      var _this;
      if (vars === void 0) {
        vars = {};
      }
      _this = _Animation.call(this, vars) || this;
      _this.labels = {};
      _this.smoothChildTiming = !!vars.smoothChildTiming;
      _this.autoRemoveChildren = !!vars.autoRemoveChildren;
      _this._sort = _isNotFalse(vars.sortChildren);
      _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
      vars.reversed && _this.reverse();
      vars.paused && _this.paused(true);
      vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
      return _this;
    }
    var _proto2 = Timeline2.prototype;
    _proto2.to = function to(targets, vars, position) {
      _createTweenType(0, arguments, this);
      return this;
    };
    _proto2.from = function from(targets, vars, position) {
      _createTweenType(1, arguments, this);
      return this;
    };
    _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
      _createTweenType(2, arguments, this);
      return this;
    };
    _proto2.set = function set(targets, vars, position) {
      vars.duration = 0;
      vars.parent = this;
      _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
      vars.immediateRender = !!vars.immediateRender;
      new Tween(targets, vars, _parsePosition(this, position), 1);
      return this;
    };
    _proto2.call = function call(callback, params, position) {
      return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
    };
    _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.duration = duration;
      vars.stagger = vars.stagger || stagger;
      vars.onComplete = onCompleteAll;
      vars.onCompleteParams = onCompleteAllParams;
      vars.parent = this;
      new Tween(targets, vars, _parsePosition(this, position));
      return this;
    };
    _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.runBackwards = 1;
      _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
      return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
      toVars.startAt = fromVars;
      _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
      return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.render = function render3(totalTime, suppressEvents, force) {
      var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime), crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
      this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
      if (tTime !== this._tTime || force || crossingStart) {
        if (prevTime !== this._time && dur) {
          tTime += this._time - prevTime;
          totalTime += this._time - prevTime;
        }
        time = tTime;
        prevStart = this._start;
        timeScale = this._ts;
        prevPaused = !timeScale;
        if (crossingStart) {
          dur || (prevTime = this._zTime);
          (totalTime || !suppressEvents) && (this._zTime = totalTime);
        }
        if (this._repeat) {
          yoyo = this._yoyo;
          cycleDuration = dur + this._rDelay;
          if (this._repeat < -1 && totalTime < 0) {
            return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
          }
          time = _roundPrecise(tTime % cycleDuration);
          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            iteration = ~~(tTime / cycleDuration);
            if (iteration && iteration === tTime / cycleDuration) {
              time = dur;
              iteration--;
            }
            time > dur && (time = dur);
          }
          prevIteration = _animationCycle(this._tTime, cycleDuration);
          !prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration);
          if (yoyo && iteration & 1) {
            time = dur - time;
            isYoyo = 1;
          }
          if (iteration !== prevIteration && !this._lock) {
            var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
            iteration < prevIteration && (rewinding = !rewinding);
            prevTime = rewinding ? 0 : dur;
            this._lock = 1;
            this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
            this._tTime = tTime;
            !suppressEvents && this.parent && _callback(this, "onRepeat");
            this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
            if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
              return this;
            }
            dur = this._dur;
            tDur = this._tDur;
            if (doesWrap) {
              this._lock = 2;
              prevTime = rewinding ? dur : -1e-4;
              this.render(prevTime, true);
              this.vars.repeatRefresh && !isYoyo && this.invalidate();
            }
            this._lock = 0;
            if (!this._ts && !prevPaused) {
              return this;
            }
            _propagateYoyoEase(this, isYoyo);
          }
        }
        if (this._hasPause && !this._forcing && this._lock < 2) {
          pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));
          if (pauseTween) {
            tTime -= time - (time = pauseTween._start);
          }
        }
        this._tTime = tTime;
        this._time = time;
        this._act = !timeScale;
        if (!this._initted) {
          this._onUpdate = this.vars.onUpdate;
          this._initted = 1;
          this._zTime = totalTime;
          prevTime = 0;
        }
        if (!prevTime && time && !suppressEvents && !iteration) {
          _callback(this, "onStart");
          if (this._tTime !== tTime) {
            return this;
          }
        }
        if (time >= prevTime && totalTime >= 0) {
          child = this._first;
          while (child) {
            next = child._next;
            if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }
              child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = -_tinyNum);
                break;
              }
            }
            child = next;
          }
        } else {
          child = this._last;
          var adjustedTime = totalTime < 0 ? totalTime : time;
          while (child) {
            next = child._prev;
            if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }
              child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && (child._initted || child._startAt));
              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
                break;
              }
            }
            child = next;
          }
        }
        if (pauseTween && !suppressEvents) {
          this.pause();
          pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
          if (this._ts) {
            this._start = prevStart;
            _setEnd(this);
            return this.render(totalTime, suppressEvents, force);
          }
        }
        this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
        if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) {
          if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
            if (!this._lock) {
              (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
              if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
                _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
                this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
              }
            }
          }
        }
      }
      return this;
    };
    _proto2.add = function add(child, position) {
      var _this2 = this;
      _isNumber(position) || (position = _parsePosition(this, position, child));
      if (!(child instanceof Animation)) {
        if (_isArray(child)) {
          child.forEach(function(obj) {
            return _this2.add(obj, position);
          });
          return this;
        }
        if (_isString(child)) {
          return this.addLabel(child, position);
        }
        if (_isFunction(child)) {
          child = Tween.delayedCall(0, child);
        } else {
          return this;
        }
      }
      return this !== child ? _addToTimeline(this, child, position) : this;
    };
    _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
      if (nested === void 0) {
        nested = true;
      }
      if (tweens === void 0) {
        tweens = true;
      }
      if (timelines === void 0) {
        timelines = true;
      }
      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = -_bigNum;
      }
      var a = [], child = this._first;
      while (child) {
        if (child._start >= ignoreBeforeTime) {
          if (child instanceof Tween) {
            tweens && a.push(child);
          } else {
            timelines && a.push(child);
            nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
          }
        }
        child = child._next;
      }
      return a;
    };
    _proto2.getById = function getById2(id) {
      var animations = this.getChildren(1, 1, 1), i = animations.length;
      while (i--) {
        if (animations[i].vars.id === id) {
          return animations[i];
        }
      }
    };
    _proto2.remove = function remove(child) {
      if (_isString(child)) {
        return this.removeLabel(child);
      }
      if (_isFunction(child)) {
        return this.killTweensOf(child);
      }
      _removeLinkedListItem(this, child);
      if (child === this._recent) {
        this._recent = this._last;
      }
      return _uncache(this);
    };
    _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
      if (!arguments.length) {
        return this._tTime;
      }
      this._forcing = 1;
      if (!this._dp && this._ts) {
        this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
      }
      _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
      this._forcing = 0;
      return this;
    };
    _proto2.addLabel = function addLabel(label, position) {
      this.labels[label] = _parsePosition(this, position);
      return this;
    };
    _proto2.removeLabel = function removeLabel(label) {
      delete this.labels[label];
      return this;
    };
    _proto2.addPause = function addPause(position, callback, params) {
      var t = Tween.delayedCall(0, callback || _emptyFunc, params);
      t.data = "isPause";
      this._hasPause = 1;
      return _addToTimeline(this, t, _parsePosition(this, position));
    };
    _proto2.removePause = function removePause(position) {
      var child = this._first;
      position = _parsePosition(this, position);
      while (child) {
        if (child._start === position && child.data === "isPause") {
          _removeFromParent(child);
        }
        child = child._next;
      }
    };
    _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      var tweens = this.getTweensOf(targets, onlyActive), i = tweens.length;
      while (i--) {
        _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
      }
      return this;
    };
    _proto2.getTweensOf = function getTweensOf2(targets, onlyActive) {
      var a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber(onlyActive), children;
      while (child) {
        if (child instanceof Tween) {
          if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
            a.push(child);
          }
        } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
          a.push.apply(a, children);
        }
        child = child._next;
      }
      return a;
    };
    _proto2.tweenTo = function tweenTo(position, vars) {
      vars = vars || {};
      var tl = this, endTime = _parsePosition(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, initted, tween = Tween.to(tl, _setDefaults({
        ease: vars.ease || "none",
        lazy: false,
        immediateRender: false,
        time: endTime,
        overwrite: "auto",
        duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
        onStart: function onStart() {
          tl.pause();
          if (!initted) {
            var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
            tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
            initted = 1;
          }
          _onStart && _onStart.apply(tween, onStartParams || []);
        }
      }, vars));
      return immediateRender ? tween.render(0) : tween;
    };
    _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
      return this.tweenTo(toPosition, _setDefaults({
        startAt: {
          time: _parsePosition(this, fromPosition)
        }
      }, vars));
    };
    _proto2.recent = function recent() {
      return this._recent;
    };
    _proto2.nextLabel = function nextLabel(afterTime) {
      if (afterTime === void 0) {
        afterTime = this._time;
      }
      return _getLabelInDirection(this, _parsePosition(this, afterTime));
    };
    _proto2.previousLabel = function previousLabel(beforeTime) {
      if (beforeTime === void 0) {
        beforeTime = this._time;
      }
      return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
    };
    _proto2.currentLabel = function currentLabel(value) {
      return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
    };
    _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = 0;
      }
      var child = this._first, labels = this.labels, p;
      while (child) {
        if (child._start >= ignoreBeforeTime) {
          child._start += amount;
          child._end += amount;
        }
        child = child._next;
      }
      if (adjustLabels) {
        for (p in labels) {
          if (labels[p] >= ignoreBeforeTime) {
            labels[p] += amount;
          }
        }
      }
      return _uncache(this);
    };
    _proto2.invalidate = function invalidate(soft) {
      var child = this._first;
      this._lock = 0;
      while (child) {
        child.invalidate(soft);
        child = child._next;
      }
      return _Animation.prototype.invalidate.call(this, soft);
    };
    _proto2.clear = function clear(includeLabels) {
      if (includeLabels === void 0) {
        includeLabels = true;
      }
      var child = this._first, next;
      while (child) {
        next = child._next;
        this.remove(child);
        child = next;
      }
      this._dp && (this._time = this._tTime = this._pTime = 0);
      includeLabels && (this.labels = {});
      return _uncache(this);
    };
    _proto2.totalDuration = function totalDuration(value) {
      var max = 0, self2 = this, child = self2._last, prevStart = _bigNum, prev, start, parent;
      if (arguments.length) {
        return self2.timeScale((self2._repeat < 0 ? self2.duration() : self2.totalDuration()) / (self2.reversed() ? -value : value));
      }
      if (self2._dirty) {
        parent = self2.parent;
        while (child) {
          prev = child._prev;
          child._dirty && child.totalDuration();
          start = child._start;
          if (start > prevStart && self2._sort && child._ts && !self2._lock) {
            self2._lock = 1;
            _addToTimeline(self2, child, start - child._delay, 1)._lock = 0;
          } else {
            prevStart = start;
          }
          if (start < 0 && child._ts) {
            max -= start;
            if (!parent && !self2._dp || parent && parent.smoothChildTiming) {
              self2._start += start / self2._ts;
              self2._time -= start;
              self2._tTime -= start;
            }
            self2.shiftChildren(-start, false, -Infinity);
            prevStart = 0;
          }
          child._end > max && child._ts && (max = child._end);
          child = prev;
        }
        _setDuration(self2, self2 === _globalTimeline && self2._time > max ? self2._time : max, 1, 1);
        self2._dirty = 0;
      }
      return self2._tDur;
    };
    Timeline2.updateRoot = function updateRoot(time) {
      if (_globalTimeline._ts) {
        _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
        _lastRenderedFrame = _ticker.frame;
      }
      if (_ticker.frame >= _nextGCFrame) {
        _nextGCFrame += _config.autoSleep || 120;
        var child = _globalTimeline._first;
        if (!child || !child._ts) {
          if (_config.autoSleep && _ticker._listeners.length < 2) {
            while (child && !child._ts) {
              child = child._next;
            }
            child || _ticker.sleep();
          }
        }
      }
    };
    return Timeline2;
  }(Animation);
  _setDefaults(Timeline.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });
  var _addComplexStringPropTween = function _addComplexStringPropTween2(target, prop, start, end, setter, stringFilter, funcParam) {
    var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a;
    pt.b = start;
    pt.e = end;
    start += "";
    end += "";
    if (hasRandom = ~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }
    if (stringFilter) {
      a = [start, end];
      stringFilter(a, target, prop);
      start = a[0];
      end = a[1];
    }
    startNums = start.match(_complexStringNumExp) || [];
    while (result = _complexStringNumExp.exec(end)) {
      endNum = result[0];
      chunk = end.substring(index, result.index);
      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(") {
        color = 1;
      }
      if (endNum !== startNums[matchIndex++]) {
        startNum = parseFloat(startNums[matchIndex - 1]) || 0;
        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
          s: startNum,
          c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
          m: color && color < 4 ? Math.round : 0
        };
        index = _complexStringNumExp.lastIndex;
      }
    }
    pt.c = index < end.length ? end.substring(index, end.length) : "";
    pt.fp = funcParam;
    if (_relExp.test(end) || hasRandom) {
      pt.e = 0;
    }
    this._pt = pt;
    return pt;
  };
  var _addPropTween = function _addPropTween2(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
    _isFunction(end) && (end = end(index || 0, target, targets));
    var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt;
    if (_isString(end)) {
      if (~end.indexOf("random(")) {
        end = _replaceRandom(end);
      }
      if (end.charAt(1) === "=") {
        pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);
        if (pt || pt === 0) {
          end = pt;
        }
      }
    }
    if (!optional || parsedStart !== end || _forceAllPropTweens) {
      if (!isNaN(parsedStart * end) && end !== "") {
        pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
        funcParam && (pt.fp = funcParam);
        modifier && pt.modifier(modifier, this, target);
        return this._pt = pt;
      }
      !currentValue && !(prop in target) && _missingPlugin(prop, end);
      return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
    }
  };
  var _processVars = function _processVars2(vars, index, target, targets, tween) {
    _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
    if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
      return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
    }
    var copy = {}, p;
    for (p in vars) {
      copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
    }
    return copy;
  };
  var _checkPlugin = function _checkPlugin2(property, vars, tween, index, target, targets) {
    var plugin, pt, ptLookup, i;
    if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
      tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
      if (tween !== _quickTween) {
        ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
        i = plugin._props.length;
        while (i--) {
          ptLookup[plugin._props[i]] = pt;
        }
      }
    }
    return plugin;
  };
  var _overwritingTween;
  var _forceAllPropTweens;
  var _initTween = function _initTween2(tween, time, tTime) {
    var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, onUpdateParams = vars.onUpdateParams, callbackScope = vars.callbackScope, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites, tl = tween.timeline, cleanVars, i, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
    tl && (!keyframes || !ease) && (ease = "none");
    tween._ease = _parseEase(ease, _defaults.ease);
    tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;
    if (yoyoEase && tween._yoyo && !tween._repeat) {
      yoyoEase = tween._yEase;
      tween._yEase = tween._ease;
      tween._ease = yoyoEase;
    }
    tween._from = !tl && !!vars.runBackwards;
    if (!tl || keyframes && !vars.stagger) {
      harness = targets[0] ? _getCache(targets[0]).harness : 0;
      harnessVars = harness && vars[harness.prop];
      cleanVars = _copyExcluding(vars, _reservedProps);
      if (prevStartAt) {
        prevStartAt._zTime < 0 && prevStartAt.progress(1);
        time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig);
        prevStartAt._lazy = 0;
      }
      if (startAt) {
        _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
          data: "isStart",
          overwrite: false,
          parent,
          immediateRender: true,
          lazy: !prevStartAt && _isNotFalse(lazy),
          startAt: null,
          delay: 0,
          onUpdate,
          onUpdateParams,
          callbackScope,
          stagger: 0
        }, startAt)));
        tween._startAt._dp = 0;
        tween._startAt._sat = tween;
        time < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill);
        if (immediateRender) {
          if (dur && time <= 0 && tTime <= 0) {
            time && (tween._zTime = time);
            return;
          }
        }
      } else if (runBackwards && dur) {
        if (!prevStartAt) {
          time && (immediateRender = false);
          p = _setDefaults({
            overwrite: false,
            data: "isFromStart",
            //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
            lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
            immediateRender,
            //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
            stagger: 0,
            parent
            //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y:gsap.utils.wrap([-100,100])})
          }, cleanVars);
          harnessVars && (p[harness.prop] = harnessVars);
          _removeFromParent(tween._startAt = Tween.set(targets, p));
          tween._startAt._dp = 0;
          tween._startAt._sat = tween;
          time < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
          tween._zTime = time;
          if (!immediateRender) {
            _initTween2(tween._startAt, _tinyNum, _tinyNum);
          } else if (!time) {
            return;
          }
        }
      }
      tween._pt = tween._ptCache = 0;
      lazy = dur && _isNotFalse(lazy) || lazy && !dur;
      for (i = 0; i < targets.length; i++) {
        target = targets[i];
        gsData = target._gsap || _harness(targets)[i]._gsap;
        tween._ptLookup[i] = ptLookup = {};
        _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
        index = fullTargets === targets ? i : fullTargets.indexOf(target);
        if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
          tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
          plugin._props.forEach(function(name) {
            ptLookup[name] = pt;
          });
          plugin.priority && (hasPriority = 1);
        }
        if (!harness || harnessVars) {
          for (p in cleanVars) {
            if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
              plugin.priority && (hasPriority = 1);
            } else {
              ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
            }
          }
        }
        tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
        if (autoOverwrite && tween._pt) {
          _overwritingTween = tween;
          _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time));
          overwritten = !tween.parent;
          _overwritingTween = 0;
        }
        tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
      }
      hasPriority && _sortPropTweensByPriority(tween);
      tween._onInit && tween._onInit(tween);
    }
    tween._onUpdate = onUpdate;
    tween._initted = (!tween._op || tween._pt) && !overwritten;
    keyframes && time <= 0 && tl.render(_bigNum, true, true);
  };
  var _updatePropTweens = function _updatePropTweens2(tween, property, value, start, startIsRelative, ratio, time) {
    var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property], pt, rootPT, lookup, i;
    if (!ptCache) {
      ptCache = tween._ptCache[property] = [];
      lookup = tween._ptLookup;
      i = tween._targets.length;
      while (i--) {
        pt = lookup[i][property];
        if (pt && pt.d && pt.d._pt) {
          pt = pt.d._pt;
          while (pt && pt.p !== property && pt.fp !== property) {
            pt = pt._next;
          }
        }
        if (!pt) {
          _forceAllPropTweens = 1;
          tween.vars[property] = "+=0";
          _initTween(tween, time);
          _forceAllPropTweens = 0;
          return 1;
        }
        ptCache.push(pt);
      }
    }
    i = ptCache.length;
    while (i--) {
      rootPT = ptCache[i];
      pt = rootPT._pt || rootPT;
      pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
      pt.c = value - pt.s;
      rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e));
      rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b));
    }
  };
  var _addAliasesToVars = function _addAliasesToVars2(targets, vars) {
    var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p, i, aliases;
    if (!propertyAliases) {
      return vars;
    }
    copy = _merge({}, vars);
    for (p in propertyAliases) {
      if (p in copy) {
        aliases = propertyAliases[p].split(",");
        i = aliases.length;
        while (i--) {
          copy[aliases[i]] = copy[p];
        }
      }
    }
    return copy;
  };
  var _parseKeyframe = function _parseKeyframe2(prop, obj, allProps, easeEach) {
    var ease = obj.ease || easeEach || "power1.inOut", p, a;
    if (_isArray(obj)) {
      a = allProps[prop] || (allProps[prop] = []);
      obj.forEach(function(value, i) {
        return a.push({
          t: i / (obj.length - 1) * 100,
          v: value,
          e: ease
        });
      });
    } else {
      for (p in obj) {
        a = allProps[p] || (allProps[p] = []);
        p === "ease" || a.push({
          t: parseFloat(prop),
          v: obj[p],
          e: ease
        });
      }
    }
  };
  var _parseFuncOrString = function _parseFuncOrString2(value, tween, i, target, targets) {
    return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
  };
  var _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert";
  var _staggerPropsToSkip = {};
  _forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function(name) {
    return _staggerPropsToSkip[name] = 1;
  });
  var Tween = /* @__PURE__ */ function(_Animation2) {
    _inheritsLoose(Tween2, _Animation2);
    function Tween2(targets, vars, position, skipInherit) {
      var _this3;
      if (typeof vars === "number") {
        position.duration = vars;
        vars = position;
        position = null;
      }
      _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
      var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults2 = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets), tl, i, copy, l, p, curTarget, staggerFunc, staggerVarsToMerge;
      _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
      _this3._ptLookup = [];
      _this3._overwrite = overwrite;
      if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        vars = _this3.vars;
        tl = _this3.timeline = new Timeline({
          data: "nested",
          defaults: defaults2 || {},
          targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
        });
        tl.kill();
        tl.parent = tl._dp = _assertThisInitialized(_this3);
        tl._start = 0;
        if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
          l = parsedTargets.length;
          staggerFunc = stagger && distribute(stagger);
          if (_isObject(stagger)) {
            for (p in stagger) {
              if (~_staggerTweenProps.indexOf(p)) {
                staggerVarsToMerge || (staggerVarsToMerge = {});
                staggerVarsToMerge[p] = stagger[p];
              }
            }
          }
          for (i = 0; i < l; i++) {
            copy = _copyExcluding(vars, _staggerPropsToSkip);
            copy.stagger = 0;
            yoyoEase && (copy.yoyoEase = yoyoEase);
            staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
            curTarget = parsedTargets[i];
            copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
            copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
            if (!stagger && l === 1 && copy.delay) {
              _this3._delay = delay = copy.delay;
              _this3._start += delay;
              copy.delay = 0;
            }
            tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
            tl._ease = _easeMap.none;
          }
          tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
        } else if (keyframes) {
          _inheritDefaults(_setDefaults(tl.vars.defaults, {
            ease: "none"
          }));
          tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
          var time = 0, a, kf, v;
          if (_isArray(keyframes)) {
            keyframes.forEach(function(frame) {
              return tl.to(parsedTargets, frame, ">");
            });
            tl.duration();
          } else {
            copy = {};
            for (p in keyframes) {
              p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
            }
            for (p in copy) {
              a = copy[p].sort(function(a2, b) {
                return a2.t - b.t;
              });
              time = 0;
              for (i = 0; i < a.length; i++) {
                kf = a[i];
                v = {
                  ease: kf.e,
                  duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
                };
                v[p] = kf.v;
                tl.to(parsedTargets, v, time);
                time += v.duration;
              }
            }
            tl.duration() < duration && tl.to({}, {
              duration: duration - tl.duration()
            });
          }
        }
        duration || _this3.duration(duration = tl.duration());
      } else {
        _this3.timeline = 0;
      }
      if (overwrite === true && !_suppressOverwrites) {
        _overwritingTween = _assertThisInitialized(_this3);
        _globalTimeline.killTweensOf(parsedTargets);
        _overwritingTween = 0;
      }
      _addToTimeline(parent, _assertThisInitialized(_this3), position);
      vars.reversed && _this3.reverse();
      vars.paused && _this3.paused(true);
      if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
        _this3._tTime = -_tinyNum;
        _this3.render(Math.max(0, -delay) || 0);
      }
      scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
      return _this3;
    }
    var _proto3 = Tween2.prototype;
    _proto3.render = function render3(totalTime, suppressEvents, force) {
      var prevTime = this._time, tDur = this._tDur, dur = this._dur, isNegative = totalTime < 0, tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline2, yoyoEase;
      if (!dur) {
        _renderZeroDurationTween(this, totalTime, suppressEvents, force);
      } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative) {
        time = tTime;
        timeline2 = this.timeline;
        if (this._repeat) {
          cycleDuration = dur + this._rDelay;
          if (this._repeat < -1 && isNegative) {
            return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
          }
          time = _roundPrecise(tTime % cycleDuration);
          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            iteration = ~~(tTime / cycleDuration);
            if (iteration && iteration === tTime / cycleDuration) {
              time = dur;
              iteration--;
            }
            time > dur && (time = dur);
          }
          isYoyo = this._yoyo && iteration & 1;
          if (isYoyo) {
            yoyoEase = this._yEase;
            time = dur - time;
          }
          prevIteration = _animationCycle(this._tTime, cycleDuration);
          if (time === prevTime && !force && this._initted) {
            this._tTime = tTime;
            return this;
          }
          if (iteration !== prevIteration) {
            timeline2 && this._yEase && _propagateYoyoEase(timeline2, isYoyo);
            if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
              this._lock = force = 1;
              this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
            }
          }
        }
        if (!this._initted) {
          if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
            this._tTime = 0;
            return this;
          }
          if (prevTime !== this._time) {
            return this;
          }
          if (dur !== this._dur) {
            return this.render(totalTime, suppressEvents, force);
          }
        }
        this._tTime = tTime;
        this._time = time;
        if (!this._act && this._ts) {
          this._act = 1;
          this._lazy = 0;
        }
        this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
        if (this._from) {
          this.ratio = ratio = 1 - ratio;
        }
        if (time && !prevTime && !suppressEvents && !iteration) {
          _callback(this, "onStart");
          if (this._tTime !== tTime) {
            return this;
          }
        }
        pt = this._pt;
        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }
        timeline2 && timeline2.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline2._dur * timeline2._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
        if (this._onUpdate && !suppressEvents) {
          isNegative && _rewindStartAt(this, totalTime, suppressEvents, force);
          _callback(this, "onUpdate");
        }
        this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
        if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
          isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
          (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
          if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
            _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
          }
        }
      }
      return this;
    };
    _proto3.targets = function targets() {
      return this._targets;
    };
    _proto3.invalidate = function invalidate(soft) {
      (!soft || !this.vars.runBackwards) && (this._startAt = 0);
      this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
      this._ptLookup = [];
      this.timeline && this.timeline.invalidate(soft);
      return _Animation2.prototype.invalidate.call(this, soft);
    };
    _proto3.resetTo = function resetTo(property, value, start, startIsRelative) {
      _tickerActive || _ticker.wake();
      this._ts || this.play();
      var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts), ratio;
      this._initted || _initTween(this, time);
      ratio = this._ease(time / this._dur);
      if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time)) {
        return this.resetTo(property, value, start, startIsRelative);
      }
      _alignPlayhead(this, 0);
      this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
      return this.render(0);
    };
    _proto3.kill = function kill(targets, vars) {
      if (vars === void 0) {
        vars = "all";
      }
      if (!targets && (!vars || vars === "all")) {
        this._lazy = this._pt = 0;
        return this.parent ? _interrupt(this) : this;
      }
      if (this.timeline) {
        var tDur = this.timeline.totalDuration();
        this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
        this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
        return this;
      }
      var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i;
      if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
        vars === "all" && (this._pt = 0);
        return _interrupt(this);
      }
      overwrittenProps = this._op = this._op || [];
      if (vars !== "all") {
        if (_isString(vars)) {
          p = {};
          _forEachName(vars, function(name) {
            return p[name] = 1;
          });
          vars = p;
        }
        vars = _addAliasesToVars(parsedTargets, vars);
      }
      i = parsedTargets.length;
      while (i--) {
        if (~killingTargets.indexOf(parsedTargets[i])) {
          curLookup = propTweenLookup[i];
          if (vars === "all") {
            overwrittenProps[i] = vars;
            props = curLookup;
            curOverwriteProps = {};
          } else {
            curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
            props = vars;
          }
          for (p in props) {
            pt = curLookup && curLookup[p];
            if (pt) {
              if (!("kill" in pt.d) || pt.d.kill(p) === true) {
                _removeLinkedListItem(this, pt, "_pt");
              }
              delete curLookup[p];
            }
            if (curOverwriteProps !== "all") {
              curOverwriteProps[p] = 1;
            }
          }
        }
      }
      this._initted && !this._pt && firstPT && _interrupt(this);
      return this;
    };
    Tween2.to = function to(targets, vars) {
      return new Tween2(targets, vars, arguments[2]);
    };
    Tween2.from = function from(targets, vars) {
      return _createTweenType(1, arguments);
    };
    Tween2.delayedCall = function delayedCall(delay, callback, params, scope) {
      return new Tween2(callback, 0, {
        immediateRender: false,
        lazy: false,
        overwrite: false,
        delay,
        onComplete: callback,
        onReverseComplete: callback,
        onCompleteParams: params,
        onReverseCompleteParams: params,
        callbackScope: scope
      });
    };
    Tween2.fromTo = function fromTo(targets, fromVars, toVars) {
      return _createTweenType(2, arguments);
    };
    Tween2.set = function set(targets, vars) {
      vars.duration = 0;
      vars.repeatDelay || (vars.repeat = 0);
      return new Tween2(targets, vars);
    };
    Tween2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      return _globalTimeline.killTweensOf(targets, props, onlyActive);
    };
    return Tween2;
  }(Animation);
  _setDefaults(Tween.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  });
  _forEachName("staggerTo,staggerFrom,staggerFromTo", function(name) {
    Tween[name] = function() {
      var tl = new Timeline(), params = _slice.call(arguments, 0);
      params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
      return tl[name].apply(tl, params);
    };
  });
  var _setterPlain = function _setterPlain2(target, property, value) {
    return target[property] = value;
  };
  var _setterFunc = function _setterFunc2(target, property, value) {
    return target[property](value);
  };
  var _setterFuncWithParam = function _setterFuncWithParam2(target, property, value, data2) {
    return target[property](data2.fp, value);
  };
  var _setterAttribute = function _setterAttribute2(target, property, value) {
    return target.setAttribute(property, value);
  };
  var _getSetter = function _getSetter2(target, property) {
    return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
  };
  var _renderPlain = function _renderPlain2(ratio, data2) {
    return data2.set(data2.t, data2.p, Math.round((data2.s + data2.c * ratio) * 1e6) / 1e6, data2);
  };
  var _renderBoolean = function _renderBoolean2(ratio, data2) {
    return data2.set(data2.t, data2.p, !!(data2.s + data2.c * ratio), data2);
  };
  var _renderComplexString = function _renderComplexString2(ratio, data2) {
    var pt = data2._pt, s = "";
    if (!ratio && data2.b) {
      s = data2.b;
    } else if (ratio === 1 && data2.e) {
      s = data2.e;
    } else {
      while (pt) {
        s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 1e4) / 1e4) + s;
        pt = pt._next;
      }
      s += data2.c;
    }
    data2.set(data2.t, data2.p, s, data2);
  };
  var _renderPropTweens = function _renderPropTweens2(ratio, data2) {
    var pt = data2._pt;
    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }
  };
  var _addPluginModifier = function _addPluginModifier2(modifier, tween, target, property) {
    var pt = this._pt, next;
    while (pt) {
      next = pt._next;
      pt.p === property && pt.modifier(modifier, tween, target);
      pt = next;
    }
  };
  var _killPropTweensOf = function _killPropTweensOf2(property) {
    var pt = this._pt, hasNonDependentRemaining, next;
    while (pt) {
      next = pt._next;
      if (pt.p === property && !pt.op || pt.op === property) {
        _removeLinkedListItem(this, pt, "_pt");
      } else if (!pt.dep) {
        hasNonDependentRemaining = 1;
      }
      pt = next;
    }
    return !hasNonDependentRemaining;
  };
  var _setterWithModifier = function _setterWithModifier2(target, property, value, data2) {
    data2.mSet(target, property, data2.m.call(data2.tween, value, data2.mt), data2);
  };
  var _sortPropTweensByPriority = function _sortPropTweensByPriority2(parent) {
    var pt = parent._pt, next, pt2, first, last;
    while (pt) {
      next = pt._next;
      pt2 = first;
      while (pt2 && pt2.pr > pt.pr) {
        pt2 = pt2._next;
      }
      if (pt._prev = pt2 ? pt2._prev : last) {
        pt._prev._next = pt;
      } else {
        first = pt;
      }
      if (pt._next = pt2) {
        pt2._prev = pt;
      } else {
        last = pt;
      }
      pt = next;
    }
    parent._pt = first;
  };
  var PropTween = /* @__PURE__ */ function() {
    function PropTween2(next, target, prop, start, change, renderer, data2, setter, priority) {
      this.t = target;
      this.s = start;
      this.c = change;
      this.p = prop;
      this.r = renderer || _renderPlain;
      this.d = data2 || this;
      this.set = setter || _setterPlain;
      this.pr = priority || 0;
      this._next = next;
      if (next) {
        next._prev = this;
      }
    }
    var _proto4 = PropTween2.prototype;
    _proto4.modifier = function modifier(func, tween, target) {
      this.mSet = this.mSet || this.set;
      this.set = _setterWithModifier;
      this.m = func;
      this.mt = target;
      this.tween = tween;
    };
    return PropTween2;
  }();
  _forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(name) {
    return _reservedProps[name] = 1;
  });
  _globals.TweenMax = _globals.TweenLite = Tween;
  _globals.TimelineLite = _globals.TimelineMax = Timeline;
  _globalTimeline = new Timeline({
    sortChildren: false,
    defaults: _defaults,
    autoRemoveChildren: true,
    id: "root",
    smoothChildTiming: true
  });
  _config.stringFilter = _colorStringFilter;
  var _media = [];
  var _listeners = {};
  var _emptyArray = [];
  var _lastMediaTime = 0;
  var _dispatch = function _dispatch2(type) {
    return (_listeners[type] || _emptyArray).map(function(f) {
      return f();
    });
  };
  var _onMediaChange = function _onMediaChange2() {
    var time = Date.now(), matches = [];
    if (time - _lastMediaTime > 2) {
      _dispatch("matchMediaInit");
      _media.forEach(function(c) {
        var queries = c.queries, conditions = c.conditions, match, p, anyMatch, toggled;
        for (p in queries) {
          match = _win.matchMedia(queries[p]).matches;
          match && (anyMatch = 1);
          if (match !== conditions[p]) {
            conditions[p] = match;
            toggled = 1;
          }
        }
        if (toggled) {
          c.revert();
          anyMatch && matches.push(c);
        }
      });
      _dispatch("matchMediaRevert");
      matches.forEach(function(c) {
        return c.onMatch(c);
      });
      _lastMediaTime = time;
      _dispatch("matchMedia");
    }
  };
  var Context = /* @__PURE__ */ function() {
    function Context2(func, scope) {
      this.selector = scope && selector(scope);
      this.data = [];
      this._r = [];
      this.isReverted = false;
      func && this.add(func);
    }
    var _proto5 = Context2.prototype;
    _proto5.add = function add(name, func, scope) {
      if (_isFunction(name)) {
        scope = func;
        func = name;
        name = _isFunction;
      }
      var self2 = this, f = function f2() {
        var prev = _context, prevSelector = self2.selector, result;
        prev && prev !== self2 && prev.data.push(self2);
        scope && (self2.selector = selector(scope));
        _context = self2;
        result = func.apply(self2, arguments);
        _isFunction(result) && self2._r.push(result);
        _context = prev;
        self2.selector = prevSelector;
        self2.isReverted = false;
        return result;
      };
      self2.last = f;
      return name === _isFunction ? f(self2) : name ? self2[name] = f : f;
    };
    _proto5.ignore = function ignore(func) {
      var prev = _context;
      _context = null;
      func(this);
      _context = prev;
    };
    _proto5.getTweens = function getTweens() {
      var a = [];
      this.data.forEach(function(e) {
        return e instanceof Context2 ? a.push.apply(a, e.getTweens()) : e instanceof Tween && !(e.parent && e.parent.data === "nested") && a.push(e);
      });
      return a;
    };
    _proto5.clear = function clear() {
      this._r.length = this.data.length = 0;
    };
    _proto5.kill = function kill(revert, matchMedia2) {
      var _this4 = this;
      if (revert) {
        var tweens = this.getTweens();
        this.data.forEach(function(t) {
          if (t.data === "isFlip") {
            t.revert();
            t.getChildren(true, true, false).forEach(function(tween) {
              return tweens.splice(tweens.indexOf(tween), 1);
            });
          }
        });
        tweens.map(function(t) {
          return {
            g: t.globalTime(0),
            t
          };
        }).sort(function(a, b) {
          return b.g - a.g || -1;
        }).forEach(function(o) {
          return o.t.revert(revert);
        });
        this.data.forEach(function(e) {
          return !(e instanceof Animation) && e.revert && e.revert(revert);
        });
        this._r.forEach(function(f) {
          return f(revert, _this4);
        });
        this.isReverted = true;
      } else {
        this.data.forEach(function(e) {
          return e.kill && e.kill();
        });
      }
      this.clear();
      if (matchMedia2) {
        var i = _media.indexOf(this);
        !!~i && _media.splice(i, 1);
      }
    };
    _proto5.revert = function revert(config3) {
      this.kill(config3 || {});
    };
    return Context2;
  }();
  var MatchMedia = /* @__PURE__ */ function() {
    function MatchMedia2(scope) {
      this.contexts = [];
      this.scope = scope;
    }
    var _proto6 = MatchMedia2.prototype;
    _proto6.add = function add(conditions, func, scope) {
      _isObject(conditions) || (conditions = {
        matches: conditions
      });
      var context3 = new Context(0, scope || this.scope), cond = context3.conditions = {}, mq, p, active;
      this.contexts.push(context3);
      func = context3.add("onMatch", func);
      context3.queries = conditions;
      for (p in conditions) {
        if (p === "all") {
          active = 1;
        } else {
          mq = _win.matchMedia(conditions[p]);
          if (mq) {
            _media.indexOf(context3) < 0 && _media.push(context3);
            (cond[p] = mq.matches) && (active = 1);
            mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
          }
        }
      }
      active && func(context3);
      return this;
    };
    _proto6.revert = function revert(config3) {
      this.kill(config3 || {});
    };
    _proto6.kill = function kill(revert) {
      this.contexts.forEach(function(c) {
        return c.kill(revert, true);
      });
    };
    return MatchMedia2;
  }();
  var _gsap = {
    registerPlugin: function registerPlugin() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      args.forEach(function(config3) {
        return _createPlugin(config3);
      });
    },
    timeline: function timeline(vars) {
      return new Timeline(vars);
    },
    getTweensOf: function getTweensOf(targets, onlyActive) {
      return _globalTimeline.getTweensOf(targets, onlyActive);
    },
    getProperty: function getProperty(target, property, unit, uncache) {
      _isString(target) && (target = toArray(target)[0]);
      var getter = _getCache(target || {}).get, format = unit ? _passThrough : _numericIfPossible;
      unit === "native" && (unit = "");
      return !target ? target : !property ? function(property2, unit2, uncache2) {
        return format((_plugins[property2] && _plugins[property2].get || getter)(target, property2, unit2, uncache2));
      } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    },
    quickSetter: function quickSetter(target, property, unit) {
      target = toArray(target);
      if (target.length > 1) {
        var setters = target.map(function(t) {
          return gsap.quickSetter(t, property, unit);
        }), l = setters.length;
        return function(value) {
          var i = l;
          while (i--) {
            setters[i](value);
          }
        };
      }
      target = target[0] || {};
      var Plugin = _plugins[property], cache = _getCache(target), p = cache.harness && (cache.harness.aliases || {})[property] || property, setter = Plugin ? function(value) {
        var p2 = new Plugin();
        _quickTween._pt = 0;
        p2.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
        p2.render(1, p2);
        _quickTween._pt && _renderPropTweens(1, _quickTween);
      } : cache.set(target, p);
      return Plugin ? setter : function(value) {
        return setter(target, p, unit ? value + unit : value, cache, 1);
      };
    },
    quickTo: function quickTo(target, property, vars) {
      var _merge22;
      var tween = gsap.to(target, _merge((_merge22 = {}, _merge22[property] = "+=0.1", _merge22.paused = true, _merge22), vars || {})), func = function func2(value, start, startIsRelative) {
        return tween.resetTo(property, value, start, startIsRelative);
      };
      func.tween = tween;
      return func;
    },
    isTweening: function isTweening(targets) {
      return _globalTimeline.getTweensOf(targets, true).length > 0;
    },
    defaults: function defaults(value) {
      value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
      return _mergeDeep(_defaults, value || {});
    },
    config: function config2(value) {
      return _mergeDeep(_config, value || {});
    },
    registerEffect: function registerEffect(_ref3) {
      var name = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults2 = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
      (plugins || "").split(",").forEach(function(pluginName) {
        return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
      });
      _effects[name] = function(targets, vars, tl) {
        return effect(toArray(targets), _setDefaults(vars || {}, defaults2), tl);
      };
      if (extendTimeline) {
        Timeline.prototype[name] = function(targets, vars, position) {
          return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
        };
      }
    },
    registerEase: function registerEase(name, ease) {
      _easeMap[name] = _parseEase(ease);
    },
    parseEase: function parseEase(ease, defaultEase) {
      return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
    },
    getById: function getById(id) {
      return _globalTimeline.getById(id);
    },
    exportRoot: function exportRoot(vars, includeDelayedCalls) {
      if (vars === void 0) {
        vars = {};
      }
      var tl = new Timeline(vars), child, next;
      tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
      _globalTimeline.remove(tl);
      tl._dp = 0;
      tl._time = tl._tTime = _globalTimeline._time;
      child = _globalTimeline._first;
      while (child) {
        next = child._next;
        if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
          _addToTimeline(tl, child, child._start - child._delay);
        }
        child = next;
      }
      _addToTimeline(_globalTimeline, tl, 0);
      return tl;
    },
    context: function context(func, scope) {
      return func ? new Context(func, scope) : _context;
    },
    matchMedia: function matchMedia(scope) {
      return new MatchMedia(scope);
    },
    matchMediaRefresh: function matchMediaRefresh() {
      return _media.forEach(function(c) {
        var cond = c.conditions, found, p;
        for (p in cond) {
          if (cond[p]) {
            cond[p] = false;
            found = 1;
          }
        }
        found && c.revert();
      }) || _onMediaChange();
    },
    addEventListener: function addEventListener(type, callback) {
      var a = _listeners[type] || (_listeners[type] = []);
      ~a.indexOf(callback) || a.push(callback);
    },
    removeEventListener: function removeEventListener(type, callback) {
      var a = _listeners[type], i = a && a.indexOf(callback);
      i >= 0 && a.splice(i, 1);
    },
    utils: {
      wrap,
      wrapYoyo,
      distribute,
      random,
      snap,
      normalize,
      getUnit,
      clamp,
      splitColor,
      toArray,
      selector,
      mapRange,
      pipe,
      unitize,
      interpolate,
      shuffle
    },
    install: _install,
    effects: _effects,
    ticker: _ticker,
    updateRoot: Timeline.updateRoot,
    plugins: _plugins,
    globalTimeline: _globalTimeline,
    core: {
      PropTween,
      globals: _addGlobal,
      Tween,
      Timeline,
      Animation,
      getCache: _getCache,
      _removeLinkedListItem,
      reverting: function reverting() {
        return _reverting;
      },
      context: function context2(toAdd) {
        if (toAdd && _context) {
          _context.data.push(toAdd);
          toAdd._ctx = _context;
        }
        return _context;
      },
      suppressOverwrites: function suppressOverwrites(value) {
        return _suppressOverwrites = value;
      }
    }
  };
  _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function(name) {
    return _gsap[name] = Tween[name];
  });
  _ticker.add(Timeline.updateRoot);
  _quickTween = _gsap.to({}, {
    duration: 0
  });
  var _getPluginPropTween = function _getPluginPropTween2(plugin, prop) {
    var pt = plugin._pt;
    while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
      pt = pt._next;
    }
    return pt;
  };
  var _addModifiers = function _addModifiers2(tween, modifiers) {
    var targets = tween._targets, p, i, pt;
    for (p in modifiers) {
      i = targets.length;
      while (i--) {
        pt = tween._ptLookup[i][p];
        if (pt && (pt = pt.d)) {
          if (pt._pt) {
            pt = _getPluginPropTween(pt, p);
          }
          pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
        }
      }
    }
  };
  var _buildModifierPlugin = function _buildModifierPlugin2(name, modifier) {
    return {
      name,
      rawVars: 1,
      //don't pre-process function-based values or "random()" strings.
      init: function init4(target, vars, tween) {
        tween._onInit = function(tween2) {
          var temp, p;
          if (_isString(vars)) {
            temp = {};
            _forEachName(vars, function(name2) {
              return temp[name2] = 1;
            });
            vars = temp;
          }
          if (modifier) {
            temp = {};
            for (p in vars) {
              temp[p] = modifier(vars[p]);
            }
            vars = temp;
          }
          _addModifiers(tween2, vars);
        };
      }
    };
  };
  var gsap = _gsap.registerPlugin({
    name: "attr",
    init: function init(target, vars, tween, index, targets) {
      var p, pt, v;
      this.tween = tween;
      for (p in vars) {
        v = target.getAttribute(p) || "";
        pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
        pt.op = p;
        pt.b = v;
        this._props.push(p);
      }
    },
    render: function render(ratio, data2) {
      var pt = data2._pt;
      while (pt) {
        _reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d);
        pt = pt._next;
      }
    }
  }, {
    name: "endArray",
    init: function init2(target, value) {
      var i = value.length;
      while (i--) {
        this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
      }
    }
  }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
  Tween.version = Timeline.version = gsap.version = "3.11.5";
  _coreReady = 1;
  _windowExists() && _wake();
  var Power0 = _easeMap.Power0;
  var Power1 = _easeMap.Power1;
  var Power2 = _easeMap.Power2;
  var Power3 = _easeMap.Power3;
  var Power4 = _easeMap.Power4;
  var Linear = _easeMap.Linear;
  var Quad = _easeMap.Quad;
  var Cubic = _easeMap.Cubic;
  var Quart = _easeMap.Quart;
  var Quint = _easeMap.Quint;
  var Strong = _easeMap.Strong;
  var Elastic = _easeMap.Elastic;
  var Back = _easeMap.Back;
  var SteppedEase = _easeMap.SteppedEase;
  var Bounce = _easeMap.Bounce;
  var Sine = _easeMap.Sine;
  var Expo = _easeMap.Expo;
  var Circ = _easeMap.Circ;

  // node_modules/.pnpm/gsap@3.11.5/node_modules/gsap/CSSPlugin.js
  init_live_reload();
  var _win2;
  var _doc2;
  var _docElement;
  var _pluginInitted;
  var _tempDiv;
  var _tempDivStyler;
  var _recentSetterPlugin;
  var _reverting2;
  var _windowExists3 = function _windowExists4() {
    return typeof window !== "undefined";
  };
  var _transformProps = {};
  var _RAD2DEG = 180 / Math.PI;
  var _DEG2RAD = Math.PI / 180;
  var _atan2 = Math.atan2;
  var _bigNum2 = 1e8;
  var _capsExp = /([A-Z])/g;
  var _horizontalExp = /(left|right|width|margin|padding|x)/i;
  var _complexExp = /[\s,\(]\S/;
  var _propertyAliases = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  };
  var _renderCSSProp = function _renderCSSProp2(ratio, data2) {
    return data2.set(data2.t, data2.p, Math.round((data2.s + data2.c * ratio) * 1e4) / 1e4 + data2.u, data2);
  };
  var _renderPropWithEnd = function _renderPropWithEnd2(ratio, data2) {
    return data2.set(data2.t, data2.p, ratio === 1 ? data2.e : Math.round((data2.s + data2.c * ratio) * 1e4) / 1e4 + data2.u, data2);
  };
  var _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning2(ratio, data2) {
    return data2.set(data2.t, data2.p, ratio ? Math.round((data2.s + data2.c * ratio) * 1e4) / 1e4 + data2.u : data2.b, data2);
  };
  var _renderRoundedCSSProp = function _renderRoundedCSSProp2(ratio, data2) {
    var value = data2.s + data2.c * ratio;
    data2.set(data2.t, data2.p, ~~(value + (value < 0 ? -0.5 : 0.5)) + data2.u, data2);
  };
  var _renderNonTweeningValue = function _renderNonTweeningValue2(ratio, data2) {
    return data2.set(data2.t, data2.p, ratio ? data2.e : data2.b, data2);
  };
  var _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd2(ratio, data2) {
    return data2.set(data2.t, data2.p, ratio !== 1 ? data2.b : data2.e, data2);
  };
  var _setterCSSStyle = function _setterCSSStyle2(target, property, value) {
    return target.style[property] = value;
  };
  var _setterCSSProp = function _setterCSSProp2(target, property, value) {
    return target.style.setProperty(property, value);
  };
  var _setterTransform = function _setterTransform2(target, property, value) {
    return target._gsap[property] = value;
  };
  var _setterScale = function _setterScale2(target, property, value) {
    return target._gsap.scaleX = target._gsap.scaleY = value;
  };
  var _setterScaleWithRender = function _setterScaleWithRender2(target, property, value, data2, ratio) {
    var cache = target._gsap;
    cache.scaleX = cache.scaleY = value;
    cache.renderTransform(ratio, cache);
  };
  var _setterTransformWithRender = function _setterTransformWithRender2(target, property, value, data2, ratio) {
    var cache = target._gsap;
    cache[property] = value;
    cache.renderTransform(ratio, cache);
  };
  var _transformProp = "transform";
  var _transformOriginProp = _transformProp + "Origin";
  var _saveStyle = function _saveStyle2(property, isNotCSS) {
    var _this = this;
    var target = this.target, style = target.style;
    if (property in _transformProps) {
      this.tfm = this.tfm || {};
      if (property !== "transform") {
        property = _propertyAliases[property] || property;
        ~property.indexOf(",") ? property.split(",").forEach(function(a) {
          return _this.tfm[a] = _get(target, a);
        }) : this.tfm[property] = target._gsap.x ? target._gsap[property] : _get(target, property);
      } else {
        return _propertyAliases.transform.split(",").forEach(function(p) {
          return _saveStyle2.call(_this, p, isNotCSS);
        });
      }
      if (this.props.indexOf(_transformProp) >= 0) {
        return;
      }
      if (target._gsap.svg) {
        this.svgo = target.getAttribute("data-svg-origin");
        this.props.push(_transformOriginProp, isNotCSS, "");
      }
      property = _transformProp;
    }
    (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
  };
  var _removeIndependentTransforms = function _removeIndependentTransforms2(style) {
    if (style.translate) {
      style.removeProperty("translate");
      style.removeProperty("scale");
      style.removeProperty("rotate");
    }
  };
  var _revertStyle = function _revertStyle2() {
    var props = this.props, target = this.target, style = target.style, cache = target._gsap, i, p;
    for (i = 0; i < props.length; i += 3) {
      props[i + 1] ? target[props[i]] = props[i + 2] : props[i + 2] ? style[props[i]] = props[i + 2] : style.removeProperty(props[i].substr(0, 2) === "--" ? props[i] : props[i].replace(_capsExp, "-$1").toLowerCase());
    }
    if (this.tfm) {
      for (p in this.tfm) {
        cache[p] = this.tfm[p];
      }
      if (cache.svg) {
        cache.renderTransform();
        target.setAttribute("data-svg-origin", this.svgo || "");
      }
      i = _reverting2();
      if ((!i || !i.isStart) && !style[_transformProp]) {
        _removeIndependentTransforms(style);
        cache.uncache = 1;
      }
    }
  };
  var _getStyleSaver = function _getStyleSaver2(target, properties) {
    var saver = {
      target,
      props: [],
      revert: _revertStyle,
      save: _saveStyle
    };
    target._gsap || gsap.core.getCache(target);
    properties && properties.split(",").forEach(function(p) {
      return saver.save(p);
    });
    return saver;
  };
  var _supports3D;
  var _createElement = function _createElement2(type, ns) {
    var e = _doc2.createElementNS ? _doc2.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc2.createElement(type);
    return e.style ? e : _doc2.createElement(type);
  };
  var _getComputedProperty = function _getComputedProperty2(target, property, skipPrefixFallback) {
    var cs = getComputedStyle(target);
    return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty2(target, _checkPropPrefix(property) || property, 1) || "";
  };
  var _prefixes = "O,Moz,ms,Ms,Webkit".split(",");
  var _checkPropPrefix = function _checkPropPrefix2(property, element, preferPrefix) {
    var e = element || _tempDiv, s = e.style, i = 5;
    if (property in s && !preferPrefix) {
      return property;
    }
    property = property.charAt(0).toUpperCase() + property.substr(1);
    while (i-- && !(_prefixes[i] + property in s)) {
    }
    return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
  };
  var _initCore = function _initCore2() {
    if (_windowExists3() && window.document) {
      _win2 = window;
      _doc2 = _win2.document;
      _docElement = _doc2.documentElement;
      _tempDiv = _createElement("div") || {
        style: {}
      };
      _tempDivStyler = _createElement("div");
      _transformProp = _checkPropPrefix(_transformProp);
      _transformOriginProp = _transformProp + "Origin";
      _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
      _supports3D = !!_checkPropPrefix("perspective");
      _reverting2 = gsap.core.reverting;
      _pluginInitted = 1;
    }
  };
  var _getBBoxHack = function _getBBoxHack2(swapIfPossible) {
    var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), oldParent = this.parentNode, oldSibling = this.nextSibling, oldCSS = this.style.cssText, bbox;
    _docElement.appendChild(svg);
    svg.appendChild(this);
    this.style.display = "block";
    if (swapIfPossible) {
      try {
        bbox = this.getBBox();
        this._gsapBBox = this.getBBox;
        this.getBBox = _getBBoxHack2;
      } catch (e) {
      }
    } else if (this._gsapBBox) {
      bbox = this._gsapBBox();
    }
    if (oldParent) {
      if (oldSibling) {
        oldParent.insertBefore(this, oldSibling);
      } else {
        oldParent.appendChild(this);
      }
    }
    _docElement.removeChild(svg);
    this.style.cssText = oldCSS;
    return bbox;
  };
  var _getAttributeFallbacks = function _getAttributeFallbacks2(target, attributesArray) {
    var i = attributesArray.length;
    while (i--) {
      if (target.hasAttribute(attributesArray[i])) {
        return target.getAttribute(attributesArray[i]);
      }
    }
  };
  var _getBBox = function _getBBox2(target) {
    var bounds;
    try {
      bounds = target.getBBox();
    } catch (error) {
      bounds = _getBBoxHack.call(target, true);
    }
    bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true));
    return bounds && !bounds.width && !bounds.x && !bounds.y ? {
      x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
      y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    } : bounds;
  };
  var _isSVG = function _isSVG2(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
  };
  var _removeProperty = function _removeProperty2(target, property) {
    if (property) {
      var style = target.style;
      if (property in _transformProps && property !== _transformOriginProp) {
        property = _transformProp;
      }
      if (style.removeProperty) {
        if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") {
          property = "-" + property;
        }
        style.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
      } else {
        style.removeAttribute(property);
      }
    }
  };
  var _addNonTweeningPT = function _addNonTweeningPT2(plugin, target, property, beginning, end, onlySetAtEnd) {
    var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
    plugin._pt = pt;
    pt.b = beginning;
    pt.e = end;
    plugin._props.push(property);
    return pt;
  };
  var _nonConvertibleUnits = {
    deg: 1,
    rad: 1,
    turn: 1
  };
  var _nonStandardLayouts = {
    grid: 1,
    flex: 1
  };
  var _convertToUnit = function _convertToUnit2(target, property, value, unit) {
    var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", style = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache, isSVG;
    if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
      return curValue;
    }
    curUnit !== "px" && !toPixels && (curValue = _convertToUnit2(target, property, value, "px"));
    isSVG = target.getCTM && _isSVG(target);
    if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
      px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
      return _round(toPercent ? curValue / px * amount : curValue / 100 * px);
    }
    style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
    parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
    if (isSVG) {
      parent = (target.ownerSVGElement || {}).parentNode;
    }
    if (!parent || parent === _doc2 || !parent.appendChild) {
      parent = _doc2.body;
    }
    cache = parent._gsap;
    if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time && !cache.uncache) {
      return _round(curValue / cache.width * amount);
    } else {
      (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
      parent === target && (style.position = "static");
      parent.appendChild(_tempDiv);
      px = _tempDiv[measureProperty];
      parent.removeChild(_tempDiv);
      style.position = "absolute";
      if (horizontal && toPercent) {
        cache = _getCache(parent);
        cache.time = _ticker.time;
        cache.width = parent[measureProperty];
      }
    }
    return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
  };
  var _get = function _get2(target, property, unit, uncache) {
    var value;
    _pluginInitted || _initCore();
    if (property in _propertyAliases && property !== "transform") {
      property = _propertyAliases[property];
      if (~property.indexOf(",")) {
        property = property.split(",")[0];
      }
    }
    if (_transformProps[property] && property !== "transform") {
      value = _parseTransform(target, uncache);
      value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
    } else {
      value = target.style[property];
      if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
        value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
      }
    }
    return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
  };
  var _tweenComplexCSSString = function _tweenComplexCSSString2(target, prop, start, end) {
    if (!start || start === "none") {
      var p = _checkPropPrefix(prop, target, 1), s = p && _getComputedProperty(target, p, 1);
      if (s && s !== start) {
        prop = p;
        start = s;
      } else if (prop === "borderColor") {
        start = _getComputedProperty(target, "borderTopColor");
      }
    }
    var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString), index = 0, matchIndex = 0, a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, endValues;
    pt.b = start;
    pt.e = end;
    start += "";
    end += "";
    if (end === "auto") {
      target.style[prop] = end;
      end = _getComputedProperty(target, prop) || end;
      target.style[prop] = start;
    }
    a = [start, end];
    _colorStringFilter(a);
    start = a[0];
    end = a[1];
    startValues = start.match(_numWithUnitExp) || [];
    endValues = end.match(_numWithUnitExp) || [];
    if (endValues.length) {
      while (result = _numWithUnitExp.exec(end)) {
        endValue = result[0];
        chunk = end.substring(index, result.index);
        if (color) {
          color = (color + 1) % 5;
        } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
          color = 1;
        }
        if (endValue !== (startValue = startValues[matchIndex++] || "")) {
          startNum = parseFloat(startValue) || 0;
          startUnit = startValue.substr((startNum + "").length);
          endValue.charAt(1) === "=" && (endValue = _parseRelative(startNum, endValue) + startUnit);
          endNum = parseFloat(endValue);
          endUnit = endValue.substr((endNum + "").length);
          index = _numWithUnitExp.lastIndex - endUnit.length;
          if (!endUnit) {
            endUnit = endUnit || _config.units[prop] || startUnit;
            if (index === end.length) {
              end += endUnit;
              pt.e += endUnit;
            }
          }
          if (startUnit !== endUnit) {
            startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
          }
          pt._pt = {
            _next: pt._pt,
            p: chunk || matchIndex === 1 ? chunk : ",",
            //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
            s: startNum,
            c: endNum - startNum,
            m: color && color < 4 || prop === "zIndex" ? Math.round : 0
          };
        }
      }
      pt.c = index < end.length ? end.substring(index, end.length) : "";
    } else {
      pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
    }
    _relExp.test(end) && (pt.e = 0);
    this._pt = pt;
    return pt;
  };
  var _keywordToPercent = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
  };
  var _convertKeywordsToPercentages = function _convertKeywordsToPercentages2(value) {
    var split = value.split(" "), x = split[0], y = split[1] || "50%";
    if (x === "top" || x === "bottom" || y === "left" || y === "right") {
      value = x;
      x = y;
      y = value;
    }
    split[0] = _keywordToPercent[x] || x;
    split[1] = _keywordToPercent[y] || y;
    return split.join(" ");
  };
  var _renderClearProps = function _renderClearProps2(ratio, data2) {
    if (data2.tween && data2.tween._time === data2.tween._dur) {
      var target = data2.t, style = target.style, props = data2.u, cache = target._gsap, prop, clearTransforms, i;
      if (props === "all" || props === true) {
        style.cssText = "";
        clearTransforms = 1;
      } else {
        props = props.split(",");
        i = props.length;
        while (--i > -1) {
          prop = props[i];
          if (_transformProps[prop]) {
            clearTransforms = 1;
            prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
          }
          _removeProperty(target, prop);
        }
      }
      if (clearTransforms) {
        _removeProperty(target, _transformProp);
        if (cache) {
          cache.svg && target.removeAttribute("transform");
          _parseTransform(target, 1);
          cache.uncache = 1;
          _removeIndependentTransforms(style);
        }
      }
    }
  };
  var _specialProps = {
    clearProps: function clearProps(plugin, target, property, endValue, tween) {
      if (tween.data !== "isFromStart") {
        var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
        pt.u = endValue;
        pt.pr = -10;
        pt.tween = tween;
        plugin._props.push(property);
        return 1;
      }
    }
    /* className feature (about 0.4kb gzipped).
    , className(plugin, target, property, endValue, tween) {
    	let _renderClassName = (ratio, data) => {
    			data.css.render(ratio, data.css);
    			if (!ratio || ratio === 1) {
    				let inline = data.rmv,
    					target = data.t,
    					p;
    				target.setAttribute("class", ratio ? data.e : data.b);
    				for (p in inline) {
    					_removeProperty(target, p);
    				}
    			}
    		},
    		_getAllStyles = (target) => {
    			let styles = {},
    				computed = getComputedStyle(target),
    				p;
    			for (p in computed) {
    				if (isNaN(p) && p !== "cssText" && p !== "length") {
    					styles[p] = computed[p];
    				}
    			}
    			_setDefaults(styles, _parseTransform(target, 1));
    			return styles;
    		},
    		startClassList = target.getAttribute("class"),
    		style = target.style,
    		cssText = style.cssText,
    		cache = target._gsap,
    		classPT = cache.classPT,
    		inlineToRemoveAtEnd = {},
    		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
    		changingVars = {},
    		startVars = _getAllStyles(target),
    		transformRelated = /(transform|perspective)/i,
    		endVars, p;
    	if (classPT) {
    		classPT.r(1, classPT.d);
    		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
    	}
    	target.setAttribute("class", data.e);
    	endVars = _getAllStyles(target, true);
    	target.setAttribute("class", startClassList);
    	for (p in endVars) {
    		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
    			changingVars[p] = endVars[p];
    			if (!style[p] && style[p] !== "0") {
    				inlineToRemoveAtEnd[p] = 1;
    			}
    		}
    	}
    	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
    	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://greensock.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
    		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
    	}
    	_parseTransform(target, true); //to clear the caching of transforms
    	data.css = new gsap.plugins.css();
    	data.css.init(target, changingVars, tween);
    	plugin._props.push(...data.css._props);
    	return 1;
    }
    */
  };
  var _identity2DMatrix = [1, 0, 0, 1, 0, 0];
  var _rotationalProperties = {};
  var _isNullTransform = function _isNullTransform2(value) {
    return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
  };
  var _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray2(target) {
    var matrixString = _getComputedProperty(target, _transformProp);
    return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
  };
  var _getMatrix = function _getMatrix2(target, force2D) {
    var cache = target._gsap || _getCache(target), style = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
    if (cache.svg && target.getAttribute("transform")) {
      temp = target.transform.baseVal.consolidate().matrix;
      matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
      return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
    } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
      temp = style.display;
      style.display = "block";
      parent = target.parentNode;
      if (!parent || !target.offsetParent) {
        addedToDOM = 1;
        nextSibling = target.nextElementSibling;
        _docElement.appendChild(target);
      }
      matrix = _getComputedTransformMatrixAsArray(target);
      temp ? style.display = temp : _removeProperty(target, "display");
      if (addedToDOM) {
        nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
      }
    }
    return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
  };
  var _applySVGOrigin = function _applySVGOrigin2(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
    var cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;
    if (!originIsAbsolute) {
      bounds = _getBBox(target);
      xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
      yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
    } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
      x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
      y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
      xOrigin = x;
      yOrigin = y;
    }
    if (smooth || smooth !== false && cache.smooth) {
      tx = xOrigin - xOriginOld;
      ty = yOrigin - yOriginOld;
      cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
      cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
    } else {
      cache.xOffset = cache.yOffset = 0;
    }
    cache.xOrigin = xOrigin;
    cache.yOrigin = yOrigin;
    cache.smooth = !!smooth;
    cache.origin = origin;
    cache.originIsAbsolute = !!originIsAbsolute;
    target.style[_transformOriginProp] = "0px 0px";
    if (pluginToAddPropTweensTo) {
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
    }
    target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
  };
  var _parseTransform = function _parseTransform2(target, uncache) {
    var cache = target._gsap || new GSCache(target);
    if ("x" in cache && !uncache && !cache.uncache) {
      return cache;
    }
    var style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", cs = getComputedStyle(target), origin = _getComputedProperty(target, _transformOriginProp) || "0", x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
    x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
    scaleX = scaleY = 1;
    cache.svg = !!(target.getCTM && _isSVG(target));
    if (cs.translate) {
      if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") {
        style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
      }
      style.scale = style.rotate = style.translate = "none";
    }
    matrix = _getMatrix(target, cache.svg);
    if (cache.svg) {
      if (cache.uncache) {
        t2 = target.getBBox();
        origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
        t1 = "";
      } else {
        t1 = !uncache && target.getAttribute("data-svg-origin");
      }
      _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
    }
    xOrigin = cache.xOrigin || 0;
    yOrigin = cache.yOrigin || 0;
    if (matrix !== _identity2DMatrix) {
      a = matrix[0];
      b = matrix[1];
      c = matrix[2];
      d = matrix[3];
      x = a12 = matrix[4];
      y = a22 = matrix[5];
      if (matrix.length === 6) {
        scaleX = Math.sqrt(a * a + b * b);
        scaleY = Math.sqrt(d * d + c * c);
        rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0;
        skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
        skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
        if (cache.svg) {
          x -= xOrigin - (xOrigin * a + yOrigin * c);
          y -= yOrigin - (xOrigin * b + yOrigin * d);
        }
      } else {
        a32 = matrix[6];
        a42 = matrix[7];
        a13 = matrix[8];
        a23 = matrix[9];
        a33 = matrix[10];
        a43 = matrix[11];
        x = matrix[12];
        y = matrix[13];
        z = matrix[14];
        angle = _atan2(a32, a33);
        rotationX = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a12 * cos + a13 * sin;
          t2 = a22 * cos + a23 * sin;
          t3 = a32 * cos + a33 * sin;
          a13 = a12 * -sin + a13 * cos;
          a23 = a22 * -sin + a23 * cos;
          a33 = a32 * -sin + a33 * cos;
          a43 = a42 * -sin + a43 * cos;
          a12 = t1;
          a22 = t2;
          a32 = t3;
        }
        angle = _atan2(-c, a33);
        rotationY = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a * cos - a13 * sin;
          t2 = b * cos - a23 * sin;
          t3 = c * cos - a33 * sin;
          a43 = d * sin + a43 * cos;
          a = t1;
          b = t2;
          c = t3;
        }
        angle = _atan2(b, a);
        rotation = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(angle);
          sin = Math.sin(angle);
          t1 = a * cos + b * sin;
          t2 = a12 * cos + a22 * sin;
          b = b * cos - a * sin;
          a22 = a22 * cos - a12 * sin;
          a = t1;
          a12 = t2;
        }
        if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
          rotationX = rotation = 0;
          rotationY = 180 - rotationY;
        }
        scaleX = _round(Math.sqrt(a * a + b * b + c * c));
        scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
        angle = _atan2(a12, a22);
        skewX = Math.abs(angle) > 2e-4 ? angle * _RAD2DEG : 0;
        perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
      }
      if (cache.svg) {
        t1 = target.getAttribute("transform");
        cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
        t1 && target.setAttribute("transform", t1);
      }
    }
    if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
      if (invertedScaleX) {
        scaleX *= -1;
        skewX += rotation <= 0 ? 180 : -180;
        rotation += rotation <= 0 ? 180 : -180;
      } else {
        scaleY *= -1;
        skewX += skewX <= 0 ? 180 : -180;
      }
    }
    uncache = uncache || cache.uncache;
    cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
    cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
    cache.z = z + px;
    cache.scaleX = _round(scaleX);
    cache.scaleY = _round(scaleY);
    cache.rotation = _round(rotation) + deg;
    cache.rotationX = _round(rotationX) + deg;
    cache.rotationY = _round(rotationY) + deg;
    cache.skewX = skewX + deg;
    cache.skewY = skewY + deg;
    cache.transformPerspective = perspective + px;
    if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) {
      style[_transformOriginProp] = _firstTwoOnly(origin);
    }
    cache.xOffset = cache.yOffset = 0;
    cache.force3D = _config.force3D;
    cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
    cache.uncache = 0;
    return cache;
  };
  var _firstTwoOnly = function _firstTwoOnly2(value) {
    return (value = value.split(" "))[0] + " " + value[1];
  };
  var _addPxTranslate = function _addPxTranslate2(target, start, value) {
    var unit = getUnit(start);
    return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
  };
  var _renderNon3DTransforms = function _renderNon3DTransforms2(ratio, cache) {
    cache.z = "0px";
    cache.rotationY = cache.rotationX = "0deg";
    cache.force3D = 0;
    _renderCSSTransforms(ratio, cache);
  };
  var _zeroDeg = "0deg";
  var _zeroPx = "0px";
  var _endParenthesis = ") ";
  var _renderCSSTransforms = function _renderCSSTransforms2(ratio, cache) {
    var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;
    if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
      var angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
      angle = parseFloat(rotationX) * _DEG2RAD;
      cos = Math.cos(angle);
      x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
      y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
      z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
    }
    if (transformPerspective !== _zeroPx) {
      transforms += "perspective(" + transformPerspective + _endParenthesis;
    }
    if (xPercent || yPercent) {
      transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
    }
    if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
      transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
    }
    if (rotation !== _zeroDeg) {
      transforms += "rotate(" + rotation + _endParenthesis;
    }
    if (rotationY !== _zeroDeg) {
      transforms += "rotateY(" + rotationY + _endParenthesis;
    }
    if (rotationX !== _zeroDeg) {
      transforms += "rotateX(" + rotationX + _endParenthesis;
    }
    if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
      transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
    }
    if (scaleX !== 1 || scaleY !== 1) {
      transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
    }
    target.style[_transformProp] = transforms || "translate(0, 0)";
  };
  var _renderSVGTransforms = function _renderSVGTransforms2(ratio, cache) {
    var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
    rotation = parseFloat(rotation);
    skewX = parseFloat(skewX);
    skewY = parseFloat(skewY);
    if (skewY) {
      skewY = parseFloat(skewY);
      skewX += skewY;
      rotation += skewY;
    }
    if (rotation || skewX) {
      rotation *= _DEG2RAD;
      skewX *= _DEG2RAD;
      a11 = Math.cos(rotation) * scaleX;
      a21 = Math.sin(rotation) * scaleX;
      a12 = Math.sin(rotation - skewX) * -scaleY;
      a22 = Math.cos(rotation - skewX) * scaleY;
      if (skewX) {
        skewY *= _DEG2RAD;
        temp = Math.tan(skewX - skewY);
        temp = Math.sqrt(1 + temp * temp);
        a12 *= temp;
        a22 *= temp;
        if (skewY) {
          temp = Math.tan(skewY);
          temp = Math.sqrt(1 + temp * temp);
          a11 *= temp;
          a21 *= temp;
        }
      }
      a11 = _round(a11);
      a21 = _round(a21);
      a12 = _round(a12);
      a22 = _round(a22);
    } else {
      a11 = scaleX;
      a22 = scaleY;
      a21 = a12 = 0;
    }
    if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
      tx = _convertToUnit(target, "x", x, "px");
      ty = _convertToUnit(target, "y", y, "px");
    }
    if (xOrigin || yOrigin || xOffset || yOffset) {
      tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
      ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
    }
    if (xPercent || yPercent) {
      temp = target.getBBox();
      tx = _round(tx + xPercent / 100 * temp.width);
      ty = _round(ty + yPercent / 100 * temp.height);
    }
    temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
    target.setAttribute("transform", temp);
    forceCSS && (target.style[_transformProp] = temp);
  };
  var _addRotationalPropTween = function _addRotationalPropTween2(plugin, target, property, startNum, endValue) {
    var cap = 360, isString = _isString(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = endNum - startNum, finalValue = startNum + change + "deg", direction, pt;
    if (isString) {
      direction = endValue.split("_")[1];
      if (direction === "short") {
        change %= cap;
        if (change !== change % (cap / 2)) {
          change += change < 0 ? cap : -cap;
        }
      }
      if (direction === "cw" && change < 0) {
        change = (change + cap * _bigNum2) % cap - ~~(change / cap) * cap;
      } else if (direction === "ccw" && change > 0) {
        change = (change - cap * _bigNum2) % cap - ~~(change / cap) * cap;
      }
    }
    plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
    pt.e = finalValue;
    pt.u = "deg";
    plugin._props.push(property);
    return pt;
  };
  var _assign = function _assign2(target, source) {
    for (var p in source) {
      target[p] = source[p];
    }
    return target;
  };
  var _addRawTransformPTs = function _addRawTransformPTs2(plugin, transforms, target) {
    var startCache = _assign({}, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style = target.style, endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit;
    if (startCache.svg) {
      startValue = target.getAttribute("transform");
      target.setAttribute("transform", "");
      style[_transformProp] = transforms;
      endCache = _parseTransform(target, 1);
      _removeProperty(target, _transformProp);
      target.setAttribute("transform", startValue);
    } else {
      startValue = getComputedStyle(target)[_transformProp];
      style[_transformProp] = transforms;
      endCache = _parseTransform(target, 1);
      style[_transformProp] = startValue;
    }
    for (p in _transformProps) {
      startValue = startCache[p];
      endValue = endCache[p];
      if (startValue !== endValue && exclude.indexOf(p) < 0) {
        startUnit = getUnit(startValue);
        endUnit = getUnit(endValue);
        startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
        endNum = parseFloat(endValue);
        plugin._pt = new PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
        plugin._pt.u = endUnit || 0;
        plugin._props.push(p);
      }
    }
    _assign(endCache, startCache);
  };
  _forEachName("padding,margin,Width,Radius", function(name, index) {
    var t = "Top", r = "Right", b = "Bottom", l = "Left", props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function(side) {
      return index < 2 ? name + side : "border" + side + name;
    });
    _specialProps[index > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
      var a, vars;
      if (arguments.length < 4) {
        a = props.map(function(prop) {
          return _get(plugin, prop, property);
        });
        vars = a.join(" ");
        return vars.split(a[0]).length === 5 ? a[0] : vars;
      }
      a = (endValue + "").split(" ");
      vars = {};
      props.forEach(function(prop, i) {
        return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
      });
      plugin.init(target, vars, tween);
    };
  });
  var CSSPlugin = {
    name: "css",
    register: _initCore,
    targetTest: function targetTest(target) {
      return target.style && target.nodeType;
    },
    init: function init3(target, vars, tween, index, targets) {
      var props = this._props, style = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority, inlineProps;
      _pluginInitted || _initCore();
      this.styles = this.styles || _getStyleSaver(target);
      inlineProps = this.styles.props;
      this.tween = tween;
      for (p in vars) {
        if (p === "autoRound") {
          continue;
        }
        endValue = vars[p];
        if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) {
          continue;
        }
        type = typeof endValue;
        specialProp = _specialProps[p];
        if (type === "function") {
          endValue = endValue.call(tween, index, target, targets);
          type = typeof endValue;
        }
        if (type === "string" && ~endValue.indexOf("random(")) {
          endValue = _replaceRandom(endValue);
        }
        if (specialProp) {
          specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
        } else if (p.substr(0, 2) === "--") {
          startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
          endValue += "";
          _colorExp.lastIndex = 0;
          if (!_colorExp.test(startValue)) {
            startUnit = getUnit(startValue);
            endUnit = getUnit(endValue);
          }
          endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
          this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
          props.push(p);
          inlineProps.push(p, 0, style[p]);
        } else if (type !== "undefined") {
          if (startAt && p in startAt) {
            startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
            _isString(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue));
            getUnit(startValue + "") || (startValue += _config.units[p] || getUnit(_get(target, p)) || "");
            (startValue + "").charAt(1) === "=" && (startValue = _get(target, p));
          } else {
            startValue = _get(target, p);
          }
          startNum = parseFloat(startValue);
          relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
          relative && (endValue = endValue.substr(2));
          endNum = parseFloat(endValue);
          if (p in _propertyAliases) {
            if (p === "autoAlpha") {
              if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
                startNum = 0;
              }
              inlineProps.push("visibility", 0, style.visibility);
              _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
            }
            if (p !== "scale" && p !== "transform") {
              p = _propertyAliases[p];
              ~p.indexOf(",") && (p = p.split(",")[0]);
            }
          }
          isTransformRelated = p in _transformProps;
          if (isTransformRelated) {
            this.styles.save(p);
            if (!transformPropTween) {
              cache = target._gsap;
              cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
              smooth = vars.smoothOrigin !== false && cache.smooth;
              transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1);
              transformPropTween.dep = 1;
            }
            if (p === "scale") {
              this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? _parseRelative(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
              this._pt.u = 0;
              props.push("scaleY", p);
              p += "X";
            } else if (p === "transformOrigin") {
              inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
              endValue = _convertKeywordsToPercentages(endValue);
              if (cache.svg) {
                _applySVGOrigin(target, endValue, 0, smooth, 0, this);
              } else {
                endUnit = parseFloat(endValue.split(" ")[2]) || 0;
                endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
                _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
              }
              continue;
            } else if (p === "svgOrigin") {
              _applySVGOrigin(target, endValue, 1, smooth, 0, this);
              continue;
            } else if (p in _rotationalProperties) {
              _addRotationalPropTween(this, cache, p, startNum, relative ? _parseRelative(startNum, relative + endValue) : endValue);
              continue;
            } else if (p === "smoothOrigin") {
              _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
              continue;
            } else if (p === "force3D") {
              cache[p] = endValue;
              continue;
            } else if (p === "transform") {
              _addRawTransformPTs(this, endValue, target);
              continue;
            }
          } else if (!(p in style)) {
            p = _checkPropPrefix(p) || p;
          }
          if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
            startUnit = (startValue + "").substr((startNum + "").length);
            endNum || (endNum = 0);
            endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
            startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
            this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
            this._pt.u = endUnit || 0;
            if (startUnit !== endUnit && endUnit !== "%") {
              this._pt.b = startValue;
              this._pt.r = _renderCSSPropWithBeginning;
            }
          } else if (!(p in style)) {
            if (p in target) {
              this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
            } else if (p !== "parseTransform") {
              _missingPlugin(p, endValue);
              continue;
            }
          } else {
            _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
          }
          isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : inlineProps.push(p, 1, startValue || target[p]));
          props.push(p);
        }
      }
      hasPriority && _sortPropTweensByPriority(this);
    },
    render: function render2(ratio, data2) {
      if (data2.tween._time || !_reverting2()) {
        var pt = data2._pt;
        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }
      } else {
        data2.styles.revert();
      }
    },
    get: _get,
    aliases: _propertyAliases,
    getSetter: function getSetter(target, property, plugin) {
      var p = _propertyAliases[property];
      p && p.indexOf(",") < 0 && (property = p);
      return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
    },
    core: {
      _removeProperty,
      _getMatrix
    }
  };
  gsap.utils.checkPrefix = _checkPropPrefix;
  gsap.core.getStyleSaver = _getStyleSaver;
  (function(positionAndScale, rotation, others, aliases) {
    var all = _forEachName(positionAndScale + "," + rotation + "," + others, function(name) {
      _transformProps[name] = 1;
    });
    _forEachName(rotation, function(name) {
      _config.units[name] = "deg";
      _rotationalProperties[name] = 1;
    });
    _propertyAliases[all[13]] = positionAndScale + "," + rotation;
    _forEachName(aliases, function(name) {
      var split = name.split(":");
      _propertyAliases[split[1]] = all[split[0]];
    });
  })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
  _forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name) {
    _config.units[name] = "px";
  });
  gsap.registerPlugin(CSSPlugin);

  // node_modules/.pnpm/gsap@3.11.5/node_modules/gsap/index.js
  var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap;
  var TweenMaxWithCSS = gsapWithCSS.core.Tween;

  // src/utils/fetch-data.ts
  init_live_reload();

  // node_modules/.pnpm/countup.js@2.6.0/node_modules/countup.js/dist/countUp.min.js
  init_live_reload();
  var __assign = function() {
    return (__assign = Object.assign || function(t) {
      for (var i, n = 1, s = arguments.length; n < s; n++)
        for (var a in i = arguments[n])
          Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a]);
      return t;
    }).apply(this, arguments);
  };
  var CountUp = function() {
    function t(t2, i, n) {
      var s = this;
      this.endVal = i, this.options = n, this.version = "2.6.0", this.defaults = { startVal: 0, decimalPlaces: 0, duration: 2, useEasing: true, useGrouping: true, useIndianSeparators: false, smartEasingThreshold: 999, smartEasingAmount: 333, separator: ",", decimal: ".", prefix: "", suffix: "", enableScrollSpy: false, scrollSpyDelay: 200, scrollSpyOnce: false }, this.finalEndVal = null, this.useEasing = true, this.countDown = false, this.error = "", this.startVal = 0, this.paused = true, this.once = false, this.count = function(t3) {
        s.startTime || (s.startTime = t3);
        var i2 = t3 - s.startTime;
        s.remaining = s.duration - i2, s.useEasing ? s.countDown ? s.frameVal = s.startVal - s.easingFn(i2, 0, s.startVal - s.endVal, s.duration) : s.frameVal = s.easingFn(i2, s.startVal, s.endVal - s.startVal, s.duration) : s.frameVal = s.startVal + (s.endVal - s.startVal) * (i2 / s.duration);
        var n2 = s.countDown ? s.frameVal < s.endVal : s.frameVal > s.endVal;
        s.frameVal = n2 ? s.endVal : s.frameVal, s.frameVal = Number(s.frameVal.toFixed(s.options.decimalPlaces)), s.printValue(s.frameVal), i2 < s.duration ? s.rAF = requestAnimationFrame(s.count) : null !== s.finalEndVal ? s.update(s.finalEndVal) : s.options.onCompleteCallback && s.options.onCompleteCallback();
      }, this.formatNumber = function(t3) {
        var i2, n2, a, e, o = t3 < 0 ? "-" : "";
        i2 = Math.abs(t3).toFixed(s.options.decimalPlaces);
        var r = (i2 += "").split(".");
        if (n2 = r[0], a = r.length > 1 ? s.options.decimal + r[1] : "", s.options.useGrouping) {
          e = "";
          for (var l = 3, h = 0, u = 0, p = n2.length; u < p; ++u)
            s.options.useIndianSeparators && 4 === u && (l = 2, h = 1), 0 !== u && h % l == 0 && (e = s.options.separator + e), h++, e = n2[p - u - 1] + e;
          n2 = e;
        }
        return s.options.numerals && s.options.numerals.length && (n2 = n2.replace(/[0-9]/g, function(t4) {
          return s.options.numerals[+t4];
        }), a = a.replace(/[0-9]/g, function(t4) {
          return s.options.numerals[+t4];
        })), o + s.options.prefix + n2 + a + s.options.suffix;
      }, this.easeOutExpo = function(t3, i2, n2, s2) {
        return n2 * (1 - Math.pow(2, -10 * t3 / s2)) * 1024 / 1023 + i2;
      }, this.options = __assign(__assign({}, this.defaults), n), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(i), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, "" === this.options.separator && (this.options.useGrouping = false), this.el = "string" == typeof t2 ? document.getElementById(t2) : t2, this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined", "undefined" != typeof window && this.options.enableScrollSpy && (this.error ? console.error(this.error, t2) : (window.onScrollFns = window.onScrollFns || [], window.onScrollFns.push(function() {
        return s.handleScroll(s);
      }), window.onscroll = function() {
        window.onScrollFns.forEach(function(t3) {
          return t3();
        });
      }, this.handleScroll(this)));
    }
    return t.prototype.handleScroll = function(t2) {
      if (t2 && window && !t2.once) {
        var i = window.innerHeight + window.scrollY, n = t2.el.getBoundingClientRect(), s = n.top + window.pageYOffset, a = n.top + n.height + window.pageYOffset;
        a < i && a > window.scrollY && t2.paused ? (t2.paused = false, setTimeout(function() {
          return t2.start();
        }, t2.options.scrollSpyDelay), t2.options.scrollSpyOnce && (t2.once = true)) : (window.scrollY > a || s > i) && !t2.paused && t2.reset();
      }
    }, t.prototype.determineDirectionAndSmartEasing = function() {
      var t2 = this.finalEndVal ? this.finalEndVal : this.endVal;
      this.countDown = this.startVal > t2;
      var i = t2 - this.startVal;
      if (Math.abs(i) > this.options.smartEasingThreshold && this.options.useEasing) {
        this.finalEndVal = t2;
        var n = this.countDown ? 1 : -1;
        this.endVal = t2 + n * this.options.smartEasingAmount, this.duration = this.duration / 2;
      } else
        this.endVal = t2, this.finalEndVal = null;
      null !== this.finalEndVal ? this.useEasing = false : this.useEasing = this.options.useEasing;
    }, t.prototype.start = function(t2) {
      this.error || (t2 && (this.options.onCompleteCallback = t2), this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = false, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal));
    }, t.prototype.pauseResume = function() {
      this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused;
    }, t.prototype.reset = function() {
      cancelAnimationFrame(this.rAF), this.paused = true, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal);
    }, t.prototype.update = function(t2) {
      cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(t2), this.endVal !== this.frameVal && (this.startVal = this.frameVal, null == this.finalEndVal && this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count));
    }, t.prototype.printValue = function(t2) {
      var i;
      if (this.el) {
        var n = this.formattingFn(t2);
        if (null !== (i = this.options.plugin) && void 0 !== i && i.render)
          this.options.plugin.render(this.el, n);
        else if ("INPUT" === this.el.tagName)
          this.el.value = n;
        else
          "text" === this.el.tagName || "tspan" === this.el.tagName ? this.el.textContent = n : this.el.innerHTML = n;
      }
    }, t.prototype.ensureNumber = function(t2) {
      return "number" == typeof t2 && !isNaN(t2);
    }, t.prototype.validateValue = function(t2) {
      var i = Number(t2);
      return this.ensureNumber(i) ? i : (this.error = "[CountUp] invalid start or end value: ".concat(t2), null);
    }, t.prototype.resetDuration = function() {
      this.startTime = null, this.duration = 1e3 * Number(this.options.duration), this.remaining = this.duration;
    }, t;
  }();

  // src/utils/fetch-data.ts
  function initializeDataHero() {
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const activePlayerCountUp = new CountUp("active-player", 13e3, {
      duration: 4,
      formattingFn: numberWithCommas
    });
    const activitiesCountUp = new CountUp("activities", 3e5, {
      duration: 4,
      formattingFn: numberWithCommas
    });
    const kmCountUp = new CountUp("km", 25e5, {
      duration: 4,
      formattingFn: numberWithCommas
    });
    if (!activePlayerCountUp.error) {
      activePlayerCountUp.start();
      activitiesCountUp.start();
      kmCountUp.start();
    } else {
      console.error(activePlayerCountUp.error);
    }
    async function get_dataHero() {
      const response = await fetch("https://api.360wellness.io/auth/public/hero/stat");
      const dataHero = await response.json();
      activePlayerCountUp.update(dataHero.numberOfPlayers);
      activitiesCountUp.update(dataHero.numberOfActivities);
      kmCountUp.update(dataHero.totalDistance);
    }
    const activePlayers = document.querySelectorAll("#active-player");
    activePlayers.forEach((player) => {
      player.style.color = "#00C4FF";
    });
    get_dataHero();
  }
  function getThousandsValue(x) {
    return Math.floor(x / 1e3);
  }
  async function get_socialData() {
    const response = await fetch(
      "https://api.360wellness.io/auth/public/social_community_members/stat"
    );
    const socialData = await response.json();
    document.getElementById("twitter").textContent = getThousandsValue(socialData.twitter);
    document.getElementById("discord").textContent = getThousandsValue(socialData.discord);
    document.getElementById("telegram").textContent = getThousandsValue(socialData.telegram);
  }

  // src/utils/fs-attributes.ts
  init_live_reload();
  function loadAttributesScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
      document.head.appendChild(script);
    });
  }

  // src/utils/gsap-animation.ts
  init_live_reload();
  function pTransAppLeft(onComplete) {
    const tl = gsapWithCSS.timeline({
      onComplete
      // Add onComplete event to the timeline
    });
    tl.to(".a--app-transition", {
      duration: 0.4,
      width: "100%",
      right: "0%",
      ease: "ease-out"
    });
    tl.to(".a--app-transition", {
      duration: 0.4,
      width: "0%",
      right: "100%",
      ease: "ease-out",
      delay: 0.4
    });
    tl.set(".a--app-transition", {
      right: "0%"
    });
  }
  function pTransNftRight(onComplete) {
    const tl = gsapWithCSS.timeline({
      onComplete
      // Add onComplete event to the timeline
    });
    tl.to(".a--nft-transition", {
      duration: 0.4,
      width: "100%",
      left: "0%",
      ease: "ease-out"
    });
    tl.to(".a--nft-transition", {
      duration: 0.4,
      width: "0%",
      left: "100%",
      ease: "ease-out",
      delay: 0.5
    });
    tl.set(".a--nft-transition", {
      left: "-100%"
    });
  }
  function pTransLegalsRight(onComplete) {
    const tl = gsapWithCSS.timeline({
      onComplete
      // Add onComplete event to the timeline
    });
    tl.to(".a--legals-transition", {
      duration: 0.4,
      width: "100%",
      left: "0%",
      ease: "ease-out"
    });
    tl.to(".a--legals-transition", {
      duration: 0.4,
      width: "0%",
      left: "100%",
      ease: "ease-out",
      delay: 0.5
    });
    tl.set(".a--legals-transition", {
      left: "-100%"
    });
  }
  function pTransTeamRight(onComplete) {
    const tl = gsapWithCSS.timeline({
      onComplete
      // Add onComplete event to the timeline
    });
    tl.to(".a--team-transition", {
      duration: 0.4,
      width: "100%",
      left: "0%",
      ease: "ease-out"
    });
    tl.to(".a--team-transition", {
      duration: 0.4,
      width: "0%",
      left: "100%",
      ease: "ease-out",
      delay: 0.5
    });
    tl.set(".a--team-transition", {
      left: "-100%"
    });
  }
  function pTransBlogRight(onComplete) {
    const tl = gsapWithCSS.timeline({
      onComplete
      // Add onComplete event to the timeline
    });
    tl.to(".a--blog-transition", {
      duration: 0.4,
      width: "100%",
      left: "0%",
      ease: "ease-out"
    });
    tl.to(".a--blog-transition", {
      duration: 0.4,
      width: "0%",
      left: "100%",
      ease: "ease-out",
      delay: 0.5
    });
    tl.set(".a--blog-transition", {
      left: "-100%"
    });
  }

  // src/utils/modal-viewer.ts
  init_live_reload();
  function loadModelViewerScript() {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.type = "module";
      script.src = "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js";
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("Failed to load model-viewer script"));
      document.head.appendChild(script);
    });
  }

  // src/utils/os-function.ts
  init_live_reload();
  function getMobileOperatingSystem() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/windows phone/i.test(userAgent)) {
      return "Windows Phone";
    }
    if (/android/i.test(userAgent)) {
      return "Android";
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "iOS";
    }
    return "unknown";
  }
  function hideElementsByOS() {
    const os = getMobileOperatingSystem();
    if (os === "iOS") {
      const androidButton = document.querySelector(".home-hero_d-button.is-android");
      const androidQrCodeCards = document.querySelector(".worldwide_qrcode-cards.is-android");
      if (androidButton) {
        androidButton.style.display = "none";
      }
      if (androidQrCodeCards) {
        androidQrCodeCards.style.display = "none";
      }
    } else if (os === "Android") {
      const appleButton = document.querySelector(".home-hero_d-button.is-apple");
      const appleQrCodeCards = document.querySelector(".worldwide_qrcode-cards.is-apple");
      if (appleButton) {
        appleButton.style.display = "none";
      }
      if (appleQrCodeCards) {
        appleQrCodeCards.style.display = "none";
      }
    }
  }
  document.addEventListener("DOMContentLoaded", hideElementsByOS);

  // src/utils/swiper.ts
  init_live_reload();
  function loadSwiper() {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.type = "module";
      script.src = "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js";
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("Failed to load swiper script"));
      document.head.appendChild(script);
    });
  }
  function appSwiper() {
    $(".community_swiper-wrapper").each(function(index) {
      let loopMode = false;
      if ($(this).attr("loop-mode") === "true") {
        loopMode = true;
      }
      let sliderDuration = 300;
      if ($(this).attr("slider-duration") !== void 0) {
        sliderDuration = +$(this).attr("slider-duration");
      }
      const swiper = new Swiper($(this).find(".swiper")[0], {
        speed: sliderDuration,
        loop: loopMode,
        autoHeight: false,
        centeredSlides: loopMode,
        followFinger: true,
        freeMode: false,
        slideToClickedSlide: true,
        slidesPerView: 1,
        spaceBetween: "4%",
        rewind: false,
        mousewheel: {
          forceToAxis: true
        },
        keyboard: {
          enabled: true,
          onlyInViewport: true
        },
        breakpoints: {
          // mobile landscape
          480: {
            slidesPerView: 1,
            spaceBetween: "4%"
          },
          // tablet
          768: {
            slidesPerView: 2,
            spaceBetween: "4%"
          },
          // desktop
          992: {
            slidesPerView: 4,
            spaceBetween: "2%"
          }
        },
        scrollbar: {
          el: $(this).find(".swiper-drag-wrapper")[0],
          draggable: true,
          dragClass: "swiper-drag",
          snapOnRelease: true
        },
        slideActiveClass: "is-active",
        slideDuplicateActiveClass: "is-active"
      });
    });
  }

  // src/utils/typed.ts
  init_live_reload();
  function loadTypedScript() {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/typed.js@2.0.132/dist/typed.umd.js";
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("Failed to load typed.js script"));
      document.head.appendChild(script);
    });
  }
  function nftTyping() {
    const viewportObserver = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        const typed = new Typed("#typing", {
          strings: ["BECOME A DEFIT <br>WEB3 PLAYER"],
          typeSpeed: 100,
          backSpeed: 0,
          fadeOut: true,
          showCursor: false
        });
        observer.unobserve(document.querySelector("#typing"));
      }
    });
    viewportObserver.observe(document.querySelector("#typing"));
  }

  // src/utils/weglot.ts
  init_live_reload();
  function loadWeglotScript() {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://cdn.weglot.com/weglot.min.js";
      script.type = "text/javascript";
      script.async = true;
      script.onload = () => {
        resolve();
      };
      document.head.appendChild(script);
    });
  }
  async function callWeglot() {
    await loadWeglotScript();
    Weglot.initialize({
      api_key: "wg_0a442ce2257ee6e6a96e7f04da6ad17c1"
    });
    Weglot.on("initialized", () => {
      const currentLang = Weglot.getCurrentLang();
      updateSW8FlagDropdownLinks(currentLang);
    });
    document.querySelectorAll(".wg-element-wrapper.sw8 [lang]").forEach((link) => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        Weglot.switchTo(this.getAttribute("lang"));
        updateSW8FlagDropdownLinks(this.getAttribute("lang"));
      });
    });
  }
  function updateSW8FlagDropdownLinks(currentLang) {
    const $wrapper = document.querySelector(".wg-element-wrapper.sw8");
    if ($wrapper.querySelector(".w-dropdown-toggle").getAttribute("lang") !== currentLang) {
      const $activeLangLink = $wrapper.querySelector("[lang=" + currentLang + "]");
      const childDiv = $activeLangLink.innerHTML;
      const $toggle = $wrapper.querySelector(".w-dropdown-toggle");
      const toggleDiv = $toggle.innerHTML;
      $toggle.innerHTML = childDiv;
      $activeLangLink.innerHTML = toggleDiv;
      const lang = $activeLangLink.getAttribute("lang");
      const toggleLang = $toggle.getAttribute("lang");
      $toggle.setAttribute("lang", lang);
      $activeLangLink.setAttribute("lang", toggleLang);
    }
  }

  // src/index.ts
  callWeglot().then(() => {
    console.log("Weglot script loaded and initialized successfully");
  }).catch((error) => {
    console.error("Error loading and initializing Weglot script:", error);
  });
  loadModelViewerScript().then(() => {
    console.log("Model viewer script loaded successfully");
  }).catch((error) => {
    console.error("Error loading model viewer script:", error);
  });
  loadAttributesScript("https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsfilter@1/cmsfilter.js").then(() => {
    console.log("CMS Filter script loaded");
  }).catch((error) => {
    console.error(error);
  });
  document.addEventListener("DOMContentLoaded", hideElementsByOS);
  function resetWebflow(data2) {
    const parser = new DOMParser();
    const dom = parser.parseFromString(data2.next.html, "text/html");
    const webflowPageId = $(dom).find("html").attr("data-wf-page");
    $("html").attr("data-wf-page", webflowPageId);
    window.Webflow && window.Webflow.destroy();
    window.Webflow && window.Webflow.ready();
    window.Webflow && window.Webflow.require("ix2").init();
  }
  import_core.default.hooks.leave(async (data2) => {
    console.log("global leave hook");
    await gsapWithCSS.set(data2.next.container, {
      opacity: 0
    });
    setTimeout(() => {
      window.scrollTo(0, 0);
      setTimeout(() => {
        window.scrollBy(0, 1);
      }, 500);
    }, 500);
  });
  import_core.default.hooks.enter(async (data2) => {
    console.log("global enter hook");
    callWeglot();
    await gsapWithCSS.to(data2.next.container, {
      opacity: 1,
      duration: 0.5
    });
  });
  import_core.default.init({
    preventRunning: true,
    cache: false,
    debug: true,
    views: [
      {
        namespace: "app",
        beforeEnter() {
          get_socialData();
          initializeDataHero();
          getMobileOperatingSystem();
          hideElementsByOS();
          loadSwiper().then(() => {
            console.log("Swiper script loaded successfully");
            appSwiper();
          }).catch((error) => {
            console.error("Error loading Swiper script:", error);
          });
        },
        afterEnter() {
          console.log("enter app");
        }
      },
      {
        namespace: "nft",
        beforeEnter() {
          loadTypedScript().then(() => {
            console.log("Typed.js script loaded successfully");
            nftTyping();
          }).catch((error) => {
            console.error("Error loading typed.js script:", error);
          });
        },
        afterEnter() {
          console.log("enter nft");
        }
      },
      {
        namespace: "team",
        beforeEnter() {
        },
        afterEnter() {
          console.log("enter team");
        }
      },
      {
        namespace: "legals",
        beforeEnter() {
        },
        afterEnter() {
          console.log("enter legals");
        }
      },
      {
        namespace: "blog",
        beforeEnter() {
          loadAttributesScript(
            "https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsfilter@1/cmsfilter.js"
          ).then(() => {
            console.log("CMS Filter script loaded");
          }).catch((error) => {
            console.error(error);
          });
        },
        afterEnter() {
          console.log("enter blog");
        }
      }
    ],
    transitions: [
      {
        // ANIM APP
        name: "app - right to left",
        sync: true,
        to: {
          namespace: ["app"]
        },
        // leave
        leave(data2) {
          console.log("leave > app");
          console.log(data2);
          const transitionData = data2;
          pTransAppLeft(() => {
            resetWebflow(transitionData);
            window.scrollTo(0, 0);
            setTimeout(() => {
              window.scrollBy(0, 1);
            }, 500);
          });
        },
        //enter
        enter(data2) {
          console.log("enter > app");
          console.log(data2);
        }
      },
      {
        // ANIM NFT
        name: "nft - left to right",
        sync: true,
        to: {
          namespace: ["nft"]
        },
        // leave
        leave(data2) {
          console.log("leave > nft");
          console.log(data2);
          const transitionData = data2;
          pTransNftRight(() => {
            resetWebflow(transitionData);
            window.scrollTo(0, 0);
            setTimeout(() => {
              window.scrollBy(0, 1);
            }, 500);
          });
        },
        // enter
        enter(data2) {
          console.log("enter > nft");
          console.log(data2);
        }
      },
      {
        // ANIM TEAM
        name: "team - left to right",
        sync: true,
        to: {
          namespace: ["team"]
        },
        // leave
        leave(data2) {
          console.log("leave > team");
          console.log(data2);
          const transitionData = data2;
          pTransTeamRight(() => {
            resetWebflow(transitionData);
            window.scrollTo(0, 0);
            setTimeout(() => {
              window.scrollBy(0, 1);
            }, 500);
          });
        },
        // enter
        enter(data2) {
          console.log("enter > team");
          console.log(data2);
        }
      },
      {
        // ANIM LEGALS
        name: "legals - left to right",
        sync: true,
        to: {
          namespace: ["legals"]
        },
        // leave
        leave(data2) {
          console.log("leave > legals");
          console.log(data2);
          const transitionData = data2;
          pTransLegalsRight(() => {
            resetWebflow(transitionData);
            window.scrollTo(0, 0);
            setTimeout(() => {
              window.scrollBy(0, 1);
            }, 500);
          });
        },
        // enter
        enter(data2) {
          console.log("enter > legals");
          console.log(data2);
        }
      },
      {
        // ANIM BLOG
        name: "blog - left to right",
        sync: true,
        to: {
          namespace: ["blog"]
        },
        // leave
        leave(data2) {
          console.log("leave > blog");
          console.log(data2);
          const transitionData = data2;
          pTransBlogRight(() => {
            resetWebflow(transitionData);
            window.scrollTo(0, 0);
            setTimeout(() => {
              window.scrollBy(0, 1);
            }, 500);
          });
        },
        // enter
        enter(data2) {
          console.log("enter > blog");
          console.log(data2);
        }
      }
    ]
  });
})();
=======
"use strict";(()=>{var Ma=Object.create;var ps=Object.defineProperty;var Pa=Object.getOwnPropertyDescriptor;var Ca=Object.getOwnPropertyNames;var Aa=Object.getPrototypeOf,La=Object.prototype.hasOwnProperty;var Oa=(s,e)=>()=>(e||s((e={exports:{}}).exports,e),e.exports);var ka=(s,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Ca(e))!La.call(s,r)&&r!==t&&ps(s,r,{get:()=>e[r],enumerable:!(i=Pa(e,r))||i.enumerable});return s};var Da=(s,e,t)=>(t=s!=null?Ma(Aa(s)):{},ka(e||!s||!s.__esModule?ps(t,"default",{value:s,enumerable:!0}):t,s));var hs=Oa((sr,nr)=>{(function(s,e){typeof sr=="object"&&typeof nr!="undefined"?nr.exports=e():typeof define=="function"&&define.amd?define(e):(s=s||self).barba=e()})(sr,function(){function s(O,M){for(var _=0;_<M.length;_++){var b=M[_];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(O,b.key,b)}}function e(O,M,_){return M&&s(O.prototype,M),_&&s(O,_),O}function t(){return(t=Object.assign||function(O){for(var M=1;M<arguments.length;M++){var _=arguments[M];for(var b in _)Object.prototype.hasOwnProperty.call(_,b)&&(O[b]=_[b])}return O}).apply(this,arguments)}function i(O,M){O.prototype=Object.create(M.prototype),O.prototype.constructor=O,O.__proto__=M}function r(O){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(M){return M.__proto__||Object.getPrototypeOf(M)})(O)}function n(O,M){return(n=Object.setPrototypeOf||function(_,b){return _.__proto__=b,_})(O,M)}function a(O,M,_){return(a=function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}()?Reflect.construct:function(b,P,z){var V=[null];V.push.apply(V,P);var j=new(Function.bind.apply(b,V));return z&&n(j,z.prototype),j}).apply(null,arguments)}function o(O){var M=typeof Map=="function"?new Map:void 0;return(o=function(_){if(_===null||Function.toString.call(_).indexOf("[native code]")===-1)return _;if(typeof _!="function")throw new TypeError("Super expression must either be null or a function");if(M!==void 0){if(M.has(_))return M.get(_);M.set(_,b)}function b(){return a(_,arguments,r(this).constructor)}return b.prototype=Object.create(_.prototype,{constructor:{value:b,enumerable:!1,writable:!0,configurable:!0}}),n(b,_)})(O)}function l(O,M){try{var _=O()}catch(b){return M(b)}return _&&_.then?_.then(void 0,M):_}typeof Symbol!="undefined"&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),typeof Symbol!="undefined"&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var c,d="2.9.7",u=function(){};(function(O){O[O.off=0]="off",O[O.error=1]="error",O[O.warning=2]="warning",O[O.info=3]="info",O[O.debug=4]="debug"})(c||(c={}));var f=c.off,h=function(){function O(_){this.t=_}O.getLevel=function(){return f},O.setLevel=function(_){return f=c[_]};var M=O.prototype;return M.error=function(){for(var _=arguments.length,b=new Array(_),P=0;P<_;P++)b[P]=arguments[P];this.i(console.error,c.error,b)},M.warn=function(){for(var _=arguments.length,b=new Array(_),P=0;P<_;P++)b[P]=arguments[P];this.i(console.warn,c.warning,b)},M.info=function(){for(var _=arguments.length,b=new Array(_),P=0;P<_;P++)b[P]=arguments[P];this.i(console.info,c.info,b)},M.debug=function(){for(var _=arguments.length,b=new Array(_),P=0;P<_;P++)b[P]=arguments[P];this.i(console.log,c.debug,b)},M.i=function(_,b,P){b<=O.getLevel()&&_.apply(console,["["+this.t+"] "].concat(P))},O}(),g=L,p=C,v=S,m=R,y=F,w="/",x=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function S(O,M){for(var _,b=[],P=0,z=0,V="",j=M&&M.delimiter||w,K=M&&M.whitelist||void 0,q=!1;(_=x.exec(O))!==null;){var Y=_[0],ie=_[1],Z=_.index;if(V+=O.slice(z,Z),z=Z+Y.length,ie)V+=ie[1],q=!0;else{var te="",le=_[2],ge=_[3],it=_[4],Le=_[5];if(!q&&V.length){var ut=V.length-1,ft=V[ut];(!K||K.indexOf(ft)>-1)&&(te=ft,V=V.slice(0,ut))}V&&(b.push(V),V="",q=!1);var Ze=ge||it,_e=te||j;b.push({name:le||P++,prefix:te,delimiter:_e,optional:Le==="?"||Le==="*",repeat:Le==="+"||Le==="*",pattern:Ze?E(Ze):"[^"+T(_e===j?_e:_e+j)+"]+?"})}}return(V||z<O.length)&&b.push(V+O.substr(z)),b}function C(O,M){return function(_,b){var P=O.exec(_);if(!P)return!1;for(var z=P[0],V=P.index,j={},K=b&&b.decode||decodeURIComponent,q=1;q<P.length;q++)if(P[q]!==void 0){var Y=M[q-1];j[Y.name]=Y.repeat?P[q].split(Y.delimiter).map(function(ie){return K(ie,Y)}):K(P[q],Y)}return{path:z,index:V,params:j}}}function R(O,M){for(var _=new Array(O.length),b=0;b<O.length;b++)typeof O[b]=="object"&&(_[b]=new RegExp("^(?:"+O[b].pattern+")$",k(M)));return function(P,z){for(var V="",j=z&&z.encode||encodeURIComponent,K=!z||z.validate!==!1,q=0;q<O.length;q++){var Y=O[q];if(typeof Y!="string"){var ie,Z=P?P[Y.name]:void 0;if(Array.isArray(Z)){if(!Y.repeat)throw new TypeError('Expected "'+Y.name+'" to not repeat, but got array');if(Z.length===0){if(Y.optional)continue;throw new TypeError('Expected "'+Y.name+'" to not be empty')}for(var te=0;te<Z.length;te++){if(ie=j(Z[te],Y),K&&!_[q].test(ie))throw new TypeError('Expected all "'+Y.name+'" to match "'+Y.pattern+'"');V+=(te===0?Y.prefix:Y.delimiter)+ie}}else if(typeof Z!="string"&&typeof Z!="number"&&typeof Z!="boolean"){if(!Y.optional)throw new TypeError('Expected "'+Y.name+'" to be '+(Y.repeat?"an array":"a string"))}else{if(ie=j(String(Z),Y),K&&!_[q].test(ie))throw new TypeError('Expected "'+Y.name+'" to match "'+Y.pattern+'", but got "'+ie+'"');V+=Y.prefix+ie}}else V+=Y}return V}}function T(O){return O.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function E(O){return O.replace(/([=!:$/()])/g,"\\$1")}function k(O){return O&&O.sensitive?"":"i"}function F(O,M,_){for(var b=(_=_||{}).strict,P=_.start!==!1,z=_.end!==!1,V=_.delimiter||w,j=[].concat(_.endsWith||[]).map(T).concat("$").join("|"),K=P?"^":"",q=0;q<O.length;q++){var Y=O[q];if(typeof Y=="string")K+=T(Y);else{var ie=Y.repeat?"(?:"+Y.pattern+")(?:"+T(Y.delimiter)+"(?:"+Y.pattern+"))*":Y.pattern;M&&M.push(Y),K+=Y.optional?Y.prefix?"(?:"+T(Y.prefix)+"("+ie+"))?":"("+ie+")?":T(Y.prefix)+"("+ie+")"}}if(z)b||(K+="(?:"+T(V)+")?"),K+=j==="$"?"$":"(?="+j+")";else{var Z=O[O.length-1],te=typeof Z=="string"?Z[Z.length-1]===V:Z===void 0;b||(K+="(?:"+T(V)+"(?="+j+"))?"),te||(K+="(?="+T(V)+"|"+j+")")}return new RegExp(K,k(_))}function L(O,M,_){return O instanceof RegExp?function(b,P){if(!P)return b;var z=b.source.match(/\((?!\?)/g);if(z)for(var V=0;V<z.length;V++)P.push({name:V,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return b}(O,M):Array.isArray(O)?function(b,P,z){for(var V=[],j=0;j<b.length;j++)V.push(L(b[j],P,z).source);return new RegExp("(?:"+V.join("|")+")",k(z))}(O,M,_):function(b,P,z){return F(S(b,z),P,z)}(O,M,_)}g.match=function(O,M){var _=[];return C(L(O,_,M),_)},g.regexpToFunction=p,g.parse=v,g.compile=function(O,M){return R(S(O,M),M)},g.tokensToFunction=m,g.tokensToRegExp=y;var A={container:"container",history:"history",namespace:"namespace",prefix:"data-barba",prevent:"prevent",wrapper:"wrapper"},D=new(function(){function O(){this.o=A,this.u=new DOMParser}var M=O.prototype;return M.toString=function(_){return _.outerHTML},M.toDocument=function(_){return this.u.parseFromString(_,"text/html")},M.toElement=function(_){var b=document.createElement("div");return b.innerHTML=_,b},M.getHtml=function(_){return _===void 0&&(_=document),this.toString(_.documentElement)},M.getWrapper=function(_){return _===void 0&&(_=document),_.querySelector("["+this.o.prefix+'="'+this.o.wrapper+'"]')},M.getContainer=function(_){return _===void 0&&(_=document),_.querySelector("["+this.o.prefix+'="'+this.o.container+'"]')},M.removeContainer=function(_){document.body.contains(_)&&_.parentNode.removeChild(_)},M.addContainer=function(_,b){var P=this.getContainer();P?this.s(_,P):b.appendChild(_)},M.getNamespace=function(_){_===void 0&&(_=document);var b=_.querySelector("["+this.o.prefix+"-"+this.o.namespace+"]");return b?b.getAttribute(this.o.prefix+"-"+this.o.namespace):null},M.getHref=function(_){if(_.tagName&&_.tagName.toLowerCase()==="a"){if(typeof _.href=="string")return _.href;var b=_.getAttribute("href")||_.getAttribute("xlink:href");if(b)return this.resolveUrl(b.baseVal||b)}return null},M.resolveUrl=function(){for(var _=arguments.length,b=new Array(_),P=0;P<_;P++)b[P]=arguments[P];var z=b.length;if(z===0)throw new Error("resolveUrl requires at least one argument; got none.");var V=document.createElement("base");if(V.href=arguments[0],z===1)return V.href;var j=document.getElementsByTagName("head")[0];j.insertBefore(V,j.firstChild);for(var K,q=document.createElement("a"),Y=1;Y<z;Y++)q.href=arguments[Y],V.href=K=q.href;return j.removeChild(V),K},M.s=function(_,b){b.parentNode.insertBefore(_,b.nextSibling)},O}()),B=new(function(){function O(){this.h=[],this.v=-1}var M=O.prototype;return M.init=function(_,b){this.l="barba";var P={ns:b,scroll:{x:window.scrollX,y:window.scrollY},url:_};this.h.push(P),this.v=0;var z={from:this.l,index:0,states:[].concat(this.h)};window.history&&window.history.replaceState(z,"",_)},M.change=function(_,b,P){if(P&&P.state){var z=P.state,V=z.index;b=this.m(this.v-V),this.replace(z.states),this.v=V}else this.add(_,b);return b},M.add=function(_,b){var P=this.size,z=this.p(b),V={ns:"tmp",scroll:{x:window.scrollX,y:window.scrollY},url:_};this.h.push(V),this.v=P;var j={from:this.l,index:P,states:[].concat(this.h)};switch(z){case"push":window.history&&window.history.pushState(j,"",_);break;case"replace":window.history&&window.history.replaceState(j,"",_)}},M.update=function(_,b){var P=b||this.v,z=t({},this.get(P),{},_);this.set(P,z)},M.remove=function(_){_?this.h.splice(_,1):this.h.pop(),this.v--},M.clear=function(){this.h=[],this.v=-1},M.replace=function(_){this.h=_},M.get=function(_){return this.h[_]},M.set=function(_,b){return this.h[_]=b},M.p=function(_){var b="push",P=_,z=A.prefix+"-"+A.history;return P.hasAttribute&&P.hasAttribute(z)&&(b=P.getAttribute(z)),b},M.m=function(_){return Math.abs(_)>1?_>0?"forward":"back":_===0?"popstate":_>0?"back":"forward"},e(O,[{key:"current",get:function(){return this.h[this.v]}},{key:"state",get:function(){return this.h[this.h.length-1]}},{key:"previous",get:function(){return this.v<1?null:this.h[this.v-1]}},{key:"size",get:function(){return this.h.length}}]),O}()),G=function(O,M){try{var _=function(){if(!M.next.html)return Promise.resolve(O).then(function(b){var P=M.next;if(b){var z=D.toElement(b);P.namespace=D.getNamespace(z),P.container=D.getContainer(z),P.html=b,B.update({ns:P.namespace});var V=D.toDocument(b);document.title=V.title}})}();return Promise.resolve(_&&_.then?_.then(function(){}):void 0)}catch(b){return Promise.reject(b)}},I=g,$={__proto__:null,update:G,nextTick:function(){return new Promise(function(O){window.requestAnimationFrame(O)})},pathToRegexp:I},W=function(){return window.location.origin},Q=function(O){return O===void 0&&(O=window.location.href),N(O).port},N=function(O){var M,_=O.match(/:\d+/);if(_===null)/^http/.test(O)&&(M=80),/^https/.test(O)&&(M=443);else{var b=_[0].substring(1);M=parseInt(b,10)}var P,z=O.replace(W(),""),V={},j=z.indexOf("#");j>=0&&(P=z.slice(j+1),z=z.slice(0,j));var K=z.indexOf("?");return K>=0&&(V=H(z.slice(K+1)),z=z.slice(0,K)),{hash:P,path:z,port:M,query:V}},H=function(O){return O.split("&").reduce(function(M,_){var b=_.split("=");return M[b[0]]=b[1],M},{})},X=function(O){return O===void 0&&(O=window.location.href),O.replace(/(\/#.*|\/|#.*)$/,"")},ee={__proto__:null,getHref:function(){return window.location.href},getOrigin:W,getPort:Q,getPath:function(O){return O===void 0&&(O=window.location.href),N(O).path},parse:N,parseQuery:H,clean:X};function U(O,M,_){return M===void 0&&(M=2e3),new Promise(function(b,P){var z=new XMLHttpRequest;z.onreadystatechange=function(){if(z.readyState===XMLHttpRequest.DONE){if(z.status===200)b(z.responseText);else if(z.status){var V={status:z.status,statusText:z.statusText};_(O,V),P(V)}}},z.ontimeout=function(){var V=new Error("Timeout error ["+M+"]");_(O,V),P(V)},z.onerror=function(){var V=new Error("Fetch error");_(O,V),P(V)},z.open("GET",O),z.timeout=M,z.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml"),z.setRequestHeader("x-barba","yes"),z.send()})}var se=function(O){return!!O&&(typeof O=="object"||typeof O=="function")&&typeof O.then=="function"};function pe(O,M){return M===void 0&&(M={}),function(){for(var _=arguments.length,b=new Array(_),P=0;P<_;P++)b[P]=arguments[P];var z=!1,V=new Promise(function(j,K){M.async=function(){return z=!0,function(Y,ie){Y?K(Y):j(ie)}};var q=O.apply(M,b);z||(se(q)?q.then(j,K):j(q))});return V}}var Ae=new(function(O){function M(){var b;return(b=O.call(this)||this).logger=new h("@barba/core"),b.all=["ready","page","reset","currentAdded","currentRemoved","nextAdded","nextRemoved","beforeOnce","once","afterOnce","before","beforeLeave","leave","afterLeave","beforeEnter","enter","afterEnter","after"],b.registered=new Map,b.init(),b}i(M,O);var _=M.prototype;return _.init=function(){var b=this;this.registered.clear(),this.all.forEach(function(P){b[P]||(b[P]=function(z,V){b.registered.has(P)||b.registered.set(P,new Set),b.registered.get(P).add({ctx:V||{},fn:z})})})},_.do=function(b){for(var P=this,z=arguments.length,V=new Array(z>1?z-1:0),j=1;j<z;j++)V[j-1]=arguments[j];if(this.registered.has(b)){var K=Promise.resolve();return this.registered.get(b).forEach(function(q){K=K.then(function(){return pe(q.fn,q.ctx).apply(void 0,V)})}),K.catch(function(q){P.logger.debug("Hook error ["+b+"]"),P.logger.error(q)})}return Promise.resolve()},_.clear=function(){var b=this;this.all.forEach(function(P){delete b[P]}),this.init()},_.help=function(){this.logger.info("Available hooks: "+this.all.join(","));var b=[];this.registered.forEach(function(P,z){return b.push(z)}),this.logger.info("Registered hooks: "+b.join(","))},M}(u)),kt=function(){function O(M){if(this.P=[],typeof M=="boolean")this.g=M;else{var _=Array.isArray(M)?M:[M];this.P=_.map(function(b){return I(b)})}}return O.prototype.checkHref=function(M){if(typeof this.g=="boolean")return this.g;var _=N(M).path;return this.P.some(function(b){return b.exec(_)!==null})},O}(),Qe=function(O){function M(b){var P;return(P=O.call(this,b)||this).k=new Map,P}i(M,O);var _=M.prototype;return _.set=function(b,P,z){return this.k.set(b,{action:z,request:P}),{action:z,request:P}},_.get=function(b){return this.k.get(b)},_.getRequest=function(b){return this.k.get(b).request},_.getAction=function(b){return this.k.get(b).action},_.has=function(b){return!this.checkHref(b)&&this.k.has(b)},_.delete=function(b){return this.k.delete(b)},_.update=function(b,P){var z=t({},this.k.get(b),{},P);return this.k.set(b,z),z},M}(kt),ct=function(){return!window.history.pushState},Oi=function(O){return!O.el||!O.href},ki=function(O){var M=O.event;return M.which>1||M.metaKey||M.ctrlKey||M.shiftKey||M.altKey},Di=function(O){var M=O.el;return M.hasAttribute("target")&&M.target==="_blank"},Ii=function(O){var M=O.el;return M.protocol!==void 0&&window.location.protocol!==M.protocol||M.hostname!==void 0&&window.location.hostname!==M.hostname},Wt=function(O){var M=O.el;return M.port!==void 0&&Q()!==Q(M.href)},Xt=function(O){var M=O.el;return M.getAttribute&&typeof M.getAttribute("download")=="string"},ci=function(O){return O.el.hasAttribute(A.prefix+"-"+A.prevent)},di=function(O){return!!O.el.closest("["+A.prefix+"-"+A.prevent+'="all"]')},ui=function(O){var M=O.href;return X(M)===X()&&Q(M)===Q()},fi=function(O){function M(b){var P;return(P=O.call(this,b)||this).suite=[],P.tests=new Map,P.init(),P}i(M,O);var _=M.prototype;return _.init=function(){this.add("pushState",ct),this.add("exists",Oi),this.add("newTab",ki),this.add("blank",Di),this.add("corsDomain",Ii),this.add("corsPort",Wt),this.add("download",Xt),this.add("preventSelf",ci),this.add("preventAll",di),this.add("sameUrl",ui,!1)},_.add=function(b,P,z){z===void 0&&(z=!0),this.tests.set(b,P),z&&this.suite.push(b)},_.run=function(b,P,z,V){return this.tests.get(b)({el:P,event:z,href:V})},_.checkLink=function(b,P,z){var V=this;return this.suite.some(function(j){return V.run(j,b,P,z)})},M}(kt),dt=function(O){function M(_,b){var P;b===void 0&&(b="Barba error");for(var z=arguments.length,V=new Array(z>2?z-2:0),j=2;j<z;j++)V[j-2]=arguments[j];return(P=O.call.apply(O,[this].concat(V))||this).error=_,P.label=b,Error.captureStackTrace&&Error.captureStackTrace(function(K){if(K===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return K}(P),M),P.name="BarbaError",P}return i(M,O),M}(o(Error)),zi=function(){function O(_){_===void 0&&(_=[]),this.logger=new h("@barba/core"),this.all=[],this.page=[],this.once=[],this.A=[{name:"namespace",type:"strings"},{name:"custom",type:"function"}],_&&(this.all=this.all.concat(_)),this.update()}var M=O.prototype;return M.add=function(_,b){switch(_){case"rule":this.A.splice(b.position||0,0,b.value);break;case"transition":default:this.all.push(b)}this.update()},M.resolve=function(_,b){var P=this;b===void 0&&(b={});var z=b.once?this.once:this.page;z=z.filter(b.self?function(Z){return Z.name&&Z.name==="self"}:function(Z){return!Z.name||Z.name!=="self"});var V=new Map,j=z.find(function(Z){var te=!0,le={};return!(!b.self||Z.name!=="self")||(P.A.reverse().forEach(function(ge){te&&(te=P.R(Z,ge,_,le),Z.from&&Z.to&&(te=P.R(Z,ge,_,le,"from")&&P.R(Z,ge,_,le,"to")),Z.from&&!Z.to&&(te=P.R(Z,ge,_,le,"from")),!Z.from&&Z.to&&(te=P.R(Z,ge,_,le,"to")))}),V.set(Z,le),te)}),K=V.get(j),q=[];if(q.push(b.once?"once":"page"),b.self&&q.push("self"),K){var Y,ie=[j];Object.keys(K).length>0&&ie.push(K),(Y=this.logger).info.apply(Y,["Transition found ["+q.join(",")+"]"].concat(ie))}else this.logger.info("No transition found ["+q.join(",")+"]");return j},M.update=function(){var _=this;this.all=this.all.map(function(b){return _.T(b)}).sort(function(b,P){return b.priority-P.priority}).reverse().map(function(b){return delete b.priority,b}),this.page=this.all.filter(function(b){return b.leave!==void 0||b.enter!==void 0}),this.once=this.all.filter(function(b){return b.once!==void 0})},M.R=function(_,b,P,z,V){var j=!0,K=!1,q=_,Y=b.name,ie=Y,Z=Y,te=Y,le=V?q[V]:q,ge=V==="to"?P.next:P.current;if(V?le&&le[Y]:le[Y]){switch(b.type){case"strings":default:var it=Array.isArray(le[ie])?le[ie]:[le[ie]];ge[ie]&&it.indexOf(ge[ie])!==-1&&(K=!0),it.indexOf(ge[ie])===-1&&(j=!1);break;case"object":var Le=Array.isArray(le[Z])?le[Z]:[le[Z]];ge[Z]?(ge[Z].name&&Le.indexOf(ge[Z].name)!==-1&&(K=!0),Le.indexOf(ge[Z].name)===-1&&(j=!1)):j=!1;break;case"function":le[te](P)?K=!0:j=!1}K&&(V?(z[V]=z[V]||{},z[V][Y]=q[V][Y]):z[Y]=q[Y])}return j},M.O=function(_,b,P){var z=0;return(_[b]||_.from&&_.from[b]||_.to&&_.to[b])&&(z+=Math.pow(10,P),_.from&&_.from[b]&&(z+=1),_.to&&_.to[b]&&(z+=2)),z},M.T=function(_){var b=this;_.priority=0;var P=0;return this.A.forEach(function(z,V){P+=b.O(_,z.name,V+1)}),_.priority=P,_},O}(),Dt=function(){function O(_){_===void 0&&(_=[]),this.logger=new h("@barba/core"),this.S=!1,this.store=new zi(_)}var M=O.prototype;return M.get=function(_,b){return this.store.resolve(_,b)},M.doOnce=function(_){var b=_.data,P=_.transition;try{var z=function(){V.S=!1},V=this,j=P||{};V.S=!0;var K=l(function(){return Promise.resolve(V.j("beforeOnce",b,j)).then(function(){return Promise.resolve(V.once(b,j)).then(function(){return Promise.resolve(V.j("afterOnce",b,j)).then(function(){})})})},function(q){V.S=!1,V.logger.debug("Transition error [before/after/once]"),V.logger.error(q)});return Promise.resolve(K&&K.then?K.then(z):z())}catch(q){return Promise.reject(q)}},M.doPage=function(_){var b=_.data,P=_.transition,z=_.page,V=_.wrapper;try{var j=function(te){if(K)return te;q.S=!1},K=!1,q=this,Y=P||{},ie=Y.sync===!0||!1;q.S=!0;var Z=l(function(){function te(){return Promise.resolve(q.j("before",b,Y)).then(function(){var ge=!1;function it(ut){return ge?ut:Promise.resolve(q.remove(b)).then(function(){return Promise.resolve(q.j("after",b,Y)).then(function(){})})}var Le=function(){if(ie)return l(function(){return Promise.resolve(q.add(b,V)).then(function(){return Promise.resolve(q.j("beforeLeave",b,Y)).then(function(){return Promise.resolve(q.j("beforeEnter",b,Y)).then(function(){return Promise.resolve(Promise.all([q.leave(b,Y),q.enter(b,Y)])).then(function(){return Promise.resolve(q.j("afterLeave",b,Y)).then(function(){return Promise.resolve(q.j("afterEnter",b,Y)).then(function(){})})})})})})},function(_e){if(q.M(_e))throw new dt(_e,"Transition error [sync]")});var ut=function(_e){return ge?_e:l(function(){var pt=function(){if(ft!==!1)return Promise.resolve(q.add(b,V)).then(function(){return Promise.resolve(q.j("beforeEnter",b,Y)).then(function(){return Promise.resolve(q.enter(b,Y,ft)).then(function(){return Promise.resolve(q.j("afterEnter",b,Y)).then(function(){})})})})}();if(pt&&pt.then)return pt.then(function(){})},function(pt){if(q.M(pt))throw new dt(pt,"Transition error [before/after/enter]")})},ft=!1,Ze=l(function(){return Promise.resolve(q.j("beforeLeave",b,Y)).then(function(){return Promise.resolve(Promise.all([q.leave(b,Y),G(z,b)]).then(function(_e){return _e[0]})).then(function(_e){return ft=_e,Promise.resolve(q.j("afterLeave",b,Y)).then(function(){})})})},function(_e){if(q.M(_e))throw new dt(_e,"Transition error [before/after/leave]")});return Ze&&Ze.then?Ze.then(ut):ut(Ze)}();return Le&&Le.then?Le.then(it):it(Le)})}var le=function(){if(ie)return Promise.resolve(G(z,b)).then(function(){})}();return le&&le.then?le.then(te):te()},function(te){throw q.S=!1,te.name&&te.name==="BarbaError"?(q.logger.debug(te.label),q.logger.error(te.error),te):(q.logger.debug("Transition error [page]"),q.logger.error(te),te)});return Promise.resolve(Z&&Z.then?Z.then(j):j(Z))}catch(te){return Promise.reject(te)}},M.once=function(_,b){try{return Promise.resolve(Ae.do("once",_,b)).then(function(){return b.once?pe(b.once,b)(_):Promise.resolve()})}catch(P){return Promise.reject(P)}},M.leave=function(_,b){try{return Promise.resolve(Ae.do("leave",_,b)).then(function(){return b.leave?pe(b.leave,b)(_):Promise.resolve()})}catch(P){return Promise.reject(P)}},M.enter=function(_,b,P){try{return Promise.resolve(Ae.do("enter",_,b)).then(function(){return b.enter?pe(b.enter,b)(_,P):Promise.resolve()})}catch(z){return Promise.reject(z)}},M.add=function(_,b){try{return D.addContainer(_.next.container,b),Ae.do("nextAdded",_),Promise.resolve()}catch(P){return Promise.reject(P)}},M.remove=function(_){try{return D.removeContainer(_.current.container),Ae.do("currentRemoved",_),Promise.resolve()}catch(b){return Promise.reject(b)}},M.M=function(_){return _.message?!/Timeout error|Fetch error/.test(_.message):!_.status},M.j=function(_,b,P){try{return Promise.resolve(Ae.do(_,b,P)).then(function(){return P[_]?pe(P[_],P)(b):Promise.resolve()})}catch(z){return Promise.reject(z)}},e(O,[{key:"isRunning",get:function(){return this.S},set:function(_){this.S=_}},{key:"hasOnce",get:function(){return this.store.once.length>0}},{key:"hasSelf",get:function(){return this.store.all.some(function(_){return _.name==="self"})}},{key:"shouldWait",get:function(){return this.store.all.some(function(_){return _.to&&!_.to.route||_.sync})}}]),O}(),Ta=function(){function O(M){var _=this;this.names=["beforeLeave","afterLeave","beforeEnter","afterEnter"],this.byNamespace=new Map,M.length!==0&&(M.forEach(function(b){_.byNamespace.set(b.namespace,b)}),this.names.forEach(function(b){Ae[b](_.L(b))}))}return O.prototype.L=function(M){var _=this;return function(b){var P=M.match(/enter/i)?b.next:b.current,z=_.byNamespace.get(P.namespace);return z&&z[M]?pe(z[M],z)(b):Promise.resolve()}},O}();Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(O){var M=this;do{if(M.matches(O))return M;M=M.parentElement||M.parentNode}while(M!==null&&M.nodeType===1);return null});var Ea={container:null,html:"",namespace:"",url:{hash:"",href:"",path:"",port:null,query:{}}};return new(function(){function O(){this.version=d,this.schemaPage=Ea,this.Logger=h,this.logger=new h("@barba/core"),this.plugins=[],this.hooks=Ae,this.dom=D,this.helpers=$,this.history=B,this.request=U,this.url=ee}var M=O.prototype;return M.use=function(_,b){var P=this.plugins;P.indexOf(_)>-1?this.logger.warn("Plugin ["+_.name+"] already installed."):typeof _.install=="function"?(_.install(this,b),P.push(_)):this.logger.warn("Plugin ["+_.name+'] has no "install" method.')},M.init=function(_){var b=_===void 0?{}:_,P=b.transitions,z=P===void 0?[]:P,V=b.views,j=V===void 0?[]:V,K=b.schema,q=K===void 0?A:K,Y=b.requestError,ie=b.timeout,Z=ie===void 0?2e3:ie,te=b.cacheIgnore,le=te!==void 0&&te,ge=b.prefetchIgnore,it=ge!==void 0&&ge,Le=b.preventRunning,ut=Le!==void 0&&Le,ft=b.prevent,Ze=ft===void 0?null:ft,_e=b.debug,pt=b.logLevel;if(h.setLevel((_e!==void 0&&_e)===!0?"debug":pt===void 0?"off":pt),this.logger.info(this.version),Object.keys(q).forEach(function(pi){A[pi]&&(A[pi]=q[pi])}),this.$=Y,this.timeout=Z,this.cacheIgnore=le,this.prefetchIgnore=it,this.preventRunning=ut,this._=this.dom.getWrapper(),!this._)throw new Error("[@barba/core] No Barba wrapper found");this._.setAttribute("aria-live","polite"),this.q();var rr=this.data.current;if(!rr.container)throw new Error("[@barba/core] No Barba container found");if(this.cache=new Qe(le),this.prevent=new fi(it),this.transitions=new Dt(z),this.views=new Ta(j),Ze!==null){if(typeof Ze!="function")throw new Error("[@barba/core] Prevent should be a function");this.prevent.add("preventCustom",Ze)}this.history.init(rr.url.href,rr.namespace),this.B=this.B.bind(this),this.U=this.U.bind(this),this.D=this.D.bind(this),this.F(),this.plugins.forEach(function(pi){return pi.init()});var jt=this.data;jt.trigger="barba",jt.next=jt.current,jt.current=t({},this.schemaPage),this.hooks.do("ready",jt),this.once(jt),this.q()},M.destroy=function(){this.q(),this.H(),this.history.clear(),this.hooks.clear(),this.plugins=[]},M.force=function(_){window.location.assign(_)},M.go=function(_,b,P){var z;if(b===void 0&&(b="barba"),this.transitions.isRunning)this.force(_);else if(!(z=b==="popstate"?this.history.current&&this.url.getPath(this.history.current.url)===this.url.getPath(_):this.prevent.run("sameUrl",null,null,_))||this.transitions.hasSelf)return b=this.history.change(_,b,P),P&&(P.stopPropagation(),P.preventDefault()),this.page(_,b,z)},M.once=function(_){try{var b=this;return Promise.resolve(b.hooks.do("beforeEnter",_)).then(function(){function P(){return Promise.resolve(b.hooks.do("afterEnter",_)).then(function(){})}var z=function(){if(b.transitions.hasOnce){var V=b.transitions.get(_,{once:!0});return Promise.resolve(b.transitions.doOnce({transition:V,data:_})).then(function(){})}}();return z&&z.then?z.then(P):P()})}catch(P){return Promise.reject(P)}},M.page=function(_,b,P){try{var z=function(){var q=V.data;return Promise.resolve(V.hooks.do("page",q)).then(function(){var Y=l(function(){var ie=V.transitions.get(q,{once:!1,self:P});return Promise.resolve(V.transitions.doPage({data:q,page:j,transition:ie,wrapper:V._})).then(function(){V.q()})},function(){h.getLevel()===0&&V.force(q.current.url.href)});if(Y&&Y.then)return Y.then(function(){})})},V=this;V.data.next.url=t({href:_},V.url.parse(_)),V.data.trigger=b;var j=V.cache.has(_)?V.cache.update(_,{action:"click"}).request:V.cache.set(_,V.request(_,V.timeout,V.onRequestError.bind(V,b)),"click").request,K=function(){if(V.transitions.shouldWait)return Promise.resolve(G(j,V.data)).then(function(){})}();return Promise.resolve(K&&K.then?K.then(z):z())}catch(q){return Promise.reject(q)}},M.onRequestError=function(_){this.transitions.isRunning=!1;for(var b=arguments.length,P=new Array(b>1?b-1:0),z=1;z<b;z++)P[z-1]=arguments[z];var V=P[0],j=P[1],K=this.cache.getAction(V);return this.cache.delete(V),!(this.$&&this.$(_,K,V,j)===!1||(K==="click"&&this.force(V),1))},M.prefetch=function(_){var b=this;this.cache.has(_)||this.cache.set(_,this.request(_,this.timeout,this.onRequestError.bind(this,"barba")).catch(function(P){b.logger.error(P)}),"prefetch")},M.F=function(){this.prefetchIgnore!==!0&&(document.addEventListener("mouseover",this.B),document.addEventListener("touchstart",this.B)),document.addEventListener("click",this.U),window.addEventListener("popstate",this.D)},M.H=function(){this.prefetchIgnore!==!0&&(document.removeEventListener("mouseover",this.B),document.removeEventListener("touchstart",this.B)),document.removeEventListener("click",this.U),window.removeEventListener("popstate",this.D)},M.B=function(_){var b=this,P=this.I(_);if(P){var z=this.dom.getHref(P);this.prevent.checkHref(z)||this.cache.has(z)||this.cache.set(z,this.request(z,this.timeout,this.onRequestError.bind(this,P)).catch(function(V){b.logger.error(V)}),"enter")}},M.U=function(_){var b=this.I(_);if(b)return this.transitions.isRunning&&this.preventRunning?(_.preventDefault(),void _.stopPropagation()):void this.go(this.dom.getHref(b),b,_)},M.D=function(_){this.go(this.url.getHref(),"popstate",_)},M.I=function(_){for(var b=_.target;b&&!this.dom.getHref(b);)b=b.parentNode;if(b&&!this.prevent.checkLink(b,_,this.dom.getHref(b)))return b},M.q=function(){var _=this.url.getHref(),b={container:this.dom.getContainer(),html:this.dom.getHtml(),namespace:this.dom.getNamespace(),url:t({href:_},this.url.parse(_))};this.C={current:b,next:t({},this.schemaPage),trigger:void 0},this.hooks.do("reset",this.data)},e(O,[{key:"data",get:function(){return this.C}},{key:"wrapper",get:function(){return this._}}]),O}())})});var ir=Da(hs(),1);function ht(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function xs(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}var Fe={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Kt={duration:.5,overwrite:!1,delay:0},Tr,Me,we,qe=1e8,oe=1/qe,pr=Math.PI*2,Ia=pr/4,za=0,Ss=Math.sqrt,Ra=Math.cos,$a=Math.sin,be=function(e){return typeof e=="string"},he=function(e){return typeof e=="function"},gt=function(e){return typeof e=="number"},Wi=function(e){return typeof e=="undefined"},st=function(e){return typeof e=="object"},$e=function(e){return e!==!1},Er=function(){return typeof window!="undefined"},Ri=function(e){return he(e)||be(e)},Ts=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Pe=Array.isArray,hr=/(?:-?\.?\d|\.)+/gi,Mr=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,$t=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ar=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Pr=/[+-]=-?[.\d]+/,Es=/[^,'"\[\]\s]+/gi,Fa=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ue,Ge,mr,Cr,Ne={},Bi={},Ms,Ps=function(e){return(Bi=Rt(e,Ne))&&Ce},Xi=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ni=function(e,t){return!t&&console.warn(e)},Cs=function(e,t){return e&&(Ne[e]=t)&&Bi&&(Bi[e]=t)||Ne},yi=function(){return 0},Va={suppressEvents:!0,isStart:!0,kill:!1},$i={suppressEvents:!0,kill:!1},Ba={suppressEvents:!0},Ar={},xt=[],gr={},As,ze={},or={},ms=30,Fi=[],Lr="",Or=function(e){var t=e[0],i,r;if(st(t)||he(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=Fi.length;r--&&!Fi[r].targetTest(t););i=Fi[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Ir(e[r],i)))||e.splice(r,1);return e},St=function(e){return e._gsap||Or(Ye(e))[0]._gsap},kr=function(e,t,i){return(i=e[t])&&he(i)?e[t]():Wi(i)&&e.getAttribute&&e.getAttribute(t)||i},Oe=function(e,t){return(e=e.split(",")).forEach(t)||e},me=function(e){return Math.round(e*1e5)/1e5||0},xe=function(e){return Math.round(e*1e7)/1e7||0},Ft=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},Na=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Hi=function(){var e=xt.length,t=xt.slice(0),i,r;for(gr={},xt.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Ls=function(e,t,i,r){xt.length&&!Me&&Hi(),e.render(t,i,r||Me&&t<0&&(e._initted||e._startAt)),xt.length&&!Me&&Hi()},Os=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Es).length<2?t:be(e)?e.trim():e},ks=function(e){return e},Xe=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Ha=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Rt=function(e,t){for(var i in t)e[i]=t[i];return e},gs=function s(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=st(t[i])?s(e[i]||(e[i]={}),t[i]):t[i]);return e},Gi=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},gi=function(e){var t=e.parent||ue,i=e.keyframes?Ha(Pe(e.keyframes)):Xe;if($e(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},Ga=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},Ds=function(e,t,i,r,n){i===void 0&&(i="_first"),r===void 0&&(r="_last");var a=e[r],o;if(n)for(o=t[n];a&&a[n]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},ji=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var n=t._prev,a=t._next;n?n._next=a:e[i]===t&&(e[i]=a),a?a._prev=n:e[r]===t&&(e[r]=n),t._next=t._prev=t.parent=null},Tt=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},It=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},qa=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},vr=function(e,t,i,r){return e._startAt&&(Me?e._startAt.revert($i):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Ya=function s(e){return!e||e._ts&&s(e.parent)},vs=function(e){return e._repeat?Qt(e._tTime,e=e.duration()+e._rDelay)*e:0},Qt=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},qi=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ui=function(e){return e._end=xe(e._start+(e._tDur/Math.abs(e._ts||e._rts||oe)||0))},Ki=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=xe(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ui(e),i._dirty||It(i,e)),e},Is=function(e,t){var i;if((t._time||t._initted&&!t._dur)&&(i=qi(e.rawTime(),t),(!t._dur||bi(0,t.totalDuration(),i)-t._tTime>oe)&&t.render(i,!0)),It(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-oe}},rt=function(e,t,i,r){return t.parent&&Tt(t),t._start=xe((gt(i)?i:i||e!==ue?He(e,i,t):e._time)+t._delay),t._end=xe(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Ds(e,t,"_first","_last",e._sort?"_start":0),wr(t)||(e._recent=t),r||Is(e,t),e._ts<0&&Ki(e,e._tTime),e},zs=function(e,t){return(Ne.ScrollTrigger||Xi("scrollTrigger",t))&&Ne.ScrollTrigger.create(t,e)},Rs=function(e,t,i,r,n){if($r(e,t,n),!e._initted)return 1;if(!i&&e._pt&&!Me&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&As!==Re.frame)return xt.push(e),e._lazy=[n,r],1},Wa=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},wr=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Xa=function(e,t,i,r){var n=e.ratio,a=t<0||!t&&(!e._start&&Wa(e)&&!(!e._initted&&wr(e))||(e._ts<0||e._dp._ts<0)&&!wr(e))?0:1,o=e._rDelay,l=0,c,d,u;if(o&&e._repeat&&(l=bi(0,e._tDur,t),d=Qt(l,o),e._yoyo&&d&1&&(a=1-a),d!==Qt(e._tTime,o)&&(n=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==n||Me||r||e._zTime===oe||!t&&e._zTime){if(!e._initted&&Rs(e,t,r,i,l))return;for(u=e._zTime,e._zTime=t||(i?oe:0),i||(i=t&&!u),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&vr(e,t,i,!0),e._onUpdate&&!i&&We(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&We(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Tt(e,1),!i&&!Me&&(We(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},ja=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Zt=function(e,t,i,r){var n=e._repeat,a=xe(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=n?n<0?1e10:xe(a*(n+1)+e._rDelay*n):a,o>0&&!r&&Ki(e,e._tTime=e._tDur*o),e.parent&&Ui(e),i||It(e.parent,e),e},ws=function(e){return e instanceof Ee?It(e):Zt(e,e._dur)},Ua={_start:0,endTime:yi,totalDuration:yi},He=function s(e,t,i){var r=e.labels,n=e._recent||Ua,a=e.duration()>=qe?n.endTime(!1):e._dur,o,l,c;return be(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?n._start:n.endTime(n._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?n:i).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&i&&(l=l/100*(Pe(i)?i[0]:i).totalDuration()),o>1?s(e,t.substr(0,o-1),i)+l:a+l)):t==null?a:+t},vi=function(e,t,i){var r=gt(t[1]),n=(r?2:1)+(e<2?0:1),a=t[n],o,l;if(r&&(a.duration=t[1]),a.parent=i,e){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=$e(l.vars.inherit)&&l.parent;a.immediateRender=$e(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[n-1]}return new ve(t[0],a,t[n+1])},Et=function(e,t){return e||e===0?t(e):t},bi=function(e,t,i){return i<e?e:i>t?t:i},Se=function(e,t){return!be(e)||!(t=Fa.exec(e))?"":t[1]},Ka=function(e,t,i){return Et(i,function(r){return bi(e,t,r)})},yr=[].slice,$s=function(e,t){return e&&st(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&st(e[0]))&&!e.nodeType&&e!==Ge},Qa=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var n;return be(r)&&!t||$s(r,1)?(n=i).push.apply(n,Ye(r)):i.push(r)})||i},Ye=function(e,t,i){return we&&!t&&we.selector?we.selector(e):be(e)&&!i&&(mr||!Jt())?yr.call((t||Cr).querySelectorAll(e),0):Pe(e)?Qa(e,i):$s(e)?yr.call(e,0):e?[e]:[]},_r=function(e){return e=Ye(e)[0]||Ni("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Ye(t,i.querySelectorAll?i:i===e?Ni("Invalid scope")||Cr.createElement("div"):e)}},Fs=function(e){return e.sort(function(){return .5-Math.random()})},Vs=function(e){if(he(e))return e;var t=st(e)?e:{each:e},i=zt(t.ease),r=t.from||0,n=parseFloat(t.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=t.axis,d=r,u=r;return be(r)?d=u={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(d=r[0],u=r[1]),function(f,h,g){var p=(g||t).length,v=a[p],m,y,w,x,S,C,R,T,E;if(!v){if(E=t.grid==="auto"?0:(t.grid||[1,qe])[1],!E){for(R=-qe;R<(R=g[E++].getBoundingClientRect().left)&&E<p;);E--}for(v=a[p]=[],m=l?Math.min(E,p)*d-.5:r%E,y=E===qe?0:l?p*u/E-.5:r/E|0,R=0,T=qe,C=0;C<p;C++)w=C%E-m,x=y-(C/E|0),v[C]=S=c?Math.abs(c==="y"?x:w):Ss(w*w+x*x),S>R&&(R=S),S<T&&(T=S);r==="random"&&Fs(v),v.max=R-T,v.min=T,v.v=p=(parseFloat(t.amount)||parseFloat(t.each)*(E>p?p-1:c?c==="y"?p/E:E:Math.max(E,p/E))||0)*(r==="edges"?-1:1),v.b=p<0?n-p:n,v.u=Se(t.amount||t.each)||0,i=i&&p<0?js(i):i}return p=(v[f]-v.min)/v.max||0,xe(v.b+(i?i(p):p)*v.v)+v.u}},br=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=xe(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(gt(i)?0:Se(i))}},Bs=function(e,t){var i=Pe(e),r,n;return!i&&st(e)&&(r=i=e.radius||qe,e.values?(e=Ye(e.values),(n=!gt(e[0]))&&(r*=r)):e=br(e.increment)),Et(t,i?he(e)?function(a){return n=e(a),Math.abs(n-a)<=r?n:a}:function(a){for(var o=parseFloat(n?a.x:a),l=parseFloat(n?a.y:0),c=qe,d=0,u=e.length,f,h;u--;)n?(f=e[u].x-o,h=e[u].y-l,f=f*f+h*h):f=Math.abs(e[u]-o),f<c&&(c=f,d=u);return d=!r||c<=r?e[d]:a,n||d===a||gt(a)?d:d+Se(a)}:br(e))},Ns=function(e,t,i,r){return Et(Pe(e)?!t:i===!0?!!(i=0):!r,function(){return Pe(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},Za=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(n,a){return a(n)},r)}},Ja=function(e,t){return function(i){return e(parseFloat(i))+(t||Se(i))}},eo=function(e,t,i){return Gs(e,t,0,1,i)},Hs=function(e,t,i){return Et(i,function(r){return e[~~t(r)]})},to=function s(e,t,i){var r=t-e;return Pe(e)?Hs(e,s(0,e.length),t):Et(i,function(n){return(r+(n-e)%r)%r+e})},io=function s(e,t,i){var r=t-e,n=r*2;return Pe(e)?Hs(e,s(0,e.length-1),t):Et(i,function(a){return a=(n+(a-e)%n)%n||0,e+(a>r?n-a:a)})},ii=function(e){for(var t=0,i="",r,n,a,o;~(r=e.indexOf("random(",t));)a=e.indexOf(")",r),o=e.charAt(r+7)==="[",n=e.substr(r+7,a-r-7).match(o?Es:hr),i+=e.substr(t,r-t)+Ns(o?n:+n[0],o?0:+n[1],+n[2]||1e-5),t=a+1;return i+e.substr(t,e.length-t)},Gs=function(e,t,i,r,n){var a=t-e,o=r-i;return Et(n,function(l){return i+((l-e)/a*o||0)})},ro=function s(e,t,i,r){var n=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!n){var a=be(e),o={},l,c,d,u,f;if(i===!0&&(r=1)&&(i=null),a)e={p:e},t={p:t};else if(Pe(e)&&!Pe(t)){for(d=[],u=e.length,f=u-2,c=1;c<u;c++)d.push(s(e[c-1],e[c]));u--,n=function(g){g*=u;var p=Math.min(f,~~g);return d[p](g-p)},i=t}else r||(e=Rt(Pe(e)?[]:{},e));if(!d){for(l in t)zr.call(o,e,l,"get",t[l]);n=function(g){return Br(g,o)||(a?e.p:e)}}}return Et(i,n)},ys=function(e,t,i){var r=e.labels,n=qe,a,o,l;for(a in r)o=r[a]-t,o<0==!!i&&o&&n>(o=Math.abs(o))&&(l=a,n=o);return l},We=function(e,t,i){var r=e.vars,n=r[t],a=we,o=e._ctx,l,c,d;if(n)return l=r[t+"Params"],c=r.callbackScope||e,i&&xt.length&&Hi(),o&&(we=o),d=l?n.apply(c,l):n.call(c),we=a,d},hi=function(e){return Tt(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Me),e.progress()<1&&We(e,"onInterrupt"),e},Ut,qs=[],Ys=function(e){if(!Er()){qs.push(e);return}e=!e.name&&e.default||e;var t=e.name,i=he(e),r=t&&!i&&e.init?function(){this._props=[]}:e,n={init:yi,render:Br,add:zr,kill:_o,modifier:yo,rawVars:0},a={targetTest:0,get:0,getSetter:Qi,aliases:{},register:0};if(Jt(),e!==r){if(ze[t])return;Xe(r,Xe(Gi(e,n),a)),Rt(r.prototype,Rt(n,Gi(e,a))),ze[r.prop=t]=r,e.targetTest&&(Fi.push(r),Ar[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Cs(t,r),e.register&&e.register(Ce,r,ke)},ae=255,mi={aqua:[0,ae,ae],lime:[0,ae,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ae],navy:[0,0,128],white:[ae,ae,ae],olive:[128,128,0],yellow:[ae,ae,0],orange:[ae,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ae,0,0],pink:[ae,192,203],cyan:[0,ae,ae],transparent:[ae,ae,ae,0]},lr=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*ae+.5|0},Ws=function(e,t,i){var r=e?gt(e)?[e>>16,e>>8&ae,e&ae]:0:mi.black,n,a,o,l,c,d,u,f,h,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),mi[e])r=mi[e];else if(e.charAt(0)==="#"){if(e.length<6&&(n=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+n+n+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&ae,r&ae,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&ae,e&ae]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(hr),!t)l=+r[0]%360/360,c=+r[1]/100,d=+r[2]/100,a=d<=.5?d*(c+1):d+c-d*c,n=d*2-a,r.length>3&&(r[3]*=1),r[0]=lr(l+1/3,n,a),r[1]=lr(l,n,a),r[2]=lr(l-1/3,n,a);else if(~e.indexOf("="))return r=e.match(Mr),i&&r.length<4&&(r[3]=1),r}else r=e.match(hr)||mi.transparent;r=r.map(Number)}return t&&!g&&(n=r[0]/ae,a=r[1]/ae,o=r[2]/ae,u=Math.max(n,a,o),f=Math.min(n,a,o),d=(u+f)/2,u===f?l=c=0:(h=u-f,c=d>.5?h/(2-u-f):h/(u+f),l=u===n?(a-o)/h+(a<o?6:0):u===a?(o-n)/h+2:(n-a)/h+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(d*100+.5)),i&&r.length<4&&(r[3]=1),r},Xs=function(e){var t=[],i=[],r=-1;return e.split(mt).forEach(function(n){var a=n.match($t)||[];t.push.apply(t,a),i.push(r+=a.length+1)}),t.c=i,t},_s=function(e,t,i){var r="",n=(e+r).match(mt),a=t?"hsla(":"rgba(",o=0,l,c,d,u;if(!n)return e;if(n=n.map(function(f){return(f=Ws(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(d=Xs(e),l=i.c,l.join(r)!==d.c.join(r)))for(c=e.replace(mt,"1").split($t),u=c.length-1;o<u;o++)r+=c[o]+(~l.indexOf(o)?n.shift()||a+"0,0,0,0)":(d.length?d:n.length?n:i).shift());if(!c)for(c=e.split(mt),u=c.length-1;o<u;o++)r+=c[o]+n[o];return r+c[u]},mt=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in mi)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),so=/hsl[a]?\(/,Dr=function(e){var t=e.join(" "),i;if(mt.lastIndex=0,mt.test(t))return i=so.test(t),e[1]=_s(e[1],i),e[0]=_s(e[0],i,Xs(e[1])),!0},_i,Re=function(){var s=Date.now,e=500,t=33,i=s(),r=i,n=1e3/240,a=n,o=[],l,c,d,u,f,h,g=function p(v){var m=s()-r,y=v===!0,w,x,S,C;if(m>e&&(i+=m-t),r+=m,S=r-i,w=S-a,(w>0||y)&&(C=++u.frame,f=S-u.time*1e3,u.time=S=S/1e3,a+=w+(w>=n?4:n-w),x=1),y||(l=c(p)),x)for(h=0;h<o.length;h++)o[h](S,f,C,v)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(v){return f/(1e3/(v||60))},wake:function(){Ms&&(!mr&&Er()&&(Ge=mr=window,Cr=Ge.document||{},Ne.gsap=Ce,(Ge.gsapVersions||(Ge.gsapVersions=[])).push(Ce.version),Ps(Bi||Ge.GreenSockGlobals||!Ge.gsap&&Ge||{}),d=Ge.requestAnimationFrame,qs.forEach(Ys)),l&&u.sleep(),c=d||function(v){return setTimeout(v,a-u.time*1e3+1|0)},_i=1,g(2))},sleep:function(){(d?Ge.cancelAnimationFrame:clearTimeout)(l),_i=0,c=yi},lagSmoothing:function(v,m){e=v||1/0,t=Math.min(m||33,e)},fps:function(v){n=1e3/(v||240),a=u.time*1e3+n},add:function(v,m,y){var w=m?function(x,S,C,R){v(x,S,C,R),u.remove(w)}:v;return u.remove(v),o[y?"unshift":"push"](w),Jt(),w},remove:function(v,m){~(m=o.indexOf(v))&&o.splice(m,1)&&h>=m&&h--},_listeners:o},u}(),Jt=function(){return!_i&&Re.wake()},re={},no=/^[\d.\-M][\d.\-,\s]/,ao=/["']/g,oo=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],n=1,a=i.length,o,l,c;n<a;n++)l=i[n],o=n!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[r]=isNaN(c)?c.replace(ao,"").trim():+c,r=l.substr(o+1).trim();return t},lo=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},co=function(e){var t=(e+"").split("("),i=re[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[oo(t[1])]:lo(e).split(",").map(Os)):re._CE&&no.test(e)?re._CE("",e):i},js=function(e){return function(t){return 1-e(1-t)}},Us=function s(e,t){for(var i=e._first,r;i;)i instanceof Ee?s(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?s(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},zt=function(e,t){return e&&(he(e)?e:re[e]||co(e))||t},Vt=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var n={easeIn:t,easeOut:i,easeInOut:r},a;return Oe(e,function(o){re[o]=Ne[o]=n,re[a=o.toLowerCase()]=i;for(var l in n)re[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=re[o+"."+l]=n[l]}),n},Ks=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},cr=function s(e,t,i){var r=t>=1?t:1,n=(i||(e?.3:.45))/(t<1?t:1),a=n/pr*(Math.asin(1/r)||0),o=function(d){return d===1?1:r*Math.pow(2,-10*d)*$a((d-a)*n)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Ks(o);return n=pr/n,l.config=function(c,d){return s(e,c,d)},l},dr=function s(e,t){t===void 0&&(t=1.70158);var i=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?i:e==="in"?function(n){return 1-i(1-n)}:Ks(i);return r.config=function(n){return s(e,n)},r};Oe("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Vt(s+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});re.Linear.easeNone=re.none=re.Linear.easeIn;Vt("Elastic",cr("in"),cr("out"),cr());(function(s,e){var t=1/e,i=2*t,r=2.5*t,n=function(o){return o<t?s*o*o:o<i?s*Math.pow(o-1.5/e,2)+.75:o<r?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};Vt("Bounce",function(a){return 1-n(1-a)},n)})(7.5625,2.75);Vt("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});Vt("Circ",function(s){return-(Ss(1-s*s)-1)});Vt("Sine",function(s){return s===1?1:-Ra(s*Ia)+1});Vt("Back",dr("in"),dr("out"),dr());re.SteppedEase=re.steps=Ne.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),n=t?1:0,a=1-oe;return function(o){return((r*bi(0,a,o)|0)+n)*i}}};Kt.ease=re["quad.out"];Oe("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Lr+=s+","+s+"Params,"});var Ir=function(e,t){this.id=za++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:kr,this.set=t?t.getSetter:Qi},ei=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Zt(this,+t.duration,1,1),this.data=t.data,we&&(this._ctx=we,we.data.push(this)),_i||Re.wake()}var e=s.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Zt(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Jt(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(Ki(this,i),!n._dp||n.parent||Is(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&rt(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===oe||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Ls(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+vs(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+vs(this),r):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(i,r){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*n,r):this._repeat?Qt(this._tTime,n)+1:1},e.timeScale=function(i){if(!arguments.length)return this._rts===-oe?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?qi(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-oe?0:this._rts,this.totalTime(bi(-Math.abs(this._delay),this._tDur,r),!0),Ui(this),qa(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Jt(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==oe&&(this._tTime-=oe)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&rt(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+($e(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?qi(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=Ba);var r=Me;return Me=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Me=r,this},e.globalTime=function(i){for(var r=this,n=arguments.length?i:r.rawTime();r;)n=r._start+n/(r._ts||1),r=r._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(i):n},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,ws(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,ws(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(He(this,i),$e(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,$e(r))},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-oe:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-oe,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,n;return!!(!i||this._ts&&this._initted&&i.isActive()&&(n=i.rawTime(!0))>=r&&n<this.endTime(!0)-oe)},e.eventCallback=function(i,r,n){var a=this.vars;return arguments.length>1?(r?(a[i]=r,n&&(a[i+"Params"]=n),i==="onUpdate"&&(this._onUpdate=r)):delete a[i],this):a[i]},e.then=function(i){var r=this;return new Promise(function(n){var a=he(i)?i:ks,o=function(){var c=r.then;r.then=null,he(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),n(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?o():r._prom=o})},e.kill=function(){hi(this)},s}();Xe(ei.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-oe,_prom:0,_ps:!1,_rts:1});var Ee=function(s){xs(e,s);function e(i,r){var n;return i===void 0&&(i={}),n=s.call(this,i)||this,n.labels={},n.smoothChildTiming=!!i.smoothChildTiming,n.autoRemoveChildren=!!i.autoRemoveChildren,n._sort=$e(i.sortChildren),ue&&rt(i.parent||ue,ht(n),r),i.reversed&&n.reverse(),i.paused&&n.paused(!0),i.scrollTrigger&&zs(ht(n),i.scrollTrigger),n}var t=e.prototype;return t.to=function(r,n,a){return vi(0,arguments,this),this},t.from=function(r,n,a){return vi(1,arguments,this),this},t.fromTo=function(r,n,a,o){return vi(2,arguments,this),this},t.set=function(r,n,a){return n.duration=0,n.parent=this,gi(n).repeatDelay||(n.repeat=0),n.immediateRender=!!n.immediateRender,new ve(r,n,He(this,a),1),this},t.call=function(r,n,a){return rt(this,ve.delayedCall(0,r,n),a)},t.staggerTo=function(r,n,a,o,l,c,d){return a.duration=n,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=d,a.parent=this,new ve(r,a,He(this,l)),this},t.staggerFrom=function(r,n,a,o,l,c,d){return a.runBackwards=1,gi(a).immediateRender=$e(a.immediateRender),this.staggerTo(r,n,a,o,l,c,d)},t.staggerFromTo=function(r,n,a,o,l,c,d,u){return o.startAt=a,gi(o).immediateRender=$e(o.immediateRender),this.staggerTo(r,n,o,l,c,d,u)},t.render=function(r,n,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,d=r<=0?0:xe(r),u=this._zTime<0!=r<0&&(this._initted||!c),f,h,g,p,v,m,y,w,x,S,C,R;if(this!==ue&&d>l&&r>=0&&(d=l),d!==this._tTime||a||u){if(o!==this._time&&c&&(d+=this._time-o,r+=this._time-o),f=d,x=this._start,w=this._ts,m=!w,u&&(c||(o=this._zTime),(r||!n)&&(this._zTime=r)),this._repeat){if(C=this._yoyo,v=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(v*100+r,n,a);if(f=xe(d%v),d===l?(p=this._repeat,f=c):(p=~~(d/v),p&&p===d/v&&(f=c,p--),f>c&&(f=c)),S=Qt(this._tTime,v),!o&&this._tTime&&S!==p&&this._tTime-S*v-this._dur<=0&&(S=p),C&&p&1&&(f=c-f,R=1),p!==S&&!this._lock){var T=C&&S&1,E=T===(C&&p&1);if(p<S&&(T=!T),o=T?0:c,this._lock=1,this.render(o||(R?0:xe(p*v)),n,!c)._lock=0,this._tTime=d,!n&&this.parent&&We(this,"onRepeat"),this.vars.repeatRefresh&&!R&&(this.invalidate()._lock=1),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,E&&(this._lock=2,o=T?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!R&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;Us(this,R)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=ja(this,xe(o),xe(f)),y&&(d-=f-(f=y._start))),this._tTime=d,this._time=f,this._act=!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&f&&!n&&!p&&(We(this,"onStart"),this._tTime!==d))return this;if(f>=o&&r>=0)for(h=this._first;h;){if(g=h._next,(h._act||f>=h._start)&&h._ts&&y!==h){if(h.parent!==this)return this.render(r,n,a);if(h.render(h._ts>0?(f-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(f-h._start)*h._ts,n,a),f!==this._time||!this._ts&&!m){y=0,g&&(d+=this._zTime=-oe);break}}h=g}else{h=this._last;for(var k=r<0?r:f;h;){if(g=h._prev,(h._act||k<=h._end)&&h._ts&&y!==h){if(h.parent!==this)return this.render(r,n,a);if(h.render(h._ts>0?(k-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(k-h._start)*h._ts,n,a||Me&&(h._initted||h._startAt)),f!==this._time||!this._ts&&!m){y=0,g&&(d+=this._zTime=k?-oe:oe);break}}h=g}}if(y&&!n&&(this.pause(),y.render(f>=o?0:-oe)._zTime=f>=o?1:-1,this._ts))return this._start=x,Ui(this),this.render(r,n,a);this._onUpdate&&!n&&We(this,"onUpdate",!0),(d===l&&this._tTime>=this.totalDuration()||!d&&o)&&(x===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(d===l&&this._ts>0||!d&&this._ts<0)&&Tt(this,1),!n&&!(r<0&&!o)&&(d||o||!l)&&(We(this,d===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,n){var a=this;if(gt(n)||(n=He(this,n,r)),!(r instanceof ei)){if(Pe(r))return r.forEach(function(o){return a.add(o,n)}),this;if(be(r))return this.addLabel(r,n);if(he(r))r=ve.delayedCall(0,r);else return this}return this!==r?rt(this,r,n):this},t.getChildren=function(r,n,a,o){r===void 0&&(r=!0),n===void 0&&(n=!0),a===void 0&&(a=!0),o===void 0&&(o=-qe);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof ve?n&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,n,a)))),c=c._next;return l},t.getById=function(r){for(var n=this.getChildren(1,1,1),a=n.length;a--;)if(n[a].vars.id===r)return n[a]},t.remove=function(r){return be(r)?this.removeLabel(r):he(r)?this.killTweensOf(r):(ji(this,r),r===this._recent&&(this._recent=this._last),It(this))},t.totalTime=function(r,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=xe(Re.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),s.prototype.totalTime.call(this,r,n),this._forcing=0,this):this._tTime},t.addLabel=function(r,n){return this.labels[r]=He(this,n),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,n,a){var o=ve.delayedCall(0,n||yi,a);return o.data="isPause",this._hasPause=1,rt(this,o,He(this,r))},t.removePause=function(r){var n=this._first;for(r=He(this,r);n;)n._start===r&&n.data==="isPause"&&Tt(n),n=n._next},t.killTweensOf=function(r,n,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)bt!==o[l]&&o[l].kill(r,n);return this},t.getTweensOf=function(r,n){for(var a=[],o=Ye(r),l=this._first,c=gt(n),d;l;)l instanceof ve?Na(l._targets,o)&&(c?(!bt||l._initted&&l._ts)&&l.globalTime(0)<=n&&l.globalTime(l.totalDuration())>n:!n||l.isActive())&&a.push(l):(d=l.getTweensOf(o,n)).length&&a.push.apply(a,d),l=l._next;return a},t.tweenTo=function(r,n){n=n||{};var a=this,o=He(a,r),l=n,c=l.startAt,d=l.onStart,u=l.onStartParams,f=l.immediateRender,h,g=ve.to(a,Xe({ease:n.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:n.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||oe,onStart:function(){if(a.pause(),!h){var v=n.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==v&&Zt(g,v,0,1).render(g._time,!0,!0),h=1}d&&d.apply(g,u||[])}},n));return f?g.render(0):g},t.tweenFromTo=function(r,n,a){return this.tweenTo(n,Xe({startAt:{time:He(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),ys(this,He(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),ys(this,He(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+oe)},t.shiftChildren=function(r,n,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(n)for(c in l)l[c]>=a&&(l[c]+=r);return It(this)},t.invalidate=function(r){var n=this._first;for(this._lock=0;n;)n.invalidate(r),n=n._next;return s.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var n=this._first,a;n;)a=n._next,this.remove(n),n=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),It(this)},t.totalDuration=function(r){var n=0,a=this,o=a._last,l=qe,c,d,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),d=o._start,d>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,rt(a,o,d-o._delay,1)._lock=0):l=d,d<0&&o._ts&&(n-=d,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=d/a._ts,a._time-=d,a._tTime-=d),a.shiftChildren(-d,!1,-1/0),l=0),o._end>n&&o._ts&&(n=o._end),o=c;Zt(a,a===ue&&a._time>n?a._time:n,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(ue._ts&&(Ls(ue,qi(r,ue)),As=Re.frame),Re.frame>=ms){ms+=Fe.autoSleep||120;var n=ue._first;if((!n||!n._ts)&&Fe.autoSleep&&Re._listeners.length<2){for(;n&&!n._ts;)n=n._next;n||Re.sleep()}}},e}(ei);Xe(Ee.prototype,{_lock:0,_hasPause:0,_forcing:0});var uo=function(e,t,i,r,n,a,o){var l=new ke(this._pt,e,t,0,1,Vr,null,n),c=0,d=0,u,f,h,g,p,v,m,y;for(l.b=i,l.e=r,i+="",r+="",(m=~r.indexOf("random("))&&(r=ii(r)),a&&(y=[i,r],a(y,e,t),i=y[0],r=y[1]),f=i.match(ar)||[];u=ar.exec(r);)g=u[0],p=r.substring(c,u.index),h?h=(h+1)%5:p.substr(-5)==="rgba("&&(h=1),g!==f[d++]&&(v=parseFloat(f[d-1])||0,l._pt={_next:l._pt,p:p||d===1?p:",",s:v,c:g.charAt(1)==="="?Ft(v,g)-v:parseFloat(g)-v,m:h&&h<4?Math.round:0},c=ar.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(Pr.test(r)||m)&&(l.e=0),this._pt=l,l},zr=function(e,t,i,r,n,a,o,l,c,d){he(r)&&(r=r(n||0,e,a));var u=e[t],f=i!=="get"?i:he(u)?c?e[t.indexOf("set")||!he(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,h=he(u)?c?go:Js:Fr,g;if(be(r)&&(~r.indexOf("random(")&&(r=ii(r)),r.charAt(1)==="="&&(g=Ft(f,r)+(Se(f)||0),(g||g===0)&&(r=g))),!d||f!==r||xr)return!isNaN(f*r)&&r!==""?(g=new ke(this._pt,e,t,+f||0,r-(f||0),typeof u=="boolean"?wo:en,0,h),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!u&&!(t in e)&&Xi(t,r),uo.call(this,e,t,f,r,h,l||Fe.stringFilter,c))},fo=function(e,t,i,r,n){if(he(e)&&(e=wi(e,n,t,i,r)),!st(e)||e.style&&e.nodeType||Pe(e)||Ts(e))return be(e)?wi(e,n,t,i,r):e;var a={},o;for(o in e)a[o]=wi(e[o],n,t,i,r);return a},Rr=function(e,t,i,r,n,a){var o,l,c,d;if(ze[e]&&(o=new ze[e]).init(n,o.rawVars?t[e]:fo(t[e],r,n,a,i),i,r,a)!==!1&&(i._pt=l=new ke(i._pt,n,e,0,1,o.render,o,0,o.priority),i!==Ut))for(c=i._ptLookup[i._targets.indexOf(n)],d=o._props.length;d--;)c[o._props[d]]=l;return o},bt,xr,$r=function s(e,t,i){var r=e.vars,n=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,d=r.onUpdateParams,u=r.callbackScope,f=r.runBackwards,h=r.yoyoEase,g=r.keyframes,p=r.autoRevert,v=e._dur,m=e._startAt,y=e._targets,w=e.parent,x=w&&w.data==="nested"?w.vars.targets:y,S=e._overwrite==="auto"&&!Tr,C=e.timeline,R,T,E,k,F,L,A,D,B,G,I,$,W;if(C&&(!g||!n)&&(n="none"),e._ease=zt(n,Kt.ease),e._yEase=h?js(zt(h===!0?n:h,Kt.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!C&&!!r.runBackwards,!C||g&&!r.stagger){if(D=y[0]?St(y[0]).harness:0,$=D&&r[D.prop],R=Gi(r,Ar),m&&(m._zTime<0&&m.progress(1),t<0&&f&&o&&!p?m.render(-1,!0):m.revert(f&&v?$i:Va),m._lazy=0),a){if(Tt(e._startAt=ve.set(y,Xe({data:"isStart",overwrite:!1,parent:w,immediateRender:!0,lazy:!m&&$e(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:d,callbackScope:u,stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Me||!o&&!p)&&e._startAt.revert($i),o&&v&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(f&&v&&!m){if(t&&(o=!1),E=Xe({overwrite:!1,data:"isFromStart",lazy:o&&!m&&$e(l),immediateRender:o,stagger:0,parent:w},R),$&&(E[D.prop]=$),Tt(e._startAt=ve.set(y,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Me?e._startAt.revert($i):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,oe,oe);else if(!t)return}for(e._pt=e._ptCache=0,l=v&&$e(l)||l&&!v,T=0;T<y.length;T++){if(F=y[T],A=F._gsap||Or(y)[T]._gsap,e._ptLookup[T]=G={},gr[A.id]&&xt.length&&Hi(),I=x===y?T:x.indexOf(F),D&&(B=new D).init(F,$||R,e,I,x)!==!1&&(e._pt=k=new ke(e._pt,F,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(Q){G[Q]=k}),B.priority&&(L=1)),!D||$)for(E in R)ze[E]&&(B=Rr(E,R,e,I,F,x))?B.priority&&(L=1):G[E]=k=zr.call(e,F,E,"get",R[E],I,x,0,r.stringFilter);e._op&&e._op[T]&&e.kill(F,e._op[T]),S&&e._pt&&(bt=e,ue.killTweensOf(F,G,e.globalTime(t)),W=!e.parent,bt=0),e._pt&&l&&(gr[A.id]=1)}L&&Nr(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!W,g&&t<=0&&C.render(qe,!0,!0)},po=function(e,t,i,r,n,a,o){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,d,u,f;if(!l)for(l=e._ptCache[t]=[],u=e._ptLookup,f=e._targets.length;f--;){if(c=u[f][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return xr=1,e.vars[t]="+=0",$r(e,o),xr=0,1;l.push(c)}for(f=l.length;f--;)d=l[f],c=d._pt||d,c.s=(r||r===0)&&!n?r:c.s+(r||0)+a*c.c,c.c=i-c.s,d.e&&(d.e=me(i)+Se(d.e)),d.b&&(d.b=c.s+Se(d.b))},ho=function(e,t){var i=e[0]?St(e[0]).harness:0,r=i&&i.aliases,n,a,o,l;if(!r)return t;n=Rt({},t);for(a in r)if(a in n)for(l=r[a].split(","),o=l.length;o--;)n[l[o]]=n[a];return n},mo=function(e,t,i,r){var n=t.ease||r||"power1.inOut",a,o;if(Pe(t))o=i[e]||(i[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:n})});else for(a in t)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:n})},wi=function(e,t,i,r,n){return he(e)?e.call(t,i,r,n):be(e)&&~e.indexOf("random(")?ii(e):e},Qs=Lr+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Zs={};Oe(Qs+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Zs[s]=1});var ve=function(s){xs(e,s);function e(i,r,n,a){var o;typeof r=="number"&&(n.duration=r,r=n,n=null),o=s.call(this,a?r:gi(r))||this;var l=o.vars,c=l.duration,d=l.delay,u=l.immediateRender,f=l.stagger,h=l.overwrite,g=l.keyframes,p=l.defaults,v=l.scrollTrigger,m=l.yoyoEase,y=r.parent||ue,w=(Pe(i)||Ts(i)?gt(i[0]):"length"in r)?[i]:Ye(i),x,S,C,R,T,E,k,F;if(o._targets=w.length?Or(w):Ni("GSAP target "+i+" not found. https://greensock.com",!Fe.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=h,g||f||Ri(c)||Ri(d)){if(r=o.vars,x=o.timeline=new Ee({data:"nested",defaults:p||{},targets:y&&y.data==="nested"?y.vars.targets:w}),x.kill(),x.parent=x._dp=ht(o),x._start=0,f||Ri(c)||Ri(d)){if(R=w.length,k=f&&Vs(f),st(f))for(T in f)~Qs.indexOf(T)&&(F||(F={}),F[T]=f[T]);for(S=0;S<R;S++)C=Gi(r,Zs),C.stagger=0,m&&(C.yoyoEase=m),F&&Rt(C,F),E=w[S],C.duration=+wi(c,ht(o),S,E,w),C.delay=(+wi(d,ht(o),S,E,w)||0)-o._delay,!f&&R===1&&C.delay&&(o._delay=d=C.delay,o._start+=d,C.delay=0),x.to(E,C,k?k(S,E,w):0),x._ease=re.none;x.duration()?c=d=0:o.timeline=0}else if(g){gi(Xe(x.vars.defaults,{ease:"none"})),x._ease=zt(g.ease||r.ease||"none");var L=0,A,D,B;if(Pe(g))g.forEach(function(G){return x.to(w,G,">")}),x.duration();else{C={};for(T in g)T==="ease"||T==="easeEach"||mo(T,g[T],C,g.easeEach);for(T in C)for(A=C[T].sort(function(G,I){return G.t-I.t}),L=0,S=0;S<A.length;S++)D=A[S],B={ease:D.e,duration:(D.t-(S?A[S-1].t:0))/100*c},B[T]=D.v,x.to(w,B,L),L+=B.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||o.duration(c=x.duration())}else o.timeline=0;return h===!0&&!Tr&&(bt=ht(o),ue.killTweensOf(w),bt=0),rt(y,ht(o),n),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(u||!c&&!g&&o._start===xe(y._time)&&$e(u)&&Ya(ht(o))&&y.data!=="nested")&&(o._tTime=-oe,o.render(Math.max(0,-d)||0)),v&&zs(ht(o),v),o}var t=e.prototype;return t.render=function(r,n,a){var o=this._time,l=this._tDur,c=this._dur,d=r<0,u=r>l-oe&&!d?l:r<oe?0:r,f,h,g,p,v,m,y,w,x;if(!c)Xa(this,r,n,a);else if(u!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d){if(f=u,w=this.timeline,this._repeat){if(p=c+this._rDelay,this._repeat<-1&&d)return this.totalTime(p*100+r,n,a);if(f=xe(u%p),u===l?(g=this._repeat,f=c):(g=~~(u/p),g&&g===u/p&&(f=c,g--),f>c&&(f=c)),m=this._yoyo&&g&1,m&&(x=this._yEase,f=c-f),v=Qt(this._tTime,p),f===o&&!a&&this._initted)return this._tTime=u,this;g!==v&&(w&&this._yEase&&Us(w,m),this.vars.repeatRefresh&&!m&&!this._lock&&(this._lock=a=1,this.render(xe(p*g),!0).invalidate()._lock=0))}if(!this._initted){if(Rs(this,d?r:f,a,n,u))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(r,n,a)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(x||this._ease)(f/c),this._from&&(this.ratio=y=1-y),f&&!o&&!n&&!g&&(We(this,"onStart"),this._tTime!==u))return this;for(h=this._pt;h;)h.r(y,h.d),h=h._next;w&&w.render(r<0?r:!f&&m?-oe:w._dur*w._ease(f/this._dur),n,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!n&&(d&&vr(this,r,n,a),We(this,"onUpdate")),this._repeat&&g!==v&&this.vars.onRepeat&&!n&&this.parent&&We(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(d&&!this._onUpdate&&vr(this,r,!0,!0),(r||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Tt(this,1),!n&&!(d&&!o)&&(u||o||m)&&(We(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),s.prototype.invalidate.call(this,r)},t.resetTo=function(r,n,a,o){_i||Re.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||$r(this,l),c=this._ease(l/this._dur),po(this,r,n,a,o,c,l)?this.resetTo(r,n,a,o):(Ki(this,0),this.parent||Ds(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,n){if(n===void 0&&(n="all"),!r&&(!n||n==="all"))return this._lazy=this._pt=0,this.parent?hi(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,n,bt&&bt.vars.overwrite!==!0)._first||hi(this),this.parent&&a!==this.timeline.totalDuration()&&Zt(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?Ye(r):o,c=this._ptLookup,d=this._pt,u,f,h,g,p,v,m;if((!n||n==="all")&&Ga(o,l))return n==="all"&&(this._pt=0),hi(this);for(u=this._op=this._op||[],n!=="all"&&(be(n)&&(p={},Oe(n,function(y){return p[y]=1}),n=p),n=ho(o,n)),m=o.length;m--;)if(~l.indexOf(o[m])){f=c[m],n==="all"?(u[m]=n,g=f,h={}):(h=u[m]=u[m]||{},g=n);for(p in g)v=f&&f[p],v&&((!("kill"in v.d)||v.d.kill(p)===!0)&&ji(this,v,"_pt"),delete f[p]),h!=="all"&&(h[p]=1)}return this._initted&&!this._pt&&d&&hi(this),this},e.to=function(r,n){return new e(r,n,arguments[2])},e.from=function(r,n){return vi(1,arguments)},e.delayedCall=function(r,n,a,o){return new e(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:n,onReverseComplete:n,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,n,a){return vi(2,arguments)},e.set=function(r,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new e(r,n)},e.killTweensOf=function(r,n,a){return ue.killTweensOf(r,n,a)},e}(ei);Xe(ve.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Oe("staggerTo,staggerFrom,staggerFromTo",function(s){ve[s]=function(){var e=new Ee,t=yr.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Fr=function(e,t,i){return e[t]=i},Js=function(e,t,i){return e[t](i)},go=function(e,t,i,r){return e[t](r.fp,i)},vo=function(e,t,i){return e.setAttribute(t,i)},Qi=function(e,t){return he(e[t])?Js:Wi(e[t])&&e.setAttribute?vo:Fr},en=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},wo=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Vr=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},Br=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},yo=function(e,t,i,r){for(var n=this._pt,a;n;)a=n._next,n.p===r&&n.modifier(e,t,i),n=a},_o=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?ji(this,t,"_pt"):t.dep||(i=1),t=r;return!i},bo=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},Nr=function(e){for(var t=e._pt,i,r,n,a;t;){for(i=t._next,r=n;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:n=t,(t._next=r)?r._prev=t:a=t,t=i}e._pt=n},ke=function(){function s(t,i,r,n,a,o,l,c,d){this.t=i,this.s=n,this.c=a,this.p=r,this.r=o||en,this.d=l||this,this.set=c||Fr,this.pr=d||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(i,r,n){this.mSet=this.mSet||this.set,this.set=bo,this.m=i,this.mt=n,this.tween=r},s}();Oe(Lr+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Ar[s]=1});Ne.TweenMax=Ne.TweenLite=ve;Ne.TimelineLite=Ne.TimelineMax=Ee;ue=new Ee({sortChildren:!1,defaults:Kt,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Fe.stringFilter=Dr;var ti=[],Vi={},xo=[],bs=0,ur=function(e){return(Vi[e]||xo).map(function(t){return t()})},Sr=function(){var e=Date.now(),t=[];e-bs>2&&(ur("matchMediaInit"),ti.forEach(function(i){var r=i.queries,n=i.conditions,a,o,l,c;for(o in r)a=Ge.matchMedia(r[o]).matches,a&&(l=1),a!==n[o]&&(n[o]=a,c=1);c&&(i.revert(),l&&t.push(i))}),ur("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i)}),bs=e,ur("matchMedia"))},tn=function(){function s(t,i){this.selector=i&&_r(i),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=s.prototype;return e.add=function(i,r,n){he(i)&&(n=r,r=i,i=he);var a=this,o=function(){var c=we,d=a.selector,u;return c&&c!==a&&c.data.push(a),n&&(a.selector=_r(n)),we=a,u=r.apply(a,arguments),he(u)&&a._r.push(u),we=c,a.selector=d,a.isReverted=!1,u};return a.last=o,i===he?o(a):i?a[i]=o:o},e.ignore=function(i){var r=we;we=null,i(this),we=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof s?i.push.apply(i,r.getTweens()):r instanceof ve&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var n=this;if(i){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(i)}),this.data.forEach(function(l){return!(l instanceof ei)&&l.revert&&l.revert(i)}),this._r.forEach(function(l){return l(i,n)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),r){var o=ti.indexOf(this);~o&&ti.splice(o,1)}},e.revert=function(i){this.kill(i||{})},s}(),So=function(){function s(t){this.contexts=[],this.scope=t}var e=s.prototype;return e.add=function(i,r,n){st(i)||(i={matches:i});var a=new tn(0,n||this.scope),o=a.conditions={},l,c,d;this.contexts.push(a),r=a.add("onMatch",r),a.queries=i;for(c in i)c==="all"?d=1:(l=Ge.matchMedia(i[c]),l&&(ti.indexOf(a)<0&&ti.push(a),(o[c]=l.matches)&&(d=1),l.addListener?l.addListener(Sr):l.addEventListener("change",Sr)));return d&&r(a),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},s}(),Yi={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return Ys(r)})},timeline:function(e){return new Ee(e)},getTweensOf:function(e,t){return ue.getTweensOf(e,t)},getProperty:function(e,t,i,r){be(e)&&(e=Ye(e)[0]);var n=St(e||{}).get,a=i?ks:Os;return i==="native"&&(i=""),e&&(t?a((ze[t]&&ze[t].get||n)(e,t,i,r)):function(o,l,c){return a((ze[o]&&ze[o].get||n)(e,o,l,c))})},quickSetter:function(e,t,i){if(e=Ye(e),e.length>1){var r=e.map(function(d){return Ce.quickSetter(d,t,i)}),n=r.length;return function(d){for(var u=n;u--;)r[u](d)}}e=e[0]||{};var a=ze[t],o=St(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(d){var u=new a;Ut._pt=0,u.init(e,i?d+i:d,Ut,0,[e]),u.render(1,u),Ut._pt&&Br(1,Ut)}:o.set(e,l);return a?c:function(d){return c(e,l,i?d+i:d,o,1)}},quickTo:function(e,t,i){var r,n=Ce.to(e,Rt((r={},r[t]="+=0.1",r.paused=!0,r),i||{})),a=function(l,c,d){return n.resetTo(t,l,c,d)};return a.tween=n,a},isTweening:function(e){return ue.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=zt(e.ease,Kt.ease)),gs(Kt,e||{})},config:function(e){return gs(Fe,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,n=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!ze[o]&&!Ne[o]&&Ni(t+" effect requires "+o+" plugin.")}),or[t]=function(o,l,c){return i(Ye(o),Xe(l||{},n),c)},a&&(Ee.prototype[t]=function(o,l,c){return this.add(or[t](o,st(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){re[e]=zt(t)},parseEase:function(e,t){return arguments.length?zt(e,t):re},getById:function(e){return ue.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Ee(e),r,n;for(i.smoothChildTiming=$e(e.smoothChildTiming),ue.remove(i),i._dp=0,i._time=i._tTime=ue._time,r=ue._first;r;)n=r._next,(t||!(!r._dur&&r instanceof ve&&r.vars.onComplete===r._targets[0]))&&rt(i,r,r._start-r._delay),r=n;return rt(ue,i,0),i},context:function(e,t){return e?new tn(e,t):we},matchMedia:function(e){return new So(e)},matchMediaRefresh:function(){return ti.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Sr()},addEventListener:function(e,t){var i=Vi[e]||(Vi[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Vi[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:to,wrapYoyo:io,distribute:Vs,random:Ns,snap:Bs,normalize:eo,getUnit:Se,clamp:Ka,splitColor:Ws,toArray:Ye,selector:_r,mapRange:Gs,pipe:Za,unitize:Ja,interpolate:ro,shuffle:Fs},install:Ps,effects:or,ticker:Re,updateRoot:Ee.updateRoot,plugins:ze,globalTimeline:ue,core:{PropTween:ke,globals:Cs,Tween:ve,Timeline:Ee,Animation:ei,getCache:St,_removeLinkedListItem:ji,reverting:function(){return Me},context:function(e){return e&&we&&(we.data.push(e),e._ctx=we),we},suppressOverwrites:function(e){return Tr=e}}};Oe("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Yi[s]=ve[s]});Re.add(Ee.updateRoot);Ut=Yi.to({},{duration:0});var To=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},Eo=function(e,t){var i=e._targets,r,n,a;for(r in t)for(n=i.length;n--;)a=e._ptLookup[n][r],a&&(a=a.d)&&(a._pt&&(a=To(a,r)),a&&a.modifier&&a.modifier(t[r],e,i[n],r))},fr=function(e,t){return{name:e,rawVars:1,init:function(r,n,a){a._onInit=function(o){var l,c;if(be(n)&&(l={},Oe(n,function(d){return l[d]=1}),n=l),t){l={};for(c in n)l[c]=t(n[c]);n=l}Eo(o,n)}}}},Ce=Yi.registerPlugin({name:"attr",init:function(e,t,i,r,n){var a,o,l;this.tween=i;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],r,n,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var i=t._pt;i;)Me?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},fr("roundProps",br),fr("modifiers"),fr("snap",Bs))||Yi;ve.version=Ee.version=Ce.version="3.11.5";Ms=1;Er()&&Jt();var Mo=re.Power0,Po=re.Power1,Co=re.Power2,Ao=re.Power3,Lo=re.Power4,Oo=re.Linear,ko=re.Quad,Do=re.Cubic,Io=re.Quart,zo=re.Quint,Ro=re.Strong,$o=re.Elastic,Fo=re.Back,Vo=re.SteppedEase,Bo=re.Bounce,No=re.Sine,Ho=re.Expo,Go=re.Circ;var rn,Mt,si,jr,Gt,qo,sn,Ur,Yo=function(){return typeof window!="undefined"},wt={},Ht=180/Math.PI,ni=Math.PI/180,ri=Math.atan2,nn=1e8,Kr=/([A-Z])/g,Wo=/(left|right|width|margin|padding|x)/i,Xo=/[\s,\(]\S/,nt={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},qr=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},jo=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Uo=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Ko=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},fn=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},pn=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Qo=function(e,t,i){return e.style[t]=i},Zo=function(e,t,i){return e.style.setProperty(t,i)},Jo=function(e,t,i){return e._gsap[t]=i},el=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},tl=function(e,t,i,r,n){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(n,a)},il=function(e,t,i,r,n){var a=e._gsap;a[t]=i,a.renderTransform(n,a)},fe="transform",Je=fe+"Origin",rl=function s(e,t){var i=this,r=this.target,n=r.style;if(e in wt){if(this.tfm=this.tfm||{},e!=="transform")e=nt[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=vt(r,a)}):this.tfm[e]=r._gsap.x?r._gsap[e]:vt(r,e);else return nt.transform.split(",").forEach(function(a){return s.call(i,a,t)});if(this.props.indexOf(fe)>=0)return;r._gsap.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Je,t,"")),e=fe}(n||t)&&this.props.push(e,t,n[e])},hn=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},sl=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,n,a;for(n=0;n<e.length;n+=3)e[n+1]?t[e[n]]=e[n+2]:e[n+2]?i[e[n]]=e[n+2]:i.removeProperty(e[n].substr(0,2)==="--"?e[n]:e[n].replace(Kr,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),n=Ur(),(!n||!n.isStart)&&!i[fe]&&(hn(i),r.uncache=1)}},mn=function(e,t){var i={target:e,props:[],revert:sl,save:rl};return e._gsap||Ce.core.getCache(e),t&&t.split(",").forEach(function(r){return i.save(r)}),i},gn,Yr=function(e,t){var i=Mt.createElementNS?Mt.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Mt.createElement(e);return i.style?i:Mt.createElement(e)},at=function s(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Kr,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&s(e,ai(t)||t,1)||""},an="O,Moz,ms,Ms,Webkit".split(","),ai=function(e,t,i){var r=t||Gt,n=r.style,a=5;if(e in n&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(an[a]+e in n););return a<0?null:(a===3?"ms":a>=0?an[a]:"")+e},Wr=function(){Yo()&&window.document&&(rn=window,Mt=rn.document,si=Mt.documentElement,Gt=Yr("div")||{style:{}},qo=Yr("div"),fe=ai(fe),Je=fe+"Origin",Gt.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",gn=!!ai("perspective"),Ur=Ce.core.reverting,jr=1)},Hr=function s(e){var t=Yr("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,r=this.nextSibling,n=this.style.cssText,a;if(si.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(a=this._gsapBBox());return i&&(r?i.insertBefore(this,r):i.appendChild(this)),si.removeChild(t),this.style.cssText=n,a},on=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},vn=function(e){var t;try{t=e.getBBox()}catch{t=Hr.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Hr||(t=Hr.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+on(e,["x","cx","x1"])||0,y:+on(e,["y","cy","y1"])||0,width:0,height:0}:t},wn=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&vn(e))},Si=function(e,t){if(t){var i=e.style;t in wt&&t!==Je&&(t=fe),i.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(t.replace(Kr,"-$1").toLowerCase())):i.removeAttribute(t)}},Pt=function(e,t,i,r,n,a){var o=new ke(e._pt,t,i,0,1,a?pn:fn);return e._pt=o,o.b=r,o.e=n,e._props.push(i),o},ln={deg:1,rad:1,turn:1},nl={grid:1,flex:1},Ct=function s(e,t,i,r){var n=parseFloat(i)||0,a=(i+"").trim().substr((n+"").length)||"px",o=Gt.style,l=Wo.test(t),c=e.tagName.toLowerCase()==="svg",d=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=r==="px",h=r==="%",g,p,v,m;return r===a||!n||ln[r]||ln[a]?n:(a!=="px"&&!f&&(n=s(e,t,i,"px")),m=e.getCTM&&wn(e),(h||a==="%")&&(wt[t]||~t.indexOf("adius"))?(g=m?e.getBBox()[l?"width":"height"]:e[d],me(h?n/g*u:n/100*g)):(o[l?"width":"height"]=u+(f?a:r),p=~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===Mt||!p.appendChild)&&(p=Mt.body),v=p._gsap,v&&h&&v.width&&l&&v.time===Re.time&&!v.uncache?me(n/v.width*u):((h||a==="%")&&!nl[at(p,"display")]&&(o.position=at(e,"position")),p===e&&(o.position="static"),p.appendChild(Gt),g=Gt[d],p.removeChild(Gt),o.position="absolute",l&&h&&(v=St(p),v.time=Re.time,v.width=p[d]),me(f?g*n/u:g&&n?u/g*n:0))))},vt=function(e,t,i,r){var n;return jr||Wr(),t in nt&&t!=="transform"&&(t=nt[t],~t.indexOf(",")&&(t=t.split(",")[0])),wt[t]&&t!=="transform"?(n=Ei(e,r),n=t!=="transformOrigin"?n[t]:n.svg?n.origin:Ji(at(e,Je))+" "+n.zOrigin+"px"):(n=e.style[t],(!n||n==="auto"||r||~(n+"").indexOf("calc("))&&(n=Zi[t]&&Zi[t](e,t,i)||at(e,t)||kr(e,t)||(t==="opacity"?1:0))),i&&!~(n+"").trim().indexOf(" ")?Ct(e,t,n,i)+i:n},al=function(e,t,i,r){if(!i||i==="none"){var n=ai(t,e,1),a=n&&at(e,n,1);a&&a!==i?(t=n,i=a):t==="borderColor"&&(i=at(e,"borderTopColor"))}var o=new ke(this._pt,e.style,t,0,1,Vr),l=0,c=0,d,u,f,h,g,p,v,m,y,w,x,S;if(o.b=i,o.e=r,i+="",r+="",r==="auto"&&(e.style[t]=r,r=at(e,t)||r,e.style[t]=i),d=[i,r],Dr(d),i=d[0],r=d[1],f=i.match($t)||[],S=r.match($t)||[],S.length){for(;u=$t.exec(r);)v=u[0],y=r.substring(l,u.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),v!==(p=f[c++]||"")&&(h=parseFloat(p)||0,x=p.substr((h+"").length),v.charAt(1)==="="&&(v=Ft(h,v)+x),m=parseFloat(v),w=v.substr((m+"").length),l=$t.lastIndex-w.length,w||(w=w||Fe.units[t]||x,l===r.length&&(r+=w,o.e+=w)),x!==w&&(h=Ct(e,t,p,w)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:h,c:m-h,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=t==="display"&&r==="none"?pn:fn;return Pr.test(r)&&(o.e=0),this._pt=o,o},cn={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ol=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=cn[i]||i,t[1]=cn[r]||r,t.join(" ")},ll=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,n=t.u,a=i._gsap,o,l,c;if(n==="all"||n===!0)r.cssText="",l=1;else for(n=n.split(","),c=n.length;--c>-1;)o=n[c],wt[o]&&(l=1,o=o==="transformOrigin"?Je:fe),Si(i,o);l&&(Si(i,fe),a&&(a.svg&&i.removeAttribute("transform"),Ei(i,1),a.uncache=1,hn(r)))}},Zi={clearProps:function(e,t,i,r,n){if(n.data!=="isFromStart"){var a=e._pt=new ke(e._pt,t,i,0,0,ll);return a.u=r,a.pr=-10,a.tween=n,e._props.push(i),1}}},Ti=[1,0,0,1,0,0],yn={},_n=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},dn=function(e){var t=at(e,fe);return _n(t)?Ti:t.substr(7).match(Mr).map(me)},Qr=function(e,t){var i=e._gsap||St(e),r=e.style,n=dn(e),a,o,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,n=[l.a,l.b,l.c,l.d,l.e,l.f],n.join(",")==="1,0,0,1,0,0"?Ti:n):(n===Ti&&!e.offsetParent&&e!==si&&!i.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,o=e.nextElementSibling,si.appendChild(e)),n=dn(e),l?r.display=l:Si(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):si.removeChild(e))),t&&n.length>6?[n[0],n[1],n[4],n[5],n[12],n[13]]:n)},Xr=function(e,t,i,r,n,a){var o=e._gsap,l=n||Qr(e,!0),c=o.xOrigin||0,d=o.yOrigin||0,u=o.xOffset||0,f=o.yOffset||0,h=l[0],g=l[1],p=l[2],v=l[3],m=l[4],y=l[5],w=t.split(" "),x=parseFloat(w[0])||0,S=parseFloat(w[1])||0,C,R,T,E;i?l!==Ti&&(R=h*v-g*p)&&(T=x*(v/R)+S*(-p/R)+(p*y-v*m)/R,E=x*(-g/R)+S*(h/R)-(h*y-g*m)/R,x=T,S=E):(C=vn(e),x=C.x+(~w[0].indexOf("%")?x/100*C.width:x),S=C.y+(~(w[1]||w[0]).indexOf("%")?S/100*C.height:S)),r||r!==!1&&o.smooth?(m=x-c,y=S-d,o.xOffset=u+(m*h+y*p)-m,o.yOffset=f+(m*g+y*v)-y):o.xOffset=o.yOffset=0,o.xOrigin=x,o.yOrigin=S,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!i,e.style[Je]="0px 0px",a&&(Pt(a,o,"xOrigin",c,x),Pt(a,o,"yOrigin",d,S),Pt(a,o,"xOffset",u,o.xOffset),Pt(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",x+" "+S)},Ei=function(e,t){var i=e._gsap||new Ir(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,n=i.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=at(e,Je)||"0",d,u,f,h,g,p,v,m,y,w,x,S,C,R,T,E,k,F,L,A,D,B,G,I,$,W,Q,N,H,X,ee,U;return d=u=f=p=v=m=y=w=x=0,h=g=1,i.svg=!!(e.getCTM&&wn(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[fe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[fe]!=="none"?l[fe]:"")),r.scale=r.rotate=r.translate="none"),R=Qr(e,i.svg),i.svg&&(i.uncache?($=e.getBBox(),c=i.xOrigin-$.x+"px "+(i.yOrigin-$.y)+"px",I=""):I=!t&&e.getAttribute("data-svg-origin"),Xr(e,I||c,!!I||i.originIsAbsolute,i.smooth!==!1,R)),S=i.xOrigin||0,C=i.yOrigin||0,R!==Ti&&(F=R[0],L=R[1],A=R[2],D=R[3],d=B=R[4],u=G=R[5],R.length===6?(h=Math.sqrt(F*F+L*L),g=Math.sqrt(D*D+A*A),p=F||L?ri(L,F)*Ht:0,y=A||D?ri(A,D)*Ht+p:0,y&&(g*=Math.abs(Math.cos(y*ni))),i.svg&&(d-=S-(S*F+C*A),u-=C-(S*L+C*D))):(U=R[6],X=R[7],Q=R[8],N=R[9],H=R[10],ee=R[11],d=R[12],u=R[13],f=R[14],T=ri(U,H),v=T*Ht,T&&(E=Math.cos(-T),k=Math.sin(-T),I=B*E+Q*k,$=G*E+N*k,W=U*E+H*k,Q=B*-k+Q*E,N=G*-k+N*E,H=U*-k+H*E,ee=X*-k+ee*E,B=I,G=$,U=W),T=ri(-A,H),m=T*Ht,T&&(E=Math.cos(-T),k=Math.sin(-T),I=F*E-Q*k,$=L*E-N*k,W=A*E-H*k,ee=D*k+ee*E,F=I,L=$,A=W),T=ri(L,F),p=T*Ht,T&&(E=Math.cos(T),k=Math.sin(T),I=F*E+L*k,$=B*E+G*k,L=L*E-F*k,G=G*E-B*k,F=I,B=$),v&&Math.abs(v)+Math.abs(p)>359.9&&(v=p=0,m=180-m),h=me(Math.sqrt(F*F+L*L+A*A)),g=me(Math.sqrt(G*G+U*U)),T=ri(B,G),y=Math.abs(T)>2e-4?T*Ht:0,x=ee?1/(ee<0?-ee:ee):0),i.svg&&(I=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!_n(at(e,fe)),I&&e.setAttribute("transform",I))),Math.abs(y)>90&&Math.abs(y)<270&&(n?(h*=-1,y+=p<=0?180:-180,p+=p<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||i.uncache,i.x=d-((i.xPercent=d&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-d)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=u-((i.yPercent=u&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=f+a,i.scaleX=me(h),i.scaleY=me(g),i.rotation=me(p)+o,i.rotationX=me(v)+o,i.rotationY=me(m)+o,i.skewX=y+o,i.skewY=w+o,i.transformPerspective=x+a,(i.zOrigin=parseFloat(c.split(" ")[2])||0)&&(r[Je]=Ji(c)),i.xOffset=i.yOffset=0,i.force3D=Fe.force3D,i.renderTransform=i.svg?dl:gn?bn:cl,i.uncache=0,i},Ji=function(e){return(e=e.split(" "))[0]+" "+e[1]},Gr=function(e,t,i){var r=Se(t);return me(parseFloat(t)+parseFloat(Ct(e,"x",i+"px",r)))+r},cl=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,bn(e,t)},Bt="0deg",xi="0px",Nt=") ",bn=function(e,t){var i=t||this,r=i.xPercent,n=i.yPercent,a=i.x,o=i.y,l=i.z,c=i.rotation,d=i.rotationY,u=i.rotationX,f=i.skewX,h=i.skewY,g=i.scaleX,p=i.scaleY,v=i.transformPerspective,m=i.force3D,y=i.target,w=i.zOrigin,x="",S=m==="auto"&&e&&e!==1||m===!0;if(w&&(u!==Bt||d!==Bt)){var C=parseFloat(d)*ni,R=Math.sin(C),T=Math.cos(C),E;C=parseFloat(u)*ni,E=Math.cos(C),a=Gr(y,a,R*E*-w),o=Gr(y,o,-Math.sin(C)*-w),l=Gr(y,l,T*E*-w+w)}v!==xi&&(x+="perspective("+v+Nt),(r||n)&&(x+="translate("+r+"%, "+n+"%) "),(S||a!==xi||o!==xi||l!==xi)&&(x+=l!==xi||S?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Nt),c!==Bt&&(x+="rotate("+c+Nt),d!==Bt&&(x+="rotateY("+d+Nt),u!==Bt&&(x+="rotateX("+u+Nt),(f!==Bt||h!==Bt)&&(x+="skew("+f+", "+h+Nt),(g!==1||p!==1)&&(x+="scale("+g+", "+p+Nt),y.style[fe]=x||"translate(0, 0)"},dl=function(e,t){var i=t||this,r=i.xPercent,n=i.yPercent,a=i.x,o=i.y,l=i.rotation,c=i.skewX,d=i.skewY,u=i.scaleX,f=i.scaleY,h=i.target,g=i.xOrigin,p=i.yOrigin,v=i.xOffset,m=i.yOffset,y=i.forceCSS,w=parseFloat(a),x=parseFloat(o),S,C,R,T,E;l=parseFloat(l),c=parseFloat(c),d=parseFloat(d),d&&(d=parseFloat(d),c+=d,l+=d),l||c?(l*=ni,c*=ni,S=Math.cos(l)*u,C=Math.sin(l)*u,R=Math.sin(l-c)*-f,T=Math.cos(l-c)*f,c&&(d*=ni,E=Math.tan(c-d),E=Math.sqrt(1+E*E),R*=E,T*=E,d&&(E=Math.tan(d),E=Math.sqrt(1+E*E),S*=E,C*=E)),S=me(S),C=me(C),R=me(R),T=me(T)):(S=u,T=f,C=R=0),(w&&!~(a+"").indexOf("px")||x&&!~(o+"").indexOf("px"))&&(w=Ct(h,"x",a,"px"),x=Ct(h,"y",o,"px")),(g||p||v||m)&&(w=me(w+g-(g*S+p*R)+v),x=me(x+p-(g*C+p*T)+m)),(r||n)&&(E=h.getBBox(),w=me(w+r/100*E.width),x=me(x+n/100*E.height)),E="matrix("+S+","+C+","+R+","+T+","+w+","+x+")",h.setAttribute("transform",E),y&&(h.style[fe]=E)},ul=function(e,t,i,r,n){var a=360,o=be(n),l=parseFloat(n)*(o&&~n.indexOf("rad")?Ht:1),c=l-r,d=r+c+"deg",u,f;return o&&(u=n.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*nn)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*nn)%a-~~(c/a)*a)),e._pt=f=new ke(e._pt,t,i,r,c,jo),f.e=d,f.u="deg",e._props.push(i),f},un=function(e,t){for(var i in t)e[i]=t[i];return e},fl=function(e,t,i){var r=un({},i._gsap),n="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,c,d,u,f,h,g;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),a[fe]=t,o=Ei(i,1),Si(i,fe),i.setAttribute("transform",c)):(c=getComputedStyle(i)[fe],a[fe]=t,o=Ei(i,1),a[fe]=c);for(l in wt)c=r[l],d=o[l],c!==d&&n.indexOf(l)<0&&(h=Se(c),g=Se(d),u=h!==g?Ct(i,l,c,g):parseFloat(c),f=parseFloat(d),e._pt=new ke(e._pt,o,l,u,f-u,qr),e._pt.u=g||0,e._props.push(l));un(o,r)};Oe("padding,margin,Width,Radius",function(s,e){var t="Top",i="Right",r="Bottom",n="Left",a=(e<3?[t,i,r,n]:[t+n,t+i,r+i,r+n]).map(function(o){return e<2?s+o:"border"+o+s});Zi[e>1?"border"+s:s]=function(o,l,c,d,u){var f,h;if(arguments.length<4)return f=a.map(function(g){return vt(o,g,c)}),h=f.join(" "),h.split(f[0]).length===5?f[0]:h;f=(d+"").split(" "),h={},a.forEach(function(g,p){return h[g]=f[p]=f[p]||f[(p-1)/2|0]}),o.init(l,h,u)}});var Zr={name:"css",register:Wr,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,n){var a=this._props,o=e.style,l=i.vars.startAt,c,d,u,f,h,g,p,v,m,y,w,x,S,C,R,T;jr||Wr(),this.styles=this.styles||mn(e),T=this.styles.props,this.tween=i;for(p in t)if(p!=="autoRound"&&(d=t[p],!(ze[p]&&Rr(p,t,i,r,e,n)))){if(h=typeof d,g=Zi[p],h==="function"&&(d=d.call(i,r,e,n),h=typeof d),h==="string"&&~d.indexOf("random(")&&(d=ii(d)),g)g(this,e,p,d,i)&&(R=1);else if(p.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(p)+"").trim(),d+="",mt.lastIndex=0,mt.test(c)||(v=Se(c),m=Se(d)),m?v!==m&&(c=Ct(e,p,c,m)+m):v&&(d+=v),this.add(o,"setProperty",c,d,r,n,0,0,p),a.push(p),T.push(p,0,o[p]);else if(h!=="undefined"){if(l&&p in l?(c=typeof l[p]=="function"?l[p].call(i,r,e,n):l[p],be(c)&&~c.indexOf("random(")&&(c=ii(c)),Se(c+"")||(c+=Fe.units[p]||Se(vt(e,p))||""),(c+"").charAt(1)==="="&&(c=vt(e,p))):c=vt(e,p),f=parseFloat(c),y=h==="string"&&d.charAt(1)==="="&&d.substr(0,2),y&&(d=d.substr(2)),u=parseFloat(d),p in nt&&(p==="autoAlpha"&&(f===1&&vt(e,"visibility")==="hidden"&&u&&(f=0),T.push("visibility",0,o.visibility),Pt(this,o,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),p!=="scale"&&p!=="transform"&&(p=nt[p],~p.indexOf(",")&&(p=p.split(",")[0]))),w=p in wt,w){if(this.styles.save(p),x||(S=e._gsap,S.renderTransform&&!t.parseTransform||Ei(e,t.parseTransform),C=t.smoothOrigin!==!1&&S.smooth,x=this._pt=new ke(this._pt,o,fe,0,1,S.renderTransform,S,0,-1),x.dep=1),p==="scale")this._pt=new ke(this._pt,S,"scaleY",S.scaleY,(y?Ft(S.scaleY,y+u):u)-S.scaleY||0,qr),this._pt.u=0,a.push("scaleY",p),p+="X";else if(p==="transformOrigin"){T.push(Je,0,o[Je]),d=ol(d),S.svg?Xr(e,d,0,C,0,this):(m=parseFloat(d.split(" ")[2])||0,m!==S.zOrigin&&Pt(this,S,"zOrigin",S.zOrigin,m),Pt(this,o,p,Ji(c),Ji(d)));continue}else if(p==="svgOrigin"){Xr(e,d,1,C,0,this);continue}else if(p in yn){ul(this,S,p,f,y?Ft(f,y+d):d);continue}else if(p==="smoothOrigin"){Pt(this,S,"smooth",S.smooth,d);continue}else if(p==="force3D"){S[p]=d;continue}else if(p==="transform"){fl(this,d,e);continue}}else p in o||(p=ai(p)||p);if(w||(u||u===0)&&(f||f===0)&&!Xo.test(d)&&p in o)v=(c+"").substr((f+"").length),u||(u=0),m=Se(d)||(p in Fe.units?Fe.units[p]:v),v!==m&&(f=Ct(e,p,c,m)),this._pt=new ke(this._pt,w?S:o,p,f,(y?Ft(f,y+u):u)-f,!w&&(m==="px"||p==="zIndex")&&t.autoRound!==!1?Ko:qr),this._pt.u=m||0,v!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=Uo);else if(p in o)al.call(this,e,p,c,y?y+d:d);else if(p in e)this.add(e,p,c||e[p],y?y+d:d,r,n);else if(p!=="parseTransform"){Xi(p,d);continue}w||(p in o?T.push(p,0,o[p]):T.push(p,1,c||e[p])),a.push(p)}}R&&Nr(this)},render:function(e,t){if(t.tween._time||!Ur())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:vt,aliases:nt,getSetter:function(e,t,i){var r=nt[t];return r&&r.indexOf(",")<0&&(t=r),t in wt&&t!==Je&&(e._gsap.x||vt(e,"x"))?i&&sn===i?t==="scale"?el:Jo:(sn=i||{})&&(t==="scale"?tl:il):e.style&&!Wi(e.style[t])?Qo:~t.indexOf("-")?Zo:Qi(e,t)},core:{_removeProperty:Si,_getMatrix:Qr}};Ce.utils.checkPrefix=ai;Ce.core.getStyleSaver=mn;(function(s,e,t,i){var r=Oe(s+","+e+","+t,function(n){wt[n]=1});Oe(e,function(n){Fe.units[n]="deg",yn[n]=1}),nt[r[13]]=s+","+e,Oe(i,function(n){var a=n.split(":");nt[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Oe("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Fe.units[s]="px"});Ce.registerPlugin(Zr);var je=Ce.registerPlugin(Zr)||Ce,Gc=je.core.Tween;function xn(){function s(t){let i=document.createElement("textarea");i.value=t,document.body.appendChild(i),i.select(),document.execCommand("Copy"),i.remove()}document.querySelectorAll(".icon-copy").forEach(t=>{t.addEventListener("click",function(){var r;let i=(r=document.querySelector(".fitness-coin_contract-id"))==null?void 0:r.getAttribute("data-original-text");i&&(s(i),alert("Text copied to clipboard!"))})});function e(t){document.querySelectorAll(t).forEach(r=>{let n=r.textContent||"";if(n.length>12){r.setAttribute("data-original-text",n);let a=n.slice(0,6)+"..."+n.slice(-6);r.textContent=a}})}e(".fitness-coin_contract-id")}function Sn(){document.querySelectorAll(".footer_data-cms").forEach(e=>{let t=parseFloat(e.textContent||"");isNaN(t)||(e.textContent=Math.round(t/1e3).toString())})}function Jr(s){return new Promise((e,t)=>{let i=document.createElement("script");i.src=s,i.async=!0,i.onload=()=>e(),i.onerror=()=>t(new Error(`Failed to load script: ${s}`)),document.head.appendChild(i)})}function Tn(s){let e=je.timeline({onComplete:s});e.to(".a--app-transition",{duration:.4,width:"100%",right:"0%",ease:"ease-out"}),e.to(".a--app-transition",{duration:.4,width:"0%",right:"100%",ease:"ease-out",delay:.4}),e.set(".a--app-transition",{right:"0%"})}function En(s){let e=je.timeline({onComplete:s});e.to(".a--nft-transition",{duration:.4,width:"100%",left:"0%",ease:"ease-out"}),e.to(".a--nft-transition",{duration:.4,width:"0%",left:"100%",ease:"ease-out",delay:.5}),e.set(".a--nft-transition",{left:"-100%"})}function Mn(s){let e=je.timeline({onComplete:s});e.to(".a--legals-transition",{duration:.4,width:"100%",left:"0%",ease:"ease-out"}),e.to(".a--legals-transition",{duration:.4,width:"0%",left:"100%",ease:"ease-out",delay:.5}),e.set(".a--legals-transition",{left:"-100%"})}function Pn(s){let e=je.timeline({onComplete:s});e.to(".a--team-transition",{duration:.4,width:"100%",left:"0%",ease:"ease-out"}),e.to(".a--team-transition",{duration:.4,width:"0%",left:"100%",ease:"ease-out",delay:.5}),e.set(".a--team-transition",{left:"-100%"})}function Cn(s){let e=je.timeline({onComplete:s});e.to(".a--blog-transition",{duration:.4,width:"100%",left:"0%",ease:"ease-out"}),e.to(".a--blog-transition",{duration:.4,width:"0%",left:"100%",ease:"ease-out",delay:.5}),e.set(".a--blog-transition",{left:"-100%"})}var An=s=>{s.forEach(e=>{let t=document.querySelector(e);t&&(t.pause(),t.currentTime=0)})},Mi=s=>{s.forEach(e=>{let t=document.querySelector(e);t&&t.play()})},De;function Ln(){De=je.timeline({repeat:-1}),De.set([".a--hero-run",".a--hero-bike",".a--hero-swim",".a--hero-walk"],{width:"0vw"}),De.set(".a--hero-move",{zIndex:1}),De.call(function(){An([".hero-home_video.is-run video",".hero-home_video.is-bike video",".hero-home_video.is-swim video",".hero-home_video.is-walk video"])}),De.to(".a--hero-walk",{duration:1,delay:2,width:"100vw",ease:"ease-out",onStart:()=>{Mi([".hero-home_video.is-walk video"])}}),De.call(()=>{An([".hero-home_video.is-move video"])}),De.set(".a--hero-move",{width:"0vw",zIndex:6}),De.to(".a--hero-swim",{duration:1,delay:2,width:"100vw",ease:"ease-out",onStart:()=>{Mi([".hero-home_video.is-swim video"])}}),De.to(".a--hero-bike",{duration:1,delay:2,width:"100vw",ease:"ease-out",onStart:()=>{Mi([".hero-home_video.is-bike video"])}}),De.to(".a--hero-run",{duration:1,delay:2,width:"100vw",ease:"ease-out",onStart:()=>{Mi([".hero-home_video.is-run video"])}}),De.to(".a--hero-move",{duration:1,delay:2,width:"100vw",ease:"ease-out",onStart:()=>{Mi([".hero-home_video.is-move video"])}})}function On(){return De||Ln(),De}function kn(){De&&(De.clear(),Ln())}var es=function(){return(es=Object.assign||function(s){for(var e,t=1,i=arguments.length;t<i;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(s[r]=e[r]);return s}).apply(this,arguments)},Dn=function(){function s(e,t,i){var r=this;this.endVal=t,this.options=i,this.version="2.6.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(n){r.startTime||(r.startTime=n);var a=n-r.startTime;r.remaining=r.duration-a,r.useEasing?r.countDown?r.frameVal=r.startVal-r.easingFn(a,0,r.startVal-r.endVal,r.duration):r.frameVal=r.easingFn(a,r.startVal,r.endVal-r.startVal,r.duration):r.frameVal=r.startVal+(r.endVal-r.startVal)*(a/r.duration);var o=r.countDown?r.frameVal<r.endVal:r.frameVal>r.endVal;r.frameVal=o?r.endVal:r.frameVal,r.frameVal=Number(r.frameVal.toFixed(r.options.decimalPlaces)),r.printValue(r.frameVal),a<r.duration?r.rAF=requestAnimationFrame(r.count):r.finalEndVal!==null?r.update(r.finalEndVal):r.options.onCompleteCallback&&r.options.onCompleteCallback()},this.formatNumber=function(n){var a,o,l,c,d=n<0?"-":"";a=Math.abs(n).toFixed(r.options.decimalPlaces);var u=(a+="").split(".");if(o=u[0],l=u.length>1?r.options.decimal+u[1]:"",r.options.useGrouping){c="";for(var f=3,h=0,g=0,p=o.length;g<p;++g)r.options.useIndianSeparators&&g===4&&(f=2,h=1),g!==0&&h%f==0&&(c=r.options.separator+c),h++,c=o[p-g-1]+c;o=c}return r.options.numerals&&r.options.numerals.length&&(o=o.replace(/[0-9]/g,function(v){return r.options.numerals[+v]}),l=l.replace(/[0-9]/g,function(v){return r.options.numerals[+v]})),d+r.options.prefix+o+l+r.options.suffix},this.easeOutExpo=function(n,a,o,l){return o*(1-Math.pow(2,-10*n/l))*1024/1023+a},this.options=es(es({},this.defaults),i),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(t),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,this.options.separator===""&&(this.options.useGrouping=!1),this.el=typeof e=="string"?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined",typeof window!="undefined"&&this.options.enableScrollSpy&&(this.error?console.error(this.error,e):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return r.handleScroll(r)}),window.onscroll=function(){window.onScrollFns.forEach(function(n){return n()})},this.handleScroll(this)))}return s.prototype.handleScroll=function(e){if(e&&window&&!e.once){var t=window.innerHeight+window.scrollY,i=e.el.getBoundingClientRect(),r=i.top+window.pageYOffset,n=i.top+i.height+window.pageYOffset;n<t&&n>window.scrollY&&e.paused?(e.paused=!1,setTimeout(function(){return e.start()},e.options.scrollSpyDelay),e.options.scrollSpyOnce&&(e.once=!0)):(window.scrollY>n||r>t)&&!e.paused&&e.reset()}},s.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>e;var t=e-this.startVal;if(Math.abs(t)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=e;var i=this.countDown?1:-1;this.endVal=e+i*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=e,this.finalEndVal=null;this.finalEndVal!==null?this.useEasing=!1:this.useEasing=this.options.useEasing},s.prototype.start=function(e){this.error||(e&&(this.options.onCompleteCallback=e),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},s.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},s.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},s.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal==null&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},s.prototype.printValue=function(e){var t;if(this.el){var i=this.formattingFn(e);(t=this.options.plugin)!==null&&t!==void 0&&t.render?this.options.plugin.render(this.el,i):this.el.tagName==="INPUT"?this.el.value=i:this.el.tagName==="text"||this.el.tagName==="tspan"?this.el.textContent=i:this.el.innerHTML=i}},s.prototype.ensureNumber=function(e){return typeof e=="number"&&!isNaN(e)},s.prototype.validateValue=function(e){var t=Number(e);return this.ensureNumber(t)?t:(this.error="[CountUp] invalid start or end value: ".concat(e),null)},s.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},s}();function In(){function s(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}document.querySelectorAll(".home-hero_item-data-cms").forEach(t=>{let i=t.innerText.trim(),r=parseFloat(i.replace(",",""));new Dn(t,r,{duration:4,formattingFn:s}).start()})}function zn(){let s=document.getElementById("swipelux-container"),e={apiKey:"8caf43db-8a9c-4772-b6ca-51f425212005",availableReceiveCurrency:"DEFIT"};new window.SwipeluxWidget(s,e).init()}function Rn(){return new Promise((s,e)=>{let t=document.createElement("script");t.type="module",t.src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js",t.onload=()=>s(),t.onerror=()=>e(new Error("Failed to load model-viewer script")),document.head.appendChild(t)})}function ts(){var e;let s=(e=navigator.userAgent||navigator.vendor||window.opera)!=null?e:"";return/windows phone/i.test(s)?"Windows Phone":/android/i.test(s)?"Android":/iPad|iPhone|iPod/.test(s)&&!window.MSStream?"iOS":"unknown"}function er(){let s=ts();if(s==="iOS"){let e=document.querySelector(".home-hero_d-button.is-android"),t=document.querySelector(".worldwide_qrcode-cards.is-android");e&&(e.style.display="none"),t&&(t.style.display="none")}else if(s==="Android"){let e=document.querySelector(".home-hero_d-button.is-apple"),t=document.querySelector(".worldwide_qrcode-cards.is-apple");e&&(e.style.display="none"),t&&(t.style.display="none")}}document.addEventListener("DOMContentLoaded",er);function $n(s){return s!==null&&typeof s=="object"&&"constructor"in s&&s.constructor===Object}function is(s,e){s===void 0&&(s={}),e===void 0&&(e={}),Object.keys(e).forEach(t=>{typeof s[t]=="undefined"?s[t]=e[t]:$n(e[t])&&$n(s[t])&&Object.keys(e[t]).length>0&&is(s[t],e[t])})}var Fn={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function ce(){let s=typeof document!="undefined"?document:{};return is(s,Fn),s}var pl={document:Fn,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(s){return typeof setTimeout=="undefined"?(s(),null):setTimeout(s,0)},cancelAnimationFrame(s){typeof setTimeout!="undefined"&&clearTimeout(s)}};function ne(){let s=typeof window!="undefined"?window:{};return is(s,pl),s}function yt(s){return s===void 0&&(s=""),s.trim().split(" ").filter(e=>!!e.trim())}function Vn(s){let e=s;Object.keys(e).forEach(t=>{try{e[t]=null}catch{}try{delete e[t]}catch{}})}function et(s,e){return e===void 0&&(e=0),setTimeout(s,e)}function Ie(){return Date.now()}function hl(s){let e=ne(),t;return e.getComputedStyle&&(t=e.getComputedStyle(s,null)),!t&&s.currentStyle&&(t=s.currentStyle),t||(t=s.style),t}function Pi(s,e){e===void 0&&(e="x");let t=ne(),i,r,n,a=hl(s);return t.WebKitCSSMatrix?(r=a.transform||a.webkitTransform,r.split(",").length>6&&(r=r.split(", ").map(o=>o.replace(",",".")).join(", ")),n=new t.WebKitCSSMatrix(r==="none"?"":r)):(n=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),i=n.toString().split(",")),e==="x"&&(t.WebKitCSSMatrix?r=n.m41:i.length===16?r=parseFloat(i[12]):r=parseFloat(i[4])),e==="y"&&(t.WebKitCSSMatrix?r=n.m42:i.length===16?r=parseFloat(i[13]):r=parseFloat(i[5])),r||0}function oi(s){return typeof s=="object"&&s!==null&&s.constructor&&Object.prototype.toString.call(s).slice(8,-1)==="Object"}function ml(s){return typeof window!="undefined"&&typeof window.HTMLElement!="undefined"?s instanceof HTMLElement:s&&(s.nodeType===1||s.nodeType===11)}function Ve(){let s=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let t=1;t<arguments.length;t+=1){let i=t<0||arguments.length<=t?void 0:arguments[t];if(i!=null&&!ml(i)){let r=Object.keys(Object(i)).filter(n=>e.indexOf(n)<0);for(let n=0,a=r.length;n<a;n+=1){let o=r[n],l=Object.getOwnPropertyDescriptor(i,o);l!==void 0&&l.enumerable&&(oi(s[o])&&oi(i[o])?i[o].__swiper__?s[o]=i[o]:Ve(s[o],i[o]):!oi(s[o])&&oi(i[o])?(s[o]={},i[o].__swiper__?s[o]=i[o]:Ve(s[o],i[o])):s[o]=i[o])}}}return s}function qt(s,e,t){s.style.setProperty(e,t)}function rs(s){let{swiper:e,targetPosition:t,side:i}=s,r=ne(),n=-e.translate,a=null,o,l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);let c=t>n?"next":"prev",d=(f,h)=>c==="next"&&f>=h||c==="prev"&&f<=h,u=()=>{o=new Date().getTime(),a===null&&(a=o);let f=Math.max(Math.min((o-a)/l,1),0),h=.5-Math.cos(f*Math.PI)/2,g=n+h*(t-n);if(d(g,t)&&(g=t),e.wrapperEl.scrollTo({[i]:g}),d(g,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[i]:g})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(u)};u()}function Be(s){return s.querySelector(".swiper-slide-transform")||s.shadowRoot&&s.shadowRoot.querySelector(".swiper-slide-transform")||s}function de(s,e){return e===void 0&&(e=""),[...s.children].filter(t=>t.matches(e))}function Ci(s){try{console.warn(s);return}catch{}}function ye(s,e){e===void 0&&(e=[]);let t=document.createElement(s);return t.classList.add(...Array.isArray(e)?e:yt(e)),t}function Yt(s){let e=ne(),t=ce(),i=s.getBoundingClientRect(),r=t.body,n=s.clientTop||r.clientTop||0,a=s.clientLeft||r.clientLeft||0,o=s===e?e.scrollY:s.scrollTop,l=s===e?e.scrollX:s.scrollLeft;return{top:i.top+o-n,left:i.left+l-a}}function Bn(s,e){let t=[];for(;s.previousElementSibling;){let i=s.previousElementSibling;e?i.matches(e)&&t.push(i):t.push(i),s=i}return t}function Nn(s,e){let t=[];for(;s.nextElementSibling;){let i=s.nextElementSibling;e?i.matches(e)&&t.push(i):t.push(i),s=i}return t}function _t(s,e){return ne().getComputedStyle(s,null).getPropertyValue(e)}function At(s){let e=s,t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function tt(s,e){let t=[],i=s.parentElement;for(;i;)e?i.matches(e)&&t.push(i):t.push(i),i=i.parentElement;return t}function Lt(s,e){function t(i){i.target===s&&(e.call(s,i),s.removeEventListener("transitionend",t))}e&&s.addEventListener("transitionend",t)}function Ai(s,e,t){let i=ne();return t?s[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(i.getComputedStyle(s,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(i.getComputedStyle(s,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom")):s.offsetWidth}function J(s){return(Array.isArray(s)?s:[s]).filter(e=>!!e)}var ss;function gl(){let s=ne(),e=ce();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in s||s.DocumentTouch&&e instanceof s.DocumentTouch)}}function Xn(){return ss||(ss=gl()),ss}var ns;function vl(s){let{userAgent:e}=s===void 0?{}:s,t=Xn(),i=ne(),r=i.navigator.platform,n=e||i.navigator.userAgent,a={ios:!1,android:!1},o=i.screen.width,l=i.screen.height,c=n.match(/(Android);?[\s\/]+([\d.]+)?/),d=n.match(/(iPad).*OS\s([\d_]+)/),u=n.match(/(iPod)(.*OS\s([\d_]+))?/),f=!d&&n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),h=r==="Win32",g=r==="MacIntel",p=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!d&&g&&t.touch&&p.indexOf(`${o}x${l}`)>=0&&(d=n.match(/(Version)\/([\d.]+)/),d||(d=[0,1,"13_0_0"]),g=!1),c&&!h&&(a.os="android",a.android=!0),(d||f||u)&&(a.os="ios",a.ios=!0),a}function jn(s){return s===void 0&&(s={}),ns||(ns=vl(s)),ns}var as;function wl(){let s=ne(),e=jn(),t=!1;function i(){let o=s.navigator.userAgent.toLowerCase();return o.indexOf("safari")>=0&&o.indexOf("chrome")<0&&o.indexOf("android")<0}if(i()){let o=String(s.navigator.userAgent);if(o.includes("Version/")){let[l,c]=o.split("Version/")[1].split(" ")[0].split(".").map(d=>Number(d));t=l<16||l===16&&c<2}}let r=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(s.navigator.userAgent),n=i(),a=n||r&&e.ios;return{isSafari:t||n,needPerspectiveFix:t,need3dFix:a,isWebView:r}}function yl(){return as||(as=wl()),as}function _l(s){let{swiper:e,on:t,emit:i}=s,r=ne(),n=null,a=null,o=()=>{!e||e.destroyed||!e.initialized||(i("beforeResize"),i("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(n=new ResizeObserver(u=>{a=r.requestAnimationFrame(()=>{let{width:f,height:h}=e,g=f,p=h;u.forEach(v=>{let{contentBoxSize:m,contentRect:y,target:w}=v;w&&w!==e.el||(g=y?y.width:(m[0]||m).inlineSize,p=y?y.height:(m[0]||m).blockSize)}),(g!==f||p!==h)&&o()})}),n.observe(e.el))},c=()=>{a&&r.cancelAnimationFrame(a),n&&n.unobserve&&e.el&&(n.unobserve(e.el),n=null)},d=()=>{!e||e.destroyed||!e.initialized||i("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver!="undefined"){l();return}r.addEventListener("resize",o),r.addEventListener("orientationchange",d)}),t("destroy",()=>{c(),r.removeEventListener("resize",o),r.removeEventListener("orientationchange",d)})}function bl(s){let{swiper:e,extendParams:t,on:i,emit:r}=s,n=[],a=ne(),o=function(d,u){u===void 0&&(u={});let f=a.MutationObserver||a.WebkitMutationObserver,h=new f(g=>{if(e.__preventObserver__)return;if(g.length===1){r("observerUpdate",g[0]);return}let p=function(){r("observerUpdate",g[0])};a.requestAnimationFrame?a.requestAnimationFrame(p):a.setTimeout(p,0)});h.observe(d,{attributes:typeof u.attributes=="undefined"?!0:u.attributes,childList:typeof u.childList=="undefined"?!0:u.childList,characterData:typeof u.characterData=="undefined"?!0:u.characterData}),n.push(h)},l=()=>{if(e.params.observer){if(e.params.observeParents){let d=tt(e.hostEl);for(let u=0;u<d.length;u+=1)o(d[u])}o(e.hostEl,{childList:e.params.observeSlideChildren}),o(e.wrapperEl,{attributes:!1})}},c=()=>{n.forEach(d=>{d.disconnect()}),n.splice(0,n.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),i("init",l),i("destroy",c)}var xl={on(s,e,t){let i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;let r=t?"unshift":"push";return s.split(" ").forEach(n=>{i.eventsListeners[n]||(i.eventsListeners[n]=[]),i.eventsListeners[n][r](e)}),i},once(s,e,t){let i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;function r(){i.off(s,r),r.__emitterProxy&&delete r.__emitterProxy;for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];e.apply(i,a)}return r.__emitterProxy=e,i.on(s,r,t)},onAny(s,e){let t=this;if(!t.eventsListeners||t.destroyed||typeof s!="function")return t;let i=e?"unshift":"push";return t.eventsAnyListeners.indexOf(s)<0&&t.eventsAnyListeners[i](s),t},offAny(s){let e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;let t=e.eventsAnyListeners.indexOf(s);return t>=0&&e.eventsAnyListeners.splice(t,1),e},off(s,e){let t=this;return!t.eventsListeners||t.destroyed||!t.eventsListeners||s.split(" ").forEach(i=>{typeof e=="undefined"?t.eventsListeners[i]=[]:t.eventsListeners[i]&&t.eventsListeners[i].forEach((r,n)=>{(r===e||r.__emitterProxy&&r.__emitterProxy===e)&&t.eventsListeners[i].splice(n,1)})}),t},emit(){let s=this;if(!s.eventsListeners||s.destroyed||!s.eventsListeners)return s;let e,t,i;for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return typeof n[0]=="string"||Array.isArray(n[0])?(e=n[0],t=n.slice(1,n.length),i=s):(e=n[0].events,t=n[0].data,i=n[0].context||s),t.unshift(i),(Array.isArray(e)?e:e.split(" ")).forEach(l=>{s.eventsAnyListeners&&s.eventsAnyListeners.length&&s.eventsAnyListeners.forEach(c=>{c.apply(i,[l,...t])}),s.eventsListeners&&s.eventsListeners[l]&&s.eventsListeners[l].forEach(c=>{c.apply(i,t)})}),s}};function Sl(){let s=this,e,t,i=s.el;typeof s.params.width!="undefined"&&s.params.width!==null?e=s.params.width:e=i.clientWidth,typeof s.params.height!="undefined"&&s.params.height!==null?t=s.params.height:t=i.clientHeight,!(e===0&&s.isHorizontal()||t===0&&s.isVertical())&&(e=e-parseInt(_t(i,"padding-left")||0,10)-parseInt(_t(i,"padding-right")||0,10),t=t-parseInt(_t(i,"padding-top")||0,10)-parseInt(_t(i,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(s,{width:e,height:t,size:s.isHorizontal()?e:t}))}function Tl(){let s=this;function e(k,F){return parseFloat(k.getPropertyValue(s.getDirectionLabel(F))||0)}let t=s.params,{wrapperEl:i,slidesEl:r,size:n,rtlTranslate:a,wrongRTL:o}=s,l=s.virtual&&t.virtual.enabled,c=l?s.virtual.slides.length:s.slides.length,d=de(r,`.${s.params.slideClass}, swiper-slide`),u=l?s.virtual.slides.length:d.length,f=[],h=[],g=[],p=t.slidesOffsetBefore;typeof p=="function"&&(p=t.slidesOffsetBefore.call(s));let v=t.slidesOffsetAfter;typeof v=="function"&&(v=t.slidesOffsetAfter.call(s));let m=s.snapGrid.length,y=s.slidesGrid.length,w=t.spaceBetween,x=-p,S=0,C=0;if(typeof n=="undefined")return;typeof w=="string"&&w.indexOf("%")>=0?w=parseFloat(w.replace("%",""))/100*n:typeof w=="string"&&(w=parseFloat(w)),s.virtualSize=-w,d.forEach(k=>{a?k.style.marginLeft="":k.style.marginRight="",k.style.marginBottom="",k.style.marginTop=""}),t.centeredSlides&&t.cssMode&&(qt(i,"--swiper-centered-offset-before",""),qt(i,"--swiper-centered-offset-after",""));let R=t.grid&&t.grid.rows>1&&s.grid;R?s.grid.initSlides(d):s.grid&&s.grid.unsetSlides();let T,E=t.slidesPerView==="auto"&&t.breakpoints&&Object.keys(t.breakpoints).filter(k=>typeof t.breakpoints[k].slidesPerView!="undefined").length>0;for(let k=0;k<u;k+=1){T=0;let F;if(d[k]&&(F=d[k]),R&&s.grid.updateSlide(k,F,d),!(d[k]&&_t(F,"display")==="none")){if(t.slidesPerView==="auto"){E&&(d[k].style[s.getDirectionLabel("width")]="");let L=getComputedStyle(F),A=F.style.transform,D=F.style.webkitTransform;if(A&&(F.style.transform="none"),D&&(F.style.webkitTransform="none"),t.roundLengths)T=s.isHorizontal()?Ai(F,"width",!0):Ai(F,"height",!0);else{let B=e(L,"width"),G=e(L,"padding-left"),I=e(L,"padding-right"),$=e(L,"margin-left"),W=e(L,"margin-right"),Q=L.getPropertyValue("box-sizing");if(Q&&Q==="border-box")T=B+$+W;else{let{clientWidth:N,offsetWidth:H}=F;T=B+G+I+$+W+(H-N)}}A&&(F.style.transform=A),D&&(F.style.webkitTransform=D),t.roundLengths&&(T=Math.floor(T))}else T=(n-(t.slidesPerView-1)*w)/t.slidesPerView,t.roundLengths&&(T=Math.floor(T)),d[k]&&(d[k].style[s.getDirectionLabel("width")]=`${T}px`);d[k]&&(d[k].swiperSlideSize=T),g.push(T),t.centeredSlides?(x=x+T/2+S/2+w,S===0&&k!==0&&(x=x-n/2-w),k===0&&(x=x-n/2-w),Math.abs(x)<1/1e3&&(x=0),t.roundLengths&&(x=Math.floor(x)),C%t.slidesPerGroup===0&&f.push(x),h.push(x)):(t.roundLengths&&(x=Math.floor(x)),(C-Math.min(s.params.slidesPerGroupSkip,C))%s.params.slidesPerGroup===0&&f.push(x),h.push(x),x=x+T+w),s.virtualSize+=T+w,S=T,C+=1}}if(s.virtualSize=Math.max(s.virtualSize,n)+v,a&&o&&(t.effect==="slide"||t.effect==="coverflow")&&(i.style.width=`${s.virtualSize+w}px`),t.setWrapperSize&&(i.style[s.getDirectionLabel("width")]=`${s.virtualSize+w}px`),R&&s.grid.updateWrapperSize(T,f),!t.centeredSlides){let k=[];for(let F=0;F<f.length;F+=1){let L=f[F];t.roundLengths&&(L=Math.floor(L)),f[F]<=s.virtualSize-n&&k.push(L)}f=k,Math.floor(s.virtualSize-n)-Math.floor(f[f.length-1])>1&&f.push(s.virtualSize-n)}if(l&&t.loop){let k=g[0]+w;if(t.slidesPerGroup>1){let F=Math.ceil((s.virtual.slidesBefore+s.virtual.slidesAfter)/t.slidesPerGroup),L=k*t.slidesPerGroup;for(let A=0;A<F;A+=1)f.push(f[f.length-1]+L)}for(let F=0;F<s.virtual.slidesBefore+s.virtual.slidesAfter;F+=1)t.slidesPerGroup===1&&f.push(f[f.length-1]+k),h.push(h[h.length-1]+k),s.virtualSize+=k}if(f.length===0&&(f=[0]),w!==0){let k=s.isHorizontal()&&a?"marginLeft":s.getDirectionLabel("marginRight");d.filter((F,L)=>!t.cssMode||t.loop?!0:L!==d.length-1).forEach(F=>{F.style[k]=`${w}px`})}if(t.centeredSlides&&t.centeredSlidesBounds){let k=0;g.forEach(L=>{k+=L+(w||0)}),k-=w;let F=k-n;f=f.map(L=>L<=0?-p:L>F?F+v:L)}if(t.centerInsufficientSlides){let k=0;g.forEach(L=>{k+=L+(w||0)}),k-=w;let F=(t.slidesOffsetBefore||0)+(t.slidesOffsetAfter||0);if(k+F<n){let L=(n-k-F)/2;f.forEach((A,D)=>{f[D]=A-L}),h.forEach((A,D)=>{h[D]=A+L})}}if(Object.assign(s,{slides:d,snapGrid:f,slidesGrid:h,slidesSizesGrid:g}),t.centeredSlides&&t.cssMode&&!t.centeredSlidesBounds){qt(i,"--swiper-centered-offset-before",`${-f[0]}px`),qt(i,"--swiper-centered-offset-after",`${s.size/2-g[g.length-1]/2}px`);let k=-s.snapGrid[0],F=-s.slidesGrid[0];s.snapGrid=s.snapGrid.map(L=>L+k),s.slidesGrid=s.slidesGrid.map(L=>L+F)}if(u!==c&&s.emit("slidesLengthChange"),f.length!==m&&(s.params.watchOverflow&&s.checkOverflow(),s.emit("snapGridLengthChange")),h.length!==y&&s.emit("slidesGridLengthChange"),t.watchSlidesProgress&&s.updateSlidesOffset(),s.emit("slidesUpdated"),!l&&!t.cssMode&&(t.effect==="slide"||t.effect==="fade")){let k=`${t.containerModifierClass}backface-hidden`,F=s.el.classList.contains(k);u<=t.maxBackfaceHiddenSlides?F||s.el.classList.add(k):F&&s.el.classList.remove(k)}}function El(s){let e=this,t=[],i=e.virtual&&e.params.virtual.enabled,r=0,n;typeof s=="number"?e.setTransition(s):s===!0&&e.setTransition(e.params.speed);let a=o=>i?e.slides[e.getSlideIndexByData(o)]:e.slides[o];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(o=>{t.push(o)});else for(n=0;n<Math.ceil(e.params.slidesPerView);n+=1){let o=e.activeIndex+n;if(o>e.slides.length&&!i)break;t.push(a(o))}else t.push(a(e.activeIndex));for(n=0;n<t.length;n+=1)if(typeof t[n]!="undefined"){let o=t[n].offsetHeight;r=o>r?o:r}(r||r===0)&&(e.wrapperEl.style.height=`${r}px`)}function Ml(){let s=this,e=s.slides,t=s.isElement?s.isHorizontal()?s.wrapperEl.offsetLeft:s.wrapperEl.offsetTop:0;for(let i=0;i<e.length;i+=1)e[i].swiperSlideOffset=(s.isHorizontal()?e[i].offsetLeft:e[i].offsetTop)-t-s.cssOverflowAdjustment()}var Hn=(s,e,t)=>{e&&!s.classList.contains(t)?s.classList.add(t):!e&&s.classList.contains(t)&&s.classList.remove(t)};function Pl(s){s===void 0&&(s=this&&this.translate||0);let e=this,t=e.params,{slides:i,rtlTranslate:r,snapGrid:n}=e;if(i.length===0)return;typeof i[0].swiperSlideOffset=="undefined"&&e.updateSlidesOffset();let a=-s;r&&(a=s),e.visibleSlidesIndexes=[],e.visibleSlides=[];let o=t.spaceBetween;typeof o=="string"&&o.indexOf("%")>=0?o=parseFloat(o.replace("%",""))/100*e.size:typeof o=="string"&&(o=parseFloat(o));for(let l=0;l<i.length;l+=1){let c=i[l],d=c.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(d-=i[0].swiperSlideOffset);let u=(a+(t.centeredSlides?e.minTranslate():0)-d)/(c.swiperSlideSize+o),f=(a-n[0]+(t.centeredSlides?e.minTranslate():0)-d)/(c.swiperSlideSize+o),h=-(a-d),g=h+e.slidesSizesGrid[l],p=h>=0&&h<=e.size-e.slidesSizesGrid[l],v=h>=0&&h<e.size-1||g>1&&g<=e.size||h<=0&&g>=e.size;v&&(e.visibleSlides.push(c),e.visibleSlidesIndexes.push(l)),Hn(c,v,t.slideVisibleClass),Hn(c,p,t.slideFullyVisibleClass),c.progress=r?-u:u,c.originalProgress=r?-f:f}}function Cl(s){let e=this;if(typeof s=="undefined"){let d=e.rtlTranslate?-1:1;s=e&&e.translate&&e.translate*d||0}let t=e.params,i=e.maxTranslate()-e.minTranslate(),{progress:r,isBeginning:n,isEnd:a,progressLoop:o}=e,l=n,c=a;if(i===0)r=0,n=!0,a=!0;else{r=(s-e.minTranslate())/i;let d=Math.abs(s-e.minTranslate())<1,u=Math.abs(s-e.maxTranslate())<1;n=d||r<=0,a=u||r>=1,d&&(r=0),u&&(r=1)}if(t.loop){let d=e.getSlideIndexByData(0),u=e.getSlideIndexByData(e.slides.length-1),f=e.slidesGrid[d],h=e.slidesGrid[u],g=e.slidesGrid[e.slidesGrid.length-1],p=Math.abs(s);p>=f?o=(p-f)/g:o=(p+g-h)/g,o>1&&(o-=1)}Object.assign(e,{progress:r,progressLoop:o,isBeginning:n,isEnd:a}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&e.updateSlidesProgress(s),n&&!l&&e.emit("reachBeginning toEdge"),a&&!c&&e.emit("reachEnd toEdge"),(l&&!n||c&&!a)&&e.emit("fromEdge"),e.emit("progress",r)}var os=(s,e,t)=>{e&&!s.classList.contains(t)?s.classList.add(t):!e&&s.classList.contains(t)&&s.classList.remove(t)};function Al(){let s=this,{slides:e,params:t,slidesEl:i,activeIndex:r}=s,n=s.virtual&&t.virtual.enabled,a=s.grid&&t.grid&&t.grid.rows>1,o=u=>de(i,`.${t.slideClass}${u}, swiper-slide${u}`)[0],l,c,d;if(n)if(t.loop){let u=r-s.virtual.slidesBefore;u<0&&(u=s.virtual.slides.length+u),u>=s.virtual.slides.length&&(u-=s.virtual.slides.length),l=o(`[data-swiper-slide-index="${u}"]`)}else l=o(`[data-swiper-slide-index="${r}"]`);else a?(l=e.filter(u=>u.column===r)[0],d=e.filter(u=>u.column===r+1)[0],c=e.filter(u=>u.column===r-1)[0]):l=e[r];l&&(a||(d=Nn(l,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!d&&(d=e[0]),c=Bn(l,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!c===0&&(c=e[e.length-1]))),e.forEach(u=>{os(u,u===l,t.slideActiveClass),os(u,u===d,t.slideNextClass),os(u,u===c,t.slidePrevClass)}),s.emitSlidesClasses()}var tr=(s,e)=>{if(!s||s.destroyed||!s.params)return;let t=()=>s.isElement?"swiper-slide":`.${s.params.slideClass}`,i=e.closest(t());if(i){let r=i.querySelector(`.${s.params.lazyPreloaderClass}`);!r&&s.isElement&&(i.shadowRoot?r=i.shadowRoot.querySelector(`.${s.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{i.shadowRoot&&(r=i.shadowRoot.querySelector(`.${s.params.lazyPreloaderClass}`),r&&r.remove())})),r&&r.remove()}},ls=(s,e)=>{if(!s.slides[e])return;let t=s.slides[e].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},us=s=>{if(!s||s.destroyed||!s.params)return;let e=s.params.lazyPreloadPrevNext,t=s.slides.length;if(!t||!e||e<0)return;e=Math.min(e,t);let i=s.params.slidesPerView==="auto"?s.slidesPerViewDynamic():Math.ceil(s.params.slidesPerView),r=s.activeIndex;if(s.params.grid&&s.params.grid.rows>1){let a=r,o=[a-e];o.push(...Array.from({length:e}).map((l,c)=>a+i+c)),s.slides.forEach((l,c)=>{o.includes(l.column)&&ls(s,c)});return}let n=r+i-1;if(s.params.rewind||s.params.loop)for(let a=r-e;a<=n+e;a+=1){let o=(a%t+t)%t;(o<r||o>n)&&ls(s,o)}else for(let a=Math.max(r-e,0);a<=Math.min(n+e,t-1);a+=1)a!==r&&(a>n||a<r)&&ls(s,a)};function Ll(s){let{slidesGrid:e,params:t}=s,i=s.rtlTranslate?s.translate:-s.translate,r;for(let n=0;n<e.length;n+=1)typeof e[n+1]!="undefined"?i>=e[n]&&i<e[n+1]-(e[n+1]-e[n])/2?r=n:i>=e[n]&&i<e[n+1]&&(r=n+1):i>=e[n]&&(r=n);return t.normalizeSlideIndex&&(r<0||typeof r=="undefined")&&(r=0),r}function Ol(s){let e=this,t=e.rtlTranslate?e.translate:-e.translate,{snapGrid:i,params:r,activeIndex:n,realIndex:a,snapIndex:o}=e,l=s,c,d=h=>{let g=h-e.virtual.slidesBefore;return g<0&&(g=e.virtual.slides.length+g),g>=e.virtual.slides.length&&(g-=e.virtual.slides.length),g};if(typeof l=="undefined"&&(l=Ll(e)),i.indexOf(t)>=0)c=i.indexOf(t);else{let h=Math.min(r.slidesPerGroupSkip,l);c=h+Math.floor((l-h)/r.slidesPerGroup)}if(c>=i.length&&(c=i.length-1),l===n&&!e.params.loop){c!==o&&(e.snapIndex=c,e.emit("snapIndexChange"));return}if(l===n&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=d(l);return}let u=e.grid&&r.grid&&r.grid.rows>1,f;if(e.virtual&&r.virtual.enabled&&r.loop)f=d(l);else if(u){let h=e.slides.filter(p=>p.column===l)[0],g=parseInt(h.getAttribute("data-swiper-slide-index"),10);Number.isNaN(g)&&(g=Math.max(e.slides.indexOf(h),0)),f=Math.floor(g/r.grid.rows)}else if(e.slides[l]){let h=e.slides[l].getAttribute("data-swiper-slide-index");h?f=parseInt(h,10):f=l}else f=l;Object.assign(e,{previousSnapIndex:o,snapIndex:c,previousRealIndex:a,realIndex:f,previousIndex:n,activeIndex:l}),e.initialized&&us(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(a!==f&&e.emit("realIndexChange"),e.emit("slideChange"))}function kl(s,e){let t=this,i=t.params,r=s.closest(`.${i.slideClass}, swiper-slide`);!r&&t.isElement&&e&&e.length>1&&e.includes(s)&&[...e.slice(e.indexOf(s)+1,e.length)].forEach(o=>{!r&&o.matches&&o.matches(`.${i.slideClass}, swiper-slide`)&&(r=o)});let n=!1,a;if(r){for(let o=0;o<t.slides.length;o+=1)if(t.slides[o]===r){n=!0,a=o;break}}if(r&&n)t.clickedSlide=r,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(r.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=a;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}i.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var Dl={updateSize:Sl,updateSlides:Tl,updateAutoHeight:El,updateSlidesOffset:Ml,updateSlidesProgress:Pl,updateProgress:Cl,updateSlidesClasses:Al,updateActiveIndex:Ol,updateClickedSlide:kl};function Il(s){s===void 0&&(s=this.isHorizontal()?"x":"y");let e=this,{params:t,rtlTranslate:i,translate:r,wrapperEl:n}=e;if(t.virtualTranslate)return i?-r:r;if(t.cssMode)return r;let a=Pi(n,s);return a+=e.cssOverflowAdjustment(),i&&(a=-a),a||0}function zl(s,e){let t=this,{rtlTranslate:i,params:r,wrapperEl:n,progress:a}=t,o=0,l=0,c=0;t.isHorizontal()?o=i?-s:s:l=s,r.roundLengths&&(o=Math.floor(o),l=Math.floor(l)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?o:l,r.cssMode?n[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-o:-l:r.virtualTranslate||(t.isHorizontal()?o-=t.cssOverflowAdjustment():l-=t.cssOverflowAdjustment(),n.style.transform=`translate3d(${o}px, ${l}px, ${c}px)`);let d,u=t.maxTranslate()-t.minTranslate();u===0?d=0:d=(s-t.minTranslate())/u,d!==a&&t.updateProgress(s),t.emit("setTranslate",t.translate,e)}function Rl(){return-this.snapGrid[0]}function $l(){return-this.snapGrid[this.snapGrid.length-1]}function Fl(s,e,t,i,r){s===void 0&&(s=0),e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),i===void 0&&(i=!0);let n=this,{params:a,wrapperEl:o}=n;if(n.animating&&a.preventInteractionOnTransition)return!1;let l=n.minTranslate(),c=n.maxTranslate(),d;if(i&&s>l?d=l:i&&s<c?d=c:d=s,n.updateProgress(d),a.cssMode){let u=n.isHorizontal();if(e===0)o[u?"scrollLeft":"scrollTop"]=-d;else{if(!n.support.smoothScroll)return rs({swiper:n,targetPosition:-d,side:u?"left":"top"}),!0;o.scrollTo({[u?"left":"top"]:-d,behavior:"smooth"})}return!0}return e===0?(n.setTransition(0),n.setTranslate(d),t&&(n.emit("beforeTransitionStart",e,r),n.emit("transitionEnd"))):(n.setTransition(e),n.setTranslate(d),t&&(n.emit("beforeTransitionStart",e,r),n.emit("transitionStart")),n.animating||(n.animating=!0,n.onTranslateToWrapperTransitionEnd||(n.onTranslateToWrapperTransitionEnd=function(f){!n||n.destroyed||f.target===this&&(n.wrapperEl.removeEventListener("transitionend",n.onTranslateToWrapperTransitionEnd),n.onTranslateToWrapperTransitionEnd=null,delete n.onTranslateToWrapperTransitionEnd,n.animating=!1,t&&n.emit("transitionEnd"))}),n.wrapperEl.addEventListener("transitionend",n.onTranslateToWrapperTransitionEnd))),!0}var Vl={getTranslate:Il,setTranslate:zl,minTranslate:Rl,maxTranslate:$l,translateTo:Fl};function Bl(s,e){let t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${s}ms`,t.wrapperEl.style.transitionDelay=s===0?"0ms":""),t.emit("setTransition",s,e)}function Un(s){let{swiper:e,runCallbacks:t,direction:i,step:r}=s,{activeIndex:n,previousIndex:a}=e,o=i;if(o||(n>a?o="next":n<a?o="prev":o="reset"),e.emit(`transition${r}`),t&&n!==a){if(o==="reset"){e.emit(`slideResetTransition${r}`);return}e.emit(`slideChangeTransition${r}`),o==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`)}}function Nl(s,e){s===void 0&&(s=!0);let t=this,{params:i}=t;i.cssMode||(i.autoHeight&&t.updateAutoHeight(),Un({swiper:t,runCallbacks:s,direction:e,step:"Start"}))}function Hl(s,e){s===void 0&&(s=!0);let t=this,{params:i}=t;t.animating=!1,!i.cssMode&&(t.setTransition(0),Un({swiper:t,runCallbacks:s,direction:e,step:"End"}))}var Gl={setTransition:Bl,transitionStart:Nl,transitionEnd:Hl};function ql(s,e,t,i,r){s===void 0&&(s=0),t===void 0&&(t=!0),typeof s=="string"&&(s=parseInt(s,10));let n=this,a=s;a<0&&(a=0);let{params:o,snapGrid:l,slidesGrid:c,previousIndex:d,activeIndex:u,rtlTranslate:f,wrapperEl:h,enabled:g}=n;if(!g&&!i&&!r||n.destroyed||n.animating&&o.preventInteractionOnTransition)return!1;typeof e=="undefined"&&(e=n.params.speed);let p=Math.min(n.params.slidesPerGroupSkip,a),v=p+Math.floor((a-p)/n.params.slidesPerGroup);v>=l.length&&(v=l.length-1);let m=-l[v];if(o.normalizeSlideIndex)for(let w=0;w<c.length;w+=1){let x=-Math.floor(m*100),S=Math.floor(c[w]*100),C=Math.floor(c[w+1]*100);typeof c[w+1]!="undefined"?x>=S&&x<C-(C-S)/2?a=w:x>=S&&x<C&&(a=w+1):x>=S&&(a=w)}if(n.initialized&&a!==u&&(!n.allowSlideNext&&(f?m>n.translate&&m>n.minTranslate():m<n.translate&&m<n.minTranslate())||!n.allowSlidePrev&&m>n.translate&&m>n.maxTranslate()&&(u||0)!==a))return!1;a!==(d||0)&&t&&n.emit("beforeSlideChangeStart"),n.updateProgress(m);let y;if(a>u?y="next":a<u?y="prev":y="reset",f&&-m===n.translate||!f&&m===n.translate)return n.updateActiveIndex(a),o.autoHeight&&n.updateAutoHeight(),n.updateSlidesClasses(),o.effect!=="slide"&&n.setTranslate(m),y!=="reset"&&(n.transitionStart(t,y),n.transitionEnd(t,y)),!1;if(o.cssMode){let w=n.isHorizontal(),x=f?m:-m;if(e===0){let S=n.virtual&&n.params.virtual.enabled;S&&(n.wrapperEl.style.scrollSnapType="none",n._immediateVirtual=!0),S&&!n._cssModeVirtualInitialSet&&n.params.initialSlide>0?(n._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{h[w?"scrollLeft":"scrollTop"]=x})):h[w?"scrollLeft":"scrollTop"]=x,S&&requestAnimationFrame(()=>{n.wrapperEl.style.scrollSnapType="",n._immediateVirtual=!1})}else{if(!n.support.smoothScroll)return rs({swiper:n,targetPosition:x,side:w?"left":"top"}),!0;h.scrollTo({[w?"left":"top"]:x,behavior:"smooth"})}return!0}return n.setTransition(e),n.setTranslate(m),n.updateActiveIndex(a),n.updateSlidesClasses(),n.emit("beforeTransitionStart",e,i),n.transitionStart(t,y),e===0?n.transitionEnd(t,y):n.animating||(n.animating=!0,n.onSlideToWrapperTransitionEnd||(n.onSlideToWrapperTransitionEnd=function(x){!n||n.destroyed||x.target===this&&(n.wrapperEl.removeEventListener("transitionend",n.onSlideToWrapperTransitionEnd),n.onSlideToWrapperTransitionEnd=null,delete n.onSlideToWrapperTransitionEnd,n.transitionEnd(t,y))}),n.wrapperEl.addEventListener("transitionend",n.onSlideToWrapperTransitionEnd)),!0}function Yl(s,e,t,i){s===void 0&&(s=0),t===void 0&&(t=!0),typeof s=="string"&&(s=parseInt(s,10));let r=this;if(r.destroyed)return;typeof e=="undefined"&&(e=r.params.speed);let n=r.grid&&r.params.grid&&r.params.grid.rows>1,a=s;if(r.params.loop)if(r.virtual&&r.params.virtual.enabled)a=a+r.virtual.slidesBefore;else{let o;if(n){let f=a*r.params.grid.rows;o=r.slides.filter(h=>h.getAttribute("data-swiper-slide-index")*1===f)[0].column}else o=r.getSlideIndexByData(a);let l=n?Math.ceil(r.slides.length/r.params.grid.rows):r.slides.length,{centeredSlides:c}=r.params,d=r.params.slidesPerView;d==="auto"?d=r.slidesPerViewDynamic():(d=Math.ceil(parseFloat(r.params.slidesPerView,10)),c&&d%2===0&&(d=d+1));let u=l-o<d;if(c&&(u=u||o<Math.ceil(d/2)),i&&c&&r.params.slidesPerView!=="auto"&&!n&&(u=!1),u){let f=c?o<r.activeIndex?"prev":"next":o-r.activeIndex-1<r.params.slidesPerView?"next":"prev";r.loopFix({direction:f,slideTo:!0,activeSlideIndex:f==="next"?o+1:o-l+1,slideRealIndex:f==="next"?r.realIndex:void 0})}if(n){let f=a*r.params.grid.rows;a=r.slides.filter(h=>h.getAttribute("data-swiper-slide-index")*1===f)[0].column}else a=r.getSlideIndexByData(a)}return requestAnimationFrame(()=>{r.slideTo(a,e,t,i)}),r}function Wl(s,e,t){e===void 0&&(e=!0);let i=this,{enabled:r,params:n,animating:a}=i;if(!r||i.destroyed)return i;typeof s=="undefined"&&(s=i.params.speed);let o=n.slidesPerGroup;n.slidesPerView==="auto"&&n.slidesPerGroup===1&&n.slidesPerGroupAuto&&(o=Math.max(i.slidesPerViewDynamic("current",!0),1));let l=i.activeIndex<n.slidesPerGroupSkip?1:o,c=i.virtual&&n.virtual.enabled;if(n.loop){if(a&&!c&&n.loopPreventsSliding)return!1;if(i.loopFix({direction:"next"}),i._clientLeft=i.wrapperEl.clientLeft,i.activeIndex===i.slides.length-1&&n.cssMode)return requestAnimationFrame(()=>{i.slideTo(i.activeIndex+l,s,e,t)}),!0}return n.rewind&&i.isEnd?i.slideTo(0,s,e,t):i.slideTo(i.activeIndex+l,s,e,t)}function Xl(s,e,t){e===void 0&&(e=!0);let i=this,{params:r,snapGrid:n,slidesGrid:a,rtlTranslate:o,enabled:l,animating:c}=i;if(!l||i.destroyed)return i;typeof s=="undefined"&&(s=i.params.speed);let d=i.virtual&&r.virtual.enabled;if(r.loop){if(c&&!d&&r.loopPreventsSliding)return!1;i.loopFix({direction:"prev"}),i._clientLeft=i.wrapperEl.clientLeft}let u=o?i.translate:-i.translate;function f(m){return m<0?-Math.floor(Math.abs(m)):Math.floor(m)}let h=f(u),g=n.map(m=>f(m)),p=n[g.indexOf(h)-1];if(typeof p=="undefined"&&r.cssMode){let m;n.forEach((y,w)=>{h>=y&&(m=w)}),typeof m!="undefined"&&(p=n[m>0?m-1:m])}let v=0;if(typeof p!="undefined"&&(v=a.indexOf(p),v<0&&(v=i.activeIndex-1),r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(v=v-i.slidesPerViewDynamic("previous",!0)+1,v=Math.max(v,0))),r.rewind&&i.isBeginning){let m=i.params.virtual&&i.params.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1;return i.slideTo(m,s,e,t)}else if(r.loop&&i.activeIndex===0&&r.cssMode)return requestAnimationFrame(()=>{i.slideTo(v,s,e,t)}),!0;return i.slideTo(v,s,e,t)}function jl(s,e,t){e===void 0&&(e=!0);let i=this;if(!i.destroyed)return typeof s=="undefined"&&(s=i.params.speed),i.slideTo(i.activeIndex,s,e,t)}function Ul(s,e,t,i){e===void 0&&(e=!0),i===void 0&&(i=.5);let r=this;if(r.destroyed)return;typeof s=="undefined"&&(s=r.params.speed);let n=r.activeIndex,a=Math.min(r.params.slidesPerGroupSkip,n),o=a+Math.floor((n-a)/r.params.slidesPerGroup),l=r.rtlTranslate?r.translate:-r.translate;if(l>=r.snapGrid[o]){let c=r.snapGrid[o],d=r.snapGrid[o+1];l-c>(d-c)*i&&(n+=r.params.slidesPerGroup)}else{let c=r.snapGrid[o-1],d=r.snapGrid[o];l-c<=(d-c)*i&&(n-=r.params.slidesPerGroup)}return n=Math.max(n,0),n=Math.min(n,r.slidesGrid.length-1),r.slideTo(n,s,e,t)}function Kl(){let s=this;if(s.destroyed)return;let{params:e,slidesEl:t}=s,i=e.slidesPerView==="auto"?s.slidesPerViewDynamic():e.slidesPerView,r=s.clickedIndex,n,a=s.isElement?"swiper-slide":`.${e.slideClass}`;if(e.loop){if(s.animating)return;n=parseInt(s.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?r<s.loopedSlides-i/2||r>s.slides.length-s.loopedSlides+i/2?(s.loopFix(),r=s.getSlideIndex(de(t,`${a}[data-swiper-slide-index="${n}"]`)[0]),et(()=>{s.slideTo(r)})):s.slideTo(r):r>s.slides.length-i?(s.loopFix(),r=s.getSlideIndex(de(t,`${a}[data-swiper-slide-index="${n}"]`)[0]),et(()=>{s.slideTo(r)})):s.slideTo(r)}else s.slideTo(r)}var Ql={slideTo:ql,slideToLoop:Yl,slideNext:Wl,slidePrev:Xl,slideReset:jl,slideToClosest:Ul,slideToClickedSlide:Kl};function Zl(s){let e=this,{params:t,slidesEl:i}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;let r=()=>{de(i,`.${t.slideClass}, swiper-slide`).forEach((u,f)=>{u.setAttribute("data-swiper-slide-index",f)})},n=e.grid&&t.grid&&t.grid.rows>1,a=t.slidesPerGroup*(n?t.grid.rows:1),o=e.slides.length%a!==0,l=n&&e.slides.length%t.grid.rows!==0,c=d=>{for(let u=0;u<d;u+=1){let f=e.isElement?ye("swiper-slide",[t.slideBlankClass]):ye("div",[t.slideClass,t.slideBlankClass]);e.slidesEl.append(f)}};if(o){if(t.loopAddBlankSlides){let d=a-e.slides.length%a;c(d),e.recalcSlides(),e.updateSlides()}else Ci("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else if(l){if(t.loopAddBlankSlides){let d=t.grid.rows-e.slides.length%t.grid.rows;c(d),e.recalcSlides(),e.updateSlides()}else Ci("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else r();e.loopFix({slideRealIndex:s,direction:t.centeredSlides?void 0:"next"})}function Jl(s){let{slideRealIndex:e,slideTo:t=!0,direction:i,setTranslate:r,activeSlideIndex:n,byController:a,byMousewheel:o}=s===void 0?{}:s,l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");let{slides:c,allowSlidePrev:d,allowSlideNext:u,slidesEl:f,params:h}=l,{centeredSlides:g}=h;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&h.virtual.enabled){t&&(!h.centeredSlides&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):h.centeredSlides&&l.snapIndex<h.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=d,l.allowSlideNext=u,l.emit("loopFix");return}let p=h.slidesPerView;p==="auto"?p=l.slidesPerViewDynamic():(p=Math.ceil(parseFloat(h.slidesPerView,10)),g&&p%2===0&&(p=p+1));let v=h.slidesPerGroupAuto?p:h.slidesPerGroup,m=v;m%v!==0&&(m+=v-m%v),m+=h.loopAdditionalSlides,l.loopedSlides=m;let y=l.grid&&h.grid&&h.grid.rows>1;c.length<p+m?Ci("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):y&&h.grid.fill==="row"&&Ci("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");let w=[],x=[],S=l.activeIndex;typeof n=="undefined"?n=l.getSlideIndex(c.filter(A=>A.classList.contains(h.slideActiveClass))[0]):S=n;let C=i==="next"||!i,R=i==="prev"||!i,T=0,E=0,k=y?Math.ceil(c.length/h.grid.rows):c.length,L=(y?c[n].column:n)+(g&&typeof r=="undefined"?-p/2+.5:0);if(L<m){T=Math.max(m-L,v);for(let A=0;A<m-L;A+=1){let D=A-Math.floor(A/k)*k;if(y){let B=k-D-1;for(let G=c.length-1;G>=0;G-=1)c[G].column===B&&w.push(G)}else w.push(k-D-1)}}else if(L+p>k-m){E=Math.max(L-(k-m*2),v);for(let A=0;A<E;A+=1){let D=A-Math.floor(A/k)*k;y?c.forEach((B,G)=>{B.column===D&&x.push(G)}):x.push(D)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),R&&w.forEach(A=>{c[A].swiperLoopMoveDOM=!0,f.prepend(c[A]),c[A].swiperLoopMoveDOM=!1}),C&&x.forEach(A=>{c[A].swiperLoopMoveDOM=!0,f.append(c[A]),c[A].swiperLoopMoveDOM=!1}),l.recalcSlides(),h.slidesPerView==="auto"?l.updateSlides():y&&(w.length>0&&R||x.length>0&&C)&&l.slides.forEach((A,D)=>{l.grid.updateSlide(D,A,l.slides)}),h.watchSlidesProgress&&l.updateSlidesOffset(),t){if(w.length>0&&R){if(typeof e=="undefined"){let A=l.slidesGrid[S],B=l.slidesGrid[S+T]-A;o?l.setTranslate(l.translate-B):(l.slideTo(S+Math.ceil(T),0,!1,!0),r&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-B,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-B))}else if(r){let A=y?w.length/h.grid.rows:w.length;l.slideTo(l.activeIndex+A,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(x.length>0&&C)if(typeof e=="undefined"){let A=l.slidesGrid[S],B=l.slidesGrid[S-E]-A;o?l.setTranslate(l.translate-B):(l.slideTo(S-E,0,!1,!0),r&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-B,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-B))}else{let A=y?x.length/h.grid.rows:x.length;l.slideTo(l.activeIndex-A,0,!1,!0)}}if(l.allowSlidePrev=d,l.allowSlideNext=u,l.controller&&l.controller.control&&!a){let A={slideRealIndex:e,direction:i,setTranslate:r,activeSlideIndex:n,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(D=>{!D.destroyed&&D.params.loop&&D.loopFix({...A,slideTo:D.params.slidesPerView===h.slidesPerView?t:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...A,slideTo:l.controller.control.params.slidesPerView===h.slidesPerView?t:!1})}l.emit("loopFix")}function ec(){let s=this,{params:e,slidesEl:t}=s;if(!e.loop||s.virtual&&s.params.virtual.enabled)return;s.recalcSlides();let i=[];s.slides.forEach(r=>{let n=typeof r.swiperSlideIndex=="undefined"?r.getAttribute("data-swiper-slide-index")*1:r.swiperSlideIndex;i[n]=r}),s.slides.forEach(r=>{r.removeAttribute("data-swiper-slide-index")}),i.forEach(r=>{t.append(r)}),s.recalcSlides(),s.slideTo(s.realIndex,0)}var tc={loopCreate:Zl,loopFix:Jl,loopDestroy:ec};function ic(s){let e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;let t=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=s?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function rc(){let s=this;s.params.watchOverflow&&s.isLocked||s.params.cssMode||(s.isElement&&(s.__preventObserver__=!0),s[s.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",s.isElement&&requestAnimationFrame(()=>{s.__preventObserver__=!1}))}var sc={setGrabCursor:ic,unsetGrabCursor:rc};function nc(s,e){e===void 0&&(e=this);function t(i){if(!i||i===ce()||i===ne())return null;i.assignedSlot&&(i=i.assignedSlot);let r=i.closest(s);return!r&&!i.getRootNode?null:r||t(i.getRootNode().host)}return t(e)}function Gn(s,e,t){let i=ne(),{params:r}=s,n=r.edgeSwipeDetection,a=r.edgeSwipeThreshold;return n&&(t<=a||t>=i.innerWidth-a)?n==="prevent"?(e.preventDefault(),!0):!1:!0}function ac(s){let e=this,t=ce(),i=s;i.originalEvent&&(i=i.originalEvent);let r=e.touchEventsData;if(i.type==="pointerdown"){if(r.pointerId!==null&&r.pointerId!==i.pointerId)return;r.pointerId=i.pointerId}else i.type==="touchstart"&&i.targetTouches.length===1&&(r.touchId=i.targetTouches[0].identifier);if(i.type==="touchstart"){Gn(e,i,i.targetTouches[0].pageX);return}let{params:n,touches:a,enabled:o}=e;if(!o||!n.simulateTouch&&i.pointerType==="mouse"||e.animating&&n.preventInteractionOnTransition)return;!e.animating&&n.cssMode&&n.loop&&e.loopFix();let l=i.target;if(n.touchEventsTarget==="wrapper"&&!e.wrapperEl.contains(l)||"which"in i&&i.which===3||"button"in i&&i.button>0||r.isTouched&&r.isMoved)return;let c=!!n.noSwipingClass&&n.noSwipingClass!=="",d=i.composedPath?i.composedPath():i.path;c&&i.target&&i.target.shadowRoot&&d&&(l=d[0]);let u=n.noSwipingSelector?n.noSwipingSelector:`.${n.noSwipingClass}`,f=!!(i.target&&i.target.shadowRoot);if(n.noSwiping&&(f?nc(u,l):l.closest(u))){e.allowClick=!0;return}if(n.swipeHandler&&!l.closest(n.swipeHandler))return;a.currentX=i.pageX,a.currentY=i.pageY;let h=a.currentX,g=a.currentY;if(!Gn(e,i,h))return;Object.assign(r,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=h,a.startY=g,r.touchStartTime=Ie(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,n.threshold>0&&(r.allowThresholdMove=!1);let p=!0;l.matches(r.focusableElements)&&(p=!1,l.nodeName==="SELECT"&&(r.isTouched=!1)),t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==l&&t.activeElement.blur();let v=p&&e.allowTouchMove&&n.touchStartPreventDefault;(n.touchStartForcePreventDefault||v)&&!l.isContentEditable&&i.preventDefault(),n.freeMode&&n.freeMode.enabled&&e.freeMode&&e.animating&&!n.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",i)}function oc(s){let e=ce(),t=this,i=t.touchEventsData,{params:r,touches:n,rtlTranslate:a,enabled:o}=t;if(!o||!r.simulateTouch&&s.pointerType==="mouse")return;let l=s;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(i.touchId!==null||l.pointerId!==i.pointerId))return;let c;if(l.type==="touchmove"){if(c=[...l.changedTouches].filter(C=>C.identifier===i.touchId)[0],!c||c.identifier!==i.touchId)return}else c=l;if(!i.isTouched){i.startMoving&&i.isScrolling&&t.emit("touchMoveOpposite",l);return}let d=c.pageX,u=c.pageY;if(l.preventedByNestedSwiper){n.startX=d,n.startY=u;return}if(!t.allowTouchMove){l.target.matches(i.focusableElements)||(t.allowClick=!1),i.isTouched&&(Object.assign(n,{startX:d,startY:u,currentX:d,currentY:u}),i.touchStartTime=Ie());return}if(r.touchReleaseOnEdges&&!r.loop){if(t.isVertical()){if(u<n.startY&&t.translate<=t.maxTranslate()||u>n.startY&&t.translate>=t.minTranslate()){i.isTouched=!1,i.isMoved=!1;return}}else if(d<n.startX&&t.translate<=t.maxTranslate()||d>n.startX&&t.translate>=t.minTranslate())return}if(e.activeElement&&l.target===e.activeElement&&l.target.matches(i.focusableElements)){i.isMoved=!0,t.allowClick=!1;return}i.allowTouchCallbacks&&t.emit("touchMove",l),n.previousX=n.currentX,n.previousY=n.currentY,n.currentX=d,n.currentY=u;let f=n.currentX-n.startX,h=n.currentY-n.startY;if(t.params.threshold&&Math.sqrt(f**2+h**2)<t.params.threshold)return;if(typeof i.isScrolling=="undefined"){let C;t.isHorizontal()&&n.currentY===n.startY||t.isVertical()&&n.currentX===n.startX?i.isScrolling=!1:f*f+h*h>=25&&(C=Math.atan2(Math.abs(h),Math.abs(f))*180/Math.PI,i.isScrolling=t.isHorizontal()?C>r.touchAngle:90-C>r.touchAngle)}if(i.isScrolling&&t.emit("touchMoveOpposite",l),typeof i.startMoving=="undefined"&&(n.currentX!==n.startX||n.currentY!==n.startY)&&(i.startMoving=!0),i.isScrolling||l.type==="touchmove"&&i.preventTouchMoveFromPointerMove){i.isTouched=!1;return}if(!i.startMoving)return;t.allowClick=!1,!r.cssMode&&l.cancelable&&l.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&l.stopPropagation();let g=t.isHorizontal()?f:h,p=t.isHorizontal()?n.currentX-n.previousX:n.currentY-n.previousY;r.oneWayMovement&&(g=Math.abs(g)*(a?1:-1),p=Math.abs(p)*(a?1:-1)),n.diff=g,g*=r.touchRatio,a&&(g=-g,p=-p);let v=t.touchesDirection;t.swipeDirection=g>0?"prev":"next",t.touchesDirection=p>0?"prev":"next";let m=t.params.loop&&!r.cssMode,y=t.touchesDirection==="next"&&t.allowSlideNext||t.touchesDirection==="prev"&&t.allowSlidePrev;if(!i.isMoved){if(m&&y&&t.loopFix({direction:t.swipeDirection}),i.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){let C=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});t.wrapperEl.dispatchEvent(C)}i.allowMomentumBounce=!1,r.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",l)}let w;if(new Date().getTime(),i.isMoved&&i.allowThresholdMove&&v!==t.touchesDirection&&m&&y&&Math.abs(g)>=1){Object.assign(n,{startX:d,startY:u,currentX:d,currentY:u,startTranslate:i.currentTranslate}),i.loopSwapReset=!0,i.startTranslate=i.currentTranslate;return}t.emit("sliderMove",l),i.isMoved=!0,i.currentTranslate=g+i.startTranslate;let x=!0,S=r.resistanceRatio;if(r.touchReleaseOnEdges&&(S=0),g>0?(m&&y&&!w&&i.allowThresholdMove&&i.currentTranslate>(r.centeredSlides?t.minTranslate()-t.slidesSizesGrid[t.activeIndex+1]:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),i.currentTranslate>t.minTranslate()&&(x=!1,r.resistance&&(i.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+i.startTranslate+g)**S))):g<0&&(m&&y&&!w&&i.allowThresholdMove&&i.currentTranslate<(r.centeredSlides?t.maxTranslate()+t.slidesSizesGrid[t.slidesSizesGrid.length-1]:t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(r.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(r.slidesPerView,10)))}),i.currentTranslate<t.maxTranslate()&&(x=!1,r.resistance&&(i.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-i.startTranslate-g)**S))),x&&(l.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(i.currentTranslate=i.startTranslate),r.threshold>0)if(Math.abs(g)>r.threshold||i.allowThresholdMove){if(!i.allowThresholdMove){i.allowThresholdMove=!0,n.startX=n.currentX,n.startY=n.currentY,i.currentTranslate=i.startTranslate,n.diff=t.isHorizontal()?n.currentX-n.startX:n.currentY-n.startY;return}}else{i.currentTranslate=i.startTranslate;return}!r.followFinger||r.cssMode||((r.freeMode&&r.freeMode.enabled&&t.freeMode||r.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),r.freeMode&&r.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(i.currentTranslate),t.setTranslate(i.currentTranslate))}function lc(s){let e=this,t=e.touchEventsData,i=s;i.originalEvent&&(i=i.originalEvent);let r;if(i.type==="touchend"||i.type==="touchcancel"){if(r=[...i.changedTouches].filter(S=>S.identifier===t.touchId)[0],!r||r.identifier!==t.touchId)return}else{if(t.touchId!==null||i.pointerId!==t.pointerId)return;r=i}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(i.type)&&!(["pointercancel","contextmenu"].includes(i.type)&&(e.browser.isSafari||e.browser.isWebView)))return;t.pointerId=null,t.touchId=null;let{params:a,touches:o,rtlTranslate:l,slidesGrid:c,enabled:d}=e;if(!d||!a.simulateTouch&&i.pointerType==="mouse")return;if(t.allowTouchCallbacks&&e.emit("touchEnd",i),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&a.grabCursor&&e.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}a.grabCursor&&t.isMoved&&t.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);let u=Ie(),f=u-t.touchStartTime;if(e.allowClick){let S=i.path||i.composedPath&&i.composedPath();e.updateClickedSlide(S&&S[0]||i.target,S),e.emit("tap click",i),f<300&&u-t.lastClickTime<300&&e.emit("doubleTap doubleClick",i)}if(t.lastClickTime=Ie(),et(()=>{e.destroyed||(e.allowClick=!0)}),!t.isTouched||!t.isMoved||!e.swipeDirection||o.diff===0&&!t.loopSwapReset||t.currentTranslate===t.startTranslate&&!t.loopSwapReset){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let h;if(a.followFinger?h=l?e.translate:-e.translate:h=-t.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:h});return}let g=h>=-e.maxTranslate()&&!e.params.loop,p=0,v=e.slidesSizesGrid[0];for(let S=0;S<c.length;S+=S<a.slidesPerGroupSkip?1:a.slidesPerGroup){let C=S<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof c[S+C]!="undefined"?(g||h>=c[S]&&h<c[S+C])&&(p=S,v=c[S+C]-c[S]):(g||h>=c[S])&&(p=S,v=c[c.length-1]-c[c.length-2])}let m=null,y=null;a.rewind&&(e.isBeginning?y=a.virtual&&a.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(m=0));let w=(h-c[p])/v,x=p<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(f>a.longSwipesMs){if(!a.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(w>=a.longSwipesRatio?e.slideTo(a.rewind&&e.isEnd?m:p+x):e.slideTo(p)),e.swipeDirection==="prev"&&(w>1-a.longSwipesRatio?e.slideTo(p+x):y!==null&&w<0&&Math.abs(w)>a.longSwipesRatio?e.slideTo(y):e.slideTo(p))}else{if(!a.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(i.target===e.navigation.nextEl||i.target===e.navigation.prevEl)?i.target===e.navigation.nextEl?e.slideTo(p+x):e.slideTo(p):(e.swipeDirection==="next"&&e.slideTo(m!==null?m:p+x),e.swipeDirection==="prev"&&e.slideTo(y!==null?y:p))}}function qn(){let s=this,{params:e,el:t}=s;if(t&&t.offsetWidth===0)return;e.breakpoints&&s.setBreakpoint();let{allowSlideNext:i,allowSlidePrev:r,snapGrid:n}=s,a=s.virtual&&s.params.virtual.enabled;s.allowSlideNext=!0,s.allowSlidePrev=!0,s.updateSize(),s.updateSlides(),s.updateSlidesClasses();let o=a&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&s.isEnd&&!s.isBeginning&&!s.params.centeredSlides&&!o?s.slideTo(s.slides.length-1,0,!1,!0):s.params.loop&&!a?s.slideToLoop(s.realIndex,0,!1,!0):s.slideTo(s.activeIndex,0,!1,!0),s.autoplay&&s.autoplay.running&&s.autoplay.paused&&(clearTimeout(s.autoplay.resizeTimeout),s.autoplay.resizeTimeout=setTimeout(()=>{s.autoplay&&s.autoplay.running&&s.autoplay.paused&&s.autoplay.resume()},500)),s.allowSlidePrev=r,s.allowSlideNext=i,s.params.watchOverflow&&n!==s.snapGrid&&s.checkOverflow()}function cc(s){let e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&s.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(s.stopPropagation(),s.stopImmediatePropagation())))}function dc(){let s=this,{wrapperEl:e,rtlTranslate:t,enabled:i}=s;if(!i)return;s.previousTranslate=s.translate,s.isHorizontal()?s.translate=-e.scrollLeft:s.translate=-e.scrollTop,s.translate===0&&(s.translate=0),s.updateActiveIndex(),s.updateSlidesClasses();let r,n=s.maxTranslate()-s.minTranslate();n===0?r=0:r=(s.translate-s.minTranslate())/n,r!==s.progress&&s.updateProgress(t?-s.translate:s.translate),s.emit("setTranslate",s.translate,!1)}function uc(s){let e=this;tr(e,s.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function fc(){let s=this;s.documentTouchHandlerProceeded||(s.documentTouchHandlerProceeded=!0,s.params.touchReleaseOnEdges&&(s.el.style.touchAction="auto"))}var Kn=(s,e)=>{let t=ce(),{params:i,el:r,wrapperEl:n,device:a}=s,o=!!i.nested,l=e==="on"?"addEventListener":"removeEventListener",c=e;!r||typeof r=="string"||(t[l]("touchstart",s.onDocumentTouchStart,{passive:!1,capture:o}),r[l]("touchstart",s.onTouchStart,{passive:!1}),r[l]("pointerdown",s.onTouchStart,{passive:!1}),t[l]("touchmove",s.onTouchMove,{passive:!1,capture:o}),t[l]("pointermove",s.onTouchMove,{passive:!1,capture:o}),t[l]("touchend",s.onTouchEnd,{passive:!0}),t[l]("pointerup",s.onTouchEnd,{passive:!0}),t[l]("pointercancel",s.onTouchEnd,{passive:!0}),t[l]("touchcancel",s.onTouchEnd,{passive:!0}),t[l]("pointerout",s.onTouchEnd,{passive:!0}),t[l]("pointerleave",s.onTouchEnd,{passive:!0}),t[l]("contextmenu",s.onTouchEnd,{passive:!0}),(i.preventClicks||i.preventClicksPropagation)&&r[l]("click",s.onClick,!0),i.cssMode&&n[l]("scroll",s.onScroll),i.updateOnWindowResize?s[c](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",qn,!0):s[c]("observerUpdate",qn,!0),r[l]("load",s.onLoad,{capture:!0}))};function pc(){let s=this,{params:e}=s;s.onTouchStart=ac.bind(s),s.onTouchMove=oc.bind(s),s.onTouchEnd=lc.bind(s),s.onDocumentTouchStart=fc.bind(s),e.cssMode&&(s.onScroll=dc.bind(s)),s.onClick=cc.bind(s),s.onLoad=uc.bind(s),Kn(s,"on")}function hc(){Kn(this,"off")}var mc={attachEvents:pc,detachEvents:hc},Yn=(s,e)=>s.grid&&e.grid&&e.grid.rows>1;function gc(){let s=this,{realIndex:e,initialized:t,params:i,el:r}=s,n=i.breakpoints;if(!n||n&&Object.keys(n).length===0)return;let a=s.getBreakpoint(n,s.params.breakpointsBase,s.el);if(!a||s.currentBreakpoint===a)return;let l=(a in n?n[a]:void 0)||s.originalParams,c=Yn(s,i),d=Yn(s,l),u=s.params.grabCursor,f=l.grabCursor,h=i.enabled;c&&!d?(r.classList.remove(`${i.containerModifierClass}grid`,`${i.containerModifierClass}grid-column`),s.emitContainerClasses()):!c&&d&&(r.classList.add(`${i.containerModifierClass}grid`),(l.grid.fill&&l.grid.fill==="column"||!l.grid.fill&&i.grid.fill==="column")&&r.classList.add(`${i.containerModifierClass}grid-column`),s.emitContainerClasses()),u&&!f?s.unsetGrabCursor():!u&&f&&s.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(w=>{if(typeof l[w]=="undefined")return;let x=i[w]&&i[w].enabled,S=l[w]&&l[w].enabled;x&&!S&&s[w].disable(),!x&&S&&s[w].enable()});let g=l.direction&&l.direction!==i.direction,p=i.loop&&(l.slidesPerView!==i.slidesPerView||g),v=i.loop;g&&t&&s.changeDirection(),Ve(s.params,l);let m=s.params.enabled,y=s.params.loop;Object.assign(s,{allowTouchMove:s.params.allowTouchMove,allowSlideNext:s.params.allowSlideNext,allowSlidePrev:s.params.allowSlidePrev}),h&&!m?s.disable():!h&&m&&s.enable(),s.currentBreakpoint=a,s.emit("_beforeBreakpoint",l),t&&(p?(s.loopDestroy(),s.loopCreate(e),s.updateSlides()):!v&&y?(s.loopCreate(e),s.updateSlides()):v&&!y&&s.loopDestroy()),s.emit("breakpoint",l)}function vc(s,e,t){if(e===void 0&&(e="window"),!s||e==="container"&&!t)return;let i=!1,r=ne(),n=e==="window"?r.innerHeight:t.clientHeight,a=Object.keys(s).map(o=>{if(typeof o=="string"&&o.indexOf("@")===0){let l=parseFloat(o.substr(1));return{value:n*l,point:o}}return{value:o,point:o}});a.sort((o,l)=>parseInt(o.value,10)-parseInt(l.value,10));for(let o=0;o<a.length;o+=1){let{point:l,value:c}=a[o];e==="window"?r.matchMedia(`(min-width: ${c}px)`).matches&&(i=l):c<=t.clientWidth&&(i=l)}return i||"max"}var wc={setBreakpoint:gc,getBreakpoint:vc};function yc(s,e){let t=[];return s.forEach(i=>{typeof i=="object"?Object.keys(i).forEach(r=>{i[r]&&t.push(e+r)}):typeof i=="string"&&t.push(e+i)}),t}function _c(){let s=this,{classNames:e,params:t,rtl:i,el:r,device:n}=s,a=yc(["initialized",t.direction,{"free-mode":s.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:i},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:n.android},{ios:n.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);e.push(...a),r.classList.add(...e),s.emitContainerClasses()}function bc(){let s=this,{el:e,classNames:t}=s;!e||typeof e=="string"||(e.classList.remove(...t),s.emitContainerClasses())}var xc={addClasses:_c,removeClasses:bc};function Sc(){let s=this,{isLocked:e,params:t}=s,{slidesOffsetBefore:i}=t;if(i){let r=s.slides.length-1,n=s.slidesGrid[r]+s.slidesSizesGrid[r]+i*2;s.isLocked=s.size>n}else s.isLocked=s.snapGrid.length===1;t.allowSlideNext===!0&&(s.allowSlideNext=!s.isLocked),t.allowSlidePrev===!0&&(s.allowSlidePrev=!s.isLocked),e&&e!==s.isLocked&&(s.isEnd=!1),e!==s.isLocked&&s.emit(s.isLocked?"lock":"unlock")}var Tc={checkOverflow:Sc},Wn={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Ec(s,e){return function(i){i===void 0&&(i={});let r=Object.keys(i)[0],n=i[r];if(typeof n!="object"||n===null){Ve(e,i);return}if(s[r]===!0&&(s[r]={enabled:!0}),r==="navigation"&&s[r]&&s[r].enabled&&!s[r].prevEl&&!s[r].nextEl&&(s[r].auto=!0),["pagination","scrollbar"].indexOf(r)>=0&&s[r]&&s[r].enabled&&!s[r].el&&(s[r].auto=!0),!(r in s&&"enabled"in n)){Ve(e,i);return}typeof s[r]=="object"&&!("enabled"in s[r])&&(s[r].enabled=!0),s[r]||(s[r]={enabled:!1}),Ve(e,i)}}var cs={eventsEmitter:xl,update:Dl,translate:Vl,transition:Gl,slide:Ql,loop:tc,grabCursor:sc,events:mc,breakpoints:wc,checkOverflow:Tc,classes:xc},ds={},Te=class{constructor(){let e,t;for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];r.length===1&&r[0].constructor&&Object.prototype.toString.call(r[0]).slice(8,-1)==="Object"?t=r[0]:[e,t]=r,t||(t={}),t=Ve({},t),e&&!t.el&&(t.el=e);let a=ce();if(t.el&&typeof t.el=="string"&&a.querySelectorAll(t.el).length>1){let d=[];return a.querySelectorAll(t.el).forEach(u=>{let f=Ve({},t,{el:u});d.push(new Te(f))}),d}let o=this;o.__swiper__=!0,o.support=Xn(),o.device=jn({userAgent:t.userAgent}),o.browser=yl(),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],t.modules&&Array.isArray(t.modules)&&o.modules.push(...t.modules);let l={};o.modules.forEach(d=>{d({params:t,swiper:o,extendParams:Ec(t,l),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})});let c=Ve({},Wn,l);return o.params=Ve({},c,ds,t),o.originalParams=Ve({},o.params),o.passedParams=Ve({},t),o.params&&o.params.on&&Object.keys(o.params.on).forEach(d=>{o.on(d,o.params.on[d])}),o.params&&o.params.onAny&&o.onAny(o.params.onAny),Object.assign(o,{enabled:o.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return o.params.direction==="horizontal"},isVertical(){return o.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:o.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){let{slidesEl:t,params:i}=this,r=de(t,`.${i.slideClass}, swiper-slide`),n=At(r[0]);return At(e)-n}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter(t=>t.getAttribute("data-swiper-slide-index")*1===e)[0])}recalcSlides(){let e=this,{slidesEl:t,params:i}=e;e.slides=de(t,`.${i.slideClass}, swiper-slide`)}enable(){let e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){let e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){let i=this;e=Math.min(Math.max(e,0),1);let r=i.minTranslate(),a=(i.maxTranslate()-r)*e+r;i.translateTo(a,typeof t=="undefined"?0:t),i.updateActiveIndex(),i.updateSlidesClasses()}emitContainerClasses(){let e=this;if(!e.params._emitClasses||!e.el)return;let t=e.el.className.split(" ").filter(i=>i.indexOf("swiper")===0||i.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){let t=this;return t.destroyed?"":e.className.split(" ").filter(i=>i.indexOf("swiper-slide")===0||i.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){let e=this;if(!e.params._emitClasses||!e.el)return;let t=[];e.slides.forEach(i=>{let r=e.getSlideClasses(i);t.push({slideEl:i,classNames:r}),e.emit("_slideClass",i,r)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){e===void 0&&(e="current"),t===void 0&&(t=!1);let i=this,{params:r,slides:n,slidesGrid:a,slidesSizesGrid:o,size:l,activeIndex:c}=i,d=1;if(typeof r.slidesPerView=="number")return r.slidesPerView;if(r.centeredSlides){let u=n[c]?Math.ceil(n[c].swiperSlideSize):0,f;for(let h=c+1;h<n.length;h+=1)n[h]&&!f&&(u+=Math.ceil(n[h].swiperSlideSize),d+=1,u>l&&(f=!0));for(let h=c-1;h>=0;h-=1)n[h]&&!f&&(u+=n[h].swiperSlideSize,d+=1,u>l&&(f=!0))}else if(e==="current")for(let u=c+1;u<n.length;u+=1)(t?a[u]+o[u]-a[c]<l:a[u]-a[c]<l)&&(d+=1);else for(let u=c-1;u>=0;u-=1)a[c]-a[u]<l&&(d+=1);return d}update(){let e=this;if(!e||e.destroyed)return;let{snapGrid:t,params:i}=e;i.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&tr(e,a)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function r(){let a=e.rtlTranslate?e.translate*-1:e.translate,o=Math.min(Math.max(a,e.maxTranslate()),e.minTranslate());e.setTranslate(o),e.updateActiveIndex(),e.updateSlidesClasses()}let n;if(i.freeMode&&i.freeMode.enabled&&!i.cssMode)r(),i.autoHeight&&e.updateAutoHeight();else{if((i.slidesPerView==="auto"||i.slidesPerView>1)&&e.isEnd&&!i.centeredSlides){let a=e.virtual&&i.virtual.enabled?e.virtual.slides:e.slides;n=e.slideTo(a.length-1,0,!1,!0)}else n=e.slideTo(e.activeIndex,0,!1,!0);n||r()}i.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){t===void 0&&(t=!0);let i=this,r=i.params.direction;return e||(e=r==="horizontal"?"vertical":"horizontal"),e===r||e!=="horizontal"&&e!=="vertical"||(i.el.classList.remove(`${i.params.containerModifierClass}${r}`),i.el.classList.add(`${i.params.containerModifierClass}${e}`),i.emitContainerClasses(),i.params.direction=e,i.slides.forEach(n=>{e==="vertical"?n.style.width="":n.style.height=""}),i.emit("changeDirection"),t&&i.update()),i}changeLanguageDirection(e){let t=this;t.rtl&&e==="rtl"||!t.rtl&&e==="ltr"||(t.rtl=e==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){let t=this;if(t.mounted)return!0;let i=e||t.params.el;if(typeof i=="string"&&(i=document.querySelector(i)),!i)return!1;i.swiper=t,i.parentNode&&i.parentNode.host&&i.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);let r=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`,a=(()=>i&&i.shadowRoot&&i.shadowRoot.querySelector?i.shadowRoot.querySelector(r()):de(i,r())[0])();return!a&&t.params.createElements&&(a=ye("div",t.params.wrapperClass),i.append(a),de(i,`.${t.params.slideClass}`).forEach(o=>{a.append(o)})),Object.assign(t,{el:i,wrapperEl:a,slidesEl:t.isElement&&!i.parentNode.host.slideSlots?i.parentNode.host:a,hostEl:t.isElement?i.parentNode.host:i,mounted:!0,rtl:i.dir.toLowerCase()==="rtl"||_t(i,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(i.dir.toLowerCase()==="rtl"||_t(i,"direction")==="rtl"),wrongRTL:_t(a,"display")==="-webkit-box"}),!0}init(e){let t=this;if(t.initialized||t.mount(e)===!1)return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),t.attachEvents();let r=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&r.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),r.forEach(n=>{n.complete?tr(t,n):n.addEventListener("load",a=>{tr(t,a.target)})}),us(t),t.initialized=!0,us(t),t.emit("init"),t.emit("afterInit"),t}destroy(e,t){e===void 0&&(e=!0),t===void 0&&(t=!0);let i=this,{params:r,el:n,wrapperEl:a,slides:o}=i;return typeof i.params=="undefined"||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),r.loop&&i.loopDestroy(),t&&(i.removeClasses(),n&&typeof n!="string"&&n.removeAttribute("style"),a&&a.removeAttribute("style"),o&&o.length&&o.forEach(l=>{l.classList.remove(r.slideVisibleClass,r.slideFullyVisibleClass,r.slideActiveClass,r.slideNextClass,r.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),i.emit("destroy"),Object.keys(i.eventsListeners).forEach(l=>{i.off(l)}),e!==!1&&(i.el&&typeof i.el!="string"&&(i.el.swiper=null),Vn(i)),i.destroyed=!0),null}static extendDefaults(e){Ve(ds,e)}static get extendedDefaults(){return ds}static get defaults(){return Wn}static installModule(e){Te.prototype.__modules__||(Te.prototype.__modules__=[]);let t=Te.prototype.__modules__;typeof e=="function"&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach(t=>Te.installModule(t)),Te):(Te.installModule(e),Te)}};Object.keys(cs).forEach(s=>{Object.keys(cs[s]).forEach(e=>{Te.prototype[e]=cs[s][e]})});Te.use([_l,bl]);function Qn(s){let{swiper:e,extendParams:t,on:i,emit:r}=s;t({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}});let n,a=ce();e.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]};let o=a.createElement("div");function l(g,p){let v=e.params.virtual;if(v.cache&&e.virtual.cache[p])return e.virtual.cache[p];let m;return v.renderSlide?(m=v.renderSlide.call(e,g,p),typeof m=="string"&&(o.innerHTML=m,m=o.children[0])):e.isElement?m=ye("swiper-slide"):m=ye("div",e.params.slideClass),m.setAttribute("data-swiper-slide-index",p),v.renderSlide||(m.innerHTML=g),v.cache&&(e.virtual.cache[p]=m),m}function c(g,p){let{slidesPerView:v,slidesPerGroup:m,centeredSlides:y,loop:w,initialSlide:x}=e.params;if(p&&!w&&x>0)return;let{addSlidesBefore:S,addSlidesAfter:C}=e.params.virtual,{from:R,to:T,slides:E,slidesGrid:k,offset:F}=e.virtual;e.params.cssMode||e.updateActiveIndex();let L=e.activeIndex||0,A;e.rtlTranslate?A="right":A=e.isHorizontal()?"left":"top";let D,B;y?(D=Math.floor(v/2)+m+C,B=Math.floor(v/2)+m+S):(D=v+(m-1)+C,B=(w?v:m)+S);let G=L-B,I=L+D;w||(G=Math.max(G,0),I=Math.min(I,E.length-1));let $=(e.slidesGrid[G]||0)-(e.slidesGrid[0]||0);w&&L>=B?(G-=B,y||($+=e.slidesGrid[0])):w&&L<B&&(G=-B,y&&($+=e.slidesGrid[0])),Object.assign(e.virtual,{from:G,to:I,offset:$,slidesGrid:e.slidesGrid,slidesBefore:B,slidesAfter:D});function W(){e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),r("virtualUpdate")}if(R===G&&T===I&&!g){e.slidesGrid!==k&&$!==F&&e.slides.forEach(U=>{U.style[A]=`${$-Math.abs(e.cssOverflowAdjustment())}px`}),e.updateProgress(),r("virtualUpdate");return}if(e.params.virtual.renderExternal){e.params.virtual.renderExternal.call(e,{offset:$,from:G,to:I,slides:function(){let se=[];for(let pe=G;pe<=I;pe+=1)se.push(E[pe]);return se}()}),e.params.virtual.renderExternalUpdate?W():r("virtualUpdate");return}let Q=[],N=[],H=U=>{let se=U;return U<0?se=E.length+U:se>=E.length&&(se=se-E.length),se};if(g)e.slides.filter(U=>U.matches(`.${e.params.slideClass}, swiper-slide`)).forEach(U=>{U.remove()});else for(let U=R;U<=T;U+=1)if(U<G||U>I){let se=H(U);e.slides.filter(pe=>pe.matches(`.${e.params.slideClass}[data-swiper-slide-index="${se}"], swiper-slide[data-swiper-slide-index="${se}"]`)).forEach(pe=>{pe.remove()})}let X=w?-E.length:0,ee=w?E.length*2:E.length;for(let U=X;U<ee;U+=1)if(U>=G&&U<=I){let se=H(U);typeof T=="undefined"||g?N.push(se):(U>T&&N.push(se),U<R&&Q.push(se))}if(N.forEach(U=>{e.slidesEl.append(l(E[U],U))}),w)for(let U=Q.length-1;U>=0;U-=1){let se=Q[U];e.slidesEl.prepend(l(E[se],se))}else Q.sort((U,se)=>se-U),Q.forEach(U=>{e.slidesEl.prepend(l(E[U],U))});de(e.slidesEl,".swiper-slide, swiper-slide").forEach(U=>{U.style[A]=`${$-Math.abs(e.cssOverflowAdjustment())}px`}),W()}function d(g){if(typeof g=="object"&&"length"in g)for(let p=0;p<g.length;p+=1)g[p]&&e.virtual.slides.push(g[p]);else e.virtual.slides.push(g);c(!0)}function u(g){let p=e.activeIndex,v=p+1,m=1;if(Array.isArray(g)){for(let y=0;y<g.length;y+=1)g[y]&&e.virtual.slides.unshift(g[y]);v=p+g.length,m=g.length}else e.virtual.slides.unshift(g);if(e.params.virtual.cache){let y=e.virtual.cache,w={};Object.keys(y).forEach(x=>{let S=y[x],C=S.getAttribute("data-swiper-slide-index");C&&S.setAttribute("data-swiper-slide-index",parseInt(C,10)+m),w[parseInt(x,10)+m]=S}),e.virtual.cache=w}c(!0),e.slideTo(v,0)}function f(g){if(typeof g=="undefined"||g===null)return;let p=e.activeIndex;if(Array.isArray(g))for(let v=g.length-1;v>=0;v-=1)e.params.virtual.cache&&(delete e.virtual.cache[g[v]],Object.keys(e.virtual.cache).forEach(m=>{m>g&&(e.virtual.cache[m-1]=e.virtual.cache[m],e.virtual.cache[m-1].setAttribute("data-swiper-slide-index",m-1),delete e.virtual.cache[m])})),e.virtual.slides.splice(g[v],1),g[v]<p&&(p-=1),p=Math.max(p,0);else e.params.virtual.cache&&(delete e.virtual.cache[g],Object.keys(e.virtual.cache).forEach(v=>{v>g&&(e.virtual.cache[v-1]=e.virtual.cache[v],e.virtual.cache[v-1].setAttribute("data-swiper-slide-index",v-1),delete e.virtual.cache[v])})),e.virtual.slides.splice(g,1),g<p&&(p-=1),p=Math.max(p,0);c(!0),e.slideTo(p,0)}function h(){e.virtual.slides=[],e.params.virtual.cache&&(e.virtual.cache={}),c(!0),e.slideTo(0,0)}i("beforeInit",()=>{if(!e.params.virtual.enabled)return;let g;if(typeof e.passedParams.virtual.slides=="undefined"){let p=[...e.slidesEl.children].filter(v=>v.matches(`.${e.params.slideClass}, swiper-slide`));p&&p.length&&(e.virtual.slides=[...p],g=!0,p.forEach((v,m)=>{v.setAttribute("data-swiper-slide-index",m),e.virtual.cache[m]=v,v.remove()}))}g||(e.virtual.slides=e.params.virtual.slides),e.classNames.push(`${e.params.containerModifierClass}virtual`),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0,c(!1,!0)}),i("setTranslate",()=>{e.params.virtual.enabled&&(e.params.cssMode&&!e._immediateVirtual?(clearTimeout(n),n=setTimeout(()=>{c()},100)):c())}),i("init update resize",()=>{e.params.virtual.enabled&&e.params.cssMode&&qt(e.wrapperEl,"--swiper-virtual-size",`${e.virtualSize}px`)}),Object.assign(e.virtual,{appendSlide:d,prependSlide:u,removeSlide:f,removeAllSlides:h,update:c})}function Zn(s){let{swiper:e,extendParams:t,on:i,emit:r}=s,n=ce(),a=ne();e.keyboard={enabled:!1},t({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}});function o(d){if(!e.enabled)return;let{rtlTranslate:u}=e,f=d;f.originalEvent&&(f=f.originalEvent);let h=f.keyCode||f.charCode,g=e.params.keyboard.pageUpDown,p=g&&h===33,v=g&&h===34,m=h===37,y=h===39,w=h===38,x=h===40;if(!e.allowSlideNext&&(e.isHorizontal()&&y||e.isVertical()&&x||v)||!e.allowSlidePrev&&(e.isHorizontal()&&m||e.isVertical()&&w||p))return!1;if(!(f.shiftKey||f.altKey||f.ctrlKey||f.metaKey)&&!(n.activeElement&&n.activeElement.nodeName&&(n.activeElement.nodeName.toLowerCase()==="input"||n.activeElement.nodeName.toLowerCase()==="textarea"))){if(e.params.keyboard.onlyInViewport&&(p||v||m||y||w||x)){let S=!1;if(tt(e.el,`.${e.params.slideClass}, swiper-slide`).length>0&&tt(e.el,`.${e.params.slideActiveClass}`).length===0)return;let C=e.el,R=C.clientWidth,T=C.clientHeight,E=a.innerWidth,k=a.innerHeight,F=Yt(C);u&&(F.left-=C.scrollLeft);let L=[[F.left,F.top],[F.left+R,F.top],[F.left,F.top+T],[F.left+R,F.top+T]];for(let A=0;A<L.length;A+=1){let D=L[A];if(D[0]>=0&&D[0]<=E&&D[1]>=0&&D[1]<=k){if(D[0]===0&&D[1]===0)continue;S=!0}}if(!S)return}e.isHorizontal()?((p||v||m||y)&&(f.preventDefault?f.preventDefault():f.returnValue=!1),((v||y)&&!u||(p||m)&&u)&&e.slideNext(),((p||m)&&!u||(v||y)&&u)&&e.slidePrev()):((p||v||w||x)&&(f.preventDefault?f.preventDefault():f.returnValue=!1),(v||x)&&e.slideNext(),(p||w)&&e.slidePrev()),r("keyPress",h)}}function l(){e.keyboard.enabled||(n.addEventListener("keydown",o),e.keyboard.enabled=!0)}function c(){e.keyboard.enabled&&(n.removeEventListener("keydown",o),e.keyboard.enabled=!1)}i("init",()=>{e.params.keyboard.enabled&&l()}),i("destroy",()=>{e.keyboard.enabled&&c()}),Object.assign(e.keyboard,{enable:l,disable:c})}function Jn(s){let{swiper:e,extendParams:t,on:i,emit:r}=s,n=ne();t({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null,noMousewheelClass:"swiper-no-mousewheel"}}),e.mousewheel={enabled:!1};let a,o=Ie(),l,c=[];function d(w){let R=0,T=0,E=0,k=0;return"detail"in w&&(T=w.detail),"wheelDelta"in w&&(T=-w.wheelDelta/120),"wheelDeltaY"in w&&(T=-w.wheelDeltaY/120),"wheelDeltaX"in w&&(R=-w.wheelDeltaX/120),"axis"in w&&w.axis===w.HORIZONTAL_AXIS&&(R=T,T=0),E=R*10,k=T*10,"deltaY"in w&&(k=w.deltaY),"deltaX"in w&&(E=w.deltaX),w.shiftKey&&!E&&(E=k,k=0),(E||k)&&w.deltaMode&&(w.deltaMode===1?(E*=40,k*=40):(E*=800,k*=800)),E&&!R&&(R=E<1?-1:1),k&&!T&&(T=k<1?-1:1),{spinX:R,spinY:T,pixelX:E,pixelY:k}}function u(){e.enabled&&(e.mouseEntered=!0)}function f(){e.enabled&&(e.mouseEntered=!1)}function h(w){return e.params.mousewheel.thresholdDelta&&w.delta<e.params.mousewheel.thresholdDelta||e.params.mousewheel.thresholdTime&&Ie()-o<e.params.mousewheel.thresholdTime?!1:w.delta>=6&&Ie()-o<60?!0:(w.direction<0?(!e.isEnd||e.params.loop)&&!e.animating&&(e.slideNext(),r("scroll",w.raw)):(!e.isBeginning||e.params.loop)&&!e.animating&&(e.slidePrev(),r("scroll",w.raw)),o=new n.Date().getTime(),!1)}function g(w){let x=e.params.mousewheel;if(w.direction<0){if(e.isEnd&&!e.params.loop&&x.releaseOnEdges)return!0}else if(e.isBeginning&&!e.params.loop&&x.releaseOnEdges)return!0;return!1}function p(w){let x=w,S=!0;if(!e.enabled||w.target.closest(`.${e.params.mousewheel.noMousewheelClass}`))return;let C=e.params.mousewheel;e.params.cssMode&&x.preventDefault();let R=e.el;e.params.mousewheel.eventsTarget!=="container"&&(R=document.querySelector(e.params.mousewheel.eventsTarget));let T=R&&R.contains(x.target);if(!e.mouseEntered&&!T&&!C.releaseOnEdges)return!0;x.originalEvent&&(x=x.originalEvent);let E=0,k=e.rtlTranslate?-1:1,F=d(x);if(C.forceToAxis)if(e.isHorizontal())if(Math.abs(F.pixelX)>Math.abs(F.pixelY))E=-F.pixelX*k;else return!0;else if(Math.abs(F.pixelY)>Math.abs(F.pixelX))E=-F.pixelY;else return!0;else E=Math.abs(F.pixelX)>Math.abs(F.pixelY)?-F.pixelX*k:-F.pixelY;if(E===0)return!0;C.invert&&(E=-E);let L=e.getTranslate()+E*C.sensitivity;if(L>=e.minTranslate()&&(L=e.minTranslate()),L<=e.maxTranslate()&&(L=e.maxTranslate()),S=e.params.loop?!0:!(L===e.minTranslate()||L===e.maxTranslate()),S&&e.params.nested&&x.stopPropagation(),!e.params.freeMode||!e.params.freeMode.enabled){let A={time:Ie(),delta:Math.abs(E),direction:Math.sign(E),raw:w};c.length>=2&&c.shift();let D=c.length?c[c.length-1]:void 0;if(c.push(A),D?(A.direction!==D.direction||A.delta>D.delta||A.time>D.time+150)&&h(A):h(A),g(A))return!0}else{let A={time:Ie(),delta:Math.abs(E),direction:Math.sign(E)},D=l&&A.time<l.time+500&&A.delta<=l.delta&&A.direction===l.direction;if(!D){l=void 0;let B=e.getTranslate()+E*C.sensitivity,G=e.isBeginning,I=e.isEnd;if(B>=e.minTranslate()&&(B=e.minTranslate()),B<=e.maxTranslate()&&(B=e.maxTranslate()),e.setTransition(0),e.setTranslate(B),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses(),(!G&&e.isBeginning||!I&&e.isEnd)&&e.updateSlidesClasses(),e.params.loop&&e.loopFix({direction:A.direction<0?"next":"prev",byMousewheel:!0}),e.params.freeMode.sticky){clearTimeout(a),a=void 0,c.length>=15&&c.shift();let $=c.length?c[c.length-1]:void 0,W=c[0];if(c.push(A),$&&(A.delta>$.delta||A.direction!==$.direction))c.splice(0);else if(c.length>=15&&A.time-W.time<500&&W.delta-A.delta>=1&&A.delta<=6){let Q=E>0?.8:.2;l=A,c.splice(0),a=et(()=>{e.slideToClosest(e.params.speed,!0,void 0,Q)},0)}a||(a=et(()=>{l=A,c.splice(0),e.slideToClosest(e.params.speed,!0,void 0,.5)},500))}if(D||r("scroll",x),e.params.autoplay&&e.params.autoplayDisableOnInteraction&&e.autoplay.stop(),C.releaseOnEdges&&(B===e.minTranslate()||B===e.maxTranslate()))return!0}}return x.preventDefault?x.preventDefault():x.returnValue=!1,!1}function v(w){let x=e.el;e.params.mousewheel.eventsTarget!=="container"&&(x=document.querySelector(e.params.mousewheel.eventsTarget)),x[w]("mouseenter",u),x[w]("mouseleave",f),x[w]("wheel",p)}function m(){return e.params.cssMode?(e.wrapperEl.removeEventListener("wheel",p),!0):e.mousewheel.enabled?!1:(v("addEventListener"),e.mousewheel.enabled=!0,!0)}function y(){return e.params.cssMode?(e.wrapperEl.addEventListener(event,p),!0):e.mousewheel.enabled?(v("removeEventListener"),e.mousewheel.enabled=!1,!0):!1}i("init",()=>{!e.params.mousewheel.enabled&&e.params.cssMode&&y(),e.params.mousewheel.enabled&&m()}),i("destroy",()=>{e.params.cssMode&&m(),e.mousewheel.enabled&&y()}),Object.assign(e.mousewheel,{enable:m,disable:y})}function li(s,e,t,i){return s.params.createElements&&Object.keys(i).forEach(r=>{if(!t[r]&&t.auto===!0){let n=de(s.el,`.${i[r]}`)[0];n||(n=ye("div",i[r]),n.className=i[r],s.el.append(n)),t[r]=n,e[r]=n}}),t}function ea(s){let{swiper:e,extendParams:t,on:i,emit:r}=s;t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function n(g){let p;return g&&typeof g=="string"&&e.isElement&&(p=e.el.querySelector(g),p)?p:(g&&(typeof g=="string"&&(p=[...document.querySelectorAll(g)]),e.params.uniqueNavElements&&typeof g=="string"&&p&&p.length>1&&e.el.querySelectorAll(g).length===1?p=e.el.querySelector(g):p&&p.length===1&&(p=p[0])),g&&!p?g:p)}function a(g,p){let v=e.params.navigation;g=J(g),g.forEach(m=>{m&&(m.classList[p?"add":"remove"](...v.disabledClass.split(" ")),m.tagName==="BUTTON"&&(m.disabled=p),e.params.watchOverflow&&e.enabled&&m.classList[e.isLocked?"add":"remove"](v.lockClass))})}function o(){let{nextEl:g,prevEl:p}=e.navigation;if(e.params.loop){a(p,!1),a(g,!1);return}a(p,e.isBeginning&&!e.params.rewind),a(g,e.isEnd&&!e.params.rewind)}function l(g){g.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function c(g){g.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function d(){let g=e.params.navigation;if(e.params.navigation=li(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(g.nextEl||g.prevEl))return;let p=n(g.nextEl),v=n(g.prevEl);Object.assign(e.navigation,{nextEl:p,prevEl:v}),p=J(p),v=J(v);let m=(y,w)=>{y&&y.addEventListener("click",w==="next"?c:l),!e.enabled&&y&&y.classList.add(...g.lockClass.split(" "))};p.forEach(y=>m(y,"next")),v.forEach(y=>m(y,"prev"))}function u(){let{nextEl:g,prevEl:p}=e.navigation;g=J(g),p=J(p);let v=(m,y)=>{m.removeEventListener("click",y==="next"?c:l),m.classList.remove(...e.params.navigation.disabledClass.split(" "))};g.forEach(m=>v(m,"next")),p.forEach(m=>v(m,"prev"))}i("init",()=>{e.params.navigation.enabled===!1?h():(d(),o())}),i("toEdge fromEdge lock unlock",()=>{o()}),i("destroy",()=>{u()}),i("enable disable",()=>{let{nextEl:g,prevEl:p}=e.navigation;if(g=J(g),p=J(p),e.enabled){o();return}[...g,...p].filter(v=>!!v).forEach(v=>v.classList.add(e.params.navigation.lockClass))}),i("click",(g,p)=>{let{nextEl:v,prevEl:m}=e.navigation;v=J(v),m=J(m);let y=p.target,w=m.includes(y)||v.includes(y);if(e.isElement&&!w){let x=p.path||p.composedPath&&p.composedPath();x&&(w=x.find(S=>v.includes(S)||m.includes(S)))}if(e.params.navigation.hideOnClick&&!w){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===y||e.pagination.el.contains(y)))return;let x;v.length?x=v[0].classList.contains(e.params.navigation.hiddenClass):m.length&&(x=m[0].classList.contains(e.params.navigation.hiddenClass)),r(x===!0?"navigationShow":"navigationHide"),[...v,...m].filter(S=>!!S).forEach(S=>S.classList.toggle(e.params.navigation.hiddenClass))}});let f=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),d(),o()},h=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),u()};Object.assign(e.navigation,{enable:f,disable:h,update:o,init:d,destroy:u})}function Ue(s){return s===void 0&&(s=""),`.${s.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function ta(s){let{swiper:e,extendParams:t,on:i,emit:r}=s,n="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:m=>m,formatFractionTotal:m=>m,bulletClass:`${n}-bullet`,bulletActiveClass:`${n}-bullet-active`,modifierClass:`${n}-`,currentClass:`${n}-current`,totalClass:`${n}-total`,hiddenClass:`${n}-hidden`,progressbarFillClass:`${n}-progressbar-fill`,progressbarOppositeClass:`${n}-progressbar-opposite`,clickableClass:`${n}-clickable`,lockClass:`${n}-lock`,horizontalClass:`${n}-horizontal`,verticalClass:`${n}-vertical`,paginationDisabledClass:`${n}-disabled`}}),e.pagination={el:null,bullets:[]};let a,o=0;function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function c(m,y){let{bulletActiveClass:w}=e.params.pagination;m&&(m=m[`${y==="prev"?"previous":"next"}ElementSibling`],m&&(m.classList.add(`${w}-${y}`),m=m[`${y==="prev"?"previous":"next"}ElementSibling`],m&&m.classList.add(`${w}-${y}-${y}`)))}function d(m){let y=m.target.closest(Ue(e.params.pagination.bulletClass));if(!y)return;m.preventDefault();let w=At(y)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===w)return;e.slideToLoop(w)}else e.slideTo(w)}function u(){let m=e.rtl,y=e.params.pagination;if(l())return;let w=e.pagination.el;w=J(w);let x,S,C=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,R=e.params.loop?Math.ceil(C/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(S=e.previousRealIndex||0,x=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex!="undefined"?(x=e.snapIndex,S=e.previousSnapIndex):(S=e.previousIndex||0,x=e.activeIndex||0),y.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){let T=e.pagination.bullets,E,k,F;if(y.dynamicBullets&&(a=Ai(T[0],e.isHorizontal()?"width":"height",!0),w.forEach(L=>{L.style[e.isHorizontal()?"width":"height"]=`${a*(y.dynamicMainBullets+4)}px`}),y.dynamicMainBullets>1&&S!==void 0&&(o+=x-(S||0),o>y.dynamicMainBullets-1?o=y.dynamicMainBullets-1:o<0&&(o=0)),E=Math.max(x-o,0),k=E+(Math.min(T.length,y.dynamicMainBullets)-1),F=(k+E)/2),T.forEach(L=>{let A=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(D=>`${y.bulletActiveClass}${D}`)].map(D=>typeof D=="string"&&D.includes(" ")?D.split(" "):D).flat();L.classList.remove(...A)}),w.length>1)T.forEach(L=>{let A=At(L);A===x?L.classList.add(...y.bulletActiveClass.split(" ")):e.isElement&&L.setAttribute("part","bullet"),y.dynamicBullets&&(A>=E&&A<=k&&L.classList.add(...`${y.bulletActiveClass}-main`.split(" ")),A===E&&c(L,"prev"),A===k&&c(L,"next"))});else{let L=T[x];if(L&&L.classList.add(...y.bulletActiveClass.split(" ")),e.isElement&&T.forEach((A,D)=>{A.setAttribute("part",D===x?"bullet-active":"bullet")}),y.dynamicBullets){let A=T[E],D=T[k];for(let B=E;B<=k;B+=1)T[B]&&T[B].classList.add(...`${y.bulletActiveClass}-main`.split(" "));c(A,"prev"),c(D,"next")}}if(y.dynamicBullets){let L=Math.min(T.length,y.dynamicMainBullets+4),A=(a*L-a)/2-F*a,D=m?"right":"left";T.forEach(B=>{B.style[e.isHorizontal()?D:"top"]=`${A}px`})}}w.forEach((T,E)=>{if(y.type==="fraction"&&(T.querySelectorAll(Ue(y.currentClass)).forEach(k=>{k.textContent=y.formatFractionCurrent(x+1)}),T.querySelectorAll(Ue(y.totalClass)).forEach(k=>{k.textContent=y.formatFractionTotal(R)})),y.type==="progressbar"){let k;y.progressbarOpposite?k=e.isHorizontal()?"vertical":"horizontal":k=e.isHorizontal()?"horizontal":"vertical";let F=(x+1)/R,L=1,A=1;k==="horizontal"?L=F:A=F,T.querySelectorAll(Ue(y.progressbarFillClass)).forEach(D=>{D.style.transform=`translate3d(0,0,0) scaleX(${L}) scaleY(${A})`,D.style.transitionDuration=`${e.params.speed}ms`})}y.type==="custom"&&y.renderCustom?(T.innerHTML=y.renderCustom(e,x+1,R),E===0&&r("paginationRender",T)):(E===0&&r("paginationRender",T),r("paginationUpdate",T)),e.params.watchOverflow&&e.enabled&&T.classList[e.isLocked?"add":"remove"](y.lockClass)})}function f(){let m=e.params.pagination;if(l())return;let y=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length,w=e.pagination.el;w=J(w);let x="";if(m.type==="bullets"){let S=e.params.loop?Math.ceil(y/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&S>y&&(S=y);for(let C=0;C<S;C+=1)m.renderBullet?x+=m.renderBullet.call(e,C,m.bulletClass):x+=`<${m.bulletElement} ${e.isElement?'part="bullet"':""} class="${m.bulletClass}"></${m.bulletElement}>`}m.type==="fraction"&&(m.renderFraction?x=m.renderFraction.call(e,m.currentClass,m.totalClass):x=`<span class="${m.currentClass}"></span> / <span class="${m.totalClass}"></span>`),m.type==="progressbar"&&(m.renderProgressbar?x=m.renderProgressbar.call(e,m.progressbarFillClass):x=`<span class="${m.progressbarFillClass}"></span>`),e.pagination.bullets=[],w.forEach(S=>{m.type!=="custom"&&(S.innerHTML=x||""),m.type==="bullets"&&e.pagination.bullets.push(...S.querySelectorAll(Ue(m.bulletClass)))}),m.type!=="custom"&&r("paginationRender",w[0])}function h(){e.params.pagination=li(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});let m=e.params.pagination;if(!m.el)return;let y;typeof m.el=="string"&&e.isElement&&(y=e.el.querySelector(m.el)),!y&&typeof m.el=="string"&&(y=[...document.querySelectorAll(m.el)]),y||(y=m.el),!(!y||y.length===0)&&(e.params.uniqueNavElements&&typeof m.el=="string"&&Array.isArray(y)&&y.length>1&&(y=[...e.el.querySelectorAll(m.el)],y.length>1&&(y=y.filter(w=>tt(w,".swiper")[0]===e.el)[0])),Array.isArray(y)&&y.length===1&&(y=y[0]),Object.assign(e.pagination,{el:y}),y=J(y),y.forEach(w=>{m.type==="bullets"&&m.clickable&&w.classList.add(...(m.clickableClass||"").split(" ")),w.classList.add(m.modifierClass+m.type),w.classList.add(e.isHorizontal()?m.horizontalClass:m.verticalClass),m.type==="bullets"&&m.dynamicBullets&&(w.classList.add(`${m.modifierClass}${m.type}-dynamic`),o=0,m.dynamicMainBullets<1&&(m.dynamicMainBullets=1)),m.type==="progressbar"&&m.progressbarOpposite&&w.classList.add(m.progressbarOppositeClass),m.clickable&&w.addEventListener("click",d),e.enabled||w.classList.add(m.lockClass)}))}function g(){let m=e.params.pagination;if(l())return;let y=e.pagination.el;y&&(y=J(y),y.forEach(w=>{w.classList.remove(m.hiddenClass),w.classList.remove(m.modifierClass+m.type),w.classList.remove(e.isHorizontal()?m.horizontalClass:m.verticalClass),m.clickable&&(w.classList.remove(...(m.clickableClass||"").split(" ")),w.removeEventListener("click",d))})),e.pagination.bullets&&e.pagination.bullets.forEach(w=>w.classList.remove(...m.bulletActiveClass.split(" ")))}i("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;let m=e.params.pagination,{el:y}=e.pagination;y=J(y),y.forEach(w=>{w.classList.remove(m.horizontalClass,m.verticalClass),w.classList.add(e.isHorizontal()?m.horizontalClass:m.verticalClass)})}),i("init",()=>{e.params.pagination.enabled===!1?v():(h(),f(),u())}),i("activeIndexChange",()=>{typeof e.snapIndex=="undefined"&&u()}),i("snapIndexChange",()=>{u()}),i("snapGridLengthChange",()=>{f(),u()}),i("destroy",()=>{g()}),i("enable disable",()=>{let{el:m}=e.pagination;m&&(m=J(m),m.forEach(y=>y.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),i("lock unlock",()=>{u()}),i("click",(m,y)=>{let w=y.target,x=J(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&x&&x.length>0&&!w.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&w===e.navigation.nextEl||e.navigation.prevEl&&w===e.navigation.prevEl))return;let S=x[0].classList.contains(e.params.pagination.hiddenClass);r(S===!0?"paginationShow":"paginationHide"),x.forEach(C=>C.classList.toggle(e.params.pagination.hiddenClass))}});let p=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:m}=e.pagination;m&&(m=J(m),m.forEach(y=>y.classList.remove(e.params.pagination.paginationDisabledClass))),h(),f(),u()},v=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:m}=e.pagination;m&&(m=J(m),m.forEach(y=>y.classList.add(e.params.pagination.paginationDisabledClass))),g()};Object.assign(e.pagination,{enable:p,disable:v,render:f,update:u,init:h,destroy:g})}function ia(s){let{swiper:e,extendParams:t,on:i,emit:r}=s,n=ce(),a=!1,o=null,l=null,c,d,u,f;t({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),e.scrollbar={el:null,dragEl:null};function h(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;let{scrollbar:L,rtlTranslate:A}=e,{dragEl:D,el:B}=L,G=e.params.scrollbar,I=e.params.loop?e.progressLoop:e.progress,$=d,W=(u-d)*I;A?(W=-W,W>0?($=d-W,W=0):-W+d>u&&($=u+W)):W<0?($=d+W,W=0):W+d>u&&($=u-W),e.isHorizontal()?(D.style.transform=`translate3d(${W}px, 0, 0)`,D.style.width=`${$}px`):(D.style.transform=`translate3d(0px, ${W}px, 0)`,D.style.height=`${$}px`),G.hide&&(clearTimeout(o),B.style.opacity=1,o=setTimeout(()=>{B.style.opacity=0,B.style.transitionDuration="400ms"},1e3))}function g(L){!e.params.scrollbar.el||!e.scrollbar.el||(e.scrollbar.dragEl.style.transitionDuration=`${L}ms`)}function p(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;let{scrollbar:L}=e,{dragEl:A,el:D}=L;A.style.width="",A.style.height="",u=e.isHorizontal()?D.offsetWidth:D.offsetHeight,f=e.size/(e.virtualSize+e.params.slidesOffsetBefore-(e.params.centeredSlides?e.snapGrid[0]:0)),e.params.scrollbar.dragSize==="auto"?d=u*f:d=parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?A.style.width=`${d}px`:A.style.height=`${d}px`,f>=1?D.style.display="none":D.style.display="",e.params.scrollbar.hide&&(D.style.opacity=0),e.params.watchOverflow&&e.enabled&&L.el.classList[e.isLocked?"add":"remove"](e.params.scrollbar.lockClass)}function v(L){return e.isHorizontal()?L.clientX:L.clientY}function m(L){let{scrollbar:A,rtlTranslate:D}=e,{el:B}=A,G;G=(v(L)-Yt(B)[e.isHorizontal()?"left":"top"]-(c!==null?c:d/2))/(u-d),G=Math.max(Math.min(G,1),0),D&&(G=1-G);let I=e.minTranslate()+(e.maxTranslate()-e.minTranslate())*G;e.updateProgress(I),e.setTranslate(I),e.updateActiveIndex(),e.updateSlidesClasses()}function y(L){let A=e.params.scrollbar,{scrollbar:D,wrapperEl:B}=e,{el:G,dragEl:I}=D;a=!0,c=L.target===I?v(L)-L.target.getBoundingClientRect()[e.isHorizontal()?"left":"top"]:null,L.preventDefault(),L.stopPropagation(),B.style.transitionDuration="100ms",I.style.transitionDuration="100ms",m(L),clearTimeout(l),G.style.transitionDuration="0ms",A.hide&&(G.style.opacity=1),e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="none"),r("scrollbarDragStart",L)}function w(L){let{scrollbar:A,wrapperEl:D}=e,{el:B,dragEl:G}=A;a&&(L.preventDefault&&L.cancelable?L.preventDefault():L.returnValue=!1,m(L),D.style.transitionDuration="0ms",B.style.transitionDuration="0ms",G.style.transitionDuration="0ms",r("scrollbarDragMove",L))}function x(L){let A=e.params.scrollbar,{scrollbar:D,wrapperEl:B}=e,{el:G}=D;a&&(a=!1,e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="",B.style.transitionDuration=""),A.hide&&(clearTimeout(l),l=et(()=>{G.style.opacity=0,G.style.transitionDuration="400ms"},1e3)),r("scrollbarDragEnd",L),A.snapOnRelease&&e.slideToClosest())}function S(L){let{scrollbar:A,params:D}=e,B=A.el;if(!B)return;let G=B,I=D.passiveListeners?{passive:!1,capture:!1}:!1,$=D.passiveListeners?{passive:!0,capture:!1}:!1;if(!G)return;let W=L==="on"?"addEventListener":"removeEventListener";G[W]("pointerdown",y,I),n[W]("pointermove",w,I),n[W]("pointerup",x,$)}function C(){!e.params.scrollbar.el||!e.scrollbar.el||S("on")}function R(){!e.params.scrollbar.el||!e.scrollbar.el||S("off")}function T(){let{scrollbar:L,el:A}=e;e.params.scrollbar=li(e,e.originalParams.scrollbar,e.params.scrollbar,{el:"swiper-scrollbar"});let D=e.params.scrollbar;if(!D.el)return;let B;if(typeof D.el=="string"&&e.isElement&&(B=e.el.querySelector(D.el)),!B&&typeof D.el=="string"){if(B=n.querySelectorAll(D.el),!B.length)return}else B||(B=D.el);e.params.uniqueNavElements&&typeof D.el=="string"&&B.length>1&&A.querySelectorAll(D.el).length===1&&(B=A.querySelector(D.el)),B.length>0&&(B=B[0]),B.classList.add(e.isHorizontal()?D.horizontalClass:D.verticalClass);let G;B&&(G=B.querySelector(Ue(e.params.scrollbar.dragClass)),G||(G=ye("div",e.params.scrollbar.dragClass),B.append(G))),Object.assign(L,{el:B,dragEl:G}),D.draggable&&C(),B&&B.classList[e.enabled?"remove":"add"](...yt(e.params.scrollbar.lockClass))}function E(){let L=e.params.scrollbar,A=e.scrollbar.el;A&&A.classList.remove(...yt(e.isHorizontal()?L.horizontalClass:L.verticalClass)),R()}i("changeDirection",()=>{if(!e.scrollbar||!e.scrollbar.el)return;let L=e.params.scrollbar,{el:A}=e.scrollbar;A=J(A),A.forEach(D=>{D.classList.remove(L.horizontalClass,L.verticalClass),D.classList.add(e.isHorizontal()?L.horizontalClass:L.verticalClass)})}),i("init",()=>{e.params.scrollbar.enabled===!1?F():(T(),p(),h())}),i("update resize observerUpdate lock unlock changeDirection",()=>{p()}),i("setTranslate",()=>{h()}),i("setTransition",(L,A)=>{g(A)}),i("enable disable",()=>{let{el:L}=e.scrollbar;L&&L.classList[e.enabled?"remove":"add"](...yt(e.params.scrollbar.lockClass))}),i("destroy",()=>{E()});let k=()=>{e.el.classList.remove(...yt(e.params.scrollbar.scrollbarDisabledClass)),e.scrollbar.el&&e.scrollbar.el.classList.remove(...yt(e.params.scrollbar.scrollbarDisabledClass)),T(),p(),h()},F=()=>{e.el.classList.add(...yt(e.params.scrollbar.scrollbarDisabledClass)),e.scrollbar.el&&e.scrollbar.el.classList.add(...yt(e.params.scrollbar.scrollbarDisabledClass)),E()};Object.assign(e.scrollbar,{enable:k,disable:F,updateSize:p,setTranslate:h,init:T,destroy:E})}function ra(s){let{swiper:e,extendParams:t,on:i}=s;t({parallax:{enabled:!1}});let r="[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",n=(l,c)=>{let{rtl:d}=e,u=d?-1:1,f=l.getAttribute("data-swiper-parallax")||"0",h=l.getAttribute("data-swiper-parallax-x"),g=l.getAttribute("data-swiper-parallax-y"),p=l.getAttribute("data-swiper-parallax-scale"),v=l.getAttribute("data-swiper-parallax-opacity"),m=l.getAttribute("data-swiper-parallax-rotate");if(h||g?(h=h||"0",g=g||"0"):e.isHorizontal()?(h=f,g="0"):(g=f,h="0"),h.indexOf("%")>=0?h=`${parseInt(h,10)*c*u}%`:h=`${h*c*u}px`,g.indexOf("%")>=0?g=`${parseInt(g,10)*c}%`:g=`${g*c}px`,typeof v!="undefined"&&v!==null){let w=v-(v-1)*(1-Math.abs(c));l.style.opacity=w}let y=`translate3d(${h}, ${g}, 0px)`;if(typeof p!="undefined"&&p!==null){let w=p-(p-1)*(1-Math.abs(c));y+=` scale(${w})`}if(m&&typeof m!="undefined"&&m!==null){let w=m*c*-1;y+=` rotate(${w}deg)`}l.style.transform=y},a=()=>{let{el:l,slides:c,progress:d,snapGrid:u,isElement:f}=e,h=de(l,r);e.isElement&&h.push(...de(e.hostEl,r)),h.forEach(g=>{n(g,d)}),c.forEach((g,p)=>{let v=g.progress;e.params.slidesPerGroup>1&&e.params.slidesPerView!=="auto"&&(v+=Math.ceil(p/2)-d*(u.length-1)),v=Math.min(Math.max(v,-1),1),g.querySelectorAll(`${r}, [data-swiper-parallax-rotate]`).forEach(m=>{n(m,v)})})},o=function(l){l===void 0&&(l=e.params.speed);let{el:c,hostEl:d}=e,u=[...c.querySelectorAll(r)];e.isElement&&u.push(...d.querySelectorAll(r)),u.forEach(f=>{let h=parseInt(f.getAttribute("data-swiper-parallax-duration"),10)||l;l===0&&(h=0),f.style.transitionDuration=`${h}ms`})};i("beforeInit",()=>{e.params.parallax.enabled&&(e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)}),i("init",()=>{e.params.parallax.enabled&&a()}),i("setTranslate",()=>{e.params.parallax.enabled&&a()}),i("setTransition",(l,c)=>{e.params.parallax.enabled&&o(c)})}function sa(s){let{swiper:e,extendParams:t,on:i,emit:r}=s,n=ne();t({zoom:{enabled:!1,limitToOriginalSize:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),e.zoom={enabled:!1};let a=1,o=!1,l,c,d=[],u={originX:0,originY:0,slideEl:void 0,slideWidth:void 0,slideHeight:void 0,imageEl:void 0,imageWrapEl:void 0,maxRatio:3},f={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},h={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0},g=1;Object.defineProperty(e.zoom,"scale",{get(){return g},set(N){if(g!==N){let H=u.imageEl,X=u.slideEl;r("zoomChange",N,H,X)}g=N}});function p(){if(d.length<2)return 1;let N=d[0].pageX,H=d[0].pageY,X=d[1].pageX,ee=d[1].pageY;return Math.sqrt((X-N)**2+(ee-H)**2)}function v(){let N=e.params.zoom,H=u.imageWrapEl.getAttribute("data-swiper-zoom")||N.maxRatio;if(N.limitToOriginalSize&&u.imageEl&&u.imageEl.naturalWidth){let X=u.imageEl.naturalWidth/u.imageEl.offsetWidth;return Math.min(X,H)}return H}function m(){if(d.length<2)return{x:null,y:null};let N=u.imageEl.getBoundingClientRect();return[(d[0].pageX+(d[1].pageX-d[0].pageX)/2-N.x-n.scrollX)/a,(d[0].pageY+(d[1].pageY-d[0].pageY)/2-N.y-n.scrollY)/a]}function y(){return e.isElement?"swiper-slide":`.${e.params.slideClass}`}function w(N){let H=y();return!!(N.target.matches(H)||e.slides.filter(X=>X.contains(N.target)).length>0)}function x(N){let H=`.${e.params.zoom.containerClass}`;return!!(N.target.matches(H)||[...e.hostEl.querySelectorAll(H)].filter(X=>X.contains(N.target)).length>0)}function S(N){if(N.pointerType==="mouse"&&d.splice(0,d.length),!w(N))return;let H=e.params.zoom;if(l=!1,c=!1,d.push(N),!(d.length<2)){if(l=!0,u.scaleStart=p(),!u.slideEl){u.slideEl=N.target.closest(`.${e.params.slideClass}, swiper-slide`),u.slideEl||(u.slideEl=e.slides[e.activeIndex]);let X=u.slideEl.querySelector(`.${H.containerClass}`);if(X&&(X=X.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),u.imageEl=X,X?u.imageWrapEl=tt(u.imageEl,`.${H.containerClass}`)[0]:u.imageWrapEl=void 0,!u.imageWrapEl){u.imageEl=void 0;return}u.maxRatio=v()}if(u.imageEl){let[X,ee]=m();u.originX=X,u.originY=ee,u.imageEl.style.transitionDuration="0ms"}o=!0}}function C(N){if(!w(N))return;let H=e.params.zoom,X=e.zoom,ee=d.findIndex(U=>U.pointerId===N.pointerId);ee>=0&&(d[ee]=N),!(d.length<2)&&(c=!0,u.scaleMove=p(),u.imageEl&&(X.scale=u.scaleMove/u.scaleStart*a,X.scale>u.maxRatio&&(X.scale=u.maxRatio-1+(X.scale-u.maxRatio+1)**.5),X.scale<H.minRatio&&(X.scale=H.minRatio+1-(H.minRatio-X.scale+1)**.5),u.imageEl.style.transform=`translate3d(0,0,0) scale(${X.scale})`))}function R(N){if(!w(N)||N.pointerType==="mouse"&&N.type==="pointerout")return;let H=e.params.zoom,X=e.zoom,ee=d.findIndex(U=>U.pointerId===N.pointerId);ee>=0&&d.splice(ee,1),!(!l||!c)&&(l=!1,c=!1,u.imageEl&&(X.scale=Math.max(Math.min(X.scale,u.maxRatio),H.minRatio),u.imageEl.style.transitionDuration=`${e.params.speed}ms`,u.imageEl.style.transform=`translate3d(0,0,0) scale(${X.scale})`,a=X.scale,o=!1,X.scale>1&&u.slideEl?u.slideEl.classList.add(`${H.zoomedSlideClass}`):X.scale<=1&&u.slideEl&&u.slideEl.classList.remove(`${H.zoomedSlideClass}`),X.scale===1&&(u.originX=0,u.originY=0,u.slideEl=void 0)))}let T;function E(){e.touchEventsData.preventTouchMoveFromPointerMove=!1}function k(){clearTimeout(T),e.touchEventsData.preventTouchMoveFromPointerMove=!0,T=setTimeout(()=>{E()})}function F(N){let H=e.device;if(!u.imageEl||f.isTouched)return;H.android&&N.cancelable&&N.preventDefault(),f.isTouched=!0;let X=d.length>0?d[0]:N;f.touchesStart.x=X.pageX,f.touchesStart.y=X.pageY}function L(N){if(!w(N)||!x(N))return;let H=e.zoom;if(!u.imageEl||!f.isTouched||!u.slideEl)return;f.isMoved||(f.width=u.imageEl.offsetWidth||u.imageEl.clientWidth,f.height=u.imageEl.offsetHeight||u.imageEl.clientHeight,f.startX=Pi(u.imageWrapEl,"x")||0,f.startY=Pi(u.imageWrapEl,"y")||0,u.slideWidth=u.slideEl.offsetWidth,u.slideHeight=u.slideEl.offsetHeight,u.imageWrapEl.style.transitionDuration="0ms");let X=f.width*H.scale,ee=f.height*H.scale;if(f.minX=Math.min(u.slideWidth/2-X/2,0),f.maxX=-f.minX,f.minY=Math.min(u.slideHeight/2-ee/2,0),f.maxY=-f.minY,f.touchesCurrent.x=d.length>0?d[0].pageX:N.pageX,f.touchesCurrent.y=d.length>0?d[0].pageY:N.pageY,Math.max(Math.abs(f.touchesCurrent.x-f.touchesStart.x),Math.abs(f.touchesCurrent.y-f.touchesStart.y))>5&&(e.allowClick=!1),!f.isMoved&&!o){if(e.isHorizontal()&&(Math.floor(f.minX)===Math.floor(f.startX)&&f.touchesCurrent.x<f.touchesStart.x||Math.floor(f.maxX)===Math.floor(f.startX)&&f.touchesCurrent.x>f.touchesStart.x)){f.isTouched=!1,E();return}if(!e.isHorizontal()&&(Math.floor(f.minY)===Math.floor(f.startY)&&f.touchesCurrent.y<f.touchesStart.y||Math.floor(f.maxY)===Math.floor(f.startY)&&f.touchesCurrent.y>f.touchesStart.y)){f.isTouched=!1,E();return}}N.cancelable&&N.preventDefault(),N.stopPropagation(),k(),f.isMoved=!0;let se=(H.scale-a)/(u.maxRatio-e.params.zoom.minRatio),{originX:pe,originY:Ae}=u;f.currentX=f.touchesCurrent.x-f.touchesStart.x+f.startX+se*(f.width-pe*2),f.currentY=f.touchesCurrent.y-f.touchesStart.y+f.startY+se*(f.height-Ae*2),f.currentX<f.minX&&(f.currentX=f.minX+1-(f.minX-f.currentX+1)**.8),f.currentX>f.maxX&&(f.currentX=f.maxX-1+(f.currentX-f.maxX+1)**.8),f.currentY<f.minY&&(f.currentY=f.minY+1-(f.minY-f.currentY+1)**.8),f.currentY>f.maxY&&(f.currentY=f.maxY-1+(f.currentY-f.maxY+1)**.8),h.prevPositionX||(h.prevPositionX=f.touchesCurrent.x),h.prevPositionY||(h.prevPositionY=f.touchesCurrent.y),h.prevTime||(h.prevTime=Date.now()),h.x=(f.touchesCurrent.x-h.prevPositionX)/(Date.now()-h.prevTime)/2,h.y=(f.touchesCurrent.y-h.prevPositionY)/(Date.now()-h.prevTime)/2,Math.abs(f.touchesCurrent.x-h.prevPositionX)<2&&(h.x=0),Math.abs(f.touchesCurrent.y-h.prevPositionY)<2&&(h.y=0),h.prevPositionX=f.touchesCurrent.x,h.prevPositionY=f.touchesCurrent.y,h.prevTime=Date.now(),u.imageWrapEl.style.transform=`translate3d(${f.currentX}px, ${f.currentY}px,0)`}function A(){let N=e.zoom;if(!u.imageEl)return;if(!f.isTouched||!f.isMoved){f.isTouched=!1,f.isMoved=!1;return}f.isTouched=!1,f.isMoved=!1;let H=300,X=300,ee=h.x*H,U=f.currentX+ee,se=h.y*X,pe=f.currentY+se;h.x!==0&&(H=Math.abs((U-f.currentX)/h.x)),h.y!==0&&(X=Math.abs((pe-f.currentY)/h.y));let Ae=Math.max(H,X);f.currentX=U,f.currentY=pe;let kt=f.width*N.scale,Qe=f.height*N.scale;f.minX=Math.min(u.slideWidth/2-kt/2,0),f.maxX=-f.minX,f.minY=Math.min(u.slideHeight/2-Qe/2,0),f.maxY=-f.minY,f.currentX=Math.max(Math.min(f.currentX,f.maxX),f.minX),f.currentY=Math.max(Math.min(f.currentY,f.maxY),f.minY),u.imageWrapEl.style.transitionDuration=`${Ae}ms`,u.imageWrapEl.style.transform=`translate3d(${f.currentX}px, ${f.currentY}px,0)`}function D(){let N=e.zoom;u.slideEl&&e.activeIndex!==e.slides.indexOf(u.slideEl)&&(u.imageEl&&(u.imageEl.style.transform="translate3d(0,0,0) scale(1)"),u.imageWrapEl&&(u.imageWrapEl.style.transform="translate3d(0,0,0)"),u.slideEl.classList.remove(`${e.params.zoom.zoomedSlideClass}`),N.scale=1,a=1,u.slideEl=void 0,u.imageEl=void 0,u.imageWrapEl=void 0,u.originX=0,u.originY=0)}function B(N){let H=e.zoom,X=e.params.zoom;if(!u.slideEl){N&&N.target&&(u.slideEl=N.target.closest(`.${e.params.slideClass}, swiper-slide`)),u.slideEl||(e.params.virtual&&e.params.virtual.enabled&&e.virtual?u.slideEl=de(e.slidesEl,`.${e.params.slideActiveClass}`)[0]:u.slideEl=e.slides[e.activeIndex]);let Dt=u.slideEl.querySelector(`.${X.containerClass}`);Dt&&(Dt=Dt.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),u.imageEl=Dt,Dt?u.imageWrapEl=tt(u.imageEl,`.${X.containerClass}`)[0]:u.imageWrapEl=void 0}if(!u.imageEl||!u.imageWrapEl)return;e.params.cssMode&&(e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.touchAction="none"),u.slideEl.classList.add(`${X.zoomedSlideClass}`);let ee,U,se,pe,Ae,kt,Qe,ct,Oi,ki,Di,Ii,Wt,Xt,ci,di,ui,fi;typeof f.touchesStart.x=="undefined"&&N?(ee=N.pageX,U=N.pageY):(ee=f.touchesStart.x,U=f.touchesStart.y);let dt=typeof N=="number"?N:null;a===1&&dt&&(ee=void 0,U=void 0);let zi=v();H.scale=dt||zi,a=dt||zi,N&&!(a===1&&dt)?(ui=u.slideEl.offsetWidth,fi=u.slideEl.offsetHeight,se=Yt(u.slideEl).left+n.scrollX,pe=Yt(u.slideEl).top+n.scrollY,Ae=se+ui/2-ee,kt=pe+fi/2-U,Oi=u.imageEl.offsetWidth||u.imageEl.clientWidth,ki=u.imageEl.offsetHeight||u.imageEl.clientHeight,Di=Oi*H.scale,Ii=ki*H.scale,Wt=Math.min(ui/2-Di/2,0),Xt=Math.min(fi/2-Ii/2,0),ci=-Wt,di=-Xt,Qe=Ae*H.scale,ct=kt*H.scale,Qe<Wt&&(Qe=Wt),Qe>ci&&(Qe=ci),ct<Xt&&(ct=Xt),ct>di&&(ct=di)):(Qe=0,ct=0),dt&&H.scale===1&&(u.originX=0,u.originY=0),u.imageWrapEl.style.transitionDuration="300ms",u.imageWrapEl.style.transform=`translate3d(${Qe}px, ${ct}px,0)`,u.imageEl.style.transitionDuration="300ms",u.imageEl.style.transform=`translate3d(0,0,0) scale(${H.scale})`}function G(){let N=e.zoom,H=e.params.zoom;if(!u.slideEl){e.params.virtual&&e.params.virtual.enabled&&e.virtual?u.slideEl=de(e.slidesEl,`.${e.params.slideActiveClass}`)[0]:u.slideEl=e.slides[e.activeIndex];let X=u.slideEl.querySelector(`.${H.containerClass}`);X&&(X=X.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),u.imageEl=X,X?u.imageWrapEl=tt(u.imageEl,`.${H.containerClass}`)[0]:u.imageWrapEl=void 0}!u.imageEl||!u.imageWrapEl||(e.params.cssMode&&(e.wrapperEl.style.overflow="",e.wrapperEl.style.touchAction=""),N.scale=1,a=1,u.imageWrapEl.style.transitionDuration="300ms",u.imageWrapEl.style.transform="translate3d(0,0,0)",u.imageEl.style.transitionDuration="300ms",u.imageEl.style.transform="translate3d(0,0,0) scale(1)",u.slideEl.classList.remove(`${H.zoomedSlideClass}`),u.slideEl=void 0,u.originX=0,u.originY=0)}function I(N){let H=e.zoom;H.scale&&H.scale!==1?G():B(N)}function $(){let N=e.params.passiveListeners?{passive:!0,capture:!1}:!1,H=e.params.passiveListeners?{passive:!1,capture:!0}:!0;return{passiveListener:N,activeListenerWithCapture:H}}function W(){let N=e.zoom;if(N.enabled)return;N.enabled=!0;let{passiveListener:H,activeListenerWithCapture:X}=$();e.wrapperEl.addEventListener("pointerdown",S,H),e.wrapperEl.addEventListener("pointermove",C,X),["pointerup","pointercancel","pointerout"].forEach(ee=>{e.wrapperEl.addEventListener(ee,R,H)}),e.wrapperEl.addEventListener("pointermove",L,X)}function Q(){let N=e.zoom;if(!N.enabled)return;N.enabled=!1;let{passiveListener:H,activeListenerWithCapture:X}=$();e.wrapperEl.removeEventListener("pointerdown",S,H),e.wrapperEl.removeEventListener("pointermove",C,X),["pointerup","pointercancel","pointerout"].forEach(ee=>{e.wrapperEl.removeEventListener(ee,R,H)}),e.wrapperEl.removeEventListener("pointermove",L,X)}i("init",()=>{e.params.zoom.enabled&&W()}),i("destroy",()=>{Q()}),i("touchStart",(N,H)=>{e.zoom.enabled&&F(H)}),i("touchEnd",(N,H)=>{e.zoom.enabled&&A()}),i("doubleTap",(N,H)=>{!e.animating&&e.params.zoom.enabled&&e.zoom.enabled&&e.params.zoom.toggle&&I(H)}),i("transitionEnd",()=>{e.zoom.enabled&&e.params.zoom.enabled&&D()}),i("slideChange",()=>{e.zoom.enabled&&e.params.zoom.enabled&&e.params.cssMode&&D()}),Object.assign(e.zoom,{enable:W,disable:Q,in:B,out:G,toggle:I})}function na(s){let{swiper:e,extendParams:t,on:i}=s;t({controller:{control:void 0,inverse:!1,by:"slide"}}),e.controller={control:void 0};function r(c,d){let u=function(){let p,v,m;return(y,w)=>{for(v=-1,p=y.length;p-v>1;)m=p+v>>1,y[m]<=w?v=m:p=m;return p}}();this.x=c,this.y=d,this.lastIndex=c.length-1;let f,h;return this.interpolate=function(p){return p?(h=u(this.x,p),f=h-1,(p-this.x[f])*(this.y[h]-this.y[f])/(this.x[h]-this.x[f])+this.y[f]):0},this}function n(c){e.controller.spline=e.params.loop?new r(e.slidesGrid,c.slidesGrid):new r(e.snapGrid,c.snapGrid)}function a(c,d){let u=e.controller.control,f,h,g=e.constructor;function p(v){if(v.destroyed)return;let m=e.rtlTranslate?-e.translate:e.translate;e.params.controller.by==="slide"&&(n(v),h=-e.controller.spline.interpolate(-m)),(!h||e.params.controller.by==="container")&&(f=(v.maxTranslate()-v.minTranslate())/(e.maxTranslate()-e.minTranslate()),(Number.isNaN(f)||!Number.isFinite(f))&&(f=1),h=(m-e.minTranslate())*f+v.minTranslate()),e.params.controller.inverse&&(h=v.maxTranslate()-h),v.updateProgress(h),v.setTranslate(h,e),v.updateActiveIndex(),v.updateSlidesClasses()}if(Array.isArray(u))for(let v=0;v<u.length;v+=1)u[v]!==d&&u[v]instanceof g&&p(u[v]);else u instanceof g&&d!==u&&p(u)}function o(c,d){let u=e.constructor,f=e.controller.control,h;function g(p){p.destroyed||(p.setTransition(c,e),c!==0&&(p.transitionStart(),p.params.autoHeight&&et(()=>{p.updateAutoHeight()}),Lt(p.wrapperEl,()=>{f&&p.transitionEnd()})))}if(Array.isArray(f))for(h=0;h<f.length;h+=1)f[h]!==d&&f[h]instanceof u&&g(f[h]);else f instanceof u&&d!==f&&g(f)}function l(){e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)}i("beforeInit",()=>{if(typeof window!="undefined"&&(typeof e.params.controller.control=="string"||e.params.controller.control instanceof HTMLElement)){let c=document.querySelector(e.params.controller.control);if(c&&c.swiper)e.controller.control=c.swiper;else if(c){let d=u=>{e.controller.control=u.detail[0],e.update(),c.removeEventListener("init",d)};c.addEventListener("init",d)}return}e.controller.control=e.params.controller.control}),i("update",()=>{l()}),i("resize",()=>{l()}),i("observerUpdate",()=>{l()}),i("setTranslate",(c,d,u)=>{!e.controller.control||e.controller.control.destroyed||e.controller.setTranslate(d,u)}),i("setTransition",(c,d,u)=>{!e.controller.control||e.controller.control.destroyed||e.controller.setTransition(d,u)}),Object.assign(e.controller,{setTranslate:a,setTransition:o})}function aa(s){let{swiper:e,extendParams:t,on:i}=s;t({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null}}),e.a11y={clicked:!1};let r=null,n,a,o=new Date().getTime();function l(I){let $=r;$.length!==0&&($.innerHTML="",$.innerHTML=I)}function c(I){I===void 0&&(I=16);let $=()=>Math.round(16*Math.random()).toString(16);return"x".repeat(I).replace(/x/g,$)}function d(I){I=J(I),I.forEach($=>{$.setAttribute("tabIndex","0")})}function u(I){I=J(I),I.forEach($=>{$.setAttribute("tabIndex","-1")})}function f(I,$){I=J(I),I.forEach(W=>{W.setAttribute("role",$)})}function h(I,$){I=J(I),I.forEach(W=>{W.setAttribute("aria-roledescription",$)})}function g(I,$){I=J(I),I.forEach(W=>{W.setAttribute("aria-controls",$)})}function p(I,$){I=J(I),I.forEach(W=>{W.setAttribute("aria-label",$)})}function v(I,$){I=J(I),I.forEach(W=>{W.setAttribute("id",$)})}function m(I,$){I=J(I),I.forEach(W=>{W.setAttribute("aria-live",$)})}function y(I){I=J(I),I.forEach($=>{$.setAttribute("aria-disabled",!0)})}function w(I){I=J(I),I.forEach($=>{$.setAttribute("aria-disabled",!1)})}function x(I){if(I.keyCode!==13&&I.keyCode!==32)return;let $=e.params.a11y,W=I.target;if(!(e.pagination&&e.pagination.el&&(W===e.pagination.el||e.pagination.el.contains(I.target))&&!I.target.matches(Ue(e.params.pagination.bulletClass)))){if(e.navigation&&e.navigation.prevEl&&e.navigation.nextEl){let Q=J(e.navigation.prevEl);J(e.navigation.nextEl).includes(W)&&(e.isEnd&&!e.params.loop||e.slideNext(),e.isEnd?l($.lastSlideMessage):l($.nextSlideMessage)),Q.includes(W)&&(e.isBeginning&&!e.params.loop||e.slidePrev(),e.isBeginning?l($.firstSlideMessage):l($.prevSlideMessage))}e.pagination&&W.matches(Ue(e.params.pagination.bulletClass))&&W.click()}}function S(){if(e.params.loop||e.params.rewind||!e.navigation)return;let{nextEl:I,prevEl:$}=e.navigation;$&&(e.isBeginning?(y($),u($)):(w($),d($))),I&&(e.isEnd?(y(I),u(I)):(w(I),d(I)))}function C(){return e.pagination&&e.pagination.bullets&&e.pagination.bullets.length}function R(){return C()&&e.params.pagination.clickable}function T(){let I=e.params.a11y;C()&&e.pagination.bullets.forEach($=>{e.params.pagination.clickable&&(d($),e.params.pagination.renderBullet||(f($,"button"),p($,I.paginationBulletMessage.replace(/\{\{index\}\}/,At($)+1)))),$.matches(Ue(e.params.pagination.bulletActiveClass))?$.setAttribute("aria-current","true"):$.removeAttribute("aria-current")})}let E=(I,$,W)=>{d(I),I.tagName!=="BUTTON"&&(f(I,"button"),I.addEventListener("keydown",x)),p(I,W),g(I,$)},k=I=>{a&&a!==I.target&&!a.contains(I.target)&&(n=!0),e.a11y.clicked=!0},F=()=>{n=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.destroyed||(e.a11y.clicked=!1)})})},L=I=>{o=new Date().getTime()},A=I=>{if(e.a11y.clicked||new Date().getTime()-o<100)return;let $=I.target.closest(`.${e.params.slideClass}, swiper-slide`);if(!$||!e.slides.includes($))return;a=$;let W=e.slides.indexOf($)===e.activeIndex,Q=e.params.watchSlidesProgress&&e.visibleSlides&&e.visibleSlides.includes($);W||Q||I.sourceCapabilities&&I.sourceCapabilities.firesTouchEvents||(e.isHorizontal()?e.el.scrollLeft=0:e.el.scrollTop=0,requestAnimationFrame(()=>{n||(e.params.loop?e.slideToLoop(parseInt($.getAttribute("data-swiper-slide-index")),0):e.slideTo(e.slides.indexOf($),0),n=!1)}))},D=()=>{let I=e.params.a11y;I.itemRoleDescriptionMessage&&h(e.slides,I.itemRoleDescriptionMessage),I.slideRole&&f(e.slides,I.slideRole);let $=e.slides.length;I.slideLabelMessage&&e.slides.forEach((W,Q)=>{let N=e.params.loop?parseInt(W.getAttribute("data-swiper-slide-index"),10):Q,H=I.slideLabelMessage.replace(/\{\{index\}\}/,N+1).replace(/\{\{slidesLength\}\}/,$);p(W,H)})},B=()=>{let I=e.params.a11y;e.el.append(r);let $=e.el;I.containerRoleDescriptionMessage&&h($,I.containerRoleDescriptionMessage),I.containerMessage&&p($,I.containerMessage);let W=e.wrapperEl,Q=I.id||W.getAttribute("id")||`swiper-wrapper-${c(16)}`,N=e.params.autoplay&&e.params.autoplay.enabled?"off":"polite";v(W,Q),m(W,N),D();let{nextEl:H,prevEl:X}=e.navigation?e.navigation:{};H=J(H),X=J(X),H&&H.forEach(U=>E(U,Q,I.nextSlideMessage)),X&&X.forEach(U=>E(U,Q,I.prevSlideMessage)),R()&&J(e.pagination.el).forEach(se=>{se.addEventListener("keydown",x)}),ce().addEventListener("visibilitychange",L),e.el.addEventListener("focus",A,!0),e.el.addEventListener("focus",A,!0),e.el.addEventListener("pointerdown",k,!0),e.el.addEventListener("pointerup",F,!0)};function G(){r&&r.remove();let{nextEl:I,prevEl:$}=e.navigation?e.navigation:{};I=J(I),$=J($),I&&I.forEach(Q=>Q.removeEventListener("keydown",x)),$&&$.forEach(Q=>Q.removeEventListener("keydown",x)),R()&&J(e.pagination.el).forEach(N=>{N.removeEventListener("keydown",x)}),ce().removeEventListener("visibilitychange",L),e.el&&typeof e.el!="string"&&(e.el.removeEventListener("focus",A,!0),e.el.removeEventListener("pointerdown",k,!0),e.el.removeEventListener("pointerup",F,!0))}i("beforeInit",()=>{r=ye("span",e.params.a11y.notificationClass),r.setAttribute("aria-live","assertive"),r.setAttribute("aria-atomic","true")}),i("afterInit",()=>{e.params.a11y.enabled&&B()}),i("slidesLengthChange snapGridLengthChange slidesGridLengthChange",()=>{e.params.a11y.enabled&&D()}),i("fromEdge toEdge afterInit lock unlock",()=>{e.params.a11y.enabled&&S()}),i("paginationUpdate",()=>{e.params.a11y.enabled&&T()}),i("destroy",()=>{e.params.a11y.enabled&&G()})}function oa(s){let{swiper:e,extendParams:t,on:i}=s;t({history:{enabled:!1,root:"",replaceState:!1,key:"slides",keepQuery:!1}});let r=!1,n={},a=h=>h.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,""),o=h=>{let g=ne(),p;h?p=new URL(h):p=g.location;let v=p.pathname.slice(1).split("/").filter(x=>x!==""),m=v.length,y=v[m-2],w=v[m-1];return{key:y,value:w}},l=(h,g)=>{let p=ne();if(!r||!e.params.history.enabled)return;let v;e.params.url?v=new URL(e.params.url):v=p.location;let m=e.virtual&&e.params.virtual.enabled?e.slidesEl.querySelector(`[data-swiper-slide-index="${g}"]`):e.slides[g],y=a(m.getAttribute("data-history"));if(e.params.history.root.length>0){let x=e.params.history.root;x[x.length-1]==="/"&&(x=x.slice(0,x.length-1)),y=`${x}/${h?`${h}/`:""}${y}`}else v.pathname.includes(h)||(y=`${h?`${h}/`:""}${y}`);e.params.history.keepQuery&&(y+=v.search);let w=p.history.state;w&&w.value===y||(e.params.history.replaceState?p.history.replaceState({value:y},null,y):p.history.pushState({value:y},null,y))},c=(h,g,p)=>{if(g)for(let v=0,m=e.slides.length;v<m;v+=1){let y=e.slides[v];if(a(y.getAttribute("data-history"))===g){let x=e.getSlideIndex(y);e.slideTo(x,h,p)}}else e.slideTo(0,h,p)},d=()=>{n=o(e.params.url),c(e.params.speed,n.value,!1)},u=()=>{let h=ne();if(e.params.history){if(!h.history||!h.history.pushState){e.params.history.enabled=!1,e.params.hashNavigation.enabled=!0;return}if(r=!0,n=o(e.params.url),!n.key&&!n.value){e.params.history.replaceState||h.addEventListener("popstate",d);return}c(0,n.value,e.params.runCallbacksOnInit),e.params.history.replaceState||h.addEventListener("popstate",d)}},f=()=>{let h=ne();e.params.history.replaceState||h.removeEventListener("popstate",d)};i("init",()=>{e.params.history.enabled&&u()}),i("destroy",()=>{e.params.history.enabled&&f()}),i("transitionEnd _freeModeNoMomentumRelease",()=>{r&&l(e.params.history.key,e.activeIndex)}),i("slideChange",()=>{r&&e.params.cssMode&&l(e.params.history.key,e.activeIndex)})}function la(s){let{swiper:e,extendParams:t,emit:i,on:r}=s,n=!1,a=ce(),o=ne();t({hashNavigation:{enabled:!1,replaceState:!1,watchState:!1,getSlideIndex(f,h){if(e.virtual&&e.params.virtual.enabled){let g=e.slides.filter(v=>v.getAttribute("data-hash")===h)[0];return g?parseInt(g.getAttribute("data-swiper-slide-index"),10):0}return e.getSlideIndex(de(e.slidesEl,`.${e.params.slideClass}[data-hash="${h}"], swiper-slide[data-hash="${h}"]`)[0])}}});let l=()=>{i("hashChange");let f=a.location.hash.replace("#",""),h=e.virtual&&e.params.virtual.enabled?e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`):e.slides[e.activeIndex],g=h?h.getAttribute("data-hash"):"";if(f!==g){let p=e.params.hashNavigation.getSlideIndex(e,f);if(typeof p=="undefined"||Number.isNaN(p))return;e.slideTo(p)}},c=()=>{if(!n||!e.params.hashNavigation.enabled)return;let f=e.virtual&&e.params.virtual.enabled?e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`):e.slides[e.activeIndex],h=f?f.getAttribute("data-hash")||f.getAttribute("data-history"):"";e.params.hashNavigation.replaceState&&o.history&&o.history.replaceState?(o.history.replaceState(null,null,`#${h}`||""),i("hashSet")):(a.location.hash=h||"",i("hashSet"))},d=()=>{if(!e.params.hashNavigation.enabled||e.params.history&&e.params.history.enabled)return;n=!0;let f=a.location.hash.replace("#","");if(f){let g=e.params.hashNavigation.getSlideIndex(e,f);e.slideTo(g||0,0,e.params.runCallbacksOnInit,!0)}e.params.hashNavigation.watchState&&o.addEventListener("hashchange",l)},u=()=>{e.params.hashNavigation.watchState&&o.removeEventListener("hashchange",l)};r("init",()=>{e.params.hashNavigation.enabled&&d()}),r("destroy",()=>{e.params.hashNavigation.enabled&&u()}),r("transitionEnd _freeModeNoMomentumRelease",()=>{n&&c()}),r("slideChange",()=>{n&&e.params.cssMode&&c()})}function ca(s){let{swiper:e,extendParams:t,on:i,emit:r,params:n}=s;e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let a,o,l=n&&n.autoplay?n.autoplay.delay:3e3,c=n&&n.autoplay?n.autoplay.delay:3e3,d,u=new Date().getTime(),f,h,g,p,v,m,y;function w($){!e||e.destroyed||!e.wrapperEl||$.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",w),!(y||$.detail&&$.detail.bySwiperTouchMove)&&k())}let x=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?f=!0:f&&(c=d,f=!1);let $=e.autoplay.paused?d:u+c-new Date().getTime();e.autoplay.timeLeft=$,r("autoplayTimeLeft",$,$/l),o=requestAnimationFrame(()=>{x()})},S=()=>{let $;return e.virtual&&e.params.virtual.enabled?$=e.slides.filter(Q=>Q.classList.contains("swiper-slide-active"))[0]:$=e.slides[e.activeIndex],$?parseInt($.getAttribute("data-swiper-autoplay"),10):void 0},C=$=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(o),x();let W=typeof $=="undefined"?e.params.autoplay.delay:$;l=e.params.autoplay.delay,c=e.params.autoplay.delay;let Q=S();!Number.isNaN(Q)&&Q>0&&typeof $=="undefined"&&(W=Q,l=Q,c=Q),d=W;let N=e.params.speed,H=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(N,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,N,!0,!0),r("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(N,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,N,!0,!0),r("autoplay")),e.params.cssMode&&(u=new Date().getTime(),requestAnimationFrame(()=>{C()})))};return W>0?(clearTimeout(a),a=setTimeout(()=>{H()},W)):requestAnimationFrame(()=>{H()}),W},R=()=>{u=new Date().getTime(),e.autoplay.running=!0,C(),r("autoplayStart")},T=()=>{e.autoplay.running=!1,clearTimeout(a),cancelAnimationFrame(o),r("autoplayStop")},E=($,W)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(a),$||(m=!0);let Q=()=>{r("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",w):k()};if(e.autoplay.paused=!0,W){v&&(d=e.params.autoplay.delay),v=!1,Q();return}d=(d||e.params.autoplay.delay)-(new Date().getTime()-u),!(e.isEnd&&d<0&&!e.params.loop)&&(d<0&&(d=0),Q())},k=()=>{e.isEnd&&d<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(u=new Date().getTime(),m?(m=!1,C(d)):C(),e.autoplay.paused=!1,r("autoplayResume"))},F=()=>{if(e.destroyed||!e.autoplay.running)return;let $=ce();$.visibilityState==="hidden"&&(m=!0,E(!0)),$.visibilityState==="visible"&&k()},L=$=>{$.pointerType==="mouse"&&(m=!0,y=!0,!(e.animating||e.autoplay.paused)&&E(!0))},A=$=>{$.pointerType==="mouse"&&(y=!1,e.autoplay.paused&&k())},D=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",L),e.el.addEventListener("pointerleave",A))},B=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",L),e.el.removeEventListener("pointerleave",A))},G=()=>{ce().addEventListener("visibilitychange",F)},I=()=>{ce().removeEventListener("visibilitychange",F)};i("init",()=>{e.params.autoplay.enabled&&(D(),G(),R())}),i("destroy",()=>{B(),I(),e.autoplay.running&&T()}),i("_freeModeStaticRelease",()=>{(g||m)&&k()}),i("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?T():E(!0,!0)}),i("beforeTransitionStart",($,W,Q)=>{e.destroyed||!e.autoplay.running||(Q||!e.params.autoplay.disableOnInteraction?E(!0,!0):T())}),i("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){T();return}h=!0,g=!1,m=!1,p=setTimeout(()=>{m=!0,g=!0,E(!0)},200)}}),i("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!h)){if(clearTimeout(p),clearTimeout(a),e.params.autoplay.disableOnInteraction){g=!1,h=!1;return}g&&e.params.cssMode&&k(),g=!1,h=!1}}),i("slideChange",()=>{e.destroyed||!e.autoplay.running||(v=!0)}),Object.assign(e.autoplay,{start:R,stop:T,pause:E,resume:k})}function da(s){let{swiper:e,extendParams:t,on:i}=s;t({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let r=!1,n=!1;e.thumbs={swiper:null};function a(){let c=e.thumbs.swiper;if(!c||c.destroyed)return;let d=c.clickedIndex,u=c.clickedSlide;if(u&&u.classList.contains(e.params.thumbs.slideThumbActiveClass)||typeof d=="undefined"||d===null)return;let f;c.params.loop?f=parseInt(c.clickedSlide.getAttribute("data-swiper-slide-index"),10):f=d,e.params.loop?e.slideToLoop(f):e.slideTo(f)}function o(){let{thumbs:c}=e.params;if(r)return!1;r=!0;let d=e.constructor;if(c.swiper instanceof d)e.thumbs.swiper=c.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper.update();else if(oi(c.swiper)){let u=Object.assign({},c.swiper);Object.assign(u,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new d(u),n=!0}return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",a),!0}function l(c){let d=e.thumbs.swiper;if(!d||d.destroyed)return;let u=d.params.slidesPerView==="auto"?d.slidesPerViewDynamic():d.params.slidesPerView,f=1,h=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(f=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(f=1),f=Math.floor(f),d.slides.forEach(v=>v.classList.remove(h)),d.params.loop||d.params.virtual&&d.params.virtual.enabled)for(let v=0;v<f;v+=1)de(d.slidesEl,`[data-swiper-slide-index="${e.realIndex+v}"]`).forEach(m=>{m.classList.add(h)});else for(let v=0;v<f;v+=1)d.slides[e.realIndex+v]&&d.slides[e.realIndex+v].classList.add(h);let g=e.params.thumbs.autoScrollOffset,p=g&&!d.params.loop;if(e.realIndex!==d.realIndex||p){let v=d.activeIndex,m,y;if(d.params.loop){let w=d.slides.filter(x=>x.getAttribute("data-swiper-slide-index")===`${e.realIndex}`)[0];m=d.slides.indexOf(w),y=e.activeIndex>e.previousIndex?"next":"prev"}else m=e.realIndex,y=m>e.previousIndex?"next":"prev";p&&(m+=y==="next"?g:-1*g),d.visibleSlidesIndexes&&d.visibleSlidesIndexes.indexOf(m)<0&&(d.params.centeredSlides?m>v?m=m-Math.floor(u/2)+1:m=m+Math.floor(u/2)-1:m>v&&d.params.slidesPerGroup,d.slideTo(m,c?0:void 0))}}i("beforeInit",()=>{let{thumbs:c}=e.params;if(!(!c||!c.swiper))if(typeof c.swiper=="string"||c.swiper instanceof HTMLElement){let d=ce(),u=()=>{let h=typeof c.swiper=="string"?d.querySelector(c.swiper):c.swiper;if(h&&h.swiper)c.swiper=h.swiper,o(),l(!0);else if(h){let g=p=>{c.swiper=p.detail[0],h.removeEventListener("init",g),o(),l(!0),c.swiper.update(),e.update()};h.addEventListener("init",g)}return h},f=()=>{if(e.destroyed)return;u()||requestAnimationFrame(f)};requestAnimationFrame(f)}else o(),l(!0)}),i("slideChange update resize observerUpdate",()=>{l()}),i("setTransition",(c,d)=>{let u=e.thumbs.swiper;!u||u.destroyed||u.setTransition(d)}),i("beforeDestroy",()=>{let c=e.thumbs.swiper;!c||c.destroyed||n&&c.destroy()}),Object.assign(e.thumbs,{init:o,update:l})}function ua(s){let{swiper:e,extendParams:t,emit:i,once:r}=s;t({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function n(){if(e.params.cssMode)return;let l=e.getTranslate();e.setTranslate(l),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function a(){if(e.params.cssMode)return;let{touchEventsData:l,touches:c}=e;l.velocities.length===0&&l.velocities.push({position:c[e.isHorizontal()?"startX":"startY"],time:l.touchStartTime}),l.velocities.push({position:c[e.isHorizontal()?"currentX":"currentY"],time:Ie()})}function o(l){let{currentPos:c}=l;if(e.params.cssMode)return;let{params:d,wrapperEl:u,rtlTranslate:f,snapGrid:h,touchEventsData:g}=e,v=Ie()-g.touchStartTime;if(c<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(c>-e.maxTranslate()){e.slides.length<h.length?e.slideTo(h.length-1):e.slideTo(e.slides.length-1);return}if(d.freeMode.momentum){if(g.velocities.length>1){let T=g.velocities.pop(),E=g.velocities.pop(),k=T.position-E.position,F=T.time-E.time;e.velocity=k/F,e.velocity/=2,Math.abs(e.velocity)<d.freeMode.minimumVelocity&&(e.velocity=0),(F>150||Ie()-T.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=d.freeMode.momentumVelocityRatio,g.velocities.length=0;let m=1e3*d.freeMode.momentumRatio,y=e.velocity*m,w=e.translate+y;f&&(w=-w);let x=!1,S,C=Math.abs(e.velocity)*20*d.freeMode.momentumBounceRatio,R;if(w<e.maxTranslate())d.freeMode.momentumBounce?(w+e.maxTranslate()<-C&&(w=e.maxTranslate()-C),S=e.maxTranslate(),x=!0,g.allowMomentumBounce=!0):w=e.maxTranslate(),d.loop&&d.centeredSlides&&(R=!0);else if(w>e.minTranslate())d.freeMode.momentumBounce?(w-e.minTranslate()>C&&(w=e.minTranslate()+C),S=e.minTranslate(),x=!0,g.allowMomentumBounce=!0):w=e.minTranslate(),d.loop&&d.centeredSlides&&(R=!0);else if(d.freeMode.sticky){let T;for(let E=0;E<h.length;E+=1)if(h[E]>-w){T=E;break}Math.abs(h[T]-w)<Math.abs(h[T-1]-w)||e.swipeDirection==="next"?w=h[T]:w=h[T-1],w=-w}if(R&&r("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(f?m=Math.abs((-w-e.translate)/e.velocity):m=Math.abs((w-e.translate)/e.velocity),d.freeMode.sticky){let T=Math.abs((f?-w:w)-e.translate),E=e.slidesSizesGrid[e.activeIndex];T<E?m=d.speed:T<2*E?m=d.speed*1.5:m=d.speed*2.5}}else if(d.freeMode.sticky){e.slideToClosest();return}d.freeMode.momentumBounce&&x?(e.updateProgress(S),e.setTransition(m),e.setTranslate(w),e.transitionStart(!0,e.swipeDirection),e.animating=!0,Lt(u,()=>{!e||e.destroyed||!g.allowMomentumBounce||(i("momentumBounce"),e.setTransition(d.speed),setTimeout(()=>{e.setTranslate(S),Lt(u,()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(i("_freeModeNoMomentumRelease"),e.updateProgress(w),e.setTransition(m),e.setTranslate(w),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,Lt(u,()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(w),e.updateActiveIndex(),e.updateSlidesClasses()}else if(d.freeMode.sticky){e.slideToClosest();return}else d.freeMode&&i("_freeModeNoMomentumRelease");(!d.freeMode.momentum||v>=d.longSwipesMs)&&(i("_freeModeStaticRelease"),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:n,onTouchMove:a,onTouchEnd:o}})}function fa(s){let{swiper:e,extendParams:t,on:i}=s;t({grid:{rows:1,fill:"column"}});let r,n,a,o,l=()=>{let p=e.params.spaceBetween;return typeof p=="string"&&p.indexOf("%")>=0?p=parseFloat(p.replace("%",""))/100*e.size:typeof p=="string"&&(p=parseFloat(p)),p},c=p=>{let{slidesPerView:v}=e.params,{rows:m,fill:y}=e.params.grid,w=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:p.length;a=Math.floor(w/m),Math.floor(w/m)===w/m?r=w:r=Math.ceil(w/m)*m,v!=="auto"&&y==="row"&&(r=Math.max(r,v*m)),n=r/m},d=()=>{e.slides&&e.slides.forEach(p=>{p.swiperSlideGridSet&&(p.style.height="",p.style[e.getDirectionLabel("margin-top")]="")})},u=(p,v,m)=>{let{slidesPerGroup:y}=e.params,w=l(),{rows:x,fill:S}=e.params.grid,C=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:m.length,R,T,E;if(S==="row"&&y>1){let k=Math.floor(p/(y*x)),F=p-x*y*k,L=k===0?y:Math.min(Math.ceil((C-k*x*y)/x),y);E=Math.floor(F/L),T=F-E*L+k*y,R=T+E*r/x,v.style.order=R}else S==="column"?(T=Math.floor(p/x),E=p-T*x,(T>a||T===a&&E===x-1)&&(E+=1,E>=x&&(E=0,T+=1))):(E=Math.floor(p/n),T=p-E*n);v.row=E,v.column=T,v.style.height=`calc((100% - ${(x-1)*w}px) / ${x})`,v.style[e.getDirectionLabel("margin-top")]=E!==0?w&&`${w}px`:"",v.swiperSlideGridSet=!0},f=(p,v)=>{let{centeredSlides:m,roundLengths:y}=e.params,w=l(),{rows:x}=e.params.grid;if(e.virtualSize=(p+w)*r,e.virtualSize=Math.ceil(e.virtualSize/x)-w,e.params.cssMode||(e.wrapperEl.style[e.getDirectionLabel("width")]=`${e.virtualSize+w}px`),m){let S=[];for(let C=0;C<v.length;C+=1){let R=v[C];y&&(R=Math.floor(R)),v[C]<e.virtualSize+v[0]&&S.push(R)}v.splice(0,v.length),v.push(...S)}},h=()=>{o=e.params.grid&&e.params.grid.rows>1},g=()=>{let{params:p,el:v}=e,m=p.grid&&p.grid.rows>1;o&&!m?(v.classList.remove(`${p.containerModifierClass}grid`,`${p.containerModifierClass}grid-column`),a=1,e.emitContainerClasses()):!o&&m&&(v.classList.add(`${p.containerModifierClass}grid`),p.grid.fill==="column"&&v.classList.add(`${p.containerModifierClass}grid-column`),e.emitContainerClasses()),o=m};i("init",h),i("update",g),e.grid={initSlides:c,unsetSlides:d,updateSlide:u,updateWrapperSize:f}}function Mc(s){let e=this,{params:t,slidesEl:i}=e;t.loop&&e.loopDestroy();let r=n=>{if(typeof n=="string"){let a=document.createElement("div");a.innerHTML=n,i.append(a.children[0]),a.innerHTML=""}else i.append(n)};if(typeof s=="object"&&"length"in s)for(let n=0;n<s.length;n+=1)s[n]&&r(s[n]);else r(s);e.recalcSlides(),t.loop&&e.loopCreate(),(!t.observer||e.isElement)&&e.update()}function Pc(s){let e=this,{params:t,activeIndex:i,slidesEl:r}=e;t.loop&&e.loopDestroy();let n=i+1,a=o=>{if(typeof o=="string"){let l=document.createElement("div");l.innerHTML=o,r.prepend(l.children[0]),l.innerHTML=""}else r.prepend(o)};if(typeof s=="object"&&"length"in s){for(let o=0;o<s.length;o+=1)s[o]&&a(s[o]);n=i+s.length}else a(s);e.recalcSlides(),t.loop&&e.loopCreate(),(!t.observer||e.isElement)&&e.update(),e.slideTo(n,0,!1)}function Cc(s,e){let t=this,{params:i,activeIndex:r,slidesEl:n}=t,a=r;i.loop&&(a-=t.loopedSlides,t.loopDestroy(),t.recalcSlides());let o=t.slides.length;if(s<=0){t.prependSlide(e);return}if(s>=o){t.appendSlide(e);return}let l=a>s?a+1:a,c=[];for(let d=o-1;d>=s;d-=1){let u=t.slides[d];u.remove(),c.unshift(u)}if(typeof e=="object"&&"length"in e){for(let d=0;d<e.length;d+=1)e[d]&&n.append(e[d]);l=a>s?a+e.length:a}else n.append(e);for(let d=0;d<c.length;d+=1)n.append(c[d]);t.recalcSlides(),i.loop&&t.loopCreate(),(!i.observer||t.isElement)&&t.update(),i.loop?t.slideTo(l+t.loopedSlides,0,!1):t.slideTo(l,0,!1)}function Ac(s){let e=this,{params:t,activeIndex:i}=e,r=i;t.loop&&(r-=e.loopedSlides,e.loopDestroy());let n=r,a;if(typeof s=="object"&&"length"in s){for(let o=0;o<s.length;o+=1)a=s[o],e.slides[a]&&e.slides[a].remove(),a<n&&(n-=1);n=Math.max(n,0)}else a=s,e.slides[a]&&e.slides[a].remove(),a<n&&(n-=1),n=Math.max(n,0);e.recalcSlides(),t.loop&&e.loopCreate(),(!t.observer||e.isElement)&&e.update(),t.loop?e.slideTo(n+e.loopedSlides,0,!1):e.slideTo(n,0,!1)}function Lc(){let s=this,e=[];for(let t=0;t<s.slides.length;t+=1)e.push(t);s.removeSlide(e)}function pa(s){let{swiper:e}=s;Object.assign(e,{appendSlide:Mc.bind(e),prependSlide:Pc.bind(e),addSlide:Cc.bind(e),removeSlide:Ac.bind(e),removeAllSlides:Lc.bind(e)})}function Ke(s){let{effect:e,swiper:t,on:i,setTranslate:r,setTransition:n,overwriteParams:a,perspective:o,recreateShadows:l,getEffectParams:c}=s;i("beforeInit",()=>{if(t.params.effect!==e)return;t.classNames.push(`${t.params.containerModifierClass}${e}`),o&&o()&&t.classNames.push(`${t.params.containerModifierClass}3d`);let u=a?a():{};Object.assign(t.params,u),Object.assign(t.originalParams,u)}),i("setTranslate",()=>{t.params.effect===e&&r()}),i("setTransition",(u,f)=>{t.params.effect===e&&n(f)}),i("transitionEnd",()=>{if(t.params.effect===e&&l){if(!c||!c().slideShadows)return;t.slides.forEach(u=>{u.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(f=>f.remove())}),l()}});let d;i("virtualUpdate",()=>{t.params.effect===e&&(t.slides.length||(d=!0),requestAnimationFrame(()=>{d&&t.slides&&t.slides.length&&(r(),d=!1)}))})}function ot(s,e){let t=Be(e);return t!==e&&(t.style.backfaceVisibility="hidden",t.style["-webkit-backface-visibility"]="hidden"),t}function Ot(s){let{swiper:e,duration:t,transformElements:i,allSlides:r}=s,{activeIndex:n}=e,a=o=>o.parentElement?o.parentElement:e.slides.filter(c=>c.shadowRoot&&c.shadowRoot===o.parentNode)[0];if(e.params.virtualTranslate&&t!==0){let o=!1,l;r?l=i:l=i.filter(c=>{let d=c.classList.contains("swiper-slide-transform")?a(c):c;return e.getSlideIndex(d)===n}),l.forEach(c=>{Lt(c,()=>{if(o||!e||e.destroyed)return;o=!0,e.animating=!1;let d=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});e.wrapperEl.dispatchEvent(d)})})}}function ha(s){let{swiper:e,extendParams:t,on:i}=s;t({fadeEffect:{crossFade:!1}}),Ke({effect:"fade",swiper:e,on:i,setTranslate:()=>{let{slides:a}=e,o=e.params.fadeEffect;for(let l=0;l<a.length;l+=1){let c=e.slides[l],u=-c.swiperSlideOffset;e.params.virtualTranslate||(u-=e.translate);let f=0;e.isHorizontal()||(f=u,u=0);let h=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(c.progress),0):1+Math.min(Math.max(c.progress,-1),0),g=ot(o,c);g.style.opacity=h,g.style.transform=`translate3d(${u}px, ${f}px, 0px)`}},setTransition:a=>{let o=e.slides.map(l=>Be(l));o.forEach(l=>{l.style.transitionDuration=`${a}ms`}),Ot({swiper:e,duration:a,transformElements:o,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function ma(s){let{swiper:e,extendParams:t,on:i}=s;t({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});let r=(l,c,d)=>{let u=d?l.querySelector(".swiper-slide-shadow-left"):l.querySelector(".swiper-slide-shadow-top"),f=d?l.querySelector(".swiper-slide-shadow-right"):l.querySelector(".swiper-slide-shadow-bottom");u||(u=ye("div",`swiper-slide-shadow-cube swiper-slide-shadow-${d?"left":"top"}`.split(" ")),l.append(u)),f||(f=ye("div",`swiper-slide-shadow-cube swiper-slide-shadow-${d?"right":"bottom"}`.split(" ")),l.append(f)),u&&(u.style.opacity=Math.max(-c,0)),f&&(f.style.opacity=Math.max(c,0))};Ke({effect:"cube",swiper:e,on:i,setTranslate:()=>{let{el:l,wrapperEl:c,slides:d,width:u,height:f,rtlTranslate:h,size:g,browser:p}=e,v=e.params.cubeEffect,m=e.isHorizontal(),y=e.virtual&&e.params.virtual.enabled,w=0,x;v.shadow&&(m?(x=e.wrapperEl.querySelector(".swiper-cube-shadow"),x||(x=ye("div","swiper-cube-shadow"),e.wrapperEl.append(x)),x.style.height=`${u}px`):(x=l.querySelector(".swiper-cube-shadow"),x||(x=ye("div","swiper-cube-shadow"),l.append(x))));for(let C=0;C<d.length;C+=1){let R=d[C],T=C;y&&(T=parseInt(R.getAttribute("data-swiper-slide-index"),10));let E=T*90,k=Math.floor(E/360);h&&(E=-E,k=Math.floor(-E/360));let F=Math.max(Math.min(R.progress,1),-1),L=0,A=0,D=0;T%4===0?(L=-k*4*g,D=0):(T-1)%4===0?(L=0,D=-k*4*g):(T-2)%4===0?(L=g+k*4*g,D=g):(T-3)%4===0&&(L=-g,D=3*g+g*4*k),h&&(L=-L),m||(A=L,L=0);let B=`rotateX(${m?0:-E}deg) rotateY(${m?E:0}deg) translate3d(${L}px, ${A}px, ${D}px)`;F<=1&&F>-1&&(w=T*90+F*90,h&&(w=-T*90-F*90),e.browser&&e.browser.need3dFix&&Math.abs(w)/90%2===1&&(w+=.001)),R.style.transform=B,v.slideShadows&&r(R,F,m)}if(c.style.transformOrigin=`50% 50% -${g/2}px`,c.style["-webkit-transform-origin"]=`50% 50% -${g/2}px`,v.shadow)if(m)x.style.transform=`translate3d(0px, ${u/2+v.shadowOffset}px, ${-u/2}px) rotateX(89.99deg) rotateZ(0deg) scale(${v.shadowScale})`;else{let C=Math.abs(w)-Math.floor(Math.abs(w)/90)*90,R=1.5-(Math.sin(C*2*Math.PI/360)/2+Math.cos(C*2*Math.PI/360)/2),T=v.shadowScale,E=v.shadowScale/R,k=v.shadowOffset;x.style.transform=`scale3d(${T}, 1, ${E}) translate3d(0px, ${f/2+k}px, ${-f/2/E}px) rotateX(-89.99deg)`}let S=(p.isSafari||p.isWebView)&&p.needPerspectiveFix?-g/2:0;c.style.transform=`translate3d(0px,0,${S}px) rotateX(${e.isHorizontal()?0:w}deg) rotateY(${e.isHorizontal()?-w:0}deg)`,c.style.setProperty("--swiper-cube-translate-z",`${S}px`)},setTransition:l=>{let{el:c,slides:d}=e;if(d.forEach(u=>{u.style.transitionDuration=`${l}ms`,u.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(f=>{f.style.transitionDuration=`${l}ms`})}),e.params.cubeEffect.shadow&&!e.isHorizontal()){let u=c.querySelector(".swiper-cube-shadow");u&&(u.style.transitionDuration=`${l}ms`)}},recreateShadows:()=>{let l=e.isHorizontal();e.slides.forEach(c=>{let d=Math.max(Math.min(c.progress,1),-1);r(c,d,l)})},getEffectParams:()=>e.params.cubeEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})}function lt(s,e,t){let i=`swiper-slide-shadow${t?`-${t}`:""}${s?` swiper-slide-shadow-${s}`:""}`,r=Be(e),n=r.querySelector(`.${i.split(" ").join(".")}`);return n||(n=ye("div",i.split(" ")),r.append(n)),n}function ga(s){let{swiper:e,extendParams:t,on:i}=s;t({flipEffect:{slideShadows:!0,limitRotation:!0}});let r=(l,c)=>{let d=e.isHorizontal()?l.querySelector(".swiper-slide-shadow-left"):l.querySelector(".swiper-slide-shadow-top"),u=e.isHorizontal()?l.querySelector(".swiper-slide-shadow-right"):l.querySelector(".swiper-slide-shadow-bottom");d||(d=lt("flip",l,e.isHorizontal()?"left":"top")),u||(u=lt("flip",l,e.isHorizontal()?"right":"bottom")),d&&(d.style.opacity=Math.max(-c,0)),u&&(u.style.opacity=Math.max(c,0))};Ke({effect:"flip",swiper:e,on:i,setTranslate:()=>{let{slides:l,rtlTranslate:c}=e,d=e.params.flipEffect;for(let u=0;u<l.length;u+=1){let f=l[u],h=f.progress;e.params.flipEffect.limitRotation&&(h=Math.max(Math.min(f.progress,1),-1));let g=f.swiperSlideOffset,v=-180*h,m=0,y=e.params.cssMode?-g-e.translate:-g,w=0;e.isHorizontal()?c&&(v=-v):(w=y,y=0,m=-v,v=0),e.browser&&e.browser.need3dFix&&(Math.abs(v)/90%2===1&&(v+=.001),Math.abs(m)/90%2===1&&(m+=.001)),f.style.zIndex=-Math.abs(Math.round(h))+l.length,d.slideShadows&&r(f,h);let x=`translate3d(${y}px, ${w}px, 0px) rotateX(${m}deg) rotateY(${v}deg)`,S=ot(d,f);S.style.transform=x}},setTransition:l=>{let c=e.slides.map(d=>Be(d));c.forEach(d=>{d.style.transitionDuration=`${l}ms`,d.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(u=>{u.style.transitionDuration=`${l}ms`})}),Ot({swiper:e,duration:l,transformElements:c})},recreateShadows:()=>{e.params.flipEffect,e.slides.forEach(l=>{let c=l.progress;e.params.flipEffect.limitRotation&&(c=Math.max(Math.min(l.progress,1),-1)),r(l,c)})},getEffectParams:()=>e.params.flipEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function va(s){let{swiper:e,extendParams:t,on:i}=s;t({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),Ke({effect:"coverflow",swiper:e,on:i,setTranslate:()=>{let{width:a,height:o,slides:l,slidesSizesGrid:c}=e,d=e.params.coverflowEffect,u=e.isHorizontal(),f=e.translate,h=u?-f+a/2:-f+o/2,g=u?d.rotate:-d.rotate,p=d.depth;for(let v=0,m=l.length;v<m;v+=1){let y=l[v],w=c[v],x=y.swiperSlideOffset,S=(h-x-w/2)/w,C=typeof d.modifier=="function"?d.modifier(S):S*d.modifier,R=u?g*C:0,T=u?0:g*C,E=-p*Math.abs(C),k=d.stretch;typeof k=="string"&&k.indexOf("%")!==-1&&(k=parseFloat(d.stretch)/100*w);let F=u?0:k*C,L=u?k*C:0,A=1-(1-d.scale)*Math.abs(C);Math.abs(L)<.001&&(L=0),Math.abs(F)<.001&&(F=0),Math.abs(E)<.001&&(E=0),Math.abs(R)<.001&&(R=0),Math.abs(T)<.001&&(T=0),Math.abs(A)<.001&&(A=0),e.browser&&e.browser.need3dFix&&(Math.abs(R)/90%2===1&&(R+=.001),Math.abs(T)/90%2===1&&(T+=.001));let D=`translate3d(${L}px,${F}px,${E}px)  rotateX(${T}deg) rotateY(${R}deg) scale(${A})`,B=ot(d,y);if(B.style.transform=D,y.style.zIndex=-Math.abs(Math.round(C))+1,d.slideShadows){let G=u?y.querySelector(".swiper-slide-shadow-left"):y.querySelector(".swiper-slide-shadow-top"),I=u?y.querySelector(".swiper-slide-shadow-right"):y.querySelector(".swiper-slide-shadow-bottom");G||(G=lt("coverflow",y,u?"left":"top")),I||(I=lt("coverflow",y,u?"right":"bottom")),G&&(G.style.opacity=C>0?C:0),I&&(I.style.opacity=-C>0?-C:0)}}},setTransition:a=>{e.slides.map(l=>Be(l)).forEach(l=>{l.style.transitionDuration=`${a}ms`,l.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(c=>{c.style.transitionDuration=`${a}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}function wa(s){let{swiper:e,extendParams:t,on:i}=s;t({creativeEffect:{limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});let r=o=>typeof o=="string"?o:`${o}px`;Ke({effect:"creative",swiper:e,on:i,setTranslate:()=>{let{slides:o,wrapperEl:l,slidesSizesGrid:c}=e,d=e.params.creativeEffect,{progressMultiplier:u}=d,f=e.params.centeredSlides;if(f){let h=c[0]/2-e.params.slidesOffsetBefore||0;l.style.transform=`translateX(calc(50% - ${h}px))`}for(let h=0;h<o.length;h+=1){let g=o[h],p=g.progress,v=Math.min(Math.max(g.progress,-d.limitProgress),d.limitProgress),m=v;f||(m=Math.min(Math.max(g.originalProgress,-d.limitProgress),d.limitProgress));let y=g.swiperSlideOffset,w=[e.params.cssMode?-y-e.translate:-y,0,0],x=[0,0,0],S=!1;e.isHorizontal()||(w[1]=w[0],w[0]=0);let C={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};v<0?(C=d.next,S=!0):v>0&&(C=d.prev,S=!0),w.forEach((A,D)=>{w[D]=`calc(${A}px + (${r(C.translate[D])} * ${Math.abs(v*u)}))`}),x.forEach((A,D)=>{let B=C.rotate[D]*Math.abs(v*u);e.browser&&e.browser.need3dFix&&Math.abs(B)/90%2===1&&(B+=.001),x[D]=B}),g.style.zIndex=-Math.abs(Math.round(p))+o.length;let R=w.join(", "),T=`rotateX(${x[0]}deg) rotateY(${x[1]}deg) rotateZ(${x[2]}deg)`,E=m<0?`scale(${1+(1-C.scale)*m*u})`:`scale(${1-(1-C.scale)*m*u})`,k=m<0?1+(1-C.opacity)*m*u:1-(1-C.opacity)*m*u,F=`translate3d(${R}) ${T} ${E}`;if(S&&C.shadow||!S){let A=g.querySelector(".swiper-slide-shadow");if(!A&&C.shadow&&(A=lt("creative",g)),A){let D=d.shadowPerProgress?v*(1/d.limitProgress):v;A.style.opacity=Math.min(Math.max(Math.abs(D),0),1)}}let L=ot(d,g);L.style.transform=F,L.style.opacity=k,C.origin&&(L.style.transformOrigin=C.origin)}},setTransition:o=>{let l=e.slides.map(c=>Be(c));l.forEach(c=>{c.style.transitionDuration=`${o}ms`,c.querySelectorAll(".swiper-slide-shadow").forEach(d=>{d.style.transitionDuration=`${o}ms`})}),Ot({swiper:e,duration:o,transformElements:l,allSlides:!0})},perspective:()=>e.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})}function ya(s){let{swiper:e,extendParams:t,on:i}=s;t({cardsEffect:{slideShadows:!0,rotate:!0,perSlideRotate:2,perSlideOffset:8}}),Ke({effect:"cards",swiper:e,on:i,setTranslate:()=>{let{slides:a,activeIndex:o,rtlTranslate:l}=e,c=e.params.cardsEffect,{startTranslate:d,isTouched:u}=e.touchEventsData,f=l?-e.translate:e.translate;for(let h=0;h<a.length;h+=1){let g=a[h],p=g.progress,v=Math.min(Math.max(p,-4),4),m=g.swiperSlideOffset;e.params.centeredSlides&&!e.params.cssMode&&(e.wrapperEl.style.transform=`translateX(${e.minTranslate()}px)`),e.params.centeredSlides&&e.params.cssMode&&(m-=a[0].swiperSlideOffset);let y=e.params.cssMode?-m-e.translate:-m,w=0,x=-100*Math.abs(v),S=1,C=-c.perSlideRotate*v,R=c.perSlideOffset-Math.abs(v)*.75,T=e.virtual&&e.params.virtual.enabled?e.virtual.from+h:h,E=(T===o||T===o-1)&&v>0&&v<1&&(u||e.params.cssMode)&&f<d,k=(T===o||T===o+1)&&v<0&&v>-1&&(u||e.params.cssMode)&&f>d;if(E||k){let D=(1-Math.abs((Math.abs(v)-.5)/.5))**.5;C+=-28*v*D,S+=-.5*D,R+=96*D,w=`${-25*D*Math.abs(v)}%`}if(v<0?y=`calc(${y}px ${l?"-":"+"} (${R*Math.abs(v)}%))`:v>0?y=`calc(${y}px ${l?"-":"+"} (-${R*Math.abs(v)}%))`:y=`${y}px`,!e.isHorizontal()){let D=w;w=y,y=D}let F=v<0?`${1+(1-S)*v}`:`${1-(1-S)*v}`,L=`
        translate3d(${y}, ${w}, ${x}px)
        rotateZ(${c.rotate?l?-C:C:0}deg)
        scale(${F})
      `;if(c.slideShadows){let D=g.querySelector(".swiper-slide-shadow");D||(D=lt("cards",g)),D&&(D.style.opacity=Math.min(Math.max((Math.abs(v)-.5)/.5,0),1))}g.style.zIndex=-Math.abs(Math.round(p))+a.length;let A=ot(c,g);A.style.transform=L}},setTransition:a=>{let o=e.slides.map(l=>Be(l));o.forEach(l=>{l.style.transitionDuration=`${a}ms`,l.querySelectorAll(".swiper-slide-shadow").forEach(c=>{c.style.transitionDuration=`${a}ms`})}),Ot({swiper:e,duration:a,transformElements:o})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})}var Oc=[Qn,Zn,Jn,ea,ta,ia,ra,sa,na,aa,oa,la,ca,da,ua,fa,pa,ha,ma,ga,va,wa,ya];Te.use(Oc);function _a(){document.querySelectorAll(".community_swiper-wrapper").forEach(e=>{let t=e.getAttribute("loop-mode")==="true",i=parseInt(e.getAttribute("slider-duration")||"300",10),r=e.querySelector(".swiper");if(r){let n=new Te(r,{speed:i,loop:t,autoHeight:!1,centeredSlides:t,followFinger:!0,freeMode:!1,slideToClickedSlide:!0,slidesPerView:1,spaceBetween:4,rewind:!1,mousewheel:{forceToAxis:!0},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{480:{slidesPerView:1,spaceBetween:4},768:{slidesPerView:2,spaceBetween:4},992:{slidesPerView:2.75,spaceBetween:2}},scrollbar:{el:e.querySelector(".swiper-drag-wrapper"),draggable:!0,dragClass:"swiper-drag",snapOnRelease:!0},slideActiveClass:"is-active",slideDuplicateActiveClass:"is-active"})}})}function ba(){return new Promise((s,e)=>{let t=document.createElement("script");t.src="https://unpkg.com/typed.js@2.0.132/dist/typed.umd.js",t.onload=()=>s(),t.onerror=()=>e(new Error("Failed to load typed.js script")),document.head.appendChild(t)})}function xa(){new IntersectionObserver((e,t)=>{e[0].isIntersecting&&(new window.Typed("#typing",{strings:["BECOME A DEFIT <br>WEB3 PLAYER"],typeSpeed:100,backSpeed:0,fadeOut:!0,showCursor:!1}),t.unobserve(document.querySelector("#typing")))}).observe(document.querySelector("#typing"))}function kc(){return new Promise((s,e)=>{let t=document.createElement("script");t.src="https://cdn.weglot.com/weglot.min.js",t.type="text/javascript",t.async=!0,t.onload=()=>s(),t.onerror=()=>e(new Error("Failed to load Weglot script")),document.head.appendChild(t)})}async function fs(){await kc(),Weglot.initialize({api_key:"wg_0a442ce2257ee6e6a96e7f04da6ad17c1"}),Weglot.on("initialized",()=>{let s=Weglot.getCurrentLang();Sa(s)}),document.querySelectorAll(".wg-element-wrapper.sw8 [lang]").forEach(s=>{s.addEventListener("click",function(e){e.preventDefault();let t=this.getAttribute("lang");t&&(Weglot.switchTo(t),Sa(t))})})}function Sa(s){let e=document.querySelector(".wg-element-wrapper.sw8");if(!e)return;let t=e.querySelector(".w-dropdown-toggle");if(t&&t.getAttribute("lang")!==s){let i=e.querySelector(`[lang=${s}]`);if(i){let r=i.innerHTML,n=t.innerHTML;t.innerHTML=r,i.innerHTML=n;let a=i.getAttribute("lang"),o=t.getAttribute("lang");a&&o&&(t.setAttribute("lang",a),i.setAttribute("lang",o))}}}function Li(s){var n;let i=(n=new DOMParser().parseFromString(s.next.html,"text/html").querySelector("html"))==null?void 0:n.getAttribute("data-wf-page");i&&document.documentElement.setAttribute("data-wf-page",i);let r=window.Webflow;if(r){r.destroy(),r.ready();let a=r.require("ix2");typeof a=="object"&&a!==null&&"init"in a&&a.init()}}window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{Jr("https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsfilter@1/cmsfilter.js"),fs(),Rn(),Sn(),document.addEventListener("DOMContentLoaded",er),ir.default.hooks.leave(async s=>{s&&(await je.set(s.next.container,{opacity:0}),setTimeout(()=>{window.scrollTo(0,0),setTimeout(()=>{window.scrollBy(0,1)},500)},500))}),ir.default.hooks.enter(async s=>{s&&(fs(),await je.to(s.next.container,{opacity:1,duration:.5}))}),ir.default.init({preventRunning:!0,debug:!0,views:[{namespace:"app",beforeEnter(){In(),xn(),zn(),ts(),er(),_a()},afterEnter(){kn(),On()}},{namespace:"nft",beforeEnter(){ba().then(()=>{xa()})}},{namespace:"team"},{namespace:"legals"},{namespace:"blog",beforeEnter(){Jr("https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsfilter@1/cmsfilter.js")}}],transitions:[{name:"app - right to left",sync:!0,to:{namespace:["app"]},leave(s){if(!s)return;let e=s;Tn(()=>{Li(e),window.scrollTo(0,0),setTimeout(()=>{window.scrollBy(0,1)},500)})}},{name:"nft - left to right",sync:!0,to:{namespace:["nft"]},leave(s){if(!s)return;let e=s;En(()=>{Li(e),window.scrollTo(0,0),setTimeout(()=>{window.scrollBy(0,1)},500)})}},{name:"team - left to right",sync:!0,to:{namespace:["team"]},leave(s){if(!s)return;let e=s;Pn(()=>{Li(e),window.scrollTo(0,0),setTimeout(()=>{window.scrollBy(0,1)},500)})}},{name:"legals - left to right",sync:!0,to:{namespace:["legals"]},leave(s){if(!s)return;let e=s;Mn(()=>{Li(e),window.scrollTo(0,0),setTimeout(()=>{window.scrollBy(0,1)},500)})}},{name:"blog - left to right",sync:!0,to:{namespace:["blog"]},leave(s){if(!s)return;let e=s;Cn(()=>{Li(e),window.scrollTo(0,0),setTimeout(()=>{window.scrollBy(0,1)},500)})}}]})});})();
>>>>>>> Stashed changes
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.11.5
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.11.5
   * https://greensock.com
   *
   * Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
//# sourceMappingURL=index.js.map
