(function(){
    var CorrectAnswer;
    /*-------------------------------------------------*/
    var template = /*html*/`

        <div class="CorrectAnswer">
            <div class="grid-item" align="center">
                <img src="assets/images/check-icon.png" width="100">
            </div> 
            <div class="grid-item">
                <h3>Tama ang sagot mo!</h3>
                &nbsp;<big>+</big> <img src="assets/images/star-icon.png" width="20">
                &nbsp; &nbsp; 
                <big>+ 0 akyurasi / + 0 presisyon</big>
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

    Dashboard = Vue.component('correct-answer', {
        template, 
        data: () => data,
        methods: {
            pick (data) {
                this.$store.commit("pick_sound", data);
            }
        },
        props
    })

    app.components.CorrectAnswer = Dashboard;
})();   