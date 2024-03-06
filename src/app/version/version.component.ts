import { Component, Input, input } from '@angular/core';
import { Version } from '../types';


@Component({
  selector: 'app-version',
  standalone: true,
  imports: [],
  templateUrl: './version.component.html',
  styleUrl: './version.component.css'
})
export class VersionComponent {

  @Input()
  version!: Version;
}
