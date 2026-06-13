import type { INodeProperties } from 'n8n-workflow';

export const inboxesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					]
				}
			},
			"options": [
				{
					"name": "List All Inboxes",
					"value": "List All Inboxes",
					"action": "List all inboxes",
					"description": "List all inboxes available in the current account",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/inboxes"
						}
					}
				},
				{
					"name": "Inbox Creation",
					"value": "Inbox Creation",
					"action": "Create an inbox",
					"description": "You can create more than one website inbox in each account",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/inboxes"
						}
					}
				},
				{
					"name": "Get Inbox",
					"value": "Get Inbox",
					"action": "Get an inbox",
					"description": "Get an inbox available in the current account",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/inboxes/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Inbox",
					"value": "Update Inbox",
					"action": "Update Inbox",
					"description": "Update an existing inbox",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/inboxes/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Inbox Agent Bot",
					"value": "Get Inbox Agent Bot",
					"action": "Show Inbox Agent Bot",
					"description": "See if an agent bot is associated to the Inbox",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/inboxes/{{$parameter[\"id\"]}}/agent_bot"
						}
					}
				},
				{
					"name": "Update Agent Bot",
					"value": "Update Agent Bot",
					"action": "Add or remove agent bot",
					"description": "To add an agent bot pass agent_bot id, to remove agent bot from an inbox pass null",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/inboxes/{{$parameter[\"id\"]}}/set_agent_bot"
						}
					}
				},
				{
					"name": "Get Inbox Members",
					"value": "Get Inbox Members",
					"action": "List Agents in Inbox",
					"description": "Get Details of Agents in an Inbox",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/inbox_members/{{$parameter[\"inbox_id\"]}}"
						}
					}
				},
				{
					"name": "Add New Agent To Inbox",
					"value": "Add New Agent To Inbox",
					"action": "Add a New Agent",
					"description": "Add a new Agent to Inbox",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/inbox_members"
						}
					}
				},
				{
					"name": "Update Agents In Inbox",
					"value": "Update Agents In Inbox",
					"action": "Update Agents in Inbox",
					"description": "All agents except the one passed in params will be removed",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/inbox_members"
						}
					}
				},
				{
					"name": "Delete Agent In Inbox",
					"value": "Delete Agent In Inbox",
					"action": "Remove an Agent from Inbox",
					"description": "Remove an Agent from Inbox",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/inbox_members"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v1/accounts/{account_id}/inboxes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"List All Inboxes"
					]
				}
			}
		},
		{
			"displayName": "Account ID",
			"name": "account_id",
			"required": true,
			"description": "The numeric ID of the account",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"List All Inboxes"
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
						"Inboxes"
					],
					"operation": [
						"List All Inboxes"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/accounts/{account_id}/inboxes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Inbox Creation"
					]
				}
			}
		},
		{
			"displayName": "Account ID",
			"name": "account_id",
			"required": true,
			"description": "The numeric ID of the account",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Inbox Creation"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Support",
			"description": "The name of the inbox.",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Inbox Creation"
					]
				}
			}
		},
		{
			"displayName": "Avatar",
			"name": "avatar",
			"type": "string",
			"default": "",
			"description": "Image file for avatar.",
			"routing": {
				"send": {
					"property": "avatar",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Inbox Creation"
					]
				}
			}
		},
		{
			"displayName": "Greeting Enabled",
			"name": "greeting_enabled",
			"type": "boolean",
			"default": true,
			"description": "Enable greeting message.",
			"routing": {
				"send": {
					"property": "greeting_enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Inbox Creation"
					]
				}
			}
		},
		{
			"displayName": "Greeting Message",
			"name": "greeting_message",
			"type": "string",
			"default": "Hello, how can I help you?",
			"description": "Greeting message to send when greeting messages are enabled.",
			"routing": {
				"send": {
					"property": "greeting_message",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Inbox Creation"
					]
				}
			}
		},
		{
			"displayName": "Enable Email Collect",
			"name": "enable_email_collect",
			"type": "boolean",
			"default": true,
			"description": "Enable email collection.\n\nAvailable for: `Website`\n",
			"routing": {
				"send": {
					"property": "enable_email_collect",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Inbox Creation"
					]
				}
			}
		},
		{
			"displayName": "Csat Survey Enabled",
			"name": "csat_survey_enabled",
			"type": "boolean",
			"default": true,
			"description": "Enable CSAT survey.",
			"routing": {
				"send": {
					"property": "csat_survey_enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Inbox Creation"
					]
				}
			}
		},
		{
			"displayName": "Csat Config",
			"name": "csat_config",
			"type": "json",
			"default": "{\n  \"display_type\": \"emoji\",\n  \"message\": \"Please rate your conversation\",\n  \"button_text\": \"Please rate us\",\n  \"language\": \"en\",\n  \"survey_rules\": {\n    \"operator\": \"contains\",\n    \"values\": [\n      \"billing\"\n    ]\n  }\n}",
			"description": "CSAT survey configuration.",
			"routing": {
				"send": {
					"property": "csat_config",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Inbox Creation"
					]
				}
			}
		},
		{
			"displayName": "Enable Auto Assignment",
			"name": "enable_auto_assignment",
			"type": "boolean",
			"default": true,
			"description": "Enable Auto Assignment.",
			"routing": {
				"send": {
					"property": "enable_auto_assignment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Inbox Creation"
					]
				}
			}
		},
		{
			"displayName": "Working Hours Enabled",
			"name": "working_hours_enabled",
			"type": "boolean",
			"default": true,
			"description": "Enable working hours.",
			"routing": {
				"send": {
					"property": "working_hours_enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Inbox Creation"
					]
				}
			}
		},
		{
			"displayName": "Out Of Office Message",
			"name": "out_of_office_message",
			"type": "string",
			"default": "We are currently out of office. Please leave a message and we will get back to you.",
			"description": "Out of office message to send outside working hours.",
			"routing": {
				"send": {
					"property": "out_of_office_message",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Inbox Creation"
					]
				}
			}
		},
		{
			"displayName": "Timezone",
			"name": "timezone",
			"type": "string",
			"default": "America/New_York",
			"description": "Timezone of the inbox.",
			"routing": {
				"send": {
					"property": "timezone",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Inbox Creation"
					]
				}
			}
		},
		{
			"displayName": "Allow Messages After Resolved",
			"name": "allow_messages_after_resolved",
			"type": "boolean",
			"default": true,
			"description": "Allow messages after conversation is resolved.\n\nAvailable for: `Website`\n",
			"routing": {
				"send": {
					"property": "allow_messages_after_resolved",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Inbox Creation"
					]
				}
			}
		},
		{
			"displayName": "Lock To Single Conversation",
			"name": "lock_to_single_conversation",
			"type": "boolean",
			"default": true,
			"description": "Lock contact messages to a single active conversation.\n\nAvailable for: `API` `LINE` `Telegram` `WhatsApp` `SMS`\n",
			"routing": {
				"send": {
					"property": "lock_to_single_conversation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Inbox Creation"
					]
				}
			}
		},
		{
			"displayName": "Portal ID",
			"name": "portal_id",
			"type": "number",
			"default": 1,
			"description": "Id of the help center portal to attach to the inbox.",
			"routing": {
				"send": {
					"property": "portal_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Inbox Creation"
					]
				}
			}
		},
		{
			"displayName": "Sender Name Type",
			"name": "sender_name_type",
			"type": "options",
			"default": "friendly",
			"description": "Sender name type for outbound email replies.\n\nAvailable for: `Website` `Email`\n",
			"options": [
				{
					"name": "Friendly",
					"value": "friendly"
				},
				{
					"name": "Professional",
					"value": "professional"
				}
			],
			"routing": {
				"send": {
					"property": "sender_name_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Inbox Creation"
					]
				}
			}
		},
		{
			"displayName": "Business Name",
			"name": "business_name",
			"type": "string",
			"default": "My Business",
			"description": "Business name for outbound email replies.\n\nAvailable for: `Website` `Email`\n",
			"routing": {
				"send": {
					"property": "business_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Inbox Creation"
					]
				}
			}
		},
		{
			"displayName": "Channel",
			"name": "channel",
			"type": "json",
			"default": "{\n  \"type\": \"web_widget\",\n  \"website_url\": \"https://example.com\",\n  \"welcome_title\": \"Welcome to our support\",\n  \"welcome_tagline\": \"We are here to help you\",\n  \"widget_color\": \"#FF5733\",\n  \"reply_time\": \"in_a_few_minutes\",\n  \"pre_chat_form_enabled\": false,\n  \"pre_chat_form_options\": {\n    \"pre_chat_message\": \"Share your queries or comments here.\",\n    \"pre_chat_fields\": [\n      {\n        \"field_type\": \"standard\",\n        \"label\": \"Email Id\",\n        \"name\": \"emailAddress\",\n        \"type\": \"email\",\n        \"required\": true,\n        \"enabled\": true\n      }\n    ]\n  },\n  \"continuity_via_email\": true,\n  \"hmac_mandatory\": false,\n  \"allowed_domains\": \"example.com\",\n  \"selected_feature_flags\": [\n    \"attachments\",\n    \"emoji_picker\",\n    \"end_conversation\"\n  ]\n}",
			"routing": {
				"send": {
					"property": "channel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Inbox Creation"
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
						"Inboxes"
					],
					"operation": [
						"Inbox Creation"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/accounts/{account_id}/inboxes/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Get Inbox"
					]
				}
			}
		},
		{
			"displayName": "Account ID",
			"name": "account_id",
			"required": true,
			"description": "The numeric ID of the account",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Get Inbox"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the inbox",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Get Inbox"
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
						"Inboxes"
					],
					"operation": [
						"Get Inbox"
					]
				}
			}
		},
		{
			"displayName": "PATCH /api/v1/accounts/{account_id}/inboxes/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Update Inbox"
					]
				}
			}
		},
		{
			"displayName": "Account ID",
			"name": "account_id",
			"required": true,
			"description": "The numeric ID of the account",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Update Inbox"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the inbox",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Update Inbox"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Support",
			"description": "The name of the inbox.",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Update Inbox"
					]
				}
			}
		},
		{
			"displayName": "Avatar",
			"name": "avatar",
			"type": "string",
			"default": "",
			"description": "Image file for avatar.",
			"routing": {
				"send": {
					"property": "avatar",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Update Inbox"
					]
				}
			}
		},
		{
			"displayName": "Greeting Enabled",
			"name": "greeting_enabled",
			"type": "boolean",
			"default": true,
			"description": "Enable greeting message.",
			"routing": {
				"send": {
					"property": "greeting_enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Update Inbox"
					]
				}
			}
		},
		{
			"displayName": "Greeting Message",
			"name": "greeting_message",
			"type": "string",
			"default": "Hello, how can I help you?",
			"description": "Greeting message to send when greeting messages are enabled.",
			"routing": {
				"send": {
					"property": "greeting_message",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Update Inbox"
					]
				}
			}
		},
		{
			"displayName": "Enable Email Collect",
			"name": "enable_email_collect",
			"type": "boolean",
			"default": true,
			"description": "Enable email collection.\n\nAvailable for: `Website`\n",
			"routing": {
				"send": {
					"property": "enable_email_collect",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Update Inbox"
					]
				}
			}
		},
		{
			"displayName": "Csat Survey Enabled",
			"name": "csat_survey_enabled",
			"type": "boolean",
			"default": true,
			"description": "Enable CSAT survey.",
			"routing": {
				"send": {
					"property": "csat_survey_enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Update Inbox"
					]
				}
			}
		},
		{
			"displayName": "Csat Config",
			"name": "csat_config",
			"type": "json",
			"default": "{\n  \"display_type\": \"emoji\",\n  \"message\": \"Please rate your conversation\",\n  \"button_text\": \"Please rate us\",\n  \"language\": \"en\",\n  \"survey_rules\": {\n    \"operator\": \"contains\",\n    \"values\": [\n      \"billing\"\n    ]\n  }\n}",
			"description": "CSAT survey configuration.",
			"routing": {
				"send": {
					"property": "csat_config",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Update Inbox"
					]
				}
			}
		},
		{
			"displayName": "Enable Auto Assignment",
			"name": "enable_auto_assignment",
			"type": "boolean",
			"default": true,
			"description": "Enable Auto Assignment.",
			"routing": {
				"send": {
					"property": "enable_auto_assignment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Update Inbox"
					]
				}
			}
		},
		{
			"displayName": "Working Hours Enabled",
			"name": "working_hours_enabled",
			"type": "boolean",
			"default": true,
			"description": "Enable working hours.",
			"routing": {
				"send": {
					"property": "working_hours_enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Update Inbox"
					]
				}
			}
		},
		{
			"displayName": "Out Of Office Message",
			"name": "out_of_office_message",
			"type": "string",
			"default": "We are currently out of office. Please leave a message and we will get back to you.",
			"description": "Out of office message to send outside working hours.",
			"routing": {
				"send": {
					"property": "out_of_office_message",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Update Inbox"
					]
				}
			}
		},
		{
			"displayName": "Timezone",
			"name": "timezone",
			"type": "string",
			"default": "America/New_York",
			"description": "Timezone of the inbox.",
			"routing": {
				"send": {
					"property": "timezone",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Update Inbox"
					]
				}
			}
		},
		{
			"displayName": "Allow Messages After Resolved",
			"name": "allow_messages_after_resolved",
			"type": "boolean",
			"default": true,
			"description": "Allow messages after conversation is resolved.\n\nAvailable for: `Website`\n",
			"routing": {
				"send": {
					"property": "allow_messages_after_resolved",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Update Inbox"
					]
				}
			}
		},
		{
			"displayName": "Lock To Single Conversation",
			"name": "lock_to_single_conversation",
			"type": "boolean",
			"default": true,
			"description": "Lock contact messages to a single active conversation.\n\nAvailable for: `API` `LINE` `Telegram` `WhatsApp` `SMS`\n",
			"routing": {
				"send": {
					"property": "lock_to_single_conversation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Update Inbox"
					]
				}
			}
		},
		{
			"displayName": "Portal ID",
			"name": "portal_id",
			"type": "number",
			"default": 1,
			"description": "Id of the help center portal to attach to the inbox.",
			"routing": {
				"send": {
					"property": "portal_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Update Inbox"
					]
				}
			}
		},
		{
			"displayName": "Sender Name Type",
			"name": "sender_name_type",
			"type": "options",
			"default": "friendly",
			"description": "Sender name type for outbound email replies.\n\nAvailable for: `Website` `Email`\n",
			"options": [
				{
					"name": "Friendly",
					"value": "friendly"
				},
				{
					"name": "Professional",
					"value": "professional"
				}
			],
			"routing": {
				"send": {
					"property": "sender_name_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Update Inbox"
					]
				}
			}
		},
		{
			"displayName": "Business Name",
			"name": "business_name",
			"type": "string",
			"default": "My Business",
			"description": "Business name for outbound email replies.\n\nAvailable for: `Website` `Email`\n",
			"routing": {
				"send": {
					"property": "business_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Update Inbox"
					]
				}
			}
		},
		{
			"displayName": "Channel",
			"name": "channel",
			"type": "json",
			"default": "{\n  \"website_url\": \"https://example.com\",\n  \"welcome_title\": \"Welcome to our support\",\n  \"welcome_tagline\": \"We are here to help you\",\n  \"widget_color\": \"#FF5733\",\n  \"reply_time\": \"in_a_few_minutes\",\n  \"pre_chat_form_enabled\": false,\n  \"pre_chat_form_options\": {\n    \"pre_chat_message\": \"Share your queries or comments here.\",\n    \"pre_chat_fields\": [\n      {\n        \"field_type\": \"standard\",\n        \"label\": \"Email Id\",\n        \"name\": \"emailAddress\",\n        \"type\": \"email\",\n        \"required\": true,\n        \"enabled\": true\n      }\n    ]\n  },\n  \"continuity_via_email\": true,\n  \"hmac_mandatory\": false,\n  \"allowed_domains\": \"example.com\",\n  \"selected_feature_flags\": [\n    \"attachments\",\n    \"emoji_picker\",\n    \"end_conversation\"\n  ]\n}",
			"routing": {
				"send": {
					"property": "channel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Update Inbox"
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
						"Inboxes"
					],
					"operation": [
						"Update Inbox"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/accounts/{account_id}/inboxes/{id}/agent_bot",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Get Inbox Agent Bot"
					]
				}
			}
		},
		{
			"displayName": "Account ID",
			"name": "account_id",
			"required": true,
			"description": "The numeric ID of the account",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Get Inbox Agent Bot"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the inbox",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Get Inbox Agent Bot"
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
						"Inboxes"
					],
					"operation": [
						"Get Inbox Agent Bot"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/accounts/{account_id}/inboxes/{id}/set_agent_bot",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Update Agent Bot"
					]
				}
			}
		},
		{
			"displayName": "Account ID",
			"name": "account_id",
			"required": true,
			"description": "The numeric ID of the account",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Update Agent Bot"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the inbox",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Update Agent Bot"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Agent Bot",
			"name": "agent_bot",
			"type": "number",
			"default": 1,
			"description": "Agent bot ID",
			"routing": {
				"send": {
					"property": "agent_bot",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Update Agent Bot"
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
						"Inboxes"
					],
					"operation": [
						"Update Agent Bot"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/accounts/{account_id}/inbox_members/{inbox_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Get Inbox Members"
					]
				}
			}
		},
		{
			"displayName": "Inbox ID",
			"name": "inbox_id",
			"required": true,
			"description": "The ID of the Inbox",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Get Inbox Members"
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
						"Inboxes"
					],
					"operation": [
						"Get Inbox Members"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/accounts/{account_id}/inbox_members",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Add New Agent To Inbox"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Inbox ID",
			"name": "inbox_id",
			"type": "number",
			"default": 1,
			"description": "The ID of the inbox",
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
						"Inboxes"
					],
					"operation": [
						"Add New Agent To Inbox"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "User Ids",
			"name": "user_ids",
			"type": "json",
			"default": "[\n  1\n]",
			"description": "IDs of users to be added to the inbox",
			"routing": {
				"send": {
					"property": "user_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Add New Agent To Inbox"
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
						"Inboxes"
					],
					"operation": [
						"Add New Agent To Inbox"
					]
				}
			}
		},
		{
			"displayName": "PATCH /api/v1/accounts/{account_id}/inbox_members",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Update Agents In Inbox"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Inbox ID",
			"name": "inbox_id",
			"type": "string",
			"default": 1,
			"description": "The ID of the inbox",
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
						"Inboxes"
					],
					"operation": [
						"Update Agents In Inbox"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "User Ids",
			"name": "user_ids",
			"type": "json",
			"default": "[\n  1\n]",
			"description": "IDs of users to be added to the inbox",
			"routing": {
				"send": {
					"property": "user_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Update Agents In Inbox"
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
						"Inboxes"
					],
					"operation": [
						"Update Agents In Inbox"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/v1/accounts/{account_id}/inbox_members",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Delete Agent In Inbox"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Inbox ID",
			"name": "inbox_id",
			"type": "string",
			"default": "",
			"description": "The ID of the inbox",
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
						"Inboxes"
					],
					"operation": [
						"Delete Agent In Inbox"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "User Ids",
			"name": "user_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "IDs of users to be deleted from the inbox",
			"routing": {
				"send": {
					"property": "user_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Inboxes"
					],
					"operation": [
						"Delete Agent In Inbox"
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
						"Inboxes"
					],
					"operation": [
						"Delete Agent In Inbox"
					]
				}
			}
		},
];
