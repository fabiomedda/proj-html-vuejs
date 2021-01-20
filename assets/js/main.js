/*
Istruzioni: 
Divisione del progetto in 3 macro aree in header, main e footer.
Divisione del main in 7 sezioni.
*/


/* Istanza Vue */
let app = new Vue ({
    el: "#app",
    data:{
        navLeft: {
            logo: "assets/img/logo_seo_w_1x.png",
        },
        navRight: {
            linkHome: "Home",
            linkWho: "Who We Are",
            linkWhat: "What We Do",
            linkWhere: "Where We Work",
            linkCareers: "Careers",
            linkApply: "APPLY",
            linkNews: "News",
            linkGet: "Get in touch now"
        },
        headerJumbotron: {
            h1: "SEM Campaigns Made Simple With Avada",
            p1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            p2: "Phasellus eu ornare erat. Curabitur pulvinar elit.",
            linkBuy: "Buy avada now",
            linkContact: "Contact us",
        }
    },
    methods:{

    },
    mounted:{

    }
});