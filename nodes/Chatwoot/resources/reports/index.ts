import type { INodeProperties } from 'n8n-workflow';

export const reportsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Reports"
					]
				}
			},
			"options": [
				{
					"name": "Get Account Reporting Events",
					"value": "Get Account Reporting Events",
					"action": "Account Reporting Events",
					"description": "Get paginated reporting events for the account. This endpoint returns reporting events such as first response time, resolution time, and other metrics. Only administrators can access this endpoint. Results are paginated with 25 items per page.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/reporting_events"
						}
					}
				},
				{
					"name": "List All Conversation Statistics",
					"value": "List All Conversation Statistics",
					"action": "Get Account reports",
					"description": "Get Account reports for a specific type, metric and date range",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v2/accounts/{{$parameter[\"account_id\"]}}/reports"
						}
					}
				},
				{
					"name": "List All Conversation Statistics Summary",
					"value": "List All Conversation Statistics Summary",
					"action": "Get Account reports summary",
					"description": "Get Account reports summary for a specific type and date range",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v2/accounts/{{$parameter[\"account_id\"]}}/reports/summary"
						}
					}
				},
				{
					"name": "Get Account Conversation Metrics",
					"value": "Get Account Conversation Metrics",
					"action": "Account Conversation Metrics",
					"description": "Get conversation metrics for Account",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v2/accounts/{{$parameter[\"account_id\"]}}/reports/conversations"
						}
					}
				},
				{
					"name": "Get Agent Conversation Metrics",
					"value": "Get Agent Conversation Metrics",
					"action": "Agent Conversation Metrics",
					"description": "Get conversation metrics for Agent",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v2/accounts/{{$parameter[\"account_id\"]}}/reports/conversations/"
						}
					}
				},
				{
					"name": "Get Channel Summary Report",
					"value": "Get Channel Summary Report",
					"action": "Get conversation statistics grouped by channel type",
					"description": "Get conversation counts grouped by channel type and status for a given date range.\nReturns statistics for each channel type including open, resolved, pending, snoozed, and total conversation counts.\n\n**Note:** This API endpoint is available only in Chatwoot version 4.10.0 and above. The date range is limited to a maximum of 6 months.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v2/accounts/{{$parameter[\"account_id\"]}}/summary_reports/channel"
						}
					}
				},
				{
					"name": "Get Inbox Summary Report",
					"value": "Get Inbox Summary Report",
					"action": "Get conversation statistics grouped by inbox",
					"description": "Get conversation statistics grouped by inbox for a given date range.\nReturns metrics for each inbox including conversation counts, resolution counts,\naverage first response time, average resolution time, and average reply time.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v2/accounts/{{$parameter[\"account_id\"]}}/summary_reports/inbox"
						}
					}
				},
				{
					"name": "Get Agent Summary Report",
					"value": "Get Agent Summary Report",
					"action": "Get conversation statistics grouped by agent",
					"description": "Get conversation statistics grouped by agent for a given date range.\nReturns metrics for each agent including conversation counts, resolution counts,\naverage first response time, average resolution time, and average reply time.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v2/accounts/{{$parameter[\"account_id\"]}}/summary_reports/agent"
						}
					}
				},
				{
					"name": "Get Team Summary Report",
					"value": "Get Team Summary Report",
					"action": "Get conversation statistics grouped by team",
					"description": "Get conversation statistics grouped by team for a given date range.\nReturns metrics for each team including conversation counts, resolution counts,\naverage first response time, average resolution time, and average reply time.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v2/accounts/{{$parameter[\"account_id\"]}}/summary_reports/team"
						}
					}
				},
				{
					"name": "Get First Response Time Distribution",
					"value": "Get First Response Time Distribution",
					"action": "Get first response time distribution by channel",
					"description": "Get the distribution of first response times grouped by channel type.\nReturns conversation counts in different time buckets (0-1h, 1-4h, 4-8h, 8-24h, 24h+) for each channel type.\n\n**Note:** This API endpoint is available only in Chatwoot version 4.11.0 and above.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v2/accounts/{{$parameter[\"account_id\"]}}/reports/first_response_time_distribution"
						}
					}
				},
				{
					"name": "Get Inbox Label Matrix",
					"value": "Get Inbox Label Matrix",
					"action": "Get inbox-label matrix report",
					"description": "Get a matrix showing the count of conversations for each inbox-label combination.\nReturns a list of inboxes, labels, and a 2D matrix where each cell contains the count of conversations\nin a specific inbox that have a specific label applied.\n\n**Note:** This API endpoint is available only in Chatwoot version 4.11.0 and above.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v2/accounts/{{$parameter[\"account_id\"]}}/reports/inbox_label_matrix"
						}
					}
				},
				{
					"name": "Get Outgoing Messages Count",
					"value": "Get Outgoing Messages Count",
					"action": "Get outgoing messages count grouped by entity",
					"description": "Get the count of outgoing messages grouped by a specified entity (agent, team, inbox, or label).\nWhen grouped by agent, messages sent by bots (AgentBot, Captain::Assistant) are excluded.\n\n**Note:** This API endpoint is available only in Chatwoot version 4.11.0 and above.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v2/accounts/{{$parameter[\"account_id\"]}}/reports/outgoing_messages_count"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v1/accounts/{account_id}/reporting_events",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports"
					],
					"operation": [
						"Get Account Reporting Events"
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
						"Reports"
					],
					"operation": [
						"Get Account Reporting Events"
					]
				}
			}
		},
		{
			"displayName": "Since",
			"name": "since",
			"description": "The timestamp from where events should start (Unix timestamp in seconds)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "since",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports"
					],
					"operation": [
						"Get Account Reporting Events"
					]
				}
			}
		},
		{
			"displayName": "Until",
			"name": "until",
			"description": "The timestamp from where events should stop (Unix timestamp in seconds)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "until",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports"
					],
					"operation": [
						"Get Account Reporting Events"
					]
				}
			}
		},
		{
			"displayName": "Inbox ID",
			"name": "inbox_id",
			"description": "Filter events by inbox ID",
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
						"Reports"
					],
					"operation": [
						"Get Account Reporting Events"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "user_id",
			"description": "Filter events by user/agent ID",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "user_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports"
					],
					"operation": [
						"Get Account Reporting Events"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Filter events by event name (e.g., first_response, resolution, reply_time)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports"
					],
					"operation": [
						"Get Account Reporting Events"
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
						"Reports"
					],
					"operation": [
						"Get Account Reporting Events"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v2/accounts/{account_id}/reports",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports"
					],
					"operation": [
						"List All Conversation Statistics"
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
						"Reports"
					],
					"operation": [
						"List All Conversation Statistics"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v2/accounts/{account_id}/reports/summary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports"
					],
					"operation": [
						"List All Conversation Statistics Summary"
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
						"Reports"
					],
					"operation": [
						"List All Conversation Statistics Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v2/accounts/{account_id}/reports/conversations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports"
					],
					"operation": [
						"Get Account Conversation Metrics"
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
						"Reports"
					],
					"operation": [
						"Get Account Conversation Metrics"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v2/accounts/{account_id}/reports/conversations/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports"
					],
					"operation": [
						"Get Agent Conversation Metrics"
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
						"Reports"
					],
					"operation": [
						"Get Agent Conversation Metrics"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v2/accounts/{account_id}/summary_reports/channel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports"
					],
					"operation": [
						"Get Channel Summary Report"
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
						"Reports"
					],
					"operation": [
						"Get Channel Summary Report"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v2/accounts/{account_id}/summary_reports/inbox",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports"
					],
					"operation": [
						"Get Inbox Summary Report"
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
						"Reports"
					],
					"operation": [
						"Get Inbox Summary Report"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v2/accounts/{account_id}/summary_reports/agent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports"
					],
					"operation": [
						"Get Agent Summary Report"
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
						"Reports"
					],
					"operation": [
						"Get Agent Summary Report"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v2/accounts/{account_id}/summary_reports/team",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports"
					],
					"operation": [
						"Get Team Summary Report"
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
						"Reports"
					],
					"operation": [
						"Get Team Summary Report"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v2/accounts/{account_id}/reports/first_response_time_distribution",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports"
					],
					"operation": [
						"Get First Response Time Distribution"
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
						"Reports"
					],
					"operation": [
						"Get First Response Time Distribution"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v2/accounts/{account_id}/reports/inbox_label_matrix",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports"
					],
					"operation": [
						"Get Inbox Label Matrix"
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
						"Reports"
					],
					"operation": [
						"Get Inbox Label Matrix"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v2/accounts/{account_id}/reports/outgoing_messages_count",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports"
					],
					"operation": [
						"Get Outgoing Messages Count"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "group_by",
			"required": true,
			"description": "The entity to group outgoing message counts by.",
			"default": "agent",
			"type": "options",
			"options": [
				{
					"name": "Agent",
					"value": "agent"
				},
				{
					"name": "Team",
					"value": "team"
				},
				{
					"name": "Inbox",
					"value": "inbox"
				},
				{
					"name": "Label",
					"value": "label"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "group_by",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports"
					],
					"operation": [
						"Get Outgoing Messages Count"
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
						"Reports"
					],
					"operation": [
						"Get Outgoing Messages Count"
					]
				}
			}
		},
];
