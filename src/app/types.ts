export interface Version {
  major: number;
  minor: number;
  patch: number;
}

export type VersionType = 'major' | 'minor' | 'patch';

export interface VersionChange {
  versionType : VersionType;
  oldValue: number;
  newValue:number;
}
