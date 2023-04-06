import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-googlercs',
  templateUrl: './googlercs.component.html',
  styleUrls: ['./googlercs.component.scss']
})
export class GooglercsComponent {
  options: boolean = true;
  elements: any[] = [];
  richCard: FormGroup;
  filePreviewRichCard: string;
  titleRich: string;
  messageContentRich: string;
  actionButton1TitleRich: string;
  actionButton1URLRich: string;

  carouselForm: FormGroup;
  filePreviewCarousel: string;
  titleCaro: string;
  messageContentCaro: string;
  actionButton1TitleCaro: string;
  actionButton1URLCaro: string;

  fieldArray: Array<any> = [];
  newAttribute: any = {};

  constructor(private fb: FormBuilder) {
    this.richCard = this.fb.group({
      file: null,
      titleRich: '',
      messageContentRich: '',
      actionButton1TitleRich: '',
      actionButton1URLRich: '',
    })
    // this.carouselForm = this.fb.group({
    //   file: null,
    //   titleCaro: '',
    //   messageContentCaro: '',
    //   actionButton1TitleCaro: '',
    //   actionButton1URLCaro: '',
    // })
  }

  loanProductForm: FormGroup;
  
  ngOnInit() {
    this.loanProductForm = this.fb.group({
     vitals: this.fb.array([this.addProductFormGroup()])
    });
  }

  addProductFormGroup(): FormGroup {
    return this.fb.group({
      file: [ "", Validators.required],
      titleCaro: ["", Validators.required],
      messageContentCaro: ["", Validators.required],
      actionButtonTitleCaro: ["", Validators.required],
      actionButtonURLCaro: ["", Validators.required],
    });
  }

  addProductButtonClick(): void {
    (<FormArray>this.loanProductForm.get("vitals")).push(
      this.addProductFormGroup()
    );
  }

  onSubmit() {
    console.log(this.loanProductForm.value);

  }

  addFieldValue() {
    this.fieldArray.push(this.newAttribute)
    this.newAttribute = {};
  }


  onSubmitRichCard() {
    this.titleRich = this.richCard.get('titleRich')?.value;
    this.messageContentRich = this.richCard.get('messageContentRich')?.value;
    this.actionButton1TitleRich = this.richCard.get('actionButton1TitleRich')?.value;
    this.actionButton1URLRich = this.richCard.get('actionButton1URLRich')?.value;

    const file = this.richCard.get('file').value;
    // Set the file preview image to display.
    const reader = new FileReader();
    reader.onload = () => {
      this.filePreviewRichCard = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  onSubmitCarouselForm() {
    this.titleCaro = this.carouselForm.get('titleCaro')?.value;
    this.messageContentCaro = this.carouselForm.get('messageContentCaro')?.value;
    this.actionButton1TitleCaro = this.carouselForm.get('actionButton1TitleCaro')?.value;
    this.actionButton1URLCaro = this.carouselForm.get('actionButton1URLCaro')?.value;

    const file = this.carouselForm.get('file').value;
    // Set the file preview image to display.
    const reader = new FileReader();
    reader.onload = () => {
      this.filePreviewCarousel = reader.result as string;
    };
    reader.readAsDataURL(file);
  }


  // addElement() {
  //   this.elements.push({});
  // }

  removeElement(product) {
    const index = this.loanProductForm.value.indexOf(product);
    if (index !== -1) {
      this.loanProductForm.value.splice(index, 1);
    }
  }

}
