import fetch from '../helpers/ApiConfig';

export const chatService = {
  async sendPrompt(message: string) {
    return await fetch('POST', '/chat', { prompt: message });
  },
};
