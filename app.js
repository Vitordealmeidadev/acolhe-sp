/* ------------------------------------------------------------------
   1. HAMBURGER MENU — toggle mobile nav
------------------------------------------------------------------ */
const hamburger   = document.getElementById('hamburger');
const mobileMenu  = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
});

function closeMenu() {
  mobileMenu.classList.remove('open');
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', false);
}

/* ------------------------------------------------------------------
   2. SCROLL REVEAL — Intersection Observer para animar elementos
------------------------------------------------------------------ */
const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // anima só uma vez
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));

/* ------------------------------------------------------------------
   3. BARRA DE PROGRESSO — anima ao carregar a página
------------------------------------------------------------------ */
window.addEventListener('load', () => {
  setTimeout(() => {
    const fill = document.getElementById('progressFill');
    if (fill) fill.style.width = '63%';
  }, 600);
});

/* ------------------------------------------------------------------
   4. CONTADOR ANIMADO — números do hero
------------------------------------------------------------------ */
function animateCounter(el, target, prefix = '', suffix = '') {
  const duration = 1800;
  const start    = performance.now();

  function update(now) {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // easing out cubic
    const eased    = 1 - Math.pow(1 - progress, 3);
    const current  = Math.floor(eased * target);

    el.textContent = prefix + current.toLocaleString('pt-BR') + suffix;

    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = prefix + target.toLocaleString('pt-BR') + suffix;
  }

  requestAnimationFrame(update);
}

// Dispara os contadores quando o hero entra em cena
const heroSection = document.querySelector('.hero');
const heroObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    animateCounter(document.getElementById('stat-pessoas'),  1240);
    animateCounter(document.getElementById('stat-ongs'),     12);
    animateCounter(document.getElementById('stat-doacoes'),  47200, 'R$ ');
    heroObserver.disconnect();
  }
}, { threshold: 0.3 });
heroObserver.observe(heroSection);

/* ------------------------------------------------------------------
   5. MODAL DE DOAÇÃO
------------------------------------------------------------------ */
const overlay         = document.getElementById('modalOverlay');
let   selectedAmount  = null;

/**
 * Abre o modal e define qual causa será exibida
 * @param {string} causeName - Nome da causa de doação
 */
function openModal(causeName) {
  document.getElementById('modalCause').textContent = causeName;
  overlay.classList.add('active');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden'; // bloqueia scroll
  // Foca no modal para acessibilidade
  setTimeout(() => overlay.querySelector('.modal__close').focus(), 100);
}

/** Fecha o modal */
function closeModal() {
  overlay.classList.remove('active');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  // Reset
  document.querySelectorAll('.modal__amount-btn').forEach(b => b.classList.remove('selected'));
  document.getElementById('customAmount').value = '';
  document.getElementById('donorName').value    = '';
  document.getElementById('donorEmail').value   = '';
  selectedAmount = null;
}

// Fecha ao clicar no overlay (fora do card)
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) closeModal();
});

// Fecha com Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && overlay.classList.contains('active')) closeModal();
});

/**
 * Seleciona um valor pré-definido
 * @param {HTMLElement} btn - Botão clicado
 * @param {number} amount   - Valor em reais
 */
function selectAmount(btn, amount) {
  document.querySelectorAll('.modal__amount-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  selectedAmount = amount;
  document.getElementById('customAmount').value = '';
}

/** Processa o envio da doação (mock — sem back-end) */
function submitDonation() {
  const custom = parseFloat(document.getElementById('customAmount').value);
  const amount = custom > 0 ? custom : selectedAmount;
  const name   = document.getElementById('donorName').value.trim();
  const email  = document.getElementById('donorEmail').value.trim();
  const cause  = document.getElementById('modalCause').textContent;

  // Validações básicas
  if (!amount || amount < 5) {
    alert('Por favor, selecione ou insira um valor mínimo de R$ 5.');
    return;
  }
  if (!name) {
    alert('Por favor, informe seu nome.');
    return;
  }
  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    alert('Por favor, informe um e-mail válido.');
    return;
  }

  /* * PONTO DE INTEGRAÇÃO:
   * Aqui você integra com um gateway de pagamento real, como:
   * - Stripe, PagSeguro, Mercado Pago, Gerencianet, etc.
   * Por ora, exibimos uma confirmação mock.
   */
  closeModal();
  setTimeout(() => {
    alert(
      `🎉 Obrigado, ${name}!\n\n` +
      `Sua doação de R$ ${amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} ` +
      `para "${cause}" foi registrada.\n\n` +
      `Você receberá um recibo em ${email}.\n\n` +
      `Juntos somos mais fortes. ❤️`
    );
  }, 200);
}

/* ------------------------------------------------------------------
   6. HEADER — sombra ao rolar
------------------------------------------------------------------ */
const headerEl = document.querySelector('header');
window.addEventListener('scroll', () => {
  headerEl.style.boxShadow = window.scrollY > 10
    ? '0 2px 20px rgba(26,92,107,0.12)'
    : 'none';
}, { passive: true });