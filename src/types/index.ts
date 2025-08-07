export interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}