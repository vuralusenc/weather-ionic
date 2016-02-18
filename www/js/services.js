angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Adana',
    lastText: 'You on your way?',
    face: './img/diyarbakir.png'
  }, {
    id: 1,
    name: 'Ankara',
    lastText: 'Hey, it\'s me',
    face: './img/bakir.png'
  }, {
    id: 2,
    name: 'Antalya',
    lastText: 'I should buy a boat',
    face: './img/antalya.png'
  }, {
    id: 3,
    name: 'Aydın',
    lastText: 'Look at my mukluks!',
    face: './img/aydin.png'
  }, {
    id: 4,
    name: 'Balıkesir',
    lastText: 'This is wicked good ice cream.',
    face: './img/denizli.png'
  }, {
    id: 5,
    name: 'Bursa',
    lastText: 'This is wicked good ice cream.',
    face: './img/hacivat.png'
  }, {
    id: 6,
    name: 'Çanakkale',
    lastText: 'This is wicked good ice cream.',
    face: './img/canakkale.png'
  }, {
    id: 7,
    name: 'Diyarbakır',
    lastText: 'This is wicked good ice cream.',
    face: './img/agri.png'
  }, {
    id: 8,
    name: 'Edirne',
    lastText: 'This is wicked good ice cream.',
    face: './img/kapadokya.png'
  }, {
    id: 9,
    name: 'Erzurum',
    lastText: 'This is wicked good ice cream.',
    face: './img/cay.png'
  }, {
    id: 10,
    name: 'Eskişehir',
    lastText: 'This is wicked good ice cream.',
    face: './img/mygla.png'
  }, {
    id: 11,
    name: 'Gaziantep',
    lastText: 'This is wicked good ice cream.',
    face: ''
  }, {
    id: 12,
    name: 'Hatay',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }, {
    id: 13,
    name: 'Isparta',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }, {
    id: 14,
    name: 'İstanbul',
    lastText: 'This is wicked good ice cream.',
    face: './img/istanbul.png'
  }, {
    id: 15,
    name: 'İzmir',
    lastText: 'This is wicked good ice cream.',
    face: './img/izmir.png'
  }, {
    id: 16,
    name: 'Kars',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  },{
  id: 17,
  name: 'Konya',
  lastText: 'This is wicked good ice cream.',
  face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
},{
  id: 18,
  name: 'Trabzon',
  lastText: 'This is wicked good ice cream.',
  face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
},{
  id: 19,
  name: 'Van',
  lastText: 'This is wicked good ice cream.',
  face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
},{
  id: 20,
  name: 'Mus',
  lastText: 'This is wicked good ice cream.',
  face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
}
];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
