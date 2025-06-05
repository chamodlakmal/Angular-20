import {
  Component,
  ComponentRef,
  createComponent,
  ElementRef,
  Injector,
  TemplateRef,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import { Widget } from '../widget/widget';
import { User } from '../user/user';
import { Logging } from '../services/logging';
import { CustomLogging } from '../services/custom-logging';

@Component({
  selector: 'app-home',
  imports: [User],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  vcr = viewChild('container', { read: ViewContainerRef });
  content1 = viewChild<TemplateRef<unknown>>('content1');
  content2 = viewChild<TemplateRef<unknown>>('content2');
  private componentRef?: ComponentRef<Widget>;
  onCreate() {
    this.vcr()?.clear();
    const component = Widget;
    const contentView1 = this.vcr()?.createEmbeddedView(this.content1()!);
    const contentView2 = this.vcr()?.createEmbeddedView(this.content2()!);

    const customInjector = Injector.create({
      providers: [
        {
          provide: Logging,
          useClass: CustomLogging,
        },
      ],
    });

    this.componentRef = this.vcr()?.createComponent(component, {
      projectableNodes: [contentView1?.rootNodes!, contentView2?.rootNodes!],
      injector: customInjector,
    });
    this.componentRef?.setInput('title', 'Dynamic Widget Title');

    this.componentRef?.instance.closed.subscribe(() =>
      this.componentRef?.destroy()
    );
  }

  onDestroy() {
    this.vcr()?.clear();
  }
}
