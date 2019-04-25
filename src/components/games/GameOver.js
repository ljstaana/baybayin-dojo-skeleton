(function(){
    var GameOver;
    /*-------------------------------------------------*/
    var template = /*html*/`

        <div class="gametwo-screen">
            <div class="app-window">
                <h1 class="baybayin">SyN</h1>
                    <h3>SAYANG!</h3>
                    
                    <div style="width:500px;">
                        <h4>Naubusan ka ng buhay kaya kailangan mong mag-ensayo ulit pagkatapos ng</h1>
                    </div>
                        <br /><br > 
                        <tr>
                        <td>
                            <img src="assets/images/clock-icon.png" width="30" height="30">
                        </td>
                        <td>
                            <span id="timer-value" style="font-size: 50px;"> 00:00</span>
                        </td>
                    </tr>  
            </div>
        </div>

    `
    /*-------------------------------------------------*/    
    var props = [];
    var data = {
        locked_icon: "assets/images/locked-icon.png",
        unlocked_icon: "assets/images/check-icon.png",
        
    };
    /*-------------------------------------------------*/

    Dashboard = Vue.component('game-over-screen', {
        template, 
        data: () => data,
        methods: {
            pick (data) {
                this.$store.commit("pick_sound", data);
            }
        },
        props
    })

    app.components.GameOver = Dashboard;
})();   