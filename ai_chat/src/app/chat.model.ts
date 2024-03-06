export interface CompletionRequest {
  model: 'gpt-3.5-turbo';
  max_tokens: number;
  messages: Message[];
}

export interface CompletionResponse {
  id: string;
  object: string;
  created: number;
  choices: Choice[];
  usage: Usage;
}

export interface Message {
  role: 'assistant' | 'user';
  content: string;
}

export interface Choice {
  index: number;
  message: Message;
  finish_reason: string;
}

export interface Usage {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
}
