<template>
  <div id=portfolio>

    <header>
      <div class="container-header">
        <h1> Luca Lincetto </h1>
      </div>
    </header>

    <main>
      <div class="container-photo" :style="{'background-image': 'url(' + require('../assets/Toptop1.jpg') + ')'}">
        <div class= "top" :style="{'background-image': 'url(' + require('../assets/me2.jpg') + ')'}">
          <div class="top-sx">
            <div class="hello">
            <h1 @click="active = true" v-if="!active"><span>&lsaquo;h1&rsaquo;</span> <strong>Hello</strong> <span>&lsaquo;/h1&rsaquo;</span></h1>
            </div>
            <div class="click">
              <h2 v-if="active"><span>&lsaquo;h1&rsaquo;</span> Benvenuto nel mio portfolio <span>&lsaquo;/h1&rsaquo;</span></h2>
            </div>
          </div>
        </div>
      </div>
      <div class="container-hello" :style="{'background-image': 'url(' + require('../assets/Topbottom1.jpg') + ')'}">
        <div class="hello">
          <div class="ok">
            <h2><span>&lsaquo;h2&rsaquo;</span> Mi chiamo Luca <span>&lsaquo;/h2&rsaquo;</span></h2>
            <h4>Sono uno Junior Full Stack Web Developer, appassionato di teconlogia, nonchè un instancabile programmatore pronto a mettersi sempre alla prova con nuovi linguaggi di programmazione.</h4>
          </div>
        </div>
      </div>
      <div class="container-cards">
        <div class="center">
          <div class="card">
              <span><font-awesome-icon icon="code" /></span>
              <h4><strong>WEB DEVELOPMENT</strong></h4>
              <p>La passione per la tecnologia mi ha portato a formarmi su vari linguaggi di codice e programmazione; competenze consolidate grazie al corso di Full Stack Web Developer di Boolean Careers.
              Amo passare il tempo a programmare, testare codici, e se ne avanza, studiarne altri.</p>
          </div>
          <div class="card">
            <span><font-awesome-icon icon="running" /></span>
            <h4><strong>SPORT</strong></h4>
            <p>Da appassionato di sport, ed healthy style, sono convinto che entrambi stiano alla base per uno stile di vita migliore, sia fisico che mentale.
            Tra un codice e l'altro, non può mancare di certo un po di buon sano movimento.</p>
          </div>
          <div class="card">
            <span><font-awesome-icon icon="plane-departure" /></span>
            <h4><strong>TRAVEL</strong></h4>
            <p>Girare il mondo alla scoperta delle diverse culture, stili di vita diversi, delle nuove esperienze culinarie.
            Appena posso, è una delle cose che non farò mai mancare alla mia "to do list". </p>
          </div>
        </div>
      </div>
      <div class="container-container">
        <h1>.container {</h1>
      </div>
      <div class="container-my-site">
        <div class="my-site">
          <h2>Visita il mio blog Running post </h2>
          <small><span>&#60; small &#62;</span>  By Laravel Mix e Handlebars <span>&#60; /small &#62;</span></small>
          <div class="my-site-image">
            <a href="#" target="_blank"> <img src="../assets/RunnerPost.png" alt="Running blog"> </a>
          </div>
        </div>
      </div>
      <div class="container-my-work">
        <div class="my-work-title">
            <h2>Alcune mie repliche di Netflix e Whatsapp</h2>
            <small><span>&#60; /small &#62;</span> With HTML, CSS e JavaScritp <span>&#60; /small &#62;</span></small>
        </div>
        <div class="my-work">
            <div class="look-this">
              <img v-if="hoverZapp == true" class="one" src="../assets/ironzapp2.png" alt="boolflix">
              <a href="https://github.com/Ljnce/ajax-ex-boolflix" target="_blank"> <img @mouseenter="hoverZapp = true"  @mouseleave="hoverZapp = false" class="two" src="../assets/ironzapp1b.png" alt="boolflix"> </a>
              <a href="https://github.com/Ljnce/js-html-css-boolzap" target="_blank"><img @mouseenter="hoverFlix = true"  @mouseleave="hoverFlix = false"  class="three" src="../assets/heroflix1.png" alt="boolzapp"></a>
              <img v-if="hoverFlix = hoverFlix" class="four" src="../assets/heroflix2b.png" alt="boolzapp">
            </div>
        </div>
      </div>
      <div class="container-close">
        <h1> } </h1>
      </div>
      <div class="container-bottom" :style="{'background-image': 'url(' + require('../assets/Bottomtop1.jpg') + ')'}">
        <div class="skills">
          <h1>Skills</h1>
        </div>
        <div class="bottom">
          <div class="container-grafico">
            <BarChart :tick="{min: 0, max: 100}"/>
          </div>
        </div>
      </div>
    </main>

    <footer>
      <div class="container-footer" :style="{'background-image': 'url(' + require('../assets/Bottombottom1.jpg') + ')'}">
        <div class="foot">
            <div class="foot-sx">
            </div>
            <div class="foot-dx">
              <a href="#"><font-awesome-icon icon="user-secret" /> </a>
              <a href="#"><font-awesome-icon icon="user-secret" /> </a>
              <a href="#"><font-awesome-icon icon="user-secret" /> </a>
            </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>

