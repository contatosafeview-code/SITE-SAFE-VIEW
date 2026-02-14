
export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface DashboardData {
  time: string;
  alerts: number;
  activity: number;
}
