
let category = 'Vše',
    cart = JSON.parse(localStorage.getItem('digitio_new_cart_v2') || '[]');

const money = n => n.toLocaleString('cs-CZ') + ' Kč';

function save() {
    localStorage.setItem('digitio_new_cart_v2', JSON.stringify(cart));
    document.getElementById('count').textContent = cart.length;
}

function render() {
    document.getElementById('filters').innerHTML = [
        'Vše',
        'Finance',
        'Podnikatelské plánování',
        'Marketing'
    ].map(c => `
        <button class="chip ${category === c ? 'active' : ''}"
                onclick="category='${c}';render()">
            ${c}
        </button>
    `).join('');

    const q = document.getElementById('search').value.toLowerCase();

    let filtered = products.filter(p =>
        (category === 'Vše' || p.cat === category) &&
        (p.name.toLowerCase().includes(q) ||
         p.desc.toLowerCase().includes(q))
    );

    document.getElementById('catalogCount').textContent =
        `${products.length} kolekcí šablon s obrázkovými ukázkami ve 3 kategoriích.`;

    document.getElementById('grid').innerHTML = filtered.map(p => `
        <article class="product">
            <div class="art">
                <img loading="lazy" src="${p.images[0]}" alt="${p.name}">
            </div>

            <div class="body">
                <div class="muted">
                    ${p.cat} · ${p.images.length} náhledů
                </div>

                <h3>${p.name}</h3>
                <p class="muted">${p.desc}</p>

                <div class="price">${money(p.price)}</div>

                <button class="btn secondary" onclick="details(${p.id})">
                    Zobrazit detail
                </button>
            </div>
        </article>
    `).join('') || '<div class="empty">Žádné produkty nenalezeny.</div>';
}

function openPanel(html) {
    document.getElementById('panelContent').innerHTML = html;
    document.getElementById('overlay').classList.add('open');
}

function closePanel() {
    document.getElementById('overlay').classList.remove('open');
}

function purchased(id) {
    return JSON.parse(
        localStorage.getItem('digitio_new_orders_v2') || '[]'
    ).some(o => o.items.includes(id));
}

function details(id) {
    const bundle = bundles.find(b => b.id === id);
    if (bundle) return bundleDetails(id);
    let p = allProducts.find(x => x.id === id),
        owned = purchased(id);

    openPanel(`
        <h2>${p.name}</h2>

        <p class="muted">
            ${p.cat} · ${p.images.length} náhledů
        </p>

        <p>${p.desc}</p>

        <div class="gallery">
            ${p.images.map((src, i) => `
                <div class="preview">
                    <img loading="lazy"
                         src="${src}"
                         alt="Náhled ${i + 1}"
                         draggable="false">

                    <span class="watermark">
                        DIGITIO · NÁHLED
                    </span>
                </div>
            `).join('')}
        </div>

        <p class="gallery-note">
            ${owned
                ? 'Demo objednávka dokončena. Soubory obrázků lze nyní stáhnout.'
                : 'Před objednávkou jsou dostupné pouze náhledy. Stažení se odemkne po dokončení demo objednávky.'}
        </p>

        <h2>${money(p.price)}</h2>

        ${owned
            ? `<button class="btn" style="width:100%"
                       onclick="downloadProduct(${id})">
                   ⬇ Stáhnout obrázky kolekce
               </button>`
            : `<button class="btn" style="width:100%"
                       onclick="add(${id})">
                   Přidat do košíku
               </button>`}
    `);
}

function downloadProduct(id) {
    const bundle = bundles.find(b => b.id === id);
    if (bundle) {
        if (!purchased(id)) return bundleDetails(id);
        startDownload(`downloads/balicek-${id}.zip`, `Digitio-${id}-${bundle.name.replace(/[^a-zA-Z0-9]/g, '-')}.zip`);
        return;
    }
    if (!purchased(id)) {
        details(id);
        return;
    }

    const p = allProducts.find(x => x.id === id);

    if (!p) return;

    const a = document.createElement('a');

    a.href = `downloads/produkt-${String(id).padStart(2, '0')}.zip`;
    a.download = `Digitio-${String(id).padStart(2, '0')}.zip`;

    document.body.appendChild(a);
    a.click();
    a.remove();
}

