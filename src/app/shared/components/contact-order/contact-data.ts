import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { ContactKey } from '../../../core/constants/contact.constants';

@Injectable({
  providedIn: 'root',
})
export class ContactDataService {

  private readonly updateRedirectData = new Subject<ContactKey>();

  public dispatchUpdateContactData(data: ContactKey): void {
    this.updateRedirectData.next(data);
  }

  public listenUpdateData() {
    return this.updateRedirectData.asObservable();
  }

}
