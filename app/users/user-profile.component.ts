import {Component, Input} from '@angular/core';
import {User} from '../shared/models/user'

@Component({
	selector:'user-profile',
	template:`			
				<div class="jumbotron" *ngIf="user">
					<h1 class="padding-left-30-px">{{user.name}}<small> {{user.userName}} </small></h1>
					<input class="form-control padding-left-30-px" [(ngModel)]="user.name" />
				</div>
	`
})


export class UserProfileComponent {
	@Input() user: User;
}