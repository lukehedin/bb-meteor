export default {
    scriptsLoading: false,
    scriptsReady: false,
    onReadyFns: [],

    autocomplete: function(inputEl, onChange) {
        if(!this.scriptsReady) {
            if(!this.scriptsLoading) this.loadGoogleMapsAndPlaces();
            this.onReadyFns.push(() => this.autocomplete(inputEl, onChange));
        } else {
            var autocomplete = new google.maps.places.Autocomplete(inputEl, { 
                types: ['(cities)'], 
                componentRestrictions: { 
                    country: 'au' 
                } 
            });
    
            google.maps.event.addListener(autocomplete, 'place_changed', () => {
                onChange(autocomplete.getPlace());
            });
        }
    },

    loadGoogleMapsAndPlaces: function(callbackFn) {
        this.scriptsLoading = true;
        $.getScript('https://www.google.com/jsapi', () => {
            window.google.load('maps', '3', { other_params: ['key=AIzaSyBnG2wcWi0MrBxd3wTtNCKTau-xHD_B324&libraries=places'], 
            callback: () => {
                this.scriptsReady = true;
                for(let fn of this.onReadyFns) fn();
            }});
        });
    }
}