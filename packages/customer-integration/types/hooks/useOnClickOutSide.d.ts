import { RefObject, MouseEvent, TouchEvent } from 'react';
declare type EventType = MouseEvent | TouchEvent;
declare function useOnClickOutside<T extends HTMLElement = HTMLElement>(ref: RefObject<T>, handler: (event: EventType) => void): void;
export default useOnClickOutside;
