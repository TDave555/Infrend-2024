import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VersionComponent } from './version/version.component';
import { ControlComponent } from './control/control.component';
import { ChangelogComponent } from './changelog/changelog.component';
import { VersionType, Version, VersionChange } from './types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VersionComponent, ControlComponent, ChangelogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  version: Version = {major: 1, minor: 0, patch: 0};

  changelog: VersionChange[] = [];

  incrementVersion(versionType: VersionType) {
    if(versionType == 'major') {
      this.version.major++;
      this.version.minor = 0;
      this.version.patch = 0;
      this.changelog.unshift({
        versionType: 'major',
        oldValue: this.version.major -1,
        newValue: this.version.major,
      });
    } else if(versionType == 'minor') {
      this.version.minor++;
      this.version.patch = 0;
      this.changelog.unshift({
        versionType: 'minor',
        oldValue: this.version.minor -1,
        newValue: this.version.minor,
      });
    } else if(versionType == 'patch') {
      this.version.patch++;
      this.changelog.unshift({
        versionType: 'patch',
        oldValue: this.version.patch -1,
        newValue: this.version.patch,
      });
    }
  }
}
