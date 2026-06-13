import type { INodeProperties } from 'n8n-workflow';

export const conversationsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations"
					]
				}
			},
			"options": [
				{
					"name": "Conversation List Meta",
					"value": "Conversation List Meta",
					"action": "Get Conversation Counts",
					"description": "Get open, unassigned and all Conversation counts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/conversations/meta"
						}
					}
				},
				{
					"name": "Conversation List",
					"value": "Conversation List",
					"action": "Conversations List",
					"description": "List all the conversations with pagination",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/conversations"
						}
					}
				},
				{
					"name": "New Conversation",
					"value": "New Conversation",
					"action": "Create New Conversation",
					"description": "Creating a conversation in chatwoot requires a source id. \n\n Learn more about source_id: https://www.chatwoot.com/hc/user-guide/articles/1677839703-how-to-create-an-api-channel-inbox#send-messages-to-the-api-channel",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/conversations"
						}
					}
				},
				{
					"name": "Conversation Filter",
					"value": "Conversation Filter",
					"action": "Conversations Filter",
					"description": "Filter conversations with custom filter options and pagination",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/conversations/filter"
						}
					}
				},
				{
					"name": "Get Details Of A Conversation",
					"value": "Get Details Of A Conversation",
					"action": "Conversation Details",
					"description": "Get all details regarding a conversation with all messages in the conversation",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/conversations/{{$parameter[\"conversation_id\"]}}"
						}
					}
				},
				{
					"name": "Update Conversation",
					"value": "Update Conversation",
					"action": "Update Conversation",
					"description": "Update Conversation Attributes",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/conversations/{{$parameter[\"conversation_id\"]}}"
						}
					}
				},
				{
					"name": "Toggle Status Of A Conversation",
					"value": "Toggle Status Of A Conversation",
					"action": "Toggle Status",
					"description": "Toggle the status of a conversation. Pass `status` to explicitly set the\nconversation state. Use `snoozed` along with `snoozed_until` to snooze a\nconversation until a specific time. If `snoozed_until` is omitted, the\nconversation is snoozed until the next reply from the contact. Regardless\nof the value provided, snoozed conversations always reopen on the next\nreply from the contact.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/conversations/{{$parameter[\"conversation_id\"]}}/toggle_status"
						}
					}
				},
				{
					"name": "Toggle Priority Of A Conversation",
					"value": "Toggle Priority Of A Conversation",
					"action": "Toggle Priority",
					"description": "Toggles the priority of conversation",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/conversations/{{$parameter[\"conversation_id\"]}}/toggle_priority"
						}
					}
				},
				{
					"name": "Toggle Typing Status Of A Conversation",
					"value": "Toggle Typing Status Of A Conversation",
					"action": "Toggle Typing Status",
					"description": "Toggles the typing status for a conversation.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/conversations/{{$parameter[\"conversation_id\"]}}/toggle_typing_status"
						}
					}
				},
				{
					"name": "Update Custom Attributes Of A Conversation",
					"value": "Update Custom Attributes Of A Conversation",
					"action": "Update Custom Attributes",
					"description": "Updates the custom attributes of a conversation",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/conversations/{{$parameter[\"conversation_id\"]}}/custom_attributes"
						}
					}
				},
				{
					"name": "List All Labels Of A Conversation",
					"value": "List All Labels Of A Conversation",
					"action": "List Labels",
					"description": "Lists all the labels of a conversation",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/conversations/{{$parameter[\"conversation_id\"]}}/labels"
						}
					}
				},
				{
					"name": "Conversation Add Labels",
					"value": "Conversation Add Labels",
					"action": "Add Labels",
					"description": "Add labels to a conversation. Note that this API would overwrite the existing list of labels associated to the conversation.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/conversations/{{$parameter[\"conversation_id\"]}}/labels"
						}
					}
				},
				{
					"name": "Get Conversation Reporting Events",
					"value": "Get Conversation Reporting Events",
					"action": "Conversation Reporting Events",
					"description": "Get reporting events for a specific conversation. This endpoint returns events such as first response time, resolution time, and other metrics for the conversation, sorted by creation time in ascending order.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/conversations/{{$parameter[\"conversation_id\"]}}/reporting_events"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v1/accounts/{account_id}/conversations/meta",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations"
					],
					"operation": [
						"Conversation List Meta"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"description": "Filter by conversation status.",
			"default": "open",
			"type": "options",
			"options": [
				{
					"name": "All",
					"value": "all"
				},
				{
					"name": "Open",
					"value": "open"
				},
				{
					"name": "Resolved",
					"value": "resolved"
				},
				{
					"name": "Pending",
					"value": "pending"
				},
				{
					"name": "Snoozed",
					"value": "snoozed"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "status",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations"
					],
					"operation": [
						"Conversation List Meta"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Filters conversations with messages containing the search term",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations"
					],
					"operation": [
						"Conversation List Meta"
					]
				}
			}
		},
		{
			"displayName": "Inbox ID",
			"name": "inbox_id",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "inbox_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations"
					],
					"operation": [
						"Conversation List Meta"
					]
				}
			}
		},
		{
			"displayName": "Team ID",
			"name": "team_id",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "team_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations"
					],
					"operation": [
						"Conversation List Meta"
					]
				}
			}
		},
		{
			"displayName": "Labels",
			"name": "labels",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "labels",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations"
					],
					"operation": [
						"Conversation List Meta"
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
						"Conversations"
					],
					"operation": [
						"Conversation List Meta"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/accounts/{account_id}/conversations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations"
					],
					"operation": [
						"Conversation List"
					]
				}
			}
		},
		{
			"displayName": "Assignee Type",
			"name": "assignee_type",
			"description": "Filter conversations by assignee type.",
			"default": "all",
			"type": "options",
			"options": [
				{
					"name": "Me",
					"value": "me"
				},
				{
					"name": "Unassigned",
					"value": "unassigned"
				},
				{
					"name": "All",
					"value": "all"
				},
				{
					"name": "Assigned",
					"value": "assigned"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "assignee_type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations"
					],
					"operation": [
						"Conversation List"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"description": "Filter by conversation status.",
			"default": "open",
			"type": "options",
			"options": [
				{
					"name": "All",
					"value": "all"
				},
				{
					"name": "Open",
					"value": "open"
				},
				{
					"name": "Resolved",
					"value": "resolved"
				},
				{
					"name": "Pending",
					"value": "pending"
				},
				{
					"name": "Snoozed",
					"value": "snoozed"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "status",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations"
					],
					"operation": [
						"Conversation List"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Filters conversations with messages containing the search term",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations"
					],
					"operation": [
						"Conversation List"
					]
				}
			}
		},
		{
			"displayName": "Inbox ID",
			"name": "inbox_id",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "inbox_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations"
					],
					"operation": [
						"Conversation List"
					]
				}
			}
		},
		{
			"displayName": "Team ID",
			"name": "team_id",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "team_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations"
					],
					"operation": [
						"Conversation List"
					]
				}
			}
		},
		{
			"displayName": "Labels",
			"name": "labels",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "labels",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations"
					],
					"operation": [
						"Conversation List"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "paginate through conversations",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations"
					],
					"operation": [
						"Conversation List"
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
						"Conversations"
					],
					"operation": [
						"Conversation List"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/accounts/{account_id}/conversations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations"
					],
					"operation": [
						"New Conversation"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Source ID",
			"name": "source_id",
			"type": "string",
			"default": "1234567890",
			"description": "Conversation source id",
			"routing": {
				"send": {
					"property": "source_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations"
					],
					"operation": [
						"New Conversation"
					]
				}
			}
		},
		{
			"displayName": "Inbox ID",
			"name": "inbox_id",
			"type": "number",
			"default": 1,
			"description": "Id of inbox in which the conversation is created <br/> Allowed Inbox Types: Website, Phone, Api, Email",
			"routing": {
				"send": {
					"property": "inbox_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations"
					],
					"operation": [
						"New Conversation"
					]
				}
			}
		},
		{
			"displayName": "Contact ID",
			"name": "contact_id",
			"type": "number",
			"default": 1,
			"description": "Contact Id for which conversation is created",
			"routing": {
				"send": {
					"property": "contact_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations"
					],
					"operation": [
						"New Conversation"
					]
				}
			}
		},
		{
			"displayName": "Additional Attributes",
			"name": "additional_attributes",
			"type": "json",
			"default": "{\n  \"browser\": \"Chrome\",\n  \"browser_version\": \"89.0.4389.82\",\n  \"os\": \"Windows\",\n  \"os_version\": \"10\"\n}",
			"description": "Lets you specify attributes like browser information",
			"routing": {
				"send": {
					"property": "additional_attributes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations"
					],
					"operation": [
						"New Conversation"
					]
				}
			}
		},
		{
			"displayName": "Custom Attributes",
			"name": "custom_attributes",
			"type": "json",
			"default": "{\n  \"attribute_key\": \"attribute_value\",\n  \"priority_conversation_number\": 3\n}",
			"description": "The object to save custom attributes for conversation, accepts custom attributes key and value",
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
						"Conversations"
					],
					"operation": [
						"New Conversation"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "open",
			"description": "Specify the conversation whether it's pending, open, closed",
			"options": [
				{
					"name": "Open",
					"value": "open"
				},
				{
					"name": "Resolved",
					"value": "resolved"
				},
				{
					"name": "Pending",
					"value": "pending"
				}
			],
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations"
					],
					"operation": [
						"New Conversation"
					]
				}
			}
		},
		{
			"displayName": "Assignee ID",
			"name": "assignee_id",
			"type": "number",
			"default": 1,
			"description": "Agent Id for assigning a conversation to an agent",
			"routing": {
				"send": {
					"property": "assignee_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations"
					],
					"operation": [
						"New Conversation"
					]
				}
			}
		},
		{
			"displayName": "Team ID",
			"name": "team_id",
			"type": "number",
			"default": 1,
			"description": "Team Id for assigning a conversation to a team\\",
			"routing": {
				"send": {
					"property": "team_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations"
					],
					"operation": [
						"New Conversation"
					]
				}
			}
		},
		{
			"displayName": "Snoozed Until",
			"name": "snoozed_until",
			"type": "string",
			"default": "2030-07-21T17:32:28Z",
			"description": "Snoozed until date time",
			"routing": {
				"send": {
					"property": "snoozed_until",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations"
					],
					"operation": [
						"New Conversation"
					]
				}
			}
		},
		{
			"displayName": "Message",
			"name": "message",
			"type": "json",
			"default": "{\n  \"content\": \"Hello, how can I help you?\",\n  \"template_params\": {\n    \"name\": \"sample_issue_resolution\",\n    \"category\": \"UTILITY\",\n    \"language\": \"en_US\",\n    \"processed_params\": {\n      \"1\": \"Chatwoot\"\n    }\n  }\n}",
			"description": "The initial message to be sent to the conversation",
			"routing": {
				"send": {
					"property": "message",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations"
					],
					"operation": [
						"New Conversation"
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
						"Conversations"
					],
					"operation": [
						"New Conversation"
					]
				}
			}
		},
		{
			"displayName": "API Access Token",
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
						"Conversations"
					],
					"operation": [
						"New Conversation"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/accounts/{account_id}/conversations/filter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations"
					],
					"operation": [
						"Conversation Filter"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations"
					],
					"operation": [
						"Conversation Filter"
					]
				}
			}
		},
		{
			"displayName": "Payload",
			"name": "payload",
			"type": "json",
			"default": "[\n  {\n    \"attribute_key\": \"browser_language\",\n    \"filter_operator\": \"not_equal_to\",\n    \"values\": [\n      \"en\"\n    ],\n    \"query_operator\": \"AND\"\n  },\n  {\n    \"attribute_key\": \"status\",\n    \"filter_operator\": \"equal_to\",\n    \"values\": [\n      \"pending\"\n    ],\n    \"query_operator\": null\n  }\n]",
			"routing": {
				"send": {
					"property": "payload",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations"
					],
					"operation": [
						"Conversation Filter"
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
						"Conversations"
					],
					"operation": [
						"Conversation Filter"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/accounts/{account_id}/conversations/{conversation_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations"
					],
					"operation": [
						"Get Details Of A Conversation"
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
						"Conversations"
					],
					"operation": [
						"Get Details Of A Conversation"
					]
				}
			}
		},
		{
			"displayName": "PATCH /api/v1/accounts/{account_id}/conversations/{conversation_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations"
					],
					"operation": [
						"Update Conversation"
					]
				}
			}
		},
		{
			"displayName": "Priority",
			"name": "priority",
			"type": "options",
			"default": "high",
			"description": "The priority of the conversation",
			"options": [
				{
					"name": "Urgent",
					"value": "urgent"
				},
				{
					"name": "High",
					"value": "high"
				},
				{
					"name": "Medium",
					"value": "medium"
				},
				{
					"name": "Low",
					"value": "low"
				},
				{
					"name": "None",
					"value": "none"
				}
			],
			"routing": {
				"send": {
					"property": "priority",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations"
					],
					"operation": [
						"Update Conversation"
					]
				}
			}
		},
		{
			"displayName": "Sla Policy ID",
			"name": "sla_policy_id",
			"type": "number",
			"default": 1,
			"description": "The ID of the SLA policy (Available only in Enterprise edition)",
			"routing": {
				"send": {
					"property": "sla_policy_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations"
					],
					"operation": [
						"Update Conversation"
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
						"Conversations"
					],
					"operation": [
						"Update Conversation"
					]
				}
			}
		},
		{
			"displayName": "API Access Token",
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
						"Conversations"
					],
					"operation": [
						"Update Conversation"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/accounts/{account_id}/conversations/{conversation_id}/toggle_status",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations"
					],
					"operation": [
						"Toggle Status Of A Conversation"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "open",
			"description": "The status of the conversation",
			"options": [
				{
					"name": "Open",
					"value": "open"
				},
				{
					"name": "Resolved",
					"value": "resolved"
				},
				{
					"name": "Pending",
					"value": "pending"
				},
				{
					"name": "Snoozed",
					"value": "snoozed"
				}
			],
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations"
					],
					"operation": [
						"Toggle Status Of A Conversation"
					]
				}
			}
		},
		{
			"displayName": "Snoozed Until",
			"name": "snoozed_until",
			"type": "number",
			"default": 1757506877,
			"description": "When status is `snoozed`, schedule the reopen time as a Unix timestamp in seconds. If not provided, the conversation is snoozed until the next customer reply. The conversation always reopens when the customer replies.",
			"routing": {
				"send": {
					"property": "snoozed_until",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations"
					],
					"operation": [
						"Toggle Status Of A Conversation"
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
						"Conversations"
					],
					"operation": [
						"Toggle Status Of A Conversation"
					]
				}
			}
		},
		{
			"displayName": "API Access Token",
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
						"Conversations"
					],
					"operation": [
						"Toggle Status Of A Conversation"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/accounts/{account_id}/conversations/{conversation_id}/toggle_priority",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations"
					],
					"operation": [
						"Toggle Priority Of A Conversation"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Priority",
			"name": "priority",
			"type": "options",
			"default": "high",
			"description": "The priority of the conversation",
			"options": [
				{
					"name": "Urgent",
					"value": "urgent"
				},
				{
					"name": "High",
					"value": "high"
				},
				{
					"name": "Medium",
					"value": "medium"
				},
				{
					"name": "Low",
					"value": "low"
				},
				{
					"name": "None",
					"value": "none"
				}
			],
			"routing": {
				"send": {
					"property": "priority",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations"
					],
					"operation": [
						"Toggle Priority Of A Conversation"
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
						"Conversations"
					],
					"operation": [
						"Toggle Priority Of A Conversation"
					]
				}
			}
		},
		{
			"displayName": "API Access Token",
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
						"Conversations"
					],
					"operation": [
						"Toggle Priority Of A Conversation"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/accounts/{account_id}/conversations/{conversation_id}/toggle_typing_status",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations"
					],
					"operation": [
						"Toggle Typing Status Of A Conversation"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Typing Status",
			"name": "typing_status",
			"type": "options",
			"default": "on",
			"description": "Typing status to set.",
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
						"Conversations"
					],
					"operation": [
						"Toggle Typing Status Of A Conversation"
					]
				}
			}
		},
		{
			"displayName": "Is Private",
			"name": "is_private",
			"type": "boolean",
			"default": false,
			"description": "Whether the typing event is for private notes.",
			"routing": {
				"send": {
					"property": "is_private",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations"
					],
					"operation": [
						"Toggle Typing Status Of A Conversation"
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
						"Conversations"
					],
					"operation": [
						"Toggle Typing Status Of A Conversation"
					]
				}
			}
		},
		{
			"displayName": "API Access Token",
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
						"Conversations"
					],
					"operation": [
						"Toggle Typing Status Of A Conversation"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/accounts/{account_id}/conversations/{conversation_id}/custom_attributes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations"
					],
					"operation": [
						"Update Custom Attributes Of A Conversation"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Custom Attributes",
			"name": "custom_attributes",
			"type": "json",
			"default": "{\n  \"order_id\": \"12345\",\n  \"previous_conversation\": \"67890\"\n}",
			"description": "The custom attributes to be set for the conversation",
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
						"Conversations"
					],
					"operation": [
						"Update Custom Attributes Of A Conversation"
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
						"Conversations"
					],
					"operation": [
						"Update Custom Attributes Of A Conversation"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/accounts/{account_id}/conversations/{conversation_id}/labels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations"
					],
					"operation": [
						"List All Labels Of A Conversation"
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
						"Conversations"
					],
					"operation": [
						"List All Labels Of A Conversation"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/accounts/{account_id}/conversations/{conversation_id}/labels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations"
					],
					"operation": [
						"Conversation Add Labels"
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
						"Conversations"
					],
					"operation": [
						"Conversation Add Labels"
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
						"Conversations"
					],
					"operation": [
						"Conversation Add Labels"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/accounts/{account_id}/conversations/{conversation_id}/reporting_events",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations"
					],
					"operation": [
						"Get Conversation Reporting Events"
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
						"Conversations"
					],
					"operation": [
						"Get Conversation Reporting Events"
					]
				}
			}
		},
];
