import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appChangeBackGroundColor]"
})
export class ChangeBackGroundColorDirective {
  constructor(private elem: ElementRef) {
    this.elem.nativeElement.style.backgroundColor =
      "rgba(153, 246, 255, 0.931)";
  }
}
