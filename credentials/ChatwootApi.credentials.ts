import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ChatwootApi implements ICredentialType {
        name = 'N8nDevChatwootApi';

        displayName = 'Chatwoot API';

        icon: Icon = { light: 'file:../nodes/Chatwoot/chatwoot.png', dark: 'file:../nodes/Chatwoot/chatwoot.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://app.chatwoot.com/',
                        required: true,
                        placeholder: 'https://app.chatwoot.com/',
                        description: 'The base URL of your Chatwoot API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'api_access_token': '={{$credentials.apiKey}}',
                        },
                },
        };


}
