var springfieldData = {
    "title": "Springfield Influence Map",
    "graph": {
        "nodes": {
            'quimby': {
                id: 'quimby',
                display: {
                    name: 'Mayor Quimby',
                    scale: 1.5,
                    status: 'normal',
                    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Mayor_Quimby.png/220px-Mayor_Quimby.png',
                    url: '',
                    x: -30,
                    y: -80
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
                    y: -150
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
                    x: -170,
                    y: -185
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
                    x: -200,
                    y: 5
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
                    x: -20,
                    y: 70
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
                    x: 155,
                    y: 15
                }
            }
        },
        "edges": {
            1: {
                id: 1,
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
            2: {
                id: 2,
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
            3: {
                id: 3,
                node1_id: 'julius',
                node2_id: 'quimby',
                display: {
                    label: 'Campaign donation',
                    arrow: true,
                    cx: 10,
                    cy: -25
                }
            }
        },
        "captions": {}
    }
}