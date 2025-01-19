import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ColorThemeService {
    private _isLightMode = new BehaviorSubject<boolean>(true);
    isLightMode$ = this._isLightMode.asObservable();

    get isLightMode(): boolean {
        return this._isLightMode.value;
    }

    toggleTheme(): void {
        const currentMode = this._isLightMode.value;
        this._isLightMode.next(!currentMode);
    }
}