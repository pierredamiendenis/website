import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Subscription } from 'rxjs';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  Angular = { name: "Angular 8", photo: "./../../../assets/img/angular.svg" };
  HTML = { name: "HTML5", photo: "./../../../assets/img/html.svg" };
  CSS = { name: "CSS3/SCSS", photo: "./../../../assets/img/css.svg" };
  Javascript = { name: "Javascript", photo: "./../../../assets/img/logo_javascript.png" };
  GitHub = { name: "GitHub", photo: "./../../../assets/img/github-logo.svg" };
  GitLab = { name: "GitLab", photo: "./../../../assets/img/GitLab_Logo.svg" };
  Mantis = { name: "Mantis", photo: "./../../../assets/img/mantis.png" };
  Redmine = { name: "Redmine", photo: "./../../../assets/img/redmine.png" };
  Python = { name: "Python", photo: "./../../../assets/img/python.svg" };
  Wireshark = { name: "Wireshark", photo: "./../../../assets/img/wireshark.svg" };
  Shockline = { name: "Shockline", photo: "./../../../assets/img/shockline.png" };
  VNA = { name: "VNA", photo: "./../../../assets/img/vna.png" };
  Spectrum = { name: "Spectrum", photo: "./../../../assets/img/spectrum.png" };
  Android = { name: "Android", photo: "./../../../assets/img/android.svg" };
  KNX = { name: "KNX", photo: "./../../../assets/img/knx.png" };
  NodeJS = { name: "NodeJS", photo: "./../../../assets/img/nodejs.svg" };
  Java = { name: "Java", photo: "./../../../assets/img/java.svg" };
  Scala = { name: "Scala", photo: "./../../../assets/img/scala.png" };
  LTE = { name: "4G LTE", photo: "./../../../assets/img/lte.png" };
  Ansys = { name: "Ansys / Ansoft Designer", photo: "./../../../assets/img/ansys.jpg" };
  GSM = { name: "3G GSM", photo: "./../../../assets/img/gsm.svg" };
  MATLAB = { name: "MATLAB", photo: "./../../../assets/img/matlab.png" };
  Cisco = { name: "Cisco", photo: "./../../../assets/img/cisco.png" };



  Niji = {
    name: "Niji",
    photo: "./../../../assets/img/niji.jpg",
    job: "Développeur Full Stack Angular",
    date: "Juin 2019 – Août 2019 - 3 mois",
    place: "Cesson-Sévigné",
    works: ["Développement du Back Office pour une caisse de retraite :", "- Angular 8, Rxjs, HTML5, SCSS", "Développement Front et Back Office pour un prestataire de santé à domicile :", "- Angular 8, Javascript, HTML5, SCSS"],
    skills: [this.Angular, this.HTML, this.CSS, this.Javascript, this.GitHub, this.GitLab, this.Mantis, this.Redmine]
  }

  SmartViser = {
    name: "SmartViser",
    photo: "./../../../assets/img/smartviser.png",
    job: "Stagiaire en développement test",
    date: "Juin 2018 – Juillet 2018 - 2 mois",
    place: "Rennes",
    works: ["Automatisation de données en VBA pour cartographier la qualité des réseaux des communes (2G,3G,4G).", "Mises en places et analyses de tests réseaux sur téléphones mobiles (Viser, Wireshark, tcpdump).", "Mises en places et analyses de tests caméras.",
      "Traitement de fichiers audio pour automatiser une découpe en fonction d'un pattern (Sox, librairie Python Librosa et Soundfile).", "Apprentissage et découverte de la méthode agile SCRUM."],
    skills: [this.Python, this.Wireshark]
  }

  Anritsu_1 = {
    name: "Anritsu",
    photo: "./../../../assets/img/anritsu.png",
    job: "Stagiaire en télécom",
    date: "Anritsu Juin 2016 - 1 mois",
    place: "Cesson-Sévigné",
    works: ["Tests d'appareil de mesure (Soudeuse Optique, Analyseur de réseau vectoriel, Shockline, Analyseur de Spectre).", "Gestion d'un projet sur la localisation de sites en Europe concernant les sous-traitants électroniques.",
      "Support client dans les sociétés (Radio Frequency Systems, UBO, Port autonome de Saint-Nazaire, Equipements Scientifiques).", "Analyse de défaut sur système antennaire (distance to fault)."],
    skills: [this.Shockline, this.Spectrum, this.VNA]
  }

  experiences = [this.Anritsu_1, this.SmartViser, this.Niji]



  Prepa = {
    name: "Etudiant ESIR",
    photo: "./../../../assets/img/esir.png",
    job: "Cycle Préparatoire",
    date: "2015 - 2017",
    place: "Rennes",
    works: ["TIPE : Optimisation de la géolocalisation d'un pilote de drone"],
    skills: [this.Scala, this.Java]
  }

  // IOT = {
  //   name: "Etudiant ESIR",
  //   photo: "./../../../assets/img/esir.png",
  //   job: "Spécialité : IoT, sécurité et ville intelligente",
  //   date: "2017 – 2019",
  //   place: "Rennes",
  //   works: ["- Projet de conception d'un drone de course FPV","- Projet de conception d'un objet connecté : SmartWater (arrosage connecté)","- Projet de conception de site en Angular : Pokédex","- Projet de conception d'une application de jeux en Android : GoSpace"],
  //   skills: [this.Angular,this.HTML,this.CSS,this.Javascript,this.Android,this.NodeJS,this.KNX,this.GitHub]
  // }

  TR = {
    name: "Etudiant ESIR",
    photo: "./../../../assets/img/esir.png",
    job: "Télécom et Réseau",
    date: "2018 - 2021",
    place: "Rennes",
    works: [
      "📡 Télécommunications :",
      "• Électronique HF (Abaque de Smith, Paramètres S, Antennes, Composants Actifs/Passifs, Intermodulation)",
      "• Conception Circuit HF (Ansoft Designer)",
      "• Techniques de modulation (OFDM, QAM, CDMA)",
      "• Appareils de mesures : VNA, Analyseur de Spectre (Anritsu, Rohde et Schwarz, Keysight)",
      "• Propagation (Espace Libre, Ellipsoïde de Fresnel, Canal)",
      "• Traitement du signal",
      "• Communication Numérique (IQ, Constellation)",
      " -------------------- ",
      "💻 Réseaux :",
      "• Réseaux mobiles (2G, 3G, 4G)",
      "• Sécurité (Cypto, SNMP, Radius, IPSec, Filtrage)",
      "• Protocole de routage : MPLS, RIP, OSPF et BGP",
      "• IPv6, SDN (MININET)"
    ],
    skills: [this.Shockline, this.Spectrum, this.VNA, this.LTE, this.GSM, this.Ansys, this.Python, this.MATLAB, this.Cisco, this.Wireshark]
  }

  formations = [this.Prepa, this.TR]


  telecom = { name: "Télécommunications", data: [this.Shockline, this.Spectrum, this.VNA, this.LTE, this.GSM, this.Ansys, this.Python, this.MATLAB] };
  network = { name: "Réseaux", data: [this.Wireshark, this.Python, this.Cisco] };
  // informatique = {name:"Informatique",data:[this.Angular,this.HTML,this.CSS,this.Javascript,this.Android,this.NodeJS,this.KNX,this.GitHub]}
  informatique = { name: "Informatique", data: [this.Python, this.Javascript, this.Angular, this.GitHub, this.GitLab] }

  skills = [this.telecom, this.network, this.informatique];


  RF1 = { name: "Mélangeur à 1.45GHz", photo: "./../../../assets/img/smith.png", technos:[this.Ansys.photo], link:false };
  IQ = { name: "Modulateur/Démodulateur IQ", photo: "./../../../assets/img/IQ.png", technos:[this.Ansys.photo], link:false };


  Covering = { name: "Couverture Radio", photo: "./../../../assets/img/covering.png", technos:[this.Python.photo] , link:true, lien:"https://coveringesirtr.netlify.app/"};
  AppliAndroid = { name: "Application Android GoSpace", photo: "./../../../assets/img/gospace.png", technos:[this.Android.photo] , link:false};


  projects = { name: "Projects", data: [this.RF1,this.Covering,this.IQ,this.AppliAndroid] };


  projectsTab = [this.projects]



  dark = false;

  private dataSubscription: Subscription;

  myStyle: object = {};
  myParams: object = {};
  myParamsDark: object = {};

  width: number = 100;
  height: number = 100;

  formation_indice: number;
  showFormation: boolean;
  dataFormation;

  experience_indice: number;
  showExperience: boolean;
  dataExperience;

  formationsData;
  activeIndexFormation: number = 2;

  experiencesData;
  activeIndexExperience: number = 2;



  constructor(private serviceTheme: ThemeService) { }

  ngOnInit() {
    AOS.init();

    this.dataSubscription = this.serviceTheme.themeSubject.subscribe((data: any) => {
      console.log(data);
      this.dark = data;
    });



    this.myStyle = {
      'position': 'absolute',
      'width': '100%',
      'height': '100%',
      'z-index': 0,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
      'background-color': 'var(--main-bg-bio)',

    };

    this.myParams = {
      particles: {
        number: {
          value: 20,
        },
        color: {
          value: '#ffffff'
        },
        shape: {
          type: 'triangle',
        },
        line_linked: {
          color: "#FFFFFF"
        },
      }
    };

    this.myParamsDark = {
      particles: {
        number: {
          value: 20,
        },
        color: {
          value: '#14263B'
        },
        shape: {
          type: 'triangle',
        },
        line_linked: {
          color: "#14263B"
        },
      }
    };

    this.formationsData = [{
      label: 'Baccalauréat Mention Bien Européenne',
      command: (event: any) => {
        this.activeIndexFormation = 0;
        // this.messageService.add({severity:'info', summary:'First Step', detail: event.item.label});
      }
    },
    {
      label: 'Cycle Préparatoire : ESIR',
      command: (event: any) => {
        this.activeIndexFormation = 1;
        // this.messageService.add({severity:'info', summary:'Seat Selection', detail: event.item.label});
      }
    },
    {
      label: 'École d\ingénieurs Télécommuniation et Réseaux : ESIR',
      command: (event: any) => {
        this.activeIndexFormation = 2;
        // this.messageService.add({severity:'info', summary:'Pay with CC', detail: event.item.label});
      }
    }
    ];

    this.experiencesData = [
      {
        label: 'Stagiaire en télécom : Anritsu',
        command: (event: any) => {
          this.activeIndexExperience = 0;
          // this.messageService.add({severity:'info', summary:'Pay with CC', detail: event.item.label});
        }
      },

      {
        label: 'Stagiaire en développement test : SmartViser',
        command: (event: any) => {
          this.activeIndexExperience = 1;
          // this.messageService.add({severity:'info', summary:'Seat Selection', detail: event.item.label});
        }
      },
      {
        label: 'Développeur Full Stack Angular : Niji',
        command: (event: any) => {
          this.activeIndexExperience = 2;
          // this.messageService.add({severity:'info', summary:'First Step', detail: event.item.label});
        }
      }
    ];


  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }


  formation(i) {

    console.log(i)

    if ((this.formation_indice == i) && this.showFormation == true) {
      this.showFormation = false;
    }
    else {
      if (i == 0) {
        this.showFormation = false;
      } else {
        this.showFormation = true;
        this.formation_indice = i;
        this.dataFormation = this.formations[this.formation_indice - 1];
      }

    }

  }

  experience(i) {

    console.log(i)

    if ((this.experience_indice == i) && this.showExperience == true) {
      this.showExperience = false;
    }
    else {

      this.showExperience = true;
      this.experience_indice = i;
      this.dataExperience = this.experiences[this.experience_indice];
    }

  }

}