// Each document is an individual entitlement included in the bundle price.
function bundleDocumentFile(id, index) {
    const b = bundles.find(p => p.id === id);
    return b?.documents?.[index]?.file || null;
}
function startDownload(path, filename) {
    const a = document.createElement('a');
    a.href = path;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
}
function downloadBundleDocument(id, index) {
    if (!purchased(id)) return bundleDetails(id);
    const file = bundleDocumentFile(id, index);
    if (file) startDownload(`downloads/${file}`, file);
}
function bundleDocumentsHtml(id) {
    const bundle = bundles.find(b => b.id === id);
    if (!bundle) return '';
    return `<div class="bundle-downloads">
        <p><b>Všechny dokumenty z balíčku jsou zahrnuty v ceně:</b></p>
        ${bundle.documents.map((doc, index) => `<div class="item">
            <span>📄 ${escapeHtml(doc.name)} <span class="muted">· DOCX</span></span>
            <button class="btn secondary" onclick="downloadBundleDocument(${id}, ${index})">Stáhnout</button>
        </div>`).join('')}
        <button class="btn" style="width:100%;margin-top:12px" onclick="downloadProduct(${id})">⬇ Stáhnout celý balíček (ZIP)</button>
    </div>`;
}

function add(id) {
    cart.push(id);
    save();
    showCart();
}

function removeItem(i) {
    cart.splice(i, 1);
    save();
    showCart();
}

function showCart() {
    let sum = cart.reduce(
        (s, id) => s + allProducts.find(p => p.id === id).price,
        0
    );

    openPanel(`
        <h2>🛒 Nákupní košík</h2>

        ${cart.length
            ? cart.map((id, i) => {
                let p = allProducts.find(x => x.id === id);

                return `
                    <div class="item">
                        <div>
                            <b>${p.icon} ${p.name}</b>
                            <div class="muted">${money(p.price)}</div>
                            ${p.bundle ? `<div class="muted">Obsahuje: ${p.items.join(' + ')} · bez příplatku</div>` : ''}
                        </div>

                        <button class="close" onclick="removeItem(${i})">
                            Odebrat
                        </button>
                    </div>
                `;
            }).join('') + `
                <h2>Celkem: ${money(sum)}</h2>

                <button class="btn"
                        style="width:100%"
                        onclick="checkout()">
                    Pokračovat k objednávce →
                </button>
            `
            : '<div class="empty">Váš košík je prázdný.</div>'}
    `);
}

function checkout() {
    if (!cart.length) return showCart();

    let sum = cart.reduce(
        (s, id) => s + allProducts.find(p => p.id === id).price,
        0
    );

    openPanel(`
        <h2>Dokončení demo objednávky</h2>

        <p class="muted">
            1. Košík → 2. Údaje → 3. Potvrzení
        </p>

        <form onsubmit="placeOrder(event)">
            <label>Jméno a příjmení</label>

            <input class="field"
                   id="customer"
                   required
                   minlength="2"
                   placeholder="Jan Novák">

            <label>E-mail</label>

            <input class="field"
                   id="email"
                   type="email"
                   required
                   placeholder="jan@example.cz">

            <label>Způsob platby</label>

            <select class="field">
                <option>
                    Simulovaná online platba (demo)
                </option>
            </select>

            <div class="notice">
                Souhrn: ${cart.length} položek ·
                <b>${money(sum)}</b>
                <br>
                Žádná skutečná platba neproběhne.
            </div>

            <label style="display:flex;gap:8px;align-items:start">
                <input type="checkbox" required>
                Rozumím, že jde pouze o demo objednávku.
            </label>

            <button class="btn"
                    style="width:100%;margin-top:20px"
                    type="submit">
                Dokončit demo objednávku
            </button>
        </form>
    `);
}

function placeOrder(e) {
    e.preventDefault();

    let orders = JSON.parse(
        localStorage.getItem('digitio_new_orders_v2') || '[]'
    );

    let order = {
        number: 'D' + Date.now().toString().slice(-8),
        name: document.getElementById('customer').value,
        email: document.getElementById('email').value,
        items: [...cart],
        date: new Date().toLocaleString('cs-CZ'),
        total: cart.reduce(
            (s, id) => s + allProducts.find(p => p.id === id).price,
            0
        )
    };

    orders.unshift(order);

    localStorage.setItem(
        'digitio_new_orders_v2',
        JSON.stringify(orders)
    );

    cart = [];
    save();

    openPanel(`
        <h2>✅ Demo objednávka dokončena</h2>

        <div class="notice">
            <b>Číslo objednávky: ${order.number}</b>
            <br>
            Celkem: ${money(order.total)}
            <br>
            Stav: Demo dokončeno
        </div>

        <p>
            Děkujeme, ${escapeHtml(order.name)}!
            Dokumenty zakoupených balíčků a dostupné soubory jednotlivých produktů si můžete stáhnout níže:
        </p>

        ${order.items.map(id => {
            let p = allProducts.find(x => x.id === id);

            return `
                <div class="item">
                    <span>${p.icon} ${p.name}</span>
                    ${p.bundle ? `<button class="btn secondary" onclick="downloadProduct(${id})">Stáhnout celý balíček</button>` : `
                    <button class="btn secondary" onclick="downloadProduct(${id})">Stáhnout</button>`}
                </div>
                ${p.bundle ? bundleDocumentsHtml(id) : ''}
            `;
        }).join('')}

        <p class="muted">
            Jde o simulovanou objednávku bez skutečné platby.
            U samostatných původních produktů se stahují obrázkové náhledy. Balíčky obsahují nově připravené editovatelné šablony DOCX. Přístup je pouze ukázkový, neproběhla skutečná platba.
        </p>
    `);
}

