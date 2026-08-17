/* ==========================================================================
   EXCELSIOR CONSULTANCY SERVICES — behaviour
   --------------------------------------------------------------------------
   No dependencies. Everything is wrapped in an IIFE.

   CONTENTS
     1. Line splitter        — wraps each visual line of a heading in a mask
     2. Entrance preparation — tags elements for reveal
     3. IntersectionObserver — staggered reveals, one observer
     4. The plate            — draws in, then parallax
     5. Scroll-linked        — progress bar + photo parallax (rAF, smoothed)
     6. Counters             — the four Record figures
     7. Menu                 — mobile nav
     8. Form                 — client-side validation only (see note)

   All motion is skipped when the visitor prefers reduced motion.
   ========================================================================== */

(function(){
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var raf = window.requestAnimationFrame;

  /* =========================================================
     1. LINE SPLITTER
     Wraps each visual line of a heading in a mask so the line
     can slide up from behind it. Re-runs on resize because
     line breaks move. Inline <em> is preserved.
     ========================================================= */
  function splitLines(el){
    if(!el.dataset.orig) el.dataset.orig = el.innerHTML;
    el.innerHTML = el.dataset.orig;

    var words = [];
    (function walk(node, em){
      Array.prototype.slice.call(node.childNodes).forEach(function(n){
        if(n.nodeType === 3){
          n.textContent.split(/\s+/).forEach(function(t){
            if(t) words.push({t:t, em:em});
          });
        } else if(n.nodeType === 1){
          if(n.tagName === 'BR'){ words.push({br:true}); return; }
          walk(n, em || n.tagName === 'EM');
        }
      });
    })(el, false);

    el.innerHTML = words.map(function(w){
      if(w.br) return '<br>';
      var t = w.em ? '<em>' + w.t + '</em>' : w.t;
      return '<span class="w" style="display:inline-block">' + t + '</span>';
    }).join(' ');

    /* group words into visual lines by their vertical offset */
    var spans = Array.prototype.slice.call(el.querySelectorAll('.w'));
    if(!spans.length) return;
    var lines = [], last = null;
    spans.forEach(function(sp){
      var top = sp.offsetTop;
      if(last === null || Math.abs(top - last) > 4){ lines.push([]); last = top; }
      lines[lines.length - 1].push(sp);
    });

    el.innerHTML = lines.map(function(line){
      var html = line.map(function(sp){ return sp.innerHTML; }).join(' ');
      return '<span class="ln"><span class="ln-i">' + html + '</span></span>';
    }).join('');

    /* each line follows the one above it */
    Array.prototype.slice.call(el.querySelectorAll('.ln-i')).forEach(function(n, k){
      n.style.transitionDelay = (k * 0.085) + 's';
    });
    el.classList.add('split');
  }

  var heads = Array.prototype.slice.call(
    document.querySelectorAll('h1, .band-head h2, .stmt, .solo-name')
  );
  if(!reduce) heads.forEach(splitLines);

  /* re-split when the layout reflows */
  var rt;
  window.addEventListener('resize', function(){
    if(reduce) return;
    clearTimeout(rt);
    rt = setTimeout(function(){
      heads.forEach(function(el){
        var wasIn = el.classList.contains('in');
        splitLines(el);
        if(wasIn) el.classList.add('in');
      });
    }, 220);
  });

  /* =========================================================
     2. PREPARE ELEMENTS FOR ENTRANCE
     ========================================================= */
  if(!reduce){
    /* prose, eyebrows and links mask up */
    document.querySelectorAll(
      '.band-head .lede, .band-head .eyebrow, .hero .lede, .hero .eyebrow,' +
      '.hero-links, .stmt-sub, .solo .role, .solo-body p, .solo-body .tlink,' +
      '.hero-foot span, .det, .field, .form > div, .form > p'
    ).forEach(function(el){ el.classList.add('up'); });

    /* rows arrive one after another */
    document.querySelectorAll('.disc, .journal, .sect, .stmt-rule')
      .forEach(function(g){ g.classList.add('stag'); });

    /* grid tiles */
    document.querySelectorAll('.record > div, .method article, .file')
      .forEach(function(el){ el.classList.add('tile'); });

    /* a hairline that draws itself above each list */
    document.querySelectorAll('.disc, .journal').forEach(function(g){
      var l = document.createElement('span');
      l.className = 'drawline';
      g.appendChild(l);
    });
  }

  /* =========================================================
     3. ONE OBSERVER, STAGGERED CHILDREN
     ========================================================= */
  function reveal(el){
    el.classList.add('in');

    var kids = null;
    if(el.classList.contains('stag')) kids = el.children;
    if(el.classList.contains('record') || el.classList.contains('method') || el.classList.contains('files'))
      kids = el.querySelectorAll('.tile');

    if(kids){
      Array.prototype.slice.call(kids).forEach(function(k, i){
        k.style.transitionDelay = (i * 0.075) + 's';
        k.classList.add('in');
      });
    }
  }

  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(!e.isIntersecting) return;
      io.unobserve(e.target);
      reveal(e.target);
    });
  }, {threshold:0.14, rootMargin:'0px 0px -60px 0px'});

  var watched = document.querySelectorAll(
    '.rv, .split, .up, .stag, .drawline, .record, .method, .files, .solo-fig'
  );
  Array.prototype.slice.call(watched).forEach(function(el){
    reduce ? reveal(el) : io.observe(el);
  });

  /* the hero should not wait to be scrolled to */
  setTimeout(function(){
    document.querySelectorAll('.hero .split, .hero .up, .hero-foot span')
      .forEach(function(el, i){
        el.style.transitionDelay = (0.15 + i * 0.07) + 's';
        el.classList.add('in');
      });
  }, 120);

  /* =========================================================
     4. THE PLATE — draws in, then tracks the scroll
     ========================================================= */
  var plate = document.getElementById('plate');
  var photo = document.getElementById('photo');
  setTimeout(function(){ plate.classList.add('in'); }, 260);

  /* =========================================================
     5. SCROLL-LINKED: progress hairline + plate parallax
     Values are smoothed so nothing snaps.
     ========================================================= */
  var bar = document.getElementById('progress');
  var head = document.getElementById('head');
  var target = 0, current = 0, ticking = false;

  function measure(){
    var doc = document.documentElement;
    var max = doc.scrollHeight - window.innerHeight;
    target = max > 0 ? window.scrollY / max : 0;
    head.classList.toggle('stuck', window.scrollY > 60);
    if(!ticking){ ticking = true; raf(loop); }
  }

  function loop(){
    current += (target - current) * 0.09;
    bar.style.transform = 'scaleX(' + current.toFixed(4) + ')';

    if(plate && !reduce){
      var r = plate.getBoundingClientRect();
      if(r.bottom > 0 && r.top < window.innerHeight){
        var p = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
        plate.style.transform = 'translate3d(0,' + (p * -34).toFixed(2) + 'px,0)';
      }
    }

    /* the statement photograph drifts slowly behind the text */
    if(photo && !reduce){
      var pr = photo.parentNode.getBoundingClientRect();
      if(pr.bottom > 0 && pr.top < window.innerHeight){
        var q = (pr.top + pr.height / 2 - window.innerHeight / 2) / window.innerHeight;
        photo.style.transform = 'translate3d(0,' + (q * 52).toFixed(2) + 'px,0) scale(1.06)';
      }
    }

    if(Math.abs(target - current) > 0.0004){ raf(loop); }
    else { ticking = false; }
  }

  measure();
  window.addEventListener('scroll', measure, {passive:true});
  window.addEventListener('resize', measure);

  /* =========================================================
     6. RECORD FIGURES
     ========================================================= */
  var rio = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(!e.isIntersecting) return;
      rio.unobserve(e.target);
      e.target.querySelectorAll('.n').forEach(function(el, i){
        var to  = parseInt(el.dataset.to, 10),
            pre = el.dataset.prefix || '',
            sfx = el.dataset.suffix || '';
        if(reduce){ el.textContent = pre + to + sfx; return; }
        setTimeout(function(){
          var t0 = performance.now(), dur = 1500;
          (function tick(now){
            var p = Math.min((now - t0) / dur, 1),
                eased = 1 - Math.pow(1 - p, 5);
            el.textContent = pre + Math.round(to * eased) + sfx;
            if(p < 1) raf(tick);
          })(t0);
        }, 260 + i * 130);
      });
    });
  }, {threshold:0.4});
  var rec = document.querySelector('.record');
  if(rec) rio.observe(rec);

  /* =========================================================
     7. MENU
     ========================================================= */
  var btn = document.getElementById('menuBtn'), nav = document.getElementById('nav');
  btn.addEventListener('click', function(){
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
    btn.textContent = open ? 'Close' : 'Menu';
  });
  nav.addEventListener('click', function(e){
    if(e.target.tagName === 'A'){
      nav.classList.remove('open');
      btn.textContent = 'Menu';
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  /* =========================================================
     8. FORM — demo only, nothing is sent anywhere
     ========================================================= */
  var form = document.getElementById('form'), status = document.getElementById('status');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    var name = form.elements['name'].value.trim(),
        mail = form.elements['email'].value.trim();
    if(!name || !mail || mail.indexOf('@') < 0){
      status.style.color = '#C4907A';
      status.textContent = 'Add your name and a valid email to send this.';
      return;
    }
    status.style.color = '#8FBDB1';
    status.textContent = 'Sent — we will reply within one working day.';
    form.reset();
  });
})();
