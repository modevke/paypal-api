const url = '';

export const configs = {
   configure: {
        mode: 'sandbox', // Sandbox or live
        client_id: 'YOUR APPLICATION CLIENT ID',
        client_secret: 'YOUR APPLICATION CLIENT SECRET'
   },
   redirect_urls: {
        return_url: `${url}/success-callback`,
        cancel_url: `${url}/cancel-callback`
   }
}