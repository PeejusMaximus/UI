---
name: chat-commands
description: 'Use when modifying or interacting with the chat API endpoint, specifically `streamChatCompletion`. Outlines the mock API endpoints or streaming logic in the application.'
---

# Chat API Commands & Streaming Logic

## When to Use
- You need to add new mock endpoints or alter the chat request structure.
- You are debugging the server-sent events (SSE) coming from the chat API.
- You need to generate dummy chat data for testing UI variations.

## Implementation Details

The core streaming logic is found in `src/services/api.js` via the `streamChatCompletion` generator function.

1. **Endpoint**: It calls `http://100.101.63.115:8080/v1/chat/completions` via `POST`.
2. **Body Structure**: `messages` array mapping local schema to Standard OpenAI schema (`role: "user" | "assistant"`, `content: "..."`), and `stream: true`.
3. **Data Parsing**: It receives Server-Sent Events (SSE). It looks for `data: ` prefixes, stops when it hits `[DONE]`, and chunks out the delta `content` continuously using `yield`.

## Procedure for Mocking

If the live API is down, use this pattern to mock the responses for UI testing:

```javascript
export async function* streamChatCompletionMock(messages) {
  const mockText = "This is a streaming mock response that simulates the server.";
  const chunks = mockText.split(" ");
  
  for (const chunk of chunks) {
    await new Promise(r => setTimeout(r, 50)); // simulate network delay
    yield chunk + " ";
  }
}
```
Swap out the import or usage in `App.jsx` when necessary to validate interface stability independently from the server.
