class IcecastWeb extends HTMLElement {
    
    //Variablen erstellen
    audioElement = null;
    playButton = null;
    textFeld = null;
    root = null;
    volume = null;
    soundPicto = null;
    slider = null;
    lastVolume = 30;
    playable = false;
    firstplay = false;
    soundSVG = `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 9C16.5 9.5 17 10.5 17 12C17 13.5 16.5 14.5 16 15M19 6C20.5 7.5 21 10 21 12C21 14 20.5 16.5 19 18M13 3L7 8H5C3.89543 8 3 8.89543 3 10V14C3 15.1046 3.89543 16 5 16H7L13 21V3Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`;
    muteSVG = `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="#ffffff" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 9L22 15M22 9L16 15M13 3L7 8H5C3.89543 8 3 8.89543 3 10V14C3 15.1046 3.89543 16 5 16H7L13 21V3Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`;
    playSVG = `<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M15.0015 11.3344C15.3354 11.5569 15.5023 11.6682 15.5605 11.8085C15.6113 11.9311 15.6113 12.0689 15.5605 12.1915C15.5023 12.3318 15.3354 12.4431 15.0015 12.6656L11.2438 15.1708C10.8397 15.4402 10.6377 15.5749 10.4702 15.5649C10.3243 15.5561 10.1894 15.484 10.1012 15.3674C10 15.2336 10 14.9908 10 14.5052V9.49481C10 9.00923 10 8.76644 10.1012 8.63261C10.1894 8.51601 10.3243 8.44386 10.4702 8.43515C10.6377 8.42515 10.8397 8.55982 11.2438 8.82917L15.0015 11.3344Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`;
    pauseSVG = `<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.5 9V15M14.5 9V15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`;
    stopSVG = `<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 10.6C9 10.0399 9 9.75992 9.10899 9.54601C9.20487 9.35785 9.35785 9.20487 9.54601 9.10899C9.75992 9 10.0399 9 10.6 9H13.4C13.9601 9 14.2401 9 14.454 9.10899C14.6422 9.20487 14.7951 9.35785 14.891 9.54601C15 9.75992 15 10.0399 15 10.6V13.4C15 13.9601 15 14.2401 14.891 14.454C14.7951 14.6422 14.6422 14.7951 14.454 14.891C14.2401 15 13.9601 15 13.4 15H10.6C10.0399 15 9.75992 15 9.54601 14.891C9.35785 14.7951 9.20487 14.6422 9.10899 14.454C9 14.2401 9 13.9601 9 13.4V10.6Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`
    refreshGIF2 = `<svg version="1.1" width="30px" height="30px" id="sound" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
            <path fill="#000000" d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3
            c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z">
            <animateTransform 
                attributeName="transform" 
                attributeType="XML" 
                type="rotate"
                dur="2s" 
                from="0 50 50"
                to="360 50 50" 
                repeatCount="indefinite" />
            </path>
            <path fill="#000000" d="M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7
            c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z">
                <animateTransform 
                attributeName="transform" 
                attributeType="XML" 
                type="rotate"
                dur="1s" 
                from="0 50 50"
                to="-360 50 50" 
                repeatCount="indefinite" />
            </path>
            <path fill="#000000" d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5
            L82,35.7z">
                <animateTransform 
                attributeName="transform" 
                attributeType="XML" 
                type="rotate"
                dur="2s" 
                from="0 50 50"
                to="360 50 50" 
                repeatCount="indefinite" />
            </path>
        </svg>`;
    
    // The browser calls this method when the element is added to the DOM.
    constructor(){
        super();
        this.loadScripts();
    }
    
    //Lädt JQuery, ist eigentlich unnötig lol
    loadScripts(){
        const script1 = document.createElement('script');
        script1.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';
        this.appendChild(script1);
    }
    
    //Setzt die Variblen
    initControls(shadowRoot){
        this.audioElement = shadowRoot.getElementById('icecast-audio');
        this.playButton = shadowRoot.getElementById('playpause');
        this.textFeld = shadowRoot.getElementById('text');
        this.root = getComputedStyle(this).getPropertyValue('--percentage');
        //this.root = shadowRoot.querySelector(':root');
        this.volume = shadowRoot.getElementById('zahl');
        this.soundPicto = shadowRoot.getElementById('sound-picto');
        this.slider = shadowRoot.getElementById('volslider');
        if (this.audioElement === undefined) {
            console.log('NICHT GELADEN');
        }
        else{
            console.log('LADEN ERFOLGREICH');
            console.log(this.audioElement);
        }
    }
    
