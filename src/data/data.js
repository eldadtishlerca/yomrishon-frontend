const gBoards = [
  {
    _id: 'b101',
    title: 'Yom Rishon',
    archivedAt: 1589983468418,
    createdAt: 1589983468418,
    createdBy: {
      _id: 'u101',
      fullname: 'Eldad Tishler',
      imgUrl: 'imgs/mini-user-imgs/u101.png',
    },
    members: [
      {
        _id: 'u101',
        fullname: 'Eldad Tishler',
        imgUrl: 'imgs/mini-user-imgs/u101.png',
      },
      {
        _id: 'u102',
        fullname: 'Yarden Shaul',
        imgUrl: 'imgs/mini-user-imgs/u102.png',
      },
      {
        _id: 'u103',
        fullname: 'Elon Barzani',
        imgUrl: 'imgs/mini-user-imgs/u103.png',
      },
      {
        _id: 'u104',
        fullname: 'Ori Ben Amram',
        imgUrl: 'imgs/mini-user-imgs/u104.png',
      },
    ],
    activities: [
      {
        id: 'a101',
        txt: 'Working Hours',
        createdAt: 1545145151551,
        byMember: {
          _id: 'u102',
          fullname: 'Yarden Shaul',
          imgUrl: 'imgs/mini-user-imgs/u101.png',
        },
        task: {
          id: 'c105',
          title: 'Demo data',
        },
        change: '3 Hours',
      },
      {
        id: 'a102',
        txt: 'Status',
        createdAt: 1545145141551,
        byMember: {
          _id: 'u104',
          fullname: 'Ori Ben Amram',
          imgUrl: 'imgs/mini-user-imgs/u104.png',
        },
        task: {
          id: 'c102',
          title: 'Sort Section',
        },
        change: 'Waiting for Dev',
      },
      {
        id: 'a103',
        txt: 'Deadline',
        createdAt: 1545145041551,
        byMember: {
          _id: 'u103',
          fullname: 'Elon Barzani',
          imgUrl: 'imgs/mini-user-imgs/u103.png',
        },
        task: {
          id: 'c103',
          title: 'Footer Component',
        },
        change: 1541515151515,
      },
      {
        id: 'a103',
        txt: 'Deadline',
        createdAt: 1545145041551,
        byMember: {
          _id: 'u103',
          fullname: 'Elon Barzani',
          imgUrl: 'imgs/mini-user-imgs/u103.png',
        },
        task: {
          id: 'c103',
          title: 'Footer Component',
        },
        change: 1541515151515,
      },
      {
        id: 'a104',
        txt: 'Priority',
        createdAt: 1545144031551,
        byMember: {
          _id: 'u101',
          fullname: 'Eldad Tishler',
          imgUrl: 'imgs/mini-user-imgs/u101.png',
        },
        task: {
          id: 'c104',
          title: 'Profile - User image',
        },
        change: 'Medium',
      },
    ],
    groups: [
      {
        color: 'orange',
        id: 'g101',
        title: 'Design',
        tasks: [
          {
            id: 'c101',
            title: 'Loader animation',
            membersIds: [{
              _id: 'u101',
              username: 'Eldad',
              fullname: 'Eldad Tishler',
              imgUrl: 'imgs/mini-user-imgs/u101.png'
            },
            {
              _id: 'u102',
              username: 'Yarden',
              fullname: 'Yarden Shaul',
              imgUrl: 'imgs/mini-user-imgs/u102.png'
            }],
            status: 'working-on-it',
            priority: 'high',
            deadline: 1590999817436,
            workHours: 5,
            isChecked: false,
            lastUpdated: {
              _id: 'u103',
              fullname: 'Elon Barzani',
              imgUrl: 'imgs/mini-user-imgs/u103.png',
              updatedAt: '1590999806436',
            },
            createdAt: 1590998630348,
            byMember: {
              _id: 'u102',
              username: 'Yarden',
              fullname: 'Yarden Shaul',
              imgUrl: 'imgs/mini-user-imgs/u102.png',
            },
            updates: [
              {
                id: '54HYs',
                txt: 'Finaly found a nice animation loader :)',
                createdAt: 1590999807436,
                byMember: {
                  _id: 'u103',
                  fullname: 'Elon Barzani',
                  imgUrl: 'imgs/mini-user-imgs/u101.png',
                },
              },
            ],
          },
          {
            id: 'c102',
            title: 'Sort section',
            membersIds: [{
              _id: 'u101',
              username: 'Eldad',
              fullname: 'Eldad Tishler',
              imgUrl: 'imgs/mini-user-imgs/u101.png'
            },
            {
              _id: 'u104',
              username: 'Ori',
              fullname: 'Ori Ben Amram',
              imgUrl: 'imgs/mini-user-imgs/u104.png'
            }],
            status: 'Waiting for Dev',
            priority: 'Medium',
            deadline: 1591099817436,
            workHours: 0,
            isChecked: false,
            lastUpdated: {
              _id: 'u104',
              fullname: 'Ori Ben Amram',
              imgUrl: 'imgs/mini-user-imgs/u104.png',
              updatedAt: '1591099806436',
            },
            createdAt: 1590998530348,
            byMember: {
              _id: 'u104',
              username: 'Ori',
              fullname: 'Ori Ben Amram',
              imgUrl: 'imgs/mini-user-imgs/u104.png',
            },
            updates: [
              {
                id: 'patY5',
                txt: 'Devs will be avilable soon',
                createdAt: 1590999800436,
                byMember: {
                  _id: 'u101',
                  fullname: 'Eldad Tishler',
                  imgUrl: 'imgs/mini-user-imgs/u101.png',
                },
              },
            ],
          },
          {
            id: 'c103',
            title: 'Footer component',
            membersIds: [{
              _id: 'u101',
              username: 'Eldad',
              fullname: 'Eldad Tishler',
              imgUrl: 'imgs/mini-user-imgs/u101.png'
            },
            {
              _id: 'u102',
              username: 'Yarden',
              fullname: 'Yarden Shaul',
              imgUrl: 'imgs/mini-user-imgs/u102.png'
            }],
            status: 'Working on it',
            priority: 'Medium',
            deadline: 1591099817436,
            workHours: 4,
            isChecked: false,
            lastUpdated: {
              _id: 'u101',
              fullname: 'Eldad Tishler',
              imgUrl: 'imgs/mini-user-imgs/u101.png',
              updatedAt: '1591099807536',
            },
            createdAt: 1590998530448,
            byMember: {
              _id: 'u104',
              username: 'Ori',
              fullname: 'Ori Ben Amram',
              imgUrl: 'imgs/mini-user-imgs/u104.png',
            },
            updates: [
              {
                id: '14rY5',
                txt: 'We found the perfect color template!',
                createdAt: 1590999800556,
                byMember: {
                  _id: 'u104',
                  fullname: 'Ori Ben Amram',
                  imgUrl: 'imgs/mini-user-imgs/u104.png',
                },
              },
            ],
          },
          {
            id: 'c105',
            title: 'Main section for users',
            membersIds: [{
              _id: 'u102',
              username: 'Yarden',
              fullname: 'Yarden Shaul',
              imgUrl: 'imgs/mini-user-imgs/u102.png'
            },
            {
              _id: 'u103',
              username: 'Elon',
              fullname: 'Elon Barzani',
              imgUrl: 'imgs/mini-user-imgs/u103.png'
            }],
            status: 'Waiting for Dev',
            priority: 'Low',
            deadline: 1592099817436,
            workHours: 0,
            isChecked: false,
            lastUpdated: {
              _id: 'u102',
              fullname: 'Yarden Shaul',
              imgUrl: 'imgs/mini-user-imgs/u102.png',
              updatedAt: '1591099806436',
            },
            createdAt: 1590988530348,
            byMember: {
              _id: 'u102',
              username: 'Yarden',
              fullname: 'Yarden Shaul',
              imgUrl: 'imgs/mini-user-imgs/u102.png',
            },
            updates: [],
          },
        ],
      },
      {
        color: 'purple',
        id: 'g102',
        title: 'Development',
        tasks: [
          {
            id: 'c106',
            title: 'Demo data',
            membersIds: [{
              _id: 'u101',
              username: 'Eldad',
              fullname: 'Eldad Tishler',
              imgUrl: 'imgs/mini-user-imgs/u101.png'
            },
            {
              _id: 'u102',
              username: 'Yarden',
              fullname: 'Yarden Shaul',
              imgUrl: 'imgs/mini-user-imgs/u102.png'
            },
            {
              _id: 'u103',
              username: 'Elon',
              fullname: 'Elon Barzani',
              imgUrl: 'imgs/mini-user-imgs/u103.png'
            }],
            status: 'working-on-it',
            priority: 'high',
            deadline: 1590999817436,
            workHours: 5,
            isChecked: false,
            lastUpdated: {
              _id: 'u101',
              fullname: 'Eldad Tishler',
              imgUrl: 'imgs/mini-user-imgs/u101.png',
              updatedAt: '1590999707436',
            },
            createdAt: 1590999730348,
            byMember: {
              _id: 'u101',
              username: 'Eldad',
              fullname: 'Eldad Tishler',
              imgUrl: 'imgs/mini-user-imgs/u101.png',
            },
            updates: [
              {
                id: 'o4Pds6',
                txt: 'We need to add isChecked prop for each task !!',
                createdAt: 1590999818436,
                byMember: {
                  _id: 'u103',
                  fullname: 'Elon Barzani',
                  imgUrl: 'imgs/mini-user-imgs/u103.png',
                },
              },
            ],
          },
          {
            id: 'c107',
            title: 'Profile - User image',
            membersIds: [
              {
                _id: 'u102',
                username: 'Yarden',
                fullname: 'Yarden Shaul',
                imgUrl: 'imgs/mini-user-imgs/u102.png'
              }],
            status: 'working-on-it',
            priority: 'Low',
            deadline: 1590999807436,
            workHours: 2,
            isChecked: false,
            lastUpdated: {
              _id: 'u102',
              fullname: 'Yarden Shaul',
              imgUrl: 'imgs/mini-user-imgs/u102.png',
              updatedAt: '1590999706436',
            },
            createdAt: 1590999730348,
            byMember: {
              _id: 'u102',
              username: 'Yarden',
              fullname: 'Yarden Shaul',
              imgUrl: 'imgs/mini-user-imgs/u102.png',
            },
            updates: [],
          },
          {
            id: 'c108',
            title: 'Buttons for user section',
            membersIds: [{
              _id: 'u101',
              username: 'Eldad',
              fullname: 'Eldad Tishler',
              imgUrl: 'imgs/mini-user-imgs/u101.png'
            },
            {
              _id: 'u102',
              username: 'Yarden',
              fullname: 'Yarden Shaul',
              imgUrl: 'imgs/mini-user-imgs/u102.png'
            }],
            status: 'Done',
            priority: 'Medium',
            deadline: 1590998807436,
            workHours: 3,
            isChecked: true,
            lastUpdated: {
              _id: 'u103',
              fullname: 'Elon Barzani',
              imgUrl: 'imgs/mini-user-imgs/u103.png',
              updatedAt: '1590999706436',
            },
            createdAt: 1590999730348,
            byMember: {
              _id: 'u103',
              username: 'Elon',
              fullname: 'Elon Barzani',
              imgUrl: 'imgs/mini-user-imgs/u103.png',
            },
            updates: [
              {
                id: 'Ney5s6',
                txt: 'Finaly it\'s done :))',
                createdAt: 1600999818436,
                byMember: {
                  _id: 'u103',
                  fullname: 'Elon Barzani',
                  imgUrl: 'imgs/mini-user-imgs/u103.png',
                },
              },
            ],
          },
          {
            id: 'c109',
            title: 'Filter users',
            membersIds: [{
              _id: 'u101',
              username: 'Eldad',
              fullname: 'Eldad Tishler',
              imgUrl: 'imgs/mini-user-imgs/u101.png'
            },
            {
              _id: 'u103',
              username: 'Elon',
              fullname: 'Elon Barzani',
              imgUrl: 'imgs/mini-user-imgs/u103.png'
            }],
            status: 'Waiting for QA',
            priority: 'high',
            deadline: 1590989817436,
            workHours: 10,
            isChecked: false,
            lastUpdated: {
              _id: 'u101',
              fullname: 'Eldad Tishler',
              imgUrl: 'imgs/mini-user-imgs/u101.png',
              updatedAt: '159109607436',
            },
            createdAt: 1590989720348,
            byMember: {
              _id: 'u101',
              username: 'Eldad',
              fullname: 'Eldad Tishler',
              imgUrl: 'imgs/mini-user-imgs/u101.png',
            },
            updates: [],
          },
        ],
      },
      {
        color: 'pink',
        id: 'g103',
        title: 'Bugs',
        tasks: [
          {
            id: 'c110',
            title: 'Form - signup not working',
            membersIds: [
            {
              _id: 'u103',
              username: 'Elon',
              fullname: 'Elon Barzani',
              imgUrl: 'imgs/mini-user-imgs/u103.png'
            }],
            status: 'working-on-it',
            priority: 'Medium',
            deadline: 1600999817436,
            workHours: 2,
            isChecked: true,
            lastUpdated: {
              _id: 'u103',
              fullname: 'Elon Barzani',
              imgUrl: 'imgs/mini-user-imgs/u103.png',
              updatedAt: '1601099806436',
            },
            createdAt: 1590998630348,
            byMember: {
              _id: 'u103',
              username: 'Elon',
              fullname: 'Elon Barzani',
              imgUrl: 'imgs/mini-user-imgs/u103.png',
            },
            updates: [],
          },
          {
            id: 'c111',
            title: 'Grid on mobile - sidebar out of screen',
            membersIds: [
            {
              _id: 'u102',
              username: 'Yarden',
              fullname: 'Yarden Shaul',
              imgUrl: 'imgs/mini-user-imgs/u102.png'
            }],
            status: 'Waiting for QA',
            priority: 'High',
            deadline: 1591099717336,
            workHours: 1.5,
            isChecked: false,
            lastUpdated: {
              _id: 'u102',
              fullname: 'Yarden Shaul',
              imgUrl: 'imgs/mini-user-imgs/u102.png',
              updatedAt: '1591098706436',
            },
            createdAt: 1590998530348,
            byMember: {
              _id: 'u104',
              username: 'Ori',
              fullname: 'Ori Ben Amram',
              imgUrl: 'imgs/mini-user-imgs/u102.png',
            },
            updates: [
              {
                id: 'patY5',
                txt: 'QA are on it !',
                createdAt: 1590989800436,
                byMember: {
                  _id: 'u102',
                  fullname: 'Yarden Shaul',
                  imgUrl: 'imgs/mini-user-imgs/u102.png',
                },
              },
            ],
          },
          {
            id: 'c112',
            title: 'Google integradtion',
            membersIds: [],
            status: 'No assigne',
            priority: 'Low',
            deadline: 1591109807436,
            workHours: 0,
            isChecked: false,
            lastUpdated: {
              _id: 'u104',
              fullname: 'Ori Ben Amram',
              imgUrl: 'imgs/mini-user-imgs/u104.png',
              updatedAt: '1590099707536',
            },
            createdAt: 1590998530448,
            byMember: {
              _id: 'u104',
              username: 'Ori',
              fullname: 'Ori Ben Amram',
              imgUrl: 'imgs/mini-user-imgs/u104.png',
            },
            updates: [],
          }
        ],
      },
    ],
    cmpsOrder: [
      'Assignee',
      'Status',
      'Priority',
      'Deadline',
      'Working Hours',
      'Last Updated',
    ],
  },
]

export default gBoards
