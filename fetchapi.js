class ProxyApi {
    constructor(proxyUrl) {
      this.proxyUrl = proxyUrl;
    }
  
    async serialize() {
      const response = await fetch(`${this.proxyUrl}/serialize`, { method: 'GET' });
      const result = await response.json();
      return result;
    }
  
    async deserialize() {
      const response = await fetch(`${this.proxyUrl}/deserialize`, { method: 'GET' });
      const result = await response.json();
      return result;
    }
  
    async addAccounts() {
      const response = await fetch(`${this.proxyUrl}/addAccounts`, { method: 'POST' });
      const result = await response.json();
      return result;
    }
  
    async getAccounts() {
      const response = await fetch(`${this.proxyUrl}/getAccounts`, { method: 'GET' });
      const result = await response.json();
      return result;
    }
  
    async signTransaction() {
      const response = await fetch(`${this.proxyUrl}/signTransaction`, { method: 'POST' });
      const result = await response.json();
      return result;
    }
  
    async signMessage(account, message, options = {}) {
      const requestBody = { account, message, options };
      const response = await fetch(`${this.proxyUrl}/signMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      });
      const result = await response.json();
      return result;
    }
  
    async signPersonalMessage(account, message, options = {}) {
      const requestBody = { account, message, options };
      const response = await fetch(`${this.proxyUrl}/signPersonalMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      });
      const result = await response.json();
      return result;
    }
  
    async signTypedData(account, typedData, options = { version: 'V1' }) {
      const requestBody = { account, typedData, version: options.version };
      const response = await fetch(`${this.proxyUrl}/signTypedData`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      });
      const result = await response.json();
      return result;
    }
  
    async decryptMessage() {
      const response = await fetch(`${this.proxyUrl}/decryptMessage`, { method: 'POST' });
      const result = await response.json();
      return result;
    }
  
    async getEncryptionPublicKey() {
      const response = await fetch(`${this.proxyUrl}/getEncryptionPublicKey`, { method: 'POST' });
      const result = await response.json();
      return result;
    }
  }
  