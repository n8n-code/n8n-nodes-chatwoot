import type {
	IAuthenticateGeneric,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class ChatwootApi implements ICredentialType {
	name = 'N8nDevChatwootApi';

	displayName = 'chatwoot API';

	icon: Icon = { light: 'file:../nodes/Chatwoot/chatwoot.svg', dark: 'file:../nodes/Chatwoot/chatwoot.dark.svg' };

	documentationUrl = '';

	properties: INodeProperties[] = [
		{
			displayName: 'Base URL',
			name: 'url',
			type: 'string',
			default: 'https://app.chatwoot.com/',
			required: true,
			placeholder: 'https://app.chatwoot.com/',
			description: 'The base URL of your chatwoot API server',
		},
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
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

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.url}}',
			url: '/',
			method: 'GET',
		},
	};
}
