(function(){
    var SplashScreen;
    /*-------------------------------------------------*/
    var template = /*html*/`

        <div class="splash-screen">
            <div class="fork-me-on-github-rbn">
                <img src="assets/images/fork-me-on-github-rbn.png" />
            </div>
            <div class="app-window">
                <!-- first row -->
                <div></div>
                <div></div>
                <div></div>
                <div></div> 
                <div></div>
                <div></div>
                <!-- second row -->
                <div></div>
                <div class="side-design">
                    <img src="assets/images/side-design.png">
                </div>
                <div class="logo-container">
                    <span id="logo-text">BAYBAYIN DOJO</span>
                    <span id="subtext">BY+BYin+ -DoHo</span>
                    <span id="subtext2">mag-ensayo</span>
                </div>
                <div></div> 
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div class="video-container">
                    <div class="splash-video">
                    </div>
                </div>
                <div class="startup-prompt">
                    <div class="name-input">
                        <input type="text" v-model="player_name" placeholder="Pangalan">
                    </div>
                    <div class="start-button">
                        <router-link to="/dashboard">
                            <button @click="startApp">MAG-ENSAYO</button>
                        </router-link>
                    </div>
                </div> 
                <div></div>
                <div></div>
                <!-- fifth row -->
                <div></div>
                <div></div>
                <div></div>
                <div></div> 
                <div></div>
                <div></div>
            </div>
        </div>

    `
    /*-------------------------------------------------*/    
    var props = [];
    var data = {
        player_name: ""
    };
    var methods = {
        startApp: function() {
            this.$store.commit('update_player_name', this.player_name);
        }
    };
    /*-------------------------------------------------*/

    SplashScreen = Vue.component('splash-screen', {
        template, data: () => data, props, methods
    })

    app.components.SplashScreen = SplashScreen;
})();   