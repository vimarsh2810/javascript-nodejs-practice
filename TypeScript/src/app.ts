import { Invoice } from './classes/invoice.js'
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/payment.js';
import { HasFormatter } from './Interfaces/HasFormatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;


const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if(type.value === 'invoice') {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  }
  else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }
   
  list.render(doc, type.value, 'end');
});

interface Resource<T> {
  UID: number;
  resourceName: string;
  data: T;
}

const docFour: Resource<object> = {
  UID: 3,
  resourceName: 'person',
  data: {name: 'Vimarsh'} 
}

const docFive: Resource<string[]> = {
  UID: 5,
  resourceName: 'shoppingList',
  data: ['bread','milk']
}

console.log(docFour ,docFive);