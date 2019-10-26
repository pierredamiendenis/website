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
  GitLab = { name: "GitLab", photo: "./../../../assets/img/gitlab_logo.svg" };
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

  experiences = [this.Niji, this.SmartViser, this.Anritsu_1]



  Prepa = {
    name: "Etudiant ESIR",
    photo: "./../../../assets/img/esir.png",
    job: "Cycle Préparatoire",
    date: "2015 - 2017",
    place: "Rennes",
    works: ["TIPE : Optimisation de la géolocalisation d'un pilote de drone"],
    skills: [this.Scala,this.Java]
  }

  IOT = {
    name: "Etudiant ESIR",
    photo: "./../../../assets/img/esir.png",
    job: "Spécialité : IoT, sécurité et ville intelligente",
    date: "2017 – 2019",
    place: "Rennes",
    works: ["- Projet de conception d'un drone de course FPV","- Projet de conception d'un objet connecté : SmartWater (arrosage connecté)","- Projet de conception de site en Angular : Pokédex","- Projet de conception d'une application de jeux en Android : GoSpace"],
    skills: [this.Angular,this.HTML,this.CSS,this.Javascript,this.Android,this.NodeJS,this.KNX,this.GitHub]
  }

  TR = {
    name: "Etudiant ESIR",
    photo: "./../../../assets/img/esir.png",
    job: "Télécom et Réseau",
    date: "2019 - 2021",
    place: "Rennes",
    works: [],
    skills: [this.Wireshark,this.Python]
  }

  formations = [this.TR,this.IOT,this.Prepa,]


  telecom = {name:"Télécommunications",data:[this.VNA,this.Spectrum,this.Shockline,this.Wireshark]};
  network = {name:"Réseaux",data:[this.Wireshark,this.Python]};
  informatique = {name:"Informatique",data:[this.Angular,this.HTML,this.CSS,this.Javascript,this.Android,this.NodeJS,this.KNX,this.GitHub]}
  skills = [this.telecom,this.network,this.informatique];



  dark = true;

  private dataSubscription: Subscription;

  constructor(private serviceTheme: ThemeService) { }

  ngOnInit() {
    AOS.init();

    this.dataSubscription = this.serviceTheme.themeSubject.subscribe((data: any) => {
      console.log(data);
      this.dark = data;
    });
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

}
