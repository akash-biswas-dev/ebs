import { Injectable, signal, WritableSignal } from "@angular/core";



@Injectable({
  providedIn: 'root'
})
export class AppService{
  baseURL:WritableSignal<string> = signal('/api');
}