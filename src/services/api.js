export async function* streamChatCompletion(messages) {
  const formattedMessages = messages.map(msg => ({
    role: msg.sender === 'me' ? 'user' : 'assistant',
    content: msg.text
  }));

  const response = await fetch('http://100.101.63.115:8080/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messages: formattedMessages,
      stream: true,
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    
    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split('\n');
    
    // Keep the last incomplete line in the buffer
    buffer = lines.pop() || '';
    
    for (const line of lines) {
      if (line.trim() === '') continue;
      if (line.startsWith('data: ')) {
        const dataStr = line.slice(6).trim();
        if (dataStr === '[DONE]') return;
        
        try {
          const data = JSON.parse(dataStr);
          if (data.choices && data.choices[0]?.delta?.content) {
            yield data.choices[0].delta.content;
          }
        } catch {
          console.warn("Failed to parse SSE data line", dataStr);
        }
      }
    }
  }
}
