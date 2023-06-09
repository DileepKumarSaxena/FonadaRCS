import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
declare var require: any;
@Component({
  selector: 'app-xiaomircs',
  templateUrl: './xiaomircs.component.html',
  styleUrls: ['./xiaomircs.component.scss']
})
export class XiaomircsComponent {
  form: FormGroup;
  filePreview: string;
  titleinsms:string;
  messagecontent:string;
  actionButton1Title:string;
  actionButton1URL:string;
  actionButton2Title:string;
  actionButton2URL:string;
  actionButton3Title:string;
  actionButton3URL:string;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      file: null,
      titleinsms:'',
      messagecontent:'',
      actionButton1Title:'',
      actionButton1URL:'',
      actionButton2Title:'',
      actionButton2URL:'',
      actionButton3Title:'',
      actionButton3URL:''
    })
  }

  onSubmit() {
    this.titleinsms = this.form.get('titleinsms')?.value;
    this.messagecontent = this.form.get('messagecontent')?.value;
    this.actionButton1Title = this.form.get('actionButton1Title')?.value;
    this.actionButton1URL = this.form.get('actionButton1URL')?.value;
    this.actionButton2Title = this.form.get('actionButton2Title')?.value;
    this.actionButton2URL = this.form.get('actionButton2URL')?.value;
    this.actionButton3Title = this.form.get('actionButton3Title')?.value;
    this.actionButton3URL = this.form.get('actionButton3URL')?.value;

    const file = this.form.get('file').value;
    // Set the file preview image to display.
    const reader = new FileReader();
    reader.onload = () => {
      this.filePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  
  
}
