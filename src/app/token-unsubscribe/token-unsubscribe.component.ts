import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-token-unsubscribe',
  templateUrl: './token-unsubscribe.component.html',
  styleUrls: ['./token-unsubscribe.component.css']
})
export class TokenUnsubscribeComponent implements OnInit {

  newsletterLists = [
    {id: 1, category: 'Daily Newsletters', color: '#04BFB5', shortText: 'Lorem Ipsum', isSelected: true},
    {id: 2, category: 'Weekly Newsletters', color: '#F4BE5E', shortText: 'Dolor sit', isSelected: false},
    {id: 3, category: 'Monthly Newsletters', color: '#0038F0', shortText: 'Amet', isSelected: false},
    {id: 4, category: 'Breaking News only', color: '#BB93F4', shortText: 'The Good Stuff', isSelected: false},
  ];
  constructor(private router: Router){

  }
  ngOnInit(): void {
  }

  updateNewsLetterItem(item: any){
    this.newsletterLists.forEach(x => x.isSelected = false);
    item.isSelected = true;
  }

  moveToConfirmation(){
    this.router.navigate(['/token-unsubscribe/confirmation']);
  }
  
}
