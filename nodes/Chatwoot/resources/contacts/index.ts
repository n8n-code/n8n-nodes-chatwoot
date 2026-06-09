import type { INodeProperties } from 'n8n-workflow';

export const contactsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					]
				}
			},
			"options": [
				{
					"name": "Contact List",
					"value": "Contact List",
					"action": "List Contacts",
					"description": "Listing all the resolved contacts with pagination (Page size = 15). Resolved contacts are the ones with a value for identifier, email or phone number",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/contacts"
						}
					}
				},
				{
					"name": "Contact Create",
					"value": "Contact Create",
					"action": "Create Contact",
					"description": "Create a new Contact",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/contacts"
						}
					}
				},
				{
					"name": "Contact Details",
					"value": "Contact Details",
					"action": "Show Contact",
					"description": "Get a contact belonging to the account using ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/contacts/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Contact Update",
					"value": "Contact Update",
					"action": "Update Contact",
					"description": "Update a contact belonging to the account using ID",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/contacts/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Contact Delete",
					"value": "Contact Delete",
					"action": "Delete Contact",
					"description": "Delete a contact belonging to the account using ID",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/contacts/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Contact Conversations",
					"value": "Contact Conversations",
					"action": "Contact Conversations",
					"description": "Get conversations associated with that contact",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/contacts/{{$parameter[\"id\"]}}/conversations"
						}
					}
				},
				{
					"name": "Contact Search",
					"value": "Contact Search",
					"action": "Search Contacts",
					"description": "Search the resolved contacts using a search key, currently supports email search (Page size = 15). Resolved contacts are the ones with a value for identifier, email or phone number",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/contacts/search"
						}
					}
				},
				{
					"name": "Contact Filter",
					"value": "Contact Filter",
					"action": "Contact Filter",
					"description": "Filter contacts with custom filter options and pagination",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/contacts/filter"
						}
					}
				},
				{
					"name": "Contact Inbox Creation",
					"value": "Contact Inbox Creation",
					"action": "Create contact inbox",
					"description": "Create a contact inbox record for an inbox",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/contacts/{{$parameter[\"id\"]}}/contact_inboxes"
						}
					}
				},
				{
					"name": "Contactable Inboxes Get",
					"value": "Contactable Inboxes Get",
					"action": "Get Contactable Inboxes",
					"description": "Get List of contactable Inboxes",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/contacts/{{$parameter[\"id\"]}}/contactable_inboxes"
						}
					}
				},
				{
					"name": "Contact Merge",
					"value": "Contact Merge",
					"action": "Merge Contacts",
					"description": "Merge two contacts into a single contact. The base contact remains and receives all\ndata from the mergee contact. After the merge, the mergee contact is permanently deleted.\n\nThis action is irreversible. All conversations, labels, and custom attributes from the\nmergee contact will be moved to the base contact.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/actions/contact_merge"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v1/accounts/{account_id}/contacts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contact List"
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
						"Contacts"
					],
					"operation": [
						"Contact List"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "The attribute by which list should be sorted",
			"default": "name",
			"type": "options",
			"options": [
				{
					"name": "Name",
					"value": "name"
				},
				{
					"name": "Email",
					"value": "email"
				},
				{
					"name": "Phone Number",
					"value": "phone_number"
				},
				{
					"name": "Last Activity At",
					"value": "last_activity_at"
				},
				{
					"name": "Name",
					"value": "-name"
				},
				{
					"name": "Email",
					"value": "-email"
				},
				{
					"name": "Phone Number",
					"value": "-phone_number"
				},
				{
					"name": "Last Activity At",
					"value": "-last_activity_at"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contact List"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page parameter",
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
						"Contacts"
					],
					"operation": [
						"Contact List"
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
						"Contacts"
					],
					"operation": [
						"Contact List"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/accounts/{account_id}/contacts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contact Create"
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
						"Contacts"
					],
					"operation": [
						"Contact Create"
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
			"description": "ID of the inbox to which the contact belongs",
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
						"Contacts"
					],
					"operation": [
						"Contact Create"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Alice",
			"description": "name of the contact",
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
						"Contacts"
					],
					"operation": [
						"Contact Create"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "alice@acme.inc",
			"description": "email of the contact",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contact Create"
					]
				}
			}
		},
		{
			"displayName": "Blocked",
			"name": "blocked",
			"type": "boolean",
			"default": false,
			"description": "whether the contact is blocked or not",
			"routing": {
				"send": {
					"property": "blocked",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contact Create"
					]
				}
			}
		},
		{
			"displayName": "Phone Number",
			"name": "phone_number",
			"type": "string",
			"default": "+123456789",
			"description": "phone number of the contact",
			"routing": {
				"send": {
					"property": "phone_number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contact Create"
					]
				}
			}
		},
		{
			"displayName": "Avatar",
			"name": "avatar",
			"type": "string",
			"default": "",
			"description": "Send the form data with the avatar image binary or use the avatar_url",
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
						"Contacts"
					],
					"operation": [
						"Contact Create"
					]
				}
			}
		},
		{
			"displayName": "Avatar URL",
			"name": "avatar_url",
			"type": "string",
			"default": "https://example.com/avatar.png",
			"description": "The url to a jpeg, png file for the contact avatar",
			"routing": {
				"send": {
					"property": "avatar_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contact Create"
					]
				}
			}
		},
		{
			"displayName": "Identifier",
			"name": "identifier",
			"type": "string",
			"default": "1234567890",
			"description": "A unique identifier for the contact in external system",
			"routing": {
				"send": {
					"property": "identifier",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contact Create"
					]
				}
			}
		},
		{
			"displayName": "Additional Attributes",
			"name": "additional_attributes",
			"type": "json",
			"default": "{\n  \"type\": \"customer\",\n  \"age\": 30\n}",
			"description": "An object where you can store additional attributes for contact. example {\"type\":\"customer\", \"age\":30}",
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
						"Contacts"
					],
					"operation": [
						"Contact Create"
					]
				}
			}
		},
		{
			"displayName": "Custom Attributes",
			"name": "custom_attributes",
			"type": "json",
			"default": "{}",
			"description": "An object where you can store custom attributes for contact. example {\"type\":\"customer\", \"age\":30}, this should have a valid custom attribute definition.",
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
						"Contacts"
					],
					"operation": [
						"Contact Create"
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
						"Contacts"
					],
					"operation": [
						"Contact Create"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/accounts/{account_id}/contacts/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contact Details"
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
						"Contacts"
					],
					"operation": [
						"Contact Details"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/v1/accounts/{account_id}/contacts/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contact Update"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Alice",
			"description": "name of the contact",
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
						"Contacts"
					],
					"operation": [
						"Contact Update"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "alice@acme.inc",
			"description": "email of the contact",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contact Update"
					]
				}
			}
		},
		{
			"displayName": "Blocked",
			"name": "blocked",
			"type": "boolean",
			"default": false,
			"description": "whether the contact is blocked or not",
			"routing": {
				"send": {
					"property": "blocked",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contact Update"
					]
				}
			}
		},
		{
			"displayName": "Phone Number",
			"name": "phone_number",
			"type": "string",
			"default": "+123456789",
			"description": "phone number of the contact",
			"routing": {
				"send": {
					"property": "phone_number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contact Update"
					]
				}
			}
		},
		{
			"displayName": "Avatar",
			"name": "avatar",
			"type": "string",
			"default": "",
			"description": "Send the form data with the avatar image binary or use the avatar_url",
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
						"Contacts"
					],
					"operation": [
						"Contact Update"
					]
				}
			}
		},
		{
			"displayName": "Avatar URL",
			"name": "avatar_url",
			"type": "string",
			"default": "https://example.com/avatar.png",
			"description": "The url to a jpeg, png file for the contact avatar",
			"routing": {
				"send": {
					"property": "avatar_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contact Update"
					]
				}
			}
		},
		{
			"displayName": "Identifier",
			"name": "identifier",
			"type": "string",
			"default": "1234567890",
			"description": "A unique identifier for the contact in external system",
			"routing": {
				"send": {
					"property": "identifier",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contact Update"
					]
				}
			}
		},
		{
			"displayName": "Additional Attributes",
			"name": "additional_attributes",
			"type": "json",
			"default": "{\n  \"type\": \"customer\",\n  \"age\": 30\n}",
			"description": "An object where you can store additional attributes for contact. example {\"type\":\"customer\", \"age\":30}",
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
						"Contacts"
					],
					"operation": [
						"Contact Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Attributes",
			"name": "custom_attributes",
			"type": "json",
			"default": "{}",
			"description": "An object where you can store custom attributes for contact. example {\"type\":\"customer\", \"age\":30}, this should have a valid custom attribute definition.",
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
						"Contacts"
					],
					"operation": [
						"Contact Update"
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
						"Contacts"
					],
					"operation": [
						"Contact Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/v1/accounts/{account_id}/contacts/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contact Delete"
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
						"Contacts"
					],
					"operation": [
						"Contact Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/accounts/{account_id}/contacts/{id}/conversations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contact Conversations"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the contact",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contact Conversations"
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
						"Contacts"
					],
					"operation": [
						"Contact Conversations"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/accounts/{account_id}/contacts/search",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contact Search"
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
						"Contacts"
					],
					"operation": [
						"Contact Search"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "Search using contact `name`, `identifier`, `email` or `phone number`",
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
						"Contacts"
					],
					"operation": [
						"Contact Search"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "The attribute by which list should be sorted",
			"default": "name",
			"type": "options",
			"options": [
				{
					"name": "Name",
					"value": "name"
				},
				{
					"name": "Email",
					"value": "email"
				},
				{
					"name": "Phone Number",
					"value": "phone_number"
				},
				{
					"name": "Last Activity At",
					"value": "last_activity_at"
				},
				{
					"name": "Name",
					"value": "-name"
				},
				{
					"name": "Email",
					"value": "-email"
				},
				{
					"name": "Phone Number",
					"value": "-phone_number"
				},
				{
					"name": "Last Activity At",
					"value": "-last_activity_at"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contact Search"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page parameter",
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
						"Contacts"
					],
					"operation": [
						"Contact Search"
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
						"Contacts"
					],
					"operation": [
						"Contact Search"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/accounts/{account_id}/contacts/filter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contact Filter"
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
						"Contacts"
					],
					"operation": [
						"Contact Filter"
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
						"Contacts"
					],
					"operation": [
						"Contact Filter"
					]
				}
			}
		},
		{
			"displayName": "Payload",
			"name": "payload",
			"type": "json",
			"default": "[\n  {\n    \"attribute_key\": \"name\",\n    \"filter_operator\": \"equal_to\",\n    \"values\": [\n      \"en\"\n    ],\n    \"query_operator\": \"AND\"\n  },\n  {\n    \"attribute_key\": \"country_code\",\n    \"filter_operator\": \"equal_to\",\n    \"values\": [\n      \"us\"\n    ],\n    \"query_operator\": null\n  }\n]",
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
						"Contacts"
					],
					"operation": [
						"Contact Filter"
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
						"Contacts"
					],
					"operation": [
						"Contact Filter"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/accounts/{account_id}/contacts/{id}/contact_inboxes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contact Inbox Creation"
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
						"Contacts"
					],
					"operation": [
						"Contact Inbox Creation"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the contact",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contact Inbox Creation"
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
						"Contacts"
					],
					"operation": [
						"Contact Inbox Creation"
					]
				}
			}
		},
		{
			"displayName": "Source ID",
			"name": "source_id",
			"type": "string",
			"default": "",
			"description": "Contact Inbox Source Id",
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
						"Contacts"
					],
					"operation": [
						"Contact Inbox Creation"
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
						"Contacts"
					],
					"operation": [
						"Contact Inbox Creation"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/accounts/{account_id}/contacts/{id}/contactable_inboxes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contactable Inboxes Get"
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
						"Contacts"
					],
					"operation": [
						"Contactable Inboxes Get"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the contact",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contactable Inboxes Get"
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
						"Contacts"
					],
					"operation": [
						"Contactable Inboxes Get"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/accounts/{account_id}/actions/contact_merge",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contact Merge"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Base Contact ID",
			"name": "base_contact_id",
			"type": "number",
			"default": 1,
			"description": "ID of the contact that will remain after the merge and receive all data",
			"routing": {
				"send": {
					"property": "base_contact_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contact Merge"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Mergee Contact ID",
			"name": "mergee_contact_id",
			"type": "number",
			"default": 2,
			"description": "ID of the contact that will be merged into the base contact and deleted",
			"routing": {
				"send": {
					"property": "mergee_contact_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contact Merge"
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
						"Contacts"
					],
					"operation": [
						"Contact Merge"
					]
				}
			}
		},
];
