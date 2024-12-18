import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  url = 'http://localhost:3000/locations';
  constructor() {}

  async getAllHousingLocationList(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return data.json();
  }

  async getHousingLocationById(id: number): Promise<HousingLocation> {
    const data = await fetch(`${this.url}/${id}`);
    return data.json();
  }

  submitApplication(firstName: string, lastName: string, email: string): void {
    console.log(
      `Application submitted for ${firstName} ${lastName} at ${email}`,
    );
  }
}
