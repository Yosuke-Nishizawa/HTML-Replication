!(function() {
  function e() {
    O = document.body.clientWidth;
  }
  function n(e) {
    "pc" === e && (A || P.close(), I.open(A)),
      "sp" === e && (A || I.close(), P.open(A)),
      (A = !1);
  }
  function t() {
    function e() {
      s.on("mouseenter", t), s.on("mouseleave", o);
    }
    function n() {
      c && c.hide(), s.off("mouseenter", t), s.off("mouseleave", o);
    }
    function t(e) {
      e.preventDefault(), (c = $(this).next()), i(c);
    }
    function o(e) {
      e.preventDefault(), a(c), (c = null);
    }
    function i(e) {
      var n = e.find(".index_about_content_mask");
      e.find("p");
      TweenMax.fromTo(
        e,
        0.3,
        { scale: 0.7, opacity: 0, display: "block" },
        { scale: 1, opacity: 1, ease: Back.easeOut.config(1) }
      ),
        n.hide(),
        TweenMax.fromTo(n, 0, { left: -180 }, { left: 360, delay: 0 });
    }
    function a(e) {
      TweenMax.to(e, 0.15, { opacity: 0, scale: 0.95, display: "none" });
    }
    var c,
      r = $(".index_about_points"),
      s = r.find(".js-zoom");
    r.find("dd");
    return { activate: e, deactivate: n };
  }
  function o() {
    function e() {
      k.on("resize", t),
        t(),
        $("[data-clip-path]").each(function() {
          $(this).attr({ "clip-path": $(this).attr("data-clip-path") });
        });
    }
    function n() {
      k.off("resize", t),
        t(),
        $("[data-clip-path]").each(function() {
          $(this).removeAttr("clip-path");
        });
    }
    function t() {
      var e = document.body.clientWidth;
      _.each(i, function(n, t) {
        n &&
          a
            .eq(t)
            .attr({
              d: n.replace("{{width}}", e).replace("{{halfWidth}}", e / 2)
            });
      });
    }
    var o = $("[data-d]"),
      i = o.map(function() {
        return this.getAttribute("data-d");
      }),
      a = o.find("path");
    return { activate: e, deactivate: n };
  }
  function i() {
    function e() {
      r.hide(), d.show();
    }
    function n() {
      function e() {
        Math.PI, Math.PI;
        TweenMax.fromTo(
          f,
          1,
          { rotationZ: 0, transformOrigin: "22px 22px" },
          {
            rotationZ: 360,
            ease: Sine.easeInOut,
            onComplete: function() {
              if (
                (console.log(p, u),
                !p && ($("html").hasClass("wf-loading") || !u))
              )
                return void e();
              t();
            }
          }
        );
      }
      if (((a = $.Deferred()), C.get("visited") && !D.intro))
        return r.hide(), d.show(), a.resolve();
      C.set("visited"), r.addClass("start"), (c = i(d));
      var n = 0.2 * Math.PI,
        s = 1.8 * Math.PI,
        l = o(n, s);
      f.find("path").attr("d", l), e();
      var u = !1,
        p = !1;
      return (
        window.imagesLoaded($(".index_top")[0], function() {
          u = !0;
        }),
        setTimeout(function() {
          p = !0;
        }, 1e4),
        a.promise()
      );
    }
    function t() {
      var e = { p: 0, fromRad: 0.2 * Math.PI, toRad: 1.8 * Math.PI };
      TweenMax.to(e, 0.5, {
        p: 1,
        fromRad: e.toRad,
        onUpdate: function() {
          var n = o(e.fromRad, e.toRad);
          f.find("path").attr({ d: n, "stroke-width": 5 - 4 * e.p }),
            TweenMax.set(f, { rotationZ: 100 * e.p });
        },
        ease: Cubic.easeIn
      }),
        d.show(),
        l.hide(),
        h.hide(),
        w.hide(),
        TweenMax.fromTo(
          p,
          0.3,
          { opacity: 0, y: 30, transformOrigin: "50% 50%", display: "block" },
          { opacity: 1, y: 0, delay: 0.5 }
        ),
        TweenMax.fromTo(
          l,
          0.1,
          { scale: 0.96, transformOrigin: "92px 92px" },
          {
            scale: 1,
            delay: 1.35,
            ease: Linear.easeNone,
            onStart: function() {
              h.show(), l.show(), c.emit();
            }
          }
        ),
        TweenMax.fromTo(
          h,
          0.1,
          { scale: 1.1, transformOrigin: "51px 15px" },
          { scale: 1, delay: 1.3, ease: Linear.easeNone }
        ),
        TweenMax.fromTo(
          l,
          0.1,
          { scale: 0.96 },
          {
            scale: 1,
            delay: 1.9,
            ease: Linear.easeNone,
            onStart: function() {
              u.hide(), w.show(), c.emit();
            }
          }
        ),
        TweenMax.fromTo(
          w,
          0.1,
          { scale: 1.1, transformOrigin: "51px 15px" },
          { scale: 1, delay: 1.85, ease: Linear.easeNone }
        ),
        TweenMax.to(s, 0.3, {
          opacity: 0,
          display: "none",
          delay: 2.8,
          onStart: function() {
            window.scrollTo(0, 0);
          },
          onComplete: function() {
            r.hide();
          }
        }),
        TweenMax.fromTo(
          $(".index_top_bg_01"),
          5,
          { scale: 1.4, opacity: 1 },
          { scale: 1, delay: 2.8, ease: Sine.easeOut }
        ),
        TweenMax.delayedCall(4.3, function() {
          a.resolve();
        }),
        TweenMax.fromTo(
          $(".index_top_mask"),
          0.5,
          { width: 0, backgroundSize: O + "px 100%" },
          {
            width: "100%",
            delay: 3.4,
            onComplete: function() {
              $(this).removeAttr("style");
            }
          }
        );
    }
    function o(e, n) {
      var t = 17,
        o = Math.sin(e) * t + 22,
        i = -Math.cos(e) * t + 22,
        a = Math.sin(n) * t + 22,
        c = -Math.cos(n) * t + 22,
        r = Math.abs(e - n) > Math.PI ? 1 : 0;
      return [
        "M" + [o, i].join(","),
        "A" + [t, t, 0, r, 1, a, c].join(",")
      ].join("");
    }
    function i(e) {
      function n() {
        for (var e = 0; e < o; e++) {
          var n = t.shift(),
            i = n.element,
            a = n.angle,
            c = (function() {
              return (a += 90), a > 360 && (a -= 360), (a / 180) * Math.PI;
            })(),
            r = Math.sin(c) * (1.15 + 0.2 * Math.random()) * 95 + 105,
            s = -Math.cos(c) * (1.15 + 0.2 * Math.random()) * 95 + 95,
            f = 0.05 * Math.random();
          TweenMax.fromTo(
            i,
            0.3,
            { transformOrigin: "50% 50%", visibility: "visible" },
            {
              x: r,
              y: s,
              rotationZ: (a > 90 && a < 270 ? -360 : 360) * Math.random(),
              ease: Quint.easeOut,
              delay: f
            }
          ),
            TweenMax.to(i, 0.3, {
              opacity: 0,
              scale: Math.random(),
              ease: Sine.easeOut,
              display: "none",
              delay: f + 0.2
            });
        }
      }
      for (var t = [], o = 10, i = 0; i < 2 * o; i++) {
        var a = (function() {
            for (
              var e = [
                  [20, 90],
                  [135, 180],
                  [190, 270],
                  [310, 360]
                ],
                n = e.map(function(e) {
                  return e[1] - e[0];
                }),
                t = n.reduce(function(e, n) {
                  return e + n;
                }, 0),
                o = Math.random(),
                i = o * t,
                a = 0;
              a < n.length && !(i < n[a]);
              a++
            )
              i -= n[a];
            return e[a][0] + i;
          })(),
          c = Math.random(),
          r = (function(e, n) {
            var t = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "polygon"
              ),
              o = [
                0,
                0,
                13.5 * Math.random(),
                13.5 * Math.random(),
                13.5 * Math.random(),
                13.5 * Math.random()
              ].join(" ");
            $(t).attr({ points: o, fill: "#fff" });
            var i = 0.8 + 0.15 * Math.random(),
              a = (function() {
                return (e += 90), e > 360 && (e -= 360), (e / 180) * Math.PI;
              })(),
              c = -Math.cos(a) * i * 95,
              r = Math.sin(a) * i * 95;
            return TweenMax.set(t, { x: 105 + r, y: 95 + c }), t;
          })(a, c);
        e.append(r),
          r.setAttribute("visibility", "hidden"),
          t.push({ element: r, angle: a, size: c });
      }
      return { emit: n };
    }
    var a,
      c,
      r = $(".index_intro"),
      s = $(".index_intro_bg"),
      f = r.find(".index_intro_spinner"),
      d = $(".index_top_logo"),
      l = d.find(".logo"),
      u = d.find(".logoMask"),
      p = d.find(".croquant"),
      h = d.find(".zak1"),
      w = d.find(".zak2");
    return { open: n, skip: e };
  }
  function a() {
    function e(e) {
      _.forEach(t, function(n) {
        n.activate(e);
      });
    }
    function n() {
      _.forEach(t, function(e) {
        e.deactivate();
      });
    }
    var t = [c(), r(), s(), f(), d(), l(), u(), h(), w(), v(), x()];
    return { activate: e, deactivate: n };
  }
  function c() {
    function e(e) {
      (a = !0),
        k.on({ scroll: t, resize: i }),
        t(),
        e
          ? ((d = 0), (c = setTimeout(o, 3e3)))
          : (TweenMax.killTweensOf(f), o());
    }
    function n() {
      (a = !1),
        clearTimeout(c),
        k.off({ scroll: t }),
        window.removeEventListener("resize", i),
        s.removeAttr("style"),
        f.css({ top: 0 });
    }
    function t() {
      var e = window.pageYOffset;
      f.css({ top: 0.2 * e });
    }
    function o() {
      if (a) {
        d++, d >= f.length && (d = 0);
        var e = f.eq(d);
        TweenMax.fromTo(e, 0.7, { opacity: 0 }, { opacity: 1 }),
          TweenMax.fromTo(
            e,
            6,
            { scale: 1.2, zIndex: 1, display: "block" },
            { scale: 1, ease: Sine.easeOut }
          ),
          clearTimeout(c),
          (c = setTimeout(function() {
            f.not(e).hide(), e.css({ zIndex: 0 }), o();
          }, 5e3));
      }
    }
    function i(e) {
      a && s.css({ height: window.innerHeight });
    }
    var a,
      c,
      r = $(".index_top"),
      s = r.find(".index_section_bg"),
      f = r.find(".index_top_bgs > div"),
      d = -1;
    return { activate: e, deactivate: n };
  }
  function r() {
    function e() {
      r ||
        ((f = !0),
        c ? c.progress(0) : (c = m(l)),
        d.css({ opacity: 0 }),
        k.on({ resize: t, scroll: o }),
        t());
    }
    function n() {
      (f = !1), d.css({ opacity: 1 }), c.progress(1), i();
    }
    function t() {
      f && ((s = d.offset().top - 0.85 * window.innerHeight), o());
    }
    function o(e) {
      window.pageYOffset < s || (a(), i());
    }
    function i() {
      k.off({ resize: t, scroll: o });
    }
    function a() {
      (r = !0),
        TweenMax.to(d, 1, { opacity: 1 }),
        TweenMax.fromTo(
          u,
          1,
          { opacity: 0, scale: 1.2 },
          { opacity: 1, scale: 1, ease: Quint.easeOut, delay: 0.4 }
        ),
        TweenMax.staggerFromTo(
          p,
          0.6,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, delay: 1.2 },
          0.1
        ),
        c.play(0);
    }
    var c,
      r,
      s,
      f,
      d = $(".index_concept"),
      l = d.find("h2"),
      u = d.find(".index_concept_lead"),
      p = d.find("p");
    return (
      z &&
        d.on("click", function(t) {
          t.preventDefault(), t.stopPropagation(), (r = !1), e(), a(), n();
        }),
      { activate: e, deactivate: n }
    );
  }
  function s() {
    function e() {
      (d = !0),
        k.on({ resize: t, scroll: o }),
        t(),
        s ||
          (u.find("image").hide(),
          p.hide(),
          l.find(".shopsBanner_bg_img").on({ mouseover: c, mouseout: r }));
    }
    function n() {
      (d = !1),
        l.css({ opacity: 1 }),
        p.show(),
        u.find("image").show(),
        l.find(".shopsBanner_bg_img").off({ mouseover: c, mouseout: r }),
        i();
    }
    function t() {
      d && ((f = l.offset().top - 0.7 * window.innerHeight), o());
    }
    function o(e) {
      TweenMax.set(u.find("image"), { y: 0.2 * (window.pageYOffset - f) }),
        s || window.pageYOffset < f || a();
    }
    function i() {
      k.off({ resize: t, scroll: o });
    }
    function a() {
      (s = !0),
        l.css({ overflow: "hidden" }),
        u.css({ width: O, display: "block" }),
        u.find("image").show(),
        TweenMax.fromTo(
          u.find("#shopBannerImgMask rect"),
          1,
          { width: 0 },
          { width: "100%" }
        ),
        TweenMax.fromTo(
          u.find("image"),
          1,
          { x: -120 },
          {
            x: 0,
            onComplete: function() {
              u.css({ width: "100%" });
            }
          }
        ),
        TweenMax.fromTo(
          p,
          0.3,
          { display: "block", scale: 1.2, opacity: 0 },
          { scale: 1, opacity: 1, delay: 0.8 }
        );
    }
    function c() {
      l.addClass("hover");
    }
    function r() {
      l.removeClass("hover");
    }
    var s,
      f,
      d,
      l = $(".index_shopsBanner"),
      u = (l.find("h2"), l.find(".index_section_bg"), l.find("svg")),
      p = l.find(".index_shopsBanner_label");
    return (
      z &&
        l.on("click", function(n) {
          n.preventDefault(), (s = !1), e(), a();
        }),
      { activate: e, deactivate: n }
    );
  }
  function f() {
    function e() {
      r ||
        ((f = !0),
        c ? c.progress(0) : (c = m(l)),
        k.on({ resize: t, scroll: o }),
        t());
    }
    function n() {
      (f = !1), c.progress(1), i();
    }
    function t() {
      f && ((s = d.offset().top - 0.85 * window.innerHeight), o());
    }
    function o(e) {
      window.pageYOffset < s || (a(), i());
    }
    function i() {
      k.off({ resize: t, scroll: o });
    }
    function a() {
      (r = !0), TweenMax.to(d, 1, { opacity: 1 }), c.play(0);
    }
    var c,
      r,
      s,
      f,
      d = $(".index_principles"),
      l = d.find("h2");
    d.find(".index_concept_lead"), d.find("p");
    return (
      z &&
        d.on("click", function(n) {
          n.preventDefault(), (r = !1), e(), a();
        }),
      { activate: e, deactivate: n }
    );
  }
  function d() {
    return p($(".index_principles_item").eq(0), 0);
  }
  function l() {
    return p($(".index_principles_item").eq(1), 1);
  }
  function u() {
    return p($(".index_principles_item").eq(2), 2);
  }
  function p(e, n) {
    function t() {
      if (d) return void h.css({ position: "relative" });
      (u = !0), e.css({ opacity: 0 }), k.on({ resize: i, scroll: a }), i();
    }
    function o() {
      (u = !1),
        e.css({ opacity: 1 }),
        p.removeAttr("style"),
        h.removeAttr("style"),
        c();
    }
    function i() {
      u && ((l = e.offset().top - 0.7 * window.innerHeight), a());
    }
    function a(e) {
      window.pageYOffset < l || (r(), c());
    }
    function c() {
      k.off({ resize: i, scroll: a });
    }
    function r() {
      (d = !0), n % 2 ? s() : f();
    }
    function s() {
      TweenMax.to(e, 0, { opacity: 1 }),
        TweenMax.fromTo(
          h,
          0.6,
          {
            position: "absolute",
            left: 0,
            width: 0,
            height: 660,
            overflow: "hidden"
          },
          { width: "50%" }
        ),
        w.css({ position: "absolute", left: 0, width: O / 2 }),
        TweenMax.fromTo(
          w.find("image"),
          1,
          { x: -50 },
          {
            x: 0,
            onComplete: function() {
              w.css({ width: "100%" });
            }
          }
        ),
        TweenMax.fromTo(
          p,
          0.3,
          { opacity: 0, y: "-40%" },
          { opacity: 1, y: "-50%", delay: 0.2 }
        );
    }
    function f() {
      TweenMax.to(e, 0, { opacity: 1 }),
        TweenMax.fromTo(
          h,
          0.6,
          {
            position: "absolute",
            right: 0,
            width: 0,
            height: 660,
            overflow: "hidden"
          },
          { width: "50%" }
        ),
        w.css({ position: "absolute", right: 0, width: O / 2 }),
        TweenMax.fromTo(
          w.find("image"),
          1,
          { x: 50 },
          {
            x: 0,
            onComplete: function() {
              w.css({ width: "100%" });
            }
          }
        ),
        TweenMax.fromTo(
          p,
          0.3,
          { opacity: 0, y: "-40%" },
          { opacity: 1, y: "-50%", delay: 0.2 }
        );
    }
    var d,
      l,
      u,
      p = e.find(".index_principles_item_text"),
      h = e.find(".index_principles_item_img"),
      w = h.find(".only_pc svg");
    return (
      z &&
        e.on("click", function(e) {
          e.preventDefault(), e.stopPropagation(), (d = !1), t(), r(), o();
        }),
      { activate: t, deactivate: o }
    );
  }
  function h() {
    function e() {
      f ||
        ((s = !0),
        r ? r.progress(0) : (r = m(u)),
        h.css({ opacity: 0 }),
        p.css("opacity", 0),
        w.hide(),
        v.css("opacity", 0),
        k.on({ resize: t, scroll: o }),
        t());
    }
    function n() {
      (s = !1), r.progress(1), p.removeAttr("style"), w.show(), i();
    }
    function t() {
      s && ((d = l.offset().top - 0.7 * window.innerHeight), o());
    }
    function o(e) {
      window.pageYOffset < d || (a(), i());
    }
    function i() {
      k.off({ resize: t, scroll: o });
    }
    function a() {
      (f = !0),
        TweenMax.delayedCall(0.3, function() {
          r.play(0);
        }),
        TweenMax.staggerFromTo(
          h,
          0.3,
          { opacity: 0, scale: 0.5 },
          { opacity: 1, scale: 1, delay: 0.6, ease: Back.easeOut },
          0.2
        ),
        p.css("opacity", 0),
        w.show().each(function(e) {
          c(this, e);
        }),
        TweenMax.fromTo(
          p.eq(4).add(v),
          0.3,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, delay: 2.2 }
        );
    }
    function c(e, n) {
      var t = e.getTotalLength();
      (e.style.strokeDasharray = t + " " + t),
        (e.style.strokeDashoffset = t),
        TweenMax.to(e, 0.3, { strokeDashoffset: 0, delay: 1 + 0.2 * n }),
        p[n] &&
          TweenMax.fromTo(
            p[n],
            0.3,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, delay: 1.4 + 0.2 * n }
          );
    }
    var r,
      s,
      f,
      d,
      l = $(".index_about"),
      u = l.find("h2"),
      p = l.find(
        ".index_about_point_01, .index_about_point_02, .index_about_point_03, .index_about_point_04, .index_about_point_07"
      ),
      h = l.find(".index_about_bg_02"),
      w = l.find(".index_section_bg .only_pc svg path"),
      v = l.find(".index_about_content_07");
    return (
      z &&
        l.on("click", function(t) {
          t.preventDefault(), t.stopPropagation(), (f = !1), e(), a(), n();
        }),
      { activate: e, deactivate: n }
    );
  }
  function w() {
    function e() {
      r ||
        ((f = !0),
        c ? c.progress(0) : (c = m(l)),
        d.css({ opacity: 0 }),
        k.on({ resize: t, scroll: o }),
        t());
    }
    function n() {
      (f = !1), c.progress(1), d.css({ opacity: 1 }), i();
    }
    function t() {
      f && ((s = d.offset().top - 0.85 * window.innerHeight), o());
    }
    function o(e) {
      window.pageYOffset < s || (a(), i());
    }
    function i() {
      k.off({ resize: t, scroll: o });
    }
    function a() {
      (r = !0),
        TweenMax.to(d, 0.3, { opacity: 1 }),
        TweenMax.staggerFromTo(
          u,
          0.6,
          { height: 650 },
          { height: 0, delay: 0.3 },
          0.2
        ),
        TweenMax.staggerFromTo(
          p,
          0.5,
          { scale: 0.8 },
          { scale: 1, ease: Back.easeOut, delay: 0.3 },
          0.2
        ),
        c.play(0);
    }
    var c,
      r,
      s,
      f,
      d = $(".index_price"),
      l = d.find("h2"),
      u =
        (d.find(".index_concept_lead"),
        d.find("p"),
        d.find(".index_price_item_mask")),
      p = d.find("dt:not(:eq(3))");
    return (
      z &&
        d.on("click", function(t) {
          t.preventDefault(), t.stopPropagation(), (r = !1), e(), a(), n();
        }),
      { activate: e, deactivate: n }
    );
  }
  function v() {
    function e() {
      s ||
        ((d = !0),
        c ? (c.progress(0), r.progress(0)) : ((c = m(u)), (r = m(p))),
        x.find(">*").css({ opacity: 0 }),
        k.on({ resize: t, scroll: o }),
        t());
    }
    function n() {
      (d = !1),
        c.progress(1),
        r.progress(1),
        x.find(">*").removeAttr("style"),
        i();
    }
    function t() {
      d && ((f = l.offset().top - 0.85 * window.innerHeight), o());
    }
    function o(e) {
      window.pageYOffset < f || (a(), i());
    }
    function i() {
      k.off({ resize: t, scroll: o });
    }
    function a() {
      (s = !0),
        TweenMax.fromTo(
          h,
          0.6,
          { width: "50%", display: "block" },
          { width: "0%", display: "none", onComplete: function() {} }
        ),
        u.css({ opacity: 0 }),
        TweenMax.delayedCall(0.3, function() {
          c.play(0);
        }),
        TweenMax.delayedCall(0.5, function() {
          r.play(0);
        }),
        TweenMax.fromTo(
          w,
          1,
          { x: -50, width: "110%", maxWidth: "none" },
          { x: 0 }
        ),
        TweenMax.fromTo(v, 1, { x: -20 }, { x: 0 }),
        TweenMax.staggerFromTo(
          x
            .find(">*")
            .not(u)
            .not(p),
          0.5,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, delay: 1 },
          0.1
        );
    }
    var c,
      r,
      s,
      f,
      d,
      l = $(".index_howto"),
      u = l.find("h2"),
      p = l.find(".index_howto_fresh"),
      h = l.find(".index_howto_mask"),
      w = l.find(".only_pc >img"),
      v = l.find(".only_pc p"),
      x = l.find(".index_section_content");
    return (
      z &&
        l.on("click", function(t) {
          t.preventDefault(), t.stopPropagation(), (s = !1), e(), a(), n();
        }),
      { activate: e, deactivate: n }
    );
  }
  function x() {
    function e() {
      k.on({ scroll: o }),
        a ||
          ((r = !0),
          f.filter(":even").css({ overflow: "hidden", width: 0 }),
          d.filter(":odd").css({ overflow: "hidden", width: 0 }),
          k.on({ resize: t, scroll: o }),
          t());
    }
    function n() {
      (r = !1), k.off({ resize: t, scroll: o });
    }
    function t() {
      r && ((c = f.offset().top - 0.7 * window.innerHeight), o());
    }
    function o(e) {
      p.each(function(e) {
        TweenMax.set(this, {
          y: 0.2 * (window.pageYOffset - (c + 329 * e + window.innerHeight / 2))
        });
      }),
        a || window.pageYOffset < c || i();
    }
    function i() {
      (a = !0),
        l.css({ width: O }),
        TweenMax.delayedCall(0.5 * f.length + 1, function() {
          l.css({ width: "100%" });
        }),
        TweenMax.staggerFromTo(
          f.filter(":even"),
          1,
          { overflow: "hidden", width: 0 },
          { width: "100%" },
          1
        ),
        TweenMax.staggerFromTo(p.filter(":even"), 1, { x: -100 }, { x: 0 }, 1),
        TweenMax.staggerFromTo(
          u.filter(":even"),
          1,
          { x: -20, y: "-50%" },
          { x: 0 },
          1
        ),
        d
          .filter(":odd")
          .css({ position: "absolute", right: 0, height: "100%" }),
        l.filter(":odd").css({ position: "absolute", right: 0 }),
        TweenMax.staggerFromTo(
          d.filter(":odd"),
          1,
          { overflow: "hidden", width: 0, right: 0 },
          { width: "100%", delay: 0.5 },
          1
        ),
        TweenMax.staggerFromTo(
          p.filter(":odd"),
          1,
          { x: 100 },
          { x: 0, delay: 0.5 },
          1
        ),
        TweenMax.staggerFromTo(
          u.filter(":odd"),
          1,
          { x: 20, y: "-50%" },
          { x: 0, delay: 0.5 },
          1
        );
    }
    var a,
      c,
      r,
      s = $(".index_shops"),
      f = s.find(".index_shops_pc_item"),
      d = f.find(".index_shops_pc_item_inner"),
      l = f.find("svg"),
      u = f.find("img"),
      p = f.find("svg image");
    return s.on("click", function(e) {}), { activate: e, deactivate: n };
  }
  function m(e) {
    var n = new TimelineMax({ paused: !0 });
    return (
      n.add(TweenMax.fromTo(e, 0.3, { opacity: 0 }, { opacity: 1 }), 0),
      n.add(
        TweenMax.fromTo(
          e,
          0.45,
          { scale: 0.8 },
          { scale: 1, ease: Back.easeOut }
        ),
        0
      ),
      n
    );
  }
  function g() {
    function e() {
      (o = !0), TweenMax.killTweensOf(c), t();
    }
    function n() {
      (o = !1), clearTimeout(i);
    }
    function t() {
      if (o) {
        r++, r >= c.length && (r = 0);
        var e = c.eq(r);
        TweenMax.fromTo(e, 0.7, { opacity: 0 }, { opacity: 1 }),
          TweenMax.fromTo(
            e,
            5,
            { scale: 1.2, zIndex: 1, display: "block" },
            { scale: 1, ease: Sine.easeOut }
          ),
          clearTimeout(i),
          (i = setTimeout(function() {
            c.not(e).hide(), e.css({ zIndex: 0 }), t();
          }, 4500));
      }
    }
    var o,
      i,
      a = $(".index_top"),
      c = a.find(".index_top_bgs > div"),
      r = -1;
    return { activate: e, deactivate: n };
  }
  function y() {
    function e() {
      s.on("click", t);
    }
    function n() {
      s.off("click", t), c && c.hide();
    }
    function t(e) {
      e.preventDefault(),
        (c = $(this).next()),
        i(c),
        setTimeout(function() {
          b.on("click", o), s.off("click", t);
        }, 100);
    }
    function o(e) {
      a(c), (c = null), b.off("click", o), s.on("click", t);
    }
    function i(e) {
      TweenMax.fromTo(
        e,
        0.35,
        { display: "block", scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, ease: Back.easeOut }
      );
    }
    function a(e) {
      TweenMax.to(e, 0.1, { display: "none", scale: 0.8, opacity: 0 });
    }
    var c,
      r = $(".index_about_points"),
      s = r.find(".js-zoom");
    r.find("dd");
    return { activate: e, deactivate: n };
  }
  function T() {
    $(".index_shops_links").each(function() {});
  }
  function M(e) {
    function n() {
      a.addClass("hover");
    }
    function t() {
      a.removeClass("hover");
    }
    var o = $(e),
      i = o.attr("data-hover-for"),
      a = $(i);
    o.on({ mouseenter: n, mouseleave: t });
  }
  var k = $(window),
    b = $("body"),
    z = !1;
  !(function() {
    var e = _.template($("#tmpl_index_shops").html()),
      n = (function(e) {
        return {
          items: e.toArray().map(function(e, n) {
            var t = $(e);
            return {
              href: t.find("a").attr("href"),
              bgSrc: t.find(".bg").attr("src"),
              title: t.find(".title").attr("alt"),
              titleSrc: t.find(".title").attr("src"),
              y: 324 * n
            };
          })
        };
      })($(".index_shops li")),
      t = e(n);
    $(".index_shops").html(t);
  })();
  var O,
    C = window.ZKZK.cookie,
    D = window.ZKZK._GET,
    I = (function() {
      function e(e) {
        if (
          ($(".index_top .index_section_bg").css({
            height: window.innerHeight
          }),
          $(".nav_buttons").removeClass("-shrink -shrinked"),
          e && (!C.get("visited") || D.intro))
        )
          return void (c = f.open().then(function() {
            r.activate(), d.activate(), s.activate(!0);
          }));
        f.skip(), r.activate(), s.activate(), d.activate();
      }
      function n() {
        var e = $.Deferred();
        return c
          ? c
              .then(function() {
                c = null;
              })
              .then(n)
          : ($(".index_top .index_section_bg").css({ height: "auto" }),
            $(".index_top_logo").hide(),
            r.deactivate(),
            s.deactivate(),
            d.deactivate(),
            e.resolve());
      }
      var c,
        r = t(),
        s = a(),
        f = i(),
        d = o();
      return { open: e, close: n };
    })(),
    P = (function() {
      function e() {
        o.activate(), i.activate(), T(), k.on("scroll", t);
      }
      function n() {
        var e = $.Deferred();
        return o.deactivate(), i.deactivate(), k.off("scroll", t), e.resolve();
      }
      function t() {
        k.off("scroll", t),
          $(".nav_buttons").addClass("-shrink"),
          setTimeout(function() {
            $(".nav_buttons").addClass("-shrinked");
          }, 250);
      }
      var o = y(),
        i = g();
      return { open: e, close: n };
    })(),
    A = !0;
  k.on("resize", e), e();
  var S = window.ZKZK.responsiveManager;
  S.on("change", n),
    n(S.getCurrentId()),
    FastClick.attach(document.body),
    (function() {
      $("[data-hover-for]").each(function() {
        M(this);
      });
    })(),
    (function() {
      $(".js-news_slider").slick({
        centerMode: !0,
        slidesToShow: 1,
        centerPadding: "100px",
        arrows: !0,
        speed: 800,
        autoplay: !0,
        autoplaySpeed: 4e3,
        cssEase: "ease-in-out",
        prevArrow:
          '<a href="" class="arrow-go-prev"><svg><use xlink:href="#icon-arrow-left"></use></svg></a>',
        nextArrow:
          '<a href="" class="arrow-go-next"><svg><use xlink:href="#icon-arrow-right"></use></svg></a>',
        responsive: [{ breakpoint: 800, settings: { centerPadding: 0 } }]
      }),
        $(document).on("click", ".overlay-go-prev, .arrow-go-prev", function(
          e
        ) {
          e.preventDefault(), $(".js-news_slider").slick("slickPrev");
        }),
        $(document).on("click", ".overlay-go-next, .arrow-go-next", function(
          e
        ) {
          e.preventDefault(), $(".js-news_slider").slick("slickNext");
        }),
        Array.prototype.slice.call($(".backgrounds")).forEach(function(e, n) {
          var t = $(e),
            o = t.find(".backgrounds-img"),
            i = o.data("src"),
            a = o.data("srcpc");
          if (
            "none" != t.css("display") &&
            (o.removeClass("is_img_loaded"), (i = a))
          ) {
            o.css({ "background-image": "url(" + i + ")" });
            var c = new Image();
            (c.src = i),
              $(c).on({
                load: function() {
                  o.addClass("is_img_loaded");
                }
              });
          }
        });
    })();
})();
