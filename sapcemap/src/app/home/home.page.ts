import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Leaflet from 'leaflet';
import { antPath } from 'leaflet-ant-path';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit, OnDestroy {
  map: Leaflet.Map;

  constructor(
    public router: Router,
    public modalController: ModalController
  ) { }
  ngOnInit() { }
  ionViewDidEnter() { this.leafletMap(); }

  leafletMap() {
    this.map = Leaflet.map('mapId').setView([28.644800, 77.216721], 5);
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
// for文でFiredtoreから取ってきて回す
    const image1 = Leaflet.icon({iconUrl: './assets/blueinpalse.jpg', iconSize: [50, 50]});
    Leaflet.marker([35.570384, 139.637412], {icon: image1}, {rizinOnHover: true}).addTo(this.map)
    .bindPopup(`BlueImpalse`, { autoClose: true})// 一度閲覧すると閉じる
    .on('click', () => this.router.navigateByUrl('/imagedetail')).openPopup();
    // Leaflet.marker([34, 77]).addTo(this.map).bindPopup('Leh').openPopup();

    const image2 = Leaflet.icon({iconUrl: './assets/fox_village.jpg', iconSize: [50, 50]});
    Leaflet.marker([38.040905, 140.529996], {icon: image2}, {rizinOnHover: true}).addTo(this.map)
    .bindPopup(`Fox_Village`, { autoClose: true})// 一度閲覧すると閉じる
    .on('click', () => this.router.navigateByUrl('/imagedetail')).openPopup();
    // antPath([[28.644800, 77.216721], [34.1526, 77.5771]],
    //   { color: '#FF0000', weight: 5, opacity: 0.6 })
    //   .addTo(this.map);
    const image3 = Leaflet.icon({iconUrl: './assets/喫茶マウンテン.jpeg', iconSize: [50, 50]});
    Leaflet.marker([35.116318, 136.909392], {icon: image3}, {rizinOnHover: true}).addTo(this.map)
    .bindPopup(`完食！！`, { autoClose: true})// 一度閲覧すると閉じる
    .on('click', () => this.router.navigateByUrl('/imagedetail')).openPopup();

    const image4 = Leaflet.icon({iconUrl: './assets/コロナ東京.jpg', iconSize: [50, 50]});
    Leaflet.marker([35.709969, 139.794403], {icon: image4}, {rizinOnHover: true}).addTo(this.map)
    .bindPopup(`コロナ@5/20`, { autoClose: true})// 一度閲覧すると閉じる
    .on('click', () => this.router.navigateByUrl('/imagedetail copy')).openPopup();

    Leaflet.marker([28.312621, 80.39306], {rizinOnHover: true}).addTo(this.map)
    .bindPopup(`XSPACE`, { autoClose: true})// 一度閲覧すると閉じる
    .on('click', () => this.router.navigateByUrl('/imagedetail copy')).openPopup();
  }
  ngOnDestroy() {
    this.map.remove();
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage
    });
    return await modal.present();
  }
  /** Remove map when we have multiple map object */
 

}