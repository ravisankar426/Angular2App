import {Component} from '@angular/core';
import {User} from './shared/models/user';

@Component({
	selector:'my-app',
	templateUrl:'./templates/app.component.html',
	styleUrls:['./styles/app.component.css']
})

export class AppComponent {
	activeUser;

	users:User[]=[
	{userId:1,name:'Ravi',userName:'ruppu',state:'MD'},
	{userId:2,name:'Prabhat',userName:'pnadimpalli',state:'MD'}
	];

	selectUser(user){
		this.activeUser=user;
	}

	onUserCreated(event){
		this.users.push(event.user);
	}
}