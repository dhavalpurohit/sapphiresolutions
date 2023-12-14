import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  type = sessionStorage.getItem('type')
  url = 'http://localhost:3000/list';
  dataList: any = []

  addListForm: FormGroup

  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

  delete(id) {
    console.log("id", id)
    for (let i = 0;i < this.dataList.length;++i) {
      if (this.dataList[i].id === id) {
        this.dataList.splice(i, 1)
      }
    }
  }
  ngOnInit() {
    this.addListForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      age: ['', Validators.required],
    })


    this.http.get(this.url).subscribe(res => {
      this.dataList = res
    })
  }

  get f() { return this.addListForm.controls }

  public addListFun() {
    this.dataList.push(this.addListForm.value)
  }

  public edit(data) {
    this.addListForm = this.formBuilder.group({
      name: [data.name],
      email: [data.email],
      phone: [data.phone],
      age: [data.age],
    })
  }
}
