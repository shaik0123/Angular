import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any, searchString: string) {
    if(!items) return []
    if(!searchString) return items
    searchString = searchString.toLowerCase()
    return items.filter((item: {title: string, takeNote: string}) => item.title.toLowerCase().includes(searchString) || item.takeNote.toLowerCase().includes(searchString));
  }

}
