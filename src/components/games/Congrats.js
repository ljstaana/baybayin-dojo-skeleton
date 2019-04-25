(function(){
    var Congrats;
    /*-------------------------------------------------*/
    var template = /*html*/`

        <div class="gametwo-screen">
            <div class="app-window">
                    <h1 class="baybayin">Mhusy+</h1>
                    <h3>Mahusay!</h3>
                    
                    <div style="width:500px;">
                        <h4>Nagwagi ka sa pag-ensayo. Maari ka nang 
                        pumili ng bagong simbolo para sa koleksyon mo</h1>
                    </div>
                        <br /><br >
                    <button>SIGE</button>    
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

    Dashboard = Vue.component('congrats-screen', {
        template, 
        data: () => data,
        methods: {
            pick (data) {
                this.$store.commit("pick_sound", data);
            }
        },
        props
    })

    app.components.Congrats = Dashboard;
})();   