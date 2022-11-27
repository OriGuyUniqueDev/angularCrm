import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, UserCredential } from '@angular/fire/auth';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth:Auth) { }

  login(user:User):Promise<UserCredential>{
    return signInWithEmailAndPassword(this.auth,user.email,user.password) 
  }
  loginGoogle():Promise<UserCredential>{
    return signInWithPopup(this.auth,new GoogleAuthProvider())
  }
  logout(){
    return this.auth.signOut()
  }
}
