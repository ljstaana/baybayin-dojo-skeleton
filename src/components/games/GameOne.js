(function(){
    var GameOne;
    /*-------------------------------------------------*/
    var template = /*html*/`

        <div  class="gameone-screen">
            <div class="app-window">
                <h1 @click="hide=true">Tugma ba ang tunog sa simbolo?</h1>
                <div class="container-1">
                    <div class="grid-item">
                        <img id="baybayin-sound" onclick="document.getElementById('player').play()" src="assets/images/play-icon.png" width="120" height="120">
                        <audio id="player" autoplay :src="played_sound_url"></audio>

                    </div>
                    <div class="grid-item">
                        <h1 id="baybayin-text" class="baybayin">{{displayed_symbol}}</h1>
                    </div>
                </div>
                <div id="timer" align="center">
                    <tr>
                        <td>
                            <img src="assets/images/clock-icon.png" width="30" height="30">
                          
                        </td>
                        <td>
                            <span id="timer-value">00:0{{time}}</span>
                        </td>
                    </tr> 
                    <br >
                </div>
                <div class="container-2" id="hello">
                    <div class="grid-item">
                    </div>
                    <div class="grid-item">
                        <img v-if="hide==true" @click="submit('oo')" id="right-answer" src="assets/images/check-icon.png" width="40" height="40">
                        <br><h5   v-if="hide==true" class="oo">Oo</h5>
                        <router-link :to="next"  @click="reset(); hide = true"  > <button style="margin-left: 50px" v-if="hide==false">Continue</button> </router-link>
                    </div>
                    <div class="grid-item">
                        <img v-if="hide==true" @click="submit('hindi')" id="wrong-answer" src="assets/images/cross-icon.png" width="40" height="40">
                        <br><h5  v-if="hide==true"  class="hindi">Hindi</h5>
                        
                    </div>
                    <div class="grid-item">
                    </div>
                </div>    
                
                <correct-answer v-if="(correct == true && hide == false)"></correct-answer>
                <wrong-answer v-if="correct == false && hide == false"></wrong-answer>
            </div>
        </div>

    `
    /*-------------------------------------------------*/    
    var displayed_symbol = chance.pickone(symbol_list);
    var played_gender = chance.pickone(["man", "woman"]);
    var played_sound = chance.pickone(symbol_list);


    var props = [];
    var data = {
        locked_icon: "assets/images/locked-icon.png",
        unlocked_icon: "assets/images/check-icon.png",
        correct : false,
        hide: true,
        time: 5,

        displayed_symbol: displayed_symbol,
        played_sound: played_sound,
        played_sound_url: "assets/sounds/" + played_gender + "/" + played_sound + ".wav",
        next: "/gameplay/game2"
    };
    /*-------------------------------------------------*/

    Dashboard = Vue.component('game-one', {
        template, 
        data: () => data,
        methods: {
            submit : function(answer){
               this.hide = false;
               var correct_answer = (played_sound == displayed_symbol) ? "oo" : "hindi";
               this.correct = (answer == correct_answer) ? true : false;
               if(this.correct) this.$store.commit('increase_stars');
               else this.$store.commit('decrease_life');

               console.log(this.$store.state.game.life);
               if(this.$store.state.game.life <= 0) {
                    this.$router.push("/gameplay/gameover");
               }   

               
               if(this.$store.state.game.points >= 10 ) {
                this.$router.push("/gameplay/congrats");
               }
            },

            reset: function(){
                this.hide = true; 
                this.correct = false;
                var displayed_symbol = chance.pickone(symbol_list);
                var played_gender = chance.pickone(["man", "woman"]);
                var played_sound = chance.pickone(symbol_list);
                this.displayed_symbol = displayed_symbol;
                this.played_gender =played_gender;
                this.played_sound = played_sound;

            }
        },
        props,
        created() {
            this.hide = true;

            this.time = 5;
            var a = window.setInterval(function(){
                this.time = this.time - 1;    
                if(this.time <= 0)
                    this.$router.push("/gameplay/game2");
                console.log(this.time);
            }, 1000)
            
            document.getElementById("player").play();
        }
    })

    app.components.GameOne = Dashboard;
})();   