import {Component} from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';
@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
})
export class HeaderComponent{
    constructor(private dataStorgeService:DataStorageService){}
    onSaveData(){
        this.dataStorgeService.storeRecipes()
            .subscribe(
                (response:Response) =>{
                    console.log(response);
                }
            );
    }
    onFetchData(){
        this.dataStorgeService.getRecipes();
    }
}