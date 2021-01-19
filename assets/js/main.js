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
            logo: "",
            linkAvada: "",
            linkSeo: "",
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
            p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Phasellus eu ornare erat. Curabitur pulvinar elit.",
            linkBuy: "Buy avada now",
            linkContact: "Contact us",
        }
    },
    methods:{

    },
    mounted:{

    }
});