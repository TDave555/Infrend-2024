export interface Applicant {
  id: number;
  name: string;
  role: string;
  experience: '0-5' | '5-10' | '10+';
  desiredSalary: number;
}

export const applicants: Applicant[] = [
  {
      id: 1,
      name: 'Tóth Béla',
      role: 'Junior Developer',
      experience: '0-5',
      desiredSalary: 450000
  },
  {
      id: 2,
      name: 'Kiss Géza',
      role: 'Senior Developer',
      experience: '10+',
      desiredSalary: 1600000
  },
  {
      id: 3,
      name: 'Dr. Szabó Ferenc',
      role: 'Business Analyst',
      experience: '10+',
      desiredSalary: 400000
  },
  {
      id: 4,
      name: 'Nagy Péter',
      role: 'Software Architect',
      experience: '0-5',
      desiredSalary: 520000
  },
  {
      id: 5,
      name: 'Kovács Tamás',
      role: 'UX Designer',
      experience: '10+',
      desiredSalary: 315000
  },
  {
      id: 6,
      name: 'Dr. Horváth Ilona',
      role: 'Security Expert',
      experience: '10+',
      desiredSalary: 736000
  },
  {
      id: 7,
      name: 'Székely László',
      role: 'Software Developer',
      experience: '0-5',
      desiredSalary: 412000
  },
  {
      id: 8,
      name: 'Varga Béláné',
      role: 'System Administrator',
      experience: '10+',
      desiredSalary: 1300000
  },
  {
      id: 9,
      name: 'Fehér János',
      role: 'Product Owner',
      experience: '5-10',
      desiredSalary: 725000
  },
  {
      id: 10,
      name: 'Molnár Árpád',
      role: 'General Director Sales Agent Manager Expert',
      experience: '0-5',
      desiredSalary: 3500000
  }
];
