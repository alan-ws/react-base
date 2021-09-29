import { SyntheticEvent } from 'react';

interface IEvent<T = Element> extends SyntheticEvent<T> {
  target: EventTarget & T;
  relatedTarget: EventTarget | null;
}
