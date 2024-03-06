import { Component, Input } from '@angular/core';
import { VersionChange } from '../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-changelog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './changelog.component.html',
  styleUrl: './changelog.component.css'
})
export class ChangelogComponent {

  @Input()
  changes: VersionChange[] = [];
}
