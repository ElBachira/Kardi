document.addEventListener('DOMContentLoaded', function() {

    const audio = document.getElementById('song-player'); 
    const preloader = document.getElementById('preloader');
    
    const clickSound = new Audio('https://www.fesliyanstudios.com/play-mp3/387');
    const swooshSound = new Audio('https://www.fesliyanstudios.com/play-mp3/570');
    
    document.querySelectorAll('.tab-button, .close-btn, .links-grid a, .player-ctrl-btn').forEach(element => {
        element.addEventListener('click', () => {
            if (element.matches('.links-grid a')) {
                swooshSound.currentTime = 0;
                swooshSound.play().catch(e => console.log("Error al reproducir swoosh:", e));
            } else {
                clickSound.currentTime = 0;
                clickSound.play().catch(e => console.log("Error al reproducir click:", e));
            }
        });
    });

    document.querySelectorAll('.typewriter').forEach((element, index) => {
        const text = element.innerHTML;
        element.innerHTML = '';
        element.style.opacity = 1;
        let i = 0;
        setTimeout(() => {
            const typing = setInterval(() => {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typing);
                }
            }, 25);
        }, 500 + index * 100); 
    });

    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const xOffset = (clientX / innerWidth - 0.5) * -2;
        const yOffset = (clientY / innerHeight - 0.5) * -2;
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.body.style.backgroundPosition = `calc(50% + ${xOffset}%) calc(50% + ${yOffset}%)`;
        }
    });

    const tabButtons = document.querySelectorAll('.tab-button');
    const closeButtons = document.querySelectorAll('.close-btn');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const paneId = button.dataset.tab;
            document.getElementById(paneId).classList.add('active');
            if (paneId === 'stats-tab') { animateStats(); }
        });
    });
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.closest('.overlay-pane').classList.remove('active');
        });
    });
    function animateStats() {
        const bars = document.querySelectorAll('.overlay-pane.active .fill');
        bars.forEach(bar => {
            bar.style.transition = 'none';
            bar.style.width = '0%';
            void bar.offsetWidth; 
            bar.style.transition = 'width 1s ease-in-out';

            let rawVal = bar.getAttribute('data-p');
            if(rawVal) {
                const percentage = rawVal.replace('%', '').trim();
                setTimeout(() => {
                    bar.style.width = percentage + '%';
                }, 50);
            }
        });
    }
    
    // =================================================================
    // === CONFIGURACIÓN DE CANCIONES ===
    // =================================================================
    const songs = [
        {
            title: "Golden Brown",
            artist: "The Stranglers",
            src: "song.mp3",
            lyrics: [
                  { time: 20, line: "Oro marrón, textura de sol" },
{ time: 25, line: "Me tumba al suelo, mi mente escapó" },
{ time: 28, line: "Toda la noche" },
{ time: 30, line: "Sin pelear" },
{ time: 32, line: "Nada va mal... con mi oro marrón" },
{ time: 40, line: "Cada vez, igual que ayer" },
{ time: 44, line: "En su barco, atado al mástil voy" },
{ time: 47, line: "A tierras lejanas" },
{ time: 50, line: "Me toma las manos" },
{ time: 51, line: "Nada va mal... con mi oro marrón" },
{ time: 76, line: "Oro marrón, fina tentación" },
{ time: 80, line: "Por los siglos viaja hacia el oeste" },
{ time: 84, line: "Viene de lejos" },
{ time: 85, line: "Un día se queda" },
{ time: 87, line: "Nada va mal... con mi oro marrón" },
{ time: 171, line: "Nunca hay dolor... (nunca hay dolor)" },
{ time: 174, line: "(Nunca hay dolor) con mi oro marrón (con mi oro marrón)" },
{ time: 178, line: "(Con mi oro marrón) nunca hay dolor (nunca hay dolor)" },
{ time: 182, line: "(Nunca hay dolor) con mi oro marrón (con mi oro marrón)" },
{ time: 185, line: "(Con mi oro marrón) nunca hay dolor (nunca hay dolor)" },
{ time: 190, line: "(Nunca hay dolor) con mi oro marrón (con mi oro marrón)" },
{ time: 194, line: "(Con mi oro marrón) nunca hay dolor (nunca hay dolor)" },
{ time: 198, line: "(Nunca hay dolor) con mi oro marrón..." }
                  // ... Puedes añadir más líneas aquí ...
            ]
        },
        {
            title: "Army Dreamers", 
            artist: "Kate Bush", 
            src: "song2.mp3",
            lyrics: [
                  { "time": 7, "line": "(Jóvenes soñadores)" },
  { "time": 10, "line": "(El héroe de mami)" },
  { "time": 15, "line": "(B-F-P-O)" },
  { "time": 21, "line": "(El héroe de mami)" },
  { "time": 22, "line": "Mi soldadito," },
  { "time": 25, "line": "vuelve a casa desde B-F-P-O." },
  { "time": 28, "line": "Tenemos un ramo de flores moradas," },
  { "time": 29, "line": "para adornar al héroe de mami." },
  { "time": 32, "line": "Luto en el aeródromo," },
  { "time": 35, "line": "aunque el día es cálido, él yace frío." },
  { "time": 38, "line": "Cuatro hombres de uniforme," },
  { "time": 39, "line": "traen a casa a mi pequeño soldado." },
  { "time": 42, "line": "(¿Qué podía hacer? Debió ser una estrella de rock)" },
  { "time": 45, "line": "Pero no tenía dinero para una guitarra." },
  { "time": 48, "line": "(¿Qué podía hacer? Debió ser un político)" },
  { "time": 50, "line": "Pero nunca tuvo una buena educación." },
  { "time": 52, "line": "(¿Qué podía hacer? Debió haber sido padre)" },
  { "time": 55, "line": "Pero ni siquiera llegó a los veinte años." },
  { "time": 58, "line": "Qué desperdicio," },
  { "time": 60, "line": "jóvenes soñadores del ejército." },
  { "time": 62, "line": "Ooh, qué desperdicio de" },
  { "time": 64, "line": "jóvenes soñadores." },
  { "time": 65, "line": "(Soñadores)" },
  { "time": 68, "line": "Lágrimas sobre una caja de metal." },
  { "time": 70, "line": "Oh, Dios mío, él no podía saberlo." },
  { "time": 73, "line": "Como un pollo frente a un zorro," },
  { "time": 76, "line": "no ganaría la guerra solo con su ego." },
  { "time": 78, "line": "Denle al niño las mejores insignias," },
  { "time": 81, "line": "y denle todas sus barras y medallas." },
  { "time": 83, "line": "Ahora él yace en su agujero," },
  { "time": 85, "line": "le daría igual tener botones y lazos." },
  { "time": 88, "line": "(¿Qué podía hacer? Debió ser una estrella de rock)" },
  { "time": 91, "line": "Pero no tenía dinero para una guitarra." },
  { "time": 93, "line": "(¿Qué podía hacer? Debió ser un político)" },
  { "time": 95, "line": "Pero nunca tuvo una buena educación." },
  { "time": 97, "line": "(¿Qué podía hacer? Debió haber sido padre)" },
  { "time": 101, "line": "Pero ni siquiera llegó a los veinte años." },
  { "time": 104, "line": "Qué desperdicio," },
  { "time": 105, "line": "jóvenes soñadores del ejército." },
  { "time": 108, "line": "Ooh, qué desperdicio de" },
  { "time": 110, "line": "jóvenes soñadores." },
  { "time": 111, "line": "(Soñadores)" },
  { "time": 113, "line": "Ooh, qué desperdicio de" },
  { "time": 114, "line": "todos esos jóvenes soñadores." },
  { "time": 115, "line": "(Soñadores)" },
  { "time": 115, "line": "Jóvenes soñadores (soñadores)," },
  { "time": 119, "line": "jóvenes soñadores (soñadores)." },
  { "time": 136, "line": "(El héroe de mami)" },
  { "time": 142, "line": "(B-F-P-O)" },
  { "time": 146, "line": "(El héroe de mami)" },
  { "time": 152, "line": "(B-F-P-O)" },
  { "time": 174, "line": "(No (son) héroes 'rudos')" },
  { "time": 177, "line": "(El héroe de mami)" }
                  // ... Puedes añadir más líneas aquí ...
            ]
        }
    ];

    let currentSongIndex = 0;
    let currentLyricIndex = -1;

    const playPauseBtn = document.getElementById('play-pause-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const songTitleEl = document.getElementById('song-title');
    const songArtistEl = document.getElementById('song-artist');
    const spotifyIcon = document.querySelector('.spotify-icon');
    const lyricsContainer = document.getElementById('lyrics-contai);
    
    const playIcon = '<i class="fas fa-play"></i>';
    const pauseIcon = '<i class="fas fa-pause"></i>';

    function loadSong(songIndex) {
        const song = songs[songIndex];
        audio.src = song.src;
        songTitleEl.textContent = song.title;
        songArtistEl.textContent = song.artist;
        loadLyrics(song.lyrics);
        audio.pause();
        playPauseBtn.innerHTML = playIcon;
        spotifyIcon.classList.remove('is-spinning');
    }

    function loadLyrics(lyrics) {
        lyricsContainer.innerHTML = ''; 
        currentLyricIndex = -1; 

        if (!lyrics || lyrics.length === 0) {
            lyricsContainer.innerHTML = '<p class="lyric-line active">♪ No hay letra para esta canción ♪</p>';
            return;
        }

        lyrics.forEach((line, index) => {
            const p = document.createElement('p');
            p.textContent = line.line;
            p.classList.add('lyric-line');
            p.dataset.index = index; 
            lyricsContainer.appendChild(p);
        });
        
        lyricsContainer.style.transform = `translateY(0px)`;
    }

    playPauseBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play().catch(e => console.error("Error al intentar reproducir:", e));
            playPauseBtn.innerHTML = pauseIcon;
            spotifyIcon.classList.add('is-spinning');
        } else {
            audio.pause();
            playPauseBtn.innerHTML = playIcon;
            spotifyIcon.classList.remove('is-spinning');
        }
    });

    prevBtn.addEventListener('click', () => {
        currentSongIndex--;
        if (currentSongIndex < 0) {
            currentSongIndex = songs.length - 1; 
        }
        loadSong(currentSongIndex);
        audio.play().catch(e => console.error("Error al intentar reproducir:", e)); 
        playPauseBtn.innerHTML = pauseIcon;
        spotifyIcon.classList.add('is-spinning');
    });

    nextBtn.addEventListener('click', () => {
        currentSongIndex++;
        if (currentSongIndex >= songs.length) {
            currentSongIndex = 0; 
        }
        loadSong(currentSongIndex);
        audio.play().catch(e => console.error("Error al intentar reproducir:", e)); 
        playPauseBtn.innerHTML = pauseIcon;
        spotifyIcon.classList.add('is-spinning');
    });

    audio.addEventListener('ended', () => {
        nextBtn.click(); 
    });

    audio.addEventListener('timeupdate', () => {
        const currentTime = audio.currentTime;
        const lyrics = songs[currentSongIndex].lyrics;

        if (!lyrics || lyrics.length === 0) return; 

        let newActiveIndex = -1;
        for (let i = lyrics.length - 1; i >= 0; i--) {
            if (currentTime >= lyrics[i].time) {
                newActiveIndex = i;
                break;
            }
        }

        if (newActiveIndex === currentLyricIndex) {
            return;
        }

        currentLyricIndex = newActiveIndex;

        lyricsContainer.querySelectorAll('.lyric-line').forEach(lineEl => {
            lineEl.classList.remove('active');
        });

        if (currentLyricIndex !== -1) {
            const activeLine = lyricsContainer.querySelector(`.lyric-line[data-index="${currentLyricIndex}"]`);
            if (activeLine) {
                activeLine.classList.add('active');
                const scrollOffset = activeLine.offsetTop - (100 / 2) + (activeLine.clientHeight / 2);
                lyricsContainer.style.transform = `translateY(-${scrollOffset}px)`;
            }
        } else {
            lyricsContainer.style.transform = `translateY(0px)`;
        }
    });

    loadSong(currentSongIndex);

    const fnafSticker=document.getElementById('fnaf-sticker');const honkSound=new Audio('https://www.myinstants.com/media/sounds/fnaf-nose-honk.mp3');fnafSticker.addEventListener('click',()=>{honkSound.currentTime=0;honkSound.play().catch(e => {})});
    const copyBtn = document.getElementById('copy-link-btn');
    const originalBtnText = copyBtn.innerHTML;
    copyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(window.location.href).then(() => {
            copyBtn.innerHTML = '<i class="fas fa-check"></i> ¡Copiado!';
            copyBtn.classList.add('copied');
            swooshSound.currentTime = 0;
            swooshSound.play().catch(err => {});
            setTimeout(() => {
                copyBtn.innerHTML = originalBtnText;
                copyBtn.classList.remove('copied');
            }, 2000);
        });
    });

    // OCULTAR PRELOADER AL FINAL
    preloader.classList.add('loaded');

});
