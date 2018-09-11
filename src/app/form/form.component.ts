import { Component, OnInit } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

public tableArray = [];

public d: any={};

public skills:any
public skills_arr=[]
first_name=[]
male_array=[];
female_array=[];
male=[];
female=[];
  onSubmit(f:NgForm) {
    {
      
      this.skills_arr=f.value.skill.split(",")

  //console.log( this.skills_arr)
     
      this.d['firstname']= f.value.fname;
      this.d['lastname']= f.value.lname;
      this.d['Age']= f.value.age;
      this.d['Gender']= f.value.gender;

      this.d['Salary']= f.value.salary;
      this.d['Skill']=this.skills_arr;
      this.d['Action']=this.skills_arr;

      var gender= f.value.gender
      
      if(gender=="Male")
      { this.male['firstname']=f.value.fname
        this.male_array.push(this.male)
      }
      
      else
      {
        this.female['firstname']=f.value.fname
        this.female_array.push(this.female)
      
      }
            this.tableArray.push(this.d)
  
    console.log("table array" +this.tableArray);
      
    }
  }

   


  delete(index)
      {
        
        
       if(index.gender=="Female")
       {
       this.female_array.splice(index,1);
       
       }
       else
       {
         this.male_array.splice(index,1);
       }
       this.tableArray.splice(index,1);
      }

}
