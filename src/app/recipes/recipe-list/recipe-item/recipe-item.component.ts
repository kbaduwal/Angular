import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeListComponent } from '../recipe-list.component';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit{
  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();
  

  constructor(){}

  ngOnInit() {
    console.log(this.recipe);
      }
    
  onSelected(){ 
    this.recipeSelected.emit();
  }  


}
