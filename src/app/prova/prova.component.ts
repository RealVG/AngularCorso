import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card'; 
import {MatButtonModule} from '@angular/material/button'; 

@Component({
  selector: 'app-prova',
  standalone: true,
  imports: [MatSlideToggle,MatCardModule,MatButtonModule],
  templateUrl: './prova.component.html',
  styleUrl: './prova.component.css'
})
export class ProvaComponent implements OnInit, AfterContentChecked,AfterContentInit,
    AfterViewChecked,AfterViewInit,DoCheck,OnDestroy{
        constructor(){

        }
    ngOnInit(): void {
        console.log("gnOnInit")
    }
    ngAfterContentChecked(): void {
        throw new Error('Method not implemented.');
    }
    ngAfterContentInit(): void {
        throw new Error('Method not implemented.');
    }
    ngAfterViewChecked(): void {
        throw new Error('Method not implemented.');
    }
    ngAfterViewInit(): void {
        throw new Error('Method not implemented.');
    }
    ngDoCheck(): void {
        throw new Error('Method not implemented.');
    }
    ngOnDestroy(): void {
        throw new Error('Method not implemented.');
    }
        

}
