import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users = [
    {
      email: 'jeric.espina@gmail.com',
      password: 'espina123',
      profilePic: 'image1.jpg',
      name: 'Jeric Espina',
      age: 22,
      gender: 'Male',
      address: 'Brgy. San Miguel Dulag, Leyte'
    },
    {
      email: 'bea.nacor@gmail.com',
      password: 'nacor123',
      profilePic: 'image2.jpg',
      name: 'Bea Nacor',
      age: 22,
      gender: 'Female',
      address: 'Brgy. San Miguel Dulag, Leyte'
    },
    {
      email: 'glenn.magsanay@gmail.com',
      password: 'magsanay123',
      profilePic: 'image3.jpg',
      name: 'Glenn Magsanay',
      age: 23,
      gender: 'Male',
      address: 'Dulag, Leyte'
    },
    {
      email: 'johncarlo.sevilla@gmail.com',
      password: 'sevilla123',
      profilePic: 'image4.jpeg',
      name: 'John Carlo Sevilla',
      age: 21,
      gender: 'Male',
      address: 'Brgy. Tagkip Julita, Leyte'
    },
    {
      email: 'floralene.suyom@gmail.com',
      password: 'suyom123',
      profilePic: 'image5.jpg',
      name: 'Floralene Suyom',
      age: 23,
      gender: 'Female',
      address: 'Brgy. Telegrafo Tolosa, Leyte'
    }
  ];

  private loggedInUser: any = null;

  constructor(private router: Router) {}

  login(email: string, password: string): boolean {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      this.loggedInUser = user;
      return true;
    }
    return false;
  }

  getUser() {
    return this.loggedInUser;
  }

  logout() {
    this.loggedInUser = null;
    this.router.navigate(['/main/login']);
  }
}
