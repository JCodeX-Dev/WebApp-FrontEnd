export interface Qualification {
  education: Qtype[];
  work: Qtype[];
}

export interface Qtype {
  title: string;
  location: string;
  duration: string;
}
