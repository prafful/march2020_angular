import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-builtin',
  templateUrl: './builtin.component.html',
  styleUrls: ['./builtin.component.css']
})
export class BuiltinComponent implements OnInit {

  message:string = 'loRAM IPsum DOCor metiAI'
  amount: number = 88
  currentdate:any = new Date()
  birthdate:any = new Date(1888, 4, 31)

  constructor() { }

  ngOnInit(): void {
  }

}