function escapeHtml(s) {
    return s.replace(
        /[&<>"']/g,
        c => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        }[c])
    );
}

function showOrders() {
    let orders = JSON.parse(
        localStorage.getItem('digitio_new_orders_v2') || '[]'
    );

    openPanel(`
        <h2>📋 Moje objednávky</h2>

        <p class="muted">
            Demo objednávky uložené v tomto prohlížeči.
        </p>

        ${orders.length
            ? orders.map(o => `
                <div class="notice">
                    <b>${o.number}</b> · ${o.date}
                    <br>
                    ${escapeHtml(o.name)} · ${escapeHtml(o.email)}
                    <br>
                    ${o.items.length} položek · ${money(o.total)}
                    <br>
                    Stav: demo dokončeno

                    ${o.items.map(id => `
                        <div class="item">
                            <span>
                                ${allProducts.find(p => p.id === id)?.name || 'Produkt'}
                            </span>

                            <button class="btn secondary" onclick="downloadProduct(${id})">Stáhnout</button>
                        </div>
                        ${allProducts.find(p => p.id === id)?.bundle ? bundleDocumentsHtml(id) : ''}
                    `).join('')}
                </div>
            `).join('')
            : '<div class="empty">Zatím nemáte žádné objednávky.</div>'}
    `);
}

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closePanel();
});

function renderBundles() {
    document.getElementById('bundleGrid').innerHTML = bundles.map((b, i) => `
        <article class="bundle-card">
            <div class="bundle-icon">${b.icon}</div>
            <div class="bundle-label">Balíček ${i + 1}</div>
            <h2>${b.name}</h2>
            <ul>${b.items.map(item => `<li>${item}</li>`).join('')}</ul>
            <div class="bundle-bottom">
                <div class="bundle-price">${money(b.price)}</div>
                <button class="btn" onclick="add(${b.id})">Přidat do košíku →</button>
                <button class="bundle-detail" onclick="bundleDetails(${b.id})">Zobrazit detail</button>
            </div>
        </article>
    `).join('');
}

function bundleDetails(id) {
    const b = bundles.find(p => p.id === id);
    if (!b) return;
    openPanel(`
        <div class="bundle-icon">${b.icon}</div>
        <h2>${b.name}</h2>
        <p>${b.desc}</p>
        <h3>Co balíček obsahuje</h3>
        <ul class="bundle-items">${b.items.map(i => `<li>${i}</li>`).join('')}</ul>
        <p class="muted">V ceně jsou všechny 3 editovatelné šablony DOCX. Po dokončení demo objednávky je můžete stáhnout jednotlivě nebo jako ZIP.</p>
        <h2>${money(b.price)}</h2>
        ${purchased(b.id)
            ? bundleDocumentsHtml(b.id)
            : `<button class="btn" style="width:100%" onclick="add(${b.id})">Přidat do košíku</button>`}
    `);
}

function showSection(section, updateHash = true) {
    const isBundles = section === 'bundles';
    document.getElementById('bundles').hidden = !isBundles;
    document.getElementById('catalog').hidden = isBundles;
    document.getElementById('hero').hidden = isBundles;
    document.getElementById('bundlesTab').classList.toggle('active', isBundles);
    document.getElementById('siteNotice').hidden = isBundles;
    if (updateHash) history.replaceState(null, '', isBundles ? '#balicky' : '#produkty');
    if (!isBundles) render();
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function openCatalogFromSearch() {
    if (document.getElementById('catalog').hidden) showSection('catalog');
    render();
}

document.getElementById('search').oninput = openCatalogFromSearch;
window.addEventListener('hashchange', () => showSection(location.hash === '#balicky' ? 'bundles' : 'catalog', false));
save();
render();
renderBundles();
if (location.hash === '#balicky') showSection('bundles', false);
