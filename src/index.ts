import { Company } from './classes/Company';
import { CustomMap } from './classes/CustomMap';
import { User } from './classes/User';


document.addEventListener('DOMContentLoaded', () => {


  const user = new User();

  console.log(user);

  const company = new Company();

  console.log(company);

  const map = new CustomMap('#map');

  map.addMaker(user);
  map.addMaker(company);



});