(function(){
    var Dashboard;
    /*-------------------------------------------------*/
    var template = /*html*/`

        <div class="dashboard-screen">
            <div class="app-window">
                <!--fourth row-->
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <!--first row-->
                <div></div>
                <div class="accuracy-panel">
                    <span class="accuracy-label">
                        AKYURASI
                    </span>
                    <span class="accuracy-value">
                        {{$store.state.accuracy}}%
                    </span>
                </div>
                <div class="avatar-panel">
                    <div class="avatar-image">
                        <img :src="$store.state.profile_pic">
                        <span class="name-label">{{$store.state.player_name}}</span>
                        <span class="level-label">Antas {{$store.state.level}}</span>
                    </div>
                </div>
                <div class="precision-panel">
                    <span class="precision-label">
                        PRESISYON
                    </span>
                    <span class="precision-value">
                        {{$store.state.precision}}%
                    </span>
                </div>
                <div></div>
                <div></div>
                <!--second row-->
                <div></div>
                <div class="symbol-pool-panel">
                    <h5 id="symbol-pool-header" align="center">
                        <span class="baybayin">B</span> 
                        Mga Simbolo
                        <div class="pool baybayin">
                            <table align="center"> 
                                <tr>
                                    <td>A 
                                        <br />
                                        <img :src="[locks.A  ? locked_icon : unlocked_icon ]" width="20" height="20" /> 
                                    </td>
                                    <td>E
                                        <br />
                                        <img :src="[locks.E  ? locked_icon : unlocked_icon ]" width="20" height="20" /> 
                                    </td>
                                    <td>Ei
                                        <br />
                                        <img :src="[locks.I  ? locked_icon : unlocked_icon ]" width="20" height="20" /> </td> 
                                    <td>O
                                        <br />
                                        <img :src="[locks.O  ? locked_icon : unlocked_icon ]" width="20" height="20" /> </td>
                                    <td>Ou
                                        <br />
                                        <img :src="[locks.U  ? locked_icon : unlocked_icon ]" width="20" height="20" /> </td> 
                                </tr>
                                <tr>
                                    <td>B
                                        <br />
                                        <img :src="[locks.B  ? locked_icon : unlocked_icon ]" width="20" height="20" /> 
                                    </td>
                                    <td>K
                                        <br />
                                        <img :src="[locks.K  ? locked_icon : unlocked_icon ]" width="20" height="20" /> 
                                    </td>
                                    <td>D
                                        <br />
                                        <img :src="[locks.D  ? locked_icon : unlocked_icon ]" width="20" height="20" /> </td> 
                                    <td>G
                                        <br />
                                        <img :src="[locks.G  ? locked_icon : unlocked_icon ]" width="20" height="20" /> </td>
                                    <td>H
                                        <br />
                                        <img :src="[locks.H  ? locked_icon : unlocked_icon ]" width="20" height="20" /> </td> 
                                </tr>
                                <tr>
                                    <td>L
                                        <br />
                                        <img :src="[locks.L  ? locked_icon : unlocked_icon ]" width="20" height="20" /> 
                                    </td>
                                    <td>M
                                        <br />
                                        <img :src="[locks.M  ? locked_icon : unlocked_icon ]" width="20" height="20" /> 
                                    </td>
                                    <td>N
                                        <br />
                                        <img :src="[locks.N  ? locked_icon : unlocked_icon ]" width="20" height="20" /> </td> 
                                    <td>n
                                        <br />
                                        <img :src="[locks.NG  ? locked_icon : unlocked_icon ]" width="20" height="20" /> </td>
                                    <td>P
                                        <br />
                                        <img :src="[locks.P ? locked_icon : unlocked_icon ]" width="20" height="20" /> </td> 
                                
                                </tr>
                                <tr>
                                    <td>R
                                        <br />
                                        <img :src="[locks.R ? locked_icon : unlocked_icon ]" width="20" height="20" /> 
                                    </td>
                                    <td>S
                                        <br />
                                        <img :src="[locks.S ? locked_icon : unlocked_icon ]" width="20" height="20" /> 
                                    </td>
                                    <td>T
                                        <br />
                                        <img :src="[locks.T  ? locked_icon : unlocked_icon ]" width="20" height="20" /> </td> 
                                    <td>W
                                        <br />
                                        <img :src="[locks.W  ? locked_icon : unlocked_icon ]" width="20" height="20" /> </td>
                                    <td>Y
                                        <br />
                                        <img :src="[locks.Y ? locked_icon : unlocked_icon ]" width="20" height="20" /> </td> 
                                
                                </tr>
                            </table>
                        </div>
                    </h5>

                </div>
                <div></div>
                <div class="actions-panel">
                    <h5 id="symbol-pool-header" align="center">
                        <span class="baybayin">K</span> 
                        Mga Aksyon
                        <br /><BR />
                        <router-link to="gameplay/game1">
                            <button v-if="$store.state.show_practice_btn == true" id="mag-ensayo-btn" class="button-primary">MAG-ENSAYO</button>
                        </router-link>
                        <span v-if="$store.state.show_pick_symbol_component == true" id="pumili-simbolo">Pumili ka muna ng simbolo bago magpatuloy. <br /> <br /></span>  
                        <span v-if="$store.state.show_wait_component == true" id="maghintay">Maghintay ka muna ng 00:00 oras bago magpatuloy. <br /> <br /></span>  

                        <button @click="changeProfilePic()" id="palitan-profile-pic-btn">Palitan ang iyong profile picture</button>
                        <button @click="changeName()" id="palitan-pangalan-btn">Palitan ang iyong pangalan</button>
                    </h5>

                </div>
                <div></div>
                <div></div>
                <!--second row-->
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <!--fourth row-->
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
        locked_icon: "assets/images/locked-icon.png",
        unlocked_icon: "assets/images/check-icon.png",
        
    };
    /*-------------------------------------------------*/

    Dashboard = Vue.component('dashboard-screen', {
        template, 
        data: () => data,
        computed: {
            locks () {
                return this.$store.state.locks;
            }
        },
        methods: {
            changeProfilePic() {
                var url=prompt("Ilagay ang URL ng larawan na ipapalit mo: ", "");
                this.$store.commit('update_profile_pic', url);
            },
            changeName() {
                var name = prompt("Ilagay ang bagong pangalan na gusto mo: ", this.$store.state.player_name);
                this.$store.commit('update_player_name', name);
            }
        },
        props
    })

    app.components.Dashboard = Dashboard;
})();   