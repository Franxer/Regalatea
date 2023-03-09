import { Firestore, collectionData, docData } from '@angular/fire/firestore';
import { CollectionReference, DocumentData, addDoc, collection, deleteDoc, doc, updateDoc, query } from '@firebase/firestore';
import { Injectable, Query } from '@angular/core';
import User from '../interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreMethodsService {

  private userCollectionref: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore) {
    this.userCollectionref = collection(this.firestore, 'users');
   }

  async addUserRegistry(user: User){ }

  getAll() {
    return collectionData(this.userCollectionref, {
      idField: 'id',
    }) as Observable<User[]>;
  }

  get(id: string) {
    const userDocumentReference = doc(this.firestore, `users/${id}`);
    return docData(userDocumentReference, { idField: 'id' });
  }

  private async checkifExists(_query: any){

  }
}
