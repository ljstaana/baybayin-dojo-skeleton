

app.data =  new Vuex.Store({
    state: {
        player_name: "Levi",
        accuracy: 0.0,
        precision: 0.0,
        level: 0,
        locks: {
          "A": false,
          "E": true,
          "I": false, 
          "O": true, 
          "U": true, 
          "B": true,
          "K": true,
          "D": true,
          "G": true,
          "H": true,
          "L": false,
          "M": true,
          "N": false,
          "NG": true,
          "P": true,
          "R": true,
          "S": true,
          "T": true,
          "W": true,
          "Y": true
        },
        locked: true,
        profile_pic: "assets/images/default-avatar.png",
        
        show_practice_btn: true,
        show_pick_symbol_component: false,
        show_wait_component: false,

        game : {
          points: 1,
          life: 3
        },

        game_state: {
          sound_picked: 2
        }

    },
    mutations: {
      update_player_name: (state, name) => {
        state.player_name = name;
      },
      update_profile_pic: (state, name) => {
        state.profile_pic = name;
      },
      pick_sound: (state, sound) => {
        state.game_state.sound_picked = sound;
      },
      increase_stars: (state) => {
        state.game.points++;
      },
      decrease_life: (state) => {
        state.game.life--;
      }
    }
})

app.data.subscribe((mutation, state) => {
    localStorage.setItem('store', JSON.stringify(state));
});