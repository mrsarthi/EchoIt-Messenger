/*
 * The hero's simulation of how a message travels in EchoIt. It runs entirely
 * in the page: nothing typed here is sent anywhere.
 *
 * What it shows is what the app does (privacy.html):
 *   1. the message is sealed on the sender's device;
 *   2. the first time, the connection helper introduces the two devices —
 *      it sees a device code, an internet address and a time, never the words;
 *   3. the sealed message goes straight to the other device, or, with the
 *      switch on, through the helper, still sealed;
 *   4. it is opened there and marked Read.
 */
(function () {
  var root = document.getElementById('sim');
  if (!root) return;
  var $ = function (id) { return document.getElementById(id); };
  var feeds = { a: $('sim-feed-a'), b: $('sim-feed-b') };
  var inputs = { a: $('sim-input-a'), b: $('sim-input-b') };
  var envelope = $('sim-envelope');
  var helper = $('sim-helper');
  var sees = $('sim-helper-sees');
  var relay = $('sim-relay');
  var steps = root.querySelectorAll('#sim-steps li');
  var heads = root.querySelectorAll('.sim-online');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var introduced = false;
  var busy = false;
  var suggestions = {
    a: ['Are we still on for chai at 6?', 'Sending the trip photos now', 'Call you after dinner?'],
    b: ['Yes! See you at the ghats', 'Got them, they look amazing', 'Sure, after 9 works'],
  };
  var turn = { a: 0, b: 0 };
  var wait = function (ms) { return new Promise(function (r) { setTimeout(r, reduce ? Math.min(ms, 150) : ms); }); };

  function step(name) {
    steps.forEach(function (li) { li.classList.toggle('on', li.dataset.step === name); });
  }
  function now() {
    var d = new Date();
    return d.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  }
  function bubble(feed, text, mine) {
    var row = document.createElement('div');
    row.className = 'sim-bubble ' + (mine ? 'mine' : 'theirs');
    var t = document.createElement('span');
    t.textContent = text;
    var meta = document.createElement('small');
    meta.textContent = now();
    row.appendChild(t);
    row.appendChild(meta);
    feed.appendChild(row);
    while (feed.children.length > 4) feed.removeChild(feed.firstChild);
    feed.scrollTop = feed.scrollHeight;
    return meta;
  }
  function typing(side, on) {
    // The other device's header shows "typing…" while this side types.
    var head = heads[side === 'a' ? 1 : 0];
    head.textContent = on ? 'typing…' : 'Online';
    head.classList.toggle('typing', on);
  }
  function place(fraction, down) {
    envelope.style.left = (fraction * 100) + '%';
    envelope.classList.toggle('down', !!down);
  }

  async function send(from) {
    if (busy) return;
    var to = from === 'a' ? 'b' : 'a';
    var text = inputs[from].value.trim() || suggestions[from][turn[from]++ % suggestions[from].length];
    inputs[from].value = '';
    typing(from, false);
    busy = true;
    root.classList.add('busy');
    var meta = bubble(feeds[from], text, true);
    var start = from === 'a' ? 0 : 1;
    var end = 1 - start;

    step('seal');
    meta.textContent = now() + ' · sealing';
    envelope.classList.add('no-move');
    place(start, false);
    void envelope.offsetWidth;
    envelope.classList.remove('no-move');
    envelope.classList.add('show');
    await wait(700);

    if (!introduced || relay.checked) {
      step('intro');
      helper.classList.add('busy');
      sees.innerHTML = 'Sees: device <b>' + (from === 'a' ? '8bf4ebc3…' : '03f5c993…') + '</b> · <b>171.61.x.x</b> · <b>' + now() + '</b><br>' +
        (relay.checked ? 'Passing along: <span class="sim-sealed">▇▇▇▇ ▇▇▇</span> — sealed, can&#39;t read it' : 'Introduces the two devices, then steps aside');
      await wait(1100);
      introduced = true;
    }

    step('send');
    meta.textContent = now() + (relay.checked ? ' · through the helper' : ' · sent directly');
    if (relay.checked) {
      place(0.5, true);
      await wait(700);
      place(end, false);
    } else {
      place(end, false);
    }
    await wait(900);
    helper.classList.remove('busy');
    envelope.classList.remove('show');
    if (!relay.checked) sees.textContent = 'Not involved — the devices are talking directly';

    bubble(feeds[to], text, false);
    meta.textContent = now() + ' · Delivered';
    await wait(900);
    step('read');
    meta.textContent = now() + ' · Read';
    meta.classList.add('read');
    busy = false;
    root.classList.remove('busy');
  }

  ['a', 'b'].forEach(function (side) {
    $('sim-form-' + side).addEventListener('submit', function (e) {
      e.preventDefault();
      send(side);
    });
    inputs[side].addEventListener('input', function () {
      typing(side, inputs[side].value.length > 0);
    });
    inputs[side].addEventListener('blur', function () { typing(side, false); });
  });
  var sendStep = $('sim-step-send');
  relay.addEventListener('change', function () {
    sendStep.textContent = relay.checked ? 'Passed along by the helper, still sealed' : 'Sent straight to the other device';
    sees.textContent = relay.checked
      ? 'Will pass the next message along, still sealed'
      : (introduced ? 'Not involved — the devices are talking directly' : 'Waiting…');
  });

  // A first message on its own, once the hero is on screen, so the idea lands
  // without anyone having to type — then it waits for the visitor.
  if (!reduce && 'IntersectionObserver' in window) {
    var started = false;
    new IntersectionObserver(function (entries, obs) {
      if (started || !entries[0].isIntersecting) return;
      started = true;
      obs.disconnect();
      setTimeout(function () { send('a'); }, 900);
    }, { threshold: 0.4 }).observe(root);
  }
})();
