import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faAngular, faAndroid, faPhp, faNode } from '@fortawesome/free-brands-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'filter-project',
  templateUrl: './filter-project.component.html'
})
export class FilterProjectComponent implements OnInit {
  public projectForm: FormGroup;
  public faAngular = faAngular as IconProp;
  public faAndroid = faAndroid as IconProp;
  public faPhp = faPhp as IconProp;
  public faNode = faNode as IconProp;
  public faMobile = faMobile as IconProp;

  @Output() changeFilter: EventEmitter<void>;
  constructor(
    private fb: FormBuilder
  ) {
    this.changeFilter = new EventEmitter();
  }

  ngOnInit(): void {
    this.init();
  }

  init(){
    this.projectForm = this.fb.group({
      angular: false,
      android: false,
      php: false,
      nodejs: false,
      flutter: false
    })
  }

  onChangeFilter() {
    this.changeFilter.emit(this.projectForm.value);
  }
}
