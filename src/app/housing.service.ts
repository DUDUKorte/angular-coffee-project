import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  housingLocationList: Housinglocation[] = [
    {
      id:0,
      name: 'Test Coffee',
      manufacturer: 'ANELYM CAFE',
      region: 'TR',
      photo: `${this.baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
      availableUnits: 34,
      intensity: 'High',
      natural: true
        },

    {
      id:1,
      name: 'Test Coffee',
      manufacturer: 'CAFE REI DO BRASIL LTDA',
      region: 'TR',
      photo: `${this.baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
      availableUnits: 54,
      intensity: 'High',
      natural: true
    },

    {
      id:2,
      name: 'Test Coffee',
      manufacturer: 'INDUSTRIAS ALIMENTICIAS MARATA',
      region: 'TR',
      photo: `${this.baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
      availableUnits: 12,
      intensity: 'High',
      natural: true
    },

    {
      id:3,
      name: 'Test Coffee',
      manufacturer: 'EXPORTADORA E IMPORTADORA MARUBENI COLORADO LTDA',
      region: 'TR',
      photo: `${this.baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
      availableUnits: 65,
      intensity: 'High',
      natural: true
    },

    {
      id:4,
      name: 'Test Coffee',
      manufacturer: 'COFCO INTERNATIONAL COMERCIO E ARMAZENAGEM DE GRAOS LTDA.',
      region: 'TR',
      photo: `${this.baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
      availableUnits: 87,
      intensity: 'High',
      natural: true
    },

    {
      id:5,
      name: 'Test Coffee',
      manufacturer: 'COMPANHIA CACIQUE DE CAFE SOLUVEL',
      region: 'TR',
      photo: `${this.baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
      availableUnits: 23,
      intensity: 'High',
      natural: true
    },

    {
      id:6,
      name: 'Test Coffee',
      manufacturer: 'TRES CORACOES ALIMENTOS S.A.',
      region: 'TR',
      photo: `${this.baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
      availableUnits: 34,
      intensity: 'High',
      natural: true
    },

    {
      id:7,
      name: 'Test Coffee',
      manufacturer: 'NKG STOCKLER LTDA.',
      region: 'TR',
      photo: `${this.baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
      availableUnits: 54,
      intensity: 'High',
      natural: true
    },

    {
      id:8,
      name: 'Test Coffee',
      manufacturer: 'AC CAFE S.A.',
      region: 'TR',
      photo: `${this.baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
      availableUnits: 12,
      intensity: 'High',
      natural: true
    },

    {
      id:9,
      name: 'Test Coffee',
      manufacturer: 'SUCAFINA BRASIL',
      region: 'TR',
      photo: `${this.baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
      availableUnits: 65,
      intensity: 'High',
      natural: true
    },
  ];

  getAllHousingLocations(): Housinglocation[] {
    return this.housingLocationList;
  }

  getHoudingLocationById(id: number): Housinglocation | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id == id);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }

  constructor() { }
}
