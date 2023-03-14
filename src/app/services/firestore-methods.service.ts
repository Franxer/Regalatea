import { collection, collectionData, CollectionReference, doc, DocumentData, Firestore, getDoc, setDoc } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import User from 'src/app/interfaces/User.interface';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class FirestoreMethodsService {

  private userCollectionref: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore) {
    this.userCollectionref = collection(this.firestore, 'users');
  }

  async addUserRegistry(user: User){
    this.checkIfUserinBBDD(user.email).then(() => {
      setDoc(doc(this.firestore, "users", user.email), user);
      console.log("Usuario insertado en bbdd");
    }).catch((error) => {
      console.log(error);
    });
  }

  getAllUsers(){
    return collectionData(this.userCollectionref, {
      idField: 'id',
    }) as Observable<User[]>;
  }

  getUserbyId(id: string){ }

  //MÉTODOS AUXILIARES

  async checkIfUserinBBDD(id: string){
    const docRef = doc(this.firestore, "users", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return Promise.resolve(true);
    } else {
      // doc.data() will be undefined in this case
      return Promise.resolve(false);
      console.log("No such document!");
    }
  }
}




