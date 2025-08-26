// You can add your JavaScript code here
console.log("Welcome to");

document.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector('img[usemap="#image-map"], img[usemap="#sekolah-map"], img[usemap="#asrama-map"]');
    // Detect which map is present
    let mapSelector = '';
    let mapType = '';
    if (document.querySelector('map[name="image-map"]')) {
        mapSelector = 'map[name="image-map"] area';
        mapType = 'main';
    } else if (document.querySelector('map[name="sekolah-map"]')) {
        mapSelector = 'map[name="sekolah-map"] area';
        mapType = 'sekolah';
    } else if (document.querySelector('map[name="asrama-map"]')) {
        mapSelector = 'map[name="asrama-map"] area';
        mapType = 'asrama';
    }
    const areas = document.querySelectorAll(mapSelector);

    // Info for each area (add more as needed)
    const areaInfo = {
        "Kawasan Perumahan": "Kawasan Perumahan",
        "Kawasan Memanah": "Kawasan Memanah",
        "Gelanggang Bola Jaring": "Gelanggang Bola Jaring",
        "Gelanggang Bola Keranjang": "Gelanggang Bola Keranjang",
        "Padang SAKTI": "Padang SAKTI",
        "Kebun belakang Aspuri": "Kebun Durian",
        "Kawasan Asrama SAKTI": "Kawasan Asrama SAKTI",
        "Sekolah": "Sekolah: School Building",
        "Pagar Utama dan Pondok Pengawal": "Pagar Utama dan Pondok Pengawal",
        "Tanki Air": "Tanki Air",
        "Surau al-Jawaher": "Surau al-Jawaher",
        // SEKOLAH MAP
        "Bengkel RBT": "Bengkel RBT",
        "Blok C": "Blok C",
        "Blok B": "Blok B",
        "Blok A": "Blok A",
        "Cafeteria SAKTI": "Cafeteria SAKTI",
        "Dewan Seri Penawar": "Dewan Seri Penawar",
        "Pondok Bas": "Garage",
        "Pagar Utama SAKTI dan Pondok kawalan Keselamatan": "Pagar Utama & Pondok Kawalan",
        "Taman Sains SAKTI": "Taman Sains SAKTI",
        "Kawasan Gazebo Dhuha dan Meja Batu": "Gazebo Dhuha & Meja Batu",
        "Kebun": "Kebun",
        // ASRAMA MAP
        "Takraw": "Takraw",
        "Futsal / Bola Jaring / Bola Baling": "Futsal / Bola Jaring / Bola Baling",
        "Bola Tampar": "Bola Tampar: Volleyball Court",
        "Bola Keranjang": "Bola Keranjang",
        "Asrama Puteri": "Asrama Puteri",
        "Dewan Seri Balau / Dewan Makan": "Dewan Seri Balau / Dewan Makan",
        "Asrama Putera": "Asrama Putera",
        "Dataran Hicom": "Dataran Hicom",
        "Pondok": "Pondok"
    };

    const areaMoreInfo = {
        "Kawasan Perumahan": "Kawasan ini merupakan tempat tinggal staf dan guru.",
        "Kawasan Memanah": "Tempat latihan memanah untuk pelajar dan aktiviti kokurikulum.",
        "Gelanggang Bola Jaring": "Digunakan untuk aktiviti bola jaring dan latihan sukan.",
        "Gelanggang Bola Keranjang": "Tempat pelajar bermain bola keranjang.",
        "Padang SAKTI": "Padang utama untuk acara padang dan sukan. Terkenal dengan sukan<br>kriket (STUNNERS), ragbi (GLADIATORS) dan bola sepak (MAGISTA).<hr><img src='images/kriket.jpg' style='width:300px'>",
        "Kebun belakang Aspuri": "Kebun durian Ustaz Arsam.",
        "Kawasan Asrama SAKTI": "Kawasan asrama untuk pelajar lelaki dan perempuan.",
        "Sekolah": "Bangunan utama untuk pembelajaran.",
        "Pagar Utama dan Pondok Pengawal": "Pintu masuk utama dan pondok pengawal keselamatan.",
        "Tanki Air": "Tanki air utama untuk kegunaan sekolah.",
        "Surau al-Jawaher": "Surau untuk beribadah, belajar dan aktiviti kerohanian<hr><img src='images/yaasin.jpg' style='width:300px'>",
        "Bengkel RBT": "Bengkel Rekabentuk dan Teknologi untuk kelas praktikal.",
        "Blok C": `
            (Dari kiri peta ke kanan peta)
        <br><br>
        <strong>Tingkat 4:</strong> Tandas | 1 Mutiara | 4 Mutiara | 3 Mutiara | 2 Mutiara | Tandas
        <br>
        <strong>Tingkat 3:</strong> Tandas | Bilik Media | Perpustakaan | 2 Intan | 2 Nilam | Tandas
        <br>
        <strong>Tingkat 2:</strong> Tandas | Bilik Guru | BOPP | Makmal Komputer | Tandas
        <br>
        <strong>Tingkat 1:</strong> Tandas | 5 Baiduri | 5 Delima | 4 Nilam | 4 Baiduri | 3 Baiduri | 2 Baiduri | Tandas
        <hr>
        <img src=images/3muttandas.jpg style="width:200px">
    `,
        "Blok B": `
              (Dari kiri peta ke kanan peta)
        <br><br>
        <strong>Tingkat 4:</strong> 1 Intan | 1 Nilam | Bilik Studio | Bilik Abad | Bilik Seminar 2 | Tandas
        <br>
        <strong>Tingkat 3:</strong> 3 Delima | 2 Delima | Bilik SPBT | 5 Intan | 4 Intan | 1 Baiduri | Tandas
        <br>
        <strong>Tingkat 2:</strong> Bilik Disiplin | One Stop Centre | Bilik Pengetua | Pejabat | Tandas
        <br>
        <strong>Tingkat 1:</strong> Bilik Kesihatan | Koperasi | Galeri SAKTI | 5 Nilam | Bilik Kaunseling | Tandas
    `,
        "Blok A": `
           (Dari kiri peta ke kanan peta)
           <br><br>
        <strong>Tingkat 4:</strong> Bilik Mesyauarat Desaru | Bilik Frog | Bilik Seminar 3 | Tandas
        <br>
        <strong>Tingkat 3:</strong> Makmal Fizik 1 | Makmal Fizik 2 | 3 Intan | 3 Nilam | Tandas
        <br>
        <strong>Tingkat 2:</strong> Makmal Biologi 1 | Makmal Biologi 2 | 5 Mutiara | Bilik Muzik | Tandas
        <br>
        <strong>Tingkat 1:</strong> Makmal Kimia 1 | Makmal Kimia 2 | Bilik Seni | Tandas
        `,
        "Cafeteria SAKTI": "Kantin sekolah untuk pelajar dan staf.",
        "Dewan Seri Penawar": "Dewan utama untuk acara rasmi.",
        "Pondok Bas": "Tempat parkir bas & van sekolah.",
        "Pagar Utama SAKTI dan Pondok kawalan Keselamatan": "Pintu masuk utama sekolah.",
        "Taman Sains SAKTI": "Taman sains untuk aktiviti STEM.",
        "Kawasan Gazebo Dhuha dan Meja Batu": "Kawasan rehat dan belajar luar kelas.",
        "Kebun": "Kebun sekolah untuk projek pertanian.",
        "Takraw": "Gelanggang sepak takraw.",
        "Futsal / Bola Jaring / Bola Baling": "Gelanggang pelbagai guna.<hr><img src='images/court futsal.jpg' style='width:300px'><br><img src='images/boja.jpg' style='width:300px'>",
        "Bola Tampar": "Gelanggang bola tampar.",
        "Bola Keranjang": "Gelanggang bola keranjang.<hr><img src='images/basketball.jpg' style='width:300px'>",
        "Asrama Puteri": "Asrama untuk pelajar perempuan.<hr><img src='images/pelanasrama2.jpg' style='width:500px'>",
        "Dewan Seri Balau / Dewan Makan": "Dewan makan dan dewan serbaguna.<hr><img src='images/makanberadat.jpg' style='width:300px'>",
        "Asrama Putera": "Asrama untuk pelajar lelaki.<hr><img src='images/pelanasrama2.jpg' style='width:500px'>",
        "Dataran Hicom": "Dataran untuk perhimpunan dan aktiviti luar.",
        "Pondok": "Pondok rehat pelajar.",
        "Hutan PIBG": "Hutan PIBG: Kawasan hutan untuk aktiviti luar dan ekologi. <hr><img src='images/hutanpibg.jpg' style='width:300px'>", 
        "Tapak Perkhemahan": "Tapak Perkhemahan: Hutan ini telah dijadikan sebagai tapak<br>perkhemahan perdana sejak tahun 2023 dan kemudian diperluaskan<br>pada tahun berikutnya untuk menampung lebih ramai pelajar.<hr><img src='images/camping.jpg' style='width:300px'> <img src='images/bendera.jpg' style='height:200px'>"
    };

    // Create info box if missing
    let infoBox = document.querySelector('.info-box');
    if (!infoBox) {
        infoBox = document.createElement('div');
        infoBox.className = 'info-box';
        // make sure it does NOT receive pointer events while used as hover tooltip
        infoBox.style.pointerEvents = 'none';   // changed from 'auto' to 'none'
        infoBox.style.position = 'absolute';
        infoBox.style.zIndex = '10000';
        document.body.appendChild(infoBox);

        // prevent clicks inside infoBox from propagating to document (still safe to have)
        infoBox.addEventListener('click', (ev) => {
            ev.stopPropagation();
        });
    }

    // Helper to get center of poly/rect
    function getAreaCenter(area) {
        let coords = area.coords.split(',').map(Number);
        let centerX = 0, centerY = 0;
        if (area.shape === "poly" && coords.length >= 2) {
            let xs = [], ys = [];
            for (let i = 0; i < coords.length; i += 2) {
                xs.push(coords[i]);
                ys.push(coords[i+1]);
            }
            centerX = xs.reduce((a,b)=>a+b,0)/xs.length;
            centerY = ys.reduce((a,b)=>a+b,0)/ys.length;
        } else if (area.shape === "rect" && coords.length === 4) {
            centerX = (coords[0] + coords[2]) / 2;
            centerY = (coords[1] + coords[3]) / 2;
        }
        return {x: centerX, y: centerY};
    }

    // Canvas for glowing outline
    let outlineCanvas = null;

    function showOutlineGlow(area, img) {
        if (outlineCanvas) outlineCanvas.remove();
        outlineCanvas = document.createElement('canvas');
        outlineCanvas.style.position = 'absolute';
        outlineCanvas.style.pointerEvents = 'none';
        outlineCanvas.style.left = `${img.offsetLeft}px`;
        outlineCanvas.style.top = `${img.offsetTop}px`;
        outlineCanvas.width = img.width;
        outlineCanvas.height = img.height;
        outlineCanvas.style.width = `${img.width}px`;
        outlineCanvas.style.height = `${img.height}px`;
        outlineCanvas.style.zIndex = '9999';
        img.parentNode.appendChild(outlineCanvas);

        const ctx = outlineCanvas.getContext('2d');
        let coords = area.coords.split(',').map(Number);
        let scaleX = img.width / img.naturalWidth;
        let scaleY = img.height / img.naturalHeight;

        // Animation variables
        let frame = 0;
        let maxFrames = 80;
        let animId;

        function drawGlow(progress) {
            ctx.clearRect(0, 0, outlineCanvas.width, outlineCanvas.height);

            // Animate shadowBlur and lineWidth
            let shadowBlur = 25 + 30 * Math.sin(progress * Math.PI);
            let lineWidth = 6 + 8 * Math.sin(progress * Math.PI);

            // Animate gradient color stops
            let gradient = ctx.createLinearGradient(0, 0, outlineCanvas.width, outlineCanvas.height);
            gradient.addColorStop(0, `rgba(0,234,255,${0.7 + 0.3 * Math.sin(progress * Math.PI)})`);
            gradient.addColorStop(1, `rgba(189,0,255,${0.7 + 0.3 * Math.cos(progress * Math.PI)})`);

            ctx.save();
            ctx.shadowColor = "rgba(189, 0, 255, 0.7)";
            ctx.shadowBlur = shadowBlur;
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = gradient;

            if (area.shape === "poly" && coords.length >= 4) {
                ctx.beginPath();
                ctx.moveTo(coords[0] * scaleX, coords[1] * scaleY);
                for (let i = 2; i < coords.length; i += 2) {
                    ctx.lineTo(coords[i] * scaleX, coords[i + 1] * scaleY);
                }
                ctx.closePath();
                ctx.stroke();
            } else if (area.shape === "rect" && coords.length === 4) {
                ctx.strokeRect(
                    coords[0] * scaleX,
                    coords[1] * scaleY,
                    (coords[2] - coords[0]) * scaleX,
                    (coords[3] - coords[1]) * scaleY
                );
            } else if (area.shape === "circle" && coords.length === 3) {
                ctx.beginPath();
                ctx.arc(
                    coords[0] * scaleX,
                    coords[1] * scaleY,
                    coords[2] * ((scaleX + scaleY) / 2),
                    0,
                    2 * Math.PI
                );
                ctx.stroke();
            }
            ctx.restore();
        }

        function animateGlow() {
            let progress = frame / maxFrames;
            drawGlow(progress);
            frame++;
            if (frame <= maxFrames) {
                animId = requestAnimationFrame(animateGlow);
            } else {
                outlineCanvas.style.transition = "opacity 3s ease 1s";
                outlineCanvas.style.opacity = "0";
                setTimeout(() => { if (outlineCanvas) outlineCanvas.remove(); }, 4000);
            }
        }

        outlineCanvas.style.opacity = "1";
        animateGlow();
    }

    // New helper to close the expanded info box and remove the glow
    let suppressHover = false; // when true, hover/tooltips won't re-open after X-close
    function closeInfo() {
        infoBox.style.opacity = 0;
        infoBox.style.display = 'none';
        infoBox.style.left = '-9999px';
        infoBox.style.top = '-9999px';
        infoBox.style.fontSize = "1rem";
        infoBox.style.padding = "8px 14px";
        infoBox.style.pointerEvents = 'none'; // ensure hover works again after close
        enlarged = false;
        suppressHover = true; // temporarily suppress immediate hover reopen

        // Clear outline if present
        if (outlineCanvas) {
            outlineCanvas.remove();
            outlineCanvas = null;
        }

        // Allow hover/tooltips again after a short delay so user can move mouse
        setTimeout(() => {
            suppressHover = false;
        }, 250);
    }

    let enlarged = false;

    areas.forEach(area => {
        // Only zoom and redirect for Sekolah and Kawasan Asrama SAKTI in main map
        if (mapType === 'main' && (area.alt === "Sekolah" || area.alt === "Kawasan Asrama SAKTI")) {
            area.addEventListener('click', function(e) {
                e.preventDefault();
                if (!img) return;
                const center = getAreaCenter(area);
                const scale = 2.2;
                const originX = (center.x / img.naturalWidth) * 100;
                const originY = (center.y / img.naturalHeight) * 100;
                img.style.transition = 'transform 0.4s cubic-bezier(.4,2,.6,1)';
                img.style.transformOrigin = `${originX}% ${originY}%`;
                img.style.transform = `scale(${scale})`;
                setTimeout(() => {
                    img.style.transform = '';
                    if (area.alt === "Sekolah") {
                        window.location.href = "sekolah.html";
                    } else {
                        window.location.href = "asrama.html";
                    }
                }, 400);
            });
        }

        area.addEventListener('mousemove', (e) => {
            // do not show hover while an area is enlarged OR if user closed with X
            if (enlarged || suppressHover) return;
            infoBox.innerHTML = `<strong>${areaInfo[area.alt] || area.title || "Info"}</strong>`;
            infoBox.style.opacity = 1;
            infoBox.style.display = "block";
            infoBox.style.fontSize = "1rem";
            infoBox.style.padding = "8px 14px";
            infoBox.style.left = "-9999px";
            infoBox.style.top = "-9999px";
            const boxRect = infoBox.getBoundingClientRect();
            let x = e.pageX + 15;
            let y = e.pageY + 15;
            if (x + boxRect.width > window.innerWidth) x = window.innerWidth - boxRect.width - 10;
            if (y + boxRect.height > window.innerHeight) y = e.pageY - boxRect.height - 15;
            if (y < 0) y = 10;
            infoBox.style.left = x + 'px';
            infoBox.style.top = y + 'px';
        });
        area.addEventListener('mouseleave', () => {
            if (!enlarged) infoBox.style.opacity = 0;
        });

        area.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation(); // <- prevent the opening click from bubbling and immediately closing
            // clicking an area to open resets the suppressHover guard
            suppressHover = false;
            if (!enlarged) {
                // add a close button to the expanded info box
                infoBox.innerHTML = `
                    <button class="info-close" aria-label="Close" style="
                        position:absolute;top:8px;right:8px;
                        background:transparent;border:none;color:#fff;font-size:20px;cursor:pointer;
                        pointer-events:auto;
                    ">✕</button>
                    <strong>${areaInfo[area.alt] || area.title || "Info"}</strong>
                    <br>
                    <span style="font-size:0.95rem;display:block;margin-top:8px;color:#eee;">
                        ${areaMoreInfo[area.alt] || ""}
                    </span>
                `;
                // ensure the info box is displayed and positioned
                infoBox.style.opacity = 1;
                infoBox.style.display = "block";
                infoBox.style.fontSize = "1.3rem";
                infoBox.style.padding = "16px 22px";
                infoBox.style.left = "-9999px";
                infoBox.style.top = "-9999px";
                // enable clicks on the info box (so the X button works)
                infoBox.style.pointerEvents = 'auto';
                // position & zIndex already set when created
                const boxRect = infoBox.getBoundingClientRect();
                let x = e.pageX + 15;
                let y = e.pageY + 15;
                if (x + boxRect.width > window.innerWidth) x = window.innerWidth - boxRect.width - 10;
                if (y + boxRect.height > window.innerHeight) y = e.pageY - boxRect.height - 15;
                if (y < 0) y = 10;
                infoBox.style.left = x + 'px';
                infoBox.style.top = y + 'px';
                enlarged = true;

                // wire up the close button (stop propagation so click doesn't affect other handlers)
                const closeBtn = infoBox.querySelector('.info-close');
                if (closeBtn) {
                    closeBtn.addEventListener('click', (ev) => {
                        ev.stopPropagation();
                        closeInfo();
                    });
                }

                // Make images inside the expanded info box open fullscreen on click
                const imgs = infoBox.querySelectorAll('img');
                imgs.forEach(img => {
                    img.style.cursor = 'zoom-in';
                    // remove previous listeners if any (defensive)
                    img.replaceWith(img.cloneNode(true));
                });
                // re-query after replacement to attach fresh listeners
                infoBox.querySelectorAll('img').forEach(img => {
                    img.addEventListener('click', (ev) => {
                        ev.stopPropagation();
                        openImageFullscreen(img);
                    });
                });

                // Only show glow if NOT kawasan sekolah or kawasan asrama in main map
                if (
                    (mapType === 'main' && area.alt !== "Sekolah" && area.alt !== "Kawasan Asrama SAKTI") ||
                    mapType === 'sekolah' ||
                    mapType === 'asrama'
                ) {
                    showOutlineGlow(area, img);
                }
            }
            // when enlarged, clicking the area (or elsewhere) will NOT close the info box
        });
    });

    // Close the expanded info box when clicking anywhere outside it
    document.addEventListener('click', (e) => {
        if (enlarged && infoBox && !infoBox.contains(e.target)) {
            closeInfo();
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const menuContainer = document.querySelector('.menu-container');
    const menuBtn = document.querySelector('.menu-btn');
    if (menuBtn && menuContainer) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            menuContainer.classList.toggle('open');
        });
        document.addEventListener('click', () => {
            menuContainer.classList.remove('open');
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.querySelector('.toggle-theme');
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');
    let isDark = localStorage.getItem('theme') === 'dark';

    function applyTheme() {
        document.body.classList.toggle('dark', isDark);
        document.body.classList.toggle('light', !isDark);

        if (isDark) {
            sunIcon.classList.remove('show');
            moonIcon.classList.add('show');
        } else {
            moonIcon.classList.remove('show');
            sunIcon.classList.add('show');
        }
    }

    if (themeBtn && sunIcon && moonIcon) {
        themeBtn.addEventListener('click', () => {
            isDark = !isDark;
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            applyTheme();
        });
        applyTheme();
    }
});

// Disable theme transition on first load
document.body.classList.add('disable-theme-transition');

window.addEventListener('DOMContentLoaded', () => {
    // After a short delay, re-enable transitions
    setTimeout(() => {
        document.body.classList.remove('disable-theme-transition');
    }, 50);
});

function openImageFullscreen(imgEl) {
    // Try Fullscreen API on a wrapper (better for consistent background)
    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.alignItems = 'center';
    wrapper.style.justifyContent = 'center';
    wrapper.style.background = 'rgba(0,0,0,0.95)';
    wrapper.style.width = '100%';
    wrapper.style.height = '100%';
    wrapper.style.position = 'fixed';
    wrapper.style.top = '0';
    wrapper.style.left = '0';
    wrapper.style.zIndex = '999999';
    wrapper.style.cursor = 'zoom-out';

    const clone = document.createElement('img');
    clone.src = imgEl.src;
    clone.style.maxWidth = '95%';
    clone.style.maxHeight = '95%';
    clone.style.boxShadow = '0 10px 30px rgba(0,0,0,0.6)';
    wrapper.appendChild(clone);

    // Close helper
    function removeWrapper() {
        if (document.fullscreenElement) {
            document.exitFullscreen().catch(()=>{}); // ignore errors
        }
        if (wrapper.parentNode) wrapper.parentNode.removeChild(wrapper);
        document.removeEventListener('keydown', onKey);
        document.removeEventListener('fullscreenchange', onFsChange);
    }
    function onKey(e) {
        if (e.key === 'Escape') removeWrapper();
    }
    function onFsChange() {
        if (!document.fullscreenElement) {
            // fullscreen exited, ensure wrapper removed
            removeWrapper();
        }
    }

    // Fallback: append wrapper and try to request fullscreen on it
    document.body.appendChild(wrapper);
    wrapper.addEventListener('click', removeWrapper);
    document.addEventListener('keydown', onKey);
    document.addEventListener('fullscreenchange', onFsChange);

    // Try to request fullscreen; if not allowed or rejected, overlay remains and is clickable
    const req = wrapper.requestFullscreen ? wrapper.requestFullscreen() : Promise.reject();
    req.catch(()=>{ /* ignore rejection, overlay is already visible */ });
}