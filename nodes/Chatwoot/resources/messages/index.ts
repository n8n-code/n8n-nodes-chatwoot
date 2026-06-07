import type { INodeProperties } from 'n8n-workflow';

export const messagesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					]
				}
			},
			"options": [
				{
					"name": "List All Messages",
					"value": "List All Messages",
					"action": "Get messages",
					"description": "List all messages of a conversation",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/conversations/{{$parameter[\"conversation_id\"]}}/messages"
						}
					}
				},
				{
					"name": "Create A New Message In A Conversation",
					"value": "Create A New Message In A Conversation",
					"action": "Create New Message",
					"description": "Create a new message in the conversation.\n\nUse `application/json` for text messages and `multipart/form-data` when the\nmessage includes file attachments.\n\n### Multipart attachment request\n\nSend files with the `attachments[]` form field. `curl -F` sets the\n`multipart/form-data` content type and boundary automatically.\n\n```bash\ncurl -X POST \"https://app.chatwoot.com/api/v1/accounts/{account_id}/conversations/{conversation_id}/messages\" \\\n  -H \"api_access_token: <your-api-token>\" \\\n  -F \"content=Here is the screenshot\" \\\n  -F \"message_type=outgoing\" \\\n  -F \"private=false\" \\\n  -F \"attachments[]=@/path/to/screenshot.png\"\n```\n\n## WhatsApp Template Messages\n\nFor WhatsApp channels, you can send structured template messages using the `template_params` field. \nTemplates must be pre-approved in WhatsApp Business Manager.\n\n### Example Templates\n\n**Text with Image Header:**\n```json\n{\n  \"content\": \"Hi your order 121212 is confirmed. Please wait for further updates\",\n  \"template_params\": {\n    \"name\": \"order_confirmation\",\n    \"category\": \"MARKETING\",\n    \"language\": \"en\",\n    \"processed_params\": {\n      \"body\": {\n        \"1\": \"121212\"\n      },\n      \"header\": {\n        \"media_url\": \"https://picsum.photos/200/300\",\n        \"media_type\": \"image\"\n      }\n    }\n  }\n}\n```\n\n**Text with Copy Code Button:**\n```json\n{\n  \"content\": \"Special offer! Get 30% off your next purchase. Use the code below\",\n  \"template_params\": {\n    \"name\": \"discount_coupon\",\n    \"category\": \"MARKETING\",\n    \"language\": \"en\",\n    \"processed_params\": {\n      \"body\": {\n        \"discount_percentage\": \"30\"\n      },\n      \"buttons\": [{\n        \"type\": \"copy_code\",\n        \"parameter\": \"SAVE20\"\n      }]\n    }\n  }\n}\n```\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/conversations/{{$parameter[\"conversation_id\"]}}/messages"
						}
					}
				},
				{
					"name": "Delete A Message",
					"value": "Delete A Message",
					"action": "Delete a message",
					"description": "Delete a message and it's attachments from the conversation.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/conversations/{{$parameter[\"conversation_id\"]}}/messages/{{$parameter[\"message_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v1/accounts/{account_id}/conversations/{conversation_id}/messages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"List All Messages"
					]
				}
			}
		},
		{
			"displayName": "After",
			"name": "after",
			"description": "Fetch messages after the message with this ID. Returns up to 100 messages in ascending order.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "after",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"List All Messages"
					]
				}
			}
		},
		{
			"displayName": "Before",
			"name": "before",
			"description": "Fetch messages before the message with this ID. Returns up to 20 messages in ascending order.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "before",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"List All Messages"
					]
				}
			}
		},
		{
			"displayName": "Api Access Token",
			"name": "security_userapikey",
			"type": "string",
			"default": "",
			"description": "This token can be obtained by visiting the profile page or via rails console. Provides access to  endpoints based on the user permissions levels. This token can be saved by an external system when user is created via API, to perform activities on behalf of the user.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"api_access_token": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"List All Messages"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/accounts/{account_id}/conversations/{conversation_id}/messages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create A New Message In A Conversation"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Content",
			"name": "content",
			"type": "string",
			"default": "Hello, how can I help you?",
			"description": "The content of the message",
			"routing": {
				"send": {
					"property": "content",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create A New Message In A Conversation"
					]
				}
			}
		},
		{
			"displayName": "Message Type",
			"name": "message_type",
			"type": "options",
			"default": "outgoing",
			"description": "The type of the message",
			"options": [
				{
					"name": "Outgoing",
					"value": "outgoing"
				},
				{
					"name": "Incoming",
					"value": "incoming"
				}
			],
			"routing": {
				"send": {
					"property": "message_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create A New Message In A Conversation"
					]
				}
			}
		},
		{
			"displayName": "Private",
			"name": "private",
			"type": "boolean",
			"default": false,
			"description": "Flag to identify if it is a private note",
			"routing": {
				"send": {
					"property": "private",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create A New Message In A Conversation"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "content_type",
			"type": "options",
			"default": "text",
			"description": "Content type of the message",
			"options": [
				{
					"name": "Text",
					"value": "text"
				},
				{
					"name": "Input Email",
					"value": "input_email"
				},
				{
					"name": "Cards",
					"value": "cards"
				},
				{
					"name": "Input Select",
					"value": "input_select"
				},
				{
					"name": "Form",
					"value": "form"
				},
				{
					"name": "Article",
					"value": "article"
				}
			],
			"routing": {
				"send": {
					"property": "content_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create A New Message In A Conversation"
					]
				}
			}
		},
		{
			"displayName": "Content Attributes",
			"name": "content_attributes",
			"type": "json",
			"default": "{}",
			"description": "Attributes based on the content type",
			"routing": {
				"send": {
					"property": "content_attributes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create A New Message In A Conversation"
					]
				}
			}
		},
		{
			"displayName": "Campaign Id",
			"name": "campaign_id",
			"type": "number",
			"default": 1,
			"description": "The campaign id to which the message belongs",
			"routing": {
				"send": {
					"property": "campaign_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create A New Message In A Conversation"
					]
				}
			}
		},
		{
			"displayName": "Template Params",
			"name": "template_params",
			"type": "json",
			"default": "{\n  \"name\": \"purchase_receipt\",\n  \"category\": \"UTILITY\",\n  \"language\": \"en_US\",\n  \"processed_params\": {\n    \"body\": {\n      \"1\": \"Visa\",\n      \"2\": \"Nike\",\n      \"3\": \"Bill\"\n    },\n    \"header\": {\n      \"media_url\": \"https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf\",\n      \"media_type\": \"document\"\n    },\n    \"buttons\": [\n      {\n        \"parameter\": \"SSFSDFSD\"\n      }\n    ]\n  }\n}",
			"description": "WhatsApp template parameters for sending structured messages",
			"routing": {
				"send": {
					"property": "template_params",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create A New Message In A Conversation"
					]
				}
			}
		},
		{
			"displayName": "Api Access Token",
			"name": "security_userapikey",
			"type": "string",
			"default": "",
			"description": "This token can be obtained by visiting the profile page or via rails console. Provides access to  endpoints based on the user permissions levels. This token can be saved by an external system when user is created via API, to perform activities on behalf of the user.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"api_access_token": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create A New Message In A Conversation"
					]
				}
			}
		},
		{
			"displayName": "Api Access Token",
			"name": "security_agentbotapikey",
			"type": "string",
			"default": "",
			"description": "This token should be provided by system admin or obtained via rails console. This token can be used to build bot integrations and can only access limited apis.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"api_access_token": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create A New Message In A Conversation"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/v1/accounts/{account_id}/conversations/{conversation_id}/messages/{message_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Delete A Message"
					]
				}
			}
		},
		{
			"displayName": "Api Access Token",
			"name": "security_userapikey",
			"type": "string",
			"default": "",
			"description": "This token can be obtained by visiting the profile page or via rails console. Provides access to  endpoints based on the user permissions levels. This token can be saved by an external system when user is created via API, to perform activities on behalf of the user.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"api_access_token": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Delete A Message"
					]
				}
			}
		},
];
