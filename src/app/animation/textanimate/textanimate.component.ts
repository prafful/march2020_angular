import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'cts-textanimate',
  templateUrl: './textanimate.component.html',
  styleUrls: ['./textanimate.component.css'],
  animations:[
    trigger("textzoom", [
                state("big", style({
                                      color:'red',
                                      transform:'scale(2)',
                                      letterSpacing:'-1px'
          })), state("tiny", style({
                                      color:'green',
                                      transform:'scale(1)',
                                      letterSpacing:'5px'
          })), transition('big <-> tiny', animate('500ms ease-out')) ])
  ]
})
export class TextanimateComponent implements OnInit {

  currentState= 'big'

  constructor() { }

  ngOnInit(): void {
  }

  animateText(){
    this.currentState = this.currentState === 'big'? 'tiny':'big'
  }

}

/**
 * trigger, state, style, transition, animate -> @angular/animations!
 * your animation has a name
 * you trigger the animation of the respective name on certain event!
 * Animation consist of multiple keyframes (state).
 * Whenever any animation is triggred, element transits from one state to another state!
 * Each respective state is defined with help of styles! 
 * You can have multiple styles to define particular state!
 * Change from one state to another is done withe help of transition!
 * The effect which is applied for the transition is done with animate!
 * 
 * 
 */