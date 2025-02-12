export interface Job {
  id: number;
  company: string;
  role: string;
  submittedAt: String | null;
  oaDeadline: String | null;
  link: string | null;
  stage: string;
}
