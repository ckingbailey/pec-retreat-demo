var data = {
    "title": "Springfield Influence Map",
    "graph": {
        "nodes": {
            'elected_official': {
                id: 'elected_official',
                display: {
                    name: 'Elected Official',
                    scale: 1.5,
                    status: 'normal',
                    image: '',
                    url: '',
                    x: 0,
                    y: 0
                }
            },
            'business_ownership': {
                id: 'business_ownership',
                display: {
                    name: 'Business ownership',
                    scale: .5,
                    image: '',
                    x: -175,
                    y: -15
                }
            },
            'investments': {
                id: 'investments',
                display: {
                    name: 'Investments',
                    scale: .5,
                    image: '',
                    x: 12,
                    y: 185
                }
            },
            'real_property': {
                id: 'real_property',
                display: {
                    name: 'Real property',
                    scale: .5,
                    status: 'normal',
                    image: '',
                    url: '',
                    x: 160,
                    y: -120
                }
            },
            'event_tix': {
                id: 'event_tix',
                display: {
                    name: 'Free event tickets',
                    scale: .5,
                    status: 'normal',
                    image: '',
                    url: '',
                    x: -120,
                    y: -175
                }
            },
            'outside_income': {
                id: 'outside_income',
                display: {
                    name: 'Outside income sources',
                    scale: .5,
                    status: 'normal',
                    image: '',
                    url: '',
                    x: -350,
                    y: 90
                }
            },
            'gifts': {
                id: 'gifts',
                display: {
                    name: 'Gifts',
                    scale: .5,
                    image: '',
                    x: -180,
                    y: 140
                }
            },
            'legal_committee': {
                id: 'legal_committee',
                display: {
                    name: 'Legal defense committee',
                    scale: .5,
                    status: 'normal',
                    image: '',
                    url: '',
                    x: 225,
                    y: 175
                }
            },
            'campaign_committee': {
                id: 'legal_committee',
                display: {
                    name: 'Campaign committees',
                    scale: .5,
                    status: 'normal',
                    image: '',
                    url: '',
                    x: 235,
                    y: 22
                }
            }
        },
        "edges": {
            'official_business': {
                id: 'official_business',
                node1_id: 'elected_official',
                node2_id: 'business_ownership',
                display: {
                    label: 'Private interests (Form 700)',
                    url: '',
                    scale: 1,
                    status: 'normal',
                    arrow: false,
                    dash: null,
                    cx: -7,
                    cy: -30
                }
            },
            'official_investments': {
                id: 'official_investments',
                node1_id: 'elected_official',
                node2_id: 'investments',
                display: {
                    label: 'Private interests (Form 700)',
                    url: '',
                    scale: 1,
                    status: 'normal',
                    arrow: false,
                    dash: null,
                    cx: -7,
                    cy: -30
                }
            },
            'official_property': {
                id: 'official_property',
                node1_id: 'elected_official',
                node2_id: 'real_property',
                display: {
                    label: 'Private interests (Form 700)',
                    url: '',
                    scale: 1,
                    status: 'normal',
                    arrow: false,
                    dash: null,
                    cx: -7,
                    cy: -30
                }
            },
            'official_income': {
                id: 'official_income',
                node1_id: 'elected_official',
                node2_id: 'outside_income',
                display: {
                    label: 'Private interests (Form 700)',
                    url: '',
                    scale: 1,
                    status: 'normal',
                    arrow: false,
                    dash: null,
                    cx: -7,
                    cy: -30
                }
            },
            'official_tix': {
                id: 'official_tix',
                node1_id: 'elected_official',
                node2_id: 'event_tix',
                display: {
                    label: 'To elected official, used for public purpose',
                    url: '',
                    scale: 1,
                    status: 'normal',
                    arrow: false,
                    dash: null,
                    cx: -7,
                    cy: -30
                }
            },
            'official_gift': {
                id: 'official_gift',
                node1_id: 'elected_official',
                node2_id: 'gifts',
                display: {
                    label: 'Travel, honoraria, etc. (Form 700)',
                    url: '',
                    scale: 1,
                    status: 'normal',
                    arrow: false,
                    dash: null,
                    cx: -7,
                    cy: -30
                }
            },
            'official_legal': {
                id: 'official_legal',
                node1_id: 'elected_official',
                node2_id: 'legal_committee',
                display: {
                    label: 'Officeholder controls (Form 460)',
                    url: '',
                    scale: 1,
                    status: 'normal',
                    arrow: false,
                    dash: null,
                    cx: -7,
                    cy: -30
                }
            },
            'official_campaign': {
                id: 'official_campaign',
                node1_id: 'elected_official',
                node2_id: 'campaign_committee',
                display: {
                    label: 'Officeholder controls (Form 460)',
                    url: '',
                    scale: 1,
                    status: 'normal',
                    arrow: false,
                    dash: null,
                    cx: -7,
                    cy: -30
                }
            },
        },
        "captions": {}
    }
}