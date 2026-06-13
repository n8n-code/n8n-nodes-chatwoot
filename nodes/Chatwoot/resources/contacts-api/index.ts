import type { INodeProperties } from 'n8n-workflow';

export const contactsApiDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts API"
					]
				}
			},
			"options": [
				{
					"name": "Create A Contact",
					"value": "Create A Contact",
					"action": "Create a contact",
					"description": "Create a contact",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/public/api/v1/inboxes/{{$parameter[\"inbox_identifier\"]}}/contacts"
						}
					}
				},
				{
					"name": "Get Details Of A Contact",
					"value": "Get Details Of A Contact",
					"action": "Get a contact",
					"description": "Get the details of a contact",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/public/api/v1/inboxes/{{$parameter[\"inbox_identifier\"]}}/contacts/{{$parameter[\"contact_identifier\"]}}"
						}
					}
				},
				{
					"name": "Update A Contact",
					"value": "Update A Contact",
					"action": "Update a contact",
					"description": "Update a contact's attributes",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/public/api/v1/inboxes/{{$parameter[\"inbox_identifier\"]}}/contacts/{{$parameter[\"contact_identifier\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /public/api/v1/inboxes/{inbox_identifier}/contacts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts API"
					],
					"operation": [
						"Create A Contact"
					]
				}
			}
		},
		{
			"displayName": "Identifier",
			"name": "identifier",
			"type": "string",
			"default": "1234567890",
			"description": "External identifier of the contact",
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
						"Contacts API"
					],
					"operation": [
						"Create A Contact"
					]
				}
			}
		},
		{
			"displayName": "Identifier Hash",
			"name": "identifier_hash",
			"type": "string",
			"default": "e93275d4eba0e5679ad55f5360af00444e2a888df9b0afa3e8b691c3173725f9",
			"description": "Identifier hash prepared for HMAC authentication",
			"routing": {
				"send": {
					"property": "identifier_hash",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts API"
					],
					"operation": [
						"Create A Contact"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "alice@acme.inc",
			"description": "Email of the contact",
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
						"Contacts API"
					],
					"operation": [
						"Create A Contact"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Alice",
			"description": "Name of the contact",
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
						"Contacts API"
					],
					"operation": [
						"Create A Contact"
					]
				}
			}
		},
		{
			"displayName": "Phone Number",
			"name": "phone_number",
			"type": "string",
			"default": "+123456789",
			"description": "Phone number of the contact",
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
						"Contacts API"
					],
					"operation": [
						"Create A Contact"
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
						"Contacts API"
					],
					"operation": [
						"Create A Contact"
					]
				}
			}
		},
		{
			"displayName": "Custom Attributes",
			"name": "custom_attributes",
			"type": "json",
			"default": "{}",
			"description": "Custom attributes of the customer",
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
						"Contacts API"
					],
					"operation": [
						"Create A Contact"
					]
				}
			}
		},
		{
			"displayName": "GET /public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts API"
					],
					"operation": [
						"Get Details Of A Contact"
					]
				}
			}
		},
		{
			"displayName": "PATCH /public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts API"
					],
					"operation": [
						"Update A Contact"
					]
				}
			}
		},
		{
			"displayName": "Identifier",
			"name": "identifier",
			"type": "string",
			"default": "1234567890",
			"description": "External identifier of the contact",
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
						"Contacts API"
					],
					"operation": [
						"Update A Contact"
					]
				}
			}
		},
		{
			"displayName": "Identifier Hash",
			"name": "identifier_hash",
			"type": "string",
			"default": "e93275d4eba0e5679ad55f5360af00444e2a888df9b0afa3e8b691c3173725f9",
			"description": "Identifier hash prepared for HMAC authentication",
			"routing": {
				"send": {
					"property": "identifier_hash",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts API"
					],
					"operation": [
						"Update A Contact"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "alice@acme.inc",
			"description": "Email of the contact",
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
						"Contacts API"
					],
					"operation": [
						"Update A Contact"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Alice",
			"description": "Name of the contact",
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
						"Contacts API"
					],
					"operation": [
						"Update A Contact"
					]
				}
			}
		},
		{
			"displayName": "Phone Number",
			"name": "phone_number",
			"type": "string",
			"default": "+123456789",
			"description": "Phone number of the contact",
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
						"Contacts API"
					],
					"operation": [
						"Update A Contact"
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
						"Contacts API"
					],
					"operation": [
						"Update A Contact"
					]
				}
			}
		},
		{
			"displayName": "Custom Attributes",
			"name": "custom_attributes",
			"type": "json",
			"default": "{}",
			"description": "Custom attributes of the customer",
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
						"Contacts API"
					],
					"operation": [
						"Update A Contact"
					]
				}
			}
		},
];
