
const routes = [
    { path: "/",  component: app.components.SplashScreen },
    { path: "/dashboard",  component: app.components.Dashboard },
    { path: "/gameplay", component: app.components.Gameplay, 
        children: [
            { path: 'game1', component:  app.components.GameOne },
            { path: 'game2', component:  app.components.GameTwo },
            { path: 'gameover', component:  app.components.GameOver },
            { path: 'congrats', component:  app.components.Congrats }
        ]
        
     }

]

app.router = new VueRouter({routes})
