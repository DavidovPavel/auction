import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { UserService } from '../../services/user.service';

@Directive({
  selector: '[appAcl]',
})
export class AclDirective {
  @Input()
  set appAcl(roles: string[]) {
    const role = this.us.getRole();
    if (roles.includes(role)) {
      this.viewRef.createEmbeddedView(this.templateRef);
    }
  }

  constructor(private templateRef: TemplateRef<any>, private viewRef: ViewContainerRef, private us: UserService) {}
}
