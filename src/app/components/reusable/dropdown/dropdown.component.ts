import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, Renderer2, SimpleChanges} from '@angular/core';


export interface Option {
    value: string,
    id?: string
}

@Component({
  selector: 'rm-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit
{
  
  private _dropdownIsOpen: boolean = false;
  readonly ID_PREFIX = 'rm-dropdown-';

  @Output() onValueChange = new EventEmitter<string>();
  @Input() defaultIndex!: number;

  private _value! : string;

  get value(): string {
    return this._value;
  }

  private set value(val: string) {
    if(val == undefined || val == null)
      debugger;
    this._value = val;
    this.onValueChange.emit(val);
  }

  _options!: Option[];

  ngOnInit(): void {
    
    if(this._options == undefined)
      throw new Error("No options given in the DropdownComponent.");
    
    this._value = this._options[this.defaultIndex || 0].value;


  }

  @Input()
  set option(option: Option[]) {

    option.forEach((val, index) => {
      val.id = this.ID_PREFIX + index;
    });

    this._options = option;
  }

  get dropdownIsOpen() : boolean {
    return this._dropdownIsOpen;
  }

  

  @HostListener('window:click', ['$event']) click(e : MouseEvent) {
    if(!this._dropdownIsOpen)
      return;

    let target = e.target as Element;
    if(!target.id.includes(this.ID_PREFIX)) {
      this.toggleDropdown();
    }
    
  };



  public toggleDropdown(): void {
    this._dropdownIsOpen = !this._dropdownIsOpen;


  }

  public handleClick(e : Event) {
    e.stopPropagation();
    e.preventDefault();

    if(this._options == undefined)
      return;

    let target = e.target as Element;

    let text = target.id;
    const val = this._options.find((val) => val.id == text)?.value;
    
    if(text !== this.ID_PREFIX + '-1' && val != null){
      this.value = val;

    } 

    setTimeout(() => {
      this.toggleDropdown();

    }, 100)


  }

}
