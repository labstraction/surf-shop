import { Directive, ElementRef, Input } from '@angular/core';
import { User } from 'src/app/model/user';

@Directive({
  selector: '[appCartLink]'
})
export class CartLinkDirective {


  @Input()
  set user(value: User | undefined) {
    console.log(value)
    this.initElement(value);
  }



  constructor(private el: ElementRef) {
    el.nativeElement.style.borderStyle = "solid"
  }

  initElement(user: User | undefined) {
    if (user && user.cart) {
      this.el.nativeElement.style.display = "inline"
      this.el.nativeElement.innerHTML = "cart: " + user.cart.length
    } else {
      this.el.nativeElement.style.display = "none"
    }
  }
}
