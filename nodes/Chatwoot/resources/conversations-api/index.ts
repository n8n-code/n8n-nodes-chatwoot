import type { INodeProperties } from 'n8n-workflow';

export const conversationsApiDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations API"
					]
				}
			},
			"options": [
				{
					"name": "Create A Conversation",
					"value": "Create A Conversation",
					"action": "Create a conversation",
					"description": "Create a conversation",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/public/api/v1/inboxes/{{$parameter[\"inbox_identifier\"]}}/contacts/{{$parameter[\"contact_identifier\"]}}/conversations"
						}
					}
				},
				{
					"name": "List All Contact Conversations",
					"value": "List All Contact Conversations",
					"action": "List all conversations",
					"description": "List all conversations for the contact",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/public/api/v1/inboxes/{{$parameter[\"inbox_identifier\"]}}/contacts/{{$parameter[\"contact_identifier\"]}}/conversations"
						}
					}
				},
				{
					"name": "Get Single Conversation",
					"value": "Get Single Conversation",
					"action": "Get a single conversation",
					"description": "Retrieves the details of a specific conversation",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/public/api/v1/inboxes/{{$parameter[\"inbox_identifier\"]}}/contacts/{{$parameter[\"contact_identifier\"]}}/conversations/{{$parameter[\"conversation_id\"]}}"
						}
					}
				},
				{
					"name": "Resolve Conversation",
					"value": "Resolve Conversation",
					"action": "Resolve a conversation",
					"description": "Marks a conversation as resolved",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/public/api/v1/inboxes/{{$parameter[\"inbox_identifier\"]}}/contacts/{{$parameter[\"contact_identifier\"]}}/conversations/{{$parameter[\"conversation_id\"]}}/toggle_status"
						}
					}
				},
				{
					"name": "Toggle Typing Status",
					"value": "Toggle Typing Status",
					"action": "Toggle typing status",
					"description": "Toggles the typing status in a conversation",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/public/api/v1/inboxes/{{$parameter[\"inbox_identifier\"]}}/contacts/{{$parameter[\"contact_identifier\"]}}/conversations/{{$parameter[\"conversation_id\"]}}/toggle_typing"
						}
					}
				},
				{
					"name": "Update Last Seen",
					"value": "Update Last Seen",
					"action": "Update last seen",
					"description": "Updates the last seen time of the contact in a conversation",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/public/api/v1/inboxes/{{$parameter[\"inbox_identifier\"]}}/contacts/{{$parameter[\"contact_identifier\"]}}/conversations/{{$parameter[\"conversation_id\"]}}/update_last_seen"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations API"
					],
					"operation": [
						"Create A Conversation"
					]
				}
			}
		},
		{
			"displayName": "Custom Attributes",
			"name": "custom_attributes",
			"type": "json",
			"default": "{}",
			"description": "Custom attributes of the conversation",
			"routing": {
				"send": {
					"property": "custom_attributes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations API"
					],
					"operation": [
						"Create A Conversation"
					]
				}
			}
		},
		{
			"displayName": "GET /public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations API"
					],
					"operation": [
						"List All Contact Conversations"
					]
				}
			}
		},
		{
			"displayName": "GET /public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations API"
					],
					"operation": [
						"Get Single Conversation"
					]
				}
			}
		},
		{
			"displayName": "POST /public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}/toggle_status",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations API"
					],
					"operation": [
						"Resolve Conversation"
					]
				}
			}
		},
		{
			"displayName": "POST /public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}/toggle_typing",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations API"
					],
					"operation": [
						"Toggle Typing Status"
					]
				}
			}
		},
		{
			"displayName": "Typing Status",
			"name": "typing_status",
			"required": true,
			"description": "Typing status, either 'on' or 'off'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "typing_status",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations API"
					],
					"operation": [
						"Toggle Typing Status"
					]
				}
			}
		},
		{
			"displayName": "Typing Status",
			"name": "typing_status",
			"type": "options",
			"default": "on",
			"description": "The typing status to set",
			"options": [
				{
					"name": "On",
					"value": "on"
				},
				{
					"name": "Off",
					"value": "off"
				}
			],
			"routing": {
				"send": {
					"property": "typing_status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations API"
					],
					"operation": [
						"Toggle Typing Status"
					]
				}
			}
		},
		{
			"displayName": "POST /public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}/update_last_seen",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations API"
					],
					"operation": [
						"Update Last Seen"
					]
				}
			}
		},
];
