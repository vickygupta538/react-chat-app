export const get = async (url) => {
    const response = await fetch('https://my-json-server.typicode.com/codebuds-fk/chat/chats');
    const result = await response.json();
    return result;
}