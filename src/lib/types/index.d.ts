/* 
https://stackoverflow.com/questions/42233987/how-to-configure-custom-global-interfaces-d-ts-files-for-typescript
*/

import { SyntheticEvent } from 'react';

interface IEvent<T = Element> extends SyntheticEvent<T> {
  target: EventTarget & T;
  relatedTarget: EventTarget | null;
}
