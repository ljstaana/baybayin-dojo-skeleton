(function(){
    var Gameplay;
    /*-------------------------------------------------*/
    var template = /*html*/`

        <div class="gameplay-screen">
           <div id="game-stats">
                    <div id="stats-panel">
                        <table>
                            <tr>
                                <td>
                                    <span class="buhay-label">BUHAY </span>
                                </td>
                                <td>
                                    <span class="buhay-meter">
                                        <img :class="{faded: ($store.state.game.life == 0)}" src="assets/images/heart-icon.png" width="20" height="20">
                                        <img :class="{faded: ($store.state.game.life <= 1)}" src="assets/images/heart-icon.png" width="20" height="20">
                                        <img :class="{faded: ($store.state.game.life <= 2)}" src="assets/images/heart-icon.png" width="20" height="20">
                                    </span>
                                </td>
                            
                                <td>
                                    <span class="puntos-label">PUNTOS</span>
                                </td>
                                <td>
                                    <span class="puntos-meter"> 
                                        <img :class="{faded: ($store.state.game.points <= 1)}" src="assets/images/star-icon.png" width="20" height="20">
                                        <img :class="{faded: ($store.state.game.points <= 2)}" src="assets/images/star-icon.png" width="20" height="20">
                                        <img :class="{faded: ($store.state.game.points <= 3)}" src="assets/images/star-icon.png" width="20" height="20">
                                        <img :class="{faded: ($store.state.game.points <= 4)}" src="assets/images/star-icon.png" width="20" height="20">
                                        <img :class="{faded: ($store.state.game.points <= 5)}" src="assets/images/star-icon.png" width="20" height="20"> 
                                        <img :class="{faded: ($store.state.game.points <= 6)}" src="assets/images/star-icon.png" width="20" height="20">
                                        <img :class="{faded: ($store.state.game.points <= 7)}" src="assets/images/star-icon.png" width="20" height="20">
                                        <img :class="{faded: ($store.state.game.points <= 8)}" src="assets/images/star-icon.png" width="20" height="20">
                                        <img :class="{faded: ($store.state.game.points <= 9)}" src="assets/images/star-icon.png" width="20" height="20">
                                        <img :class="{faded: ($store.state.game.points <= 10)}" src="assets/images/star-icon.png" width="20" height="20">
                                    </span>
                                </td>
                            </tr>
                        </table> 
                    </div>
            </div>
            <div class="app-window">
                <router-view></router-view>
            </div>
        </div>

    `
    /*-------------------------------------------------*/    
    var props = [];
    var data = {
        
    };
    /*-------------------------------------------------*/

    Dashboard = Vue.component('gameplay', {
        template, 
        data: () => data,
        props,
        created() {
        }
   })

  

    app.components.Gameplay = Dashboard;
})();   