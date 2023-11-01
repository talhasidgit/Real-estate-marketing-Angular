import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contactForm: FormGroup;
  constructor(public fb: FormBuilder, public http: HttpClient, public toast: ToastrService) {
    this.contactForm = this.fb.group({
      name: [''],
      userEmail: [''],
      subject: [''],
      message: [''],
    })
  }

  ngOnInit() {
  }
  public onSubmit = () => {
    let httpHeaders = new HttpHeaders();
    httpHeaders.append('Access-Control-Allow-Origin', '*');
    httpHeaders.append('Content-Type','application/json');
    httpHeaders.append('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
    this.http.post(`http://api.everestmarketing.pk/email/contactUs`, this.contactForm.value, {headers: httpHeaders}).subscribe(res => {
      this.toast.success('A verification email has sent to you', 'Success');
    });
  }
}
