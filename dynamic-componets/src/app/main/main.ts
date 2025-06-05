import { NgComponentOutlet } from '@angular/common';
import {
  Component,
  inject,
  TemplateRef,
  Type,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import { AdminProfile } from '../admin-profile/admin-profile';
import { UserProfile } from '../user-profile/user-profile';
import { User } from '../user/user';
import { Node } from '@angular/compiler';

@Component({
  selector: 'app-main',
  imports: [NgComponentOutlet, User],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
  protected component: Type<any> | null = null;

  vcr = inject(ViewContainerRef);

  content = viewChild<TemplateRef<unknown>>('content');

  protected contentNode: Node[][] = [];

  isUser: boolean = false;

  inputs = {
    title: 'Dynamic Component',
  };

  onCreate() {
    this.contentNode = [this.vcr.createEmbeddedView(this.content()!).rootNodes];
    this.component = this.isUser ? UserProfile : AdminProfile;
  }
  onDestroy() {
    this.component = null;
  }
}
