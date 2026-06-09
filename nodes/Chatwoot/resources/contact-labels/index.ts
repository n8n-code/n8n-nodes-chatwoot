import type { INodeProperties } from 'n8n-workflow';

export const contactLabelsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Contact Labels"
					]
				}
			},
			"options": [
				{
					"name": "List All Labels Of A Contact",
					"value": "List All Labels Of A Contact",
					"action": "List Labels",
					"description": "Lists all the labels of a contact",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/contacts/{{$parameter[\"id\"]}}/labels"
						}
					}
				},
				{
					"name": "Contact Add Labels",
					"value": "Contact Add Labels",
					"action": "Add Labels",
					"description": "Add labels to a contact. Note that this API would overwrite the existing list of labels associated to the conversation.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/contacts/{{$parameter[\"id\"]}}/labels"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v1/accounts/{account_id}/contacts/{id}/labels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contact Labels"
					],
					"operation": [
						"List All Labels Of A Contact"
					]
				}
			}
		},
		{
			"displayName": "API Access Token",
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
						"Contact Labels"
					],
					"operation": [
						"List All Labels Of A Contact"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/accounts/{account_id}/contacts/{id}/labels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contact Labels"
					],
					"operation": [
						"Contact Add Labels"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Labels",
			"name": "labels",
			"type": "json",
			"default": "[\n  \"support\",\n  \"billing\"\n]",
			"description": "Array of labels (comma-separated strings)",
			"routing": {
				"send": {
					"property": "labels",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contact Labels"
					],
					"operation": [
						"Contact Add Labels"
					]
				}
			}
		},
		{
			"displayName": "API Access Token",
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
						"Contact Labels"
					],
					"operation": [
						"Contact Add Labels"
					]
				}
			}
		},
];
