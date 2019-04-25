(function(){
    var GameTwo;
    /*-------------------------------------------------*/
    var template = /*html*/`

        <div class="gametwo-screen">
            <div class="app-window">
                <h1 @click="hide= true">Piliin ang tamang tunog para sa titik.</h1>
                <div class="container-1">
                    <div class="grid-item" >
                        <h1 id="baybayin-text-2" class="baybayin">{{displayed_symbol}}</h1>    
                    </div>
                    <div class="grid-item">
                        <img @click="pick(1)" onclick="document.getElementById('player1').play()" :class="{active: ($store.state.game_state.sound_picked == 1)}" class="baybayin-sound" id="baybayin-sound-1" src="assets/images/play-icon.png" width="80" height="80">
                        <img @click="pick(2)" onclick="document.getElementById('player2').play()"  :class="{active: ($store.state.game_state.sound_picked == 2)}" class="baybayin-sound" id="baybayin-sound-2" src="assets/images/play-icon.png" width="80" height="80">
                        <img @click="pick(3)" onclick="document.getElementById('player3').play()" :class="{active: ($store.state.game_state.sound_picked == 3)}" class="baybayin-sound" id="baybayin-sound-3" src="assets/images/play-icon.png" width="80" height="80">
                        <audio id="player1" autoplay :src="sound_urls[0]"></audio>
                        <audio id="player2"  :src="sound_urls[1]"></audio>
                        <audio id="player3"  :src="sound_urls[2]"></audio>
                    </div>
                </div>
                <div id="timer" align="center">
                    <tr>
                        <td>
                            <img src="assets/images/clock-icon.png" width="30" height="30">
                        </td>
                        <td>
                            <span id="timer-value">00:00</span>
                        </td>
                    </tr> 
                    <br >
                </div>
                <div class="container-2">
                    <div class="grid-item">
                    </div>
                    <div class="grid-item">
                        <button v-if="hide==true" @click="submit" class="button-primary" style="margin-left: -150px;">PILIIN</button>
                    </div>
                    <div class="grid-item">
                    <router-link @click="reset(); hide = true;" :to="next"> <button   style="margin-left: -350px" v-if="hide==false">Continue</button> </router-link>

                    </div>
                </div>       
             
            <correct-answer v-if="(correct == true && hide == false)"></correct-answer>
            <wrong-answer v-if="correct == false && hide == false"></wrong-answer>
            </div>

        </div>

    `
    /*-------------------------------------------------*/    

    var sounds = chance.pickset(symbol_list, 3);
    var displayed_symbol = chance.pick(sounds);
    sounds = chance.shuffle(sounds);
    var sound_urls = [
        "assets/sounds/" + chance.pickone(["man", "woman"]) + "/" + sounds[0] + ".wav",
        "assets/sounds/" + chance.pickone(["man", "woman"]) + "/" + sounds[1] + ".wav",
        "assets/sounds/" + chance.pickone(["man", "woman"]) + "/" + sounds[2] + ".wav"
    ];
    var props = [];
    var data = {
        locked_icon: "assets/images/locked-icon.png",
        unlocked_icon: "assets/images/check-icon.png",
        correct: true,
        hide: true,
        next:   "/gameplay/game1",
        sounds: sounds,
        displayed_symbol: displayed_symbol,
        sound_urls: sound_urls
    };
    /*-------------------------------------------------*/

    Dashboard = Vue.component('game-two', {
        template, 
        data: () => data,
        methods: {
            pick (data) {
                this.$store.commit("pick_sound", data);
            },
            submit : function(){
                this.hide = false;
                this.correct_answer = displayed_symbol; 
                this.chosen_answer =  sounds[this.$store.state.game_state.sound_picked - 1];
                
                console.log("Correct Answer " + this.correct_answer);
                console.log("Chosen Answer " + this.chosen_answer);
                

                if(this.correct_answer == this.chosen_answer) 
                    this.correct = true;
                else 
                    this.correct = false;

                    if(this.correct) this.$store.commit('increase_stars');
                    else this.$store.commit('decrease_life');

                if(this.$store.state.game.life <= 0) {
                    this.$router.push("/gameplay/gameover");
                }

                if(this.$store.state.game.points >=10 ) {
                    this.$router.push("/gameplay/congrats");
                }
            },
            reset: function(){
                this.hide = true; 
                this.correct = false;
                 sounds = chance.pickset(symbol_list, 3);
                 displayed_symbol = chance.pick(sounds);
                sounds = chance.shuffle(sounds);
                this.sounds = sounds;
                this.displayed_symbol = displayed_symbol;
                this.sound_urls = sound_urls;
            }
        },
        created() {
            this.hide = true;
            window.onload = function(){
                document.getElementById('player1').play();
                window.setTimeout(function(){
                    document.getElementById('player2').play()
                }, 1000);
             
            
                
                window.setTimeout(function(){
                    document.getElementById('player3').play()
                }, 2000);
            }
        },
        props
    })

    app.components.GameTwo = Dashboard;
})();   