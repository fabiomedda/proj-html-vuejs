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
        },
        sect6Img: [
            {
                testimonial: "assets/img/testimonials-1.jpg",
                frase: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor ipsa nihil illum. Phasellus eu ornare erat.",
                nome: "Alice Jovovich",
                lavoro: "UMBRELLA CORPORATION",
                visible: true,
            },
            {
                testimonial: "assets/img/testimonials-2.jpg",
                frase: "Ability proceeds from a fusion of skills, knowledge, understanding and imagination, consolidated by experience.",
                nome: "Luis Desalvo",
                lavoro: "CREO TECH",
                visible: false,
            }
        ],
        indexImages: 0,
        footer:{
            logo: "assets/img/logo_seo_1x.png",
            link: [
                "Home",
                "Who We Are",
                "What We Do",
                "Where We Work",
                "Careers",
                "News",
                "Get in touch now",
            ],
            copyright: [
                {
                    copy1: "© Copyright 2012-2020"
                },
                {
                    copy1: "Avada Theme by",
                    copy2: "ThemeFusion",
                },
                {
                    copy1: "All Rights Reserved",
                },
                {
                    copy1: "Powered by",
                    copy2: "WordPress",
                },
                
            ],
            icone: [
                "fab fa-facebook-f",
                "fab fa-instagram",
                "fab fa-twitter",
                "fab fa-youtube",
            ],
        }
    },
    methods:{
        visible(){
            if (this.sect6Img[0].visible) {
                this.sect6Img[0].visible = false;
                this.sect6Img[1].visible = true;
            } else {
                this.sect6Img[1].visible = false;
                this.sect6Img[0].visible = true;
            }
        },
        changeImg(index){
            console.log(index);
            if (index === 0) {
                this.sect6Img[0].visible = true;
                this.sect6Img[1].visible = false;
            } else {
                this.sect6Img[1].visible = true;
                this.sect6Img[0].visible = false;
            }
        }
    },
    created: function () {
        setInterval(this.visible, 3000);
    },
    mounted(){
        
    }
});