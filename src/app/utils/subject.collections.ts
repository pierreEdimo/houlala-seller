import {BehaviorSubject} from "rxjs";

/**
 * Hilfsklasse für die klassischen BehaviorSubjects zum Abholen von Daten.
 * Beinhaltet Data, Loading und Error-State.
 */
export class SubjectCollection<T> {
    public data$: BehaviorSubject<T>;
    public loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public error$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(initalValue: any) {
        this.data$ = new BehaviorSubject<T>(initalValue);
    }

    public data(data: T): void {
        this.data$.next(data);
    }

    public loading(currentlyLoading: boolean): void {
        this.loading$.next(currentlyLoading);
    }

    public error(hasAnError: boolean): void {
        this.error$.next(hasAnError);
    }
 
}