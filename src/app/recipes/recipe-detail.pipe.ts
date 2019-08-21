import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recipeDetail'
})
export class RecipeDetailPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
