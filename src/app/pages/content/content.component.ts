import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  @Input()
  photoCover: string = "https://tm.ibxk.com.br/2023/09/28/28181452146269.jpg"
  @Input()
  contentTitle: string = "Homem de Ferro"
  @Input()
  contentDescriptio: string = "testetet"

  constructor(
    private route: ActivatedRoute
  ) {

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      console.log(value.get("Id"))
    )
  }
}
