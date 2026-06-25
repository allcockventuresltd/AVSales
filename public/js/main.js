/* ============================================================
   AV Sales Consultancy — main.js
   ============================================================ */

/* ----------------------------------------------------------
   NAV: scroll behaviour + hamburger
   ---------------------------------------------------------- */
const nav        = document.getElementById('nav');
const hamburger  = document.getElementById('hamburger');
const mobileNav  = document.getElementById('mobileNav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

hamburger.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('open');
  hamburger.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', String(open));
});

function closeMobileNav() {
  mobileNav.classList.remove('open');
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
}

/* Close mobile nav when clicking outside */
document.addEventListener('click', (e) => {
  if (!nav.contains(e.target)) closeMobileNav();
});

/* ----------------------------------------------------------
   FADE-UP on scroll (IntersectionObserver)
   ---------------------------------------------------------- */
const fadeEls = document.querySelectorAll('.fade-up');

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

fadeEls.forEach(el => fadeObserver.observe(el));

/* ----------------------------------------------------------
   STATS COUNT-UP ANIMATION
   ---------------------------------------------------------- */
const statEls = document.querySelectorAll('[data-target]');

function animateCount(el) {
  const target   = parseInt(el.dataset.target, 10);
  const suffix   = el.dataset.suffix || '';
  const prefix   = el.dataset.prefix || '';
  const textVal  = el.dataset.text;

  /* Special case: text value (e.g. "Multi-Million") */
  if (textVal) {
    el.textContent = prefix + textVal;
    return;
  }

  const duration = 1500;
  const start    = performance.now();

  function update(now) {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    /* Ease-out cubic */
    const eased    = 1 - Math.pow(1 - progress, 3);
    const current  = Math.round(eased * target);
    el.textContent = prefix + current + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCount(entry.target);
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

statEls.forEach(el => statsObserver.observe(el));

/* ----------------------------------------------------------
   CONTACT FORM
   ---------------------------------------------------------- */
const form       = document.getElementById('contactForm');
const submitBtn  = document.getElementById('submitBtn');
const formSuccess = document.getElementById('formSuccess');

function setError(inputId, errorId, show) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);
  if (!input || !error) return;
  input.classList.toggle('error', show);
  error.classList.toggle('visible', show);
  input.setAttribute('aria-invalid', String(show));
}

function validateEmail(val) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
}

function validateForm() {
  let valid = true;

  const name    = document.getElementById('name').value.trim();
  const email   = document.getElementById('email').value.trim();
  const company = document.getElementById('company').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name)               { setError('name',    'nameError',    true);  valid = false; }
  else                     { setError('name',    'nameError',    false); }

  if (!validateEmail(email)) { setError('email',  'emailError',   true);  valid = false; }
  else                       { setError('email',  'emailError',   false); }

  if (!company)            { setError('company', 'companyError', true);  valid = false; }
  else                     { setError('company', 'companyError', false); }

  if (!message)            { setError('message', 'messageError', true);  valid = false; }
  else                     { setError('message', 'messageError', false); }

  return valid;
}

/* Clear errors on input */
['name', 'email', 'company', 'message'].forEach(id => {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener('input', () => {
      const errorId = id + 'Error';
      if (id === 'email') {
        if (validateEmail(el.value.trim())) setError(id, errorId, false);
      } else {
        if (el.value.trim()) setError(id, errorId, false);
      }
    });
  }
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending…';

  const payload = {
    name:    document.getElementById('name').value.trim(),
    email:   document.getElementById('email').value.trim(),
    company: document.getElementById('company').value.trim(),
    phone:   document.getElementById('phone').value.trim(),
    message: document.getElementById('message').value.trim(),
  };

  try {
    const res  = await fetch('/contact', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(payload),
    });
    const data = await res.json();

    if (data.success) {
      form.reset();
      formSuccess.classList.add('visible');
      submitBtn.style.display = 'none';
      formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
      throw new Error('Server returned failure');
    }
  } catch {
    submitBtn.disabled = false;
    submitBtn.innerHTML = 'Send Message <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>';
    alert('Something went wrong. Please try emailing us directly at hello@avsalesconsultancy.co.uk');
  }
});

/* ----------------------------------------------------------
   SMOOTH SCROLL for anchor links (fallback for older Safari)
   ---------------------------------------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const id = link.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
