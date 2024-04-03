import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-prova',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './prova.component.html',
  styleUrl: './prova.component.css'
})
export class ProvaComponent implements OnInit{
        isDisabled = false
    
    
    constructor(){
        console.log("costruttore")  
    }

    ngOnInit(): void {
        console.log("gnOnInit")  
        setInterval(()=>{
            this.isDisabled = !this.isDisabled
        },2000)
    }

}