import { Component, OnInit } from '@angular/core';
import { PriceModel } from 'src/app/models/Price.model';
import { GeneralData } from 'src/app/config/general.data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Services } from 'src/app/services/services.service';
@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  //Atribrutes Component
  length = GeneralData.ROUTE_LENGTH;
  formJourney: FormGroup = this.fb.group({});
  money: PriceModel[]=[];
  price: number=0-0;
  selected: PriceModel = new PriceModel(1, "USD",10);

  //Dependency injection
  constructor(private fb: FormBuilder,
    private service: Services) {}

  ngOnInit(): void {
    this.money.push(new PriceModel(1,"USD", 1));
    this.money.push(new PriceModel (2, "EUR", 0.95));
    this.money.push(new PriceModel (3, "COP", 4.773));
    this.selected = this.money[0];
    this.buildForm();
  }

  //Component init
  buildForm() {
    this.formJourney = this.fb.group({
      origin: ['', [Validators.required, Validators.minLength(this.length),],],
      destination: ['', [Validators.required, Validators.minLength(this.length),],],
      maxFlights: ['', [Validators.required,],],
      moneey: ['', []],
    })
  }
  //Get Form
  get getForm(){
    return this.formJourney.controls;
  }


  /**
   * Methot that consumed the service for calculate the route 
   * from origin to destination and max travel of user
   * @return no return. but make the total price and print for console
   */
  routeCalculate(){
    let origin = this.getForm['origin'].value;
    let destination = this.getForm['destination'].value;
    let maxFlights = this.getForm['maxFligths'].value;
    
    if(origin != destination) {
      this.service.MoneyChange(origin,destination).subscribe(data => {this.price = data.Price;
      console.log(data);});
    }

    this.price = 10;

  }

  /**
   * Method that update the money, no return
   * @param id id: any is the selection of user
   */
  updateMoney(id:any){
    if(id){
      if(id.target){
        let money = this.money[Number.parseInt(id.target.value)];
        if (money != null){
          this.selected = money;
        }
      }
    }
  }

}
  

