var data = {
    "title": "Springfield Influence Map",
    "graph": {
        "nodes": {
            "elected_official": {
                "id": "elected_official",
                "display": {
                    "name": "Elected Official",
                    "scale": 1.5,
                    "status": "normal",
                    "image": "",
                    "url": "",
                    "x": 0,
                    "y": 0
                }
            },
            "business_ownership": {
                "id": "business_ownership",
                "display": {
                    "name": "Business ownership",
                    "scale": 0.5,
                    "image": "",
                    "x": 4.045848822800494,
                    "y": 137.80297397769516,
                    "status": "normal"
                }
            },
            "investments": {
                "id": "investments",
                "display": {
                    "name": "Investments",
                    "scale": 0.5,
                    "image": "",
                    "x": 89.71995043370508,
                    "y": 189.1635687732342,
                    "status": "normal"
                }
            },
            "real_property": {
                "id": "real_property",
                "display": {
                    "name": "Real property",
                    "scale": 0.5,
                    "status": "normal",
                    "image": "",
                    "url": "",
                    "x": 112.47583643122677,
                    "y": 108.5353159851301
                }
            },
            "event_tix": {
                "id": "event_tix",
                "display": {
                    "name": "Free event tickets",
                    "scale": 0.5,
                    "status": "normal",
                    "image": "",
                    "url": "",
                    "x": -133.27881040892194,
                    "y": 169.55018587360593
                }
            },
            "outside_income": {
                "id": "outside_income",
                "display": {
                    "name": "Outside income sources",
                    "scale": 0.5,
                    "status": "normal",
                    "image": "",
                    "url": "",
                    "x": 207.71003717472115,
                    "y": 128.43866171003717
                }
            },
            "gifts": {
                "id": "gifts",
                "display": {
                    "name": "Gifts",
                    "scale": 0.5,
                    "image": "",
                    "x": -199.56877323420073,
                    "y": 100.86245353159852,
                    "status": "normal"
                }
            },
            "campaign_committee": {
                "id": "campaign_committee",
                "display": {
                    "name": "Campaign committees",
                    "scale": 0.5,
                    "status": "normal",
                    "image": "",
                    "url": "",
                    "x": 232.4024143612971,
                    "y": -149.37249051655618
                }
            },
            "legal_committee": {
                "id": "legal_committee",
                "display": {
                    "name": "Legal defense committees",
                    "scale": 0.5,
                    "status": "normal",
                    "image": "",
                    "url": "",
                    "x": 235,
                    "y": 22
                }
            },
            "spouse": {
                "id": "spouse",
                "display": {
                    "name": "Official's spouse/family",
                    "scale": 0.5,
                    "status": "normal",
                    "image": "",
                    "url": "",
                    "x": 250,
                    "y": 120
                }
            },
            "business": {
                "id": "business",
                "display": {
                    "name": "Business and industry groups",
                    "scale": 1,
                    "x": -275,
                    "y": 120,
                    "status": "normal"
                }
            },
            "4JgbfXyYL": {
                "id": "4JgbfXyYL",
                "display": {
                    "x": -373.99999999999994,
                    "y": 0.6666666666666643,
                    "scale": 1,
                    "status": "normal",
                    "name": "Lobbyists"
                }
            }
        },
        "edges": {
            "official_business": {
                "id": "official_business",
                "node1_id": "elected_official",
                "node2_id": "business_ownership",
                "display": {
                    "label": "Private interests (Form 700)",
                    "url": "",
                    "scale": 1,
                    "status": "normal",
                    "arrow": false,
                    "dash": null,
                    "cx": -7,
                    "cy": -30,
                    "x1": 0,
                    "y1": 0,
                    "x2": 4.045848822800494,
                    "y2": 137.80297397769516,
                    "s1": 1.5,
                    "s2": 0.5
                }
            },
            "official_investments": {
                "id": "official_investments",
                "node1_id": "elected_official",
                "node2_id": "investments",
                "display": {
                    "label": "Private interests (Form 700)",
                    "url": "",
                    "scale": 1,
                    "status": "normal",
                    "arrow": false,
                    "dash": null,
                    "cx": -7,
                    "cy": -30,
                    "x1": 0,
                    "y1": 0,
                    "x2": 89.71995043370508,
                    "y2": 189.1635687732342,
                    "s1": 1.5,
                    "s2": 0.5
                }
            },
            "official_property": {
                "id": "official_property",
                "node1_id": "elected_official",
                "node2_id": "real_property",
                "display": {
                    "label": "Private interests (Form 700)",
                    "url": "",
                    "scale": 1,
                    "status": "normal",
                    "arrow": false,
                    "dash": null,
                    "cx": -7,
                    "cy": -30,
                    "x1": 0,
                    "y1": 0,
                    "x2": 112.47583643122677,
                    "y2": 108.5353159851301,
                    "s1": 1.5,
                    "s2": 0.5
                }
            },
            "official_income": {
                "id": "official_income",
                "node1_id": "elected_official",
                "node2_id": "outside_income",
                "display": {
                    "label": "Private interests (Form 700)",
                    "url": "",
                    "scale": 1,
                    "status": "normal",
                    "arrow": false,
                    "dash": null,
                    "cx": -7,
                    "cy": -30,
                    "x1": 0,
                    "y1": 0,
                    "x2": 207.71003717472115,
                    "y2": 128.43866171003717,
                    "s1": 1.5,
                    "s2": 0.5
                }
            },
            "official_tix": {
                "id": "official_tix",
                "node1_id": "elected_official",
                "node2_id": "event_tix",
                "display": {
                    "label": "To elected official, used for public purpose",
                    "url": "",
                    "scale": 1,
                    "status": "normal",
                    "arrow": false,
                    "dash": null,
                    "cx": -7,
                    "cy": -30,
                    "x1": 0,
                    "y1": 0,
                    "x2": -133.27881040892194,
                    "y2": 169.55018587360593,
                    "s1": 1.5,
                    "s2": 0.5
                }
            },
            "official_gift": {
                "id": "official_gift",
                "node1_id": "elected_official",
                "node2_id": "gifts",
                "display": {
                    "label": "Travel, honoraria, etc. (Form 700)",
                    "url": "",
                    "scale": 1,
                    "status": "normal",
                    "arrow": false,
                    "dash": null,
                    "cx": -7,
                    "cy": -30,
                    "x1": 0,
                    "y1": 0,
                    "x2": -199.56877323420073,
                    "y2": 100.86245353159852,
                    "s1": 1.5,
                    "s2": 0.5
                }
            },
            "official_legal": {
                "id": "official_legal",
                "node1_id": "elected_official",
                "node2_id": "legal_committee",
                "display": {
                    "label": "Officeholder controls (Form 460)",
                    "url": "",
                    "scale": 1,
                    "status": "normal",
                    "arrow": false,
                    "dash": null,
                    "cx": -7,
                    "cy": -30,
                    "x1": 0,
                    "y1": 0,
                    "x2": 235,
                    "y2": 22,
                    "s1": 1.5,
                    "s2": 0.5
                }
            },
            "official_campaign": {
                "id": "official_campaign",
                "node1_id": "elected_official",
                "node2_id": "campaign_committee",
                "display": {
                    "label": "Officeholder controls (Form 460)",
                    "url": "",
                    "scale": 1,
                    "status": "normal",
                    "arrow": false,
                    "dash": null,
                    "cx": -7,
                    "cy": -30,
                    "x1": 0,
                    "y1": 0,
                    "x2": 232.4024143612971,
                    "y2": -149.37249051655618,
                    "s1": 1.5,
                    "s2": 0.5
                }
            },
            "income_spouse": {
                "id": "income_spouse",
                "node1_id": "outside_income",
                "node2_id": "spouse",
                "display": {
                    "label": "Private interests (Form 700)",
                    "url": "",
                    "scale": 1,
                    "status": "normal",
                    "arrow": false,
                    "dash": null,
                    "cx": -7,
                    "cy": -30,
                    "x1": 207.71003717472115,
                    "y1": 128.43866171003717,
                    "x2": 250,
                    "y2": 120,
                    "s1": 0.5,
                    "s2": 0.5
                }
            },
            "business_official": {
                "id": "business_official",
                "node1_id": "business",
                "node2_id": "elected_official",
                "display": {
                    "label": "Donation request (Form 803)",
                    "url": "",
                    "scale": 1,
                    "status": "normal",
                    "arrow": false,
                    "dash": true,
                    "cx": -7,
                    "cy": -30,
                    "x1": -275,
                    "y1": 120,
                    "x2": 0,
                    "y2": 0,
                    "s1": 1,
                    "s2": 1.5
                }
            },
            "business_gifts": {
                "id": "business_gifts",
                "node1_id": "business",
                "node2_id": "gifts",
                "display": {
                    "label": "Speaking engagements, conferences, etc. (Form 803)",
                    "url": "",
                    "scale": 1,
                    "status": "normal",
                    "arrow": false,
                    "dash": null,
                    "cx": -7,
                    "cy": -30,
                    "x1": -275,
                    "y1": 120,
                    "x2": -199.56877323420073,
                    "y2": 100.86245353159852,
                    "s1": 1,
                    "s2": 0.5
                }
            },
            "NkSOMm1tU": {
                "id": "NkSOMm1tU",
                "display": {
                    "scale": 1,
                    "arrow": true,
                    "status": "normal",
                    "label": "Explicit contributions (Lobbyist report)",
                    "x1": -373.99999999999994,
                    "y1": 0.6666666666666643,
                    "x2": -275,
                    "y2": 120,
                    "s1": 1,
                    "s2": 1,
                    "dash": true,
                    "cx": 31.96666666666667,
                    "cy": -26.283333333333328
                },
                "node1_id": "4JgbfXyYL",
                "node2_id": "business"
            }
        },
        "captions": {}
    }
}