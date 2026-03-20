import { OutputEmitterRef } from '@angular/core';

import { ContactKey } from '../constants/contact.constants';

export interface TabGenericComponent {
  redirectMessage: OutputEmitterRef<ContactKey>
}