    //Setzt beim Seitenladen den Slider auf 30
    setStart(){
        this.audioElement.volume = 30 / 100;
        this.slider.value = 30;
        this.volume.innerHTML = this.slider.value; 
        console.log(this.slider.value);
    }
    
    //ruft die getTitle Funktion alle 5 Sekunden ab
    
    
    //Holt den Titel aus der status-json
    getTitle(ref) {
        fetch('https://schmalgsicht.de:8080/status-json.xsl')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text(); // Lade den Inhalt der XSL-Datei als Text
            
        })
        .then(data => {
            const request_data = JSON.parse(data);
            if (!(request_data.icestats.source.title === null))
                {
                    console.log(request_data.icestats.source.title);
                    var titel = request_data.icestats.source.title;
                    console.log(ref.textFeld);
                    if(ref.playable === true) {
                        ref.textFeld.textContent = 'Gerade läuft: ' + titel;
                    }
                }
            else
                {
                    console.log('Titel nicht gesetzt du Opfer!');
                    ref.textFeld.textContent = 'Stream Offline'; 
                }
        })
        .catch(error => {
            console.error('Fetch Error:', error);
            ref.textFeld.textContent = 'Stream Offline';
        });
    }
    
    //Lautstärkeregler bedienen
    setVolume(ref) {
        ref.audioElement.volume = ref.slider.value / 100;
        ref.volume.innerHTML = ref.slider.value;
    }
    
    //Mute-Schalter
    setMute(ref) {
        if(ref.slider.value > 0){
            ref.lastVolume = ref.slider.value;
            ref.slider.value = 0;
            ref.volume.innerHTML = ref.slider.value;
            ref.audioElement.volume = ref.slider.value;
            ref.soundPicto.innerHTML = ref.muteSVG;
            //this.handleRangeUpdate(slider)
        }
        else {
            ref.slider.value = ref.lastVolume;
            ref.volume.innerHTML = ref.slider.value;
            ref.audioElement.volume = ref.slider.value / 100;
            ref.soundPicto.innerHTML = ref.soundSVG;
            //this.handleRangeUpdate(slider)
        }
    }
    
    //Play-Button
    setPlay(ref){
        if (ref.audioElement.paused) {
            if (ref.firstplay === false) {
                this.setDownload();
            }
        } 
        else {
            if (ref.firstplay === false)
            {
                ref.audioElement.pause();
                ref.playButton.innerHTML = ref.playSVG;
                ref.playable = false;
            }
        }
    }
    
    //Wird aufgerufen, wenn der Stream gepre-loaded ist"
    setLoaded(ref) {
        ref.playButton.innerHTML = ref.playSVG;
        ref.textFeld.textContent = 'Klicke Play!';
        console.log("Stream Pre-Geladen");
    }
    
    //Wird aufgerufen, wenn der Stream läuft
    setPlayable(ref) {
        ref.playable = true;
        this.firstplay = false;
        ref.playButton.innerHTML = ref.pauseSVG;
        ref.getTitle(ref);
        //ref.textFeld.textContent = 'Klicke Play um Schmalgsicht.fm zu hören!';
        //console.log("Stream Geladen");
    }
    
    //Wird aufgerufen, wenn der Stream geladen wird
    setDownload() {
        this.firstplay = true;
        this.audioElement.load();
        this.playButton.innerHTML = this.refreshGIF2;
        this.textFeld.textContent = 'Stream wird geladen...';
        this.audioElement.play();
        console.log("Stream wird Geladen");
    }
    
    //Läd je nach Größe die richtige CSS
    loadCSS(shadowRoot) {
        let cssPath = '';
        var screenWidth = window.innerWidth;
        console.log("Größe" + screenWidth);
        //Laptop
        if (screenWidth >= 786) {
            cssPath = 'https://schmalgsicht.de/wp-content/plugins/SG_Player/style.css';
            console.log("Groß");
        }
        //Tablet
        else if (screenWidth > 360) {
            cssPath = 'https://schmalgsicht.de/wp-content/plugins/SG_Player/style_med.css';
            console.log("Mittel");
        }
        //Handy
        else {
            cssPath = 'https://schmalgsicht.de/wp-content/plugins/SG_Player/style_small.css';
            console.log("Klein");
        }
        
        const cssLink = document.createElement('link');
        cssLink.rel = 'stylesheet';
        cssLink.href = cssPath;
        const cont = shadowRoot.querySelector('div');
        cont.appendChild(cssLink);
    }

    
    //Alte Lautstärke-Funktion, aber geht nicht ka warum
    /*handleRangeUpdate(el, shadowRoot){
        if (el.target){
            el = el.target;
        }
        this.volume = el.value;
        console.log(this.root);
        //this.shadowRoot.getComputedStyle(this).setProperty('--percentage', 40%);
        //console.log(this.root);
        this.shadowRoot.style = ":host {--percentage: 50%;}"; //('--percentage', `${el.value * 100 / (el.max - el.min)}%`);
        console.log(this.root);
        el.value > 0 ? this.soundPicto.innerHTML = this.soundSVG : this.soundPicto.innerHTML = this.muteSVG;
        this.audioElement.volume = el.value / 100;
    }*/
    
    //Wird aufgerufen, wenn Component erstellt
    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        const container = document.createElement('div');
        container.className = "icecast-component";
        shadowRoot.appendChild(container);
        container.innerHTML = `
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
                <audio id="icecast-audio" src="https://schmalgsicht.de:8080/schmalgsicht" type="audio/mpeg" preload="none"></audio>
                <button id="playpause">
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M15.0015 11.3344C15.3354 11.5569 15.5023 11.6682 15.5605 11.8085C15.6113 11.9311 15.6113 12.0689 15.5605 12.1915C15.5023 12.3318 15.3354 12.4431 15.0015 12.6656L11.2438 15.1708C10.8397 15.4402 10.6377 15.5749 10.4702 15.5649C10.3243 15.5561 10.1894 15.484 10.1012 15.3674C10 15.2336 10 14.9908 10 14.5052V9.49481C10 9.00923 10 8.76644 10.1012 8.63261C10.1894 8.51601 10.3243 8.44386 10.4702 8.43515C10.6377 8.42515 10.8397 8.55982 11.2438 8.82917L15.0015 11.3344Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </button>
                <img id="logo" src="https://schmalgsicht.de/wp-content/plugins/SG_Player/sg_logo.png" alt="Schmalgsicht" class="player-logo">
                    <svg id="sound-picto" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 9C16.5 9.5 17 10.5 17 12C17 13.5 16.5 14.5 16 15M19 6C20.5 7.5 21 10 21 12C21 14 20.5 16.5 19 18M13 3L7 8H5C3.89543 8 3 8.89543 3 10V14C3 15.1046 3.89543 16 5 16H7L13 21V3Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                <input id="volslider" type="range" class="slider" min="0" max="100" value="100" step="1">
                <p id="zahl">30</p>
                <p id="text">Klicke Play!</p>
                `;
        
        //setzt this aufs andere Objekt
        var _self = this;
        
        this.initControls(shadowRoot);
        this.setStart();
        this.getTitle(this);
        setInterval(this.getTitle, 5000, this);
        this.loadCSS(shadowRoot);
        
        //EventListener registrieren
        this.playButton.addEventListener('click', function(){_self.setPlay(_self);});
        this.slider.addEventListener('input', function(){_self.setVolume(_self);});
        this.soundPicto.addEventListener('click', function(){_self.setMute(_self);});
        //this.audioElement.addEventListener('loadstart', function(){_self.setLoaded(_self);});
        this.audioElement.addEventListener('playing', function(){_self.setPlayable(_self);});
        window.addEventListener('resize', function(){_self.loadCSS(shadowRoot);});

        //Alte Funktionen ka lol
        //this.handleRangeUpdate(this.slider, shadowRoot);
        //this.slider.addEventListener('input', this.handleRangeUpdate);
    }
}

// Register the component
customElements.define('icecast-web', IcecastWeb);