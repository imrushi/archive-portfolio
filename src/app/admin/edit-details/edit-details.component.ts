import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.scss']
})
export class EditDetailsComponent implements OnInit {
  signupForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    let eduDegree = '';
    let eduCollege = '';
    let eduFdate = '';
    let eduTdate = '';
    let eduPercentage = '';
    let educationList = new FormArray([]);

    this.signupForm = new FormGroup({
      // degree: new FormControl(eduDegree),
      //   college: new FormControl(eduCollege),
      //   fdate: new FormControl(eduFdate),
      //   tdate: new FormControl(eduTdate),
      //   percentage: new FormControl(eduPercentage)
      collegedetails: educationList
    })
  }

  onAddEductionDetails() {
		(<FormArray>this.signupForm.get('collegedetails')).push(
			new FormGroup({
				// name: new FormControl(null, Validators.required),
				// amount: new FormControl(null, [ Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/) ])
        degree: new FormControl(null),
        college: new FormControl(null),
        fdate: new FormControl(null),
        tdate: new FormControl(null),
        percentage: new FormControl(null)
			})
		);
	}

  get collegesControls() {
		// a getter!
		return (<FormArray>this.signupForm.get('collegedetails')).controls;
	}

  onDeleteEductionDetails(index: number){
    (<FormArray>this.signupForm.get('collegedetails')).removeAt(index);
  }

  onSubmit() {
    console.log(this.signupForm.value)
  }
}
