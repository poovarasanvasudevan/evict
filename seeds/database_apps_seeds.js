
exports.seed = function(knex) {
  return knex('database_apps').del()
    .then(function () {

      return knex('database_apps').insert([
        {title: 'Tables', description: 'Tables' , icon : 'database'},
        {title: 'Forms', description: 'Forms' , icon : 'form'},
        {title: 'Function', description: 'Forms' , icon : 'code'},
        {title: 'Triggers', description: 'Forms' , icon : 'take-action'},
        {title: 'Schedulers', description: 'Schedulers' , icon : 'time'},
        {title: 'Users', description: 'Users' , icon : 'user'},
        {title: 'Group', description: 'Group' , icon : 'group-objects'},
        {title: 'File Stoeage', description: 'File Storage' , icon : 'folder-shared'},
        {title: 'Email', description: 'Email' , icon : 'comment'},
        {title: 'Web Services', description: 'Web Services' , icon : 'globe'},
      ]);
    });
};