import BarChart from "../components/BarChart.vue";

export default {
  name: "portfolio",
  props: [ 'tick' ],
  data() {
    return {
      active: false,
      hoverZapp: false,
      hoverFlix: false
    };
  },
  components: {
    BarChart
  }
}

</script>

<style lang="scss">

  #portfolio {
    header {
      .container-header {
      }
    }
    .container-photo {
      display: flex;
      justify-content:center;
      flex-wrap: wrap;
      width: 100vw;
      background-size: cover;
      .top {
        height: 300px;
        width: 80%;
        background-size: cover;
        background-position: top;
        .top-sx {
          height: 300px;
          width: 60%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #1a181e;
          font-size: 22px;
          .hello {
          positon: relative;
          span {
            color: #f28400;
          }
          h1 {
            &:hover {
            transform: scale(1.2);
            cursor: pointer;
            }
          }
        }
        }
        .click {
        width: 40%;
          font-size: 22px;
          position:absolute;
          span {
            color: #f28400;
          }
        }
      }
    }
    .container-hello {
      display: flex;
      justify-content:center;
      flex-wrap: wrap;
      width: 100vw;
      background-size: cover;
      .hello {
        height: 240px;
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        .ok {
          height: 180px;
          width: 800px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          text-align: center;
          h2 {
            font-size: 25px;
            span {
              color:#f28400;
              font-size: 30px;
            }
          }
        }
      }
    }
    .container-cards {
      display: flex;
      justify-content:center;
      flex-wrap: wrap;
      width: 100vw;
      .center {
        width: 80%;
        display: flex;
        justify-content: center;
        margin-top: 30px;
        .card {
          height: 330px;
          width: calc(80% / 3);
          margin:0 35px;
          text-align: center;
          span {
            color: #f28400;
            font-size: 60px;
            padding: 20px;
          }
          h4 {
            margin-bottom: 10px;
          }
        }
      }
    }
    .container-container {
      display: none;
    }
    .container-my-site {
      width: 100vw;
      height: 530px;
      display: flex;
      justify-content: center;
      align-items: center;
      .my-site {
        width: 80%;
        text-align: center;
        span {
          color: #f28400;
        }
        h2 {
          font-size: 20px;
        }
        img {
          width: 500px;
          height: 280px;
          object-fit: cover;
          margin-top: 45px;
          &:hover {
            transform: scale(1.2);
          }
        }
      }
    }
    .container-my-work {
      width: 100vw;
      height: 350px;
      display: flex;
      justify-content:center;
      flex-wrap: wrap;
      width: 100vw;
      margin-bottom: 30px;
      background-size: cover;
      background-position: right 150px;
      .my-work-title {
        width: 80%;
        text-align: center;
        span {
          color: #f28400;
        }
      }
      .my-work {
        height: 350px;
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        .look-this {
          display: flex;
          flex-direction: row;
          justify-content: center;
          img {
            width: 500px;
            height: 280px;
            object-fit: cover;
            margin-left: 40px;
          }
          .two {
            &:hover {
              transform: scale(1.2);
            }
          }
          .three {
            &:hover {
              transform: scale(1.2);
            }
          }
        }
      }
    }
    .container-close {
      display: none;
    }
    .container-bottom {
      width: 100vw;
      height: 500px;
      display: flex;
      justify-content:center;
      flex-wrap: wrap;
      .skills {
        width: 80%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 60px;
      }
    }
    .container-footer {
      height:250px;
      display: flex;
      justify-content:center;
      align-items:center;
      flex-wrap: wrap;
      width: 100vw;
      .foot {
        height: 100px;
        width: 80%;
        .foot-sx {
          height: 200px;
          width: 40%;
          float: left;
        }
        .foot-dx {
          height: 200px;
          width: 60%;
          display: flex;
          align-items: center;
          justify-content: center;
          i {
            font-size: 30px;
            padding: 20px;
            &:hover {
              color: #f28400;
              cursor: pointer;
            }
          }
        }
      }
    }
  }

  @media (max-width: 767px) {
    #portfolio {
      header {
        .container-header {
        }
      }
      .container-photo {
        .top {
          height: 300px;
          width: 80%;
          background-size: cover;
          background-position: -110px 0;
          .top-sx {
            font-size: 15px;
          }
          .click {
            width: 80%;
            display: none;
            font-size: 22px;
            span {
              color: #f28400;
            }
            .block {
              display:block;
            }
          }
        }
      }
      .hello {
        height: 140px;
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        .ok {
          h2 {
            font-size: 22px;
          }
        }
      }
      .container-cards {
        display: flex;
        justify-content:center;
        flex-wrap: wrap;
        width: 100vw;
        .center {
          width: 1200px;
          justify-content: center;
          flex-wrap: wrap;
          .card {
            height: 180px;
            width: 80%;
            margin-bottom: 100px;
            padding: 0 5px;
            text-align: center;
            display: flex;
            align-items: center;
            flex-direction: column;
            i {
            font-size: 35px;
            }
          }
        }
      }
      .container-my-site {
        width: 100vw;
        height: 280px;
        background: none;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
        .my-site {
          height: 320px;
          h2 {
            font-size: 15px;
          }
          img {
            height: 160px;
            width: 290px;
            margin-top: 40px;
            &:hover {
              transform: scale(1.4);
            }
          }
        }
      }
      .container-my-work {
        background: none;
        h2 {
          text-align: center;
          font-size: 16px;
        }
        .my-work-title {
          height: 40px;
          width: 80%;
          text-align: center;
        }
        .my-work{
          height: 450px;
          width: 80%;
          .look-this {
            display: flex;
            flex-direction: column;
            justify-content: center;
            img {
              height: 160px;
              width: 290px;
              margin-bottom: 40px;
              margin-left: 0;
            }
          }
        }
        .container-close {
          font-size: 22px;
          padding-top: 100px;
          margin-right: 20px;
          color: #f28400;
          float: right;
          display: block;
        }
        .container-bottom {
          height: 400px;
          margin-top: 0;
          .skills {
            height: 50px;
            margin-bottom: 30px;
          }
          .bottom {
            width: 80%;
            .container-grafico {
              width: 100px;
            }
          }
        }
        .container-footer {
          height:120px;
          padding-right: 10px;
        }
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    .container-photo {
      height: 300px;
      .top {
        height: 320px;
        width: 100%;
        .top-sx {
          height: 320px;
          width: 50%;
          font-size: 23px;
        }
      }
    }
    .hello {
      height: 190px;
    }
    .container-cards {
      display: flex;
      justify-content:center;
      flex-wrap: wrap;
      .center {
        width:100%;
        .card {
          height: 300px;
          width: 80%;
          margin-bottom: 100px;
          padding: 0 5px;
          text-align: center;
          display: flex;
          align-items: center;
          flex-direction: column;
        }
      }
    }
    .container-container {
      font-size: 30px;
      color: #f28400;
      display: block;
    }
    .container-my-site {
      width: 100vw;
      height: 280px;
      background: none;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 40px;
      .my-site {
        height: 320px;
        h2 {
          font-size: 15px;
        }
        img {
          height: 160px;
          width: 290px;
          margin-top: 40px;
        }
      }
    }
    .container-my-work {
      background: none;
      h2 {
        text-align: center;
        font-size: 16px;
      }
      .my-work-title {
        height: 40px;
        width: 80%;
        text-align: center;
      }
      .my-work{
        height: 450px;
        width: 80%;
        .look-this {
          display: flex;
          flex-direction: column;
          justify-content: center;
            height: 160px;
            width: 290px;
            margin-bottom: 40px;
            margin-left: 0;
          }
        }
      }
    }
    .container-close {
      font-size: 30px;
      padding-top: 100px;
      margin-right: 20px;
      color: #f28400;
      float: right;
      display: block;
    }
    .container-bottom {
      height: 550px;
      .bottom {
        width: 80%;
        display: flex;
        flex-direction: row;
        overflow-x: auto;
        .container-grafico {
          width: 80%;
        }
      }
    }
    .container-footer {
      height:150px;
      .foot-sx {
        height: 100px;
      }
      .foot-dx {
        height: 100px;
      }
    }


</style>
