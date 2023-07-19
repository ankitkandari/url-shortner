import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { Firestore, collectionData, collection, getDocs, doc, where, query, Query, QuerySnapshot, DocumentData, addDoc } from '@angular/fire/firestore';
import { Url } from '../url';


@Injectable({
  providedIn: 'root'
})
export class UrlService {

  firestore: Firestore = inject(Firestore);
  isSaved: boolean = false;

  async addUrl(data: Url): Promise<boolean> {
    try {
      const urlCollection = collection(this.firestore, 'urls');
      await addDoc(urlCollection, data);
      return true; // Return true if the save is successful
    } catch (error) {
      console.error('Error:', error);
      return false; // Return false if there's an error during the save
    }
  }


  async getUrlByURLId(url_id: string): Promise<DocumentData | null | undefined> {
    const collectionRef = collection(this.firestore, 'urls');
    const linkQuery = query(collectionRef, where("url_id", "==", url_id));
    try {
      const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(linkQuery);
      if (!querySnapshot.empty) {
        const firstDoc = querySnapshot.docs[0];
        return firstDoc.data();
      }
      return null;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  }

  getRandomString(lengthOfCode: number = 10) {
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz";
    let text = "";
    for (let i = 0; i < lengthOfCode; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text?.toLowerCase();
  }

  constructor() { }
}
