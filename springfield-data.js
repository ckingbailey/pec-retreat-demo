var springfieldData = {
    "title": "Springfield Influence Map",
    "graph": {
        "nodes": {
            'quimby': {
                id: 'quimby',
                display: {
                    name: 'Mayor Joseph Quimby',
                    scale: 1.5,
                    status: 'normal',
                    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Mayor_Quimby.png/220px-Mayor_Quimby.png',
                    url: '',
                    x: 0,
                    y: 0
                }
            },
            'quimby_committee': {
                id: 'quimby_committee',
                display: {
                    name: 'Mayor Quimby for Mayor 2018',
                    image: 'https://vignette.wikia.nocookie.net/simpsons/images/e/e0/Vote_quimbya.jpg/revision/latest?cb=20100424171857',
                    x: -175,
                    y: -15
                }
            },
            'quimby_project': {
                id: 'quimby_project',
                display: {
                    name: 'Children\'s Education Fund for Mayoral Aggrandizement',
                    image: '/Simpsons_06_04_P2_640x360_312576067965.jpg',
                    x: 12,
                    y: 185
                }
            },
            'lyle': {
                id: 'lyle',
                display: {
                    name: 'Lyle Lanley',
                    scale: 1,
                    status: 'normal',
                    image: 'https://vignette.wikia.nocookie.net/simpsons/images/1/15/Lyle_Lanley_Tapped_Out.png/revision/latest?cb=20180401214124',
                    url: '',
                    x: 160,
                    y: -120
                }
            },
            'julius': {
                id: 'julius',
                display: {
                    name: 'Dr. Julius Hibbert',
                    scale: 1,
                    status: 'normal',
                    image: 'https://vignette.wikia.nocookie.net/simpsons/images/6/67/Tapped_Out_Unlock_DrHibbert.png/revision/latest?cb=20141120144510',
                    url: '',
                    x: -120,
                    y: -175
                }
            },
            'manjula': {
                id: 'manjula',
                display: {
                    name: 'Manjula Nahasapeemapetilon',
                    scale: 1,
                    status: 'normal',
                    image: 'https://vignette.wikia.nocookie.net/simpsons/images/c/c7/New_Manjula_Nahasapeemapetilon_image.png/revision/latest?cb=20141207232917',
                    url: '',
                    x: -350,
                    y: 90
                }
            },
            'opposition_committee': {
                id: 'opposition_committee',
                display: {
                    name: 'Springfield for Fair & Impartial Education',
                    image: 'https://vignette.wikia.nocookie.net/simpsons/images/4/48/SpringfieldElementary3.jpg/revision/latest?cb=20100331224100',
                    x: -180,
                    y: 140
                }
            },
            'lou': {
                id: 'lou',
                display: {
                    name: 'Lou',
                    scale: 1,
                    status: 'normal',
                    image: 'https://vignette.wikia.nocookie.net/simpsons/images/1/17/Lou.png/revision/latest?cb=20130816173729',
                    url: '',
                    x: 225,
                    y: 175
                }
            },
            'plant': {
                id: 'plant',
                display: {
                    name: 'Springfield Nuclear Power Plant',
                    scale: 1,
                    status: 'normal',
                    image: 'https://vignette.wikia.nocookie.net/simpsons/images/c/c7/SmilinJoeFission.gif/revision/latest?cb=20101204223425',
                    url: '',
                    x: 235,
                    y: 22
                }
            }
        },
        "edges": {
            'lyle-quimby': {
                id: 'lyle-quimby',
                node1_id: 'lyle',
                node2_id: 'quimby',
                display: {
                    label: 'Lobbying activity',
                    url: '',
                    scale: 1,
                    status: 'normal',
                    arrow: true,
                    dash: null,
                    cx: -7,
                    cy: -30
                }
            },
            'quimby-committee': {
                id: 'quimby-committee',
                node1_id: 'quimby',
                node2_id: 'quimby_committee',
                display: {
                    label: 'Campaign committee',
                    cx: -1,
                    cy: -10
                }
            },
            'lyle-plant': {
                id: 'lyle-plant',
                node1_id: 'plant',
                node2_id: 'lyle',
                display: {
                    label: 'Funds',
                    scale: 1,
                    arrow: true,
                    cx: 20,
                    cy: 1
                }
            },
            'julius-quimby_committee': {
                id: 'julius-quimby_committee',
                node1_id: 'julius',
                node2_id: 'quimby_committee',
                display: {
                    label: 'Campaign donation',
                    arrow: true,
                    cx: -20,
                    cy: 2
                }
            }
        },
        "captions": {}
    }
}